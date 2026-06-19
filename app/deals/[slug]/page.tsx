import Link from "next/link";
import { notFound } from "next/navigation";
import DealCard from "@/components/DealCard";
import ProductCTA from "@/components/ProductCTA";
import ProductGallery from "@/components/ProductGallery";
import { deals, getDealBySlug, getRelatedDeals } from "@/data/deals";

export function generateStaticParams() {
  return deals.map((deal) => ({
    slug: deal.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    return {
      title: "Opportunity Not Found | Deal Radar NG",
    };
  }

  return {
    title: `${deal.title} | Deal Radar NG`,
    description: deal.outcome,
  };
}

export default async function DealDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    notFound();
  }

  const relatedDeals = getRelatedDeals(deal);

  return (
    <main className="bg-black text-white">
      <section className="radar-shell px-5 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/deals"
            className="brand-secondary-button inline-flex px-4 py-2 text-sm font-black"
          >
            ← Back to scanner
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="brand-panel bg-white p-4">
              <div className="flex min-h-[420px] items-center justify-center bg-[#f7faf7]">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="mx-auto max-h-[520px] w-full object-contain"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="brand-pill px-3 py-1 text-xs font-black">
                  {deal.platform}
                </span>

                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/65">
                  {deal.category}
                </span>

                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/65">
                  {deal.priceNote}
                </span>
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] sm:text-5xl md:text-6xl">
                {deal.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/72">
                {deal.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="scan-card p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">
                    Radar outcome
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/75">{deal.outcome}</p>
                </div>

                <div className="scan-card p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">
                    Best for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {deal.bestFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[#f45a1d]/30 bg-[#f45a1d]/10 px-3 py-1 text-[11px] font-black text-[#ffb199]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ProductCTA deal={deal} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="brand-pill mb-3 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em] sm:text-sm">
              Product notes
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Why this made the radar
            </h2>

            <p className="mt-5 text-base font-semibold leading-8 text-white/65">
              {deal.whyPick}
            </p>
          </div>

          <div className="grid gap-4">
            {deal.benefits.map((benefit) => (
              <div key={benefit} className="brand-card p-5">
                <p className="text-sm font-semibold leading-6 text-white/75">{benefit}</p>
              </div>
            ))}

            {deal.caution ? (
              <div className="border border-[#ffd21e]/35 bg-[#ffd21e]/10 p-5">
                <p className="text-sm font-black text-[#ffd21e]">Important note</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-yellow-50/80">{deal.caution}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <ProductGallery deal={deal} />

      {relatedDeals.length > 0 ? (
        <section className="bg-[#050507] px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="brand-pill mb-3 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em] sm:text-sm">
              Related
            </p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Similar opportunities
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDeals.map((related) => (
                <DealCard key={related.id} deal={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
