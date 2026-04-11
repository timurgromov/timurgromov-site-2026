import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sitePath } from "@/lib/site-path";
import {
  aboutIntro,
  aboutStats,
  caseCards,
  heroFacts,
  principlesCards,
  processSteps,
  reviewCards,
  usefulCards,
  whyWeddingItems,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="page-shell min-h-screen overflow-x-clip">
      <SiteHeader />

      <div className="mx-auto max-w-[1920px] px-2 pb-8 sm:px-5 lg:px-8 lg:pb-10">
        <section id="hero" className="overflow-hidden rounded-b-[16px] bg-[#1f1f1d] px-2 pb-3 pt-4 sm:px-5 sm:pt-6">
          <div className="grid min-h-[calc(100vh-88px)] gap-6 xl:grid-cols-[1.22fr_0.78fr]">
            <div className="flex flex-col justify-between gap-6 pb-4">
              <div className="pt-3 sm:pt-8">
                <p className="mb-3 text-[14px] uppercase tracking-[0.08em] text-white/72 sm:mb-4 sm:text-[20px]">
                  Свадебный ведущий
                </p>
                <h1 className="hero-title max-w-[900px] text-[38px] text-paper sm:text-[66px] lg:text-[84px] xl:text-[107px]">
                  проведу
                  <br />
                  вашу свадьбу
                  <br />
                  так, чтобы
                  <br />
                  о ней вспоминали
                  <br />
                  с теплом
                </h1>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="grid gap-3 sm:grid-cols-3">
                  {heroFacts.map((item) => (
                    <article key={item.title} className="glass-card p-4">
                      <p className="text-sm font-medium text-paper">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/62">{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-[minmax(0,273px)_48px]">
                  <Link href="#contacts" className="button-primary h-12 text-[14px] sm:text-[19px]">
                    Познакомиться
                  </Link>
                  <a
                    href="https://t.me/timurgromovv"
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary h-12 w-12 p-0"
                    aria-label="Telegram"
                  >
                    <span className="text-lg">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2">
              <article className="section-card overflow-hidden">
                <div className="relative aspect-[332/332]">
                  <Image src={sitePath("/tilda/hero-card-1.jpg")} alt="Тимур Громов" fill className="object-cover" priority />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/55 sm:text-[13px]">
                    Свадебный ведущий
                  </p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-[28px] uppercase leading-none text-paper sm:text-[40px]">
                    Тимур
                    <br />
                    Громов
                  </h2>
                </div>
              </article>

              <article id="kak-ia-vedu" className="section-card overflow-hidden">
                <div className="relative aspect-[332/332]">
                  <Image src={sitePath("/tilda/hero-card-2.jpg")} alt="Ведущий на свадьбе" fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/55 sm:text-[13px]">Как я веду</p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-[28px] uppercase leading-none text-paper sm:text-[40px]">
                    живо
                    <br />
                    и точно
                  </h2>
                </div>
              </article>

              <article className="section-card overflow-hidden">
                <div className="relative aspect-[332/332]">
                  <Image src={sitePath("/tilda/hero-card-3.jpg")} alt="Свадебный момент" fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/55 sm:text-[13px]">Атмосфера</p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-[28px] uppercase leading-none text-paper sm:text-[40px]">
                    без
                    <br />
                    шаблона
                  </h2>
                </div>
              </article>

              <article className="section-card overflow-hidden border-[#fa4604]/40 bg-[#fa4604] text-[#1c1b1a]">
                <div className="relative aspect-[332/332]">
                  <Image src={sitePath("/tilda/hero-card-4.jpg")} alt="Тимур Громов на мероприятии" fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-black/55 sm:text-[13px]">Москва и область</p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-[28px] uppercase leading-none text-[#1c1b1a] sm:text-[40px]">
                    ваш
                    <br />
                    вечер
                  </h2>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="mt-8 overflow-hidden rounded-[28px] bg-[#f8f6f1] px-4 py-8 text-[#171717] sm:px-6 sm:py-12 lg:mt-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-2 lg:grid-cols-[0.34fr_0.66fr]">
              <h2 className="font-[family-name:var(--font-display)] text-[46px] uppercase leading-[0.9] tracking-[-0.04em] sm:text-[72px] lg:text-[102px]">
                Ключевые принципы моей работы
              </h2>
              <h3 className="font-[family-name:var(--font-display)] text-[46px] uppercase leading-[0.9] tracking-[-0.04em] sm:text-[72px] lg:pt-[5.9rem] lg:text-[102px]">
                для вашего комфорта и душевной атмосферы
              </h3>
            </div>

            <div className="mt-4 flex justify-center lg:mt-2">
              <span className="menu-script text-center text-[32px] text-[#fa4604] sm:text-[48px] lg:text-[64px]">~</span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <article className="principle-photo-card rounded-[34px] bg-[#ebe8e0] p-0">
                <div className="relative aspect-square overflow-hidden rounded-[34px]">
                  <Image src={sitePath("/tilda/principles-photo-1.png")} alt="Свадебная церемония" fill className="object-cover" />
                </div>
              </article>

              <article className="rounded-[34px] bg-[#fa4604] p-6 text-white sm:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-[28px] leading-[0.95] tracking-[-0.03em] sm:text-[36px]">
                  {principlesCards[0].title}
                </h3>
                <p className="mt-24 text-[17px] leading-[1.35] text-white/95 sm:text-[20px]">{principlesCards[0].copy}</p>
              </article>

              <article className="principle-photo-card rounded-[34px] bg-[#ebe8e0] p-0">
                <div className="relative aspect-square overflow-hidden rounded-[34px]">
                  <Image src={sitePath("/tilda/principles-photo-2.png")} alt="Портрет Тимура Громова" fill className="object-cover" />
                </div>
              </article>

              <article className="rounded-[34px] border border-black/20 bg-transparent p-6 sm:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-[28px] leading-[0.95] tracking-[-0.03em] sm:text-[36px]">
                  {principlesCards[1].title}
                </h3>
                <p className="mt-24 text-[17px] leading-[1.35] text-black/86 sm:text-[20px]">{principlesCards[1].copy}</p>
              </article>

              <article className="rounded-[34px] border border-black/20 bg-transparent p-6 sm:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-[28px] leading-[0.95] tracking-[-0.03em] sm:text-[36px]">
                  {principlesCards[2].title}
                </h3>
                <p className="mt-24 text-[17px] leading-[1.35] text-black/86 sm:text-[20px]">{principlesCards[2].copy}</p>
              </article>

              <article className="principle-photo-card rounded-[34px] bg-[#ebe8e0] p-0">
                <div className="relative aspect-square overflow-hidden rounded-[34px]">
                  <Image src={sitePath("/tilda/principles-photo-3.jpg")} alt="Ведущий на свадьбе" fill className="object-cover" />
                </div>
              </article>

              <article className="rounded-[34px] bg-[#171717] p-6 text-white sm:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-[28px] leading-[0.95] tracking-[-0.03em] sm:text-[36px]">
                  {principlesCards[3].title}
                </h3>
                <p className="mt-24 text-[17px] leading-[1.35] text-white/94 sm:text-[20px]">{principlesCards[3].copy}</p>
              </article>

              <article className="rounded-[34px] bg-[#fa4604] p-6 text-white sm:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-[28px] leading-[0.95] tracking-[-0.03em] sm:text-[36px]">
                  {principlesCards[4].title}
                </h3>
                <p className="mt-24 text-[17px] leading-[1.35] text-white/95 sm:text-[20px]">{principlesCards[4].copy}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-[28px] bg-[#fffefa] px-4 py-8 text-[#1c1b1a] sm:px-6 sm:py-12 lg:mt-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <h2 className="font-[family-name:var(--font-display)] text-[46px] uppercase leading-[0.9] tracking-[-0.04em] sm:text-[74px] lg:text-[102px]">
                Тимур Громов
                <br />
                - ведущий, который
              </h2>
              <h3 className="font-[family-name:var(--font-display)] text-[46px] uppercase leading-[0.9] tracking-[-0.04em] sm:text-[74px] lg:text-[102px]">
                ваши мечты
              </h3>
            </div>

            <div className="mt-4 grid gap-6 lg:grid-cols-[0.26fr_0.48fr_0.26fr] lg:items-start">
              <div className="relative mx-auto w-full max-w-[360px]">
                <Image
                  src={sitePath("/tilda/about-photo-main.jpg")}
                  alt="Гости на свадьбе"
                  width={360}
                  height={360}
                  className="h-auto w-full rounded-[120px] object-cover"
                />
                <Image
                  src={sitePath("/tilda/about-highlight.svg")}
                  alt=""
                  width={52}
                  height={56}
                  className="pointer-events-none absolute left-2 top-0 h-auto w-[44px] sm:w-[52px]"
                />
              </div>

              <div className="space-y-6">
                <Image src={sitePath("/tilda/about-smile.svg")} alt="" width={88} height={84} className="h-auto w-[66px] sm:w-[88px]" />
                <div className="space-y-4 text-[20px] leading-[1.3] text-black/88 sm:text-[30px]">
                  {aboutIntro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="menu-script text-[34px] leading-none text-[#fa4604] sm:text-[46px]">Про увлечения и личное</p>
                </div>

                <div className="grid gap-6 pt-2 sm:grid-cols-3 sm:gap-8">
                  {aboutStats.map((item) => (
                    <article key={item.value + item.label}>
                      <p className="font-[family-name:var(--font-display)] text-[64px] leading-[0.9] tracking-[-0.03em] sm:text-[84px]">
                        {item.value}
                      </p>
                      <p className="mt-1 max-w-[20ch] text-[20px] leading-[1.15] text-black/82 sm:text-[36px]">{item.label}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[360px]">
                <Image
                  src={sitePath("/tilda/about-photo-side.jpg")}
                  alt="Тимур Громов"
                  width={360}
                  height={540}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="kak-ia-vedu" className="mt-8 overflow-hidden rounded-[28px] bg-[#1f1f1d] px-4 py-8 text-[#fffefa] sm:px-6 sm:py-12 lg:mt-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
              <article className="relative overflow-hidden rounded-[24px] bg-[#fffefa] p-4 text-[#1c1b1a] sm:p-6">
                <Image src={sitePath("/tilda/why-bg-1.png")} alt="" width={160} height={160} className="pointer-events-none absolute -left-8 top-0 h-auto w-24 opacity-80 sm:w-32" />
                <Image src={sitePath("/tilda/why-bg-2.png")} alt="" width={160} height={160} className="pointer-events-none absolute right-0 top-0 h-auto w-24 opacity-80 sm:w-32" />
                <Image src={sitePath("/tilda/why-bg-3.png")} alt="" width={160} height={160} className="pointer-events-none absolute -left-8 bottom-2 h-auto w-24 opacity-80 sm:w-32" />
                <Image src={sitePath("/tilda/why-bg-4.png")} alt="" width={160} height={160} className="pointer-events-none absolute right-0 bottom-0 h-auto w-24 opacity-80 sm:w-32" />

                <p className="menu-script text-[34px] text-[#fa4604] sm:text-[54px]">Вот как я веду свадьбы:</p>

                <div className="mt-4 space-y-3 sm:space-y-4">
                  {whyWeddingItems.map((item, index) => (
                    <button
                      key={item.index}
                      type="button"
                      className={[
                        "group relative w-full rounded-[16px] border p-4 text-left transition sm:p-5",
                        index === 0
                          ? "border-[#fa4604] bg-[#fa4604] text-white"
                          : "border-[#fa4604]/70 bg-[#fffefa] text-[#1c1b1a] hover:bg-[#fff3ec]",
                      ].join(" ")}
                    >
                      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-3">
                        <span className="font-[family-name:var(--font-display)] text-[36px] leading-none text-[#fa4604] sm:text-[48px]">
                          {item.index}
                        </span>
                        <p
                          className={[
                            "whitespace-pre-line text-[16px] leading-[1.2] sm:text-[24px]",
                            index === 0 ? "text-white" : "text-[#1c1b1a]",
                          ].join(" ")}
                        >
                          {item.title}
                        </p>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
                          <Image src={sitePath("/tilda/play.svg")} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 text-[14px] text-black/45 sm:text-[17px]">
                <Image src={sitePath("/tilda/why-board-arrow.png")} alt="" width={72} height={72} className="h-auto w-14 sm:w-[72px]" />
                  <span>Кликай на карточку, чтобы посмотреть видео</span>
                </div>
              </article>

              <div className="relative overflow-hidden rounded-[24px] px-2 py-4 sm:px-4">
                <Image src={sitePath("/tilda/why-script.svg")} alt="" width={250} height={46} className="pointer-events-none absolute right-0 top-0 h-auto w-[150px] sm:w-[250px]" />
                <h2 className="font-[family-name:var(--font-display)] text-[48px] uppercase leading-[0.9] tracking-[-0.04em] text-[#fffefa] sm:text-[76px] lg:text-[105px]">
                  Почему ваша свадьба
                  <br />
                  пройдет безупречно
                </h2>
                <p className="menu-script mt-4 text-[38px] leading-none text-[#fa4604] sm:text-[64px]">
                  О чем должна знать
                  <br />
                  каждая пара?
                </p>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                  <Image
                    src={sitePath("/tilda/why-photo-polaroid.png")}
                    alt="Ведущий на свадьбе"
                    width={420}
                    height={500}
                    className="h-auto w-[260px] max-w-full sm:w-[420px]"
                  />

                  <div className="space-y-4">
                    <Link href="#contacts" className="button-primary h-12 px-8 text-[16px] sm:h-14 sm:px-10 sm:text-[24px]">
                      обсудить мою свадьбу
                    </Link>
                    <Image
                      src={sitePath("/tilda/why-side-photo.jpg")}
                      alt="Свадебная церемония"
                      width={460}
                      height={332}
                      className="h-auto w-[260px] max-w-full rounded-[40px] object-cover sm:w-[420px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="poleznosti" className="mt-8 space-y-6 lg:mt-10">
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

        <section id="price" className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="section-card p-6 sm:p-8">
            <SectionHeading
              eyebrow="Как я веду"
              title="Веду свадьбу как цельный вечер, а не как набор конкурсов"
              copy="Этот блок пока остается в рабочем виде, но уже привязан к реальному якорю `#kak-ia-vedu` из Tilda-экспорта."
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
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-paper">Прайс и пакеты переносим из исходного блока</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
                Сейчас задача этого секционного блока простая: сохранить правильный якорь `#price` и место под
                точный перенос прайс-карточек с оригинального лендинга.
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
                        src={index === 0 ? sitePath("/media/selfie-group.jpg") : sitePath("/media/wedding-stage.jpg")}
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

            <article id="qa" className="section-card p-6 sm:p-8">
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
                <Image src={sitePath("/media/portrait-bw.jpg")} alt="Тимур Громов" fill className="object-cover" />
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
