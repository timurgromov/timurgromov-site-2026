import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { highlights, processSteps } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="page-shell min-h-screen">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <section id="hero" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="section-card flex flex-col justify-between p-8 sm:p-10">
            <div className="max-w-3xl">
              <p className="section-label">timurgromov.ru 2026</p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] text-paper sm:text-7xl">
                Собственный сайт вместо Tilda, с видео и лидами под контролем.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Локальный scaffold уже позволяет собрать первый экран, подключить фоновое видео, а потом
                безболезненно развернуть GitHub Pages и медиа-схему под реальные файлы.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#services" className="button-primary">
                Смотреть структуру
              </Link>
              <Link href="#contacts" className="button-secondary">
                Контакты и CTA
              </Link>
            </div>
          </div>

          <HeroVideo
            title="Короткое фоновое видео вместо плагина Tilda"
            description="Здесь будет нативный HTML5 video-компонент с loop, autoplay, muted и poster. На старте используем заглушку, потом подключим проверенный MP4 из media-схемы."
          />
        </section>

        <section id="services" className="mt-8 space-y-6">
          <SectionHeading
            eyebrow="Структура"
            title="Каркас, который уже можно расширять"
            copy="Сначала фиксируем базовую архитектуру, потом переносим секции Tilda, потом подключаем видео и форму."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="section-card p-6">
                <h3 className="text-xl font-medium text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card p-8">
            <SectionHeading
              eyebrow="Порядок"
              title="Сначала локально, потом публикация"
              copy="Именно так мы и зафиксировали в task plan: сначала рабочий каркас и первый экран, только потом GitHub Pages."
            />
            <ol className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-6 text-white/76">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div id="video" className="section-card p-8">
            <SectionHeading
              eyebrow="Видео"
              title="Тестовый MP4 перед массовым переносом"
              copy="Сначала проверяем один файл по публичной ссылке с VPN и без VPN. Если все ок, переносим все фоновые и встроенные ролики."
            />
            <div className="mt-8 rounded-[24px] border border-dashed border-white/12 bg-black/20 p-6 text-sm leading-7 text-white/66">
              Пока здесь стоит заглушка. Это место для тестового видео, которое первым пойдет в Cloud.ru Object Storage
              или, если нужно без новых расходов, на текущий VPS.
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-8">
          <div className="section-card p-8">
            <SectionHeading
              eyebrow="Контакты"
              title="Лиды потом можно отправлять в админку и Telegram"
              copy="Сейчас это просто каркас. Позже форма сможет отправлять данные в отдельный backend, который пишет в твою существующую админку и шлет уведомление в Telegram."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href="mailto:hello@example.com">
                Написать на почту
              </a>
              <a className="button-secondary" href="https://t.me/">
                Открыть Telegram
              </a>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
