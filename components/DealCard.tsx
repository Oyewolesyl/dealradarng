import Image from "next/image";
import Link from "next/link";

type Deal = {
  id: number;
  title: string;
  description: string;
  badge: string;
  category: string;
  platform: string;
  priceNote: string;
  affiliateUrl: string;
  image: string;
};

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/50 hover:bg-white/[0.06]">

      <div className="relative aspect-[16/10] overflow-hidden">

        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <div className="mb-4 inline-flex w-fit rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-bold text-[#7CF4B8]">
          {deal.badge}
        </div>

        <h3 className="text-2xl font-black leading-tight text-white">
          {deal.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-white/65">
          {deal.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

          <div>

            <p className="text-xs text-white/40">
              {deal.platform}
            </p>

            <p className="text-sm font-bold text-white">
              {deal.priceNote}
            </p>

          </div>

          <Link
            href={deal.affiliateUrl}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition duration-200 hover:border-[#10B981] hover:bg-[#10B981] hover:text-black"
          >
            View Deal
          </Link>

        </div>

      </div>

    </article>
  );
}