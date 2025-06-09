CREATE TABLE "email_signups" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"user_type" varchar(50) DEFAULT 'customer',
	CONSTRAINT "email_signups_email_unique" UNIQUE("email")
);
