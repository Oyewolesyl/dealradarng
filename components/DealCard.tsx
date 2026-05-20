import Link from "next/link";
import type { Deal } from "@/types/deal";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#10B981]/50 hover:bg-white/[0.07] sm:p-6">
      <div className="mb-5 inline-flex w-fit rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-bold text-[#7CF4B8]">{deal.badge}</div>
      <h3 className="text-2xl font-black leading-tight">{deal.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-white/60">{deal.description}</p>
      <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-xs text-white/40">{deal.platform}</p><p className="text-sm font-bold text-white">{deal.priceNote}</p></div>
        <Link href={deal.affiliateUrl} className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-bold text-black transition group-hover:bg-[#10B981]">View Deal</Link>
      </div>
    </article>
  );
}
