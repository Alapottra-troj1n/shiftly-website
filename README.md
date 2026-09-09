# shiftly-website

The public site for **Shiftly AI** — [joinshiftly.com](https://joinshiftly.com).

The product itself is a separate app at `app.joinshiftly.com`, in the sibling repo
`../shiftly`. See `CONTEXT.md` for why they are separate and what that means.

```bash
pnpm install
pnpm dev        # http://localhost:3000 (the app uses 3000 too — use --port 3001 for both)
pnpm verify     # typecheck + lint
```

**Before writing copy, read `CONTEXT.md`.** Two rules bite hardest: no invented social
proof (there are no customers yet), and the product tracks hours, never pay.
