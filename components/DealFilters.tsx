"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    const platformParam = params.get("platform");
    const searchParam = params.get("q");

    if (categoryParam && categories.includes(categoryParam)) {
      setCategory(categoryParam);
    }

    if (platformParam && platforms.includes(platformParam)) {
      setPlatform(platformParam);
    }

    if (searchParam) {
      setQuery(searchParam);
    }
  }, [categories, platforms]);

  const filteredDeals = useMemo(() => {
    const search = query.trim().toLowerCase();

    return deals.filter((deal) => {
      const searchable = [
        deal.title,
        deal.description,
        deal.outcome,
        deal.category,
        deal.platform,
        deal.bestFor.join(" "),
      ].join(" ").toLowerCase();

      return (
        (!search || searchable.includes(search)) &&
        (category === "All" || deal.category === category) &&
        (platform === "All" || deal.platform === platform)
      );
    });
  }, [deals, query, category, platform]);

  return (
    <div>
      <div className="surface mb-8 p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#f45a1d]">
              <SlidersHorizontal size={14} />
              Filters
            </p>
            <h2 className="mt-4 text-3xl font-black theme-text">Find products faster.</h2>
          </div>
          <p className="text-sm font-bold theme-muted">
            {filteredDeals.length} of {deals.length} products visible
          </p>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1.2fr_0.75fr_0.75fr]">
          <label className="input-shell flex items-center gap-3 px-4 py-3">
            <Search size={18} className="text-[#f45a1d]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search ghostwriting, relocation, Upwork, KDP..."
              className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-neutral-500"
            />
          </label>

          <select value={category} onChange={(event) => setCategory(event.target.value)} className="input-shell px-4 py-3 text-sm font-bold outline-none">
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <select value={platform} onChange={(event) => setPlatform(event.target.value)} className="input-shell px-4 py-3 text-sm font-bold outline-none">
            {platforms.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredDeals.length ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      ) : (
        <div className="surface p-8 text-center">
          <h2 className="text-2xl font-black theme-text">No matching products yet.</h2>
          <p className="mt-3 text-sm theme-muted">Try another goal, category or platform.</p>
        </div>
      )}
    </div>
  );
}
