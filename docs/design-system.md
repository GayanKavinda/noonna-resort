# Noonna Beach Hotel — Design System Specification

## 1. Brand Identity & Atmosphere
- **Brand Aesthetic:** Modern Coastal Sanctuary.
- **Atmosphere:** Sun-drenched, airy, organic minimalism, pure white planes framed by Indian Ocean blues.
- **Emotion:** Instant decompression, gentle maritime calm, tactile warmth, and uncompromising editorial clarity.

---

## 2. Color Palette & Design Tokens

### Primary Canvas & Surfaces
- **Canvas Base / Pure White:** `#FFFFFF` (Primary surface, 70% of visual plane)
- **Canvas Muted / Cloud Blue:** `#F1F9FD` (Soft alternate section backgrounds and card planes)
- **Structural Mist / Sea Mist:** `#D9EAF3` (Subtle 1px architectural borders, dividers, bento cards)
- **Subtle Accent / Sky Blue:** `#B8E0F5` (Badges, tag fills, selection highlights)

### Accents & Interactive Elements
- **Interactive Primary / Ocean Blue:** `#397FA8` (Primary CTAs, active nav links, focus rings, interactive accents)
- **Interactive Hover / Ocean Hover:** `#2E688D` (Hover state for primary buttons and links)

### Typography & High Contrast Tones
- **Deep Coastal Blue / Navy:** `#173F56` (Main headings, prominent titles, primary brand tone)
- **Slate Charcoal / Dark:** `#0F172A` (Secondary titles and dark contrast text)
- **Slate Body:** `#475569` (Body text, subheadings, descriptive copy)
- **Slate Muted:** `#64748B` (Metadata, labels, date stamps, photo captions)

---

## 3. Typography Architecture

### Font Stack
- **Headings & Editorial Titles:** Cormorant Garamond (`font-heading`, `font-serif`)
- **Body, Interface, Controls & Badges:** Inter (`font-body`, `font-sans`)
- **Poetic Accents & Eyebrows:** Moon Dance (`font-accent`, `font-script`)

### Master 3-Tier Section Header Trio
```
[ Tier 1: Cursive Eyebrow ]    → "gentle tides & unhurried surf..." (Moon Dance, cursive, #397FA8)
[ Tier 2: Main Section Title ] → "Midigama Beach & Coastal Coves"   (Cormorant Garamond, serif, #173F56)
[ Tier 3: Explanatory Deck ]   → "The legendary surf breaks..."     (Inter, sans-serif, #475569)
```

---

## 4. Spacing, Grid & Layout Rules
- **Desktop Grid:** 12 columns, 24px (`1.5rem`) gutters.
- **Max Width Containers:**
  - Standard Content: `max-w-7xl` (`1280px`) with `px-6 lg:px-8`.
  - Focused Reading / Article / Form: `max-w-4xl` (`896px`) or `max-w-5xl` (`1024px`).
  - Wide Visual Bands: Full-bleed with `max-w-7xl` inner alignment.
- **Vertical Spacing Rhythm:**
  - Page Sections: `py-16 md:py-24` (80px to 120px) to provide serene coastal breathing space.
  - Component Internal Padding: `p-6 md:p-8` for standard bento cards.

---

## 5. Master Shared Components (Approved from 9 Master Assets)
1. **Header & Navigation (`noonna_beach_hotel_master_header_asset` & `header_icons_asset`):** Sticky white canvas with official brand lockup, primary route links (`/`, `/stay`, `/experiences`, `/gallery`, `/contact`), social group (Instagram, Facebook, YouTube, WhatsApp), and "Book Your Stay" CTA button.
2. **Footer (`noonna_beach_hotel_master_footer_asset`):** 4-column responsive grid featuring brand identity and poetic script accent, navigation directory, contact & location details, verified booking badges, and copyright.
3. **Pre-Footer CTA (`noonna_beach_hotel_master_pre_footer_cta_asset`):** Reusable high-impact invitation band with route-specific editorial copy and direct reservation triggers.
4. **FAQ Accordion (`noonna_beach_hotel_master_faq_asset`):** Accessible expandable accordion on Cloud Blue / White backdrop with categorized queries.
5. **Discover More Carousel (`noonna_beach_hotel_master_discover_more_carousel_asset`):** Horizontal interactive showcase for experiences, destinations, and local highlights with custom navigation arrows.
6. **Layout & Grid System (`noonna_beach_hotel_master_layout_grid_system_asset`):** Layout rules and spacing tokens applied globally.
7. **Section Main Headers (`noonna_beach_hotel_section_main_headers_typography_master_prompt.md`):** Reusable `SectionHeader` supporting H1 hero and H2 section tiers with cursive eyebrow and explanatory deck.

---

## 6. Accommodation Architecture Policy
- **Verified Accommodation:** The hotel offers a **single Double Room** only.
- **Rules:**
  - Strictly no additional room categories, suites, or multi-room villa configurations.
  - Do not adopt unverified marketing titles (such as "Deluxe Double Room with Sea View") without verified confirmation.
  - Accommodation imagery must not be assumed from filenames alone; only verified genuine photographs may represent the room.

---

## 7. Booking & Channel Policy
- **External Channels Only:** All booking actions redirect to official verified external channels:
  - Official Booking.com Listing: `https://www.booking.com/hotel/lk/noonna-beach.html`
  - Direct WhatsApp Concierge: Valid phone number required (unconfirmed placeholder usernames/links must not be used in production).
- **Rules:**
  - Strictly no custom reservation backend, payment gateway, or fake on-site checkout forms.
  - Contact email and WhatsApp telephone number remain documented as pending client confirmation.
