# Pocket Studio — pocketstudio.biz

Independent Seattle hair studio site for MyKey Pocket. Multi-route app built with
**TanStack Start + React + Tailwind**, merged from the three older Pocket Studio repos.

## Routes

| Path | Page |
|------|------|
| `/` | Home / hero / referral offer |
| `/services` | Services + pricing |
| `/about` | About MyKey + contact |
| `/updates` | Studio updates / blog |
| `/policies` | House rules |
| `/book` | Cal.com booking embed |
| `/privacy`, `/terms` | Legal |

## Updating content

All copy that changes often lives in **`src/content.ts`** — services, prices,
lead times, policies, and update posts. Edit that one file, commit, and the whole
site updates. No component changes needed for routine edits.

- Add a service → add an object to `services[]`.
- Add an update post → add an object to `updates[]`.
- Change a policy → edit `policies[]`.
- Change phone/email/Cal link → edit `contact`.

Nav lives in `src/components/site.tsx` (`links` array).

## Develop

```sh
npm install --legacy-peer-deps
npm run dev      # http://127.0.0.1:8080
npm run build    # outputs .output/
```

> Note: install needs `--legacy-peer-deps` (Lovable-generated dep tree). Do not run
> `vite preview` — it points at the wrong output dir; use `npm run dev` to verify.
