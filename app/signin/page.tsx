"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch, saveSession } from "@/lib/api";
import BrandLogo from "@/components/BrandLogo";

type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: "USER" | "ADMIN";
  };
};

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);

    const result = await apiFetch<AuthResponse>("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        email: String(form.get("email") || ""),
        password: String(form.get("password") || ""),
      }),
    });

    setLoading(false);

    if (result.error || !result.data) {
      setError(result.error || "Sign in failed.");
      return;
    }

    saveSession(result.data.token, result.data.user);
    router.push(result.data.user.role === "ADMIN" ? "/admin/users" : "/account");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 sm:p-8">
        <Link href="/" className="mb-8 flex justify-center">
          <span className="relative block h-20 w-48">
            <BrandLogo priority className="object-contain object-center" />
          </span>
        </Link>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
          Welcome back
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">Sign in</h1>

        <p className="mt-4 leading-7 text-white/60">
          Access your Deal Radar NG account, saved opportunities, admin tools and launch resources.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-[#10B981]"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-[#10B981]"
          />

          {error ? (
            <p className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-100">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-2xl bg-[#10B981] px-5 py-4 font-black text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-bold text-[#10B981]">
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
}
