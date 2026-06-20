import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Deal } from "@/types/deal";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="product-card group flex h-full flex-col overflow-hidden">
      <Link href={`/deals/${deal.slug}`} className="block">
        <div className="product-media relative flex h-60 items-center justify-center overflow-hidden p-4">
          <img
            src={deal.image}
            alt={deal.title}
            className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute left-4 top-4 rounded bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-white">
            {deal.platform}
          </div>
          <div className="absolute bottom-4 right-4 rounded bg-white px-3 py-1 text-xs font-black text-black shadow">
            {deal.priceNote}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-black uppercase tracking-[0.08em] faint">{deal.category}</p>

        <Link href={`/deals/${deal.slug}`}>
          <h3 className="mt-4 text-xl font-black leading-tight theme-text transition group-hover:text-[#f45a1d]">
            {deal.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-6 theme-muted">{deal.outcome}</p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t pt-5 theme-line">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.12em] faint">Best for</p>
            <p className="mt-1 text-sm font-black theme-text">{deal.bestFor[0]}</p>
          </div>
          <Link href={`/deals/${deal.slug}`} className="cta-secondary px-4 py-2.5 text-sm">
            View
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
