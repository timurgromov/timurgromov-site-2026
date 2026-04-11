# Rebuild Workflow

This is the only operational plan for restoring `timurgromov.ru` in this repository.

## Sources of truth
- `page62008353.html`
- `files/page62008353body.html`
- `https://timurgromov.ru/`
- `docs/section-map.md`
- `docs/project-spec.md`

## Golden path
1. Fix the top-level shared style first: fonts, colors, spacing, background, and shared components.
2. Restore the page strictly top-down:
   - fixed header
   - hero
   - about
   - `Как я веду`
   - `Полезности`
   - price
   - cases
   - contacts
   - popup/menu overlay and other interactive states
   - video and media last
3. Do not jump ahead to lower sections while upper sections are still visibly off.
4. Compare each changed screen against the export and the live original before moving on.
5. Keep popup states as interface states, not separate pages.
6. Keep video and media last until the static structure matches.

## Per-step loop
1. Inspect the real files.
2. Make one focused change.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Commit and push.
6. Deploy `gh-pages`.
7. Verify the published GitHub Pages URL.

## Hard rules
- Do not invent sections, copy, CTAs, prices, reviews, or media.
- Do not redesign the site “for improvement”.
- Do not treat a local build as final proof when the change affects rendering, assets, routing, or popups.
- Do not maintain multiple competing plans in different docs.
