
import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", (_req, res) => {
  const databaseConnected =
    mongoose.connection.readyState === 1;

  res.status(databaseConnected ? 200 : 503).json({
    success: databaseConnected,
    message: databaseConnected
      ? "Shromik API is running."
      : "API is running but database is disconnected.",

    data: {
      application: "Shromik",
      environment: process.env.NODE_ENV,
      database: databaseConnected ? "connected" : "disconnected",
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    },
  });
});

export default router;
