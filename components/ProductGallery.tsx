"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Deal } from "@/types/deal";

type ProductGalleryProps = {
  deal: Deal;
};

export default function ProductGallery({ deal }: ProductGalleryProps) {
  const images = useMemo(() => {
    const gallery = deal.sliderImages?.filter(Boolean) ?? [];
    return gallery.length > 0 ? gallery : [deal.image];
  }, [deal.image, deal.sliderImages]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  if (!activeImage) {
    return null;
  }

  return (
    <section className="border-t border-white/10 bg-[#050507] px-5 py-14 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] sm:text-sm">
              Product images
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              See what is included before you open the offer.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/60">
            Use the arrows or thumbnails to move through the available product visuals.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl shadow-black/40">
            <div className="flex min-h-[360px] items-center justify-center rounded-[1.5rem] bg-[#F5F5F2] sm:min-h-[520px]">
              <img
                src={activeImage}
                alt={`${deal.title} product image ${activeIndex + 1}`}
                className="max-h-[640px] w-full object-contain"
              />
            </div>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous product image"
                  className="absolute left-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-black/80 text-white shadow-xl transition hover:bg-[#10B981] hover:text-black"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next product image"
                  className="absolute right-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-black/80 text-white shadow-xl transition hover:bg-[#10B981] hover:text-black"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-black text-white">Gallery</p>
              <p className="text-xs font-bold text-white/45">
                {activeIndex + 1} / {images.length}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
              {images.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show product image ${index + 1}`}
                    className={`overflow-hidden rounded-2xl border bg-white p-1 transition ${
                      isActive
                        ? "border-[#10B981] ring-2 ring-[#10B981]/40"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <span className="flex aspect-square items-center justify-center rounded-xl bg-[#F5F5F2]">
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
