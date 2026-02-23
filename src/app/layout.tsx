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
  title: "Ram Sunil Gawas | Linux System Administrator & DevOps Engineer",
  description:
    "Linux System Administrator & DevOps Engineer portfolio focused on secure, scalable, automated infrastructure.",
  keywords: [
    "Linux System Administrator",
    "DevOps Engineer",
    "AWS",
    "Terraform",
    "Ansible",
    "CI/CD",
    "GitHub Actions",
    "Next.js Portfolio",
  ],
  metadataBase: new URL("https://ramgawas55.in"),
  openGraph: {
    title: "Ram Sunil Gawas | Linux System Administrator & DevOps Engineer",
    description:
      "Professional Linux + DevOps portfolio with terminal-inspired UI and motion.",
    url: "https://ramgawas55.in",
    siteName: "Ram Sunil Gawas Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Sunil Gawas | Linux System Administrator & DevOps Engineer",
    description:
      "Linux + DevOps portfolio with neon blue/purple terminal aesthetics.",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-[#000000] text-[#ffffff] antialiased`}
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
