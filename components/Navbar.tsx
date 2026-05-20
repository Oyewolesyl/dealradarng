"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/deals", label: "Deals" },
  { href: "/software", label: "Software" },
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/reviews", label: "Reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">

      <div className="flex w-full items-center justify-between px-3 py-2">

        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <div className="relative overflow-hidden h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-52 lg:h-28 lg:w-64">
            <Image
              src="/brand/main-logo-white.svg"
              alt="Deal Radar NG"
              fill
              priority
              className="object-cover object-left scale-110"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">

          <Link
            href="/signin"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition duration-200 hover:bg-white/10"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-[#10B981] px-5 py-2.5 text-sm font-black text-black transition duration-200 hover:bg-white"
          >
            Sign Up
          </Link>

        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {open && (
        <div className="border-t border-white/10 bg-black lg:hidden">

          <div className="flex flex-col gap-1 px-4 py-4">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-white/75 transition duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-3">

              <Link
                href="/signin"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="flex items-center justify-center rounded-2xl bg-[#10B981] px-4 py-3 text-sm font-black text-black"
              >
                Sign Up
              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}