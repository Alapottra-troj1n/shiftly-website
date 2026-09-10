"use client";

import { useId } from "react";

/** The supplied sunny-ready.svg mascot, now named Shiftly. */
export function Mascot({ className = "" }: { className?: string }) {
  const gradient = useId();
  return (
    <svg className={`shiftly-mascot ${className}`} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={gradient} x2="1" y2="1">
          <stop stopColor="#FFB387" />
          <stop offset="1" stopColor="#EE7BA8" />
        </linearGradient>
      </defs>
      <path d="M19 5H43L59 21V45Q59 59 45 59H19Q5 59 5 45V19Q5 5 19 5Z" fill={`url(#${gradient})`} />
      <path d="M43 5V14Q43 21 50 21H59Z" fill="#8E86F0" />
      <g fill="none" stroke="#221E1C" strokeWidth="3" strokeLinecap="round">
        <g className="mascot-eyes"><path d="M22 29V34M40 29V34" /></g>
        <path d="M26 43Q32 47 38 43" />
      </g>
    </svg>
  );
}

export function Brand() {
  return <span className="brand-wordmark"><Mascot /><span>Shiftly AI</span></span>;
}
