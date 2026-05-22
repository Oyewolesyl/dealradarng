import type { Feature } from "@/types/deal";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#10B981]/40 hover:bg-white/[0.06]">
      <div className="flex h-56 items-center justify-center overflow-hidden bg-white/5">
        <img
          src={feature.image}
          alt={feature.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black text-white">
          {feature.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/75">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
