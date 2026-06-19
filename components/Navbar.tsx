"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/deals", label: "Marketplace" },
  { href: "/categories", label: "Categories" },
  { href: "/software", label: "Software" },
  { href: "/tools", label: "Tools" },
  { href: "/reviews", label: "Reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
          <div className="brand-logo-mark">
            <BrandLogo priority className="object-contain object-center" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-black leading-none theme-text">Deal Radar</p>
            <p className="mt-1 hidden text-[10px] font-black uppercase tracking-[0.22em] text-[#f45a1d] sm:block">
              NG buyer engine
            </p>
          </div>
        </Link>

        <nav className="nav-pill hidden items-center gap-1 p-1 text-sm font-black lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-4 py-2 transition hover:bg-white/10">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link href="/deals" className="cta-secondary px-4 py-3 text-sm">
            <Search size={16} />
            Scan
          </Link>
          <Link href="/signup" className="cta-primary px-4 py-3 text-sm">
            <ShoppingBag size={16} />
            Join
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="icon-button"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="site-header border-t theme-line lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-black theme-muted transition hover:bg-white/10 hover:text-[#f45a1d]"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/signin" onClick={closeMenu} className="cta-secondary px-4 py-3 text-sm">
                Sign in
              </Link>
              <Link href="/signup" onClick={closeMenu} className="cta-primary px-4 py-3 text-sm">
                Join
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
