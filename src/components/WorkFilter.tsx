"use client";

import React, { useState } from "react";
import { Project, FILTERS } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

interface WorkFilterProps {
  initialProjects: Project[];
}

export function WorkFilter({ initialProjects }: WorkFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = initialProjects.filter(
    (p) => activeFilter === "All" || p.cat.includes(activeFilter)
  );

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`chip ${f === activeFilter ? "active" : ""}`}
            aria-pressed={f === activeFilter}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="cards" id="plist" aria-live="polite">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProjectCard key={p.slug} project={p} />)
        ) : (
          <div className="empty col-span-full">
            <h3>No projects in this category yet</h3>
            <p>New work is added regularly. Try another filter.</p>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => setActiveFilter("All")}
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </>
  );
}
