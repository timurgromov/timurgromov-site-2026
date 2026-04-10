import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function ContactsPage() {
  return (
    <main className="page-shell min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="section-card p-10">
          <p className="section-label">Контакты</p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl text-paper">Заготовка раздела контактов</h1>
          <p className="section-copy mt-5">
            Позже здесь будет форма, которая сможет отправлять лиды в админку и Telegram через backend.
          </p>
          <Link href="/" className="button-secondary mt-8 inline-flex">
            Назад
          </Link>
        </div>
      </div>
    </main>
  );
}
