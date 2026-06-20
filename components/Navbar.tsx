"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
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
        <Link href="/" onClick={closeMenu} className="relative h-20 w-28 shrink-0 sm:h-24 sm:w-32">
          <BrandLogo priority className="object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold theme-muted lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#f45a1d]">
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
              <Link href="/deals" onClick={closeMenu} className="cta-primary px-4 py-3 text-sm">
                Browse
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
