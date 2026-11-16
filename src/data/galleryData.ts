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
  { id: "all", label: "All Photos", count: 46 },
  { id: "sanctuary", label: "The Sanctuary & Suites", count: 38, matchCategories: ["stay"] },
  { id: "ocean", label: "Ocean Horizons & Coastline", count: 8, matchCategories: ["coast", "views"] },
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
  label: "COASTLINE",
  caption:
    "Sweeping aerial perspective of the lush coastal headland and tranquil cove bathed in warm morning light.",
  src: "/images/gallery/the-stay/DJI_20261010061850_0171_D_8064x6048_31.webp",
};

export const GALLERY_GRID_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: "Golden Sunrise Over Kumbalgama Bay",
    alt: "Golden Sunrise Over Kumbalgama Bay",
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
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
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
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
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
    caption:
      "Elevated view showcasing the sheltered cove, local fishing harbor, and lush tropical hills stretching inland.",
    src: "/images/gallery/the-stay/DJI_20261010055441_0142_D_8064x6048_21.webp",
  },
  {
    id: 6,
    title: "Dawn Horizon Along the Southern Coast",
    alt: "Dawn Horizon Along the Southern Coast",
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
    caption:
      "First light breaking over the Indian Ocean with panoramic views across the bay and neighboring headlands.",
    src: "/images/gallery/the-stay/DJI_20261010055508_0144_D_8064x6048_22.webp",
  },
  {
    id: 7,
    title: "Dondra Headland & Rugged Southern Shoreline",
    alt: "Dondra Headland & Rugged Southern Shoreline",
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
    caption:
      "Dramatic aerial sweep tracing the rocky coastline toward Sri Lanka's southernmost point at sunrise.",
    src: "/images/gallery/the-stay/DJI_20261010055519_0145_D_8064x6048_23.webp",
  },
  {
    id: 8,
    title: "Bird's-Eye View of Kumbalgama Cove",
    alt: "Bird's-Eye View of Kumbalgama Cove",
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
    caption:
      "Directly overhead look at the crescent-shaped sandy bay, gentle rolling surf, and surrounding palm-dotted village.",
    src: "/images/gallery/the-stay/DJI_20261010055832_0149_D_8064x6048_24.webp",
  },
  {
    id: 9,
    title: "Sheltered Harbour & Coastal Village Aerial",
    alt: "Sheltered Harbour & Coastal Village Aerial",
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
    caption:
      "High-altitude view capturing colorful local fishing boats anchored inside the protected stone breakwater.",
    src: "/images/gallery/the-stay/DJI_20261010060036_0155_D_8064x6048_1.webp",
  },
  {
    id: 10,
    title: "Twin Headlands & Turquoise Reef Breaks",
    alt: "Twin Headlands & Turquoise Reef Breaks",
    category: "ocean",
    gridCategory: "coast",
    label: "COASTLINE",
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
  {
    id: 21,
    title: "Handcrafted Timber Headboard & Crisp Linens",
    alt: "Handcrafted Timber Headboard & Crisp Linens",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Solid dark wood four-poster frame paired with plush white pillows and breathable cotton bedding.",
    src: "/images/gallery/the-stay/IMG_2795_3024x4032_66.webp",
  },
  {
    id: 22,
    title: "King Suite with Striped Beach Towels",
    alt: "King Suite with Striped Beach Towels",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Spacious white-dressed king bed prepared for coastal stays with fresh blue-and-white striped beach towels.",
    src: "/images/gallery/the-stay/IMG_2798_4032x3024_69.webp",
  },
  {
    id: 23,
    title: "Modern Shared Kitchen & Timber Dining Table",
    alt: "Modern Shared Kitchen & Timber Dining Table",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Fully equipped contemporary kitchen featuring marble-patterned cabinetry, gas cooktop, refrigerator, and a long handcrafted wooden dining table.",
    src: "/images/gallery/the-stay/IMG_2822_4032x3024_56.webp",
  },
  {
    id: 24,
    title: "Surfboard Storage Rack by the Ocean",
    alt: "Surfboard Storage Rack by the Ocean",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Dedicated outdoor surfboard rack stocked with colorful longboards and funboards steps away from the waves.",
    src: "/images/gallery/the-stay/IMG_2842_4032x3024_61.webp",
  },
  {
    id: 25,
    title: "Covered Rooftop Lounge & High-Top Bar",
    alt: "Covered Rooftop Lounge & High-Top Bar",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Open-air social terrace featuring a rustic timber bar, high-top seating, wooden loungers, and warm string lighting.",
    src: "/images/gallery/the-stay/IMG_2857_4032x3024_62.webp",
  },
  {
    id: 26,
    title: "Oceanfront Sun Loungers & Coastal Cliff View",
    alt: "Oceanfront Sun Loungers & Coastal Cliff View",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Handcrafted wooden sunbeds positioned on the rooftop terrace framing the turquoise Indian Ocean and lush green headland.",
    src: "/images/gallery/the-stay/IMG_2860_4032x3024_63.webp",
  },
  {
    id: 27,
    title: "Four-Poster Canopy Bed & Air-Conditioned Suite",
    alt: "Four-Poster Canopy Bed & Air-Conditioned Suite",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Comfortable guest bedroom featuring a sheer white mosquito canopy, dark wood four-poster bed, and patterned drapery.",
    src: "/images/gallery/the-stay/DSC04423_6000x4000_30.webp",
  },
  {
    id: 28,
    title: "In-Room Wardrobe & Lounge Chair Corner",
    alt: "In-Room Wardrobe & Lounge Chair Corner",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Spacious bedroom corner outfitted with a full-height wooden wardrobe and a casual orange inflatable lounge chair.",
    src: "/images/gallery/the-stay/DSC04424_6000x4000_18.webp",
  },
  {
    id: 29,
    title: "Sheer Canopy Suite & Beach Essentials",
    alt: "Sheer Canopy Suite & Beach Essentials",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Inviting king bed enclosed in fine white netting with folded striped beach towels ready for the shore.",
    src: "/images/gallery/the-stay/DSC04425_6000x4000_19.webp",
  },
  {
    id: 30,
    title: "Air-Conditioned Canopy Bedroom Overview",
    alt: "Air-Conditioned Canopy Bedroom Overview",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Bright, airy guest room equipped with air conditioning, ceiling fan, four-poster canopy bed, and relaxing lounge seating.",
    src: "/images/gallery/the-stay/IMG_2791_3024x4032_65.webp",
  },
  {
    id: 31,
    title: "Modern Tiled En-Suite Bathroom",
    alt: "Modern Tiled En-Suite Bathroom",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Clean, bright private bathroom outfitted with glossy white subway tiles, contemporary fixtures, and dark slate flooring.",
    src: "/images/gallery/the-stay/IMG_2895_4032x3024_49.webp",
  },
  {
    id: 32,
    title: "Rustic Timber Bar & Stone-Topped Table",
    alt: "Rustic Timber Bar & Stone-Topped Table",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Open-air rooftop lounge featuring a natural log bar counter, high-top seating, and an artistic stone cocktail table.",
    src: "/images/gallery/the-stay/IMG_2861_4032x3024_41.webp",
  },
  {
    id: 33,
    title: "Rooftop Bar Seating & String Light Canopy",
    alt: "Rooftop Bar Seating & String Light Canopy",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Spacious covered terrace lined with colorful bar stools, rustic timber accents, and overhead Edison bulb lighting.",
    src: "/images/gallery/the-stay/IMG_2863_4032x3024_64.webp",
  },
  {
    id: 34,
    title: "Panoramic Ocean View from the Rooftop Deck",
    alt: "Panoramic Ocean View from the Rooftop Deck",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Expansive view looking out from the shaded rooftop bar across the turquoise Indian Ocean and lush coastal headland.",
    src: "/images/gallery/the-stay/IMG_2864_4032x3024_42.webp",
  },
  {
    id: 35,
    title: "Handcrafted Timber Bar Wall & Art Detail",
    alt: "Handcrafted Timber Bar Wall & Art Detail",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Warm rustic wood paneling accented with trailing indoor greenery, floating live-edge shelves, and vibrant equestrian wall art.",
    src: "/images/gallery/the-stay/IMG_2866_4032x3024_43.webp",
  },
  {
    id: 36,
    title: "Natural Log Bar Counter & Tropical Terrace",
    alt: "Natural Log Bar Counter & Tropical Terrace",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Close-up perspective of the textured bark bar top paired with modern stools and views of surrounding palm trees.",
    src: "/images/gallery/the-stay/IMG_2868_4032x3024_44.webp",
  },
  {
    id: 37,
    title: "Oceanfront Sun Loungers & Coastal Horizon",
    alt: "Oceanfront Sun Loungers & Coastal Horizon",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Handcrafted wooden sunbeds positioned on the open rooftop deck overlooking blue waves and the green headland.",
    src: "/images/gallery/the-stay/IMG_2870_4032x3024_45.webp",
  },
  {
    id: 38,
    title: "Tropical Oleander Blooms Overlooking the Cove",
    alt: "Tropical Oleander Blooms Overlooking the Cove",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Vibrant pink coastal flowers framing the tranquil ocean bay and lush green hillside in soft morning light.",
    src: "/images/gallery/the-stay/IMG_2873_4032x3024_46.webp",
  },
  {
    id: 39,
    title: "Rooftop Barbecue Grill & Outdoor Dining Deck",
    alt: "Rooftop Barbecue Grill & Outdoor Dining Deck",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Custom barrel-style charcoal grill ready for sunset seafood cookouts on the breezy oceanview terrace.",
    src: "/images/gallery/the-stay/IMG_2880_4032x3024_47.webp",
  },
  {
    id: 40,
    title: "Industrial Cement-Finish Rooftop Washroom",
    alt: "Industrial Cement-Finish Rooftop Washroom",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Sleek dark polished-cement washroom featuring an oval mirror, modern basin, and coastal boat-themed door art.",
    src: "/images/gallery/the-stay/IMG_2881_4032x3024_48.webp",
  },
  {
    id: 41,
    title: "Sunlit Kitchen & Surfboard Rack View",
    alt: "Sunlit Kitchen & Surfboard Rack View",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Modern black marble-finish kitchen and solid timber dining table overlooking colorful surfboards stacked outside the window.",
    src: "/images/gallery/the-stay/IMG_2922_4032x3024_39.webp",
  },
  {
    id: 42,
    title: "Modern Rain Shower & Hot Water System",
    alt: "Modern Rain Shower & Hot Water System",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Contemporary white-tiled shower enclosure featuring a square overhead rainfall fixture, handheld wand, and instant water heater.",
    src: "/images/gallery/the-stay/IMG_2898_3024x4032_50.webp",
  },
  {
    id: 43,
    title: "Serene Common Lounge & Teak Planter's Chairs",
    alt: "Serene Common Lounge & Teak Planter's Chairs",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Airy, bright living area furnished with traditional slatted wooden planter's chairs, warm wall sconces, and a tranquil Buddha statue.",
    src: "/images/gallery/the-stay/IMG_2914_4032x3024_52.webp",
  },
  {
    id: 44,
    title: "Spacious Interior Hallway & Relaxation Seating",
    alt: "Spacious Interior Hallway & Relaxation Seating",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Cool, tiled common space featuring handcrafted timber lounge chairs, ceiling fans, and peaceful Sri Lankan cultural decor.",
    src: "/images/gallery/the-stay/IMG_2917_4032x3024_35.webp",
  },
  {
    id: 45,
    title: "Tranquil Reading Corner & Warm Ambient Lighting",
    alt: "Tranquil Reading Corner & Warm Ambient Lighting",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Cozy indoor nook illuminated by soft pendant lights, showcasing classic wooden seating, dark drapery, and local artwork.",
    src: "/images/gallery/the-stay/IMG_2919_4032x3024_37.webp",
  },
  {
    id: 46,
    title: "Open-Concept Living Space & Wooden Armchairs",
    alt: "Open-Concept Living Space & Wooden Armchairs",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Expansive, breezy lounge area outfitted with polished floor tiles, solid wood display cabinetry, and reclining timber armchairs.",
    src: "/images/gallery/the-stay/IMG_2920_4032x3024_38.webp",
  },
];

export const GALLERY_TOTAL_COUNT = 46;
export const GALLERY_INITIAL_VISIBLE = 9;
export const ALL_GALLERY_IMAGES: GalleryImage[] = [FEATURED_IMAGE, ...GALLERY_GRID_IMAGES];
