# Source Of Truth

This repository uses the following order of truth for restoring `timurgromov.ru`:

1. `page62008353.html` and `files/page62008353body.html`
2. The live original site: `https://timurgromov.ru/`
3. User-provided screenshots of the original design
4. `docs/section-map.md`
5. `docs/project-spec.md`
6. `docs/tasks.md`

Rules:

- Do not invent sections, texts, CTA labels, prices, reviews, or popup content.
- Do not change the order of sections unless the export or live original site confirms it.
- Use the Tilda export as the primary baseline for structure and content.
- Use the live original site as an additional visual reference, not as a reason to redesign.
- If the export and live site differ, prefer the export for structure and use screenshots to resolve visual details.
- Video and media changes stay last, after the static structure is restored.
- For this repository, the published GitHub Pages site is the default verification target after deploy.
- Do not start a local dev server by habit when the same issue can be checked on the live GitHub Pages page.
- Use local `npm run dev` only when a problem cannot be reproduced or inspected on the published site, or when you need a fast isolated debugging loop before the next deploy.
- Default workflow: `npm run lint` -> `npm run build` -> commit/push -> deploy to `gh-pages` -> verify the published URL.
- A successful local build is not enough to close a task if the change affects page rendering, routing, assets, or popups.

Operational note:

- New chats should open this file first, then `docs/section-map.md`, then the export files.
- If the task is about the live site or deployment state, check the published GitHub Pages URL before spinning up local dev.
