# Noonna Beach Hotel â€” Production Asset Inventory & Mapping

> **Policy Notice:**
> - Master Assets listed in `design-references/master-assets/` are approved for the shared design system.
> - Individual desktop page design exports in `design-references/pages/` are **unverified working exports** and are NOT yet approved or finalized.
> - Accommodation is strictly a single Double Room. Do not use unconfirmed names or multiple categories.
> - Google Stitch AI-generated image renders are strictly visual exploration placeholders and are excluded from production.

| ID | Original Asset Source | Production Filename | Category | Real Subject / Description | Verification / Approval Status | Intended Placement |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AST-01** | `Noonna Beach Hotel/Bg Removed Logo.png` | `/images/branding/logo.png` | Genuine Brand Asset | Official transparent Noonna Beach Hotel logo mark | **Verified Asset** | Master Header & Footer |
| **AST-02** | `Photos-.../Home/1.JPG` | `/images/hotel/hero-beach.jpg` | Genuine Hotel Photography | Beachfront coastline view at sunrise / golden hour | **Verified Asset** | Homepage Hero (Fallback for Video) |
| **AST-03** | `Photos-.../Home/2nd Part/2.1.JPG` | `/images/hotel/property-exterior.jpg` | Genuine Hotel Photography | Architectural exterior & open veranda | **Verified Asset** | Homepage Sanctuary Intro |
| **AST-04** | `Photos-.../Home/2nd Part/2.JPG` | `/images/hotel/property-grounds.jpg` | Genuine Hotel Photography | Garden pathway & tropical palm grounds | **Verified Asset** | Homepage Sanctuary Feature 2 |
| **AST-05** | `Photos-.../Stay/IMG_2916.JPG` | `/images/rooms/deluxe-ocean-suite.jpg` | Genuine Hotel Photography | Guest bedroom interior (Double Room) looking out to balcony/ocean | **Verified Image / Unconfirmed Official Unit Name** (Refer strictly as "Double Room") | The Stay: Primary Accommodation Card |
| **AST-06** | `Photos-.../Home/Gallery/DJI_...155_D.JPG` | `/images/hotel/aerial-coast.jpg` | Genuine Hotel Photography (Drone) | High-altitude aerial capture of Kumbalgama coastline & reef | **Verified Asset (Staged)** | Gallery & Location Chapter |
| **AST-07** | `Photos-.../Photos/IMG_2842.JPG` | `/images/gallery/veranda-seating.jpg` | Genuine Hotel Photography | Veranda lounge & outdoor teak furniture | **Verified Asset (Staged)** | Gallery Grid & Story Bento |
| **AST-08** | Experiences Destination Photos | Pending Client Assets | Third-Party Landmarks & Beaches | External beaches, surf breaks, cultural monuments (13 beaches, 9 heritage sites) | **Needs Client Photos / Graceful Editorial Placeholders** | Experiences Landing & Detail Pages |
| **AST-13** | Midigama Beach detail reference imagery (Stitch/export placeholders, remote `lh3.googleusercontent.com` URLs) | Retained as-is in `src/data/destinationDetailData.ts` | Intentional Dummy / Placeholder Imagery | Hero, vitals, transit, gallery, and discover-carousel visuals for Midigama detail page | **Intentional dummy placeholders retained** (per Phase 7.5A policy; preserve composition/aspect ratios for future genuine replacement) | `/experiences/midigama-beach` (Phase 7.5A) |
| **AST-09** | Dining Venue Photos | Pending Client Assets | Third-Party Restaurants | 10 independent dining establishments (Lucky Fort, Shirani, Kumbala, Mettha's, etc.) | **Needs Client Photos / Editorial Styling** | Dining Section & Guide |
| **AST-11** | Southern Heritage & Coastal Expeditions destination photos | Pending Client / Licensed Assets | Third-Party Landmarks & Wildlife | Galle Dutch Fort, Kushtarajagala Rock Relief, Kumbalgama Potters' Village, Martin Wickramasinghe Museum, Taprobane Island, Koggala Lake & Mangroves, Koggala Stilt Fishermen Coast, Whale Watching Cruises (Mirissa), Snake Farm Weligama, plus Southern Heritage page hero/field-notes/beach/gastronomy imagery | **Needs Client Photos / Restrained Editorial Placeholders in use** | `/experiences/southern-heritage-coastal-expeditions` (Phase 7.3) |
| **AST-12** | Dining Guide venue photos | Pending Client / Licensed Assets | Third-Party Dining Venues | Lucky Fort, Shirani, Kumbala, Mettha's, Le' Fish, Sithum, After Surf, Kerabujen, Aloha, Salty Swamis (independent regional recommendations; hero/directory imagery) | **Needs Client Photos / Restrained Neutral Image Placeholders in use** | `/experiences/dining` (Phase 7.4) |
| **AST-14** | Gallery page reference imagery (Stitch/export placeholders, remote `lh3.googleusercontent.com` URLs) | Retained as-is in `src/data/galleryData.ts` | Intentional Dummy / Placeholder Imagery | Featured hero, 9 gallery grid plates, and lightbox visuals for Moments by the Sea gallery | **Intentional dummy placeholders retained** (per Phase 8 policy; preserve composition/aspect ratios for future genuine replacement) | `/gallery` (Phase 8) |
| **AST-10** | Stitch AI Prompts (e.g., Imagen Generative Renders) | *None* | Google Stitch AI-Generated Placeholder | Synthetic visual concepts for mockup styling | **EXCLUDED FROM PRODUCTION** | Visual reference only |

---

## Unconfirmed Items & Pending Verifications

1. **Original 1:30 Hotel Hero Video:** Pending locating and verifying the actual video file.
2. **Accommodation Model:** Owner-confirmed as **entire resort rental / private resort stay** (Phase 9.1.2). Guest capacity, bedroom count, bed configuration, and other specifications remain unconfirmed and must not be invented.
3. **Official WhatsApp Phone Number:** Pending client confirmation (dummy/unavailable presentation remains on Contact page; placeholder links such as `wa.me/noonnabeachhotel` must not be treated as production data).
4. **Official Contact Phone Number:** Pending client confirmation.
5. **Official Contact Email:** Pending client confirmation.
6. **Contact Form Integration:** Contact form remains a **dummy implementation** awaiting external integration by the owner; no API endpoint, email delivery, or provider connection is configured.
7. **Property Location / Google Maps:** Owner-provided Google Maps link `https://maps.app.goo.gl/7Fea7dbtqiWPuo2T8` is the current location reference for Contact page map CTAs. **GPS coordinates are intentionally not displayed.** Exact embed-to-pin consistency remains subject to owner/source confirmation (current embed uses a safe name-based query).
8. **Desktop Page Designs:** All folders under `design-references/pages/` remain unverified working exports unless explicitly approved; Contact page design has intentionally diverged from its original Stitch reference (layout/composition preserved by owner decision).

