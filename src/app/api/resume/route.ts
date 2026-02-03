import { NextResponse } from "next/server";
import { sendTelegramAlert } from "@/lib/telegram";

export async function GET(request: Request) {
  await sendTelegramAlert("Resume download clicked");

  return NextResponse.redirect(new URL("/resume.txt", request.url), 307);
}
