# Noonna Beach Hotel — Experiences Architecture & Implementation Plan
**Document Version:** 1.0.0 • Production Blueprint  
**Phase:** 7.1 Reference Audit & Implementation Plan  
**Target Next.js Engine:** App Router (v16.4.5), React 19, TypeScript, Tailwind CSS v4, Lucide React  

---

## 1. Executive Summary & Audit Overview

The Experiences ecosystem for Noonna Beach Hotel is an interconnected, editorial discovery system covering the southern coastal strip of Sri Lanka (Kumbalgama, Midigama, Ahangama, Weligama, Mirissa, Koggala, Galle, and Matara). 

This section is composed of four distinct Google Stitch design references and is underpinned by the Noonna Master Design Assets:

1. **Main Experiences Landing Page (`/experiences`)**:
   - Reference: `design-references/pages/noonna_beach_hotel_experiences_complete_28_destinations/`
   - Complete 28-destination directory categorized into **Nearby Beaches (10)**, **Discover the Local Area / Heritage & Wildlife (9)**, and **Coastal Dining Discoveries (10 / 9 cards + 1 spotlight)**, plus Surroundings, Transit, and Motion showcase.
2. **Southern Heritage & Coastal Expeditions (`/experiences/southern-heritage-coastal-expeditions`)**:
   - Reference: `design-references/pages/noonna_beach_hotel_experiences_southern_heritage_coastal_expeditions/`
   - Dedicated high-fidelity editorial journey through 9 regional sanctuaries split into two historical/ecological divisions.
3. **Dining & Restaurant Guide (`/experiences/dining`)**:
   - Reference: `design-references/pages/noonna_beach_hotel_experiences_a_taste_of_sri_lanka_complete_dining_cards/`
   - Complete 10-destination culinary guide ("A Taste of Sri Lanka") featuring authentic village curries, seafood barbecue shacks, and coastal specialty cafes.
4. **Reusable Destination Detail Dynamic Route (`/experiences/[slug]`)**:
   - Reference: `design-references/pages/noonna_beach_hotel_experiences_midigama_beach_detail_updated_carousel/`
   - Single dynamic template rendering bespoke data for destinations (Midigama Beach used as canonical exemplar), featuring breadcrumbs, atmospheric hero, quick vitals bento bar, multi-modal transit cards, visual diary photo grid, curated carousel, and host concierge banner.

---

## 2. Complete Destination Inventory (Extracted from 28-Destination Master Reference)

The reference files establish an exact inventory of **28 primary destinations** across three thematic pillars:

### Pillar 1: Coastal Shores & Surf Breaks (10 Destinations)
| # | Destination Name | Category | Distance from Hotel | Primary Focus / Attributes | Proposed Slug |
|---|---|---|---|---|---|
| 1 | **Midigama Beach** | Swell Sanctuary | ~1.4 km | World-class reef breaks (Lazy Left, Rams, Plantations), coconut shacks | `midigama-beach` |
| 2 | **Lazy Left Surf Break** | Point Break | ~1.4 km | Legendary peeling left-hand point break, intermediate to advanced surfers | `lazy-left-surf-break` |
| 3 | **Rams Right Surf Break** | Reef Break | ~1.5 km | Powerful shallow hollow right barrel, expert reef break | `rams-right-surf-break` |
| 4 | **Awee Coco Secret Pool** | Tidal Bathing Pool | ~1.2 km | Natural granite-enclosed ocean bath, calm emerald soak basins | `awee-coco-secret-pool` |
| 5 | **Secret Jungle Beach** | Secluded Cove | ~2.1 km | Hidden turquoise bay accessed via shaded jungle footpaths | `secret-jungle-beach` |
| 6 | **Polhena Beach & Coral Reef** | Snorkelling Lagoon | ~14.0 km | Protected barrier reef lagoon with resident green sea turtles | `polhena-beach` |
| 7 | **Secret Beach Mirissa** | Sunset Cove | ~7.2 km | Tucked ocean pocket behind coconut headlands, quiet twilight tidepools | `secret-beach-mirissa` |
| 8 | **Coconut Tree Hill** | Promontory Lookout | ~8.0 km | Iconic red-earthed cliff crowned by towering leaning palms into the ocean | `coconut-tree-hill` |
| 9 | **Parrot Rock** | Ocean Viewpoint | ~7.5 km | Tidal islet overlook in Mirissa Bay offering 360° sweeping coastal vistas | `parrot-rock` |
| 10 | **Mirissa Coastal Promontory** | Sunset & Marine Hub | ~7.0 km | Vibrant crescent bay, sunset catamaran harbour, deep-sea departure base | `mirissa-coastal-promontory` |

