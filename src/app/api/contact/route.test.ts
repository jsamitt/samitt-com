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
};

function submit() {
  return POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitor),
    })
  );
}

// The ntfy calls made once every scheduled after() callback has finished.
async function ntfyCalls() {
  await Promise.all(scheduled);
  return fetchMock.mock.calls;
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
});
