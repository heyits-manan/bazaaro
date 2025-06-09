import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const emailSignups = pgTable("email_signups", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  userType: varchar("user_type", { length: 50 }).default("customer"),
});
