# Nick Autoteknik - Website

Professionel hjemmeside for Nick Autoteknik autoværksted i Rødovre.

## Teknologi

- **Next.js 15** med App Router
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

### 1. Push til Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin din-repo-url
git push -u origin main
```

### 2. Forbind til Netlify

1. Log ind på [Netlify](https://app.netlify.com)
2. Klik "Add new site" → "Import existing project"
3. Vælg dit Git-repository
4. Build settings er allerede konfigureret i `netlify.toml`

### 3. Miljøvariabler

I Netlify dashboard:
- Site settings → Environment variables
- Tilføj: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## Scripts

```bash
npm run dev      # Udvikling (localhost:3000)
npm run build    # Produktions-build
npm run start    # Start produktions-server
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
