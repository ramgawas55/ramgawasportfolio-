import { NextResponse } from "next/server";
import { sendTelegramAlert } from "@/lib/telegram";

type TrackPayload = {
  event?: string;
  path?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as TrackPayload;
  const event = payload.event?.trim() ?? "";
  const path = payload.path?.trim() ?? "";

  if (!event) {
    return NextResponse.json(
      { error: "Event is required." },
      { status: 400 }
    );
  }

  const lines = ["Portfolio event", `Event: ${event}`];
  if (path) {
    lines.push(`Path: ${path}`);
  }

  await sendTelegramAlert(lines.join("\n"));

  return NextResponse.json({ success: true });
}
