"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Arrow, Icon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={nav}>
      <div className="nav-inner container">
        <a className="brand-link" href="#" aria-label="Shiftly AI home">
          <Image
            src="/brand/lockup-primary.svg"
            alt="Shiftly AI"
            width={175}
            height={43}
            preload
          />
        </a>
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-nav"
          aria-label="Main navigation"
        >
          <a href="#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#features" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#assistant" onClick={() => setOpen(false)}>
            Meet the Assistant <span className="nav-ai-dot" />
          </a>
          <a href="#questions" onClick={() => setOpen(false)}>
            FAQs
          </a>
          <a
            className="mobile-sign-in"
            href="https://app.joinshiftly.com/sign-in"
          >
            Sign in <Arrow />
          </a>
        </nav>
        <div className="nav-actions">
          <a className="sign-in" href="https://app.joinshiftly.com/sign-in">
            Sign in
          </a>
          <a className="button button-primary button-small" href="#join">
            Join early <Arrow />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

const tourSteps = [
  {
    label: "Plan the week",
    title: "Publish the roster. Everyone sees their week.",
    description:
      "Prepare shifts, check availability and publish when you are ready. Your team knows when and where they are needed.",
    desktop: "03-roster-desktop.png",
    mobile: "13-today-mobile.png",
    alt: "Shiftly AI roster with unpublished shifts and a shift swap waiting for review.",
    mobileAlt: "Maya’s mobile view of her shift, weekly hours and checklist.",
    screen: "The roster",
    mobileLabel: "Their shift, in their pocket",
  },
  {
    label: "Work the shift",
    title: "The work goes with the person on shift.",
    description:
      "Your team opens their shift to see its tasks, orders and logs. You can see where the day stands from your own screen.",
    desktop: "02-today-desktop.png",
    mobile: "14-shift-checklist-mobile.png",
    alt: "Shiftly AI Today dashboard showing staff on shift, hours and items needing attention.",
    mobileAlt:
      "A staff shift checklist with required tasks, a photo request and a stock order.",
    screen: "Today at your venue",
    mobileLabel: "The right work, right here",
  },
  {
    label: "Review the day",
    title: "Clear decisions. A record you can follow.",
    description:
      "Review hours and requests with the context attached. Correct the record when needed, then export the hours.",
    desktop: "05-hours-desktop.png",
    mobile: "13-today-mobile.png",
    alt: "Shiftly AI hours view showing a correction request with recorded and proposed hours.",
    mobileAlt: "Maya’s mobile dashboard with her hours for the week.",
    screen: "The hours",
    mobileLabel: "Their hours, always in view",
  },
];

export function ProductTour() {
  const [active, setActive] = useState(1);
  const [expanded, setExpanded] = useState<"desktop" | "mobile">("desktop");
  const dialog = useRef<HTMLDialogElement>(null);
  const step = tourSteps[active];
  function changeTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % tourSteps.length;
    else if (event.key === "ArrowLeft")
      next = (index + tourSteps.length - 1) % tourSteps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tourSteps.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`tour-tab-${next}`)?.focus();
  }
  function showImage(kind: "desktop" | "mobile") {
    setExpanded(kind);
    dialog.current?.showModal();
  }
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const cleanup = () => document.body.classList.remove("preview-open");
    const observer = new MutationObserver(() =>
      document.body.classList.toggle("preview-open", element.open),
    );
    observer.observe(element, { attributes: true, attributeFilter: ["open"] });
    return () => {
      observer.disconnect();
      cleanup();
    };
  }, []);
  return (
    <div className="product-tour">
      <div className="tour-tabs" role="tablist" aria-label="Explore a shift">
        {tourSteps.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            id={`tour-tab-${index}`}
            aria-controls="tour-panel"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => changeTab(event, index)}
          >
            <span className="step-number">0{index + 1}</span>
            {item.label}
            <Arrow />
          </button>
        ))}
      </div>
      <div
        id="tour-panel"
        role="tabpanel"
        aria-labelledby={`tour-tab-${active}`}
        tabIndex={0}
        className="tour-panel"
      >
        <div className="product-stage">
          <div className="browser-preview">
            <div className="browser-bar">
              <span className="browser-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>
                <Icon name="shield" /> app.joinshiftly.com
              </span>
              <button
                type="button"
                onClick={() => showImage("desktop")}
                aria-label={`Enlarge ${step.screen} screenshot`}
              >
                <Icon name="expand" />
              </button>
            </div>
            <button
              className="screenshot-button"
              type="button"
              onClick={() => showImage("desktop")}
              aria-label={`Enlarge ${step.screen} screenshot`}
            >
              <Image
                key={step.desktop}
                className="tour-screenshot"
                src={`/screenshots/${step.desktop}`}
                alt={step.alt}
                width={2880}
                height={1800}
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 75vw, 940px"
              />
            </button>
          </div>
          <div className="phone-preview">
            <button
              type="button"
              onClick={() => showImage("mobile")}
              aria-label="Enlarge staff phone screenshot"
            >
              <Image
                key={step.mobile}
                src={`/screenshots/${step.mobile}`}
                alt={step.mobileAlt}
                width={780}
                height={1688}
                sizes="(max-width: 700px) 250px, 220px"
              />
            </button>
          </div>
          <span className="phone-annotation">
            {step.mobileLabel}
            <svg viewBox="0 0 60 50" fill="none" aria-hidden="true">
              <path
                d="M4 3c30 0 45 10 38 36m-9-10 9 12 11-11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div className="tour-caption" key={step.title}>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <span className="example-label">
            <span className="small-dot" /> Example venue data
          </span>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="preview-dialog"
        aria-label="Product screenshot preview"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="preview-dialog-header">
          <span>
            {expanded === "mobile" ? "Your team's phone view" : step.screen} ·
            Example venue data
          </span>
          <button
            type="button"
            className="icon-button"
            onClick={() => dialog.current?.close()}
            aria-label="Close screenshot preview"
            autoFocus
          >
            <Icon name="close" />
          </button>
        </div>
        <div
          className={`preview-image-wrap ${expanded === "mobile" ? "preview-mobile" : ""}`}
        >
          <Image
            src={`/screenshots/${step[expanded]}`}
            alt={expanded === "mobile" ? step.mobileAlt : step.alt}
            width={expanded === "mobile" ? 780 : 2880}
            height={expanded === "mobile" ? 1688 : 1800}
            sizes={expanded === "mobile" ? "390px" : "95vw"}
          />
        </div>
      </dialog>
    </div>
  );
}

