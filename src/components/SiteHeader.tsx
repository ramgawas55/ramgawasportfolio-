import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/terminal", label: "Terminal" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1a1a1a]/70 bg-[#000000]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-[#ff3b30]"
        >
          <span className="text-[#ff4d22]">rg</span>
          <span className="text-[#ffffff]">/</span>
          <span>shell</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="neon-underline text-sm uppercase tracking-[0.2em] text-[#c9c9c9] transition hover:text-[#ff3b30]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-[#ff4d22]/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ff4d22] transition hover:bg-[#ff4d22] hover:text-[#000000]"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
