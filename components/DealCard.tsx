import Link from "next/link";
import type { Deal } from "@/types/deal";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/50 hover:bg-white/[0.07]">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-3">
        <img
          src={deal.image}
          alt={deal.title}
          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-black/75 px-3 py-1 text-xs font-black text-white backdrop-blur">
          {deal.platform}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex w-fit rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-bold text-[#7CF4B8]">
            {deal.badge}
          </span>

          <span className="text-xs font-semibold text-white/40">
            {deal.category}
          </span>
        </div>

        <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
          {deal.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/65">
          {deal.outcome}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {deal.bestFor.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold text-white/60"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              Price
            </p>

            <p className="mt-1 text-sm font-black text-white">
              {deal.priceNote}
            </p>
          </div>

          <Link
            href={deal.affiliateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}