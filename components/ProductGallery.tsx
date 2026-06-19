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
            <p className="brand-pill mb-3 inline-flex px-3 py-1 text-xs font-black uppercase tracking-[0.22em] sm:text-sm">
              Product visuals
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Inspect the offer before you open checkout.
            </h2>
          </div>

          <p className="max-w-md text-sm font-semibold leading-6 text-white/60">
            Switch between product shots, testimonials and supporting visuals.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="brand-panel relative overflow-hidden bg-white p-3">
            <div className="flex min-h-[360px] items-center justify-center bg-[#f7faf7] sm:min-h-[520px]">
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
                  className="absolute left-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-black/10 bg-black/85 text-white shadow-xl transition hover:bg-[#f45a1d]"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next product image"
                  className="absolute right-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-black/10 bg-black/85 text-white shadow-xl transition hover:bg-[#f45a1d]"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            ) : null}
          </div>

          <div className="brand-card p-4">
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
                    className={`overflow-hidden rounded-md border bg-white p-1 transition ${
                      isActive
                        ? "border-[#f45a1d] ring-2 ring-[#f45a1d]/35"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <span className="flex aspect-square items-center justify-center bg-[#f7faf7]">
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