### Pillar 2: Heritage & Living Ecosystems (9 Destinations)
| # | Destination Name | Category | Distance from Hotel | Primary Focus / Attributes | Proposed Slug |
|---|---|---|---|---|---|
| 11 | **Galle Dutch Fort** | UNESCO World Heritage | ~24.0 km | 17th-century fortified coral-stone citadel, ramparts, colonial boutiques | `galle-dutch-fort` |
| 12 | **Martin Wickramasinghe Museum** | Literary & Folk Culture | ~7.8 km | Ancestral estate of celebrated author, traditional crafts, folk carriages | `martin-wickramasinghe-museum` |
| 13 | **Kushtarajagala Rock Relief** | Ancient Sanctuary | ~3.8 km | 8th-century colossal Mahayana Bodhisattva carved into solid granite cliff | `kushtarajagala-rock-relief` |
| 14 | **Kumbalgama Potters' Village** | Living Craft Heritage | ~0.8 km | Traditional family pottery compounds crafting terracotta clay pots by foot | `kumbalgama-potters-village` |
| 15 | **Taprobane Island** | Island Architecture | ~3.5 km | Octagonal neo-Palladian private villa perched on a private islet | `taprobane-island` |
| 16 | **Koggala Lake & Mangroves** | Wetland & Cinnamon Safari | ~7.0 km | Extensive mangrove lagoon with bird islands and cinnamon peeling orchards | `koggala-lake-mangroves` |
| 17 | **Koggala Stilt Fishermen Coast** | Maritime Tradition | ~5.8 km | Timeless southern ritual of stilt fishing on petrified coastal reef shelves | `koggala-stilt-fishermen` |
| 18 | **Whale Watching Cruises** | Marine Wildlife Safari | ~8.2 km | Deep underwater trench cruises encountering Blue Whales and Spinner Dolphins | `whale-watching-mirissa` |
| 19 | **Snake Farm Weligama** | Conservation Sanctuary | ~6.5 km | Family Ayurvedic serpent rescue sanctuary and biological study center | `snake-farm-weligama` |

### Pillar 3: Coastal Dining Discoveries (10 Destinations)
*(Detailed in full on `/experiences/dining` and highlighted in Section 3 of `/experiences`)*
| # | Restaurant / Venue | Cuisine Profile | Location / Setting | Signature Offering | Proposed Slug |
|---|---|---|---|---|---|
| 20 | **Lucky Fort Restaurant** | Authentic Sri Lankan | Galle Fort (Historic ramparts) | 10-dish individual claypot curry spread with red rice | `lucky-fort-restaurant` |
| 21 | **Shirani Home Made Rice & Curry** | Home-Style Village Feast | Weligama / Midigama border | Freshly ground jackfruit curry, dhal & caramelized pol sambol | `shirani-rice-and-curry` |
| 22 | **Kumbala Restaurant & Cafe** | Coastal Seafood & Local | Weligama Beach road | Wood-fired catches, fresh calamari, garlic butter king prawns | `kumbala-restaurant-cafe` |
| 23 | **Mettha's Home Cooked Meals** | Family Kitchen Garden | Weligama backroads | Intimate homestyle curries cooked with organic garden herbs | `metthas-home-cooked-meals` |
| 24 | **Le' Fish Weligama** | Sunset Ocean Grill | Weligama oceanfront | Evening catch display, grilled seer fish, marinated reef crabs | `le-fish-weligama` |
| 25 | **Sithum Fish Point** | Local Fisherman Kitchen | Mirissa harbour road | Daily fresh tuna steaks, butter garlic shrimp, roti | `sithum-fish-point` |
| 26 | **After Surf Rooftop Cafe** | Casual Surf Brunch | Midigama coastal road | Fresh fruit smoothie bowls, espresso, wholesome post-surf wraps | `after-surf-rooftop-cafe` |
| 27 | **Kerabujen Restaurant** | Southern Village Specialty | Ahangama coast | Authentic black pork curry, string hoppers, coconut roti | `kerabujen-restaurant` |
| 28 | **Aloha Coffee Gallery** | Artisan Cafe & Gallery | Midigama junction | Single-origin specialty coffee, cold brew, local surf art | `aloha-coffee-gallery` |
| — | **Salty Swamis Cafe & Surf Shop** | Modern Coastal Dining | Ahangama beachfront | Specialty espresso, oceanfront sourdough brunch, curated gear | `salty-swamis-cafe` |

