import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseCards, heroFacts, processSteps, reviewCards, usefulCards } from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="page-shell min-h-screen overflow-x-clip">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <section id="hero" className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="section-card flex flex-col justify-between gap-10 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="section-label mb-0">Свадебный ведущий</span>
                <span className="section-label mb-0 border-white/8 bg-white/[0.03] text-white/52">
                  Москва и область
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.05em] text-paper sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
                Проведу вашу свадьбу в Москве и области
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Тимур Громов. Сценарий, ритм, шутки и тишина в нужный момент. Собираю праздник так, чтобы он
                запоминался теплым и живым, без ощущения шаблона.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#contacts" className="button-primary">
                Обсудить дату
              </Link>
              <Link href="#useful" className="button-secondary">
                Смотреть полезности
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroFacts.map((item) => (
                <article key={item.title} className="glass-card p-4">
                  <p className="text-sm font-medium text-paper">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/62">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="section-card overflow-hidden p-4">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#ff4d07]">
                <Image
                  src="/media/hero-banner.jpg"
                  alt="Тимур Громов — свадебный ведущий"
                  width={1680}
                  height={968}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
              <article id="about" className="section-card overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/media/portrait-bw.jpg"
                    alt="Черно-белый портрет Тимура Громова"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="section-label">Обо мне</p>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-paper sm:text-[2rem]">Тимур Громов</h2>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    Ведущий, который держит темп вечера, умеет разговаривать с гостями и не превращает свадьбу
                    в механическую программу.
                  </p>
                </div>
              </article>

              <article className="section-card overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/media/wedding-stage.jpg"
                    alt="Тимур Громов на сцене с микрофоном"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="section-label">Как я веду</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-paper">Живой сценарий без перегруза</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    Подстраиваюсь под гостей, оставляю пространство для естественных моментов и не душу вечер
                    лишними формальностями.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="useful" className="mt-8 space-y-6 lg:mt-10">
          <SectionHeading
            eyebrow="Полезности"
            title="Материалы, которые можно собрать в отдельные блоки"
            copy="Сюда позже переедут вебинар, подборка видео, ответы на вопросы и другие материалы, которые были в Tilda-структуре."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {usefulCards.map((item) => (
              <article key={item.title} className="section-card p-6">
                <p className="section-label">{item.eyebrow}</p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="section-card p-6 sm:p-8">
            <SectionHeading
              eyebrow="Порядок"
              title="Сначала каркас, потом перенос секций"
              copy="Эту последовательность мы уже зафиксировали в task plan: сначала первый экран и базовый layout, потом остальной контент."
            />
            <ol className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-6 text-white/76">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-4">
            <article className="section-card p-6 sm:p-8">
              <p className="section-label">Цены</p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-paper">Сюда можно перенести прайс и пакеты</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
                В текущей версии не ломаем структуру лишними деталями. Прайс-блок и кнопки появятся после переноса
                исходных секций из Tilda-экспорта.
              </p>
            </article>

            <article id="cases" className="section-card overflow-hidden">
              <div className="grid gap-4 p-4 sm:p-5">
                {caseCards.map((card, index) => (
                  <div
                    key={card.title}
                    className="grid gap-4 rounded-[22px] border border-white/8 bg-black/20 p-4 sm:grid-cols-[180px_1fr]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/8 bg-white/5">
                      <Image
                        src={index === 0 ? "/media/selfie-group.jpg" : "/media/wedding-stage.jpg"}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="section-label">Кейс</p>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-paper">{card.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/66">{card.copy}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          Живые гости
                        </span>
                        <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          Без лишнего официоза
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article id="faq" className="section-card p-6 sm:p-8">
              <p className="section-label">FAQ</p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-paper">Популярные вопросы перенесём позже</h3>
              <p className="mt-4 text-sm leading-7 text-white/66">
                Сейчас здесь каркас под блок вопросов. На следующем этапе можно разложить ответы, как в исходном
                Tilda-сайте, без перегрузки страницы.
              </p>
            </article>
          </div>
        </section>

        <section id="reviews" className="mt-8">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="section-card overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/media/portrait-bw.jpg" alt="Тимур Громов" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="section-label">Отзывы</p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-paper">
                  Живые впечатления гостей и пар
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  Этот блок нужен на одном лендинге, чтобы не уводить пользователя на отдельную страницу и не
                  ломать сценарий просмотра.
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              {reviewCards.map((item) => (
                <blockquote key={item.author} className="section-card p-6">
                  <p className="text-lg leading-8 text-paper">“{item.quote}”</p>
                  <footer className="mt-5 text-sm uppercase tracking-[0.26em] text-white/48">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-8">
          <div className="section-card p-6 sm:p-8">
            <SectionHeading
              eyebrow="Контакты"
              title="Лиды потом можно отправлять в админку и Telegram"
              copy="Форма будет отдельным шагом, но уже сейчас видно, куда вести пользователя и какие контакты показывать на первом экране."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href="mailto:Timurgromov.showman@gmail.com">
                Написать на почту
              </a>
              <a className="button-secondary" href="https://t.me/">
                Открыть Telegram
              </a>
              <a className="button-secondary" href="tel:+79253900772">
                Позвонить
              </a>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
