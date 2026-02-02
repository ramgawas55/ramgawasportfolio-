import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TransitionProvider from "@/components/TransitionProvider";
import ClientProviders from "@/components/ClientProviders";
import BackgroundWeb from "@/components/BackgroundWeb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Sunil Gawas | Full-Stack Engineer",
  description:
    "Linux-first full-stack portfolio blending terminal aesthetics with high-performance UI systems.",
  keywords: [
    "Full-Stack Engineer",
    "Linux",
    "Next.js Portfolio",
    "React",
    "DevOps",
  ],
  metadataBase: new URL("https://ramgawas.dev"),
  openGraph: {
    title: "Ram Sunil Gawas | Full-Stack Engineer",
    description:
      "Production-ready portfolio inspired by Linux terminals and Spider-Man motion design.",
    url: "https://ramgawas.dev",
    siteName: "Ram Sunil Gawas Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Sunil Gawas | Full-Stack Engineer",
    description:
      "Linux-first full-stack portfolio with terminal-inspired UI and motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b0f0b] text-[#e6ffe9] antialiased`}
      >
        <ClientProviders>
          <BackgroundWeb />
          <TransitionProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </TransitionProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
