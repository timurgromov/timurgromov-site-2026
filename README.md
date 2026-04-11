# timurgromov.ru migration

Пересборка сайта с Tilda на собственный хостинг.

## Зафиксированный стек
- `Next.js`
- `TypeScript`
- `Tailwind CSS`

## Документы
- [Project Spec](docs/project-spec.md)
- [Development Plan](docs/tasks.md)
- [Section Map](docs/section-map.md)
- [Source of Truth](docs/source-of-truth.md)

## Локальный запуск
- `npm run dev`
- открыть `http://127.0.0.1:3000`

## Статус
- Базовый scaffold проекта уже создан.
- Текущая реализация - временный рабочий каркас и не финальное 1:1 восстановление оригинального Tilda-сайта.
- Главная задача сейчас - восстановить лендинг по Tilda-экспорту блок за блоком без видео.
- `npm run build` и `npm run lint` проходят на текущем каркасе.
- Документация на стартовый этап уже зафиксирована.
- Рабочий режим миграции: не автоконвертация, а ручное восстановление one-page лендинга по Tilda-export как baseline.
- Следующий шаг: восстановить burger overlay и следующую белую секцию, затем двигаться по экранному порядку из `docs/tasks.md`.
