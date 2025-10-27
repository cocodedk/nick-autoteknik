"use client";

import React from "react";

interface GoogleMapProps {
  address: string;
}

export function GoogleMap({ address }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID;
  const cid = process.env.NEXT_PUBLIC_GOOGLE_MAPS_CID;
  
  // Precedence: CID (most precise, no key) → Place ID (precise, best with key) → address fallback.
  const embedUrl = cid
    ? `https://www.google.com/maps?cid=${encodeURIComponent(cid)}&output=embed&z=16`
    : apiKey
      ? placeId
        ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${encodeURIComponent(placeId)}&zoom=16`
        : `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=16`
      : placeId
        ? `https://www.google.com/maps?q=place_id:${encodeURIComponent(placeId)}&output=embed&z=16`
        : `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=16`;

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: "0.5rem" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Nick Autoteknik location"
    />
  );
}
