"use client";

import { ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import KeyboardNavigator from "@/components/KeyboardNavigator";

export default function ClientProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const trackedPaths = new Set(["/", "/projects", "/contact"]);
    if (!trackedPaths.has(pathname)) {
      return;
    }
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "page_view", path: pathname }),
    }).catch(() => {});
  }, [pathname]);

  return (
    <>
      <KeyboardNavigator />
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0d0d0d",
            color: "#ffffff",
            border: "1px solid #1a1a1a",
          },
        }}
      />
    </>
  );
}
