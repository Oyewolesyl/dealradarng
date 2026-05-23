"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { apiFetch, clearSession, getStoredUser } from "@/lib/api";

type User = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt?: string;
};

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("Checking your session...");

  useEffect(() => {
    const stored = getStoredUser<User>();
    if (stored) {
      setUser(stored);
      setMessage("");
    }

    apiFetch<{ user: User }>("/api/auth/me").then((result) => {
      if (result.data?.user) {
        setUser(result.data.user);
        setMessage("");
      } else {
        clearSession();
        setMessage("You need to sign in to view this page.");
      }
    });
  }, []);

  function logout() {
    clearSession();
    window.location.href = "/signin";
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-black px-5 py-20 text-white sm:px-6">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h1 className="text-4xl font-black">Account</h1>
          <p className="mt-4 text-white/65">{message}</p>
          <Link
            href="/signin"
            className="mt-8 inline-flex rounded-full bg-[#10B981] px-6 py-3 font-black text-black"
          >
            Sign in
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white sm:px-6">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">
          Member area
        </p>
        <h1 className="text-4xl font-black sm:text-6xl">Your Deal Radar account</h1>
        <p className="mt-5 max-w-2xl leading-8 text-white/65">
          Manage your profile and use your account for saved opportunities, future email preferences and member-only tools.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Profile</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-white/35">Name</dt>
                <dd className="mt-1 text-white">{user.name}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-white/35">Email</dt>
                <dd className="mt-1 text-white">{user.email}</dd>
              </div>
              <div>
                <dt className="font-bold uppercase tracking-[0.18em] text-white/35">Role</dt>
                <dd className="mt-1 text-white">{user.role}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-[#10B981]/25 bg-[#10B981]/10 p-6">
            <h2 className="text-2xl font-black">Next features</h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-white/75">
              <li>• Save opportunities for later review.</li>
              <li>• Receive deal alerts and software updates.</li>
              <li>• Track helpful tools and product categories.</li>
              <li>• Admin users can manage members from the dashboard.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {user.role === "ADMIN" ? (
            <Link
              href="/admin/users"
              className="rounded-full bg-[#10B981] px-6 py-3 font-black text-black"
            >
              Open admin users
            </Link>
          ) : null}

          <button
            type="button"
            onClick={logout}
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-black text-white"
          >
            Sign out
          </button>
        </div>
      </section>
    </main>
  );
}
