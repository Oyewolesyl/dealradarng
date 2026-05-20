import Link from "next/link";
import { Deal } from "@/types/deal";

type Props = {
  deal: Deal;
};

export default function DealCard({ deal }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition duration-300 hover:border-[#10B981]/40 hover:bg-[#151515]">

      <div className="relative aspect-[16/10] overflow-hidden">

        <img
          src={deal.image}
          alt={deal.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-6">

        <div className="inline-flex items-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#10B981]">
          {deal.category}
        </div>

        <h3 className="mt-4 text-xl font-black leading-tight text-white">
          {deal.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/75">
          {deal.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <div className="flex flex-col">

            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Deal Price
            </span>

            <span className="mt-1 text-2xl font-black text-white">
              {deal.price}
            </span>

          </div>

          <Link
            href={deal.href || "#"}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
          >
            View Deal
          </Link>

        </div>

      </div>

    </div>
  );
}