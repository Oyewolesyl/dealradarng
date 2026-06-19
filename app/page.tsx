import Link from "next/link";
import { ArrowRight, CheckCircle2, Radar, Search, ShoppingBag, Sparkles, Zap } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import FeatureCard from "@/components/FeatureCard";
import { categories, deals, featuredDeals, features, goals } from "@/data/deals";

export default function Home() {
  const visibleFeatured = featuredDeals.length >= 4 ? featuredDeals : deals.slice(0, 4);
  const popularDeals = deals.slice(0, 6);
  const topCategories = categories.slice(0, 6);
  const featuredPreview = visibleFeatured.slice(0, 3);

  return (
    <main className="shop-shell">
      <section className="brand-hero radar-shell px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="brand-pill mb-5 inline-flex items-center gap-2 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] sm:text-sm">
              <Radar size={16} />
              Deal Radar NG Marketplace
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Shop vetted digital products with a clearer radar.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Compare practical offers from Expertnaire and Selar by goal, platform, buyer fit, price and caution notes before you click through.
            </p>

            <div className="shop-card mt-7 p-3 sm:p-4">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <Link
                  href="/deals"
                  className="brand-field flex min-h-14 items-center gap-3 px-4 py-3 text-sm font-bold text-white/70 transition hover:border-[#f45a1d]"
                >
                  <Search size={18} className="text-[#ffb199]" />
                  Search products, goals, platforms...
                </Link>

                <Link
                  href="/deals"
                  className="brand-button inline-flex min-h-14 items-center justify-center gap-2 px-5 py-3 text-sm font-black"
                >
                  Open marketplace
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {topCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-black text-white/70 transition hover:border-[#f45a1d]/60 hover:text-white"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
              {[
                ["12", "Curated products"],
                ["2", "Marketplaces"],
                ["Fast", "Goal filters"],
              ].map(([value, label]) => (
                <div key={label} className="shop-card p-3 sm:p-4">
                  <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/50 sm:text-[11px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="shop-card overflow-hidden p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffb199]">
                  Live shop radar
                </p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Today&apos;s quick picks
                </h2>
              </div>
              <span className="signal-dot shrink-0" />
            </div>

            <div className="mt-5 space-y-3">
              {featuredPreview.map((deal, index) => (
                <Link
                  key={deal.id}
                  href={`/deals/${deal.slug}`}
                  className="group grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:border-[#f45a1d]/55 hover:bg-white/[0.07] sm:grid-cols-[86px_1fr_auto] sm:items-center"
                >
                  <div className="product-media flex aspect-square items-center justify-center overflow-hidden rounded-lg p-2">
                    <img src={deal.image} alt={deal.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-[#f45a1d] px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                        #{index + 1}
                      </span>
                      <span className="text-xs font-bold text-white/50">{deal.platform}</span>
                    </div>
                    <h3 className="mt-2 text-base font-black leading-tight text-white group-hover:text-[#ffb199]">
                      {deal.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-white/55">{deal.priceNote}</p>
                  </div>
                  <ArrowRight className="hidden text-white/35 transition group-hover:translate-x-1 group-hover:text-[#ffb199] sm:block" size={20} />
                </Link>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                "Compare price",
                "Check buyer fit",
                "Open official page",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <CheckCircle2 size={17} className="text-[#ffb199]" />
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-[#f45a1d] py-3">
        <div className="deal-tape">
          {[
            "Shop smarter",
            "Expertnaire picks",
            "Selar products",
            "Remote work resources",
            "Digital skill programs",
            "Buyer-fit notes",
            "Shop smarter",
            "Expertnaire picks",
            "Selar products",
            "Remote work resources",
            "Digital skill programs",
            "Buyer-fit notes",
          ].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-[11px] font-black uppercase tracking-[0.25em] text-white/40 sm:text-xs">
            Featuring selected offers from Nigeria-friendly digital product marketplaces
          </p>

          <div className="shop-card flex flex-wrap items-center justify-center gap-8 px-6 py-6 sm:gap-12">
            <img src="/partners/selar.png" alt="Selar" className="h-9 w-auto object-contain opacity-75 transition hover:opacity-100 sm:h-10" />
            <img src="/partners/expertnaire.png" alt="Expertnaire" className="h-7 w-auto object-contain opacity-75 transition hover:opacity-100 sm:h-8" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffb199] sm:text-sm">
                <Sparkles size={16} />
                Featured shelf
              </p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Popular products to start your scan.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                A fast storefront view for offers with clear outcomes, practical categories and official product links.
              </p>
            </div>

            <Link href="/deals" className="brand-secondary-button inline-flex w-fit items-center gap-2 px-5 py-3 text-sm font-black">
              View all products
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="deal-shelf">
            {popularDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#ffb199] sm:text-sm">
                Shop by outcome
              </p>
              <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Pick the result first, then compare the products.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffb199] sm:text-sm">
            <Zap size={16} />
            Why it feels faster
          </p>
          <h2 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            No endless link hunting. Just clearer product discovery.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="shop-card p-6 sm:p-8">
            <p className="brand-pill mb-4 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">
              Buyer mode
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Use the radar before you buy.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
              Deal Radar NG organizes offers. You still review the official page, price, fit and expectations before paying.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <div key={goal.title} className="shop-card p-5">
                <h3 className="text-lg font-black text-white">{goal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{goal.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {goal.products.map((product) => (
                    <span key={product} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold text-white/60">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-8 text-white sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="shop-card grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffb199] sm:text-sm">
                <ShoppingBag size={16} />
                Start shopping smarter
              </p>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Browse the marketplace and open only what fits.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                Filter by category, platform and search terms across affiliate marketing, freelancing, relocation, publishing, marketing and professional growth.
              </p>
            </div>

            <Link href="/deals" className="brand-button inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-black sm:text-base">
              Explore all deals
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
