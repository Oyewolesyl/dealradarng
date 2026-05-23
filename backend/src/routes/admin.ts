import { Router } from "express";
import { requireAdmin, requireAuth } from "../lib/auth.js";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.use(requireAuth, requireAdmin);

router.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return res.json({ users });
});

router.get("/clicks", async (_req, res) => {
  const clicks = await prisma.dealClick.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return res.json({ clicks });
});

router.get("/newsletter", async (_req, res) => {
  const subscribers = await prisma.newsletterSubscriber.findMany({
    orderBy: { createdAt: "desc" },
  });

  return res.json({ subscribers });
});

export default router;
