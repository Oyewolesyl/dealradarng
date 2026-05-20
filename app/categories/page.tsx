import CategoryCard from "@/components/CategoryCard";
import PageHero from "@/components/PageHero";
import { categories } from "@/data/deals";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2]">
      <PageHero label="Categories" title="Find deals by category." description="Browse digital products, tools, software, and services by use case." />
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <CategoryCard key={category.name} category={category} />)}</div>
      </section>
    </main>
  );
}
