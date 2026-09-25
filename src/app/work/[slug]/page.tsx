import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, BRAND_NAME } from "@/data/portfolio";
import { BrowserMockup } from "@/components/BrowserMockup";
import { CtaSection } from "@/components/CtaSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.desc,
    openGraph: {
      title: `${project.title} — Case Study by ${BRAND_NAME}`,
      description: project.desc,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <>
      <div className="container cs-hero">
        <Link
          href="/work"
          className="small"
          style={{ textDecoration: "none", color: "var(--muted)" }}
        >
          ← All client work
        </Link>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {project.cat.map((c) => (
            <span key={c} className="tag">
              {c}
            </span>
          ))}
          <span className="tag accent">Case Study</span>
        </div>

        <h1 style={{ marginTop: "20px", maxWidth: "18ch" }}>
          {project.title}
        </h1>
        <p style={{ marginTop: "16px", fontSize: "1.15rem" }}>{project.desc}</p>

        <dl className="cs-meta">
          <div>
            <dt>Scope</dt>
            <dd>UI/UX &amp; Full-Stack Build</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>{project.year || "2025"}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.tech[0]}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Production Deployed</dd>
          </div>
        </dl>
      </div>

      <div className="container">
        {/* Main High-Res Showcase Screen */}
        <div
          className="cs-shot"
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            boxShadow: "0 24px 64px -20px rgba(0,0,0,0.5)",
          }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <BrowserMockup
              tone={project.tone}
              label={`${project.title} hero preview`}
            />
          )}
        </div>

        <div className="cs-sec rv in">
          <h2>Project Overview</h2>
          <div>
            <p>
              {project.overview ||
                "Comprehensive architecture from initial problem discovery to final production deployment."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>The Challenge</h2>
          <div>
            <p>
              {project.challenge ||
                "Translating complex business goals into an effortless, friction-free digital interface."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>Strategic Approach</h2>
          <div>
            <p>
              {project.approach ||
                "Rigorous user research combined with modular design systems and speed optimization."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>UX Architecture &amp; User Journey</h2>
          <div>
            <p>
              {project.uxProcess ||
                "Wireframing, interactive prototyping, and usability testing to validate navigation paths."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>Visual Design &amp; Aesthetics</h2>
          <div>
            <p>
              {project.visualDesign ||
                "Harmonious typographic scale, dark aesthetic tokens, and purposeful kinetic micro-interactions."}
            </p>
            <div className="two" style={{ marginTop: "24px" }}>
              <div
                className="cs-shot"
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image || "/projects/saas-dashboard.jpg"}
                  alt="Visual design viewport preview 1"
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="cs-shot"
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/hero-3d.jpg"
                  alt="3D interactive asset view"
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>Engineering &amp; Code Architecture</h2>
          <div>
            <p>
              {project.build ||
                "Clean component architecture, memoized renders, and accessibility best practices."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>Technologies Leveraged</h2>
          <div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {project.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>Fluid Responsive Experience</h2>
          <div>
            <p>
              {project.responsive ||
                "Tested rigorously across desktop, iPad, tablet, and mobile breakpoints."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in">
          <h2>Key Business Outcomes</h2>
          <div>
            <p>
              {project.learnings ||
                "Significant reduction in bounce rates and verified speed score improvements."}
            </p>
          </div>
        </div>

        <div className="cs-sec rv in" style={{ display: "block" }}>
          <Link className="next" href={`/work/${nextProject.slug}`}>
            <span className="caption">Next Case Study</span>
            <h2 style={{ marginTop: "8px" }}>{nextProject.title}</h2>
          </Link>
        </div>
      </div>

      <CtaSection />
    </>
  );
}
