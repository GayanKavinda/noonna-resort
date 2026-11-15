export type GalleryCategory = "all" | "sanctuary" | "ocean" | "epicure" | "atmosphere";

export interface GalleryFilter {
  id: GalleryCategory;
  label: string;
  count: number;
  matchCategories?: string[];
}

export interface GalleryImage {
  id: number;
  title: string;
  alt: string;
  category: GalleryCategory | "featured";
  gridCategory?: string;
  label: string;
  caption: string;
  src: string;
  dataAlt?: string;
}

export const GALLERY_FILTERS: GalleryFilter[] = [
  { id: "all", label: "All Photos", count: 20 },
  { id: "sanctuary", label: "The Sanctuary & Suites", count: 20, matchCategories: ["stay"] },
  { id: "ocean", label: "Ocean Horizons & Coastline", count: 0, matchCategories: ["coast", "views"] },
  { id: "epicure", label: "Epicure & Dining", count: 0, matchCategories: ["dining"] },
  { id: "atmosphere", label: "Daily Atmosphere", count: 0, matchCategories: [] },
];

export const FEATURED_IMAGE: GalleryImage = {
  id: 0,
  title: "Golden Sunrise Over Kumbalgama Bay",
  alt: "Golden Sunrise Over Kumbalgama Bay",
  dataAlt:
    "Sweeping aerial perspective of the lush coastal headland and tranquil cove bathed in warm morning light at Kumbalgama, Sri Lanka.",
  category: "featured",
  label: "THE STAY",
  caption:
    "Sweeping aerial perspective of the lush coastal headland and tranquil cove bathed in warm morning light.",
  src: "/images/gallery/the-stay/DJI_20261010061850_0171_D_8064x6048_31.webp",
};

