import express from "express";
import request from "supertest";
import { afterEach, describe, expect, it, vi } from "vitest";

import { app, errorHandler } from "../src/app.js";

afterEach(() => vi.restoreAllMocks());

describe("demo API", () => {
  it("reports healthy state", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
    expect(response.headers["x-powered-by"]).toBeUndefined();
  });

  it("returns the learning message", async () => {
    const response = await request(app).get("/api/message");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "CI is working securely." });
  });

  it("returns a JSON 404 without leaking details", async () => {
    const response = await request(app).get("/missing");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Not found" });
  });

  it("hides internal error details", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const failingApp = express();
    failingApp.get("/fail", (_request, _response, next) =>
      next(new Error("private detail")),
    );
    failingApp.use(errorHandler);

    const response = await request(failingApp).get("/fail");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "Internal server error" });
    expect(JSON.stringify(response.body)).not.toContain("private detail");
  });
});
