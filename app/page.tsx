import Image from "next/image";
import Link from "next/link";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL, pageMetadata } from "./lib/seo";
import { Brand } from "./components/mascot";
import { ShiftComparison } from "./components/shift-comparison";
import {
  AssistantDemo,
  FAQ,
  Header,
  ProductTour,
  Reveal,
  ShiftChecklist,
} from "./components/landing-interactions";
import { Arrow, Icon } from "./components/icons";
import "./landing.css";

const SIGN_UP = "https://app.joinshiftly.com/sign-up";
export const metadata = {
  ...pageMetadata(HOME_TITLE, HOME_DESCRIPTION, "/"),
  title: { absolute: HOME_TITLE },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/brand/shiftly-icon-180.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: HOME_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
const questions = [
  {
    question: "Who is Shiftly AI for?",
    answer:
      "Owners, managers and teams at small venues: cafés, bars and independent shops. You plan the week and review the day; your team sees their shifts and the work that belongs to them.",
  },
  {
    question: "Does everyone need a computer?",
    answer:
      "Your team can see shifts, complete checklists and submit logs from a phone. A shared tablet at the counter handles PIN clock-ins and visitor sign-ins. Owners and managers can work from a phone or desktop.",
  },
  {
    question: "What can I ask the Assistant to do?",
    answer:
      "Owners and managers can ask about the day, prepare a roster and handle supported requests. The Assistant uses your permissions, the same actions as the app and the same approval rules. Privileged changes leave an audit trail.",
  },
  {
    question: "Can I export my team's hours?",
    answer:
      "Yes. Clock-ins feed into an hours summary, with a correction and review flow when something needs fixing. You can export the hours as CSV and use them in your existing process. Shiftly AI records time; it does not calculate pay.",
  },
  {
    question: "What does joining early mean?",
    answer:
      "Shiftly AI is pre-launch. You can create a venue account to explore the product as it develops. The plan is US$10 per venue, per month. See the pricing page for what is included.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="tiny-sun" aria-hidden="true">
                <Icon name="sun" />
              </span>{" "}
              A warmer working day
            </div>
            <h1 id="hero-title">
              Your whole shift.
              <br />
              <span className="hero-accent">In one place.</span>
            </h1>
            <p className="hero-description">
              Plan the roster. Keep tasks and logs with each shift. Track the
              hours. And when you need a hand, just ask Shiftly AI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={SIGN_UP}>
                Join the founding venues <Arrow />
              </a>
              <a className="text-link" href="#how-it-works">
                See how a shift works{" "}
                <span className="play-icon">
                  <Icon name="play" />
                </span>
              </a>
            </div>
            <p className="hero-note">
              <span className="small-dot" /> Built for small venues. Open to
              early explorers.
            </p>
          </div>
          <div className="hero-art">
            <Image
              src="/brand/shift-objects.png"
              alt="A warm ceramic schedule, checklist and stock box, connected by a peach ribbon beside a coffee cup."
              width={1536}
              height={1024}
              preload
              quality={90}
              sizes="(max-width: 700px) 125vw, (max-width: 900px) 545px, (max-width: 1100px) 630px, (max-width: 1449px) 730px, (max-width: 1599px) 765px, (max-width: 2000px) 48vw, 960px"
            />
            <div className="art-note">
              <span className="note-stroke" aria-hidden="true" /> All the little
              things,
              <br />
              together at last.
            </div>
          </div>
        </section>
        <div className="audience-strip container">
          <p>For the places that make a neighbourhood.</p>
          <div className="audience-types">
            <span>
              <Icon name="coffee" /> Cafés
            </span>
            <span>
              <Icon name="glass" /> Bars
            </span>
            <span>
              <Icon name="store" /> Independent shops
            </span>
          </div>
        </div>
        <section
          className="section container tour-section"
          id="how-it-works"
          aria-labelledby="tour-title"
        >
          <Reveal className="section-heading centered">
            <p className="eyebrow">From the first shift to the last check</p>
            <h2 id="tour-title">One shift. Everything connected.</h2>
            <p>
              A clear plan for you. A clear day for your team.
              <br className="desktop-break" /> The work stays together, from
              roster to clock-out.
            </p>
          </Reveal>
          <Reveal>
            <ProductTour />
          </Reveal>
        </section>
        <section
          className="section features-section"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="container">
            <Reveal className="features-intro">
              <div className="section-heading">
                <p className="eyebrow">Less to chase. More room to breathe.</p>
                <h2 id="features-title">
                  The little things
                  <br />
                  make the whole day.
                </h2>
              </div>
              <p className="section-lead">
                The opening checks. The stock order. The fridge log. Give every
                shift its own list, so everyone knows what needs doing.
              </p>
            </Reveal>
            <div className="feature-grid">
              <Reveal className="feature-card checklist-feature">
                <div className="feature-icon peach">
                  <Icon name="checklist" />
                </div>
                <h3>
                  The right tasks.
                  <br />
                  The right shift.
                </h3>
                <p>
                  Opening or closing, your team sees the checklist for the shift
                  they are working.
                </p>
                <ShiftChecklist />
              </Reveal>
              <Reveal className="feature-card">
                <div className="feature-icon lilac">
                  <Icon name="box" />
                </div>
                <h3>
                  A stock check.
                  <br />
                  An order ready.
                </h3>
                <p>
                  See suggested quantities from your stock levels. Submit the
                  day’s order by category.
                </p>
                <div className="stock-example" aria-label="Example stock order">
                  <div className="mini-label">
                    <span>Today’s order</span>
                    <span className="soft-tag">Produce</span>
                  </div>
                  <div className="stock-row">
                    <span className="produce-icon tomato" aria-hidden="true">
                      ●
                    </span>
                    <span>
                      Tomatoes<small>Suggested order</small>
                    </span>
                    <strong>
                      4 <small>boxes</small>
                    </strong>
                  </div>
                  <div className="stock-row">
                    <span className="produce-icon leaf" aria-hidden="true">
                      <Icon name="leaf" />
                    </span>
                    <span>
                      Salad leaves<small>Suggested order</small>
                    </span>
                    <strong>
                      6 <small>bags</small>
                    </strong>
                  </div>
                  <p className="example-label">
                    Illustrative example · independent shop
                  </p>
                </div>
              </Reveal>
              <Reveal className="feature-card">
                <div className="feature-icon rose">
                  <Icon name="clipboard" />
                </div>
                <h3>
                  Checks on the shift.
                  <br />
                  Records in one place.
                </h3>
                <p>
                  Keep temperatures, photos and safety checks with the work.
                  Ready for your review.
                </p>
                <div className="log-example">
                  <div className="mini-label">
                    <span>
                      <Icon name="thermometer" /> Fridge check
                    </span>
                    <span className="soft-tag">Bar opening</span>
                  </div>
                  <div className="temperature">
                    3.2<span>°C</span>
                    <span className="recorded">
                      <Icon name="check" /> Recorded
                    </span>
                  </div>
                  <div className="log-footer">
                    <span>Recorded by Alex</span>
                    <span>09:04</span>
                  </div>
                  <p className="example-label">Illustrative example · bar</p>
                </div>
              </Reveal>
            </div>
            <Reveal className="completion-note">
              <Icon name="shield" />
              <p>
                <strong>A shift carries its responsibilities.</strong> Required
                checklist work must be resolved before clock-out.
              </p>
            </Reveal>
          </div>
        </section>
        <section
          className="section container decisions-section"
          aria-labelledby="decisions-title"
        >
          <Reveal className="decision-visual">
            <div className="decision-heading">
              <span className="feature-icon lilac">
                <Icon name="swap" />
              </span>
              <div>
                <strong>A shift swap to review</strong>
                <span>Example venue data</span>
              </div>
              <span className="soft-tag">Waiting</span>
            </div>
            <div className="people-swap">
              <div>
                <span className="avatar mint">MO</span>
                <strong>Maya</strong>
                <span>Requests a hand-off</span>
              </div>
              <Icon name="swap" />
              <div>
                <span className="avatar lilac">JP</span>
                <strong>Jonas</strong>
                <span>Would take the shift</span>
              </div>
            </div>
            <div className="swap-detail">
              <Icon name="calendar" />
              <div>
                <strong>Sunday · 07:00–15:00</strong>
                <span>Counter shift</span>
              </div>
            </div>
            <p className="decision-consequence">
              Approving reassigns this shift to Jonas. You see the change before
              you decide.
            </p>
          </Reveal>
          <Reveal className="section-heading decision-copy">
            <p className="eyebrow">Your attention, in the right place</p>
            <h2 id="decisions-title">
              One place for
              <br />
              “can you check this?”
            </h2>
            <p>
              A shift swap. A change to the hours. A log to review. See what is
              waiting, who is asking, and what your decision will change.
            </p>
            <a className="text-link" href="#assistant">
              Or ask your Assistant to help <Arrow />
            </a>
          </Reveal>
        </section>
        <section
          className="assistant-section"
          id="assistant"
          aria-labelledby="assistant-title"
        >
          <div className="container assistant-layout">
            <Reveal className="assistant-copy section-heading">
              <p className="eyebrow">
                <Icon name="sparkles" /> Meet your extra pair of hands
              </p>
              <h2 id="assistant-title">
                A little less clicking.
                <br />
                Just ask.
              </h2>
              <p>
                Prepare next week’s roster. See what needs you today. Ask
                Shiftly AI in plain words, and keep your attention on your
                venue.
              </p>
              <div className="sunny-introduction">
                <Image
                  src="/brand/sunny-studio.png"
                  alt="Shiftly, the smiling peach and lilac folded shift card."
                  width={1280}
                  height={1280}
                  sizes="180px"
                  quality={90}
                />
                <span>
                  Meet Shiftly.
                  <br />Your little helping hand.
                  <span className="sunny-underline" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
            <Reveal>
              <AssistantDemo />
            </Reveal>
            <Reveal className="assistant-trust">
              <Icon name="shield" />
              <p>
                <strong>
                  Same permissions. Same actions. Same audit trail.
                </strong>
                <span>
                  For owners and managers. Asking is a way in, never a way
                  around.
                </span>
              </p>
            </Reveal>
          </div>
        </section>
        <section
          className="section container hours-section"
          aria-labelledby="hours-title"
        >
          <Reveal className="section-heading">
            <p className="eyebrow">From clock-in to a clear record</p>
            <h2 id="hours-title">
              The day is done.
              <br />
              The hours add up.
            </h2>
            <p>
              Clock in at the counter. Review corrections with the reason
              attached. Export your team’s hours into the process you already
              use.
            </p>
            <div className="hours-benefits">
              <span>
                <Icon name="check" /> PIN clock-in on a shared tablet
              </span>
              <span>
                <Icon name="check" /> Corrections with a clear record
              </span>
              <span>
                <Icon name="check" /> Hours ready to export as CSV
              </span>
            </div>
          </Reveal>
          <Reveal className="hours-visual">
            <div className="hours-card">
              <div className="mini-label">
                <span>
                  <Icon name="clock" /> A shift in hours
                </span>
                <span className="soft-tag">Example</span>
              </div>
              <div className="hours-total">
                7<span>h</span> 35<span>m</span>
              </div>
              <p>Time worked, with the break taken out.</p>
              <div className="time-track">
                <span />
                <span />
                <span />
              </div>
              <div className="time-points">
                <div>
                  <strong>06:57</strong>
                  <span>Clocked in</span>
                </div>
                <div>
                  <strong>30 min</strong>
                  <span>Break</span>
                </div>
                <div>
                  <strong>15:02</strong>
                  <span>Clocked out</span>
                </div>
              </div>
              <div className="export-note">
                <Icon name="file" />
                <span>Clear hours. Your existing process.</span>
                <Icon name="check" />
              </div>
            </div>
          </Reveal>
        </section>
        <ShiftComparison />
        <section
          className="section container faq-section"
          id="questions"
          aria-labelledby="faq-title"
        >
          <Reveal className="section-heading">
            <p className="eyebrow">A few things you might be wondering</p>
            <h2 id="faq-title">
              Good questions.
              <br />
              Straight answers.
            </h2>
          </Reveal>
          <FAQ items={questions} />
        </section>
        <section
          className="founding-section container"
          id="join"
          aria-labelledby="join-title"
        >
          <Reveal className="founding-card">
            <span className="founding-symbol" aria-hidden="true">
              <Icon name="sun" />
            </span>
            <p className="eyebrow">Small venues. A new beginning.</p>
            <h2 id="join-title">
              Make room for
              <br />a warmer working day.
            </h2>
            <p>
              We’re building Shiftly AI for places like yours.
              <br />
              Get in early and help shape what comes next.
            </p>
            <a className="button button-primary" href={SIGN_UP}>
              Join the founding venues <Arrow />
            </a>
            <span className="founding-note">
              Pre-launch · Come explore with us
            </span>
          </Reveal>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <Link href="/" aria-label="Shiftly AI home"><Brand /></Link>
          <p>A little more together. A little less to chase.</p>
          <a href="https://app.joinshiftly.com/sign-in" className="text-link">
            Sign in <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Shiftly AI</span>
          <Link href="/pricing#top">Pricing</Link>
          <span>Made for the people who make the day.</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
