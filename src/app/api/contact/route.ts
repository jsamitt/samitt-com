import { NextResponse } from "next/server";
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
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
