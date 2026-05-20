import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import FeatureCard from "@/components/FeatureCard";
import { categories, deals, features } from "@/data/deals";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10B98133,transparent_35%),radial-gradient(circle_at_bottom_right,#ffffff14,transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
              Digital deal discovery
            </p>

            <h1 className="text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Find Better Digital Deals, Faster.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Discover software, online tools, digital products,
              and useful internet services from one clean platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <Link
                href="/deals"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black sm:text-base"
              >
                Explore Deals
              </Link>

              <Link
                href="/software"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black sm:text-base"
              >
                Browse Software
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#050507] px-5 py-14 text-white sm:px-6 sm:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
                Featured
              </p>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
                Featured Deals
              </h2>
            </div>

            <Link
              href="/deals"
              className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
            >
              View All Deals
            </Link>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>

        </div>

      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">

        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
            Why Deal Radar NG
          </p>

          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Built to make digital product discovery cleaner.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>

        </div>

      </section>

      <section className="bg-[#F5F5F2] px-5 py-14 sm:px-6 sm:py-20">

        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#059669] sm:text-sm">
            Categories
          </p>

          <h2 className="max-w-3xl text-3xl font-black leading-tight text-black sm:text-4xl md:text-6xl">
            Browse deals by what you actually need.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>

        </div>

      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">

        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-14">

          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Ready to discover better online tools?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Start with curated offers from Expertnaire,
            PartnerStack, and Selar. More categories
            will be added as the platform grows.
          </p>

          <Link
            href="/deals"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black sm:w-fit"
          >
            Explore Deals
          </Link>

        </div>

      </section>
    </main>
  );
}