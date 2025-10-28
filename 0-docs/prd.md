# Mini-research (kilder i fodnoter)

* **Virksomhed:** “Nick Autoteknik”, autoværksted i Rødovre. Facebook-siden angiver adressen **Nyholms Allé 21, port 3, 2610 Rødovre** og beskriver service/reparation af alle bilmærker. ([Facebook][1])
* **CVR & stamdata:** CVR **41401869**, virksomhedsform ENK, start 15/06/2020, adresse Nyholms Alle 21, 2610 Rødovre. Kontakt-email: **[info@nick-autoteknik.dk](mailto:info@nick-autoteknik.dk)**. ([Proff][2])
* **Navn i registre:** Omtales også som “Nick Autoteknik v/Abbas Soltani”. ([Kompass][3])
* **Fotos:** Findes på Facebook-siden (brugerskabt indhold). ([Facebook][1])
* **Kort/placering:** Google Maps kan embeddes på adressen (kræver API-nøgle). Direkte visning via “Place Search”/“Embed API” på adressen. (Selve Maps-siden kræver JS, men integrationen er standard). ([Google Maps][4])

> NB om billeder: Vi kan hente fotos fra jeres Facebook-side via Facebook Graph API (med Page-adgangstoken) **eller** manuelt downloade egne billeder, men vi skal holde os til Facebooks vilkår og kun bruge billeder, I har rettigheder til.

---

# Kravspecifikation (DANSK)

## 1) Mål & omfang

* **Formål:** En enkel “visitkort”-forside, der hurtigt fortæller hvem I er, hvor I er, hvordan man kontakter jer, samt viser udvalgte billeder og link til anmeldelser.
* **Sprog:** Dansk (forberedt til flere sprog senere).
* **Udvidelighed:** Arkitektur og mappe-struktur forberedes til fremtidige undersider (services, priser, blog).

## 2) Teknisk stack

* **Framework:** **Next.js (React)** for god SEO på én side nu og nem udbygning senere.
* **Byg & tooling:** TypeScript, Vite/Next build, ESLint, Prettier.
* **Styling/UI:** Tailwind CSS + Headless UI (hurtig, let og responsiv).
* **Kort:** Google Maps **Embed API** (evt. med **Places API** til Place ID).
* **Analyser:** Valgfrit — Google Analytics v4 (cookie-banner hvis aktiveres).
* **Hosting:** Vercel/Netlify eller eksisterende webhotel (statisk + edge).

## 3) Informationsarkitektur (single page sektioner)

1. **Hero/top:**

   * Logo/navn "Nick Autoteknik"
   * Primær CTA: **Ring nu** (tel-link) og **Find vej** (Maps-link)
   * Åbningstider (i dag) + hurtige USP-piller (fx "Service efter fabrikantens forskrifter", "Alle bilmærker", "Hurtig tid")
2. **Services (kort liste):** Inspektion/Service, Bremser, Dæk/fælge, Diagnose, AC, Synsklargøring m.v.
3. **Galleri:** 10–20 billeder **fra `public/gallery/` (statiske filer, ingen API-kald)** med lazy-loading og accessible alt-tekster.
4. **Anmeldelser/Trust:**

   * Knap: "Læs Google-anmeldelser" (ekstern link til Google Maps-profil, når Place ID er bekræftet)
   * Sekundært: "Se Facebook-anmeldelser" (link til FB-siden)
5. **Kort & kontakt:**

   * Embedded Google Map pin på **Nyholms Allé 21, port 3, 2610 Rødovre**
   * Adresse, telefon, e-mail (**[info@nick-autoteknik.dk](mailto:info@nick-autoteknik.dk)**), åbningstider
   * Lille kontaktformular (navn, tlf, emne, besked) → mailto eller form-service (Formspree/Resend)
6. **Footer:** CVR **41401869**, simple links (Privatliv, Cookies), copyright.

## 4) Indholdskrav (initialt)

* **Firmanavn:** Nick Autoteknik. ([Facebook][1])
* **Adresse:** Nyholms Allé 21, **port 3**, 2610 Rødovre. ([Facebook][1])
* **CVR:** 41401869. ([Proff][2])
* **E-mail:** [info@nick-autoteknik.dk](mailto:info@nick-autoteknik.dk). ([ownr][5])
* **Telefon:** (oplyses/afklares af jer — ikke entydigt i offentlige kilder).
* **Åbningstider:** (leveres af jer for korrekthed).
* **Billedsamling:** 10–20 fotos fra Facebook-siden (værkstedsbilleder, projekter, før/efter). ([Facebook][1])
* **Anmeldelseslinks:**

  * **Google:** Vi finder/validerer Place ID og direkte “reviews”-link i Maps (kræver, at I har/kræver ejerprofil). ([Google Maps][4])
  * **Facebook:** Link til siden med anmeldelser/besøgsindtryk. ([Facebook][1])

## 5) Integration af Facebook-fotos (krav/tilgang)

