import { after, NextResponse } from "next/server";
import { Resend } from "resend";

// Limits are mirrored as maxLength on the form fields in Contact.tsx, so a
// real visitor can't type past them and hit the error.
const LIMITS = { name: 100, company: 100, email: 254, message: 5000 };
// One plain address: no whitespace, control or format characters, nothing that
// could make Reply-To a list or a display name (,;<>"():[]\), and a dot in the
// domain with no empty labels at the end.
const EMAIL_SHAPE =
  /^[^\s@,;<>"():[\]\\\p{Cc}\p{Cf}]+@[^\s@,;<>"():[\]\\\p{Cc}\p{Cf}]+\.[^\s@,;<>"():[\]\\\p{Cc}\p{Cf}.]+$/u;

// Name and company go into the subject line, so they must be one line: control
// characters and Unicode line/paragraph separators become spaces.
function singleLine(value: string) {
  return value.replace(/[\p{Cc}\u2028\u2029]+/gu, " ").trim();
}

// True when nothing would show: only whitespace and invisible format characters
// (zero-width spaces and the like). Used for the emptiness check only, because
// format characters also include joiners and direction marks that real names
// and emoji need, so they stay in what's sent.
function isBlank(value: string) {
  return value.replace(/[\s\p{Cf}]+/gu, "") === "";
}

function invalid() {
  return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
}

// Phone alert through ntfy when a real visitor's message didn't go through, so
// Jeff can fix the cause and reply before the lead goes cold. Runs after the
// response via after(), so a slow or failing ntfy never changes what the
// visitor sees. Reason, name and email go in the body: a non-ASCII name in a
// header could break the request. Never the message or company, and Cache: no
// so ntfy doesn't keep it. The topic is the secret, so it's never logged.
function alertFailure(reason: string, name: string, email: string) {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) {
    console.warn("contact alerts off: NTFY_TOPIC not set");
    return;
  }
  after(async () => {
    try {
      const res = await fetch(`https://ntfy.sh/${encodeURIComponent(topic)}`, {
        method: "POST",
        headers: {
          Title: "Contact form failed",
          Priority: "high",
          Cache: "no",
        },
        body: `${reason}\nFrom: ${name} <${email}>`,
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) {
        console.error(`Contact alert not sent: ntfy returned ${res.status}`);
      }
    } catch (err) {
      // Name only: a fetch error's message could carry the URL, and the topic.
      console.error(
        "Contact alert not sent:",
        err instanceof Error ? err.name : "unknown error"
      );
    }
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return invalid();
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return invalid();
  }
  const fields = body as Record<string, unknown>;

  // Honeypot: "contact_ref" is unreachable for people (inert, clipped, no name
  // or label an autofill tool maps), so anything in it is a bot. Pretend it
  // worked so the bot learns nothing, and send nothing. Anything a real person
  // could trip (below) gets the visible error instead.
  if (
    typeof fields.contact_ref === "string" &&
    fields.contact_ref.trim() !== ""
  ) {
    return NextResponse.json({ success: true });
  }

  const { name, email, company = "", message } = fields;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof company !== "string" ||
    typeof message !== "string"
  ) {
    return invalid();
  }

  const cleanName = singleLine(name);
  const cleanCompany = singleLine(company);
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  if (
    isBlank(cleanName) ||
    cleanName.length > LIMITS.name ||
    cleanCompany.length > LIMITS.company ||
    cleanEmail.length > LIMITS.email ||
    !EMAIL_SHAPE.test(cleanEmail) ||
    cleanMessage.length < 1 ||
    cleanMessage.length > LIMITS.message
  ) {
    return invalid();
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    alertFailure("API key not set", cleanName, cleanEmail);
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    // Resend doesn't throw when the API rejects the email or can't be reached:
    // it returns { data: null, error }. That's a failure, same as a throw.
    const { error } = await resend.emails.send({
      from: "Samitt.co Contact <jeff@samitt.co>",
      to: "jsamitt@gmail.com",
      replyTo: cleanEmail,
      subject: `Contact form: ${cleanName}${cleanCompany ? ` from ${cleanCompany}` : ""}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Company: ${cleanCompany || "N/A"}`,
        "",
        cleanMessage,
      ].join("\n"),
    });
    if (error) {
      console.error("Resend rejected the email:", error.name, error.message);
      alertFailure(`${error.name}: ${error.message}`, cleanName, cleanEmail);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    alertFailure(
      error instanceof Error ? `${error.name}: ${error.message}` : String(error),
      cleanName,
      cleanEmail
    );
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
