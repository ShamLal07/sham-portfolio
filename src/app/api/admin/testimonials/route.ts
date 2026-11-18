import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllTestimonials, saveTestimonial, deleteTestimonial } from "@/lib/db";

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const testimonials = await getAllTestimonials();
  return NextResponse.json({ testimonials });
}

export async function POST(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body.quote || !body.author) {
      return NextResponse.json({ error: "Quote and author are required" }, { status: 400 });
    }

    const saved = await saveTestimonial(body);
    return NextResponse.json({ success: true, testimonial: saved });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message || "Failed to save testimonial" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    await deleteTestimonial(id);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message || "Failed to delete testimonial" }, { status: 500 });
  }
}
