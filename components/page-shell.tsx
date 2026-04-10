import Link from "next/link";

type PageShellProps = {
  eyebrow: string;
  title: string;
  copy: string;
  backHref?: string;
};

export function PageShell({ eyebrow, title, copy, backHref = "/" }: PageShellProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="section-card p-6 sm:p-8 lg:p-10">
        <p className="section-label">{eyebrow}</p>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-paper sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">{copy}</p>
          </div>
          <Link href={backHref} className="button-secondary w-fit">
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
}
