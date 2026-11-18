import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/db";
import { SITE_CONFIG } from "@/data/siteConfig";

// Target admin notification emails (Domain email + Personal Gmail backup)
const ADMIN_EMAILS = [
  SITE_CONFIG.email, // thakur@shamdev.in
  "thakursammi1233@gmail.com",
];

interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  budget: string;
  message: string;
}

async function dispatchEmailNotifications(payload: InquiryPayload): Promise<{
  delivered: boolean;
  needsActivation: boolean;
  activationEmails: string[];
}> {
  let anyDelivered = false;
  let activationRequired = false;
  const activationEmails: string[] = [];

  // 1. Resend API dispatch (if RESEND_API_KEY is configured in Vercel/environment)
  if (process.env.RESEND_API_KEY) {
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ShamDev Leads <onboarding@resend.dev>",
          to: ADMIN_EMAILS,
          subject: `⚡ New Project Inquiry: ${payload.name} (${payload.service})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; background: #0A0C14; color: #FFFFFF; border-radius: 16px; border: 1px solid #1E293B;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
                <span style="background: #2563EB; color: #FFFFFF; font-size: 11px; font-weight: bold; padding: 4px 10px; rounded-full: 9999px; text-transform: uppercase; letter-spacing: 0.05em;">New Inquiry</span>
                <span style="color: #64748B; font-size: 12px;">via shamdev.in</span>
              </div>
              <h2 style="color: #FFFFFF; font-size: 22px; margin: 0 0 16px 0; font-weight: 800;">
                Project Lead from ${payload.name}
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
                <tr style="border-bottom: 1px solid #1E293B;"><td style="padding: 10px 0; color: #94A3B8; width: 140px;">Client Name:</td><td style="padding: 10px 0; font-weight: bold; color: #FFFFFF;">${payload.name}</td></tr>
                <tr style="border-bottom: 1px solid #1E293B;"><td style="padding: 10px 0; color: #94A3B8;">Email:</td><td style="padding: 10px 0; color: #60A5FA;"><a href="mailto:${payload.email}" style="color: #60A5FA; text-decoration: none;">${payload.email}</a></td></tr>
                <tr style="border-bottom: 1px solid #1E293B;"><td style="padding: 10px 0; color: #94A3B8;">Phone / WhatsApp:</td><td style="padding: 10px 0; font-weight: bold; color: #34D399;"><a href="https://wa.me/${payload.phone.replace(/[^0-9]/g, "")}" style="color: #34D399; text-decoration: none;">${payload.phone}</a></td></tr>
                <tr style="border-bottom: 1px solid #1E293B;"><td style="padding: 10px 0; color: #94A3B8;">Service:</td><td style="padding: 10px 0; color: #FFFFFF; font-weight: 600;">${payload.service}</td></tr>
                <tr style="border-bottom: 1px solid #1E293B;"><td style="padding: 10px 0; color: #94A3B8;">Timeline:</td><td style="padding: 10px 0; color: #FFFFFF;">${payload.timeline}</td></tr>
                <tr style="border-bottom: 1px solid #1E293B;"><td style="padding: 10px 0; color: #94A3B8;">Budget:</td><td style="padding: 10px 0; color: #FFFFFF;">${payload.budget || "Not specified"}</td></tr>
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #121522; border-radius: 12px; border-left: 4px solid #3B82F6;">
                <div style="font-size: 11px; text-transform: uppercase; font-weight: bold; color: #64748B; margin-bottom: 6px;">Message</div>
                <p style="margin: 0; color: #E2E8F0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${payload.message}</p>
              </div>
              <div style="margin-top: 24px; text-align: center;">
                <a href="https://wa.me/${payload.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi ${payload.name}, thanks for reaching out on shamdev.in!`)}" style="display: inline-block; background: #10B981; color: #FFFFFF; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 13px;">
                  Reply via WhatsApp
                </a>
              </div>
            </div>
          `,
        }),
      });

      if (resendRes.ok) {
        anyDelivered = true;
      }
    } catch (err) {
      console.warn("Resend API notification error:", err);
    }
  }

  // 2. FormSubmit AJAX dispatch with full browser-origin headers and AWAITED execution
  const formSubmitDispatches = ADMIN_EMAILS.map(async (targetEmail) => {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://shamdev.in",
          Referer: "https://shamdev.in/contact",
        },
        body: JSON.stringify({
          _subject: `New Lead: ${payload.name} (${payload.service}) - ${payload.phone}`,
          "Client Name": payload.name,
          "Client Email": payload.email,
          "Phone / WhatsApp": payload.phone,
          "Service Requested": payload.service,
          Timeline: payload.timeline,
          Budget: payload.budget || "Not specified",
          Message: payload.message,
          _replyto: payload.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const resData = await response.json().catch(() => null);

      if (resData) {
        const msg = String(resData.message || "").toLowerCase();
        if (msg.includes("activation") || msg.includes("activate")) {
          activationRequired = true;
          activationEmails.push(targetEmail);
        }
        if (resData.success === "true" || resData.success === true) {
          anyDelivered = true;
        }
      }
    } catch (err) {
      console.warn(`FormSubmit dispatch to ${targetEmail} failed:`, err);
    }
  });

  await Promise.allSettled(formSubmitDispatches);

  return {
    delivered: anyDelivered,
    needsActivation: activationRequired && !anyDelivered,
    activationEmails,
  };
}

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

    const payload: InquiryPayload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service || "General Website Inquiry",
      timeline: timeline || "1-2 months",
      budget: budget ? String(budget).trim() : "",
      message: message ? message.trim() : "Interested in working together.",
    };

    // 1. Save to local DB / Supabase (instantly viewable at /admin dashboard)
    const inquiry = await saveInquiry(payload);

    // 2. Dispatch email notifications (await properly so serverless lambda does not terminate prematurely)
    const emailStatus = await dispatchEmailNotifications(payload);

    return NextResponse.json({
      success: true,
      delivered: emailStatus.delivered,
      needsActivation: emailStatus.needsActivation,
      activationEmails: emailStatus.activationEmails,
      inquiryId: inquiry.id,
      message: emailStatus.needsActivation
        ? "Inquiry recorded! Please click 'Activate Form' in your inbox to enable live email delivery."
        : "Thank you! Your inquiry has been received. Sham will reach out within 24 hours.",
    });
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