---

## 3. Stitch References Section-by-Section Breakdown

### A. Main Experiences Page (`/experiences`)
**Reference Folder:** `design-references/pages/noonna_beach_hotel_experiences_complete_28_destinations/`
1. **Top Breadcrumb Bar**: `Home / Experiences` with clean slate text and soft divider.
2. **Hero Section with Atmospheric Header**:
   - Moon Dance cursive kicker: *"unhurried explorations along the southern shore..."*
   - Cormorant Garamond Heading: *"Experiences & Coastal Journeys"*
   - Editorial sub-paragraph: authentic coastal rhythm, surf, heritage, dining.
   - Quick Category Filter Pills: `10 Coastal Shores & Breaks`, `9 Heritage & Wildlife Gems`, `10 Coastal Dining Discoveries`.
   - Asymmetrical Triptych Hero Showcase Montage (Surf, Heritage, Shoreline).
3. **Section 1: Nearby Beaches (10 Destinations)**:
   - Eyebrow: *"where the ocean sets the rhythm..."*
   - Heading: *"Find Your Favourite Shore"*
   - Split Bento Grid: Left 7-column featured card (Midigama Beach) + Right 5-column stack, followed by 3-column and 4-column destination cards for all 10 beaches.
   - Each card contains: distance badge, category tag, descriptive deck, tags, and action link.
4. **Section 2: Discover the Local Area (9 Destinations)**:
   - Eyebrow: *"ancient kingdoms & living ecosystems..."*
   - Heading: *"Discover the Local Area"*
   - Grid of 9 high-touch heritage and wildlife cards.
   - Prominent Navigation Button: **`Explore Southern Heritage & Coastal Expeditions`** linking to `/experiences/southern-heritage-coastal-expeditions`.
5. **Section 3: Local Food and Culture**:
   - Eyebrow: *"coastal culinary roots & claypot aromas..."*
   - Heading: *"A Taste of the Southern Coast"*
   - Spotlight cards on local cooking traditions (Shirani Home Made Rice & Curry featured).
   - Prominent Navigation Banner & Button: **`View Complete Dining & Restaurant Guide`** linking to `/experiences/dining`.
6. **Section 4 / Surroundings: Hotel Surroundings & What's Nearby**:
   - Structured accordion/table covering immediate hotel vicinity: local transport, nearest beaches, train stations, ATM/pharmacy, and distances.
7. **Section 5: Coastal Motion & Media Highlights**:
   - Visual video banner card (*"The Ocean in Motion"*), curated Instagram link, and regional map highlight.
8. **Section 6 & 7: Master Pre-Footer CTA & Footer**:
   - Reuses approved master asset with `/experiences` contextual copy: *"Anchor Your Days by the Ocean"*.

---

### B. Southern Heritage & Coastal Expeditions (`/experiences/southern-heritage-coastal-expeditions`)
**Reference Folder:** `design-references/pages/noonna_beach_hotel_experiences_southern_heritage_coastal_expeditions/`
1. **Breadcrumb**: `Home / Experiences / Southern Heritage & Coastal Expeditions`
2. **Hero Header**:
   - Cursive: *"where stone remembers and ocean whispers..."*
   - Title: *"Southern Heritage & Coastal Expeditions"*
   - Subtitle: Curated journeys through ancient Mahayana Buddhist carvings, UNESCO Dutch bastions, stilt fishing coves, and wetland lagoons.
3. **Division 1 • Sacred Granite, Fortified Ramparts & Ancestral Clay**:
   - Deep-dive editorial layouts for Galle Dutch Fort, Kushtarajagala Bodhisattva, Kumbalgama Potters' Village, and Martin Wickramasinghe Museum.
   - Rich cultural context, visiting hours, respectful dress etiquette, and historical provenance.
4. **Division 2 • Mangrove Lagoons, Stilt Reefs & Ocean Giants**:
   - Koggala Lake & Cinnamon Island safari, Koggala Stilt Fishermen, Mirissa Whale Watching, and Snake Farm.
