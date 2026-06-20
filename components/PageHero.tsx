export default function PageHero({
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="radar-hero px-5 py-14 sm:px-6 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="max-w-5xl text-5xl font-black leading-[0.95] theme-text sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 theme-muted">{description}</p>
      </div>
    </section>
  );
}
