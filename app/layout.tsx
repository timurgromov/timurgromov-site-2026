import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: "Тимур Громов - свадебный ведущий в Москве и области",
  description: "Проведу вашу свадьбу в Москве и области так, чтобы о ней вспоминали с теплом.",
  icons: {
    icon: sitePath("/favicon.ico"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
