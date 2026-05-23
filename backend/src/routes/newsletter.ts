import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

const router = Router();

const schema = z.object({
  email: z.string().trim().email().toLowerCase(),
  source: z.string().optional(),
});

router.post("/", async (req, res) => {
  const parsed = schema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  const subscriber = await prisma.newsletterSubscriber.upsert({
    where: { email: parsed.data.email },
    update: { source: parsed.data.source },
    create: parsed.data,
  });

  return res.status(201).json({ subscriber });
});

export default router;
