import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import { categories, deals, featuredDeals } from "@/data/deals";

export default function Home() {
  const heroDeals = (featuredDeals.length ? featuredDeals : deals).slice(0, 3);
  const railDeals = deals.slice(0, 8);

  return (
    <main className="radar-page">
      <section className="radar-hero px-5 py-14 sm:px-6 lg:py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight theme-text sm:text-6xl lg:text-7xl">
              Find practical digital products faster.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 theme-muted">
              Compare selected Expertnaire and Selar products by outcome, price, platform and buyer fit before opening the official product page.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/deals" className="cta-secondary min-h-14 px-6 text-sm">
                <Search size={19} className="text-[#f45a1d]" />
                Search marketplace
              </Link>
              <Link href="/deals" className="cta-primary min-h-14 px-6 text-sm">
                Browse products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="surface p-4 sm:p-5">
            <h2 className="text-3xl font-black theme-text">Featured products</h2>
            <div className="mt-5 grid gap-3">
              {heroDeals.map((deal) => (
                <Link
                  key={deal.id}
                  href={`/deals/${deal.slug}`}
                  className="surface-tight group grid gap-4 p-3 transition hover:border-[#f45a1d] sm:grid-cols-[88px_1fr_auto] sm:items-center"
                >
                  <div className="product-media flex aspect-square items-center justify-center overflow-hidden rounded-lg p-2">
                    <img src={deal.image} alt={deal.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.12em] faint">{deal.platform}</p>
                    <h3 className="mt-2 text-base font-black leading-tight theme-text group-hover:text-[#f45a1d]">{deal.title}</h3>
                    <p className="mt-1 text-xs font-bold theme-muted">{deal.priceNote} / {deal.category}</p>
                  </div>
                  <ArrowRight size={19} className="hidden faint transition group-hover:translate-x-1 sm:block" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-black leading-tight theme-text sm:text-5xl">
              Browse selected products.
            </h2>
            <Link href="/deals" className="cta-secondary w-fit px-5 py-3 text-sm">
              Full marketplace
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="deal-rail">
            {railDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-4xl font-black leading-tight theme-text sm:text-5xl">
            Product categories.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="brand-band surface grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black leading-tight theme-text sm:text-5xl">
                Open the marketplace.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 theme-muted">
                Filter by category, compare product notes and continue only when the offer fits your plan.
              </p>
            </div>
            <Link href="/deals" className="cta-primary px-7 py-4 text-base">
              Browse products
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
