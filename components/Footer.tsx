import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const footerLinks = {
  Explore: [
    { href: "/deals", label: "Deals" },
    { href: "/software", label: "Software" },
    { href: "/tools", label: "Tools" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/reviews", label: "Reviews" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="brand-panel p-5 sm:p-6">
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-14 w-44 overflow-visible sm:h-16 sm:w-56">
                <BrandLogo priority />
              </div>
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
              Deal Radar NG helps visitors scan digital products, compare buyer fit,
              and move to official product pages with better context.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61589743959335"
                target="_blank"
                rel="noreferrer"
                className="brand-secondary-button px-4 py-2 text-sm font-black"
              >
                Facebook
              </a>

              <a
                href="mailto:support@dealradarng.com"
                className="brand-button px-4 py-2 text-sm font-black"
              >
                Email
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="brand-card p-5">
                <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#ffb199]">
                  {title}
                </h3>

                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-bold text-white/72 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm font-semibold text-white/50">
          © {new Date().getFullYear()} Deal Radar NG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
