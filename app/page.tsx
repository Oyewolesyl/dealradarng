import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import FeatureCard from "@/components/FeatureCard";
import { categories, deals, featuredDeals, features, goals } from "@/data/deals";

export default function Home() {
  const visibleFeatured = featuredDeals.length >= 4 ? featuredDeals : deals.slice(0, 4);

  return (
    <main>
      <section className="brand-hero overflow-hidden px-5 py-14 text-white sm:px-6 sm:py-16 md:py-20">
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-140px)] max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.72fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="brand-pill mb-5 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em] sm:text-sm">
              Find the best deals, faster
            </p>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.96] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Radar-picked digital deals for skills, work and online income.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Deal Radar NG scans the noisy marketplace and organizes practical products from Expertnaire and Selar by outcome, platform and buyer fit, so you can compare faster before you click.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/deals"
                className="brand-button inline-flex items-center justify-center px-7 py-4 text-sm font-black sm:text-base"
              >
                Start Scanning Deals
              </Link>

              <Link
                href="/categories"
                className="brand-secondary-button inline-flex items-center justify-center px-7 py-4 text-sm font-black sm:text-base"
              >
                Browse Categories
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
              {[
                ["12", "Curated products"],
                ["2", "Trusted platforms"],
                ["Fast", "Goal-based filters"],
              ].map(([value, label]) => (
                <div key={label} className="brand-panel p-3 sm:p-4">
                  <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="brand-panel hidden p-5 lg:block">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffb199]">
              Deal Radar workflow
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Search by goal, category or platform.",
                "Compare buyer fit before opening checkout.",
                "Use product visuals and notes to decide faster.",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 border border-white/10 bg-black/25 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f45a1d] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-bold leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 pb-10 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 sm:text-xs">
            Featuring carefully selected opportunities from Nigeria&apos;s leading digital product marketplaces
          </p>

          <div className="brand-panel flex flex-wrap items-center justify-center gap-8 px-6 py-6 sm:gap-10">
            <img
              src="/partners/selar.png"
              alt="Selar"
              className="h-9 w-auto object-contain opacity-75 transition duration-200 hover:opacity-100 sm:h-10"
            />

            <img
              src="/partners/expertnaire.png"
              alt="Expertnaire"
              className="h-7 w-auto object-contain opacity-75 transition duration-200 hover:opacity-100 sm:h-8"
            />
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
                Featured Opportunities
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                Start with these high-priority programs, then browse the full marketplace.
              </p>
            </div>

            <Link
              href="/deals"
              className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
            >
              View All 12 Products
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleFeatured.map((deal) => (
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

                <p className="mt-3 text-sm leading-6 text-white/70">
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

      <section className="bg-[#050507] px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
                Before you buy
              </p>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
                We organize the options. You still choose what fits your goal.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Deal Radar NG helps you compare digital products by outcome, category and platform. Always read the product page carefully before paying.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#10B981]/20 bg-[#10B981]/10 p-5">
              <h3 className="text-xl font-black text-white">Buyer checklist</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                <li>Confirm the product matches your current goal.</li>
                <li>Check the official product page before purchase.</li>
                <li>Avoid expecting guaranteed income or guaranteed relocation outcomes.</li>
                <li>Use the product only if you are ready to learn and implement.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-14">
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            Ready to explore practical digital opportunities?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
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
