import { Filter, Search, ShoppingBag } from "lucide-react";
import DealFilters from "@/components/DealFilters";
import { dealCategories, deals, platforms } from "@/data/deals";

export default function DealsPage() {
  return (
    <main className="radar-page">
      <section className="radar-hero px-5 py-14 sm:px-6 lg:py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] theme-text sm:text-6xl">
              Scan the full product floor.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 theme-muted">
              Search, filter and compare curated digital products by outcome, category and marketplace.
            </p>
          </div>

          <div className="surface grid gap-3 p-4">
            <div className="surface-tight flex items-center gap-3 p-4">
              <Search size={20} className="text-[#f45a1d]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] faint">Search</p>
                <p className="mt-1 text-sm font-black theme-text">Skills, outcomes, names</p>
              </div>
            </div>
            <div className="surface-tight flex items-center gap-3 p-4">
              <Filter size={20} className="text-[#18c77a]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] faint">Filter</p>
                <p className="mt-1 text-sm font-black theme-text">Category and platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <DealFilters deals={deals} categories={[...dealCategories]} platforms={[...platforms]} />
        </div>
      </section>
    </main>
  );
}
