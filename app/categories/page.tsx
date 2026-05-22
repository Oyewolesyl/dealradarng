import CategoryCard from "@/components/CategoryCard";
import { categories, deals } from "@/data/deals";

export default function CategoriesPage() {
  return (
    <main className="bg-[#F5F5F2] text-black">
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#059669] sm:text-sm">
            Categories
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Browse opportunities by goal, skill and outcome.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-black/60 sm:text-lg">
            Use categories to find the right programs for remote work, digital income, relocation, professional growth and marketing skills.
          </p>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
            Current inventory
          </p>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            {deals.length} selected products across {categories.length} useful categories.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const count = deals.filter((deal) => deal.category === category.name).length;

              return (
                <div
                  key={category.name}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-black text-[#10B981]">{count}</p>
                  <p className="mt-2 text-sm font-bold text-white">{category.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