export const GALLERY_GRID_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: "Golden Sunrise Over Kumbalgama Bay",
    alt: "Golden Sunrise Over Kumbalgama Bay",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Sweeping aerial perspective of the lush coastal headland and tranquil cove bathed in warm morning light.",
    src: "/images/gallery/the-stay/DJI_20261010061850_0171_D_8064x6048_31.webp",
  },
  {
    id: 2,
    title: "Noonna Beach Hotel Exterior & Surf Shack",
    alt: "Noonna Beach Hotel Exterior & Surf Shack",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Multi-level whitewashed coastal retreat featuring vibrant surf murals, a thatched beach hut, and oceanfront balconies.",
    src: "/images/gallery/the-stay/DJI_20261010061935_0172_D_8064x6048_26.webp",
  },
  {
    id: 3,
    title: "Offshore Coral Reef & Rocky Outcrop",
    alt: "Offshore Coral Reef & Rocky Outcrop",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Top-down drone view of turquoise waters swirling around dramatic coastal rock formations just steps from the shore.",
    src: "/images/gallery/the-stay/DJI_20261010072128_0182_D_8064x6048_32.webp",
  },
  {
    id: 4,
    title: "Private Rooftop Terrace & Sun Loungers",
    alt: "Private Rooftop Terrace & Sun Loungers",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Handcrafted wooden sunbeds overlooking uninterrupted Indian Ocean horizons through architectural cut-out balustrades.",
    src: "/images/gallery/the-stay/_storage_emulated_0_Gandara_photos_IMG_2871_4032x3024_40.webp",
  },
  {
    id: 5,
    title: "Kumbalgama Coastline & Nearby Harbour Panorama",
    alt: "Kumbalgama Coastline & Nearby Harbour Panorama",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Elevated view showcasing the sheltered cove, local fishing harbor, and lush tropical hills stretching inland.",
    src: "/images/gallery/the-stay/DJI_20261010055441_0142_D_8064x6048_21.webp",
  },
  {
    id: 6,
    title: "Dawn Horizon Along the Southern Coast",
    alt: "Dawn Horizon Along the Southern Coast",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "First light breaking over the Indian Ocean with panoramic views across the bay and neighboring headlands.",
    src: "/images/gallery/the-stay/DJI_20261010055508_0144_D_8064x6048_22.webp",
  },
  {
    id: 7,
    title: "Dondra Headland & Rugged Southern Shoreline",
    alt: "Dondra Headland & Rugged Southern Shoreline",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Dramatic aerial sweep tracing the rocky coastline toward Sri Lanka's southernmost point at sunrise.",
    src: "/images/gallery/the-stay/DJI_20261010055519_0145_D_8064x6048_23.webp",
  },
  {
    id: 8,
    title: "Bird's-Eye View of Kumbalgama Cove",
    alt: "Bird's-Eye View of Kumbalgama Cove",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Directly overhead look at the crescent-shaped sandy bay, gentle rolling surf, and surrounding palm-dotted village.",
    src: "/images/gallery/the-stay/DJI_20261010055832_0149_D_8064x6048_24.webp",
  },
  {
    id: 9,
    title: "Sheltered Harbour & Coastal Village Aerial",
    alt: "Sheltered Harbour & Coastal Village Aerial",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "High-altitude view capturing colorful local fishing boats anchored inside the protected stone breakwater.",
    src: "/images/gallery/the-stay/DJI_20261010060036_0155_D_8064x6048_1.webp",
  },
  {
    id: 10,
    title: "Twin Headlands & Turquoise Reef Breaks",
    alt: "Twin Headlands & Turquoise Reef Breaks",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Wide coastal vista highlighting the secluded cove framed by emerald cliffs and crystal-clear surf breaks.",
    src: "/images/gallery/the-stay/DJI_20261010060056_0156_D_8064x6048_25.webp",
  },
  {
    id: 11,
    title: "Refreshing Lion Lager at Noonna Beach Bar",
    alt: "Refreshing Lion Lager at Noonna Beach Bar",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Chilled cans of Sri Lankan Lion Lager and a frosty mug served on the rustic wooden bar counter.",
    src: "/images/gallery/the-stay/DSC04384_6000x4000_5.webp",
  },
  {
    id: 12,
    title: "Handcrafted Wooden Sun Loungers by Night",
    alt: "Handcrafted Wooden Sun Loungers by Night",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Custom rustic wooden loungers positioned on the open-air rooftop deck under atmospheric evening lighting.",
    src: "/images/gallery/the-stay/DSC04390_6000x4000_7.webp",
  },
  {
    id: 13,
    title: "Rooftop Lounge and Bar Ambience",
    alt: "Rooftop Lounge and Bar Ambience",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Warm overhead string lights illuminating the cozy seating area, wooden deck, and open-air rooftop bar.",
    src: "/images/gallery/the-stay/DSC04392_6000x4000_9.webp",
  },
  {
    id: 14,
    title: "Equestrian Art & Bar Shelving Detail",
    alt: "Equestrian Art & Bar Shelving Detail",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Cozy interior wall featuring warm amber lighting, rustic wood paneling, a running horse painting, and spirit bottles.",
    src: "/images/gallery/the-stay/DSC04397_6000x4000_11.webp",
  },
  {
    id: 15,
    title: "Rustic Timber Bar Counter & Stools",
    alt: "Rustic Timber Bar Counter & Stools",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Sturdy natural log bar counter paired with modern colorful bar stools under a covered open-air roof structure.",
    src: "/images/gallery/the-stay/DSC04400_6000x4000_12.webp",
  },
  {
    id: 16,
    title: "Traditional Shisha Setup on Rooftop Terrace",
    alt: "Traditional Shisha Setup on Rooftop Terrace",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "A decorative blue hookah displayed on a rustic round stone table overlooking the ambient hotel bar.",
    src: "/images/gallery/the-stay/DSC04402_6000x4000_13.webp",
  },
  {
    id: 17,
    title: "Potted Greenery at the Bar Counter",
    alt: "Potted Greenery at the Bar Counter",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Lush tropical plants and potted herbs adding a vibrant touch to the handcrafted wooden bar top.",
    src: "/images/gallery/the-stay/DSC04405_6000x4000_14.webp",
  },
  {
    id: 18,
    title: "Warm Ambient Lighting Behind the Bar",
    alt: "Warm Ambient Lighting Behind the Bar",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Gleaming spirit bottles and rustic timber shelving highlighted by soft, warm decorative lighting.",
    src: "/images/gallery/the-stay/DSC04406_6000x4000_15.webp",
  },
  {
    id: 19,
    title: "Cozy Bar Interior with Horse Wall Art",
    alt: "Cozy Bar Interior with Horse Wall Art",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Intimate corner of the bar featuring warm red accent lighting and rustic wood textures.",
    src: "/images/gallery/the-stay/DSC04407_6000x4000_16.webp",
  },
  {
    id: 20,
    title: "Evening Vibe at Noonna Beach Bar",
    alt: "Evening Vibe at Noonna Beach Bar",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Peaceful nighttime atmosphere showcasing the illuminated beverage coolers, bar seating, and cozy lounge tables.",
    src: "/images/gallery/the-stay/DSC04410_6000x4000_17.webp",
  },
];

export const GALLERY_TOTAL_COUNT = 20;
export const GALLERY_INITIAL_VISIBLE = 20;
export const ALL_GALLERY_IMAGES: GalleryImage[] = [FEATURED_IMAGE, ...GALLERY_GRID_IMAGES];
