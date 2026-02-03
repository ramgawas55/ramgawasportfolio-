import { NextResponse } from "next/server";
import { sendTelegramAlert } from "@/lib/telegram";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (message.length < 12) {
    return NextResponse.json(
      { error: "Message should be at least 12 characters." },
      { status: 400 }
    );
  }

  const recipient = process.env.CONTACT_EMAIL ?? "hello@ramgawas.dev";

  await sendTelegramAlert(
    ["New contact form submission", `Name: ${name}`, `Email: ${email}`, "", message].join(
      "\n"
    )
  );

  return NextResponse.json({
    success: true,
    recipient,
    status: "Message queued for delivery.",
  });
}
