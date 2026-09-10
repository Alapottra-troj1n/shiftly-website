# Shiftly AI — marketing site

**Read `CONTEXT.md` first.** It carries the positioning, the voice, the design
tokens, and the two rules that are easy to break by accident:

1. **No social proof of any kind.** Pre-launch, zero customers. No testimonials, no
   case studies, no logo walls, no "trusted by". The predecessor's published figures
   belong to a different product and must never be restated or softened into a
   Shiftly claim.
2. **Hours, never pay.** No payroll, no rates, no tax IDs — permanently.

Other ground rules:

- The product lives in the sibling repo `../shiftly` and is the authority on
  positioning (`PRODUCT.md`), the design system (`DESIGN.md`, `app/globals.css`) and
  what the product actually does (`MODULES.md`). Read from it; never write to it.
- Design tokens in `app/globals.css` are copied from the app on purpose. If one
  changes there, change it here.
- Voice: plain, direct, second person, plain international English. State the
  consequence. No regional idiom, no marketing bluster.
- Next.js 16 App Router · React 19 · TypeScript · Tailwind v4 · pnpm.
- Checks: `pnpm verify` (typecheck + lint).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
