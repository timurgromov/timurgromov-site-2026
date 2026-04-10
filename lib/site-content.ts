export const navItems = [
  { href: "#hero", label: "Главная" },
  { href: "#services", label: "Секции" },
  { href: "#video", label: "Видео" },
  { href: "#contacts", label: "Контакты" },
] as const;

export const highlights = [
  {
    title: "Сайт на своем коде",
    text: "Переносим контент и визуальную структуру Tilda без зависимости от платформы.",
  },
  {
    title: "Видео без Boomstream",
    text: "Строим собственную схему воспроизведения с тестовым MP4 и проверкой через VPN.",
  },
  {
    title: "Готовность к лидам",
    text: "Формы позже можно связать с существующей админкой и Telegram через backend.",
  },
] as const;

export const processSteps = [
  "Локальный scaffold и первый экран.",
  "Перенос ключевых секций и CTA.",
  "Тестовое видео и проверка с VPN/без VPN.",
  "Публикация на GitHub Pages.",
] as const;

export const contactLinks = [
  { label: "Telegram", href: "https://t.me/" },
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "Instagram", href: "https://instagram.com/" },
] as const;
