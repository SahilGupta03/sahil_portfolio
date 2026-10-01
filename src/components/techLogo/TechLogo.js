import React from "react";

/* Simplified technology marks drawn as inline SVG (no icon library).
   Decorative: the technology name is always rendered next to them. */
const marks = {
  react: (
    <>
      <rect width="32" height="32" rx="7" fill="#20232a" />
      <g fill="none" stroke="#61dafb" strokeWidth="1.4">
        <ellipse cx="16" cy="16" rx="11" ry="4.2" />
        <ellipse
          cx="16"
          cy="16"
          rx="11"
          ry="4.2"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="11"
          ry="4.2"
          transform="rotate(120 16 16)"
        />
      </g>
      <circle cx="16" cy="16" r="2.1" fill="#61dafb" />
    </>
  ),
  next: (
    <>
      <circle cx="16" cy="16" r="16" fill="#000" />
      <path
        d="M11 22V10l10.5 13.5"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M21 10v8" stroke="#fff" strokeWidth="2" />
    </>
  ),
  ts: (
    <>
      <rect width="32" height="32" rx="5" fill="#3178c6" />
      <text
        x="29"
        y="28"
        textAnchor="end"
        fill="#fff"
        fontFamily="Geist, Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
      >
        TS
      </text>
    </>
  ),
  js: (
    <>
      <rect width="32" height="32" rx="5" fill="#f7df1e" />
      <text
        x="29"
        y="28"
        textAnchor="end"
        fill="#000"
        fontFamily="Geist, Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
      >
        JS
      </text>
    </>
  ),
  html: (
    <>
      <path d="M4 2h24l-2.2 24.5L16 30l-9.8-3.5z" fill="#e34f26" />
      <path d="M16 4v23.6l7.9-2.8L25.7 4z" fill="#ef652a" />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Geist, Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
      >
        5
      </text>
    </>
  ),
  css: (
    <>
      <path d="M4 2h24l-2.2 24.5L16 30l-9.8-3.5z" fill="#663399" />
      <path d="M16 4v23.6l7.9-2.8L25.7 4z" fill="#7a45b5" />
      <text
        x="16"
        y="21.5"
        textAnchor="middle"
        fill="#fff"
        fontFamily="Geist, Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
      >
        3
      </text>
    </>
  )
};

export const techNames = {
  react: "React",
  next: "Next.js",
  ts: "TypeScript",
  js: "JavaScript",
  html: "HTML5",
  css: "CSS3"
};

export default function TechLogo({name, size = 20, className = ""}) {
  const mark = marks[name];
  if (!mark) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {mark}
    </svg>
  );
}
