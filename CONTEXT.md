# Shiftly AI — the marketing site

Read this before writing a line of copy or a component. It is short on purpose.

## What this is

The public site at **joinshiftly.com**. The product itself lives at
**app.joinshiftly.com**, in the sibling repo `../shiftly`.

They are deliberately separate deployments, for three reasons worth keeping in mind
before anyone proposes merging them:

- `/` in the app is already the signed-in dashboard. A marketing homepage cannot
  share that route without host-based rewriting in the app's middleware, which would
  put the landing page one middleware bug away from redirecting visitors to a sign-in
  screen.
- The app's `proxy.ts` redirects every non-public path to `/sign-in`. Marketing pages
  do not want to live behind that.
- The app ships a deliberately tight Content-Security-Policy (`frame-ancestors 'none'`,
  no external script sources) because it holds staff names, hours and a visitor
  register. A landing page usually wants an embedded demo, analytics, maybe a form
  widget. Widening the app's policy to suit marketing would be the wrong trade.

Different release cadence, too: marketing copy changes weekly, the app changes
deliberately. Coupling them means every typo fix redeploys the product.

## Two rules that are easy to break by accident

Both come from `../shiftly/PRODUCT.md`, and both are the kind of thing that gets
written into marketing copy without anyone noticing.

**1. There is no social proof, because there are no customers.** Shiftly AI is
pre-launch: zero venues, zero users, no testimonials, no case studies, no press, no
logos. Nothing on this site may imply otherwise — not "trusted by", not "join
hundreds of venues", not a wall of placeholder logos, not invented review quotes.

The predecessor product's published figures — 500+ businesses, 10k+ employees, 50k+
payrolls run — belong to **AU Payroll**, a different product. Do not restate them,
adapt them, or soften them into a Shiftly claim.

Screens shown in marketing need invented-but-plausible content, and no capability may
be demonstrated as though customers were using it.

**2. It tracks hours, never pay.** No payroll, no pay rates, no multipliers, no tax
IDs, no bank details — permanently, not as a v1 cut. It is what lets the product work
in any country. The site may say hours are exported to whatever payroll a venue
already runs; it may never imply Shiftly pays anyone or calculates what an hour is
worth.

## Positioning, in the product's own words

- **The shift is the unit, and the shift runs the store.** Rostering tools stop at the
  roster and the timesheet. Shiftly carries the same shift forward into what has to
  happen during it: category-based ordering with min/max logic, configurable
  compliance logs that replace paper, task checklists that gate clock-out, a visitor
  register.
- **And you can ask it instead of clicking it.** The venue is reachable as a
  conversation — in the app, or from Claude and ChatGPT over a connector — with every
  change audited exactly as a click is. This is the second half of the position, not a
  bolted-on feature.
- **Who it is for:** owner-operators of small venues — cafés, bars, independent
  grocers — internationally, not in any one country.

Full detail in `../shiftly/PRODUCT.md`. It is the authority; this file is a summary.

## Voice

Plain, direct, second person, plain international English. State consequences rather
than warning vaguely. No regional idiom. The app says "Approving reassigns this shift
to Sam", not "Are you sure?" — the site should not adopt a louder register just
because it is marketing.

## The design system

`app/globals.css` carries the app's tokens, copied deliberately rather than shared —
see the comment at the top of that file. The app is the source of truth for anything
appearing in both; if a token changes there, change it here.

- **Type:** Figtree, self-hosted via `next/font` (no run-time request to Google, and
  no font host to add to a CSP later).
- **Ground:** a warm white canvas (`#fcfbf7`), white cards, hairline borders.
- **Brand:** a warm violet, `#6d4df0`.
- **Washes:** `wash-warm`, `wash-cool`, `wash-brand`, `wash-ai` — soft three-stop
  gradients used as atmosphere. Never behind small body copy.
- **`text-wash`:** the one gradient-text moment. In the app it appears exactly once
  per screen; a hero headline is the marketing equivalent. Never a paragraph.
- **Accessibility:** the app targets WCAG 2.2 AA and it is written down. The marketing
  site should not undercut that — contrast, focus order, keyboard operability, target
  size, visible labels.

What is deliberately **not** copied: the app's components, shell and layout rules. A
marketing page wants big type and air; the app wants dense functional screens read
one-handed mid-shift. Same family, different job.

## Brand assets

The logo, the AI mascot and the illustration set are being made separately and are not
here yet. When they land:

- put them in `public/`
- wire the favicon and apple-touch-icon at the TODO in `app/layout.tsx`
- the app has placeholder icons of its own (`../shiftly/public/icons/`, a generic
  calendar glyph explicitly marked as a stand-in with zero brand equity) — replace
  those at the same time so the two stay in step

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm verify     # typecheck + lint
```

Note the app also defaults to port 3000. Run one of them on another port if you want
both up at once: `pnpm dev --port 3001`.

## Deploying

Its own Vercel project, separate from the app's, with `joinshiftly.com` pointed at it.
The app keeps `app.joinshiftly.com`. Nothing here shares an environment variable, a
database or a build with the app.
