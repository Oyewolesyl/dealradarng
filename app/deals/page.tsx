import DealCard from "@/components/DealCard";
import PageHero from "@/components/PageHero";
import { deals } from "@/data/deals";

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <PageHero label="Deals" title="Digital deals worth checking first." description="A growing collection of software, tools, courses, digital products, and online services." />
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{deals.map((deal) => <DealCard key={deal.id} deal={deal} />)}</div>
      </section>
    </main>
  );
}
