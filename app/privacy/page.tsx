import PageHero from "@/components/PageHero";

const sections = [
  ["Information we may collect", "Basic analytics, page visits, clicks on affiliate links and contact messages sent to Deal Radar NG."],
  ["How information is used", "To improve content, understand which products visitors engage with and respond to support or partnership messages."],
  ["Affiliate links", "Some outbound links may be affiliate links. Deal Radar NG may earn a commission when visitors purchase through those links."],
  ["Your choices", "Visitors can avoid submitting contact information and can manage cookies or tracking preferences in their browser."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero label="Deal Radar NG" title="Privacy Policy" description="How Deal Radar NG handles visitor data, affiliate links and basic tracking." />
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="space-y-4">
          {sections.map(([title, body]) => (
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
