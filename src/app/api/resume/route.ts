import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { sendTelegramAlert } from "@/lib/telegram";

export async function GET(request: Request) {
  await sendTelegramAlert("Resume download clicked");

  const filePath = path.join(process.cwd(), "public", "resume.txt");
  try {
    const fileBuffer = await readFile(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'attachment; filename="resume.txt"',
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume not found." }, { status: 404 });
  }
}
