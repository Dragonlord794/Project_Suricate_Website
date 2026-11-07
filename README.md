# Project Suricate

A responsive static website prepared for Vercel. A dependency-free Node.js build generates the public site; no account secrets or backend are required.

## Preview
Run `node scripts/build-seo.mjs`, then `python -m http.server 3000 --directory public` and visit `http://localhost:3000`. Locally, use `/collection.html`, `/animals.html`, and `/updates.html` for the secondary pages; Vercel serves their clean URLs without `.html`. The build output includes navigation links inserted during deployment.

## Deploy to Vercel
1. Unzip this project.
2. Put these files in the root of a GitHub repository.
3. In Vercel, add a new project and import that repository.
4. Select framework preset Other. The tracked `vercel.json` configures `node scripts/build-seo.mjs` as the build command and `public` as the output directory.
5. Deploy. No environment variables are required.

Alternatively, with the Vercel CLI installed, run `vercel` inside this folder and follow its prompts; use `vercel --prod` for production.

## Contents and behavior
- Responsive landing page, original provided logo, mobile navigation, and FAQs.
- Dedicated `/collection` page with a Coming soon banner; no public product previews, favorites, or payment links.
- Animals and Updates pages, with deployment-generated crawl files.
- No customer information is collected and no order is created.
- Fonts load from Google Fonts; local system fallbacks work offline. Review font-hosting choices before launch if needed.
- Clothing is in development; no launch date, prices, or stock are announced.
- Donation recipient names describe plans, not partnerships or endorsements.

## Before selling
Replace concept artwork with approved product photography and original print designs. Add verified product specifications, prices, inventory, fulfillment, contact information, privacy/return/shipping policies, and a real checkout integration. Test the complete purchase flow before enabling sales. Publish financial reports and donation receipts when ready. Confirm all public commitments and intended recipient names before launch.

## Document interpretation
Source: Project-Suricate.pdf and Project_Suricate_Logo.jpg supplied by the user.
The document commits 50% of net profit to conservation and gives planned recipient goals of $3,000, $3,000, $2,000, and $2,000. It inconsistently calls financial reporting weekly and every two weeks, so this site labels the schedule as being finalized. No actual donations, sales, memberships, charitable status, or endorsements are asserted. Internal team rosters and sales quotas are intentionally omitted from the public site. The initial six garment concepts are no longer displayed; the collection page now shows Coming soon.
