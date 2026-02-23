import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1a1a]/70 bg-[#000000]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[#c9c9c9] md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-xs uppercase tracking-[0.2em]">
          Built on Linux-grade reliability.
        </div>
        <div className="flex gap-6">
          <Link
            href="/terminal"
            className="neon-underline text-[#ff3b30] transition hover:text-[#ff4d22]"
          >
            Terminal Mode
          </Link>
          <Link
            href="/projects"
            className="neon-underline text-[#ff3b30] transition hover:text-[#ff4d22]"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="neon-underline text-[#ff3b30] transition hover:text-[#ff4d22]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
