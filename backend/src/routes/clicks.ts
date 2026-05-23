import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

const router = Router();

const clickSchema = z.object({
  dealSlug: z.string().min(1),
  dealTitle: z.string().min(1),
  platform: z.string().min(1),
  affiliateUrl: z.string().url(),
  userId: z.string().optional(),
});

router.post("/", async (req, res) => {
  const parsed = clickSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid click payload." });
  }

  const click = await prisma.dealClick.create({
    data: parsed.data,
  });

  return res.status(201).json({ click });
});

export default router;