* **Kilde & rettigheder:** I udvælger 10–20 egne billeder fra Facebook-siden, downloader dem manuelt og leverer som ZIP-fil. Kun materiale I har rettigheder til.
* **Placering i projekt:** `public/gallery/` (statiske filer, ingen runtime-API-kald).
* **Navngivning:** Kebab-case uden mellemrum eller danske tegn (fx `01-lift.jpg`, `02-bremser.jpg`, `03-dæk.jpg`).
* **Alt-tekster & metadata:** Leveres i JSON-fil `/src/data/gallery.da.json` med struktur:
  ```json
  [
    { "src": "/gallery/01-lift.jpg", "alt": "Bil på lift til service i værkstedet" },
    { "src": "/gallery/02-bremser.jpg", "alt": "Udskiftning af bremseskiver og klodser" }
  ]
  ```
* **Optimering:** Next/Image håndterer automatisk compression (WebP/AVIF) og lazy-loading ved runtime på Vercel. For andre hosts kan build-script (fx `sharp`) generere moderne formater.
* **Performance:** Alle billeder loader uden netværkskald til facebook.com; Lighthouse Performance ≥ 90 på mobil (4G).

## 6) Kort & anmeldelser (krav/tilgang)

* **Google Maps Embed:**

  * `https://www.google.com/maps/embed/v1/place?q=Nyholms+All%C3%A9+21%2C+2610+R%C3%B8dovre&key=…` (ENV: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`). ([Google Maps][4])
* **Google Reviews-link:**

  * Når Place ID er bekræftet, vis knap “Læs anmeldelser” der åbner Google-profilen i ny fane.
  * (Hvis I ikke har Google Business-profil, anbefales oprettelse/claiming — ellers midlertidigt link til Facebook-anmeldelser).

## 7) SEO & deling

* Titles/Meta (Dansk), Open Graph/Twitter tags.
* **Structured data**: `AutomotiveBusiness`/`AutoRepair` (schema.org) inkl. navn, adresse, telefon, åbningstider, geo.
* Human-læselige URL-fragmenter (ankerlinks til sektioner).
* Sitemap (selv om single page) + robots.txt (ingen indekseringsblokering).

## 8) Ydelse & tilgængelighed

* Lighthouse 90+ mål: billedkomprimering (modern formats), lazy-loading, preconnect.
* WCAG 2.1 AA: farvekontrast, fokus-ringe, tastaturnavigation, alt-tekster (også for FB-fotos).
* Cookie-banner kun hvis Analytics/marketing cookies er slået til.

## 9) Sikkerhed & drift

* Ingen server-side PII-lagring (kontaktformular sendes via e-mail/provider).
* Rate-limit på API-kald (Facebook).
* .env håndtering (API-nøgler) + secret rotation.
* Backup/rollback via hosting (Vercel/Netlify builds).

## 10) Leverancer

* **Kildekode:** Next.js + Tailwind projekt (TypeScript).
* **Miljøer:** Preview (staging) + Production.
* **CMS (valgfrit, senere):** Let headless (fx Contentlayer/Hygraph) for tekst/billeder.
* **Dokumentation:** README med opsætning, env-nøgler, deploy.

## 11) Data/inputs vi har brug for fra jer

* Bekræft **telefonnummer** og **åbningstider**.
* Bekræft **e-mail** ([info@nick-autoteknik.dk](mailto:info@nick-autoteknik.dk)) eller giv den korrekte. ([ownr][5])
* Admin-adgang til Facebook-siden **eller** billedpakke (zip) med fotos I må bruge. ([Facebook][1])
* Google Maps API-nøgle (jeg kan generere anmodningsliste over nødvendige API’er). ([Google Maps][4])
* (Hvis Google Business-profil findes): link/Place ID — ellers laver vi en hurtig identifikation og sender jer linket til godkendelse.

## 12) Succes-kriterier

* Single-page loader hurtigt (<2s på 4G), er mobil-optimeret, viser tydeligt **Ring nu**, **Find vej**, **Se anmeldelser**, og har et visuelt, troværdigt galleri fra Facebook.
* Brugeren kan finde adresse og kontakt på <5 sek.
* Grund-SEO på plads (brandnavn + by ranker), og Google-kort vises uden fejl.

---


[1]: https://www.facebook.com/people/Nick-Autoteknik/100032983761989/?utm_source=chatgpt.com "Nick Autoteknik | Rødovre - Facebook"
[2]: https://www.proff.dk/firma/nick-autoteknik/r%C3%B8dovre/biler-og-k%C3%B8ret%C3%B8j/0ONDVXI0CUX?utm_source=chatgpt.com "Nick Autoteknik - CVR-nr 41401869 - Rødovre - Se Regnskaber ... - Proff"
[3]: https://gb.kompass.com/c/nick-autoteknik-v-abbas-soltani/dkk416817/?utm_source=chatgpt.com "Nick Autoteknik V/abbas Soltani - Rødovre 2610 (Rødovre ... - Kompass"
[4]: https://maps.google.com/?utm_source=chatgpt.com "Google Maps"
[5]: https://ownr.dk/companies/public-profile/41401869?utm_source=chatgpt.com "Nick Autoteknik - Se overskud, ejere, tidslinje og regnskaber - ownr®"
