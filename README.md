# Twin Peaks Lodge & Hot Springs — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://twinpeakslodging.com/ (Ouray, CO).
Preview: https://tpl.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `twin-peaks-lodge` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `tpl.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Palette taken straight from their logo: pine green (#066224), sun gold (#FDB912), spring blue (#0093D1) on a warm snow/paper neutral, with a deep green for dark sections.
- Fraunces (soft, old-style serif with italic accents) for headings, Instrument Sans for body, IBM Plex Mono for labels and prices.
- Motifs from the logo and the trade: the logo's rising steam swirls (animated SVG), its twin snowcapped peaks over a blue water line as the hero edge, a geothermal "spring report" thermometer (156°F at the source to 100–106°F in the tubs), and the 16 minerals from their hot springs page laid out as periodic-table tiles.
- Section order: hero with spring report → quick strip (book, phone + desk hours, day passes, address) → the springs (hours, guest-only evenings, adults-only areas, vapor cave) → minerals → day-pass price cards → rooms by building + pet-friendly + amenities → Sage Spa / Mineshaft / Ouray Mountain Adventures / groups → 1893–2013 history timeline → guest quotes → know-before-you-go → contact.
- Booking goes to their existing ResEze engine (hotelid 1582); gift cards, spa, restaurant, Jeep rentals and group requests (Tripleseat) link to their existing pages.

## What changed from the current site

- Replaces the Divi/WordPress layout with mixed fonts (the mobile homepage falls back to Times-style serif) and a thin, centered hero title over a busy pool photo.
- The homepage gives two different spring temperatures (101–106°F in the hot springs section, 100–107°F in the FAQ); the concept uses one range everywhere.
- Day-pass prices, hours and the "front desk only" rule are on the homepage instead of a separate page.
- The history (1913 Cougar Sanitarium, John Wayne in 1969, going independent in 2013) moves from the About page to a homepage timeline.
- The large black virtual-tour embed and long FAQ accordion are replaced by a short "know before you go" grid with a link to the policies page.
- Checked at 1440px and 390px with no sideways scrolling.

## Owner should confirm

- Hot springs water temperature: hot springs page says 100–106°F, homepage says 101–106°F and the FAQ says 100–107°F. The concept uses 100–106°F.
- Day-pass, locals and annual pass prices (copied from the day-pass page) and the extra cost for the thermal/vapor cave.
- "Hotel guests only 7–10 pm" and the adults-only areas (from the hot springs page).
- Room type lists per building, the "93 guestrooms" count, and the $50/day pet fee, $25 late check-out, $10 pack-and-play and $100 deposit (from the homepage FAQ).
- Mineshaft opening time (FAQ says it opens at 4 pm).
- Timeline dates are condensed from the About page; "since 1913" refers to the Cougar Sanitarium opening on the springs.
- The two guest quotes (E. Bee, M. Futch) are verbatim from the homepage but the site doesn't say where they came from; no star rating is shown. No Google rating is quoted (only a link); confirm before adding one.
- No awards or badges appear on the current site, so none are shown.
- Photos are hotlinked from twinpeakslodging.com (the logo is downloaded into `src/assets`); replace with licensed originals before launch.
