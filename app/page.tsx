import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import FeatureCard from "@/components/FeatureCard";
import { categories, deals, features, goals } from "@/data/deals";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10B98133,transparent_35%),radial-gradient(circle_at_bottom_right,#ffffff14,transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
              Digital opportunity discovery
            </p>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Discover Digital Skills, Remote Work Opportunities and Online Income Resources.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Explore carefully selected programs from Expertnaire and Selar designed to help you build valuable skills, career opportunities, digital businesses and online income systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/deals"
                className="inline-flex items-center justify-center rounded-full border border-[#10B981] bg-[#10B981] px-7 py-4 text-sm font-black text-black transition duration-200 hover:bg-white sm:text-base"
              >
                Explore Opportunities
              </Link>

              <Link
                href="/categories"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black sm:text-base"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 pb-10 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 sm:text-xs">
            Featuring carefully selected opportunities from Nigeria&apos;s leading digital product marketplaces
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-6 sm:gap-10">
            <img
              src="/partners/selar.png"
              alt="Selar"
              className="h-9 w-auto object-contain opacity-70 transition duration-200 hover:opacity-100 sm:h-10"
            />

            <img
              src="/partners/expertnaire.png"
              alt="Expertnaire"
              className="h-7 w-auto object-contain opacity-70 transition duration-200 hover:opacity-100 sm:h-8"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#050507] px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
                Opportunities
              </p>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
                All Featured Products
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                Browse all 12 selected programs across Expertnaire and Selar.
              </p>
            </div>

            <Link
              href="/deals"
              className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
            >
              View Deals Page
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
            Why use Deal Radar NG
          </p>

          <h2 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Discover real digital opportunities without digging through scattered links.
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
            Browse opportunities by what you actually want to achieve.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
            Explore by goal
          </p>

          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Choose the outcome you want first, then pick the right product.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <div
                key={goal.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <h3 className="text-xl font-black text-white">{goal.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {goal.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {goal.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1 text-[11px] font-bold text-[#7CF4B8]"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-14">
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Ready to explore practical digital opportunities?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Start with curated programs across affiliate marketing, freelancing, relocation, publishing, ghostwriting and professional growth.
          </p>

          <Link
            href="/deals"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black sm:w-fit"
          >
            Explore All Opportunities
          </Link>
        </div>
      </section>
    </main>
  );
}