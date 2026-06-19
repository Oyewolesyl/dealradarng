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

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);

    const result = await apiFetch<AuthResponse>("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        password: String(form.get("password") || ""),
      }),
    });

    setLoading(false);

    if (result.error || !result.data) {
      setError(result.error || "Sign up failed.");
      return;
    }

    saveSession(result.data.token, result.data.user);
    router.push("/account");
  }

  return (
    <main className="radar-shell flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <section className="brand-panel w-full max-w-md p-6 sm:p-8">
        <Link href="/" className="mb-8 flex justify-center">
          <span className="relative block h-16 w-48">
            <BrandLogo priority className="object-contain object-center" />
          </span>
        </Link>

        <p className="brand-pill mb-4 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em]">
          Create account
        </p>

        <h1 className="text-4xl font-black sm:text-5xl">Sign up</h1>

        <p className="mt-4 font-semibold leading-7 text-white/60">
          Save deals, receive updates and access member features as Deal Radar grows.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input name="name" type="text" required placeholder="Full name" className="brand-field w-full px-5 py-4 text-white outline-none transition focus:border-[#f45a1d]" />
          <input name="email" type="email" required placeholder="Email address" className="brand-field w-full px-5 py-4 text-white outline-none transition focus:border-[#f45a1d]" />
          <input name="password" type="password" required minLength={8} placeholder="Password, minimum 8 characters" className="brand-field w-full px-5 py-4 text-white outline-none transition focus:border-[#f45a1d]" />

          {error ? (
            <p className="border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-100">
              {error}
            </p>
          ) : null}

          <button type="submit" disabled={loading} className="brand-button flex w-full items-center justify-center px-5 py-4 font-black disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account?{" "}
          <Link href="/signin" className="font-black text-[#ffb199]">
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}
