# Project Suricate

A responsive static website prepared for Vercel. No build step, dependencies, account secrets, payment processor, or backend required.

## Preview
Open index.html in a browser, or run `python3 -m http.server 3000` from this folder and visit localhost:3000.

## Deploy to Vercel
1. Unzip this project.
2. Put these files in the root of a GitHub repository.
3. In Vercel, add a new project and import that repository.
4. Select framework preset Other, leave the build command empty, and use the repository root as the output directory (`.` if a value is required).
5. Deploy. No environment variables are required.

Alternatively, with the Vercel CLI installed, run `vercel` inside this folder and follow its prompts; use `vercel --prod` for production.

## Contents and behavior
- Responsive landing page, original provided logo, CSS/SVG garment concepts.
- Tee/hoodie filters, saved favorites with localStorage, accessible modal, mobile navigation, FAQs.
- No customer information is collected. Favorites are stored on the visitor's device only. No order is created.
- Fonts load from Google Fonts; local system fallbacks work offline. Review font-hosting choices before launch if needed.
- Product concepts are placeholders, not final artwork. No prices or stock numbers were supplied.
- Donation recipient names describe plans, not partnerships or endorsements.

## Before selling
Replace concept artwork with approved product photography and original print designs. Add verified product specifications, prices, inventory, fulfillment, contact information, privacy/return/shipping policies, and a real checkout integration. Test the complete purchase flow before enabling sales. Publish financial reports and donation receipts when ready. Confirm all public commitments and intended recipient names before launch.

## Document interpretation
Source: Project-Suricate.pdf and Project_Suricate_Logo.jpg supplied by the user.
The document commits 50% of net profit to conservation and gives planned recipient goals of $3,000, $3,000, $2,000, and $2,000. It inconsistently calls financial reporting weekly and every two weeks, so this site labels the schedule as being finalized. No actual donations, sales, memberships, charitable status, or endorsements are asserted. Internal team rosters and sales quotas are intentionally omitted from the public site. The six displayed garments are illustrative concepts created for this website from species listed in the plan, not final supplied products.
