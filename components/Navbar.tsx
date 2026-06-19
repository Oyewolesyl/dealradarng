"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f45a1d]/60"
        >
          <div className="relative h-12 w-36 overflow-visible sm:h-14 sm:w-44 lg:h-16 lg:w-52">
            <BrandLogo priority className="object-contain object-left" />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.035] p-1 text-sm font-bold text-white/70 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 transition duration-200 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/signin"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition duration-200 hover:border-[#f45a1d]/50 hover:bg-white/10"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="brand-button inline-flex items-center gap-2 px-4 py-2.5 text-sm font-black"
          >
            <Search size={16} />
            Sign Up
          </Link>

        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-[#f45a1d]/50 hover:bg-white/10"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

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
                className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="brand-button flex items-center justify-center px-4 py-3 text-sm font-black"
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
