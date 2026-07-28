# Deploy status

## Live now (no password, temporary while this Mac is on)
https://benjamin-reports-parenting-beneath.trycloudflare.com

## Netlify Drop (permanent once claimed; password-gated until then)
- Site: https://astonishing-sunflower-e48e0e.netlify.app
- Password: My-Drop-Site
- Claim within 60 minutes of deploy (see latest deploy output)

After claiming in a Netlify account, remove site password in Site settings → Access control.

## GitHub Pages (best long-term)
Needs `gh auth login` on this Mac (no GitHub token/SSH key present).

Then:
```bash
cd ~/"Pocket Studio Booking Page Current"
gh repo create pocket-studio-booking --public --source=. --remote=origin --push
# enable Pages: Settings → Pages → Deploy from branch main /
```

## Custom domain
`pocketstudio.biz` is on GoDaddy but currently points to 0.0.0.0. After Netlify claim, add the domain in Netlify DNS and update GoDaddy A/CNAME records.
