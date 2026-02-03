import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { sendTelegramAlert } from "@/lib/telegram";

type TrackPayload = {
  event?: string;
  path?: string;
};

const trackedPaths = new Set(["/", "/projects", "/contact"]);
const rateLimitByIp = new Map<string, number>();
const rateLimitWindowMs = 60 * 1000;

export async function POST(request: Request) {
  const payload = (await request.json()) as TrackPayload;
  const event = payload.event?.trim() || "page_view";
  const path = payload.path?.trim() ?? "";

  if (!trackedPaths.has(path)) {
    return NextResponse.json({ success: true });
  }

  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const ip =
    forwardedFor.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const lastSeen = rateLimitByIp.get(ip);

  if (lastSeen && now - lastSeen < rateLimitWindowMs) {
    return NextResponse.json({ success: true });
  }

  rateLimitByIp.set(ip, now);

  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const timestamp = new Date(now).toISOString();
  const contactEmail = process.env.CONTACT_EMAIL ?? profile.email;
  const lines = [
    "Visitor alert",
    `Event: ${event}`,
    `Path: ${path}`,
    `IP: ${ip}`,
    `User-Agent: ${userAgent}`,
    `Time: ${timestamp}`,
    `Email: ${contactEmail}`,
  ];

  await sendTelegramAlert(lines.join("\n"));

  return NextResponse.json({ success: true });
}
