
import app from "./app";
import { connectDatabase, disconnectDatabase } from "./config/database";
import { env } from "./config/env";

async function startServer() {
  try {
    await connectDatabase();

    const server = app.listen(env.PORT, () => {
      console.log("--------------------------------");
      console.log("SHROMIK BACKEND STARTED");
      console.log("--------------------------------");
      console.log(`Environment: ${env.NODE_ENV}`);
      console.log(`Port: ${env.PORT}`);
      console.log(`API: http://localhost:${env.PORT}/api/v1`);
      console.log(`Docs: http://localhost:${env.PORT}/api-docs`);
      console.log("--------------------------------");
    });

    const shutdown = async (signal: string) => {
      console.log(`${signal} received. Shutting down...`);

      server.close(async () => {
        try {
          await disconnectDatabase();
          process.exit(0);
        } catch (error) {
          console.error("Shutdown error:", error);
          process.exit(1);
        }
      });
    };

    process.on("SIGINT", () => void shutdown("SIGINT"));
    process.on("SIGTERM", () => void shutdown("SIGTERM"));
  } catch (error) {
    console.error("Unable to start Shromik:", error);
    process.exit(1);
  }
}

void startServer();