5. **Visual Field Notes Gallery**: 9-image visual diary with authentic cultural captions.
6. **Nearby Discovery Carousel & Pre-Footer CTA**: Master pre-footer CTA with `heritage` context.

---

### C. Dining & Restaurant Guide (`/experiences/dining`)
**Reference Folder:** `design-references/pages/noonna_beach_hotel_experiences_a_taste_of_sri_lanka_complete_dining_cards/`
1. **Breadcrumb**: `Home / Experiences / Dining & Restaurant Guide`
2. **Hero Header**:
   - Cursive: *"clay pot hearths & coastal harvest..."*
   - Title: *"A Taste of Sri Lanka • Complete Dining Guide"*
   - Subtitle: 10 handpicked dining sanctuaries between Galle and Weligama Bay.
3. **10 Detailed Dining Cards**:
   - Numbered 1 to 10 with price tier (`$`, `$$`, `$$$`), distance from Noonna, cuisine style, opening hours, host recommendations, and dining atmosphere.
4. **Host Dining Advisory / Concierge Note**:
   - Assistance with tuk-tuk coordination, seafood market visits, and dietary preferences.
5. **Master Pre-Footer CTA**: Pre-footer CTA with `taste` context.

---

### D. Reusable Destination Detail Template (`/experiences/[slug]`)
**Reference Folder:** `design-references/pages/noonna_beach_hotel_experiences_midigama_beach_detail_updated_carousel/`
1. **Breadcrumb & Metadata Bar**: `Home / Experiences / {Category} / {Destination Name}` with live status tags (e.g. `Surf & Swell Sanctuary • ~1.4 km from Hotel`).
2. **Atmospheric Destination Hero**:
   - Hero header with script eyebrow, Cormorant Garamond title, and high-impact lead image.
3. **Quick Vitals Bento Bar**:
   - 7-column primary visual showcase with floating glass badges.
   - 5-column tactical intel stack: Best visiting hours, terrain/swell profile, water temperature, difficulty/entry level, and local insider tip.
4. **Getting There & Transit Options**:
   - Multi-modal transportation cards: Tuk-tuk, coastal bicycle cruisers, walking trail, or coastal railway.
5. **Curated Glimpses Bento Gallery**:
   - 5-card visual diary showcasing different facets of the destination (e.g., dawn light, tide pools, shaded trails, local life).
6. **Master Discover More Carousel**:
   - Integrated `DiscoverCarousel` component filtering related destinations by category with left/right navigation and progress indicator.
7. **Host Concierge Outing Banner**:
   - Direct callout for assistance with equipment, drivers, or tide planning.
8. **Master Pre-Footer CTA & Footer**: Configured with matching destination context.

---

## 4. Master Assets Compliance Matrix

Every experience page must strictly adhere to the established Master Assets:

| Master Asset | Source Reference | Compliance Requirement in Experiences |
|---|---|---|
| **Master Header & Navigation** | `master-assets/noonna_beach_hotel_master_header_asset/` | Kept sticky via `SiteLayout.tsx`, solid white backdrop on interior pages, active link indicator on "Experiences". |
| **Master Header Icons** | `master-assets/noonna_beach_hotel_master_header_icons_asset/` | Lucide React icons (`Bed`, `Compass`, `Image`, `Mail`, `Menu`). |
| **Master Pre-Footer CTA** | `master-assets/noonna_beach_hotel_master_pre_footer_cta_asset/` | Shared `PreFooterCta.tsx` called with route-specific contexts (`experiences`, `heritage`, `taste`, `beaches`). |
| **Master Discover More Carousel** | `master-assets/noonna_beach_hotel_master_discover_more_carousel_asset/` | Reused on destination detail page (`[slug]`) with authentic destination cards and smooth slider. |
| **Master Typography & Sizing** | `master-assets/noonna_beach_hotel_section_main_headers_typography_master_asset/` | Cormorant Garamond 400 for headings, Moon Dance for script eyebrows, Inter for body/UI. |
| **Master Layout & Grid** | `master-assets/noonna_beach_hotel_master_layout_grid_system_asset/` | Max width `max-w-7xl mx-auto px-6 lg:px-12`, clean borders (`#D9EAF3`), background `#FFFFFF`. |
| **Iconography System** | `master-assets/Noonna_Beach_Hotel_Master_Iconography_&_Sizing_System_Production_Asset/` | 100% Lucide React icons, exact sizing (`16px`, `18px`, `20px`, `22px`), color `#397FA8`. |

