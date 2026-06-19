import Link from "next/link";
import { Mail, Radar } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/deals", label: "Marketplace" },
      { href: "/categories", label: "Categories" },
      { href: "/software", label: "Software" },
      { href: "/tools", label: "Tools" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/about", label: "About" },
      { href: "/reviews", label: "Reviews" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t theme-line">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6">
        <div className="brand-band surface p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="brand-logo-mark">
                  <BrandLogo className="object-contain object-center" />
                </div>
                <div>
                  <p className="text-2xl font-black theme-text">Deal Radar NG</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-[#f45a1d]">Digital product discovery</p>
                </div>
              </Link>
              <p className="mt-5 max-w-xl text-sm leading-7 theme-muted">
                A buyer-first marketplace for comparing digital courses, remote work resources, relocation guides and professional growth products before visiting the official product page.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:support@dealradarng.com" className="cta-primary px-4 py-3 text-sm">
                  <Mail size={16} />
                  Email support
                </a>
                <Link href="/deals" className="cta-secondary px-4 py-3 text-sm">
                  <Radar size={16} />
                  Start scanning
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {columns.map((column) => (
                <div key={column.title} className="surface-tight p-5">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f45a1d]">{column.title}</h3>
                  <div className="mt-4 grid gap-3">
                    {column.links.map((link) => (
                      <Link key={link.href} href={link.href} className="text-sm font-bold theme-muted transition hover:text-[#f45a1d]">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="pt-6 text-center text-sm font-bold theme-muted">
          Copyright {new Date().getFullYear()} Deal Radar NG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
