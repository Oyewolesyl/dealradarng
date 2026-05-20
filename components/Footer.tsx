import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black text-white">Deal Radar NG</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">Discover software, digital products, tools, and online deals from one modern platform built for modern internet users.</p>
          <div className="mt-6 space-y-2 text-sm text-white/65">
            <p>support@dealradarng.com</p>
            <p>dealradarng.com</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/dealradarng_/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">Instagram</a>
            <a href="https://web.facebook.com/profile.php?id=61589743959335" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">Facebook</a>
            <a href="mailto:support@dealradarng.com" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">Email</a>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Explore</h3>
          <div className="space-y-3 text-sm text-white/55">
            <Link href="/deals" className="block hover:text-white">Deals</Link>
            <Link href="/software" className="block hover:text-white">Software</Link>
            <Link href="/tools" className="block hover:text-white">Tools</Link>
            <Link href="/categories" className="block hover:text-white">Categories</Link>
            <Link href="/reviews" className="block hover:text-white">Reviews</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Company</h3>
          <div className="space-y-3 text-sm text-white/55">
            <Link href="/about" className="block hover:text-white">About</Link>
            <Link href="/contact" className="block hover:text-white">Contact</Link>
            <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 sm:px-6">
        <p className="text-sm text-white/40">© 2026 Deal Radar NG. All rights reserved.</p>
      </div>
    </footer>
  );
}
