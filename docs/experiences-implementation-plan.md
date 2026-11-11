# Noonna Beach Hotel — Experiences Architecture & Implementation Plan
**Document Version:** 1.1.0 • Verified Production Blueprint  
**Phase:** 7.1.1 Reference Audit & Verification  
**Target Engine:** Next.js App Router (v16.4.5), React 19, TypeScript, Tailwind CSS v4, Lucide React  

---

## 1. Verified Destination Count & Cross-Reference Audit

### Exact Destination Breakdown

A rigorous character-by-character reinspection of `design-references/pages/noonna_beach_hotel_experiences_complete_28_destinations/code.html` and its sister references resolves the destination tally discrepancy:

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                           EXPERIENCES DIRECTORY TALLY                          │
├─────────────────────────────────────────────────┬──────────┬───────────────────┤
│ Category / Reference Section                    │ Cards    │ Destination Scope │
├─────────────────────────────────────────────────┼──────────┼───────────────────┤
│ Section 1: Nearby Beaches & Surf Breaks         │ 10 Cards │ Physical Sites    │
│ Section 2: Discover the Local Area (Heritage)   │  9 Cards │ Physical Sites    │
│ Section 3: A Taste of Sri Lanka (Dining Page)   │ 10 Cards │ Distinct Venues   │
├─────────────────────────────────────────────────┼──────────┼───────────────────┤
│ TOTAL DISTINCT REGIONAL DESTINATIONS            │ 29 Total │ 19 Geo + 10 Dining│
└─────────────────────────────────────────────────┴──────────┴───────────────────┘
```

#### Why the folder is named `complete_28_destinations`:
In the original design drafting phase, 28 destinations were planned across the three thematic pillars (10 Beaches + 9 Heritage + 9 Dining). When the design team finalized the standalone Dining Guide (`experiences_a_taste_of_sri_lanka_complete_dining_cards`), a 10th dining venue (**10. Salty Swamis Cafe & Surf Shop**) was added to make a complete round 10-destination culinary guide. Furthermore, on the main Experiences landing page (`code.html`), Section 3 does not render all 10 individual restaurant cards directly; instead, it renders **2 editorial culture spotlights** (*Claypot Curries & Ocean Bounty* and *Shirani Home Made Rice & Curry*) accompanied by an official navigation banner (`View Complete Dining & Restaurant Guide`) routing visitors to the dedicated 10-venue dining guide.

### Exact Roster of Every Destination

#### Pillar 1: Coastal Shores & Surf Breaks (10 Destinations on Main Page)
1. **Midigama Beach** (`midigama-beach`) — Swell Sanctuary & Point Breaks (~1.4 km)
2. **Lazy Left Surf Break** (`lazy-left-surf-break`) — Classic Point Break Wave (~1.4 km)
3. **Rams Right Surf Break** (`rams-right-surf-break`) — Expert Hollow Reef Barrel (~1.5 km)
4. **Awee Coco Secret Pool** (`awee-coco-secret-pool`) — Natural Granite Ocean Bathing Pool (~1.2 km)
5. **Secret Jungle Beach** (`secret-jungle-beach`) — Secluded Turquoise Bay via Footpath (~2.1 km)
6. **Polhena Beach & Coral Reef** (`polhena-beach`) — Protected Barrier Reef & Turtle Lagoon (~14.0 km)
7. **Secret Beach Mirissa** (`secret-beach-mirissa`) — Tucked Twilight Tidepools (~7.2 km)
8. **Coconut Tree Hill** (`coconut-tree-hill`) — Promontory Red-Earth Ocean Cliff (~8.0 km)
9. **Parrot Rock** (`parrot-rock`) — Tidal Overlook Islet in Mirissa Bay (~7.5 km)
10. **Mirissa Coastal Promontory** (`mirissa-coastal-promontory`) — Catamaran Harbour & Marine Hub (~7.0 km)

#### Pillar 2: Heritage & Living Ecosystems (9 Destinations on Main Page)
11. **Galle Dutch Fort** (`galle-dutch-fort`) — UNESCO 17th-Century Citadel Bastions (~24.0 km)
12. **Martin Wickramasinghe Museum** (`martin-wickramasinghe-museum`) — Literary & Folk Culture Estate (~7.8 km)
13. **Kushtarajagala Rock Relief** (`kushtarajagala-rock-relief`) — 8th-Century Colossal Granite Bodhisattva (~3.8 km)
14. **Kumbalgama Potters' Village** (`kumbalgama-potters-village`) — Living Terracotta Craft Heritage (~0.8 km)
15. **Taprobane Island** (`taprobane-island`) — Private Island Villa Architecture (~3.5 km)
16. **Koggala Lake & Mangroves** (`koggala-lake-mangroves`) — Lagoon Wetland & Cinnamon Orchards (~7.0 km)
17. **Koggala Stilt Fishermen Coast** (`koggala-stilt-fishermen`) — Petrified Reef Stilt Ritual (~5.8 km)
18. **Whale Watching Cruises** (`whale-watching-mirissa`) — Deep-Water Trench Marine Safari (~8.2 km)
19. **Snake Farm Weligama** (`snake-farm-weligama`) — Ayurvedic Serpent Sanctuary (~6.5 km)

#### Pillar 3: Coastal Dining Discoveries (10 Venues in Dedicated Dining Guide)
20. **Lucky Fort Restaurant** (`lucky-fort-restaurant`) — 10-dish claypot curry spread, Galle Fort (~24.0 km)
21. **Shirani Home Made Rice & Curry** (`shirani-rice-and-curry`) — Home-style village feast, Weligama/Midigama (~2.1 km)
22. **Kumbala Restaurant & Cafe** (`kumbala-restaurant-cafe`) — Wood-fired catches & seafood, Weligama (~3.2 km)
23. **Mettha's Home Cooked Meals** (`metthas-home-cooked-meals`) — Family garden curries, Weligama (~3.0 km)
24. **Le' Fish Weligama** (`le-fish-weligama`) — Evening catch & seafood grill, Weligama beach (~3.5 km)
25. **Sithum Fish Point** (`sithum-fish-point`) — Fisherman kitchen, Mirissa harbour road (~3.4 km)
26. **After Surf Rooftop Cafe** (`after-surf-rooftop-cafe`) — Specialty brunch & smoothie bowls, Midigama (~3.6 km)
27. **Kerabujen Restaurant** (`kerabujen-restaurant`) — Black pork curry & traditional roti, Ahangama (~3.1 km)
28. **Aloha Coffee Gallery** (`aloha-coffee-gallery`) — Artisan espresso & cold brew, Midigama (~5.5 km)
29. **Salty Swamis Cafe & Surf Shop** (`salty-swamis-cafe`) — Oceanfront sourdough brunch & specialty coffee, Ahangama (~3.2 km)

---

## 2. Master Assets Verification Matrix

All master assets located in `design-references/master-assets/` were inspected directly on disk to establish authoritative layout, token, and iconography rules:

| Master Asset | File Path Inspected | Inspected Elements & Governance Rules |
|---|---|---|
| **Master Header** | `master-assets/noonna_beach_hotel_master_header_asset/code.html` | Sticky navigation bar, desktop nav spacing, brand logo anchor, solid background on inner pages (`SiteLayout.tsx`). |
| **Master Header Icons** | `master-assets/noonna_beach_hotel_master_header_icons_asset/code.html` | Visual verification of Lucide icon set (`Bed`, `Compass`, `Image`, `Mail`, `Menu`) sized at `18px`–`20px`. |
| **Master Footer** | `master-assets/noonna_beach_hotel_master_footer_asset/code.html` | 4-column brand, navigation, contact, payment badge footer (`SiteLayout.tsx`). Verified typography and copyright tokens. |
| **Layout & Grid System** | `master-assets/noonna_beach_hotel_master_layout_grid_system_asset/code.html` | `max-w-7xl mx-auto px-6 lg:px-12` container envelope, consistent section vertical padding (`py-16 md:py-20 lg:py-24`), border rules (`border-[#D9EAF3]`). |
| **Section Headers Typography** | `master-assets/noonna_beach_hotel_section_main_headers_typography_master_prompt.md` | Eyebrow: *Moon Dance* (cursive, `text-2xl` to `text-3xl`, `#397FA8`). Main Heading: *Cormorant Garamond* (400 weight, `text-3xl` to `text-[44px]`, `#173F56`). Deck: *Inter* font-light (`#475569` / `#64748B`). |
| **Discover More Carousel** | `master-assets/noonna_beach_hotel_master_discover_more_carousel_asset/code.html` | Interactive card carousel structure with filter pills, previous/next controls, and scrollable flex track. To be integrated on destination detail template (`[slug]`). |
| **Pre-Footer CTA** | `master-assets/noonna_beach_hotel_master_pre_footer_cta_asset/code.html` | Authoritative copy matrix across all 10 contexts. Implemented in `src/components/shared/PreFooterCta.tsx`. Called with context `"experiences"`, `"heritage"`, or `"taste"`. |
| **FAQ System** | `master-assets/noonna_beach_hotel_master_faq_asset/code.html` | Accordion specification and interaction states implemented in `src/components/shared/FaqAccordion.tsx`. |
| **Iconography & Sizing System** | `master-assets/Noonna_Beach_Hotel_Master_Iconography_&_Sizing_System_Asset/code.html` | Strict Lucide React mapping: `w-4 h-4` (16px), `w-[18px] h-[18px]` (18px), `w-5 h-5` (20px), `w-[22px] h-[22px]` (22px). Zero Material Symbols font imports. |
| **Modern Coastal Sanctuary** | `master-assets/modern_coastal_sanctuary/DESIGN.md` | Pure white canvas (`#FFFFFF`), ocean blue (`#397FA8`), deep coastal blue (`#173F56`), soft mist (`#D9EAF3`), cloud blue (`#EBF5FB`/`#F1F9FD`). |

*Status:* All 10 master assets have been inspected. None are missing.

---

## 3. End-to-End Navigation Architecture

The Next.js App Router structure enables seamless movement through the multi-page experiences ecosystem:

```
                                  ┌─────────────────────────────┐
                                  │      / (Home Page)          │
                                  └──────────────┬──────────────┘
                                                 │
                                                 ▼
                                  ┌─────────────────────────────┐
                                  │       /experiences          │
                                  │  (28 Destinations Landing)  │
                                  └──────┬───────────────┬──────┘
                                         │               │
                 ┌───────────────────────┘               └───────────────────────┐
                 │                                                               │
                 ▼                                                               ▼
┌──────────────────────────────────────────────┐                ┌──────────────────────────────────────────────┐
│ /experiences/southern-heritage-coastal-exp...│                │             /experiences/dining              │
│ (Dedicated 9-Sanctuary Heritage Expedition)  │                │    (Dedicated 10-Venue Dining Guide)         │
└──────────────────────┬───────────────────────┘                └──────────────────────┬───────────────────────┘
                       │                                                               │
                       │              ┌───────────────────────────────┐                │
                       └─────────────►│      /experiences/[slug]      │◄───────────────┘
                                      │ (Reusable Detail Template)    │
                                      │ e.g. /experiences/midigama... │
                                      └───────────────────────────────┘
```

### Navigation Verification Details:
1. **Main Landing (`/experiences`) → Dedicated Hubs**:
   - The button `"Explore Southern Heritage & Coastal Expeditions"` links directly to `/experiences/southern-heritage-coastal-expeditions`.
   - The button `"View Complete Dining & Restaurant Guide"` links directly to `/experiences/dining`.
2. **Main Landing Cards → Individual Detail Pages**:
   - Each destination card on the main page is wrapped in `<Link href={`/experiences/${destination.slug}`}>` (or contains an active `"Explore Shore"`, `"Explore Heritage"`, or `"View Details"` link).
   - Clicking a card navigates to `/experiences/[slug]`.
3. **Reusable Dynamic Template (`/experiences/[slug]`)**:
   - A single Next.js dynamic segment (`src/app/experiences/[slug]/page.tsx`) renders the layout from `noonna_beach_hotel_experiences_midigama_beach_detail_updated_carousel/`.
   - Populated dynamically with data corresponding to the matched slug from `src/data/experiencesData.ts`.
   - Non-existent slugs trigger Next.js `notFound()`, safely displaying the project's custom 404 page.

---

## 4. Factual Content & Asset Limitations Audit

To preserve strict documentation integrity and prevent fabricating client claims, the following design mockup assertions must be treated as **development placeholders** subject to client verification:

### Data Requiring Client / Host Confirmation:
1. **Travel Distances & Journey Times**:
   - Stated distances on cards (e.g. `~1.4 km` to Midigama, `~24 km` to Galle Fort, `~0.8 km` to Potters' Village) reflect approximate regional estimates. These will be labeled with `~` (approximate) and noted as travel estimates.
2. **Third-Party Restaurant Profiles & Pricing**:
   - Venues such as *Lucky Fort*, *Shirani*, *Mettha's*, and *Salty Swamis* are independent commercial businesses. Menus, price tiers (`$`, `$$`, `$$$`), and operating hours will be framed as editorial recommendations rather than guaranteed hotel-operated services.
3. **Third-Party Activities & Excursions**:
   - Whale watching cruises, cinnamon plantation safaris, and surf rentals will clearly be presented as independent local activities that the hotel host/concierge can assist in arranging upon request, rather than hotel-owned excursions.

### Available Genuine Hotel Assets & Imagery Strategy:
- **Available Assets:**
  - `public/images/hotel/hero-beach.jpg` (Genuine beach shoreline at Noonna)
  - `public/images/hotel/property-exterior.jpg` (Genuine hotel facade & entrance)
  - `public/images/hotel/property-grounds.jpg` (Genuine lush coastal garden)
  - `public/images/rooms/deluxe-ocean-suite.jpg` (Genuine double room interior)
  - `public/images/branding/logo.png` (Genuine branding logo)
- **Strategy for Regional Destinations:**
  - No synthetic AI photography will be generated or masqueraded as authentic landmarks.
  - Where destination-specific photography is pending from the client, cards will utilize graceful, high-restraint editorial cards featuring clean coastal background gradients, verified geographical tags, distance chips, and Lucide React category badges.

---

## 5. Implementation Phases Sequence

### Phase 7.2: Main Experiences Landing Page (`/experiences`)
- **Route:** `src/app/experiences/page.tsx`
- **Data File:** `src/data/experiencesData.ts` (Structured data for all beaches and heritage destinations)
- **Sections:**
  - `ExperiencesHero.tsx` (Atmospheric header, category pills, asymmetrical triptych montage)
  - `NearbyBeachesSection.tsx` (10 beach destination cards in split bento and grid layout)
  - `HeritageSection.tsx` (9 heritage & wildlife destination cards + Southern Heritage button)
  - `DiningSection.tsx` (Coastal gastronomy culture spotlight + Complete Dining Guide button)
  - `SurroundingsSection.tsx` (Hotel surroundings & what's nearby table + distances)
  - `CoastalMotionSection.tsx` (Video showcase card & regional transit highlights)
  - `PreFooterCta` (`context="experiences"`)
- **Shared Components Reused:** `SiteLayout`, `PreFooterCta`, `Container`, `SectionHeading`
- **Verification:** `npx tsc --noEmit`, `npm run lint`, `npm run build`

### Phase 7.3: Southern Heritage & Coastal Expeditions Page
- **Route:** `src/app/experiences/southern-heritage-coastal-expeditions/page.tsx`
- **Components:** Division 1 (Sacred Granite & Bastions), Division 2 (Lagoons & Marine Safari), Visual Field Notes gallery, `PreFooterCta` (`context="heritage"`).

### Phase 7.4: Complete Dining & Restaurant Guide Page
- **Route:** `src/app/experiences/dining/page.tsx`
- **Components:** 10 numbered dining venue cards, cuisine filters, host dining advisory note, `PreFooterCta` (`context="taste"`).

### Phase 7.5A: Midigama Beach First Destination Detail (Completed)
- **Route:** `src/app/experiences/[slug]/page.tsx` with `generateStaticParams` returning `midigama-beach` only.
- **Page template:** `src/components/sections/experiences/destination/DestinationDetailPage.tsx` composing reusable section components.
- **Data:** `src/data/destinationDetailData.ts` (`DestinationDetail` schema + `MIDIGAMA_BEACH_DETAIL`, slug lookup) with page-specific content kept in data and aligned to existing `experiencesData.ts` Midigama entry.
- **Sections implemented (per Stitch reference):** metadata/breadcrumb bar, hero banner, quick vitals bento (7:5 showcase + 3 cards/intel), transit (4 cards), curated glimpses gallery (5-card bento), Discover More carousel (filters, arrows, 6 slides, progress/indicator bar), seamless sanctuary concierge banner, `PreFooterCta` (`context="beaches"`).
- **Linkage:** only Midigama Beach card on experiences landing linked to `/experiences/midigama-beach`; other destination cards not connected.
- **Verification:** browser screenshot captured at 340px width and compared against 340x1600 Stitch `screen.png`; `npx tsc --noEmit`, `npx eslint` on changed files, and `npm run build` passed; route prerendered.

### Phase 7.5B+: Remaining Destination Details (Planned)
- Extend `DESTINATION_DETAILS` and static params/card links after Midigama visual approval.

### Phase 7.6: Linkage, Navigation & QA
- Connect approved cards across pages to corresponding detail routes.
- Full responsive verification across mobile (390px), tablet (768px), and desktop (1440px).
- Verify TypeScript types, zero lint errors, and successful static prerendering.

---

## 6. Audit Conclusion & Readiness Declaration

- **Reference Audit Status:** Complete, verified, and cross-referenced against all 4 Google Stitch references and all 10 Master Design Assets.
- **Code Status:** No application code was modified during this verification phase. Existing `/` and `/stay` routes remain clean, stable, and compiling with zero errors.
- **Readiness:** **The reference audit is 100% complete. The main Experiences page (`/experiences`) is fully ready for implementation in Phase 7.2.**
