import { Icon } from "./icons";
import { Reveal } from "./landing-interactions";
import { Mascot } from "./mascot";
import styles from "./shift-comparison.module.css";

const differences = [
  {
    label: "Finishing the shift",
    icon: "checklist",
    separateCost: "Often a paid add-on",
    separate: "A list to follow up on.",
    detail: "Check the tasks separately from the hours.",
    shiftlyCost: "Built into Shiftly",
    connected: "Done before clock-out.",
    benefit: "Required checklist items hold clock-out until complete, or a manager overrides with a reason.",
  },
  {
    label: "The work in between",
    icon: "box",
    separateCost: "More tools to budget for",
    separate: "An order here. A log there.",
    detail: "Move between your roster, stock list and daily logs.",
    shiftlyCost: "Built into Shiftly",
    connected: "One shift carries the work.",
    benefit: "Stock orders, suggested quantities and daily compliance logs live with the shift.",
  },
  {
    label: "Getting things done",
    icon: "sparkles",
    separateCost: "Often on a higher plan",
    separate: "Open each tool. Find the action.",
    detail: "Work through your day across separate screens.",
    shiftlyCost: "Built into Shiftly",
    connected: "Ask. Review. Act.",
    benefit: "Ask the Assistant to prepare a roster or handle a request, with your permissions and an audit trail.",
  },
  {
    label: "At the door",
    icon: "store",
    separateCost: "Another system to manage",
    separate: "A time clock. Then a visitor book.",
    detail: "Keep another record for the people who are not on your team.",
    shiftlyCost: "Built into Shiftly",
    connected: "One kiosk. Two jobs.",
    benefit: "The same shared tablet handles staff PIN clock-ins and visitor or contractor sign-ins.",
  },
] as const;

export function ShiftComparison() {
  return (
    <section
      className={`section container ${styles.section}`}
      aria-labelledby="comparison-title"
    >
      <Reveal>
        <div className={styles.intro}>
          <div className="section-heading">
            <p className="eyebrow">The Shiftly difference</p>
            <h2 id="comparison-title">The roster is just the start.</h2>
          </div>
          <p className={styles.lead}>
            You need to know who’s working. And that the work gets done.
            Shiftly connects the two.
          </p>
        </div>
        <div className={styles.board}>
          <table className={styles.table} role="table">
            <caption className={styles.caption}>
              A scheduling-first setup with separate tools compared with Shiftly AI
            </caption>
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader" id="comparison-separate" className={styles.otherHeading}>
                  <span className={styles.columnIdentity}>
                    <span className={styles.otherIcon}><Icon name="calendar" /></span>
                    <span>Scheduling + separate tools</span>
                  </span>
                  <span className={styles.subtitle}>The day, in pieces</span>
                </th>
                <th scope="col" role="columnheader" id="comparison-shiftly" className={styles.shiftlyHeading}>
                  <span className={styles.columnIdentity}><Mascot /> Shiftly AI</span>
                  <span className={styles.subtitle}>The day, connected</span>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              {differences.map((item) => (
                <tr key={item.label} role="row">
                  <td className={styles.otherCell} role="cell" headers="comparison-separate">
                    <span className={styles.mobileIdentity} aria-hidden="true">Scheduling + separate tools</span>
                    <span className={styles.label}>{item.label}</span>
                    <span className={`${styles.costTag} ${styles.extraCost}`}>
                      {item.separateCost}
                    </span>
                    <strong>{item.separate}</strong>
                    <p>{item.detail}</p>
                  </td>
                  <td className={styles.shiftlyCell} role="cell" headers="comparison-shiftly">
                    <span className={styles.mobileIdentity} aria-hidden="true">Shiftly AI</span>
                    <span className={styles.label}><Icon name={item.icon} />{item.label}</span>
                    <span className={`${styles.costTag} ${styles.includedCost}`}>
                      {item.shiftlyCost}
                    </span>
                    <strong>{item.connected}</strong>
                    <p>{item.benefit}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.footer}>
            <span className={styles.footerLabel}>The whole shift, connected</span>
            <ol className={styles.flow} aria-label="The Shiftly workflow">
              {["Roster", "Tasks", "Orders", "Logs", "Clock-out"].map((step, index) => (
                <li key={step}>
                  {index > 0 && <Icon name="arrow" />}
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className={styles.note}>
          An illustrative workflow comparison. Individual apps and plans vary.
        </p>
      </Reveal>
    </section>
  );
}
