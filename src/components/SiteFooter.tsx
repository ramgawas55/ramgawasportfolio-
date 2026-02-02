import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#1f2a20]/70 bg-[#0b0f0b]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[#8aa18a] md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-xs uppercase tracking-[0.2em]">
          Built on Linux-grade reliability.
        </div>
        <div className="flex gap-6">
          <Link
            href="/terminal"
            className="text-[#4dff8a] transition hover:text-[#ff2d55]"
          >
            Terminal Mode
          </Link>
          <Link
            href="/projects"
            className="text-[#4dff8a] transition hover:text-[#ff2d55]"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="text-[#4dff8a] transition hover:text-[#ff2d55]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
