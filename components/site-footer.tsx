import { contactLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Тимур Громов</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
            Пересборка сайта на собственном стеке с сохранением визуального характера, контента и готовности
            к дальнейшему подключению форм и видео.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
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
