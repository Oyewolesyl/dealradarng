import PageHero from "@/components/PageHero";

const terms = [
  ["Affiliate disclosure", "Deal Radar NG lists third-party products and may earn commissions from qualifying purchases made through affiliate links."],
  ["No guaranteed outcomes", "Products listed on this site are educational or informational resources. Income, job, scholarship, relocation or business outcomes are not guaranteed."],
  ["External product pages", "Payments, refunds, access and delivery are handled by the product vendor or marketplace, not directly by Deal Radar NG."],
  ["Use responsibly", "Visitors should read each official product page, verify claims and choose products that fit their goals and budget."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero label="Deal Radar NG" title="Terms of Service" description="Important terms for using Deal Radar NG and clicking third-party affiliate offers." />
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="space-y-4">
          {terms.map(([title, body]) => (
            <div key={title} className="rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-8 text-black/65">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
