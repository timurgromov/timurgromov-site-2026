"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuUsefulLinks, navItems, socialLinks } from "@/lib/site-content";
import { sitePath } from "@/lib/site-path";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 px-2 pt-3 sm:px-5 lg:px-8">
        <div
          className={[
            "mx-auto flex max-w-[1920px] items-center justify-between transition-all duration-300",
            isScrolled
              ? "rounded-b-[10px] bg-[#fa4604] px-3 py-2 text-[#fffefa] shadow-[0_14px_40px_rgba(0,0,0,0.18)] sm:px-5 sm:py-3"
              : "bg-transparent px-3 py-2 text-[#fffefa] sm:px-5 sm:py-3",
          ].join(" ")}
        >
          <Link href="#hero" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative h-7 w-7 overflow-hidden rounded-[4px] sm:h-[34px] sm:w-[34px]">
              <Image src={sitePath("/tilda/logo-avatar.jpg")} alt="" fill className="object-cover" />
            </div>
            <Image
              src={sitePath("/tilda/logo.svg")}
              alt="Тимур Громов"
              width={147}
              height={34}
              className="h-auto w-[120px] sm:w-[147px]"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center"
            aria-label="Открыть меню"
            aria-expanded={isOpen}
          >
            <span className="relative block h-5 w-8">
              <span className="absolute left-0 top-0 h-[2px] w-full bg-current" />
              <span className="absolute left-0 top-[9px] h-[2px] w-full bg-current" />
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-[70] transition duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-[#fa4604]" />
        <div className="relative mx-auto flex h-full max-w-[1920px] flex-col px-5 py-5 text-white sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="#hero" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="relative h-[34px] w-[34px] overflow-hidden rounded-[4px]">
                <Image src={sitePath("/tilda/logo-avatar.jpg")} alt="" fill className="object-cover" />
              </div>
              <Image src={sitePath("/tilda/logo.svg")} alt="Тимур Громов" width={147} height={34} className="h-auto w-[147px]" />
            </Link>

            <button type="button" onClick={closeMenu} className="flex h-11 w-11 items-center justify-center" aria-label="Закрыть меню">
              <span className="relative block h-6 w-8">
                <span className="absolute left-0 top-[11px] h-[2px] w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-[11px] h-[2px] w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <div className="grid flex-1 gap-10 pt-10 lg:grid-cols-[0.9fr_0.7fr_0.6fr] lg:items-center lg:pt-16">
            <nav className="flex flex-col gap-4 sm:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="font-[family-name:var(--font-display)] text-[46px] uppercase leading-[0.9] tracking-[-0.04em] sm:text-[72px] lg:text-[86px]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-5 text-[18px] leading-[1.25] sm:text-[22px] lg:space-y-7 lg:text-[24px]">
              <p className="menu-script text-[28px] sm:text-[40px] lg:text-[54px]">Тут вы найдете много полезностей...</p>
              {menuUsefulLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu} className="block max-w-[18ch] transition hover:opacity-70">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6 lg:items-start">
              <div>
                <p className="text-[18px] text-white/85 sm:text-[22px]">Я на связи с вами</p>
                <a href="tel:+79253900772" className="mt-3 block font-[family-name:var(--font-display)] text-[48px] leading-none tracking-[-0.04em] sm:text-[70px] lg:text-[88px]">
                  + 7 925 390 07 72
                </a>
              </div>

              <div className="flex items-center gap-4">
                <p className="max-w-[8ch] text-[18px] leading-[1.2] sm:text-[22px]">Ищите меня в соц. сетях</p>
                <div className="flex gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-white text-[#fa4604] transition hover:opacity-85"
                    >
                      <Image src={sitePath(item.icon)} alt="" width={24} height={24} className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
