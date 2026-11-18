import { cookies } from "next/headers";
import crypto from "crypto";

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "shamdev-admin-2026-secure-key";

// Simple robust HMAC signature
export function generateToken(payload: string): string {
  const hmac = crypto.createHmac("sha256", ADMIN_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  return `${payload}.${signature}`;
}

export function verifyToken(token: string): boolean {
  if (!token || !token.includes(".")) return false;
  const [payload, signature] = token.split(".");
  const hmac = crypto.createHmac("sha256", ADMIN_SECRET);
  hmac.update(payload);
  const expected = hmac.digest("hex");
  return expected === signature;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get("sham_admin_session")?.value;
  if (!session) return false;
  return verifyToken(session);
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "shamdev@2026";
}
