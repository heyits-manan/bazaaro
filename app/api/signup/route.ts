import { NextRequest, NextResponse } from "next/server";
import { db, saveEmailSignup } from "@/lib/db";
import { z } from "zod";
import { emailSignups } from "@/lib/schema";

export const dynamic = "force-dynamic";

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  userType: z.enum(["customer", "store"]).default("customer"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, userType } = signupSchema.parse(body);

    const result = await saveEmailSignup(email, userType);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      message: "Successfully signed up!",
      data: result.data,
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
