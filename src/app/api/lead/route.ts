import { NextResponse } from "next/server";
import { sendTelegramAlert } from "@/lib/telegram";

type LeadPayload = {
  email?: string;
  url?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const email = payload.email?.trim() ?? "";
    const url = payload.url?.trim() ?? "Unknown Page";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get("user-agent") || "Unknown Browser";
    const timestamp = new Date().toISOString();

    const message = [
      "🚨 *New Portfolio Lead*",
      `📧 Email: \`${email}\``,
      `🔗 Page: ${url}`,
      `🕒 Time: ${timestamp}`,
      `💻 User Agent: ${userAgent}`,
    ].join("\n");

    // The existing sendTelegramAlert function handles sending but doesn't throw or return status,
    // so we just await it. It catches its own errors silently, returning void.
    await sendTelegramAlert(message);

    return NextResponse.json({
      success: true,
      status: "Lead captured successfully.",
    });
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
