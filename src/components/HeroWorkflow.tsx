import React from "react";
import { WORKFLOW } from "@/data/portfolio";
import { Icon } from "./Icons";

export function HeroWorkflow() {
  return (
    <div className="flow" aria-label="Project workflow from idea to launch">
      <div className="flow-track">
        {WORKFLOW.map((w, i) => (
          <div key={w[1]} className="step" style={{ ["--i" as string]: i }}>
            <span className="dot">
              <Icon name={w[0]} />
            </span>
            <h3>{w[1]}</h3>
            <p>{w[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
