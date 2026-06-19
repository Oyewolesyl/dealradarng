import type { Feature } from "@/types/deal";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="surface-tight overflow-hidden">
      <div className="h-52 overflow-hidden">
        <img src={feature.image} alt={feature.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-black theme-text">{feature.title}</h3>
        <p className="mt-3 text-sm leading-7 theme-muted">{feature.description}</p>
      </div>
    </article>
  );
}
