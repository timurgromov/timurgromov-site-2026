import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { SiteHeader } from "@/components/site-header";
import { contactLinks } from "@/lib/site-content";

export default function ContactsPage() {
  return (
    <main className="page-shell min-h-screen">
      <SiteHeader />

      <PageShell
        eyebrow="Контакты"
        title="Как связаться и куда потом отправлять лиды"
        copy="Сейчас это уже не пустая заглушка: здесь видны актуальные контакты и логика будущего подключения формы к backend и Telegram."
      />

      <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <section className="section-card p-6 sm:p-8">
          <p className="section-label">Связь</p>
          <div className="space-y-4">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="block rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                <div className="text-sm uppercase tracking-[0.26em] text-white/42">{item.label}</div>
                <div className="mt-2 text-lg text-paper">{item.href.replace("mailto:", "").replace("https://", "")}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="section-card p-6 sm:p-8">
          <p className="section-label">Форма</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-paper">Здесь позже появится заявка</h2>
          <p className="mt-4 text-sm leading-7 text-white/66">
            В финальной версии эта форма будет отправлять лиды в существующую админку свадебного калькулятора и
            дублировать уведомления в Telegram через backend.
          </p>
          <div className="mt-6 grid gap-3">
            <input
              aria-label="Имя"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/30"
              placeholder="Ваше имя"
            />
            <input
              aria-label="Телефон"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/30"
              placeholder="Телефон"
            />
            <textarea
              aria-label="Комментарий"
              className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/30"
              placeholder="Расскажите о дате, площадке и формате"
            />
          </div>
          <Link href="/" className="button-primary mt-5 inline-flex">
            Отправить заявку
          </Link>
        </section>
      </div>
    </main>
  );
}
