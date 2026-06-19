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
    <section className="radar-hero px-5 py-14 sm:px-6 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {showLogo ? (
          <div className="brand-logo-mark mb-6">
            <BrandLogo priority className="object-contain object-center" />
          </div>
        ) : (
          <p className="tag px-3 py-1 text-xs">{label}</p>
        )}
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] theme-text sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 theme-muted">{description}</p>
      </div>
    </section>
  );
}
