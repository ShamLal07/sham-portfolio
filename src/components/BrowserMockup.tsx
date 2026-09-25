import React from "react";

const TONES: [string, string][] = [
  ["#EFBD30", "#14141D"],
  ["#14141D", "#EFBD30"],
  ["#7d5b00", "#EFBD30"],
];

interface BrowserMockupProps {
  tone?: number;
  label?: string;
  aspectRatio?: string;
}

export function BrowserMockup({
  tone = 0,
  label = "Screenshot placeholder",
}: BrowserMockupProps) {
  const [a, b] = TONES[tone % 3];

  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="640" height="400" fill="var(--surface-2)" />
      <g className="browser">
        <rect
          x="80"
          y="56"
          width="480"
          height="300"
          rx="10"
          fill="var(--surface)"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <path
          d="M80 66a10 10 0 0 1 10-10h460a10 10 0 0 1 10 10v22H80z"
          fill="var(--surface-2)"
        />
        <circle cx="100" cy="72" r="4" fill="var(--border)" />
        <circle cx="114" cy="72" r="4" fill="var(--border)" />
        <circle cx="128" cy="72" r="4" fill="var(--border)" />
        <rect
          x="104"
          y="112"
          width="200"
          height="16"
          rx="4"
          fill="var(--text)"
          opacity="0.85"
        />
        <rect x="104" y="138" width="150" height="16" rx="4" fill={a} />
        <rect
          x="104"
          y="172"
          width="240"
          height="7"
          rx="3"
          fill="var(--border)"
        />
        <rect
          x="104"
          y="188"
          width="200"
          height="7"
          rx="3"
          fill="var(--border)"
        />
        <rect x="104" y="212" width="86" height="26" rx="13" fill={a} />
        <rect
          x="372"
          y="112"
          width="164"
          height="126"
          rx="8"
          fill={b}
          opacity="0.9"
        />
        <rect
          x="104"
          y="266"
          width="128"
          height="72"
          rx="6"
          fill="var(--surface-2)"
        />
        <rect
          x="246"
          y="266"
          width="128"
          height="72"
          rx="6"
          fill="var(--surface-2)"
        />
        <rect
          x="388"
          y="266"
          width="148"
          height="72"
          rx="6"
          fill="var(--surface-2)"
        />
      </g>
    </svg>
  );
}
