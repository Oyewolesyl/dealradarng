import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  return res.json({
    message:
      "Deals are currently managed in the Next.js frontend data/deals.ts file. Move them into PostgreSQL later when you want a full CMS.",
  });
});

export default router;
