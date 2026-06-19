"use client";

import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useMemo, useState } from "react";
import type { Deal } from "@/types/deal";

export default function ProductGallery({ deal }: { deal: Deal }) {
  const images = useMemo(() => {
    const gallery = deal.sliderImages?.filter(Boolean) ?? [];
    return gallery.length ? gallery : [deal.image];
  }, [deal.image, deal.sliderImages]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  const previous = () => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () => setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <section className="px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tag px-3 py-1 text-xs">
              <Images size={15} />
              Product visuals
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight theme-text sm:text-5xl">
              Inspect the offer before checkout.
            </h2>
          </div>
          <p className="max-w-md text-sm font-bold leading-6 theme-muted">
            Browse the supporting visuals, slides and proof assets available for this product.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="surface relative overflow-hidden bg-white p-3">
            <div className="product-media flex min-h-[360px] items-center justify-center rounded-[18px] sm:min-h-[520px]">
              <img src={activeImage} alt={`${deal.title} image ${activeIndex + 1}`} className="max-h-[650px] w-full object-contain" />
            </div>
            {images.length > 1 ? (
              <>
                <button type="button" onClick={previous} aria-label="Previous product image" className="icon-button absolute left-5 top-1/2 -translate-y-1/2 bg-black text-white">
                  <ChevronLeft size={22} />
                </button>
                <button type="button" onClick={next} aria-label="Next product image" className="icon-button absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white">
                  <ChevronRight size={22} />
                </button>
              </>
            ) : null}
          </div>

          <div className="surface p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-black theme-text">Gallery</p>
              <p className="text-xs font-bold faint">{activeIndex + 1} / {images.length}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show product image ${index + 1}`}
                  className={`overflow-hidden rounded-2xl border bg-white p-1 transition ${
                    index === activeIndex ? "border-[#f45a1d] ring-2 ring-[#f45a1d]/30" : "border-black/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="product-media flex aspect-square items-center justify-center rounded-xl">
                    <img src={image} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
