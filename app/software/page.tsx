import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero label="Deal Radar NG" title="Software" description="Browse software deals, SaaS tools, AI products, and digital platforms." />
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-3xl font-black sm:text-4xl">Software</h2>
          <p className="mt-5 leading-8 text-black/65">Browse software deals, SaaS tools, AI products, and digital platforms.</p>

        </div>
      </section>
    </main>
  );
}
