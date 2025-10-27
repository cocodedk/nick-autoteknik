import React from "react";
import { HeroCTA } from "./HeroCTA";
import { HeroUSP } from "./HeroUSP";
import type { ContentData } from "@/components/shared/types";

interface HeroProps {
  content: ContentData;
}

export function Hero({ content }: HeroProps) {
  const { business, hero } = content;

  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden">
      {/* Diagonal red accent stripe */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-5 transform rotate-12 translate-x-32 -translate-y-32" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            <span className="inline-block">{business.name}</span>
            <span className="block h-1 w-32 bg-brand-red mt-2 mx-auto md:mx-0"></span>
          </h1>
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