---

## 5. Next.js App Router Architecture & Data Model

### Proposed Directory Structure

```
src/
├── app/
│   └── experiences/
│       ├── page.tsx                                  # Main 28-destination landing page
│       ├── southern-heritage-coastal-expeditions/
│       │   └── page.tsx                              # Dedicated Heritage & Wildlife page
│       ├── dining/
│       │   └── page.tsx                              # Dedicated 10-destination dining guide
│       └── [slug]/
│           └── page.tsx                              # Reusable dynamic destination template
├── components/
│   └── sections/
│       └── experiences/
│           ├── ExperiencesHero.tsx                   # Main page hero + triptych montage
│           ├── NearbyBeachesSection.tsx              # 10 beach destination cards grid
│           ├── HeritageSection.tsx                   # 9 heritage destination cards grid
│           ├── DiningSection.tsx                     # Dining preview & guide link
│           ├── SurroundingsSection.tsx               # What's nearby table & distances
│           ├── CoastalMotionSection.tsx              # Video showcase & media card
│           ├── DestinationHero.tsx                   # Detail page hero banner
│           ├── DestinationVitals.tsx                 # Detail page bento vitals bar
│           ├── DestinationTransit.tsx                # Detail page transit cards
│           ├── DestinationGallery.tsx                # Detail page 5-card bento gallery
│           ├── DestinationConcierge.tsx              # Detail page host assistance banner
│           ├── HeritageDivisionOne.tsx               # Heritage division 1 cards
│           ├── HeritageDivisionTwo.tsx               # Heritage division 2 cards
│           └── DiningCardList.tsx                    # Dining page 10-card list
├── data/
│   ├── experiencesData.ts                            # Core data for 28 destinations
│   ├── heritageData.ts                               # Heritage-specific extended narrative
│   └── diningData.ts                                 # 10 dining venues detailed data
└── types/
    └── experiences.ts                                # TypeScript interfaces for destinations
```

### TypeScript Data Schema (`src/types/experiences.ts`)

```typescript
export type ExperienceCategory = 
  | "beaches-surf" 
  | "heritage-culture" 
  | "wildlife-nature" 
  | "dining-gastronomy";

export interface DestinationHighlight {
  label: string;
  value: string;
  iconName: string;
}

export interface TransitOption {
  mode: "tuk-tuk" | "bicycle" | "walking" | "train";
  title: string;
  duration: string;
  description: string;
  perk?: string;
}

export interface DestinationGalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  scriptEyebrow: string;
  category: ExperienceCategory;
  categoryLabel: string;
  distanceFromHotel: string;
  distanceKm: number;
  shortDescription: string;
  fullDescription?: string;
  heroImage: string;
  heroImageAlt: string;
  badgeText: string;
  badgeIcon: string;
  
  // Detail page specifics
  vitals?: {
    primeHours: string;
    tideWindow: string;
    waterTemp: string;
    entryLevel: string;
    insiderTip: string;
  };
  highlights?: DestinationHighlight[];
  transitOptions?: TransitOption[];
  gallery?: DestinationGalleryItem[];
  relatedSlugs?: string[];
}
```

### Handling Unknown Slugs & Missing Data
- In `src/app/experiences/[slug]/page.tsx`, `generateStaticParams()` will pre-render all confirmed slugs.
- Slugs that do not match the destination database will trigger Next.js `notFound()`, rendering the polished `not-found.tsx` page.

---

## 6. Asset Audit & Production Strategy

### Physical Asset Inspection
Inspection of `public/images/` confirms:
- Currently available genuine hotel assets:
  - `public/images/branding/logo.png`
  - `public/images/hotel/hero-beach.jpg`
  - `public/images/hotel/property-exterior.jpg`
  - `public/images/hotel/property-grounds.jpg`
  - `public/images/rooms/deluxe-ocean-suite.jpg`

### Asset Mapping Table

