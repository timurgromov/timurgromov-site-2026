import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-6">
      <div className="section-card max-w-xl p-10 text-center">
        <p className="section-label mx-auto w-fit">404</p>
        <h1 className="text-4xl font-semibold tracking-[-0.05em] text-paper">Страница не найдена</h1>
        <p className="mt-4 text-sm leading-7 text-white/66">
          Это служебная заглушка для будущего сайта. Вернись на главную и продолжим сборку.
        </p>
        <Link href="/" className="button-primary mt-8">
          На главную
        </Link>
      </div>
    </main>
  );
}
