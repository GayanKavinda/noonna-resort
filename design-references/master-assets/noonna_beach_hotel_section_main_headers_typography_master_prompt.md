# Master Prompt Specification: Noonna Beach Hotel — Section Main Headers Typography Design System

Use this complete specification as the exact Master Prompt for generating, styling, or auditing all **page section main headers and heading typography** across the **Noonna Beach Hotel** digital ecosystem.

*(Note: This covers all main content section headers, editorial titles, eyebrows, and decks across the page — distinct from the top navigation bar).*

---

## 1. Font Stack & Google Fonts Declaration

Include the primary Google Fonts import in the document `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Moon+Dance&display=swap" rel="stylesheet">
```

### The Three Typographic Roles for Headers:
1. **Philosophy Eyebrow / Emotional Accent**: `Moon Dance, cursive`
   - Expresses barefoot calm, poetic coastal cadence, and relaxed rhythm.
2. **Primary Section Title / H1 & H2 Headings**: `Cormorant Garamond, Georgia, serif`
   - Expresses refined architectural elegance, timeless heritage, and boutique luxury.
3. **Subtitle / Section Deck / Metadata**: `Inter, system-ui, sans-serif`
   - Expresses functional clarity, legibility, and modern editorial precision.

---

## 2. Master Section Header Trio Architecture

Every standard section header on the Noonna Beach Hotel site follows a cohesive **3-Tier Typographic Hierarchy**:

```
[ Tier 1: Cursive Eyebrow ]    →  "gentle tides & unhurried surf..." (Moon Dance, cursive)
[ Tier 2: Main Section Title ] →  "Midigama Beach & Coastal Coves"   (Cormorant Garamond, serif)
[ Tier 3: Explanatory Deck ]   →  "The legendary surf breaks, secluded rock pools..." (Inter, sans-serif)
```

---

## 3. Granular Section Header Specifications (By Part / Archetype)

### Part A. Hero Section Main Header (H1)
*Used for the top opening section of every page (Homepage, Stay, Experiences, Gallery, Contact, Destination Details).*

- **Eyebrow / Philosophy Accent (`Moon Dance`)**:
  - `font-family: 'Moon Dance', cursive;`
  - `font-size: 32px` to `38px` (`text-[32px]` / `text-[36px]`)
  - `font-weight: 400` (Regular)
  - `line-height: 1.1`
  - `color: #FFFFFF;` (Over dark imagery/video) or `#397FA8;` (Ocean Blue over white/sand)
  - *Stylistic Note:* Always in lowercase or natural sentence case with an unhurried trailing ellipsis (e.g., *"gentle tides & unhurried surf..."*, *"where the ocean sets the rhythm..."*).

- **Primary Hero Title (H1 — `Cormorant Garamond`)**:
  - `font-family: 'Cormorant Garamond', serif;`
  - `font-size: 48px` to `64px` (`text-4xl md:text-5xl lg:text-6xl`)
  - `font-weight: 400` (Regular) to `500` (Medium) — *Never heavy bold black*
  - `line-height: 1.1` to `1.15` (`leading-tight`)
  - `letter-spacing: -0.015em` to `tight`
  - `color: #FFFFFF;` (Over dark photography) or `#173F56;` (Deep Coastal Blue on light canvas)

- **Hero Explanatory Deck / Sub-Header (`Inter`)**:
  - `font-family: 'Inter', sans-serif;`
  - `font-size: 16px` to `18px` (`text-base md:text-lg`)
  - `font-weight: 300` (Light) to `400` (Regular)
  - `line-height: 1.6` (`leading-relaxed`)
  - `max-width: 42rem` to `48rem` (`max-w-2xl` / `max-w-3xl`)
  - `color: #E2E8F0;` (Over dark background) or `#475569;` (Slate 600 over white)

---

### Part B. Editorial Narrative & Storytelling Headers (H2)
*Used for "A Little Closer to the Ocean", "A Golden Crescent Carved for Solitude", "Your Own Coastal Hideaway".*

- **Cursive Eyebrow (`Moon Dance`)**:
  - `font-family: 'Moon Dance', cursive;`
  - `font-size: 28px` to `32px` (`text-[30px]`)
  - `color: #397FA8;` (Ocean Blue)
  - Optional accompanying pill badge: `Inter 600`, `9px-10px`, uppercase `tracking-[0.2em]`, `bg-[#EBF4F9] text-[#397FA8] px-3 py-1 rounded-full`.

