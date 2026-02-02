"use client";

import { useEffect } from "react";

export default function KeyboardNavigator() {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || target.isContentEditable) {
        return;
      }

      if (event.key === "j") {
        window.scrollBy({ top: 120, behavior: "smooth" });
      }
      if (event.key === "k") {
        window.scrollBy({ top: -120, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return null;
}
