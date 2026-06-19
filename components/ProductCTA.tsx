"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import type { Deal } from "@/types/deal";
import { API_BASE_URL } from "@/lib/api";

export default function ProductCTA({ deal }: { deal: Deal }) {
  async function trackClick() {
    try {
      await fetch(`${API_BASE_URL}/api/clicks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          dealSlug: deal.slug,
          dealTitle: deal.title,
          platform: deal.platform,
          affiliateUrl: deal.affiliateUrl,
        }),
      });
    } catch {
      // Tracking should never block the buyer from opening the offer.
    }
  }

  return (
    <div className="brand-band surface p-6 sm:p-7">
      <p className="tag px-3 py-1 text-[10px]">
        <ShieldCheck size={14} />
        Official checkout
      </p>
      <h2 className="mt-4 text-2xl font-black theme-text sm:text-3xl">
        Continue on {deal.platform}
      </h2>
      <p className="mt-3 text-sm leading-6 theme-muted">
        Deal Radar gives you context. The actual purchase happens on the official product page.
      </p>
      <Link
        href={deal.affiliateUrl}
        target="_blank"
        rel="noreferrer"
        onClick={trackClick}
        className="cta-primary mt-6 w-full px-6 py-4 text-sm sm:w-fit"
      >
        Open official product
        <ArrowUpRight size={18} />
      </Link>
    </div>
  );
}
