import { Filter, Search, ShoppingBag } from "lucide-react";
import DealFilters from "@/components/DealFilters";
import { dealCategories, deals, platforms } from "@/data/deals";

export default function DealsPage() {
  return (
    <main className="shop-shell text-white">
      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.48fr] lg:items-end">
          <div>
            <p className="brand-pill mb-5 inline-flex items-center gap-2 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] sm:text-sm">
              <ShoppingBag size={16} />
              Deal Radar shop
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Browse vetted digital products by goal, platform and fit.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Search selected Expertnaire and Selar offers across affiliate marketing, freelancing, relocation, publishing, marketing and professional growth.
            </p>
          </div>

          <div className="shop-card grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <Search size={20} className="text-[#ffb199]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/45">Search</p>
                <p className="mt-1 text-sm font-bold text-white">Name, skill, outcome</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <Filter size={20} className="text-[#ffb199]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/45">Filter</p>
                <p className="mt-1 text-sm font-bold text-white">Category and platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <DealFilters
            deals={deals}
            categories={[...dealCategories]}
            platforms={[...platforms]}
          />
        </div>
      </section>
    </main>
  );
}
