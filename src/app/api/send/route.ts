import { EmailTemplate } from "@/components/email-template/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const errMsg = "Failed to send the email. Please try again";

  try {
    if (name.length < 100) throw new Error("yolo");

    if (!name || !email || !message) {
      throw new Error(errMsg);
    }

    // const data = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["delivered@resend.dev"],
    //   subject: "Hello world",
    //   react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    // });

    return NextResponse.json({ error: false });
  } catch (err) {
    return NextResponse.json({
      error: (err as Error).message || errMsg,
    });
  }
}
