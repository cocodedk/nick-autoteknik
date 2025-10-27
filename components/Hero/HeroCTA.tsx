import React from "react";
import { PhoneButton } from "@/components/shared/PhoneButton";

interface HeroCTAProps {
  phone: string;
  phoneFormatted: string;
  address: string;
}

export function HeroCTA({ phone, phoneFormatted, address }: HeroCTAProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
      <PhoneButton
        phone={phone}
        phoneFormatted={phoneFormatted}
        variant="call"
        className="bg-brand-green text-white hover:bg-green-700 font-semibold shadow-md hover:shadow-lg"
      >
        📞 Ring nu: {phone}
      </PhoneButton>
      <PhoneButton
        phone={phone}
        phoneFormatted={phoneFormatted}
        variant="sms"
        className="bg-white text-black border-2 border-black hover:bg-gray-50 font-semibold"
      >
        💬 Send SMS
      </PhoneButton>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-brand-red text-white hover:bg-red-700 shadow-md hover:shadow-lg transition-all"
      >
        📍 Find vej
      </a>
    </div>
  );
}