| Page / Section | Required Reference Imagery | Existing Asset | Status | Strategy |
|---|---|---|---|---|
| **Main Hero Triptych** | Midigama surf, Kumbalgama coastline, Koggala stilt fishermen | `hero-beach.jpg`, `property-grounds.jpg` | Partial / Needs Client Confirmation | Use available coastal imagery with graceful SVG/editorial treatment for non-hotel shots; avoid fake AI photos. |
| **Beaches (10 cards)** | Midigama, Lazy Left, Rams, Awee Coco, Polhena, Mirissa, etc. | None specific in `public/` | Needs Client Photos | High-editorial card fallback with serene coastal gradient badges, exact distance tags, and curated metadata until client photo library is supplied. |
| **Heritage (9 cards)** | Galle Fort, Kushtarajagala, Martin Wickramasinghe, Stilt Fishermen, etc. | None specific in `public/` | Needs Client Photos | Clean architectural editorial cards with verified historical facts, exact distances, and cultural badges. |
| **Dining (10 cards)** | Lucky Fort, Shirani, Kumbala, Mettha's, Le' Fish, etc. | None specific in `public/` | Needs Client Confirmation | Editorial cards featuring genuine menu highlights, price indicators, and walking/tuk-tuk distances. |
| **Midigama Detail Hero & Bento** | 5 gallery photos of Midigama reef and tidal pools | `hero-beach.jpg` | Partial | High-fidelity editorial layout with genuine coastal photography and clean placeholders where specific break photos are pending. |

> **Authenticity Rule:** Under no circumstances will fabricated AI images or mismatched hotel photos be attributed to historical monuments or separate commercial restaurants. All card layouts will render cleanly with or without photo backgrounds.

---

## 7. Multi-Phase Implementation Roadmap

The implementation is broken down into structured, testable sub-phases:

```
┌─────────────────────────────────────────────────────────────┐
│ Phase 7.1: Reference Audit & Architecture Plan (Current)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ Phase 7.2: Main Experiences Landing Page (/experiences)     │
│ - ExperiencesHero, NearbyBeaches, HeritageSection           │
│ - DiningSection, SurroundingsSection, CoastalMotion         │
│ - PreFooterCta ('experiences') + Footer via SiteLayout      │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ Phase 7.3: Southern Heritage & Coastal Expeditions Page     │
│ - /experiences/southern-heritage-coastal-expeditions        │
│ - Division 1 & Division 2 deep-dive cards + Field Notes     │
│ - PreFooterCta ('heritage')                                 │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ Phase 7.4: Dining & Restaurant Guide Page                   │
│ - /experiences/dining                                       │
│ - 10 complete dining cards + Host Culinary Advisory         │
│ - PreFooterCta ('taste')                                    │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ Phase 7.5: Reusable Destination Detail Template             │
│ - /experiences/[slug] dynamic route                         │
│ - Midigama Beach canonical exemplar + dynamic slugs         │
│ - Bento vitals, transit options, bento gallery, carousel   │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ Phase 7.6: Linkage, Navigation & QA                         │
│ - Wire all 28 cards to their detail routes / external guides│
│ - Verify buttons, mobile responsiveness, tsc, lint, build   │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Technical Risks & Mitigation

1. **Card Link Redirection:**
   - *Risk:* 28 cards without distinct detail content could result in broken links or thin pages.
   - *Mitigation:* The `[slug]` template is built entirely data-driven from `src/data/experiencesData.ts`. Any slug with full details will render the deep template; any card in development will gracefully provide essential transit and arrival notes.
2. **Visual Consistency across 4 Sub-Routes:**
   - *Risk:* Layout shifts or divergent styling between `/experiences`, `/dining`, `/southern-heritage`, and `/[slug]`.
   - *Mitigation:* Enforce shared tokens (`#173F56`, `#397FA8`, `#D9EAF3`, Cormorant Garamond, Moon Dance, Inter) and shared components (`SiteLayout`, `PreFooterCta`, `DiscoverCarousel`, Lucide React icons).
3. **Turbopack Build Isolation on Windows:**
   - *Risk:* Local Next.js Turbopack build requires clean sandboxed execution without external network font fetching in CSS.
   - *Mitigation:* Use verified `@import "tailwindcss";` pattern and Lucide React icons, ensuring `npx tsc --noEmit`, `npm run lint`, and `npm run build` pass with zero warnings or errors.

---

## 9. Conclusion & Readiness

- **Inspection Status:** Complete. All 4 design references and all master assets have been inspected down to section IDs, typography classes, icon sizes, and content grids.
- **Data Extracted:** Exactly 28 destinations + 10 dining venues fully cataloged.
- **Application Status:** Safe and intact. No code was altered during this phase.
- **Readiness:** The project is fully prepared to proceed with **Phase 7.2: Main Experiences Landing Page Implementation**.

