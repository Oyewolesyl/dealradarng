import type { Feature } from "@/types/deal";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="mb-5 h-10 w-10 rounded-2xl bg-[#10B981]" />
      <h3 className="text-xl font-black text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/60">{feature.description}</p>
    </div>
  );
}
