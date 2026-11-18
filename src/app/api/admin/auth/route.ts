import { NextResponse } from "next/server";
import { generateToken, getAdminPassword, isAuthenticated } from "@/lib/auth";

export async function GET() {
  const authed = await isAuthenticated();
  return NextResponse.json({ authenticated: authed });
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = getAdminPassword();

    if (password !== correctPassword) {
      return NextResponse.json({ success: false, error: "Invalid admin password." }, { status: 401 });
    }

    const token = generateToken(`admin_${Date.now()}`);
    const response = NextResponse.json({ success: true, message: "Authenticated successfully." });

    response.cookies.set("sham_admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ success: false, error: error.message || "Authentication error." }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out." });
  response.cookies.delete("sham_admin_session");
  return response;
}
