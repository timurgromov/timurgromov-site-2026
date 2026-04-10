import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#1c1b1a]/90 pt-3 backdrop-blur-md">
      <div className="mx-auto max-w-[1920px] px-2 sm:px-5 lg:px-8">
        <div className="flex items-center rounded-b-[10px] bg-[#fa4604] px-3 py-2 text-[#1c1b1a] sm:px-5 sm:py-3">
          <Link href="#hero" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative h-7 w-7 overflow-hidden rounded-[4px] sm:h-[34px] sm:w-[34px]">
              <Image src="/tilda/logo-avatar.jpg" alt="" fill className="object-cover" />
            </div>
            <Image
              src="/tilda/logo.svg"
              alt="Тимур Громов"
              width={147}
              height={34}
              className="h-auto w-[120px] sm:w-[147px]"
              priority
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[20px] font-medium lowercase tracking-[-0.01em] transition hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="#contacts"
            className="ml-auto inline-flex h-[35px] items-center justify-center rounded-[8px] bg-[#1c1b1a] px-4 text-[13px] text-[#fffefa] transition hover:bg-black sm:hidden"
          >
            Контакты
          </a>

          <a
            href="#zeropopup-menu"
            className="ml-4 hidden text-[14px] font-medium lowercase transition hover:opacity-60 sm:inline xl:hidden"
          >
            меню
          </a>
        </div>
      </div>
    </header>
  );
}
