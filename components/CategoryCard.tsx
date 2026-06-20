import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/types/deal";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={category.href} className="surface-tight group block h-full p-5 transition hover:border-[#f45a1d]">
      <h3 className="text-2xl font-black leading-tight theme-text">{category.name}</h3>
      <p className="mt-3 text-sm leading-6 theme-muted">{category.description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#f45a1d]">
        View products
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
