import React from "react";

interface HeroUSPProps {
  usps: string[];
}

export function HeroUSP({ usps }: HeroUSPProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {usps.map((usp, index) => (
        <span
          key={index}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-900 border-2 border-brand-red font-medium"
        >
          <span className="text-brand-red mr-1">✓</span> {usp}
        </span>
      ))}
    </div>
  );
}
