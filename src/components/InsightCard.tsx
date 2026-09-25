import React from "react";
import Link from "next/link";
import { Insight } from "@/data/portfolio";
import { Icon } from "./Icons";

interface InsightCardProps {
  insight: Insight;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <Link className="pcard" href={`/insights/${insight.slug}`}>
      <div className="thumb" style={{ aspectRatio: "16 / 9" }}>
        <svg
          viewBox="0 0 640 360"
          role="img"
          aria-label={`Article preview for ${insight.title}`}
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="640" height="360" fill="var(--surface-2)" />
          <circle cx="470" cy="140" r="110" fill="var(--accent)" opacity="0.85" />
          <rect x="60" y="80" width="260" height="18" rx="4" fill="var(--text)" />
          <rect
            x="60"
            y="112"
            width="200"
            height="18"
            rx="4"
            fill="var(--text)"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="pbody">
        <div className="pmeta">
          <span>{insight.cat}</span>
          <span>Sham Lal</span>
        </div>
        <h3>{insight.title}</h3>
        <p className="small">{insight.desc}</p>
        <span className="plink">
          Read article <Icon name="i-arrow" />
        </span>
      </div>
    </Link>
  );
}
