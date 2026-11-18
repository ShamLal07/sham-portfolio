import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/db";
import { SITE_CONFIG } from "@/data/siteConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, timeline, budget, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Please enter your name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ success: false, error: "Please provide a valid phone or WhatsApp number." }, { status: 400 });
    }

    // 1. Save to database / persistent store
    const inquiry = await saveInquiry({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service || "General Website Inquiry",
      timeline: timeline || "1-2 months",
      budget: budget || "",
      message: message ? message.trim() : "Interested in working together.",
    });

    // 2. Trigger notification to admin email via FormSubmit as backup delivery
    try {
      fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Client Lead: ${name} (${service || "Website Development"})`,
          Name: name,
          Email: email,
          Phone_WhatsApp: phone,
          Service_Requested: service,
          Timeline: timeline,
          Budget: budget || "Not specified",
          Message: message,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      }).catch((e) => console.warn("Email dispatch notice:", e));
    } catch (e) {
      console.warn("Background notification note:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your inquiry has been received. Sham will reach out within 24 hours.",
      inquiryId: inquiry.id,
    });
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
