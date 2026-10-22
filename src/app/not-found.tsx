import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-28 text-center">
      <div className="site-container max-w-lg">
        <div className="text-xs font-mono font-bold text-[#848792] mb-3">404 ERROR</div>
        <h1 className="text-4xl font-extrabold text-[#0F1117] tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-[#575A65] mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
