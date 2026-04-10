import { contactLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-paper">Тимур Громов</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
            Пересборка сайта на собственном стеке с сохранением визуального характера и контента.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contactLinks.map((item) => (
            <a key={item.label} href={item.href} className="button-secondary">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
