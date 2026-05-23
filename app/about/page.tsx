import PageHero from "@/components/PageHero";

const pillars = [
  "Curate affiliate offers from trusted marketplaces like Expertnaire and Selar.",
  "Explain each product by outcome, audience, benefits, cautions and platform.",
  "Help visitors compare digital skills, remote work, relocation and business-growth resources.",
  "Send buyers to the official product page so they can make the final purchase decision safely.",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero
        label="Deal Radar NG"
        title="About Deal Radar NG"
        description="Deal Radar NG is an affiliate discovery platform for useful digital products, remote-work resources and online business opportunities."
      />

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-3xl font-black sm:text-4xl">What this platform does</h2>
          <p className="mt-5 leading-8 text-black/65">
            Deal Radar NG organizes digital products by the problem they help solve: learning affiliate marketing, starting freelancing, building digital products, exploring relocation resources, improving marketing skills and developing professional income skills.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar} className="rounded-2xl border border-black/10 bg-[#F5F5F2] p-5 text-sm font-semibold leading-6 text-black/70">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