- **Main Editorial Heading (H2 — `Cormorant Garamond`)**:
  - `font-family: 'Cormorant Garamond', serif;`
  - `font-size: 36px` to `44px` (`text-3xl md:text-4xl lg:text-[42px]`)
  - `font-weight: 400` (Regular)
  - `line-height: 1.18`
  - `letter-spacing: -0.01em`
  - `color: #173F56;` (Deep Coastal Blue) or `#0F172A;` (Slate 900)

- **Editorial Narrative Paragraph (`Inter`)**:
  - `font-family: 'Inter', sans-serif;`
  - `font-size: 15px` to `16px` (`text-[15px]` / `text-base`)
  - `font-weight: 300` (Light)
  - `line-height: 1.75` (`leading-relaxed`)
  - `color: #475569;` (Slate 600)

---

### Part C. Functional Feature & Technical Intel Headers
*Used for "Surf Intel & Coastal Conditions", "Getting to Midigama Beach & Coves", "Stay Highlights", "Find Your Way to the Coast".*

- **Cursive Eyebrow (`Moon Dance`)**:
  - `font-family: 'Moon Dance', cursive;`
  - `font-size: 26px` to `30px`
  - `color: #397FA8;` (Ocean Blue)
  - Phrasing: *"unhurried coastal journeys..."*, *"swell reports & ocean intelligence..."*, *"tailored comforts..."*

- **Main Functional Title (H2 — `Cormorant Garamond`)**:
  - `font-family: 'Cormorant Garamond', serif;`
  - `font-size: 32px` to `38px` (`text-3xl md:text-[36px]`)
  - `font-weight: 500` (Medium)
  - `line-height: 1.2`
  - `color: #173F56;` (Deep Coastal Blue)

- **Context Deck / Sub-Label (`Inter`)**:
  - `font-family: 'Inter', sans-serif;`
  - `font-size: 14px` (`text-sm`)
  - `font-weight: 400` (Regular)
  - `line-height: 1.5`
  - `color: #64748B;` (Slate 500)

---

### Part D. Visual Gallery & Interactive Carousel Headers
*Used for "Curated Glimpses of Midigama", "Discover More Along the Southern Coast", "Moments by the Sea".*

- **Cursive Eyebrow (`Moon Dance`)**:
  - `font-family: 'Moon Dance', cursive;`
  - `font-size: 30px` to `34px`
  - `color: #397FA8;` (Ocean Blue)
  - Phrasing: *"visual journal..."*, *"unfold the journey..."*, *"moments captured in stillness..."*

- **Main Showcase Title (H2 — `Cormorant Garamond`)**:
  - `font-family: 'Cormorant Garamond', serif;`
  - `font-size: 34px` to `42px` (`text-3xl lg:text-[40px]`)
  - `font-weight: 400` (Regular) to `500` (Medium)
  - `line-height: 1.2`
  - `color: #173F56;` (Deep Coastal Navy)

- **Companion Action / Filter / Pagination Text (`Inter`)**:
  - `font-family: 'Inter', sans-serif;`
  - `font-size: 13px` to `14px` (`text-sm`)
  - `font-weight: 500` (Medium)
  - `color: #397FA8;` hover `text-[#2E698D]` (e.g. `View All Photos →`, `All Transfers Arrangeable via Portico`)

---

### Part E. Pre-Footer Master Booking CTA Header
*Used for "Make Room for a Slower Stay" across Homepage, Stay, Experiences, and Destination pages.*

- **Eyebrow Accent (`Moon Dance`)**:
  - `font-family: 'Moon Dance', cursive;`
  - `font-size: 34px` to `38px` (`text-[34px]`)
  - `color: #397FA8;` (Ocean Blue)
  - Phrasing: *"rest & unwind..."*

- **Primary CTA Heading (H2 — `Cormorant Garamond`)**:
  - `font-family: 'Cormorant Garamond', serif;`
  - `font-size: 40px` to `48px` (`text-4xl md:text-[44px]`)
  - `font-weight: 400` (Regular)
  - `line-height: 1.15`
  - `letter-spacing: -0.01em`
  - `color: #0F172A;` (Slate 900) or `#173F56;` (Deep Coastal Blue)

- **Supporting Invitation Deck (`Inter`)**:
  - `font-family: 'Inter', sans-serif;`
  - `font-size: 16px` to `17px` (`text-base`)
  - `font-weight: 300` (Light)
  - `line-height: 1.6`
  - `max-width: 36rem` (`max-w-xl`)
  - `color: #475569;` (Slate 600)

