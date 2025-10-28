# Nick Autoteknik - Website

Professionel hjemmeside for Nick Autoteknik autoværksted i Rødovre.

## Teknologi

- **Next.js 16** med App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Mobile-first** responsive design
- **SEO-optimeret** med structured data

## Opsætning

### 1. Installation

```bash
npm install
```

### 2. Miljøvariabler

Kopier `.env.example` til `.env.local`:

```bash
cp .env.example .env.local
```

Tilføj din Google Maps API-nøgle i `.env.local` (valgfrit):

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=din_api_nøgle_her
```

**Google Maps API:**
- Gå til [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
- Aktiver "Maps Embed API"
- Opret en API-nøgle

Hvis du ikke angiver en nøgle, bruger siden automatisk en simpel Google Maps iframe-embed (ingen nøgle krævet) for at vise kortet ved adressen.

For at vise KUN virksomheden (og ikke mange nærliggende værksteder), kan du angive en Google **Place ID** eller en numerisk **CID**:

```
NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID=PLACE_ID_HER

# Alternativ uden API-nøgle (anbefalet hvis du ikke vil bruge nøgle):
NEXT_PUBLIC_GOOGLE_MAPS_CID=NUMERISK_CID_HER
```

Når `NEXT_PUBLIC_GOOGLE_MAPS_CID` er sat, bruges et simpelt Google Maps embed, der låser på dén virksomhed — helt uden API-nøgle. Alternativt kan `NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID` bruges (især sammen med API-nøgle) for en tilsvarende præcis visning.

### 3. Billeder til galleri

Placer jeres værkstedsbilleder i `/public/gallery/`:
- Se `/public/gallery/README.md` for navnekonventioner
- Billederne optimeres automatisk af Next.js

### 4. Kør lokalt

```bash
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000)

## Build & eksport (statisk)

Projektet er konfigureret til statisk eksport (`next.config.ts` har `output: "export"`).

1) Byg og eksporter

```bash
npm run build   # kører 'next build && next export'
```

Det genererer en statisk mappe `out/` med hele websitet.

2) Forhåndsvis lokalt (valgfrit)

```bash
npx serve out          # simpel preview-server
# eller
npx http-server out
```

Åbn den viste URL (typisk http://localhost:3000 eller http://127.0.0.1:8080).

## Deployment (one.com / Nordicway – statisk hosting)

Da der ikke kører en Node-server på klassisk webhotel, uploades den statiske `out/` mappe:

- Byg: `npm run build` (giver `out/`)
- Upload indholdet af `out/` til webhotellets rod (fx `public_html/`)
- Sikr at domænet peger korrekt, og at SSL er aktivt: https://nick-autoteknik.dk

Bemærkninger ved statisk eksport
- Next/Image optimering er slået fra (`images.unoptimized: true`), så billeder serveres som statiske assets.
- Dynamiske delingsbilleder (OpenGraph/Twitter) via serverruter er fjernet. Vi bruger en statisk logo-fil i metadata. Du kan erstatte den med egne filer i `public/` og opdatere `app/layout.tsx`.
- Google Maps embed virker uden server – brug `NEXT_PUBLIC_GOOGLE_MAPS_CID` (uden API-nøgle) eller `NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID` (evt. med nøgle).

## Opdatering af indhold

### Forretningsinfo & services

Rediger `/data/content.da.json`:
- Åbningstider
- Services
- Kontaktinfo
- Footer-links

### Galleri metadata

Rediger `/data/gallery.da.json`:
- Billede-stier
- Alt-tekster (tilgængelighed)

## Deployment på Netlify

Hvis du hellere vil bruge Netlify, kan siden også deployes derfra som statisk site. Byg lokalt til `out/` og upload, eller lad Netlify køre build (`next build && next export`). `netlify.toml` kan bruges som udgangspunkt.

## Scripts

```bash
npm run dev      # Udvikling (localhost:3000)
npm run build    # Produktions-build + statisk eksport (out/)
npm run start    # Kun relevant for Node/SSR (ikke nødvendig ved statisk hosting)
npm run lint     # Kør ESLint
npm run format   # Formater kode med Prettier
```

## Struktur

```
/app                    # Next.js App Router
  layout.tsx           # Root layout med SEO
  page.tsx             # Hovedside
  globals.css          # Global styling
/components            # React komponenter (modulære)
  Hero/                # Hero sektion
  Services/            # Services liste
  Gallery/             # Billede-galleri
  Reviews/             # Anmeldelser
  Contact/             # Kontakt & kort
  Footer/              # Footer
  shared/              # Delte komponenter
/data                  # JSON datafiler
/public                # Statiske filer
  /gallery/            # Galleri-billeder
```

## Support

For spørgsmål eller problemer, kontakt udvikler.
