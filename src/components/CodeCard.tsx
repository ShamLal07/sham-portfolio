import React from "react";

export function CodeCard() {
  const lines = [
    { text: <><i className="k">const</i> studio = &#123;</>, index: 0 },
    { text: <>  brand: <i className="v">&quot;ShamWeb Creative&quot;</i>,</>, index: 1 },
    { text: <>  founder: <i className="v">&quot;Sham Lal&quot;</i>,</>, index: 2 },
    { text: <>  experience: <i className="v">&quot;6+ Years Pro Mastery&quot;</i>,</>, index: 3 },
    { text: <>  craft: [<i className="v">&quot;UI/UX Architecture&quot;</i>, <i className="v">&quot;2D/3D Motion&quot;</i>, <i className="v">&quot;Next.js&quot;</i>],</>, index: 4 },
    { text: <>  systems: [<i className="v">&quot;Shopify Liquid&quot;</i>, <i className="v">&quot;WordPress ACF&quot;</i>, <i className="v">&quot;Three.js&quot;</i>],</>, index: 5 },
    { text: <>  status: <i className="v">&quot;Accepting Select Projects&quot;</i></>, index: 6 },
    { text: <>&#125;;</>, index: 7 },
  ];

  return (
    <div
      className="codecard rv in"
      role="img"
      aria-label="Summary card: ShamWeb Creative — boutique digital product studio founded by Sham Lal with 6+ years experience in UI/UX architecture, 2D/3D motion, Next.js, Shopify, and WordPress."
    >
      <div className="cc-bar">
        <i />
        <i />
        <i />
        <span>shamweb.ts</span>
      </div>
      <pre aria-hidden="true">
        <code>
          {lines.map((l) => (
            <span
              key={l.index}
              className="ln"
              style={{ ["--i" as string]: l.index }}
            >
              {l.text}
            </span>
          ))}
          <span
            className="ln caret"
            style={{ ["--i" as string]: lines.length }}
          >
            &nbsp;
          </span>
        </code>
      </pre>
    </div>
  );
}
