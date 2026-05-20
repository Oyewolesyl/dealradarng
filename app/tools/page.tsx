import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero label="Deal Radar NG" title="Tools" description="Find useful tools for work, business, content, design, and productivity." />
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-3xl font-black sm:text-4xl">Tools</h2>
          <p className="mt-5 leading-8 text-black/65">Find useful tools for work, business, content, design, and productivity.</p>

        </div>
      </section>
    </main>
  );
}
