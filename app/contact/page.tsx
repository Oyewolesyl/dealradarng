import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero label="Deal Radar NG" title="Contact" description="Reach Deal Radar NG through email, Instagram, or Facebook." />
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-xl sm:p-8">
          <h2 className="text-3xl font-black sm:text-4xl">Contact</h2>
          <p className="mt-5 leading-8 text-black/65">Reach Deal Radar NG through email, Instagram, or Facebook.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3"><a href="mailto:support@dealradarng.com" className="rounded-2xl bg-black px-5 py-4 text-center text-sm font-black text-white">Email</a><a href="https://www.instagram.com/dealradarng_/" target="_blank" rel="noreferrer" className="rounded-2xl bg-black px-5 py-4 text-center text-sm font-black text-white">Instagram</a><a href="https://web.facebook.com/profile.php?id=61589743959335" target="_blank" rel="noreferrer" className="rounded-2xl bg-black px-5 py-4 text-center text-sm font-black text-white">Facebook</a></div>
        </div>
      </section>
    </main>
  );
}
