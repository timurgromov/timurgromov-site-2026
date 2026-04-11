"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutIntro, aboutStats, heroFacts, principlesCards, reviewCards, whyWeddingItems } from "@/lib/site-content";
import { sitePath } from "@/lib/site-path";

const usefulVideoCards = [
  {
    id: "video-sovet-1",
    title: "Почему на моих свадьбах гости смеются, а не краснеют?",
    videoUrl: "https://cdnv.boomstream.com/balancer/roHksxqq-SxJPiQup.mp4",
  },
  {
    id: "video-sovet-2",
    title: "Страшный момент на свадьбе? Как избежать неловких тостов",
    videoUrl: "https://cdnv.boomstream.com/balancer/aszKpzRZ-SxJPiQup.mp4",
  },
  {
    id: "video-sovet-3",
    title: "Как ведущий спасает свадьбу от хаоса: неочевидные моменты",
    videoUrl: "https://cdnv.boomstream.com/balancer/qzinNGjh-SxJPiQup.mp4",
  },
  {
    id: "video-soveti-1",
    title: "План свадебного бюджета без него свадьба может стать провалом",
    videoUrl: "https://cdnv.boomstream.com/balancer/pCq9x3Jn-SxJPiQup.mp4",
  },
  {
    id: "video-soveti-2",
    title: "Чего боятся гости на свадьбе и как этого избежать",
    videoUrl: "https://cdnv.boomstream.com/balancer/r9seULNi-SxJPiQup.mp4",
  },
  {
    id: "video-soveti-3",
    title: "7 неожиданных задач, которые решает ведущий на свадьбе",
    videoUrl: "https://cdnv.boomstream.com/balancer/Lww7hY2N-oqvc9Qft.mp4",
  },
  {
    id: "video-soveti-4",
    title: "Как выбрать ресторан для свадьбы, чтобы не пожалеть: главные советы",
    videoUrl: "https://cdnv.boomstream.com/balancer/RNUDagDY-SxJPiQup.mp4",
  },
  {
    id: "video-soveti-5",
    title: "Душевная свадьба на 20 гостей, своими силами или с ведущим",
    videoUrl: "https://cdnv.boomstream.com/balancer/ytQQEk4L-SxJPiQup.mp4",
  },
  {
    id: "video-soveti-6",
    title: "Особенности межнациональных свадеб: уникальный опыт для вашего праздника",
    videoUrl: "https://cdnv.boomstream.com/balancer/y8riDaTB-SxJPiQup.mp4",
  },
] as const;

const caseStories = [
  {
    id: "anton-i-kristina",
    title: "Антон и Кристина",
    image: sitePath("/media/selfie-group.jpg"),
    summary:
      "История пары с живым отзывом о свадьбе и подробностями подготовки.",
  },
  {
    id: "temur-i-yana",
    title: "Темур и Яна",
    image: sitePath("/media/wedding-stage.jpg"),
    summary:
      "Кейс с видеопоказом и акцентом на атмосферу вечера и темп программы.",
  },
  {
    id: "katya-i-zhenia",
    title: "Катя и Женя",
    image: sitePath("/media/portrait-bw.jpg"),
    summary:
      "Отдельная история пары с отдельным popup-окном, как в Tilda-export.",
  },
  {
    id: "roman-haritonov",
    title: "Роман Харитонов",
    image: sitePath("/media/hero-banner.jpg"),
    summary:
      "Отзыв о том, как ведущий держит вечер элегантно и без пошлости.",
  },
] as const;

type PopupId = "showreel" | "vebinar-reviews" | (typeof usefulVideoCards)[number]["id"] | (typeof caseStories)[number]["id"];

