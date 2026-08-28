import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

export const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "16kb" }));

app.get("/health", (_request: Request, response: Response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/api/message", (_request: Request, response: Response) => {
  response.status(200).json({ message: "CI is working securely." });
});

app.use((_request: Request, response: Response) => {
  response.status(404).json({ error: "Not found" });
});

// Deliberately avoid returning internal error details to callers.
export function errorHandler(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void {
  void _next;
  console.error("Unhandled request error", error);
  response.status(500).json({ error: "Internal server error" });
}

app.use(errorHandler);
