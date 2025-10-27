<!-- 73d56ff9-75f5-482f-aa74-dbe27989d1cf 92fe96d0-e8cb-4f83-96f1-9ce9f4d529df -->
# Beautify Nick Autoteknik Website

## Design Vision

**Professional automotive aesthetic** with bold red accents, clean black text, crisp white backgrounds, and green success/CTA buttons. Think modern workshop meets racing - clean, confident, trustworthy.

## Color Palette

**Primary Colors:**

- **Red**: `#DC2626` (red-600) - Main brand color, accents, badges
- **Black**: `#000000` - Text, headers, footer
- **White**: `#FFFFFF` - Backgrounds, cards
- **Green**: `#16A34A` (green-600) - Primary CTAs, success states

**Supporting Colors:**

- Gray-50 `#F9FAFB` - Subtle backgrounds
- Gray-100 `#F3F4F6` - Card backgrounds
- Gray-900 `#111827` - Deep black for contrast
- Red-50 `#FEF2F2` - Light red backgrounds

## Component Updates

### 1. Tailwind Config

Update color system:

```typescript
colors: {
  brand: {
    red: '#DC2626',
    black: '#000000',
    white: '#FFFFFF',
    green: '#16A34A',
  }
}
```

### 2. Global Styles

- Better font stack: `'Inter', -apple-system, system-ui, sans-serif`
- Smooth transitions on interactive elements
- Focus states with red outline

### 3. Hero Section

**Current:** Blue gradient background, generic blue buttons

**New:**

- Clean white background with subtle diagonal red accent stripe
- Large bold black heading (font-weight: 800)
- Red underline on company name
- USP pills: white background, red border, red checkmarks
- Primary CTA (Phone): Green button with white text, bold
- Secondary CTA (SMS): White button with black text, black border
- Find vej: Red button with white text
- Mobile-first: Stack vertically on mobile, horizontal on desktop

### 4. Services Section

**Current:** Gray background, white cards

**New:**

- White background
- Cards with black border (2px), hover effect with red border
- Service icons (optional) in red
- Grid: 1-col mobile → 3-col desktop
- Section title: Black, bold, red underline accent

### 5. Gallery Section

**Current:** Generic grid

**New:**

- Light gray-50 background
- Images with black border frame effect
- Hover: Scale + red overlay with 10% opacity
- Rounded corners: 4px (subtle, professional)
- Section title: Black with red accent

### 6. Reviews/Trust Section

**Current:** Gray background, generic buttons

**New:**

- Red background
- White text
- Buttons: White background with black text (Google), Green background with white text (Facebook)
- Bold, confident messaging

### 7. Contact Section

**Current:** Generic layout

**New:**

- White background
- Map iframe with thick black border
- Contact info in card with red accents on icons
- Opening hours table: alternating row backgrounds
- CTA button: Large green button with white text
- Phone/email links: Red color on hover

### 8. Footer

**Current:** Gray-900 background

**New:**

- Black background (#000000)
- White text
- Red accents on links hover
- CVR and company info in subtle gray-400
- Clean grid layout

### 9. Typography

- Headings: Black, bold (700-800 weight)
- Body: Gray-900 for readability
- Links: Red on hover with underline
- Button text: Bold (600 weight)

### 10. Buttons & CTAs

**Primary (Call/Submit):** Green background, white text, bold, shadow

**Secondary (SMS/Nav):** White background, black text, black border

**Accent (Find vej/Links):** Red background, white text, bold

**Hover states:** Darken by 10%, scale 1.02, add shadow

## Implementation Files

1. `tailwind.config.ts` - Update color palette
2. `app/globals.css` - Typography, focus states, transitions
3. `components/Hero/Hero.tsx` - New hero layout & colors
4. `components/Hero/HeroCTA.tsx` - Button color updates
5. `components/Hero/HeroUSP.tsx` - Red checkmarks & borders
6. `components/Services/Services.tsx` - White bg, section styling
7. `components/Services/ServiceCard.tsx` - Black border, red hover
8. `components/Gallery/Gallery.tsx` - Gray-50 bg, section styling
9. `components/Gallery/GalleryImage.tsx` - Border frames, hover effect
10. `components/Reviews/Reviews.tsx` - Red background, white text
11. `components/Reviews/ReviewButton.tsx` - Updated button colors
12. `components/Contact/Contact.tsx` - Clean layout, red accents
13. `components/Contact/ContactInfo.tsx` - Icon colors, table styling
14. `components/Footer/Footer.tsx` - Pure black background

## Mobile-First Responsive

- Hero CTAs: Stack on mobile, inline on tablet+
- Services: 1 col mobile → 2 col tablet → 3 col desktop
- Gallery: 2 col mobile → 3 col tablet → 4 col desktop
- Contact: Stack on mobile, side-by-side desktop
- Font sizes scale appropriately
- Touch targets minimum 44px

## Performance

- No additional assets (pure CSS)
- Leverage Tailwind JIT for minimal bundle
- Smooth 60fps animations (transform/opacity only)
- No layout shift on load

### To-dos

- [ ] Update Tailwind config with red/black/white/green color palette
- [ ] Update global CSS with better typography and focus states
- [ ] Redesign Hero section with new colors, layout, and bold styling
- [ ] Update Services cards with black borders and red hover states
- [ ] Update Gallery with border frames and red hover overlay
- [ ] Transform Reviews section with red background and updated buttons
- [ ] Update Contact section with red accents and improved layout
- [ ] Redesign Footer with pure black background and red link hovers