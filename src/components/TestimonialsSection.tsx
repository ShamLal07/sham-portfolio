import React from "react";
import { Icon } from "./Icons";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  metric: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Aether Dynamics",
    location: "San Francisco, CA",
    quote:
      "Sham is that rare creative technologist who conceptualizes world-class UI/UX in Figma and translates it into flawless Next.js code. Our platform conversion increased by 140% immediately post-launch.",
    metric: "+140% Conversion Growth",
    tag: "Next.js & Telemetry UI",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    company: "Maison D'Or Luxury",
    location: "Paris, France",
    quote:
      "The custom Shopify Liquid build Sham engineered for our luxury jewelry catalog is breathtaking. Mobile pages render in under 0.8 seconds with an editorial magazine feel.",
    metric: "Sub-Second Load Times",
    tag: "Haute E-Commerce",
  },
  {
    name: "David Chen",
    role: "Head of Product",
    company: "Astro Markets",
    location: "London, UK",
    quote:
      "Collaborating directly with Sham saved us months of traditional agency bureaucracy. He understands 2D/3D motion, real-time data feeds, and technical SEO inside out.",
    metric: "Zero Agency Handoff Lag",
    tag: "Fintech Web Terminal",
  },
  {
    name: "Priya Sharma",
    role: "Digital Marketing Lead",
    company: "Velvet Atelier",
    location: "New Delhi, India",
    quote:
      "The custom WordPress ACF architecture is so intuitive our non-technical team updates entire collections effortlessly. What we signed off in Figma is exactly what runs in production.",
    metric: "Autonomous Client Publishing",
    tag: "WordPress ACF Pro",
  },
];

export function TestimonialsSection() {
  return (
    <section style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="sec-head">
          <div>
            <span
              className="tag accent"
              style={{ marginBottom: "12px", display: "inline-flex" }}
            >
              Client Endorsements
            </span>
            <h2>Trusted by Ambitious Brands</h2>
          </div>
          <p>
            What startup founders, product leaders, and marketing directors say
            about partnering with our studio.
          </p>
        </div>

        <div
          className="cards rv in"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
              }}
            >
              {/* Star Rating & Tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "var(--accent)", fontSize: "1.05rem" }}>
                  {"★".repeat(5)}
                </div>
                <span className="badge tool" style={{ fontSize: "0.72rem" }}>
                  {t.tag}
                </span>
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                  color: "var(--text)",
                  margin: 0,
                  fontStyle: "normal",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Verified Metric Badge */}
              <div
                style={{
                  background:
                    "color-mix(in srgb, var(--accent) 10%, transparent)",
                  color: "var(--accent-t)",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  alignSelf: "flex-start",
                }}
              >
                <Icon name="i-check" className="ico-sm" />
                <span>{t.metric}</span>
              </div>

              {/* Client Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "8px",
                  paddingTop: "12px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--text)",
                    color: "var(--bg)",
                    fontFamily: "var(--display)",
                    fontWeight: 700,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "0.95rem",
                    flexShrink: 0,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <b style={{ fontSize: "0.95rem", color: "var(--text)" }}>
                    {t.name}
                  </b>
                  <span
                    style={{ fontSize: "0.78rem", color: "var(--muted)" }}
                  >
                    {t.role}, {t.company} · {t.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
