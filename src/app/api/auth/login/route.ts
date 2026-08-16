import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Replace with real DB lookup + password verify (bcrypt/argon2)
    // For now this is a secure-shaped placeholder

    return NextResponse.json({
      success: false,
      message: "Auth not fully connected yet. Database required.",
    }, { status: 501 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
