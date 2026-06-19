import Link from "next/link";
import { ArrowRight, BadgeCheck, Eye, Radar, Search, ShieldCheck, ShoppingBag, Sparkles, Target, Zap } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import FeatureCard from "@/components/FeatureCard";
import { categories, deals, featuredDeals, features, goals } from "@/data/deals";

const promise = [
  { icon: Eye, title: "See the product clearly", text: "Price, platform, outcome, buyer fit and caution notes are visible before you leave." },
  { icon: Target, title: "Shop by goal", text: "Start from freelancing, publishing, relocation, marketing or professional growth." },
  { icon: ShieldCheck, title: "Buy on official pages", text: "Deal Radar gives context, then sends you to the actual marketplace checkout." },
];

export default function Home() {
  const heroDeals = (featuredDeals.length ? featuredDeals : deals).slice(0, 3);
  const railDeals = deals.slice(0, 8);

  return (
    <main className="radar-page">
      <section className="radar-hero px-5 py-12 sm:px-6 lg:py-20">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="tag px-3 py-1 text-xs">
              <Radar size={16} />
              Deal Radar NG has been rebuilt
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight theme-text sm:text-6xl lg:text-7xl">
              A sharper way to shop digital opportunities.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 theme-muted">
              Browse practical products from Expertnaire and Selar with a cleaner buyer flow: scan the goal, compare the fit, then open the official product page.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <Link href="/deals" className="input-shell flex min-h-16 items-center gap-3 px-5 text-sm font-black theme-muted">
                <Search size={19} className="text-[#f45a1d]" />
                Search products, skills, platforms and outcomes
              </Link>
              <Link href="/deals" className="cta-primary min-h-16 px-6 text-sm">
                Start scanning
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <Link key={category.name} href={category.href} className="nav-pill px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">
                  {category.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="surface p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f45a1d]">Live buyer desk</p>
                <h2 className="mt-2 text-3xl font-black theme-text">Radar picks</h2>
              </div>
              <div className="rounded-full bg-[#00874e] px-3 py-1 text-xs font-black text-white">OPEN</div>
            </div>

            <div className="mt-5 grid gap-3">
              {heroDeals.map((deal, index) => (
                <Link key={deal.id} href={`/deals/${deal.slug}`} className="surface-tight group grid gap-4 p-3 transition hover:border-[#f45a1d] sm:grid-cols-[88px_1fr_auto] sm:items-center">
                  <div className="product-media flex aspect-square items-center justify-center overflow-hidden rounded-2xl p-2">
                    <img src={deal.image} alt={deal.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#f45a1d] px-2 py-1 text-[10px] font-black text-white">#{index + 1}</span>
                      <span className="text-xs font-black uppercase tracking-[0.12em] faint">{deal.platform}</span>
                    </div>
                    <h3 className="mt-2 text-base font-black leading-tight theme-text group-hover:text-[#f45a1d]">{deal.title}</h3>
                    <p className="mt-1 text-xs font-bold theme-muted">{deal.priceNote} · {deal.category}</p>
                  </div>
                  <ArrowRight size={19} className="hidden faint transition group-hover:translate-x-1 sm:block" />
                </Link>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Compare", "Shortlist", "Open"].map((item) => (
                <div key={item} className="surface-tight p-3">
                  <BadgeCheck size={17} className="text-[#18c77a]" />
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] theme-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b theme-line bg-[#f45a1d] py-3 text-white">
        <div className="marquee">
          {["Remote work", "Digital products", "Expertnaire", "Selar", "Freelancing", "Relocation guides", "Publishing", "Marketing systems", "Remote work", "Digital products", "Expertnaire", "Selar"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="tag px-3 py-1 text-xs">
                <Sparkles size={15} />
                Product rail
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight theme-text sm:text-5xl">
                Products that look worth a second look.
              </h2>
            </div>
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
          <div className="grid gap-5 lg:grid-cols-3">
            {promise.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="surface p-6">
                  <Icon size={26} className="text-[#f45a1d]" />
                  <h3 className="mt-5 text-2xl font-black theme-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 theme-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="tag px-3 py-1 text-xs">
            <ShoppingBag size={15} />
            Buy by category
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight theme-text sm:text-5xl">
            Choose what you are trying to do, then compare what fits.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="surface p-6 sm:p-8">
            <p className="tag px-3 py-1 text-xs">
              <Zap size={15} />
              Guided paths
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight theme-text sm:text-5xl">
              The site is now built around decisions.
            </h2>
            <p className="mt-5 text-base leading-8 theme-muted">
              Each path points to a buyer intent, not just a random product list.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {goals.map((goal) => (
              <div key={goal.title} className="surface-tight p-5">
                <h3 className="text-xl font-black theme-text">{goal.title}</h3>
                <p className="mt-3 text-sm leading-6 theme-muted">{goal.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {goal.products.map((product) => (
                    <span key={product} className="rounded-full border theme-line px-3 py-1 text-[11px] font-bold theme-muted">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="tag px-3 py-1 text-xs">Market signals</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight theme-text sm:text-5xl">
            Built for practical shoppers, not hype scrolling.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="brand-band surface grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="tag px-3 py-1 text-xs">Ready</p>
              <h2 className="mt-4 text-4xl font-black leading-tight theme-text sm:text-5xl">
                Open the marketplace and start scanning.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 theme-muted">
                Filter by goal, compare the product notes, then continue only when the offer fits your plan.
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
