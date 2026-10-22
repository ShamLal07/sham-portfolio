import React from "react";

interface ServiceBrandIconProps {
  id: string;
  className?: string;
}

export function ServiceBrandIcon({ id, className = "w-7 h-7" }: ServiceBrandIconProps) {
  switch (id) {
    // 1. WordPress (Official Blue + White 'W')
    case "wordpress":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10.5" fill="#21759B" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0 18.06a8.54 8.54 0 01-5.18-1.74l3.77-10.33 3.86 10.59A8.53 8.53 0 0112 20.56zm-6.6-8.08c0-.6.1-1.18.28-1.72l3.86 10.57-2.6-7.14a6.45 6.45 0 01-.65-.77c-.59-.85-.89-1.87-.89-.94zm11.39 6.27l-3.23-9.37c.55-.03 1.05-.09 1.05-.09a.45.45 0 00.41-.47.45.45 0 00-.45-.43s-1.35.11-2.22.11c-.83 0-2.2-.11-2.2-.11a.45.45 0 00-.45.44.45.45 0 00.43.46s.47.06.98.09l1.45 3.99-2.06 6.16L7 6.94A8.56 8.56 0 0119.8 11.2c0 2.9-1.45 5.46-3.01 7.55z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 2. Shopify (Official Multi-Tone Green Bag + White 'S')
    case "shopify":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M18.8 4.6c-.1-.3-.3-.4-.5-.4l-2.4-.2s-1.4-2.6-1.7-3c-.3-.4-.9-.6-1.4-.5-.1 0-.3.1-.4.2C12.2.9 10.9 2.2 9.9 3.5l-3.3 1c-.7.2-1.2.9-1.2 1.6L4 21.8l13.9 2.2 6.1-3.2L18.8 4.6z"
            fill="#95BF47"
          />
          <path
            d="M14.5 4.1L12.3 3.9C11.5 5.1 10.3 6.6 9.4 8l5.8-.8c-.3-1-.5-2-.7-3.1z"
            fill="#5E8E3E"
          />
          <path
            d="M12.9 8.8l-4.5.6c-.7 1-1.3 2.1-1.8 3.2l6.8-.9c-.2-1-.4-2-.5-2.9z"
            fill="#5E8E3E"
          />
          <path
            d="M12.6 11.2c-.4-.2-1.3-.4-2-.4-1.5 0-2.4.8-2.4 2 0 2.2 3.3 2.3 3.3 4.2 0 .8-.6 1.4-1.6 1.4-1 0-1.8-.5-2.2-.9l-.4 1.7c.6.5 1.6.8 2.5.8 2 0 3.3-1.1 3.3-2.7 0-2.5-3.4-2.4-3.4-4.2 0-.6.5-1.1 1.3-1.1.7 0 1.3.2 1.7.4l.2-1.2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 3. WooCommerce (Official Brand Purple + White 'W')
    case "woocommerce":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#7F54B3" />
          <path
            d="M6 8.5C6 7.67 6.67 7 7.5 7h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9C6.67 15 6 14.33 6 13.5v-5z"
            fill="#7F54B3"
          />
          <path
            d="M8.2 9.2l1.6 4.3 1.5-3.8 1.5 3.8 1.6-4.3h1.8l-2.6 6.8h-1.6L10.5 12l-1.5 4H7.4L4.8 9.2h1.8l1.6 4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 4. Webflow (Official Brand Blue)
    case "webflow":
      return (
        <div className="w-full h-full rounded-xl bg-[#146EF5] flex items-center justify-center text-white">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.8 7.3c-.8.5-1.5 1.1-2 1.8-.1-.7-.3-1.4-.7-1.9-.8-.9-1.9-1.4-3.1-1.4-.8 0-1.6.2-2.3.7-.8.5-1.4 1.2-1.8 2.1L6.7 13c-.1-.7-.2-1.3-.2-2 0-2.3.9-3.9 2.5-4.8 1-.6 2.1-.9 3.3-.9 1.7 0 3.1.6 4.3 1.8.4.4.8.9 1.2 1.2zm4.7 1.8c-.2-.4-.4-.8-.7-1.1-.9-.9-2.1-1.4-3.5-1.4-.7 0-1.4.1-2.1.4-.7.3-1.3.7-1.8 1.3l-2.4 3.7-1.8-4.5c-.3-.7-.7-1.3-1.2-1.7-.8-.7-1.8-1-2.9-1-1.3 0-2.5.4-3.5 1.3C1.6 8.3.9 9.8.9 11.7c0 1.2.2 2.3.7 3.3l4.3-7.5c.3-.5.7-.9 1.2-1.2.6-.4 1.3-.6 2-.6.9 0 1.7.3 2.3.9.5.5.8 1.2 1 2l-3.8 6.6c-.3.5-.7.9-1.2 1.2-.6.4-1.3.6-2 .6-.4 0-.8-.1-1.2-.2l1.6 2.8c.6.2 1.3.3 2 .3 1.6 0 2.9-.5 4-1.6.6-.6 1.1-1.3 1.5-2.2l2.3-4.1 1.7 4.2c.4.9.9 1.6 1.6 2.1.8.6 1.7.9 2.8.9 1.4 0 2.6-.5 3.6-1.5.9-.9 1.5-2.1 1.7-3.5l.2-1.8c0-.7-.1-1.4-.4-2.1z" />
          </svg>
        </div>
      );

    // 5. Wix & Wix Studio (Official Clean Monogram)
    case "wix-studio":
      return (
        <div className="w-full h-full rounded-xl bg-black border border-white/20 flex items-center justify-center font-black text-white text-sm tracking-tighter shadow-sm">
          Wix
        </div>
      );

    // 6. HubSpot (Official Brand Coral Orange Sprocket)
    case "hubspot":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF7A59">
          <path d="M18.8 8.5c0-.8-.6-1.5-1.5-1.5-.4 0-.8.2-1.1.5l-2.8-1.7V4.5c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8v1.3L9 7.5C8.7 7.2 8.3 7 7.9 7c-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8v3.4c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2 .8 0 1.5-.5 1.8-1.2h3.4c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2 0-.8-.5-1.5-1.2-1.8v-3.4c.7-.3 1.2-1 1.2-1.8 0-.4-.1-.7-.3-1l2.8-1.7c.3.3.7.5 1.2.5.8 0 1.5-.7 1.5-1.5z" />
        </svg>
      );

    // 7. Full-Stack Next.js & React
    case "fullstack-apps":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#00D8FF" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
        </svg>
      );

    // 8. Modern Frontend & Interactive UI
    case "frontend-development":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="frontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
          <rect x="2" y="3" width="20" height="18" rx="4" stroke="url(#frontGrad)" strokeWidth="2" />
          <path d="M7 8l-3 4 3 4M17 8l3 4-3 4M13 7l-2 10" stroke="url(#frontGrad)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );



    // 14. UI/UX Design & Figma (Official Multi-Color)
    case "ui-ux":
      return (
        <svg className={className} viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );

    // 15. Speed & Core Web Vitals (Lightning / Gauge)
    case "speed-optimization":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#speedGrad)" />
        </svg>
      );

    // 16. Website Migration (Cloud Transfer Sync)
    case "website-migration":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="migrateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <path
            d="M19 16v3a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h3m8 0h5m0 0v5m0-5L10 14"
            stroke="url(#migrateGrad)"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );



    // 18. Website Support & Maintenance (Security Shield)
    case "maintenance":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="shieldGradShared" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            fill="url(#shieldGradShared)"
            fillOpacity="0.25"
            stroke="#10B981"
            strokeWidth="2"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="#10B981"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
