
import type { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import { env } from "../config/env";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts.",
  },
});

export function enforceHttps(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (env.NODE_ENV !== "production") {
    return next();
  }

  const protocol = req.get("x-forwarded-proto");

  if (!req.secure && protocol !== "https") {
    return res.status(400).json({
      success: false,
      message: "HTTPS is required.",
    });
  }

  next();
}
