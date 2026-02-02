"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 40,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    const characters = text.split("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayed(characters.slice(0, index).join(""));
      if (index >= characters.length) {
        window.clearInterval(interval);
      }
    }, speed);
    return () => window.clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
}
