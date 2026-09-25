import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { BrowserMockup } from "./BrowserMockup";
import { Icon } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className="pcard" href={`/work/${project.slug}`}>
      <div className="thumb" style={{ position: "relative", overflow: "hidden" }}>
        {project.image ? (
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "220px" }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
              className="browser"
            />
          </div>
        ) : (
          <BrowserMockup
            tone={project.tone}
            label={`Project screenshot for ${project.title}`}
          />
        )}
        {project.placeholder && (
          <span className="tag ph" style={{ background: "var(--surface)" }}>
            Concept
          </span>
        )}
      </div>
      <div className="pbody">
        <div className="pmeta">
          <span>{project.cat.join(", ")}</span>
          <span>{project.year || "2025"}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="small">{project.desc}</p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            marginTop: "auto",
          }}
        >
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <span className="plink">
          View case study <Icon name="i-arrow" />
        </span>
      </div>
    </Link>
  );
}
