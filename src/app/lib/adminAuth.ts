// Single-password admin login. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET
// (any long random string) in the Vercel project's environment variables.

import { timingSafeEqual } from "crypto";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const COOKIE_NAME = "redtails_admin";
const SESSION_DAYS = 30; // stay signed in on your phone for a month

const secret = () => {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value) throw new Error("ADMIN_SESSION_SECRET is not set");
  return value;
};

export function isCorrectPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function startAdminSession() {
  const token = jwt.sign({ role: "admin" }, secret(), {
    expiresIn: `${SESSION_DAYS}d`,
  });
  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
}

export async function endAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}

export async function isAdmin() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return false;
  try {
    jwt.verify(token, secret());
    return true;
  } catch {
    return false;
  }
}
