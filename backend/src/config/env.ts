
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce.number().int().positive().default(5000),

  MONGODB_URI: z.string().min(1),

  FRONTEND_URL: z.string().url(),

  JWT_SECRET: z.string().min(32),

  JWT_EXPIRES_IN: z.string().default("1d"),

  BCRYPT_ROUNDS: z.coerce.number().int().min(10).max(14).default(12),

  ADMIN_EMAIL: z.string().email(),

  ADMIN_PASSWORD: z.string().min(12),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration:");
  console.error(parsed.error.flatten().fieldErrors);
  throw new Error("Backend environment validation failed.");
}

export const env = parsed.data;
