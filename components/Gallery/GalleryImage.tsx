import React from "react";
import Image from "next/image";
import type { GalleryItem } from "@/components/shared/types";

interface GalleryImageProps {
  item: GalleryItem;
}

export function GalleryImage({ item }: GalleryImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded bg-gray-200 border-2 border-black group">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  );
}
