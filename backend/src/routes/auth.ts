import bcrypt from "bcryptjs";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth, signToken } from "../lib/auth.js";

const router = Router();

const signupSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email().toLowerCase(),
  password: z.string().min(8),
});

const signinSchema = z.object({
  email: z.string().trim().email().toLowerCase(),
  password: z.string().min(1),
});

function publicUser(user: { id: string; name: string; email: string; role: "USER" | "ADMIN"; createdAt?: Date }) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
}

router.post("/signup", async (req, res) => {
  const parsed = signupSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Enter a valid name, email and password of at least 8 characters." });
  }

  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } });

  if (exists) {
    return res.status(409).json({ error: "An account already exists with this email." });
  }

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);

  const user = await prisma.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash,
    },
  });

  const token = signToken({ id: user.id, email: user.email, role: user.role });

  return res.status(201).json({ token, user: publicUser(user) });
});

router.post("/signin", async (req, res) => {
  const parsed = signinSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Enter a valid email and password." });
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const ok = await bcrypt.compare(parsed.data.password, user.passwordHash);

  if (!ok) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const token = signToken({ id: user.id, email: user.email, role: user.role });

  return res.json({ token, user: publicUser(user) });
});

router.get("/me", requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  return res.json({ user });
});

export default router;
