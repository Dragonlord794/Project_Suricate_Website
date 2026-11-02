# Stripe sandbox branch

Main and the existing homepage are unchanged. This branch adds /shop.html and a server-side /api/checkout function. No secrets are committed.

## Required Vercel configuration
Install dependencies from package.json. Deploy root HTML and /api functions together. Add a ROTATED sk_test_ secret as STRIPE_SECRET_KEY, and SITE_URL as the exact deployment origin. Set STRIPE_TAX_ENABLED=false and STRIPE_PAID_INVOICES_ENABLED=true to test paid invoice generation, or false to disable it. Redeploy after changes. Paid invoices have separate Stripe pricing. No publishable key is needed for hosted redirect Checkout. Never use the key pasted in chat.

USD sample prices: tee $25, hoodie $45; shipping $5 US only, sizes S/M/L/XL. Invented test defaults. One item per checkout. Edit the server-owned catalog in api/checkout.js AND the UI labels in shop.html when changing prices. No artwork or stock is represented as real.

Stripe Tax remains off until sandbox tax settings, business address, registrations and product tax treatment have been reviewed. Enabling calculation does not itself register, file or remit taxes.

Use Stripe test card 4242 4242 4242 4242, future expiry and valid test CVC. Check successful, failed and cancelled checkouts and invoices in the sandbox. This code has not been runtime-tested by committing it.

This is NOT production-ready: no database, webhook, inventory reservation, cart, automated shipping, durable deduplication, rate limiting or merchant authentication. Do not fulfill based on the return URL. Add signature-verified webhooks and transactionally persisted, idempotent paid-order processing before real sales. Live keys are deliberately blocked. Separate unpaid manual invoices for custom orders are not implemented; never invoice an already paid order twice.
