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
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-5 py-14 text-white sm:px-6 sm:py-18 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(244,90,29,0.16),transparent_32%),linear-gradient(45deg,transparent_0,transparent_46%,rgba(255,255,255,0.06)_47%,transparent_48%)]" />

      <div className="relative mx-auto max-w-7xl">
        {showLogo ? (
          <div className="relative mb-6 h-14 w-44 overflow-visible sm:h-16 sm:w-56">
            <BrandLogo priority />
          </div>
        ) : (
          <p className="brand-pill mb-4 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em] sm:text-sm">
            {label}
          </p>
        )}

        <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-7xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
