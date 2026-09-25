import React from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="container empty" style={{ paddingBlock: "120px" }}>
      <h1>Page not found</h1>
      <p style={{ marginTop: "12px", marginBottom: "24px" }}>
        That page doesn&apos;t exist. Head back to the homepage.
      </p>
      <Link className="btn btn-primary" href="/">
        Go home <Icon name="i-arrow" />
      </Link>
    </div>
  );
}
