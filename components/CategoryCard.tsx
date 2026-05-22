import Link from "next/link";
import type { Category } from "@/types/deal";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group block h-full rounded-[1.75rem] border border-black/10 bg-white p-6 text-black shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#10B981] hover:shadow-xl"
    >
      <p className="mb-4 inline-flex rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#047857]">
        {category.label}
      </p>

      <h3 className="text-2xl font-black leading-tight text-black">
        {category.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-700">
        {category.description}
      </p>

      <div className="mt-6 inline-flex items-center rounded-full border border-black/10 bg-black px-4 py-2 text-sm font-black text-white transition duration-200 group-hover:border-[#10B981] group-hover:bg-[#10B981] group-hover:text-black">
        Explore Category →
      </div>
    </Link>
  );
}