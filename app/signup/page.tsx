import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">Create Account</p>
        <h1 className="text-4xl font-black sm:text-5xl">Sign Up</h1>
        <p className="mt-4 leading-7 text-white/60">Frontend-only sign up page. No backend or authentication is connected yet.</p>
        <div className="mt-8 space-y-4">
          <input type="text" placeholder="Full name" className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none" />
          <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none" />
          <input type="password" placeholder="Password" className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none" />
          <Link href="/deals" className="flex w-full items-center justify-center rounded-2xl bg-[#10B981] px-5 py-4 font-black text-black transition hover:bg-white">Create Account</Link>
        </div>
        <p className="mt-6 text-center text-sm text-white/50">Already have an account? <Link href="/signin" className="text-[#10B981]">Sign In</Link></p>
      </div>
    </main>
  );
}
