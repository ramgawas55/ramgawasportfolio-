"use client";

import { ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import KeyboardNavigator from "@/components/KeyboardNavigator";

export default function ClientProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
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
            background: "#121a14",
            color: "#e6ffe9",
            border: "1px solid #1f2a20",
          },
        }}
      />
    </>
  );
}
