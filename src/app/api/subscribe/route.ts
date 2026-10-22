import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/siteConfig";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, consent } = body;

    // Email validation
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Please confirm that you agree to receive updates." },
        { status: 400 }
      );
    }

    const recipient = SITE_CONFIG.email || "thakur@shamdev.in";

    // Send real subscription event to FormSubmit backend
    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Portfolio Subscriber: ${email.trim()}`,
        Subscriber_Email: email.trim(),
        Consent_Given: "Yes (Confirmed via Newsletter Popup)",
        Subscribed_At: new Date().toISOString(),
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await response.json();

    if (response.ok || result.success === "true" || result.success === true) {
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing! You're on the list.",
      });
    }

    // If FormSubmit requires 1-time activation, still treat as received
    if (
      result.message &&
      (result.message.toLowerCase().includes("activation") ||
        result.message.toLowerCase().includes("activate"))
    ) {
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing! Activation link sent to admin.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: result.message || "Failed to process subscription with server.",
      },
      { status: 502 }
    );
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An unexpected error occurred while subscribing.",
      },
      { status: 500 }
    );
  }
}
