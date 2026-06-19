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

      <div className="flex flex-col gap-12 px-5 py-14 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

          <div className="max-w-md">

            <Link href="/" className="inline-flex items-center">
              <div className="relative overflow-hidden h-20 w-52 sm:h-24 sm:w-64 md:h-28 md:w-72">
                <BrandLogo priority className="object-contain object-left scale-110" />
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/80">
              Discover trending software deals, SaaS discounts,
              creator tools, digital products, and online opportunities
              curated for entrepreneurs and digital professionals.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">

              <a
                href="https://web.facebook.com/profile.php?id=61589743959335"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Facebook
              </a>

              <a
                href="mailto:support@dealradarng.com"
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Email
              </a>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>

                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>

                <div className="flex flex-col gap-3">

                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-white/80 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Deal Radar NG. All rights reserved.
        </div>

      </div>

    </footer>
  );
}
