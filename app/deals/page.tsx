import DealCard from "@/components/DealCard";
import { deals } from "@/data/deals";

export default function DealsPage() {
  return (
    <main className="bg-black text-white">
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
            Opportunities
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Explore curated digital skills, remote work and online income resources.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
            Browse selected Expertnaire and Selar products across affiliate marketing, freelancing, relocation, digital products, publishing, marketing and professional growth.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </main>
  );
}
