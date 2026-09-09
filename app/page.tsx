/*
  A starting point, not a landing page.

  This renders every piece of the design system on one screen — the washes,
  the gradient text, the brand and status tints, the type ramp, the card and
  button shapes — so the next person can see what they are working with
  instead of reading a token list. Replace it wholesale when the real page
  is built; nothing here is precious.

  Two constraints that are NOT free to change, both from ../shiftly/PRODUCT.md:

  1. Nothing may claim customers, testimonials, case studies, press or logos.
     Shiftly AI is pre-launch with zero of each. The predecessor's published
     figures (500+ businesses, 10k+ employees, 50k+ payrolls) belong to a
     different product called AU Payroll and must not be restated, adapted,
     or softened into a Shiftly claim.
  2. It tracks hours, never pay. No payroll, no pay rates, no tax IDs. That
     is a permanent product boundary and part of the positioning, not a gap
     to write around.
*/

const TOKENS = [
  { name: "canvas", value: "#fcfbf7", note: "the page" },
  { name: "surface", value: "#ffffff", note: "cards" },
  { name: "ink", value: "#121214", note: "body copy" },
  { name: "ink-soft", value: "#5b5b64", note: "secondary" },
  { name: "brand", value: "#6d4df0", note: "the violet" },
  { name: "brand-deep", value: "#4a2fbd", note: "on tint" },
];

const STATUS = [
  { name: "good", tint: "bg-good-soft", ink: "text-good" },
  { name: "warn", tint: "bg-warn-soft", ink: "text-warn" },
  { name: "info", tint: "bg-info-soft", ink: "text-info" },
  { name: "alarm", tint: "bg-alarm-soft", ink: "text-alarm" },
  { name: "quiet", tint: "bg-quiet-soft", ink: "text-quiet" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="text-sm font-bold uppercase tracking-widest text-ink-faint">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8">
      {/* ==================== the hero shape ==================== */}
      <div className="rise">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-deep">
          Shiftly AI
        </p>
        <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Run your venue&rsquo;s <span className="text-wash">whole day</span>.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Rosters, shift checklists, stock ordering and compliance logs in one app.
          The shift is the unit — and you can ask it instead of clicking it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://app.joinshiftly.com/sign-up"
            className="rounded-full wash-brand px-6 py-3 text-[0.9375rem] font-semibold text-white shadow-raised transition hover:opacity-95"
          >
            Get your venue running
          </a>
          <a
            href="https://app.joinshiftly.com/sign-in"
            className="font-semibold text-ink underline decoration-line-strong underline-offset-4 transition hover:decoration-ink"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* ==================== the washes ==================== */}
      <Section title="Washes — atmosphere, never meaning">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { cls: "wash-warm", label: "wash-warm" },
            { cls: "wash-cool", label: "wash-cool" },
            { cls: "wash-brand", label: "wash-brand", dark: true },
          ].map((w) => (
            <div
              key={w.label}
              className={`${w.cls} flex h-32 items-end rounded-lg border border-line p-4 shadow-card`}
            >
              <code className={`text-sm font-semibold ${w.dark ? "text-white" : "text-ink-soft"}`}>
                {w.label}
              </code>
            </div>
          ))}
        </div>
        <div className="wash-ai mt-4 flex h-20 items-end rounded-lg p-4 shadow-card">
          <code className="text-sm font-semibold text-white">
            wash-ai — the assistant&rsquo;s own line, violet into rose
          </code>
        </div>
      </Section>

      {/* ==================== colour ==================== */}
      <Section title="Colour">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOKENS.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-4 rounded-lg border border-line bg-surface p-3 shadow-card"
            >
              <span
                aria-hidden
                className="h-11 w-11 shrink-0 rounded-md border border-line"
                style={{ background: t.value }}
              />
              <span className="min-w-0">
                <code className="block text-sm font-bold">{t.name}</code>
                <span className="block text-sm text-ink-soft">
                  {t.value} · {t.note}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[0.9375rem] text-ink-soft">
          Status tints. Each pairs with an ink that clears AA on it, and the words
          carry the state — colour never does the work on its own.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {STATUS.map((s) => (
            <span
              key={s.name}
              className={`${s.tint} ${s.ink} rounded-full px-3.5 py-1.5 text-sm font-semibold`}
            >
              {s.name}
            </span>
          ))}
        </div>
      </Section>

      {/* ==================== type ==================== */}
      <Section title="Type — Figtree, self-hosted">
        <div className="space-y-3 rounded-lg border border-line bg-surface p-6 shadow-card">
          <p className="text-5xl font-extrabold leading-[1.05] tracking-tight">Hero, 48/60px</p>
          <p className="text-3xl font-extrabold tracking-tight">Section heading, 30px</p>
          <p className="text-lg text-ink-soft">Lead paragraph, 18px, ink-soft.</p>
          <p className="text-[0.9375rem] leading-relaxed">
            Body copy sits at 15px. Plain, direct, second person, in plain international
            English — the app&rsquo;s voice, and the site should not adopt a louder one just
            because it is marketing. State the consequence rather than warning vaguely.
          </p>
          <p className="text-sm text-ink-faint">Small print, 14px, ink-faint.</p>
        </div>
      </Section>

      {/* ==================== what to build ==================== */}
      <Section title="What goes here next">
        <div className="wash-cool rounded-lg border border-line p-6 shadow-card sm:p-8">
          <p className="text-[0.9375rem] leading-relaxed text-ink">
            The brand mark, the AI mascot and the illustration set are being made
            separately and are not in this repo yet. Drop them in{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 text-sm">public/</code> and
            wire the favicon in{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 text-sm">app/layout.tsx</code>{" "}
            where the TODO is.
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink">
            Read <code className="rounded bg-surface px-1.5 py-0.5 text-sm">CONTEXT.md</code>{" "}
            before writing copy. It carries the two rules that are easy to break by
            accident: no invented social proof, and hours never pay.
          </p>
        </div>
      </Section>
    </main>
  );
}
