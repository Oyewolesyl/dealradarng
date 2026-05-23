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
    <main className="min-h-screen bg-black px-5 py-20 text-white sm:px-6">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">
              Admin
            </p>
            <h1 className="text-4xl font-black sm:text-6xl">User management</h1>
            <p className="mt-5 max-w-2xl leading-8 text-white/65">
              View registered Deal Radar NG users and confirm who has admin access.
            </p>
          </div>

          <Link
            href="/account"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-black text-white"
          >
            Back to account
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
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
                        <span className="rounded-full border border-[#10B981]/25 bg-[#10B981]/10 px-3 py-1 text-xs font-black text-[#7CF4B8]">
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
