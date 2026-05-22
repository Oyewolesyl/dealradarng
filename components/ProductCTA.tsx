import Link from "next/link";
import type { Deal } from "@/types/deal";

export default function ProductCTA({ deal }: { deal: Deal }) {
  return (
    <div className="rounded-[2rem] border border-[#10B981]/25 bg-[#10B981]/10 p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7CF4B8]">
        Ready to continue?
      </p>

      <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
        View this opportunity on {deal.platform}
      </h2>

      <p className="mt-3 text-sm leading-6 text-white/70">
        You will leave Deal Radar NG and continue to the official product checkout page.
      </p>

      <Link
        href={deal.affiliateUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#10B981] px-6 py-3 text-sm font-black text-black transition hover:bg-white sm:w-fit"
      >
        Go to product page →
      </Link>
    </div>
  );
}
