import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { PageShell } from "@/components/page-shell";
import { caseCards } from "@/lib/site-content";

export default function CasesPage() {
  return (
    <main className="page-shell min-h-screen">
      <SiteHeader />

      <PageShell
        eyebrow="Кейсы"
        title="Примеры живых свадебных моментов и сцены"
        copy="Здесь собраны кадры, которые лучше всего передают манеру ведения и атмосферу вечера. Позже этот раздел можно расширить реальными описаниями проектов и видео."
      />

      <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        {caseCards.map((card, index) => (
          <article key={card.title} className="section-card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={index === 0 ? "/media/selfie-group.jpg" : "/media/wedding-stage.jpg"}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="section-label">Кейс {index + 1}</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-paper">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/66">{card.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
