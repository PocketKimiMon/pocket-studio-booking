# Deploy status

## Live now — Cloudflare Pages (permanent)
https://pocket-studio.pages.dev
- Project: `pocket-studio` (production branch: main)
- Deploy: `npx wrangler pages deploy . --project-name=pocket-studio --branch=main` from a clean dir containing only index.html, privacy.html, terms.html, assets/ (see /tmp/pocket-studio-deploy pattern — do NOT deploy the repo root, it would upload node_modules)
- Free tier: unlimited bandwidth, commercial use OK
- Wrangler is logged in on this machine

## Old/temporary (dead or stale)
- trycloudflare tunnel — temporary, dead when machine sleeps
- Netlify Drop https://astonishing-sunflower-e48e0e.netlify.app — never claimed, has pre-revision copy, ignore

## GitHub
Repo: https://github.com/PocketStudio-Biz/Pocket-Studio-Booking-Page-Current (private)
Note: Pages deploys are manual via wrangler (not git-connected). After editing copy, re-run the wrangler deploy from a fresh clean copy.

## Custom domain
`pocketstudio.biz` is on GoDaddy but currently points to 0.0.0.0. To attach: Cloudflare dashboard → Pages → pocket-studio → Custom domains → add pocketstudio.biz, then update GoDaddy DNS (CNAME to pocket-studio.pages.dev, or move DNS to Cloudflare nameservers).
