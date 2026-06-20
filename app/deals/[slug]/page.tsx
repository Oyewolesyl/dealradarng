import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, CircleAlert, Layers, Target } from "lucide-react";
import DealCard from "@/components/DealCard";
import ProductCTA from "@/components/ProductCTA";
import ProductGallery from "@/components/ProductGallery";
import { deals, getDealBySlug, getRelatedDeals } from "@/data/deals";

export function generateStaticParams() {
  return deals.map((deal) => ({ slug: deal.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) return { title: "Product Not Found | Deal Radar NG" };

  return {
    title: `${deal.title} | Deal Radar NG`,
    description: deal.outcome,
  };
}

export default async function DealDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) notFound();

  const relatedDeals = getRelatedDeals(deal);

  return (
    <main className="radar-page">
      <section className="radar-hero px-5 py-10 sm:px-6 lg:py-16">
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link href="/deals" className="cta-secondary px-4 py-2.5 text-sm">
            <ArrowLeft size={16} />
            Back to marketplace
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="surface bg-white p-4">
              <div className="product-media flex min-h-[430px] items-center justify-center rounded-lg p-4">
                <img src={deal.image} alt={deal.title} className="max-h-[560px] w-full object-contain" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="tag px-3 py-1 text-xs">{deal.platform}</span>
                <span className="rounded border theme-line px-3 py-1 text-xs font-black theme-muted">{deal.category}</span>
                <span className="rounded border theme-line px-3 py-1 text-xs font-black theme-muted">{deal.priceNote}</span>
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] theme-text sm:text-5xl lg:text-6xl">
                {deal.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-bold leading-8 theme-muted">{deal.description}</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="surface-tight p-4">
                  <Target size={20} className="text-[#f45a1d]" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] faint">Outcome</p>
                  <p className="mt-2 text-sm font-bold leading-6 theme-muted">{deal.outcome}</p>
                </div>
                <div className="surface-tight p-4">
                  <Layers size={20} className="text-[#18c77a]" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] faint">Audience</p>
                  <p className="mt-2 text-sm font-bold leading-6 theme-muted">{deal.audience}</p>
                </div>
                <div className="surface-tight p-4">
                  <BadgeCheck size={20} className="text-[#f45a1d]" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] faint">Best fit</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {deal.bestFor.slice(0, 3).map((item) => (
                      <span key={item} className="rounded border theme-line px-3 py-1 text-[11px] font-bold theme-muted">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <ProductCTA deal={deal} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="tag px-3 py-1 text-xs">Radar notes</p>
            <h2 className="mt-4 text-4xl font-black leading-tight theme-text sm:text-5xl">
              Why this product made the shelf.
            </h2>
            <p className="mt-5 text-base font-bold leading-8 theme-muted">{deal.whyPick}</p>
          </div>

          <div className="grid gap-4">
            {deal.benefits.map((benefit) => (
              <div key={benefit} className="surface-tight p-5">
                <p className="text-sm font-bold leading-7 theme-muted">{benefit}</p>
              </div>
            ))}
            {deal.caution ? (
              <div className="surface-tight border-[#f45a1d]/40 bg-[#f45a1d]/10 p-5">
                <div className="flex items-center gap-2 text-[#f45a1d]">
                  <CircleAlert size={19} />
                  <p className="text-sm font-black">Important buyer note</p>
                </div>
                <p className="mt-3 text-sm font-bold leading-7 theme-muted">{deal.caution}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <ProductGallery deal={deal} />

      {relatedDeals.length ? (
        <section className="px-5 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="tag px-3 py-1 text-xs">Similar products</p>
            <h2 className="mt-4 text-4xl font-black leading-tight theme-text sm:text-5xl">
              Keep comparing before you click.
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
