# Export Inventory: Tilda archive for timurgromov.ru

## What is in the export
- `page62008353.html` - the main one-page site
- `page62798097.html` - header partial
- `page62788931.html` - footer partial
- `page62806123.html` - 404 page
- `css/` - page and shared styles
- `js/` - Tilda runtime and block scripts
- `images/` - exported raster and vector assets
- `sitemap.xml` - exported URL map
- `robots.txt` - robots rules
- `htaccess` - server config template
- `readme.txt` - Tilda export instructions

## What this means
- The export is enough to reconstruct the site as a static website.
- The visual layout, copy, most images, and section structure are present.
- The site is primarily a one-page site with anchors, not a multi-page app.

## What is not fully portable
- Tilda-managed forms and service flows
- Any backend data processing
- Tilda account/members/catalog logic
- External video hosting dependencies
- Third-party services referenced by links or embeds

## Observations
- `sitemap.xml` lists only the homepage URL.
- The archive contains header and footer partials, which helps with layout reconstruction.
- At least one popup video exists and references an external MP4 source.
- The export is suitable as source material, but not as the final implementation.

