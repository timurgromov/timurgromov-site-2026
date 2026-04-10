import { SiteHeader } from "@/components/site-header";
import { PageShell } from "@/components/page-shell";
import { faqItems } from "@/lib/site-content";

export default function FaqPage() {
  return (
    <main className="page-shell min-h-screen">
      <SiteHeader />

      <PageShell
        eyebrow="FAQ"
        title="Частые вопросы о формате, сценарии и переносе"
        copy="Здесь удобно ответить на вопросы, которые чаще всего возникают у пар перед бронью. Это поможет разгрузить форму и сократить лишние переписки."
      />

      <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-10 sm:px-6 lg:px-8">
        {faqItems.map((item, index) => (
          <details key={item.question} className="section-card group p-6">
            <summary className="cursor-pointer list-none text-2xl font-semibold tracking-[-0.04em] text-paper">
              <span className="mr-3 text-white/36">{String(index + 1).padStart(2, "0")}</span>
              {item.question}
            </summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/66">{item.answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
