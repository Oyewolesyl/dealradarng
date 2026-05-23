import { Router } from "express";
import { requireAuth } from "../lib/auth.js";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.get("/me", requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      savedDeals: true,
      createdAt: true,
    },
  });

  return res.json({ user });
});

router.post("/me/saved-deals", requireAuth, async (req, res) => {
  const { dealSlug, dealTitle } = req.body || {};

  if (!dealSlug || !dealTitle) {
    return res.status(400).json({ error: "dealSlug and dealTitle are required." });
  }

  const savedDeal = await prisma.savedDeal.upsert({
    where: {
      userId_dealSlug: {
        userId: req.user!.id,
        dealSlug,
      },
    },
    update: { dealTitle },
    create: {
      userId: req.user!.id,
      dealSlug,
      dealTitle,
    },
  });

  return res.status(201).json({ savedDeal });
});

export default router;
