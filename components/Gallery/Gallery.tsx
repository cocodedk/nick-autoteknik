import React from "react";
import { GalleryImage } from "./GalleryImage";
import type { GalleryItem } from "@/components/shared/types";

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section id="galleri" className="py-8 md:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 text-center">
          Galleri
        </h2>
        <div className="w-full h-1 bg-brand-red mb-8"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <GalleryImage key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
