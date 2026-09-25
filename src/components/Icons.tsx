import React from "react";

export type IconName =
  | "i-arrow"
  | "i-check"
  | "i-sun"
  | "i-moon"
  | "i-menu"
  | "i-x"
  | "i-pen"
  | "i-layout"
  | "i-code"
  | "i-cart"
  | "i-box"
  | "i-image"
  | "i-github"
  | "i-file"
  | "i-globe"
  | "i-info"
  | "i-rocket"
  | "i-bulb"
  | "i-frame"
  | "i-db"
  | "i-up"
  | "i-mail"
  | "i-phone";

interface IconProps {
  name: IconName | string;
  className?: string;
  ariaHidden?: boolean;
}

export function Icon({ name, className = "", ariaHidden = true }: IconProps) {
  const cn = `ico ${className}`.trim();

  switch (name) {
    case "i-arrow":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "i-check":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "i-sun":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "i-moon":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      );
    case "i-menu":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "i-x":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "i-pen":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
        </svg>
      );
    case "i-layout":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "i-code":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case "i-cart":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
      );
    case "i-box":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
          <path d="m3 8 9 5 9-5M12 13v8" />
        </svg>
      );
    case "i-image":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      );
    case "i-github":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.9 5 2.3 5 2.3a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.5 9.5c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
        </svg>
      );
    case "i-file":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      );
    case "i-globe":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
        </svg>
      );
    case "i-info":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      );
    case "i-rocket":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" />
        </svg>
      );
    case "i-bulb":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
        </svg>
      );
    case "i-frame":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M22 6H2M22 18H2M6 2v20M18 2v20" />
        </svg>
      );
    case "i-db":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "i-up":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="m18 15-6-6-6 6" />
        </svg>
      );
    case "i-mail":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      );
    case "i-phone":
      return (
        <svg className={cn} viewBox="0 0 24 24" aria-hidden={ariaHidden}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function LogoMark() {
  return (
    <svg className="mark" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="13" fill="var(--accent)" />
      <path
        className="br bl"
        d="M15 16 7.5 24 15 32"
        fill="none"
        stroke="var(--accent-ink)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="br brr"
        d="M33 16l7.5 8L33 32"
        fill="none"
        stroke="var(--accent-ink)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="cs"
        d="M19.5 15.5v16l4-3.5 2.7 6.2 2.7-1.2-2.7-6.1 5.2-.3z"
        fill="var(--accent-ink)"
      />
    </svg>
  );
}
