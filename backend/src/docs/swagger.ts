
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const swaggerDocument = {
  openapi: "3.0.3",

  info: {
    title: "Shromik API",
    version: "1.0.0",
    description:
      "REST API for the Shromik construction workforce platform.",
  },

  servers: [
    {
      url: "/api/v1",
      description: "Current API server",
    },
  ],

  tags: [
    { name: "Health", description: "Server health" },
    { name: "Authentication", description: "Account authentication" },
    { name: "Workers", description: "Worker profiles" },
    { name: "Contractors", description: "Contractor profiles" },
    { name: "Jobs", description: "Job management" },
    { name: "Applications", description: "Job applications" },
    { name: "Reviews", description: "Ratings and feedback" },
    { name: "Admin", description: "Administrative operations" },
  ],

  paths: {
    "/health": {
      get: {
        tags: ["Health"],
        summary: "Check API and database status",
        responses: {
          "200": {
            description: "API and database are healthy",
          },
          "503": {
            description: "Database is disconnected",
          },
        },
      },
    },
  },
};

export function setupSwagger(app: Express) {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );
}
