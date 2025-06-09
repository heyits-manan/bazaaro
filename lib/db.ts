import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { emailSignups } from "./schema";

// Use DATABASE_URL instead of NEXT_PUBLIC_NEON_URL for security
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Create a Neon HTTP client
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

// Initialize the database table if it doesn't exist
export async function initializeDB() {
  try {
    // Drizzle will handle table creation through migrations
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

export async function saveEmailSignup(
  email: string,
  userType: string = "customer"
) {
  try {
    const result = await db
      .insert(emailSignups)
      .values({
        email,
        userType,
      })
      .returning();

    return { success: true, data: result[0] };
  } catch (error: any) {
    console.error("Database error:", error);
    if (error?.code === "23505") {
      return { success: false, error: "Email already registered" };
    }
    return { success: false, error: "Failed to save email" };
  }
}
