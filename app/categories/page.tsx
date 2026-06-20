import CategoryCard from "@/components/CategoryCard";
import { categories, deals } from "@/data/deals";

export default function CategoriesPage() {
  return (
    <main className="radar-page">
      <section className="radar-hero px-5 py-14 sm:px-6 lg:py-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] theme-text sm:text-6xl">
            Shop by the outcome you want.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 theme-muted">
            Each category groups products by buyer intent so visitors can compare with less noise.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="brand-band surface p-6 sm:p-8">
            <h2 className="text-4xl font-black leading-tight theme-text sm:text-5xl">
              {deals.length} products across {categories.length} focused paths.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const count = deals.filter((deal) => deal.category === category.name).length;
                return (
                  <div key={category.name} className="surface-tight p-5">
                    <p className="text-4xl font-black text-[#f45a1d]">{count}</p>
                    <p className="mt-2 text-sm font-black theme-text">{category.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
