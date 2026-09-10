import type { Metadata } from "next";
import Link from "next/link";
import { Header, Reveal } from "../components/landing-interactions";
import { Brand, Mascot } from "../components/mascot";
import { Arrow, Icon } from "../components/icons";
import { pageMetadata } from "../lib/seo";
import "../landing.css";

export const metadata: Metadata = pageMetadata(
  "Pricing: US$10 per Venue per Month",
  "Explore Shiftly AI's US$10 per venue, per month plan: staff rosters, shift checklists, stock ordering, compliance logs, hours and an AI Assistant. Pre-launch.",
  "/pricing",
);

const included = [
  ["calendar", "Plan the week", "Rosters, availability and shift requests."],
  ["checklist", "Keep the work together", "Shift checklists, stock ordering and compliance logs."],
  ["clock", "Keep track of the hours", "Clock-ins, corrections, reviews and CSV exports."],
  ["store", "Bring your team along", "Team access, permissions and a shared-tablet kiosk."],
  ["shield", "Know what changed", "Approvals, a visitor register and an audit trail."],
  ["sparkles", "Ask Shiftly", "Your venue, in a conversation with the Assistant."],
] as const;

export default function PricingPage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" className="pricing-main container">
      <Reveal className="section-heading centered pricing-heading">
        <p className="eyebrow">A little less to think about</p>
        <h1>One plan.<br /><span className="hero-accent">$10. No fuss.</span></h1>
        <p>Your whole working day, in one place.<br />One price for your venue.</p>
      </Reveal>
      <Reveal className="pricing-card">
        <div className="pricing-summary">
          <Mascot className="pricing-mascot" />
          <h2>Shiftly AI</h2>
          <p className="pricing-amount"><span className="pricing-currency">US$</span>10</p>
          <p className="pricing-period">per venue, per month</p>
          <p className="pricing-promise">From the first shift to the last check.</p>
          <a className="button button-primary" href="https://app.joinshiftly.com/sign-up">Join early <Arrow /></a>
          <p className="pricing-launch-note">Pre-launch · Create an account to explore.</p>
        </div>
        <div className="pricing-included">
          <h3>All the pieces of your day.</h3>
          <ul>{included.map(([icon, title, description]) => <li key={title}>
            <span className="pricing-feature-icon">{icon === "sparkles" ? <Mascot /> : <Icon name={icon} />}</span>
            <div><strong>{title}</strong><p>{description}</p></div>
          </li>)}</ul>
        </div>
      </Reveal>
      <div className="pricing-footnote"><Icon name="coffee" /><p>For cafés, bars and independent shops.<br />Shiftly tracks hours, never pay.</p></div>
      <Link className="text-link pricing-back" href="/#how-it-works">Take a look around <Arrow /></Link>
    </main>
    <footer className="site-footer container">
      <div className="footer-top"><Link href="/" aria-label="Shiftly AI home"><Brand /></Link><p>A little more together. A little less to chase.</p><a href="https://app.joinshiftly.com/sign-in" className="text-link">Sign in <Arrow /></a></div>
      <div className="footer-bottom"><span>© 2026 Shiftly AI</span><span>Made for the people who make the day.</span><Link href="/">Back to home <Arrow /></Link></div>
    </footer>
  </>;
}