export function ShiftChecklist() {
  const [checked, setChecked] = useState([true, false, false]);
  const tasks = [
    "Set up the counter",
    "Check the pastry display",
    "Restock the cups",
  ];
  return (
    <div className="checklist-example">
      <div className="mini-label">
        <span>Opening the café</span>
        <span className="check-count" aria-live="polite">
          {checked.filter(Boolean).length}/3
        </span>
      </div>
      <div className="checklist-items">
        {tasks.map((task, index) => (
          <label key={task} className={checked[index] ? "is-checked" : ""}>
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() =>
                setChecked(
                  checked.map((value, i) => (i === index ? !value : value)),
                )
              }
            />
            <span className="custom-checkbox" aria-hidden="true">
              {checked[index] && <Icon name="check" />}
            </span>
            <span>{task}</span>
          </label>
        ))}
      </div>
      <p className="example-label">Interactive example · try a check</p>
    </div>
  );
}

const assistantExamples = [
  {
    label: "Prepare a roster",
    prompt: "Prepare next week’s roster from last week’s.",
    title: "Start with the week you already know.",
    answer:
      "I can copy last week’s shifts into a draft for next week, then help you check availability before you publish.",
    icon: "calendar" as const,
    result: "Draft → check availability → publish",
    detail: "Draft shifts stay hidden from your team until published.",
  },
  {
    label: "See what’s waiting",
    prompt: "What needs my attention today?",
    title: "Three requests are waiting on you.",
    answer:
      "There is a shift swap, an hours correction and a leave request. You can review each one with the details of what would change.",
    icon: "clipboard" as const,
    result: "1 swap · 1 hours correction · 1 leave request",
    detail: "The same review rules apply when you ask the Assistant.",
  },
  {
    label: "Check the hours",
    prompt: "Are there hours I should check this week?",
    title: "There’s one correction to review.",
    answer:
      "Maya says she stayed later to close. Her request shows the recorded time, the proposed time and her reason, ready for your review.",
    icon: "clock" as const,
    result: "Recorded 15:02 → requested 15:42",
    detail: "A correction leaves a record of who changed the hours and why.",
  },
];

export function AssistantDemo() {
  const [active, setActive] = useState(0);
  const example = assistantExamples[active];
  return (
    <div className="assistant-demo">
      <div className="assistant-demo-header">
        <span className="assistant-avatar">
          <Icon name="sparkles" />
        </span>
        <div>
          <strong>Shiftly AI</strong>
          <span>Your venue, in a conversation</span>
        </div>
        <span className="demo-badge">Example</span>
      </div>
      <div className="assistant-conversation" key={active}>
        <div className="user-message">{example.prompt}</div>
        <div className="assistant-answer">
          <p className="response-title">{example.title}</p>
          <p>{example.answer}</p>
          <div className="assistant-result">
            <Icon name={example.icon} />
            <strong>{example.result}</strong>
          </div>
          <p className="response-detail">{example.detail}</p>
        </div>
      </div>
      <div className="assistant-prompt-area">
        <p>Try an example</p>
        <div
          className="prompt-options"
          role="group"
          aria-label="Assistant examples"
        >
          {assistantExamples.map((item, i) => (
            <button
              type="button"
              key={item.label}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              {item.label}
              <Arrow />
            </button>
          ))}
        </div>
      </div>
      <p className="assistant-demo-note" role="status">
        Scripted product example · {example.label} · no live changes
      </p>
    </div>
  );
}
