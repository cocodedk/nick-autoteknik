import React from "react";
import Image from "next/image";
import { HeroCTA } from "./HeroCTA";
import { HeroUSP } from "./HeroUSP";
import type { ContentData } from "@/components/shared/types";

interface HeroProps {
  content: ContentData;
}

export function Hero({ content }: HeroProps) {
  const { business, hero } = content;

  return (
    <section className="relative bg-white pt-3 md:pt-6 pb-8 md:pb-12 overflow-hidden">
      {/* Diagonal red accent removed */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-2 bg-white">
            <Image
              src="/logo/nick-autoteknik-logo.png"
              alt={`${business.name} logo`}
              width={160}
              height={48}
              priority
            />
          </div>
          <span
            className="block h-1 w-full bg-brand-red mt-2"
            aria-hidden="true"
          />
          {/* Removed main heading per request */}
          <p className="text-xl md:text-2xl text-gray-900 font-semibold mb-2">
            {hero.tagline}
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            {hero.subtitle}
          </p>

          <div className="mb-6">
            <HeroUSP usps={hero.usps} />
          </div>

          <HeroCTA
            phone={business.phone}
            phoneFormatted={business.phoneFormatted}
            address={business.address}
          />

          <div className="mt-6 text-sm text-gray-700 text-center md:text-left">
            <p>
              <strong className="text-black">Åbningstider i dag:</strong> {business.hours.monday}
            </p>
            <p className="mt-1">{business.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
