
import express, { type ErrorRequestHandler } from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env";
import { apiLimiter, enforceHttps } from "./middleware/security";
import { notFound } from "./middleware/notFound";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = typeof err?.status === "number" ? err.status : 500;

  res.status(status).json({
    success: false,
    message: err?.message || "Internal Server Error",
  });
};

import healthRoutes from "./routes/health.routes";
import { setupSwagger } from "./docs/swagger";

const app = express();

app.disable("x-powered-by");

if (env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

app.use(helmet());

app.use(enforceHttps);

app.use(
  cors({
    origin: env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({
  extended: false,
  limit: "10kb",
}));

app.use("/api", apiLimiter);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Welcome to Shromik API.",
    documentation: "/api-docs",
    health: "/api/v1/health",
  });
});

app.use("/api/v1/health", healthRoutes);

setupSwagger(app);

app.use(notFound);

app.use(errorHandler);

export default app;
