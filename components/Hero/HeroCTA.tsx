import React from "react";
import { PhoneButton } from "@/components/shared/PhoneButton";

interface HeroCTAProps {
  phone: string;
  phoneFormatted: string;
  address: string;
}

export function HeroCTA({ phone, phoneFormatted, address }: HeroCTAProps) {
  const cid = process.env.NEXT_PUBLIC_GOOGLE_MAPS_CID;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID;
  const mapsUrl = cid
    ? `https://www.google.com/maps?cid=${encodeURIComponent(cid)}`
    : placeId
    ? `https://www.google.com/maps/search/?api=1&query_place_id=${encodeURIComponent(placeId)}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
      <PhoneButton
        phone={phone}
        phoneFormatted={phoneFormatted}
        variant="whatsapp"
        className="bg-[#25D366] text-white hover:bg-green-600 font-semibold shadow-md hover:shadow-lg"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163a11.946 11.946 0 0 1-1.61-6.005C.134 5.364 5.498 0 12.057 0c3.2 0 6.2 1.245 8.477 3.523a11.86 11.86 0 0 1 3.523 8.413c-.003 6.56-5.367 11.924-11.927 11.924a11.95 11.95 0 0 1-6.007-1.615L.057 24zm6.597-3.807c1.742.995 3.037 1.591 5.3 1.591 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.877-9.893-5.455 0-9.886 4.43-9.889 9.885a9.82 9.82 0 0 0 1.526 5.18l-.999 3.648 3.05-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.756-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.388-1.475-.883-.788-1.48-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.203-.242-.582-.487-.502-.669-.511l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.212 3.074.149.198 2.095 3.2 5.078 4.486.71.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
        <span>WhatsApp</span>
      </PhoneButton>
    </div>
  );
}
