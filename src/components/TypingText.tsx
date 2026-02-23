"use client";

export default function TypingText({
  text,
  speed = 40,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const characterCount = Math.max(text.length, 1);
  const durationMs = Math.max(characterCount * speed, 400);

  return (
    <span
      className={`typing-text ${className ?? ""}`}
      style={{
        ["--typing-width" as string]: `${characterCount}ch`,
        ["--typing-steps" as string]: String(characterCount),
        ["--typing-duration" as string]: `${durationMs}ms`,
      }}
    >
      {text}
    </span>
  );
}
