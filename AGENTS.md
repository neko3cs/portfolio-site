# AGENTS.md

## Commands

- `pnpm install` / `pnpm start` (dev server) / `pnpm build`
- `pnpm test` runs `ng test` (Vitest + jsdom). For the post-implementation gate, use the `test-code` skill.
- `pnpm preview` builds and runs `wrangler dev` locally.
- `pnpm deploy` builds and publishes to production via `wrangler deploy`. Run it only when the user asks.

## Gotchas

- Never add `public/_redirects`. `/* /index.html 200` is judged an infinite redirect loop and `wrangler deploy` fails. The SPA fallback comes from `not_found_handling: single-page-application` in `wrangler.jsonc` (see 333d9a1).
- jsdom has no `IntersectionObserver`, and `src/app/app.ts` uses it for scroll reveal. Specs that render `App` must stub it (see `src/app/app.spec.ts`).
- Dependencies with native install scripts do not build until listed under `allowBuilds` in `pnpm-workspace.yaml`.
