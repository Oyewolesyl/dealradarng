import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import { env } from "./lib/env.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import adminRoutes from "./routes/admin.js";
import clickRoutes from "./routes/clicks.js";
import newsletterRoutes from "./routes/newsletter.js";
import dealRoutes from "./routes/deals.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.frontendUrl,
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));
app.use(
  rateLimit({
    windowMs: 60_000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "deal-radar-ng-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/clicks", clickRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/deals", dealRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(env.port, () => {
  console.log(`Deal Radar NG backend running on http://localhost:${env.port}`);
});
