import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

          <div className="relative h-28 w-64 overflow-hidden sm:h-36 sm:w-80 md:h-44 md:w-[28rem]">
            <Image
              src="/brand/main-logo-white.svg"
              alt="Deal Radar NG"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="mt-8 inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-2 text-sm font-semibold text-[#10B981]">
            Discover Trending Digital Deals
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Home of Software Deals, SaaS Discounts, and Digital Opportunities
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            Explore curated software deals, creator tools, AI platforms,
            business resources, and online opportunities built for modern entrepreneurs.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <Link
              href="/deals"
              className="rounded-full bg-[#10B981] px-7 py-3 text-sm font-black text-black transition duration-200 hover:scale-[1.02] hover:bg-white"
            >
              Explore Deals
            </Link>

            <Link
              href="/software"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
            >
              Browse Software
            </Link>

          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

            <a
              href="https://web.facebook.com/profile.php?id=61589743959335"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
            >
              Facebook
            </a>

            <a
              href="mailto:support@dealradarng.com"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
            >
              Email
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}