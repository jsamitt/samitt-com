import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Stand-ins, so no test sends a real email or a real push. Resend's send is
// set per test; after() queues its callback so a test can wait for the alert
// it schedules; fetch records the ntfy call instead of making it.
const { send, scheduled } = vi.hoisted(() => ({
  send: vi.fn(),
  scheduled: [] as Promise<unknown>[],
}));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

vi.mock("next/server", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/server")>();
  return {
    ...actual,
    after: (callback: () => unknown) => {
      scheduled.push(Promise.resolve().then(callback));
    },
  };
});

import { POST } from "./route";

const fetchMock = vi.fn<typeof fetch>();

const visitor = {
  name: "Ann Test",
  email: "ann@example.com",
  company: "SecretCo",
  message: "SECRET MESSAGE TEXT",
  timeline: "SECRET TIMELINE",
};

function submit(fields: Record<string, unknown> = visitor) {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    })
  );
}

// The plain-text body of the one email sent.
function sentText() {
  expect(send).toHaveBeenCalledTimes(1);
  return String(send.mock.calls[0][0].text);
}

// The ntfy calls made once every scheduled after() callback has finished.
async function ntfyCalls() {
  await Promise.all(scheduled);
  return fetchMock.mock.calls;
}

// Exactly one alert: the reason and who to reply to, never the message text,
// company or timeline, and not stored by ntfy.
async function expectOneAlert(reason: string) {
  const calls = await ntfyCalls();
  expect(calls).toHaveLength(1);
  const [url, init] = calls[0];
  expect(url).toBe("https://ntfy.sh/test-topic");
  expect(init?.method).toBe("POST");
  expect(init?.headers).toMatchObject({ Cache: "no" });
  const body = String(init?.body);
  expect(body).toContain(reason);
  expect(body).toContain(visitor.name);
  expect(body).toContain(visitor.email);
  expect(body).not.toContain(visitor.message);
  expect(body).not.toContain(visitor.company);
  expect(body).not.toContain(visitor.timeline);
}

beforeEach(() => {
  vi.stubEnv("RESEND_API_KEY", "re_test");
  vi.stubEnv("NTFY_TOPIC", "test-topic");
  fetchMock.mockResolvedValue(new Response(null, { status: 200 }));
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  send.mockReset();
  fetchMock.mockReset();
  scheduled.length = 0;
});

describe("POST /api/contact send outcomes", () => {
  it("returns success and sends no alert when the email goes through", async () => {
    send.mockResolvedValue({ data: { id: "email_1" }, error: null });

    const res = await submit();

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true });
    expect(send).toHaveBeenCalledTimes(1);
    expect(await ntfyCalls()).toHaveLength(0);
  });

  // Resend 6 reports a rejected email in its return value and never throws,
  // so this is the case that used to tell the visitor it had worked (#28).
  it("returns an error and alerts when Resend rejects the email", async () => {
    send.mockResolvedValue({
      data: null,
      error: { name: "validation_error", message: "API key is invalid" },
    });

    const res = await submit();

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to send message" });
    await expectOneAlert("validation_error: API key is invalid");
  });

  it("returns an error and alerts when sending throws", async () => {
    send.mockRejectedValue(new TypeError("fetch failed"));

    const res = await submit();

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to send message" });
    await expectOneAlert("TypeError: fetch failed");
  });

  it("returns an error and alerts when the Resend key is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", undefined);

    const res = await submit();

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({
      error: "Email service not configured",
    });
    expect(send).not.toHaveBeenCalled();
    await expectOneAlert("API key not set");
  });

  it("still returns the error, and sends nothing to ntfy, when NTFY_TOPIC is unset", async () => {
    vi.stubEnv("NTFY_TOPIC", undefined);
    send.mockResolvedValue({
      data: null,
      error: { name: "validation_error", message: "API key is invalid" },
    });

    const res = await submit();

    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to send message" });
    expect(await ntfyCalls()).toHaveLength(0);
  });
});

describe("POST /api/contact timeline", () => {
  beforeEach(() => {
    send.mockResolvedValue({ data: { id: "email_1" }, error: null });
  });

  it("puts the timeline in the email when given, with reply-to the visitor", async () => {
    const res = await submit({ ...visitor, timeline: "launch by March" });

    expect(res.status).toBe(200);
    expect(sentText()).toContain("Timeline: launch by March");
    expect(send.mock.calls[0][0].replyTo).toBe(visitor.email);
  });

  it("sends without a Timeline line when none is given", async () => {
    const { timeline: _omit, ...withoutTimeline } = visitor;
    void _omit;

    const res = await submit(withoutTimeline);

    expect(res.status).toBe(200);
    expect(sentText()).not.toContain("Timeline:");
  });

  it("sends without a Timeline line when it is only whitespace", async () => {
    const res = await submit({ ...visitor, timeline: "  \n " });

    expect(res.status).toBe(200);
    expect(sentText()).not.toContain("Timeline:");
  });

  it("sends without a Timeline line when it is only invisible characters", async () => {
    const res = await submit({ ...visitor, timeline: "\u200b\u200d" });

    expect(res.status).toBe(200);
    expect(sentText()).not.toContain("Timeline:");
  });

  it("rejects a timeline over 100 characters and sends nothing", async () => {
    const res = await submit({ ...visitor, timeline: "x".repeat(101) });

    expect(res.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("accepts a timeline of exactly 100 characters", async () => {
    const res = await submit({ ...visitor, timeline: "x".repeat(100) });

    expect(res.status).toBe(200);
  });

  it("rejects a timeline that is not a string and sends nothing", async () => {
    const res = await submit({ ...visitor, timeline: 2027 });

    expect(res.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("sends a timeline with line breaks or control characters as one line", async () => {
    const res = await submit({
      ...visitor,
      timeline: "Q1\nBcc: x@evil.com\u0007\u2028soon",
    });

    expect(res.status).toBe(200);
    expect(sentText().split("\n")).toContain(
      "Timeline: Q1 Bcc: x@evil.com soon"
    );
  });
});
