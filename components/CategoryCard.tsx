import Link from "next/link";
import type { Category } from "@/types/deal";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href="/categories" className="block rounded-[1.75rem] border border-black/10 bg-white p-5 text-black transition hover:-translate-y-1 hover:shadow-2xl sm:p-6">
      <div className="mb-5 h-11 w-11 rounded-2xl bg-black sm:h-12 sm:w-12" />
      <h3 className="text-xl font-black leading-tight">{category.name}</h3>
      <p className="mt-3 text-sm leading-6 text-black/60">{category.description}</p>
      <p className="mt-5 text-sm font-bold text-[#059669]">{category.count}</p>
    </Link>
  );
}
