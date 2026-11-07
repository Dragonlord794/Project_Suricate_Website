# Publishing project updates

Vercel runs `node scripts/build-seo.mjs` and publishes only `public/`. Source files remain editable in the repository. The builder copies public assets, adds static homepage Animals and Updates links, and generates robots.txt and sitemap.xml from seo-pages.json. It does not contact Google or synchronize AI answers.

## Meaningful changes
1. Update the relevant visible facts in the source pages. Homepage Animals and Updates links are also inserted by scripts/build-seo.mjs; keep them consistent.
2. For milestones, add an original dated HTML entry in updates/, with a unique title, description, canonical URL, visible publication/update dates, and accurate Article markup. Never invent sales, partnerships, reviews or donation totals.
3. Add a normal HTML link on updates.html. Update its current-status summary when needed.
4. Add the new page to seo-pages.json; update each changed page's `updated` value only for meaningful content changes. Keep visible dates and Article dateModified in sync. Dates do not reset automatically on deploy.
5. Commit to main. Vercel automatically rebuilds the sitemap and homepage links. Check the build result and public URLs. No automatic content writing, scheduled edits, or Google submissions are enabled.

## Search Console
Connect Google Search Console in assistant Settings > Connectors. Verify the URL-prefix property https://projectsuricate.vercel.app/ in your Google account. Submit https://projectsuricate.vercel.app/sitemap.xml once; inspect important new or changed URLs and request indexing in the Search Console UI when appropriate. Never use the Google Indexing API for ordinary apparel pages. Crawling, indexing and AI citations are not guaranteed or immediate.

## Before real sales
The collection page currently displays Coming soon, and public payment entry points are hidden. Enable selling only after real-order readiness is confirmed. Publish final product details, policies and supported conservation records. Historical updates retain their publication dates and historical status; add a dated note or a new linked update rather than silently rewriting history.
