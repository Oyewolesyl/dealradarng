import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHero
        label="Contact"
        title="Contact Deal Radar NG"
        description="Questions about a listed product, partnership or correction can be sent directly to the Deal Radar NG support email."
      />

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          <a href="mailto:support@dealradarng.com" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#10B981]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">Email</p>
            <h2 className="mt-3 text-2xl font-black">support@dealradarng.com</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">Use this for product listing questions, affiliate partnership issues, corrections and general support.</p>
          </a>

          <a href="https://web.facebook.com/profile.php?id=61589743959335" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#10B981]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981]">Social</p>
            <h2 className="mt-3 text-2xl font-black">Deal Radar NG on Facebook</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">Follow updates, featured opportunities and new product drops.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
