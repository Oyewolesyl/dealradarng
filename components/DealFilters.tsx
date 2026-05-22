"use client";

import { useMemo, useState } from "react";
import DealCard from "@/components/DealCard";
import type { Deal } from "@/types/deal";

export default function DealFilters({
  deals,
  categories,
  platforms,
}: {
  deals: Deal[];
  categories: string[];
  platforms: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");

  const filteredDeals = useMemo(() => {
    const search = query.trim().toLowerCase();

    return deals.filter((deal) => {
      const matchesSearch =
        !search ||
        deal.title.toLowerCase().includes(search) ||
        deal.description.toLowerCase().includes(search) ||
        deal.outcome.toLowerCase().includes(search) ||
        deal.category.toLowerCase().includes(search) ||
        deal.bestFor.join(" ").toLowerCase().includes(search);

      const matchesCategory = category === "All" || deal.category === category;
      const matchesPlatform = platform === "All" || deal.platform === platform;

      return matchesSearch && matchesCategory && matchesPlatform;
    });
  }, [deals, query, category, platform]);

  return (
    <div>
      <div className="mb-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search ghostwriting, relocation, freelancing..."
            className="w-full rounded-full border border-white/10 bg-black px-5 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-[#10B981]"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-full border border-white/10 bg-black px-5 py-3 text-sm font-semibold text-white outline-none transition focus:border-[#10B981]"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className="w-full rounded-full border border-white/10 bg-black px-5 py-3 text-sm font-semibold text-white outline-none transition focus:border-[#10B981]"
          >
            {platforms.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-4 text-sm font-semibold text-white/55">
          Showing {filteredDeals.length} of {deals.length} opportunities.
        </p>
      </div>

      {filteredDeals.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 text-center">
          <h2 className="text-2xl font-black text-white">No matching opportunities found.</h2>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Try another keyword, category, or platform.
          </p>
        </div>
      )}
    </div>
  );
}
