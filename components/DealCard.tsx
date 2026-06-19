import Link from "next/link";
import type { Deal } from "@/types/deal";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="brand-card group flex h-full flex-col overflow-hidden">
      <Link href={`/deals/${deal.slug}`} className="block">
        <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-4">
          <img
            src={deal.image}
            alt={deal.title}
            className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute left-4 top-4 rounded-md border border-black/10 bg-black/80 px-3 py-1 text-xs font-black text-white backdrop-blur">
            {deal.platform}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="brand-pill inline-flex w-fit px-3 py-1 text-xs font-black">
            {deal.badge}
          </span>

          <span className="text-xs font-semibold text-white/50">
            {deal.category}
          </span>
        </div>

        <Link href={`/deals/${deal.slug}`}>
          <h3 className="text-xl font-black leading-tight text-white transition group-hover:text-[#ffb199] sm:text-2xl">
            {deal.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-6 text-white/70">
          {deal.outcome}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {deal.bestFor.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold text-white/65"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Price
            </p>

            <p className="mt-1 text-sm font-black text-white">
              {deal.priceNote}
            </p>
          </div>

          <Link
            href={`/deals/${deal.slug}`}
            className="brand-secondary-button inline-flex shrink-0 items-center justify-center px-4 py-2.5 text-sm font-black"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
