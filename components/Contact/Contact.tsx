import React from "react";
import { GoogleMap } from "./GoogleMap";
import { ContactInfo } from "./ContactInfo";
import type { BusinessInfo } from "@/components/shared/types";

interface ContactProps {
  business: BusinessInfo;
}

export function Contact({ business }: ContactProps) {
  return (
    <section id="kontakt" className="py-8 md:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 text-center">
          Kontakt & Lokation
        </h2>
        <div className="w-full h-1 bg-brand-red mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <ContactInfo business={business} />
          </div>
          <div className="order-1 lg:order-2 h-[400px] lg:h-auto border-2 border-black rounded overflow-hidden">
            <GoogleMap address={business.address} />
          </div>
        </div>
      </div>
    </section>
  );
}
