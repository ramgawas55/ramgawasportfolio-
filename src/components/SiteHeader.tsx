import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/terminal", label: "Terminal" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1f2a20]/70 bg-[#0b0f0b]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-[#4dff8a]"
        >
          <span className="text-[#ff2d55]">rg</span>
          <span className="text-[#e6ffe9]">/</span>
          <span>shell</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-[#8aa18a] transition hover:text-[#4dff8a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-[#ff2d55]/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ff2d55] transition hover:bg-[#ff2d55] hover:text-[#0b0f0b]"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
}
