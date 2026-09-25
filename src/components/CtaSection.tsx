import React from "react";
import Link from "next/link";
import { Icon } from "./Icons";

export function CtaSection() {
  return (
    <section>
      <div className="container rv">
        <div className="cta-block">
          <h2>Have a project in mind?</h2>
          <p>
            Tell me what you&apos;re building. I&apos;ll reply with questions, ideas
            and a clear next step.
          </p>
          <Link className="btn btn-primary" href="/contact">
            Start a project <Icon name="i-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
