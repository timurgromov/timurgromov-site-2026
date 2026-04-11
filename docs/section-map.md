# Section Map: timurgromov.ru from Tilda export

## Source of truth
- Additional rule file: `docs/source-of-truth.md`
- Main page export: `page62008353.html`
- Main body export: `files/page62008353body.html`

## Confirmed page shape
- The exported site is a one-page landing.
- Header navigation uses in-page anchors, not separate content pages.
- The page contains multiple popup records for cases, showreel, webinar/reviews, and video advice cards.

## Confirmed header anchors
- `#about`
- `#kak-ia-vedu`
- `#poleznosti`
- `#price`
- `#cases`
- `#contacts`

## Confirmed popup hooks
- `#popup:showreel`
- `#popup:about-timur`
- `#popup:vebinar-reviews`
- `#popup:video-sovet-1`
- `#popup:video-sovet-2`
- `#popup:video-sovet-3`
- `#popup:video-soveti-1`
- `#popup:video-soveti-2`
- `#popup:video-soveti-3`
- `#popup:video-soveti-4`
- `#popup:video-soveti-5`
- `#popup:video-soveti-6`
- `#popup:anton-i-kristina`
- `#popup:anton-viktorovich`
- `#popup:anna-chigirina`
- `#popup:katya-i-zhenia`
- `#popup:maksim-i-masha`
- `#popup:temur-i-yana`
- `#popup:roman-haritonov`
- `#popup:kolizei`
- `#popup:morozovka`
- `#popup:ozero-komo`
- `#popup:russko-kubinskaya`
- `#popup:toskana`

## Functional blocks confirmed in export
1. Fixed header with logo and anchor navigation.
2. Hero section with the main headline about the wedding host in Moscow and the region.
3. About section.
4. "Как я веду" section.
5. "Полезности" section with video/article cards and popups.
6. Price section.
7. Cases section with separate popup stories.
8. Contacts section.
9. Popup showreel.
10. Popup webinar/reviews block.

## Export implementation notes
- There is at least one external MP4 source from Boomstream in the export.
- Video is not the first rebuild step. The site must be restored without video first.
- Many content blocks are `T396` zero blocks, so visual restoration must be done section by section rather than by naïve HTML reuse.
- The page also includes helper records like `T123`, `T270`, `T331`, `T390`, `T668`, `T734`, and `T1093` for scripts, anchors, popups, and auxiliary behaviors.

## Practical rebuild order
1. Header
2. Hero
3. About
4. "Как я веду"
5. "Полезности"
6. Price
7. Cases
8. Contacts
9. Popups and supporting interactions
10. Video integration as the last step
