# shiftly-website

The public site for **Shiftly AI** — [joinshiftly.com](https://joinshiftly.com).

The product itself is a separate app at `app.joinshiftly.com`, in the sibling repo
`../shiftly`. See `CONTEXT.md` for why they are separate and what that means.

```bash
pnpm install
pnpm dev        # http://localhost:3000 (the app uses 3000 too — use --port 3001 for both)
pnpm verify     # typecheck + lint
pnpm build      # production build
```

**Before writing copy, read `CONTEXT.md`.** Two rules bite hardest: no invented social
proof (there are no customers yet), and the product tracks hours, never pay.

The landing page uses the supplied brand illustrations and product screenshots,
with a keyboard-accessible product tour, enlarged screenshot previews, an example
checklist, scripted Assistant examples and native FAQ disclosures. Motion honours
`prefers-reduced-motion`. Fonts and imagery are hosted locally.

Primary CTAs open the product's `/sign-up` page. No waitlist service or database is
required. Examples are explicitly labelled and do not make live product changes.
