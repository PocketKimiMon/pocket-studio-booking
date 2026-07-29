# Deploy — Netlify (pocket-studio-seattle)

**Live:** https://pocket-studio-seattle.netlify.app
Site ID: `23843508-456e-42e5-8475-99ed98ed4191` (team: mykeypocket)

## The command (post-Lovable-restructure)

```bash
NITRO_PRESET=netlify bun run build
netlify deploy --prod --dir=dist --site=23843508-456e-42e5-8475-99ed98ed4191 --skip-functions-cache
```

## Gotchas (learned 2026-07-29)

- **Static dir is `dist/`, NOT `.output/public`** — Lovable's restructure changed the
  nitro layout (`nitro.json: publicDir: ../../dist`). Deploying `--dir=.output/public`
  silently uploads nothing and the site loses its CSS (404 on `/assets/styles-*.css` →
  unstyled white page). This was the "site looks broken" root cause.
- SSR runs as a Netlify Function from `.netlify/functions-internal/` (auto-detected).
  A static-only deploy 404s every route — there is no prerendered index.html.
- `--skip-functions-cache` forces the function bundle to rebuild; without it the CLI
  can serve a stale manifest that points at a dead CSS hash.
- Verify after every deploy:
  ```bash
  CSS=$(curl -s https://pocket-studio-seattle.netlify.app | grep -ao 'styles-[^"]*\.css' | head -1)
  curl -s -o /dev/null -w "%{http_code}\n" "https://pocket-studio-seattle.netlify.app/assets/$CSS"  # want 200
  ```
- Netlify PAT (deploy-capable, `nfp_…`) lives in `~/.hermes/.env` as NETLIFY_AUTH_TOKEN.
  CLI login also works (mykeypocket@pocketstudio.biz).
- Old fleet: all 27 legacy SiteForge demo sites deleted 2026-07-29 (user-ordered).
