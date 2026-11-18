import React from "react";
import type { Metadata } from "next";
import { isAuthenticated } from "@/lib/auth";
import { AdminDashboardClient } from "@/components/admin/AdminDashboardClient";

export const metadata: Metadata = {
  title: "Admin CMS Dashboard | ShamDev",
  description: "Secure administrative dashboard for Sham Lal portfolio management.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function AdminPage() {
  const authed = await isAuthenticated();

  return (
    <div className="bg-[#0A0B0E] min-h-screen">
      <AdminDashboardClient initialAuthenticated={authed} />
    </div>
  );
}
