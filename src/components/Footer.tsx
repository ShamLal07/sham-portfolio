import React from "react";
import Link from "next/link";
import { LogoMark } from "./Icons";
import { EMAIL, PHONE, GITHUB, PORTFOLIO_PDF, LOCATION, BRAND_NAME } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div>
            <Link className="logo" href="/" aria-label="ShamWeb Creative Home">
              <LogoMark />
              <span className="nm">{BRAND_NAME}</span>
            </Link>
            <p className="small" style={{ marginTop: "16px" }}>
              Full-cycle digital studio and one-person creative powerhouse.
              Bespoke UI/UX, 2D/3D motion, and high-performance web development.
              Available for select partnerships and enterprise builds.
            </p>
          </div>

          <div>
            <h2>Explore</h2>
            <ul>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Services</h2>
            <ul>
              <li>
                <Link href="/services">UI/UX Architecture</Link>
              </li>
              <li>
                <Link href="/services">Next.js Web Systems</Link>
              </li>
              <li>
                <Link href="/services">Shopify E-Commerce</Link>
              </li>
              <li>
                <Link href="/services">WordPress ACF Pro</Link>
              </li>
              <li>
                <Link href="/services">2D & 3D Motion</Link>
              </li>
              <li>
                <Link href="/services">Technical SEO & AIO</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Connect</h2>
            <ul>
              <li>
                <Link href="/contact">Project Consultation</Link>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <a href={`tel:${PHONE}`}>{PHONE}</a>
              </li>
              <li>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agency Deck (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="caption">
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </span>
          <span className="caption">
            {LOCATION} · Global Client Engagements
          </span>
        </div>
      </div>
    </footer>
  );
}
