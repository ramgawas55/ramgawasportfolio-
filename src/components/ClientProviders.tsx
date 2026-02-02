"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import KeyboardNavigator from "@/components/KeyboardNavigator";

export default function ClientProviders({ children }: { children: ReactNode }) {
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
