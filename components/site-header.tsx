import Link from "next/link";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#0f1117]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#hero" className="flex flex-col gap-0.5 text-paper">
          <span className="text-[10px] uppercase tracking-[0.42em] text-white/42">Свадебный ведущий</span>
          <span className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Тимур Громов</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-5 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/66 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+79253900772"
          className="button-secondary ml-auto hidden shrink-0 border-white/12 px-5 py-2.5 text-sm xl:inline-flex"
        >
          +7 925 390 07 72
        </a>
      </div>
    </header>
  );
}
