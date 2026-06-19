"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type User = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState("Loading users...");

  useEffect(() => {
    apiFetch<{ users: User[] }>("/api/admin/users").then((result) => {
      if (result.error) {
        setMessage(result.error);
        return;
      }

      setUsers(result.data?.users || []);
      setMessage("");
    });
  }, []);

  return (
    <main className="radar-shell min-h-screen bg-black px-5 py-20 text-white sm:px-6">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="brand-pill mb-4 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em]">
              Admin
            </p>
            <h1 className="text-4xl font-black sm:text-6xl">User management</h1>
            <p className="mt-5 max-w-2xl font-semibold leading-8 text-white/65">
              View registered Deal Radar NG users and confirm who has admin access.
            </p>
          </div>

          <Link href="/account" className="brand-secondary-button px-6 py-3 font-black">
            Back to account
          </Link>
        </div>

        <div className="brand-panel mt-10 overflow-hidden">
          {message ? (
            <p className="p-6 text-white/70">{message}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-[0.2em] text-white/45">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-white/10 last:border-b-0">
                      <td className="px-6 py-4 font-bold">{user.name}</td>
                      <td className="px-6 py-4 text-white/70">{user.email}</td>
                      <td className="px-6 py-4">
                        <span className="brand-pill px-3 py-1 text-xs font-black">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/55">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
