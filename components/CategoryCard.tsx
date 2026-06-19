import Link from "next/link";
import type { Category } from "@/types/deal";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group block h-full rounded-lg border border-black/10 bg-white p-6 text-black shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f45a1d] hover:shadow-xl"
    >
      <p className="mb-4 inline-flex rounded-md border border-[#f45a1d]/30 bg-[#f45a1d]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#b9360b]">
        {category.label}
      </p>

      <h3 className="text-2xl font-black leading-tight text-black">
        {category.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-700">
        {category.description}
      </p>

      <div className="mt-6 inline-flex items-center rounded-md border border-black/10 bg-black px-4 py-2 text-sm font-black text-white transition duration-200 group-hover:border-[#f45a1d] group-hover:bg-[#f45a1d]">
        Explore Category →
      </div>
    </Link>
  );
}
