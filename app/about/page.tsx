import { Compass, ExternalLink, Filter, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Discovery first",
    text: "Products are organized around what a buyer wants to achieve, not around random affiliate links.",
  },
  {
    icon: Filter,
    title: "Cleaner comparison",
    text: "Every product gets platform, price, outcome, fit and caution context before checkout.",
  },
  {
    icon: ExternalLink,
    title: "Official checkout",
    text: "Deal Radar does not pretend to be the merchant. It sends buyers to the official product page.",
  },
  {
    icon: ShieldCheck,
    title: "Expectation control",
    text: "The site avoids guaranteed-income language and keeps buyer notes visible.",
  },
];

export default function AboutPage() {
  return (
    <main className="radar-page">
      <section className="radar-hero px-5 py-14 sm:px-6 lg:py-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="tag px-3 py-1 text-xs">About the rebuild</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] theme-text sm:text-6xl">
            Deal Radar NG is a buyer engine for digital products.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 theme-muted">
            The platform helps Nigerians and Africans compare digital courses, remote work resources, relocation guides and professional skills before visiting the official marketplace page.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="surface p-6">
                <Icon size={26} className="text-[#f45a1d]" />
                <h2 className="mt-5 text-2xl font-black theme-text">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 theme-muted">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
