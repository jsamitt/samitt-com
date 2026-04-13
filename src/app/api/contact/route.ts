import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  // TODO: Connect to an email service (Resend, SendGrid, etc.)
  // For now, log the submission and return success.
  // To enable email delivery:
  //   1. npm install resend
  //   2. Add RESEND_API_KEY to your Vercel environment variables
  //   3. Uncomment the Resend block below
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Samitt.com <noreply@samitt.com>",
  //   to: "jsamitt@gmail.com",
  //   subject: `Contact form: ${name} from ${company || "N/A"}`,
  //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\n${message}`,
  // });

  console.log("Contact form submission:", { name, email, company, message });

  return NextResponse.json({ success: true });
}
