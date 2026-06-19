import BrandLogo from "@/components/BrandLogo";

export default function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  const showLogo = label.toLowerCase().includes("deal radar");

  return (
    <section className="bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {showLogo ? (
          <div className="relative mb-6 h-16 w-44 overflow-hidden sm:h-20 sm:w-56">
            <BrandLogo priority />
          </div>
        ) : (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
            {label}
          </p>
        )}

        <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
