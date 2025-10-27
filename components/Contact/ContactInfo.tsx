import React from "react";
import { PhoneButton } from "@/components/shared/PhoneButton";
import type { BusinessInfo } from "@/components/shared/types";

interface ContactInfoProps {
  business: BusinessInfo;
}

export function ContactInfo({ business }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-black mb-4">
          Kontakt os
        </h3>
        <div className="space-y-3 text-gray-900">
          <div className="flex items-start">
            <span className="mr-2 text-brand-red">📍</span>
            <div>
              <strong className="text-black">Adresse:</strong><br />
              {business.address}
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-brand-red">📞</span>
            <div>
              <strong className="text-black">Telefon:</strong><br />
              <a href={`tel:${business.phoneFormatted}`} className="hover:text-brand-red transition-colors">
                {business.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-brand-red">✉️</span>
            <div>
              <strong className="text-black">E-mail:</strong><br />
              <a href={`mailto:${business.email}`} className="hover:text-brand-red transition-colors">
                {business.email}
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-brand-red">🏢</span>
            <div>
              <strong className="text-black">CVR:</strong> {business.cvr}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-black mb-2">
          Åbningstider
        </h4>
        <div className="space-y-1 text-gray-900">
          <div className="flex justify-between py-1 px-2 bg-gray-50 rounded">
            <span>Mandag:</span>
            <span className="font-semibold">{business.hours.monday}</span>
          </div>
          <div className="flex justify-between py-1 px-2">
            <span>Tirsdag:</span>
            <span className="font-semibold">{business.hours.tuesday}</span>
          </div>
          <div className="flex justify-between py-1 px-2 bg-gray-50 rounded">
            <span>Onsdag:</span>
            <span className="font-semibold">{business.hours.wednesday}</span>
          </div>
          <div className="flex justify-between py-1 px-2">
            <span>Torsdag:</span>
            <span className="font-semibold">{business.hours.thursday}</span>
          </div>
          <div className="flex justify-between py-1 px-2 bg-gray-50 rounded">
            <span>Fredag:</span>
            <span className="font-semibold">{business.hours.friday}</span>
          </div>
          <div className="flex justify-between py-1 px-2">
            <span>Lørdag:</span>
            <span className="font-semibold">{business.hours.saturday}</span>
          </div>
          <div className="flex justify-between py-1 px-2 bg-gray-50 rounded">
            <span>Søndag:</span>
            <span className="font-semibold">{business.hours.sunday}</span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <PhoneButton
          phone={business.phone}
          phoneFormatted={business.phoneFormatted}
          variant="call"
          className="w-full bg-brand-green text-white hover:bg-green-700 font-bold shadow-md hover:shadow-lg"
        >
          📞 Ring til os nu
        </PhoneButton>
      </div>
    </div>
  );
}
