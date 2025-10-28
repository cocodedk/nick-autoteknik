# Ændringer til kravspec (fotos)

* **Kilde & rettigheder:** I udvælger 10–20 egne billeder fra Facebook-siden (kun materiale I har rettigheder til), downloader dem manuelt og leverer dem til mig (fx som ZIP).
* **Placering i projekt:** `public/gallery/` (ingen eksterne kald i runtime).
* **Navngivning:** `01-lift.png`, `02-bremser.png`, … (kebab-case, ingen mellemrum, danske tegn undgås i filnavn).
* **Alt-tekster:** Leveres i en lille YAML/JSON (se eksempel nedenfor) for tilgængelighed (WCAG).
* **Optimering:** Komprimeres ved import (build step) og leveres i moderne formater (WebP/AVIF) + lazy-loading.
* **Cache/Performance:** Ingen runtime-cache nødvendig; alt er statisk.

# Mappestruktur (relevant udsnit)

```
/public
  /gallery
    01-lift.png
    02-bremser.png
    03-dæk.png
    ...
/src
  /components
    Gallery.tsx
  /data
    gallery.da.json
pages/
  index.tsx   (Next.js single-page)
```

# Datafil til alt-tekster (eksempel: `/src/data/gallery.da.json`)

```json
[
  { "src": "/gallery/01-lift.png", "alt": "Bil på lift til service i værkstedet" },
  { "src": "/gallery/02-bremser.png", "alt": "Udskiftning af bremseskiver og klodser" },
  { "src": "/gallery/03-dæk.png", "alt": "Montering af nye dæk og afbalancering" }
]
```

# Gallery-komponent (Next.js + Tailwind, klar til udbygning)

```tsx
// src/components/Gallery.tsx
import Image from "next/image";
import items from "@/data/gallery.da.json";

export default function Gallery() {
  return (
    <section id="galleri" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold mb-6">Galleri</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
                className="object-cover"
                loading="lazy"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

# Build-optimering (ingen tredjeparts-API’er)

* **Next/Image** håndterer automatisk optimering/caching ved runtime på Vercel.
* Alternativt (andre hosts): brug en build-hook (fx `sharp`) til at generere WebP/AVIF:

  * Script kører ved `postinstall`/`build`, konverterer JPG/PNG → WebP/AVIF og opdaterer JSON hvis ønsket.
* **Lazy-loading + responsive sizes** allerede i komponenten.

# Google Map & anmeldelser (uændret)

* **Map embed:** `iframe` via Google Maps Embed API (kun klient-side nøgle i ENV).
* **CTA “Læs anmeldelser”:** Link til jeres Google Business-side (eller midlertidigt FB-anmeldelser), åbner i ny fane.

# Acceptkriterier for billeder

* Alle billeder loader uden netværkskald til facebook.com.
* Lighthouse Performance ≥ 90 på mobil (4G) for gallerisektionen.
* Alt-tekster på hvert billede; tastaturnavigation virker.
* Billedstørrelser ≤ 200–300 KB pr. visningsvariant (serveret som WebP/AVIF hvor muligt).
