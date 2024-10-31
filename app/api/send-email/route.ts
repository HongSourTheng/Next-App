import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

//just testing not create this code or api endpoint in real world projects
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "@example.com",
    to: "thenghongsour@gmail.com",
    subject: "testing",
    react: WelcomeTemplate({ myName: "hongsour" }),
  });
  return NextResponse.json({ message: "Email has been sent successfully" });
}