function normalizeHash(hash: string) {
  return hash.replace(/^#/, "");
}

function PopupFrame({
  title,
  subtitle,
  onClose,
  children,
  wide = false,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={[
          "relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#fffefa] text-[#1c1b1a] shadow-[0_30px_90px_rgba(0,0,0,0.38)]",
          wide ? "max-w-6xl" : "max-w-4xl",
        ].join(" ")}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-2xl leading-none text-[#fa4604]"
          aria-label="Закрыть"
        >
          ×
        </button>
        <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-7">
          <div className="max-w-4xl pr-12">
            <p className="section-label border-black/10 bg-black/[0.03] text-black/52">{subtitle ?? "Тимур Громов"}</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              {title}
            </h2>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

function VideoPopup({ title, videoUrl, onClose }: { title: string; videoUrl: string; onClose: () => void }) {
  return (
    <PopupFrame title={title} subtitle="Видеоматериал из Tilda-export" onClose={onClose} wide>
      <div className="overflow-hidden rounded-[18px] bg-black">
        <video className="h-auto w-full" controls playsInline preload="metadata" poster={sitePath("/media/hero-banner.jpg")}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </PopupFrame>
  );
}

function CasePopup({
  title,
  summary,
  image,
  onClose,
}: {
  title: string;
  summary: string;
  image: string;
  onClose: () => void;
}) {
  return (
    <PopupFrame title={title} subtitle="Свадебный кейс" onClose={onClose}>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="space-y-4 text-[18px] leading-8 text-black/82">
          <p>{summary}</p>
          <p>
            В Tilda-export этот формат открыт как отдельная история в popup-окне, поэтому здесь он тоже остаётся
            отдельным состоянием интерфейса, а не страницей.
          </p>
        </div>
      </div>
    </PopupFrame>
  );
}

function ReviewsPopup({ onClose }: { onClose: () => void }) {
  return (
    <PopupFrame title="8 секретов успешной свадьбы" subtitle="Отзывы о вебинаре" onClose={onClose} wide>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="max-w-3xl text-[20px] leading-8 text-black/78 sm:text-[22px]">
            О которых вам не расскажут организаторы. Этот popup в export собран как отдельный живой блок с цифрами,
            отзывами и видео-материалом, а не как FAQ.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[22px] bg-[#1f1f1d] p-5 text-white">
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/50">Вебинаров провел за 5 лет</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[56px] leading-none text-[#fa4604] sm:text-[68px]">
                500+
              </p>
            </article>
            <article className="rounded-[22px] bg-[#fff3ec] p-5 text-[#1c1b1a]">
              <p className="text-[12px] uppercase tracking-[0.3em] text-black/40">Невест посмотрело вебинар</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[56px] leading-none text-[#fa4604] sm:text-[68px]">
                3000+
              </p>
            </article>
          </div>

          <div className="grid gap-4">
            {reviewCards.map((item) => (
              <article key={item.author} className="rounded-[22px] border border-black/10 bg-white p-5 shadow-sm">
                <p className="text-[18px] leading-8 text-black/82">&quot;{item.quote}&quot;</p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-[22px] uppercase tracking-[-0.03em] text-[#fa4604]">
                  {item.author}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-[22px] bg-black">
            <Image
              src={sitePath("/media/hero-banner.jpg")}
              alt="Вебинар Тимура Громова"
              width={960}
              height={760}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="rounded-[22px] border border-black/10 bg-white p-5">
            <p className="text-[12px] uppercase tracking-[0.3em] text-black/40">Как это выглядит в export</p>
            <p className="mt-3 text-[18px] leading-8 text-black/78">
              Большой экран, цифры, отзывы и живая подача. Визуально это отдельный полноэкранный popup, а не FAQ-аккордеон.
            </p>
          </div>
        </div>
      </div>
    </PopupFrame>
  );
}

export function LandingPage() {
  const [activePopup, setActivePopup] = useState<PopupId | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = normalizeHash(window.location.hash);
      if (hash.startsWith("popup:")) {
        const popupId = hash.slice("popup:".length) as PopupId;
        setActivePopup(popupId);
      } else {
        setActivePopup(null);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePopup(null);
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    if (activePopup) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePopup]);

  const closePopup = () => {
    setActivePopup(null);
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  const openPopup = (popupId: PopupId) => {
    const nextHash = `#popup:${popupId}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      setActivePopup(popupId);
    }
  };

  return (
    <main className="page-shell min-h-screen overflow-x-clip">
      <SiteHeader />

      <div className="mx-auto max-w-[1920px] px-2 pb-8 sm:px-5 lg:px-8 lg:pb-10">
        <section id="hero" className="overflow-hidden rounded-b-[16px] bg-[#1f1f1d] px-2 pb-3 pt-4 sm:px-5 sm:pt-6">
          <div className="grid min-h-[calc(100vh-88px)] gap-6 xl:grid-cols-[1.22fr_0.78fr]">
            <div className="flex flex-col justify-between gap-6 pb-4">
              <div className="pt-3 sm:pt-8">
                <p className="mb-3 text-[14px] uppercase tracking-[0.08em] text-white/72 sm:mb-4 sm:text-[20px]">
                  свадебный ведущий в москве и области
                </p>
                <h1 className="hero-title max-w-[900px] text-[38px] text-paper sm:text-[66px] lg:text-[84px] xl:text-[107px]">
                  Свадебный ведущий в Москве и области
                  <br />
                  - проведу вашу свадьбу
                  <br />
                  так, чтобы о ней
                  <br />
                  вспоминали с теплом
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
                  <p className="text-[12px] uppercase tracking-[0.18em] text-white/55 sm:text-[13px]">Свадебный ведущий</p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-[28px] uppercase leading-none text-paper sm:text-[40px]">
                    Тимур
                    <br />
                    Громов
                  </h2>
                </div>
              </article>

              <article className="section-card overflow-hidden">
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
                слышит и понимает
                <br />
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
                        index === 0 ? "border-[#fa4604] bg-[#fa4604] text-white" : "border-[#fa4604]/70 bg-[#fffefa] text-[#1c1b1a] hover:bg-[#fff3ec]",
                      ].join(" ")}
                    >
                      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-3">
                        <span className="font-[family-name:var(--font-display)] text-[36px] leading-none text-[#fa4604] sm:text-[48px]">
                          {item.index}
                        </span>
                        <p className={["whitespace-pre-line text-[16px] leading-[1.2] sm:text-[24px]", index === 0 ? "text-white" : "text-[#1c1b1a]"].join(" ")}>
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
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="section-card overflow-hidden p-6 sm:p-8">
                <p className="section-label">Полезности от меня</p>
                <h2 className="section-title">Подборка видео от меня «О чем должна знать каждая пара»</h2>
                <p className="section-copy mt-5">
                  В Tilda-export это отдельный интерактивный блок с видео-попапами. Здесь карточки тоже открывают
                  самостоятельные popup-состояния, а не уводят пользователя на другую страницу.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="#popup:showreel" className="button-primary">
                    Смотреть вебинар
                  </Link>
                  <Link href="#popup:vebinar-reviews" className="button-secondary">
                    Отзывы о вебинаре
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {usefulVideoCards.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openPopup(item.id)}
                    className={[
                      "group overflow-hidden rounded-[24px] border border-white/10 bg-[#242321] text-left shadow-glow transition hover:-translate-y-0.5 hover:border-[#fa4604]/50",
                      index === 0 ? "sm:col-span-2" : "",
                    ].join(" ")}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={index % 2 === 0 ? sitePath("/media/hero-banner.jpg") : sitePath("/media/wedding-stage.jpg")}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-5">
                      <p className="section-label border-white/10 bg-white/5 text-white/55">Видео совет</p>
                      <h3 className="font-[family-name:var(--font-display)] text-[28px] uppercase leading-[0.95] tracking-[-0.03em] text-paper">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="price" className="mt-8 overflow-hidden rounded-[28px] bg-[#fffefa] px-4 py-8 text-[#1c1b1a] sm:px-6 sm:py-12 lg:mt-10 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <p className="section-label border-black/10 bg-black/[0.03] text-black/52">Цены</p>
                <h2 className="section-title text-[#1c1b1a]">Прайс и форматы из оригинального блока</h2>
                <p className="section-copy mt-5 text-black/72">
                  Точные цифры лучше сверять с export и оригиналом, поэтому здесь оставлен нейтральный блок без выдуманных
                  пакетов.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[28px] border border-[#fa4604]/20 bg-[#fff3ec] p-6">
                  <p className="text-[12px] uppercase tracking-[0.3em] text-[#fa4604]/70">Основной формат</p>
                  <p className="mt-5 font-[family-name:var(--font-display)] text-[32px] leading-[0.95] text-[#fa4604] sm:text-[40px]">
                    По запросу
                  </p>
                </article>

                <article className="rounded-[28px] border border-black/10 bg-white p-6">
                  <p className="text-[12px] uppercase tracking-[0.3em] text-black/40">Продление</p>
                  <p className="mt-5 font-[family-name:var(--font-display)] text-[32px] leading-[0.95] text-[#fa4604] sm:text-[40px]">
                    Обсуждается отдельно
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/65">После знакомства и понимания формата вечера.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="mt-8">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="section-card overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={sitePath("/media/portrait-bw.jpg")} alt="Тимур Громов" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="section-label">Кейсы</p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-paper">
                  Живые истории пар и свадьбы с разным характером
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/66">
                  Каждый кейс открывается как отдельная история, как в оригинальном экспортe Tilda.
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              {caseStories.map((item) => (
                <button key={item.id} type="button" onClick={() => openPopup(item.id)} className="section-card overflow-hidden text-left transition hover:-translate-y-0.5">
                  <div className="grid gap-4 p-4 sm:grid-cols-[180px_1fr] sm:p-5">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/8 bg-white/5">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="section-label">Кейс</p>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-paper">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/66">{item.summary}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          Открыть историю
                        </span>
                        <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                          Popup
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-8">
          <div className="section-card p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="section-label">Контакты</p>
                <h2 className="section-title">Связаться можно сразу, без промежуточных страниц</h2>
                <p className="section-copy mt-5">
                  Здесь остаются рабочие контакты, а заявки потом можно подключить к админке и Telegram через backend.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a className="button-primary" href="mailto:Timurgromov.showman@gmail.com">
                  Написать на почту
                </a>
                <a className="button-secondary" href="https://t.me/timurgromovv" target="_blank" rel="noreferrer">
                  Telegram
                </a>
                <a className="button-secondary" href="tel:+79253900772">
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />

      {activePopup === "showreel" ? (
        <VideoPopup title="Ведущий Тимур Громов" videoUrl="https://cdnv.boomstream.com/balancer/UtWkPqj2-EuQeQgfF.mp4" onClose={closePopup} />
      ) : null}

      {activePopup === "vebinar-reviews" ? <ReviewsPopup onClose={closePopup} /> : null}

      {usefulVideoCards.map((item) =>
        activePopup === item.id ? <VideoPopup key={item.id} title={item.title} videoUrl={item.videoUrl} onClose={closePopup} /> : null,
      )}

      {caseStories.map((item) =>
        activePopup === item.id ? <CasePopup key={item.id} title={item.title} summary={item.summary} image={item.image} onClose={closePopup} /> : null,
      )}
    </main>
  );
}
