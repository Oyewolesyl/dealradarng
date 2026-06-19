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
      <main className="radar-shell min-h-screen bg-black px-5 py-20 text-white sm:px-6">
        <section className="brand-panel mx-auto max-w-3xl p-8">
          <p className="brand-pill mb-4 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em]">
            Account
          </p>
          <h1 className="text-4xl font-black">Member access</h1>
          <p className="mt-4 font-semibold text-white/65">{message}</p>
          <Link href="/signin" className="brand-button mt-8 inline-flex px-6 py-3 font-black">
            Sign in
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="radar-shell min-h-screen bg-black px-5 py-20 text-white sm:px-6">
      <section className="mx-auto max-w-5xl">
        <p className="brand-pill mb-4 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em]">
          Member area
        </p>
        <h1 className="text-4xl font-black sm:text-6xl">Your Deal Radar account</h1>
        <p className="mt-5 max-w-2xl font-semibold leading-8 text-white/65">
          Manage your profile and use your account for saved opportunities, deal alerts and member-only tools.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="brand-panel p-6">
            <h2 className="text-2xl font-black">Profile</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-black uppercase tracking-[0.18em] text-white/35">Name</dt>
                <dd className="mt-1 text-white">{user.name}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-[0.18em] text-white/35">Email</dt>
                <dd className="mt-1 text-white">{user.email}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-[0.18em] text-white/35">Role</dt>
                <dd className="mt-1 text-white">{user.role}</dd>
              </div>
            </dl>
          </div>

          <div className="scan-card p-6">
            <h2 className="text-2xl font-black">Next features</h2>
            <ul className="mt-6 space-y-3 text-sm font-semibold leading-6 text-white/75">
              <li>Save opportunities for later review.</li>
              <li>Receive deal alerts and software updates.</li>
              <li>Track helpful tools and product categories.</li>
              <li>Admin users can manage members from the dashboard.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {user.role === "ADMIN" ? (
            <Link href="/admin/users" className="brand-button px-6 py-3 font-black">
              Open admin users
            </Link>
          ) : null}

          <button type="button" onClick={logout} className="brand-secondary-button px-6 py-3 font-black">
            Sign out
          </button>
        </div>
      </section>
    </main>
  );
}
