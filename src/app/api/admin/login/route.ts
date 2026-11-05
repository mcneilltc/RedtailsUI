import { NextResponse } from "next/server";
import { isCorrectPassword, startAdminSession } from "../../../lib/adminAuth";

export async function POST(request: Request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD or ADMIN_SESSION_SECRET is not set on the server" },
      { status: 500 },
    );
  }
  const { password } = await request.json().catch(() => ({ password: "" }));
  if (typeof password !== "string" || !isCorrectPassword(password)) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }
  await startAdminSession();
  return NextResponse.json({ ok: true });
}