---

### Part F. Card & Bento Tile Internal Headings (H3 / H4)
*Used inside destination cards, accommodation profiles, and bento tiles.*

- **Category Pre-Title Tag (`Inter`)**:
  - `font-family: 'Inter', sans-serif;`
  - `font-size: 10px` to `11px` (`text-[10px]` / `text-[11px]`)
  - `font-weight: 600` (SemiBold)
  - `text-transform: uppercase;`
  - `letter-spacing: 0.16em` to `0.2em` (`tracking-[0.18em]`)
  - `color: #64748B;` (Slate 500) or `#397FA8;` (Ocean Blue)

- **Card Title Heading (`Cormorant Garamond`)**:
  - `font-family: 'Cormorant Garamond', serif;`
  - `font-size: 22px` to `26px` (`text-xl` to `text-2xl`)
  - `font-weight: 500` (Medium)
  - `line-height: 1.25`
  - `color: #FFFFFF;` (Over photo card overlay) or `#173F56;` (On white card)

---

## 4. Reusable Section Header HTML Snippets

### Standard Left-Aligned Header Block:
```html
<div class="space-y-1 mb-10 text-left">
  <span class="block font-['Moon_Dance',cursive] text-[30px] text-[#397FA8] leading-none">
    unhurried coastal journeys...
  </span>
  <h2 class="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl text-[#173F56] font-normal leading-tight tracking-tight">
    Getting to Midigama Beach & Surf Breaks
  </h2>
  <p class="font-['Inter',sans-serif] text-sm md:text-base text-[#475569] font-light max-w-2xl leading-relaxed pt-1">
    Positioned just 1.4 kilometers along Sri Lanka's southern shoreline between Kumbalgama and Weligama.
  </p>
</div>
```

### Centered Editorial Header Block (Pre-Footer or Showcase):
```html
<div class="text-center max-w-3xl mx-auto space-y-2 mb-12">
  <span class="block font-['Moon_Dance',cursive] text-[34px] text-[#397FA8] leading-none">
    rest & unwind...
  </span>
  <h2 class="font-['Cormorant_Garamond',serif] text-4xl md:text-[44px] text-[#0F172A] font-normal leading-tight tracking-tight">
    Make Room for a Slower Stay
  </h2>
  <p class="font-['Inter',sans-serif] text-base text-[#475569] font-light max-w-xl mx-auto leading-relaxed pt-1">
    Explore the property and check your preferred dates for an intimate beach stay on Sri Lanka's southern coast.
  </p>
</div>
```

---

## 5. Master Prompt Directive (Copy & Paste for Generation)

> **Section Headers Master Prompt:**  
> "Generate page content section headers for Noonna Beach Hotel adhering strictly to the Modern Coastal Sanctuary design system.  
> Every content section header must follow the unified 3-tier hierarchy:  
> 1. **Poetic Eyebrow**: `Moon Dance, cursive` at 28px–34px in Ocean Blue (`#397FA8`, or `#FFFFFF` on dark hero overlays), sentence case with unhurried trailing ellipsis (e.g. *'gentle tides & unhurried surf...'*, *'unfold the journey...'*, *'rest & unwind...'*, *'the sanctuary field notes...'*, *'visual journal...'*, *'tailored comforts...'*, *'swell reports & ocean intelligence...'*, *'unhurried coastal journeys...'*, *'where the ocean sets the rhythm...'*, *'moments captured in stillness...'*, *'clear details & peaceful planning...'*, *'the path to tranquility...'*, *'artisanal coastal dining...'*, *'your private ocean sanctuary awaits'*).  
> 2. **Main Section Heading (H1 / H2)**: `Cormorant Garamond, serif` at 34px–44px for standard sections (48px–64px for Hero H1, 40px–48px for Pre-Footer CTA), font-weight 400 Regular to 500 Medium (never heavy bold), line-height 1.15 to 1.2, tight tracking, colored Deep Coastal Blue (`#173F56`) or Deep Slate (`#0F172A`).  
> 3. **Explanatory Deck / Paragraph**: `Inter, sans-serif` at 14px–16px, font-weight 300 Light to 400 Regular, leading relaxed, colored Slate 600 (`#475569`) or Slate 500 (`#64748B`), constrained to `max-w-2xl` to `max-w-3xl` for effortless reading cadence."
