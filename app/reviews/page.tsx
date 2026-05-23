import DealCard from "@/components/DealCard";
import PageHero from "@/components/PageHero";
import { deals } from "@/data/deals";

export default function Page() {
  const reviewReady = deals.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero label="Reviews" title="Product Reviews & Comparisons" description="Review pages help visitors compare products by goal, category, platform, price note, benefits and cautions." />
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-black sm:text-4xl">Start with these reviewed opportunities</h2>
          <p className="mt-4 max-w-3xl leading-8 text-black/65">Each product page includes a summary, target audience, best-fit use case, product notes, important cautions and supporting visuals where available.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviewReady.map((deal) => <DealCard key={deal.id} deal={deal} />)}
        </div>
      </section>
    </main>
  );
}
