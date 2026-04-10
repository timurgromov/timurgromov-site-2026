import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { PageShell } from "@/components/page-shell";
import { reviewCards } from "@/lib/site-content";

export default function ReviewsPage() {
  return (
    <main className="page-shell min-h-screen">
      <SiteHeader />

      <PageShell
        eyebrow="Отзывы"
        title="Живые впечатления гостей и пар"
        copy="Этот раздел переносим отдельно, чтобы сохранить социальное доказательство и не потерять доверие, которое уже есть у текущего сайта."
      />

      <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <article className="section-card overflow-hidden">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/media/portrait-bw.jpg" alt="Тимур Громов" fill className="object-cover" />
          </div>
          <div className="p-6">
            <p className="section-label">Соц. доказательство</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-paper">Когда вечер идет легко, это чувствуют все</h2>
            <p className="mt-3 text-sm leading-7 text-white/66">
              Здесь можно собрать не только текстовые отзывы, но и скриншоты, короткие видео и живые реакции гостей.
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
    </main>
  );
}
