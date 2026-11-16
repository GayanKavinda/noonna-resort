import { BEACH_DESTINATIONS } from "./experiencesData";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

export type DestinationBreadcrumbCategory = "Beaches & Surf";

export interface DestinationMetaItem {
  icon: "location_on" | "waves" | "wb_sunny" | "near_me" | "pool" | "surfing" | "compass" | "park";
  label: string;
}

export interface DestinationHeroData {
  image: string;
  imageAlt: string;
  script: string;
  title: string;
  deck: string;
  meta: DestinationMetaItem[];
}

export interface DestinationVitalsShowcase {
  image: string;
  imageAlt: string;
  topBadge: string;
  distanceBadge: string;
  panelBadge: string;
  panelBadgeText: string;
  title: string;
  description: string;
  facts: { icon: "thermostat" | "footprint" | "surfing"; label: string }[];
}

export interface DestinationVitalsCard {
  icon: "schedule" | "surfing" | "pool" | "compass";
  eyebrow: string;
  title: string;
  pill: string;
  description: string;
  left: { icon?: "air" | "waves"; label: string };
  right: string;
  emphasis?: boolean;
}

export interface DestinationVitalsIntel {
  eyebrow: string;
  coordinates: string;
  title: string;
  description: string;
  mapsHref: string;
  mapsLabel: string;
  hostHref: string;
  hostLabel: string;
}

export interface DestinationVitalsData {
  sectionScript: string;
  sectionTitle: string;
  sectionDeck: string;
  climateBadge: string;
  showcase: DestinationVitalsShowcase;
  cards: DestinationVitalsCard[];
  intel: DestinationVitalsIntel;
}

export interface DestinationTransitCard {
  title: string;
  subtitle: string;
  durationBadge: string;
  icon: "electric_rickshaw" | "pedal_bike" | "footprint" | "train";
  iconLabel: string;
  image: string;
  imageAlt: string;
  description: string;
  leftNote: string;
  rightNote: string;
  featured?: boolean;
}

export interface DestinationTransitData {
  sectionScript: string;
  sectionTitle: string;
  sectionDeck: string;
  cards: DestinationTransitCard[];
}

export interface DestinationGalleryItem {
  span: "lg:col-span-7" | "lg:col-span-5" | "lg:col-span-4" | "lg:col-span-6" | "lg:col-span-12" | "lg:col-span-7 lg:row-span-2";
  image: string;
  imageAlt: string;
  topBadge: string;
  topBadgeRight?: string;
  script: string;
  title: string;
  description: string;
}

export interface DestinationGalleryData {
  sectionScript: string;
  sectionTitle: string;
  allHref: string;
  items: DestinationGalleryItem[];
}

export type DestinationDiscoverFilterId =
  | "all"
  | "beaches"
  | "spots"
  | "heritage"
  | "taste";

export interface DestinationDiscoverSlide {
  id: string;
  filter: Exclude<DestinationDiscoverFilterId, "all">;
  image: string;
  imageAlt: string;
  topBadge: string;
  topBadgeVariant: "glass" | "primary";
  distance: string;
  categoryIcon: "landmark" | "compass" | "utensils" | "waves";
  category: string;
  title: string;
  description: string;
  footerLeft: string;
  href: string;
  linkLabel: string;
}

export interface DestinationDiscoverData {
  sectionScript: string;
  sectionTitle: string;
  sectionDeck: string;
  slides: DestinationDiscoverSlide[];
}

export interface DestinationConciergeData {
  script: string;
  title: string;
  deck: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  breadcrumbCategory: DestinationBreadcrumbCategory;
  categoryLabel: string;
  tags: string[];
  distanceLabel: string;
  hero: DestinationHeroData;
  vitals: DestinationVitalsData;
  transit: DestinationTransitData;
  gallery: DestinationGalleryData;
  discover: DestinationDiscoverData;
  concierge: DestinationConciergeData;
}

const midigamaBase = BEACH_DESTINATIONS.find((d) => d.slug === "midigama-beach");

export const MIDIGAMA_BEACH_DETAIL: DestinationDetail = {
  slug: "midigama-beach",
  name: midigamaBase?.name ?? "Midigama Beach",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Coastal Shoreline", "Surfing & Tidepools"],
  distanceLabel: "1.4 km from Noonna",
  hero: {
          image: "/images/experiences/beaches/midigama-beach/Palm_Fringed_Sandy_Beach_Coastline.webp",
    imageAlt: "Palm fringed sandy beach coastline at Midigama",
    script: "gentle tides & unhurried surf...",
    title: "Midigama Beach & Coastal Coves",
    deck: "The legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
    meta: [
      { icon: "location_on", label: "Southern Province, Weligama" },
      { icon: "waves", label: "Reef Point Breaks & Calm Lagoons" },
      { icon: "wb_sunny", label: "Year-Round Coastal Microclimate" },
    ],
  },
  vitals: {
    sectionScript: "coastal intelligence & field dispatch...",
    sectionTitle: "Midigama At A Glance: Tidepools, Swell & Terrain",
    sectionDeck:
      "Essential field notes and coastal conditions for unhurried morning tidal walks, reef break timing, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
          image: "/images/experiences/beaches/midigama-beach/Rocky_Sandy_Cove_Aerial_View.jpg",
      imageAlt: "Rocky sandy cove aerial view at Midigama",
      topBadge: "Rocky Sandy Cove",
      distanceBadge: "1.4 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Low Tide: 06:30 – 10:00 AM",
      title: "Rocky Sandy Cove & Reef Shelf",
      description:
        "An aerial glimpse of Midigama's rocky sandy cove, where granite outcrops, reef shelves, and turquoise shallows shape the shoreline's calm tidal character.",
      facts: [
        { icon: "thermostat", label: "Water Temp: 28°C / 82°F" },
        { icon: "footprint", label: "Reef Footwear Loaned at Portico" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Tidal Rhythm",
        title: "Prime Swell & Water Window",
        pill: "Dawn & Twilight",
        description:
          "Glassy dawn sessions between 06:00 – 09:30 AM with offshore sea breezes. Evening golden hour peelers from 17:00 PM onwards bathed in amber coastal light.",
        left: { icon: "air", label: "Light offshore breezes" },
        right: "Crystalline clarity",
      },
      {
        icon: "surfing",
        eyebrow: "Surf Lineup",
        title: "The Iconic Breaks & Lagoon",
        pill: "All Levels",
        description:
          "Lazy Left provides peeling longboard walls for intermediate surfers, while Rams yields hollow, fast rights over shallow reef. Sheltered calm inside lagoons offer peaceful swimming.",
        left: { icon: "waves", label: "Lazy Left & Rams Reef" },
        right: "Gentle reef entry",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Concierge",
      coordinates: "1.4 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just steps from the shore in Gandara, NOONNA BEACH HOTEL can be reached via Jayabodiya Road just off the main coastal route. Minutes by local tuk-tuk or a scenic coastal walk along the southern beachfront.",
      mapsHref: "https://maps.app.goo.gl/X8YDfKbJBeZ8Km168",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20Midigama%20tide%20and%20surf%20updates.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "unhurried coastal journeys...",
    sectionTitle: "Getting to Midigama Beach & Surf Breaks",
    sectionDeck:
      "Positioned just 1.4 kilometers along Sri Lanka's southern shoreline between Kumbalgama and Weligama, reaching Midigama's legendary surf points, lazy reefs, and roadside king coconut stalls is an effortless, scenic ritual. Choose your preferred pace:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "1.4 km along Matara Coastal Road",
        durationBadge: "~4 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "/images/experiences/beaches/midigama-beach/midigama-tuk-tuk-safari.jpg",
        imageAlt: "Sri Lankan safari tuk-tuk with surfboard racks along coastal road near Midigama",
        description:
          "Our front desk team connects you directly with trusted Kumbalgama tuk-tuk drivers. Enjoy a breezy open-air ride past waving palm canopies and roadside thambili stalls.",
        leftNote: "Standard fare: 300–400 LKR",
        rightNote: "Hotel gate pickup",
      },
      {
        title: "Coastal Cruisers",
        subtitle: "Scenic village interior path",
        durationBadge: "~6 mins • Complimentary",
        icon: "pedal_bike",
        iconLabel: "Guest Quiver Bike",
        image:
          "/images/experiences/beaches/midigama-beach/midigama-coastal-cruisers.jpg",
        imageAlt: "Vintage coastal cruiser bicycles with surfboard side carriers on golden sands",
        description:
          "Pedal along tranquil inland lanes through quiet cinnamon gardens and coastal coconut groves, bypassing highway bustle with our curated cruisers bikes with front surf racks.",
        leftNote: "Complimentary for guests",
        rightNote: "Locks & racks provided",
        featured: true,
      },
      {
        title: "Low-Tide Shoreline Stroll",
        subtitle: "Barefoot beach walk along coves",
        durationBadge: "~15 mins",
        icon: "footprint",
        iconLabel: "Tideline Walk",
        image:
          "/images/experiences/beaches/midigama-beach/midigama-low-tide-walk.jpg",
        imageAlt: "Couple walking along golden sand shoreline in Weligama near Midigama",
        description:
          "Tuck your sandals in hand and walk westward along the golden tide line during morning low tide. Pass serene shallow rock pools and greeting local stilt fishermen.",
        leftNote: "Best at low tide (06:30–09:00 AM)",
        rightNote: "Reef shoes handy",
      },
      {
        title: "Coastal Train Journey",
        subtitle: "Direct southern railway line",
        durationBadge: "1.2 km away",
        icon: "train",
        iconLabel: "Midigama Halt Station",
        image:
          "/images/experiences/beaches/midigama-beach/midigama-coastal-train.jpg",
        imageAlt: "Scenic coastal railway and shoreline landscape near Midigama station",
        description:
          "Midigama's quaint colonial open-air railway halt offers scenic connections towards the UNESCO Galle Fort (35 mins) or Colombo along the ocean tracks.",
        leftNote: "Tickets at station (~80–120 LKR)",
        rightNote: "Ocean vistas",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Midigama",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-7",
        image: "/images/experiences/beaches/midigama-beach/Rocky_Sandy_Cove_Aerial_View.jpg",
        imageAlt: "Rocky Sandy Cove Aerial View",
        topBadge: "Aerial Cove",
        topBadgeRight: "1.4 km from hotel",
        script: "reef & shoreline...",
        title: "Rocky Sandy Cove Aerial View",
        description:
          "An overhead view of Midigama's rocky sandy cove, where reef textures and clear coastal water meet the shoreline.",
      },
      {
        span: "lg:col-span-5",
          image: "/images/experiences/beaches/midigama-beach/Couple_Walking_Along_Tropical_Shoreline.webp",
        imageAlt: "Couple Walking Along Tropical Shoreline",
        topBadge: "Shoreline Walk",
        topBadgeRight: "Palm Fringed Coast",
        script: "barefoot moments...",
        title: "Couple Walking Along Tropical Shoreline",
        description:
          "A quiet walk along the tropical shoreline, framed by palms and the easy rhythm of the southern coast.",
      },
      {
        span: "lg:col-span-5",
          image: "/images/experiences/beaches/midigama-beach/Watching_Ocean_Sunset_on_Beach.jpg",
        imageAlt: "Watching Ocean Sunset on Beach",
        topBadge: "Golden Hour",
        topBadgeRight: "Sunset Cove",
        script: "evening glow...",
        title: "Watching Ocean Sunset on Beach",
        description:
          "A calm moment watching the ocean at sunset as warm light settles over the beach.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/midigama-beach/Palm_Fringed_Sandy_Beach_Coastline.webp",
        imageAlt: "Palm Fringed Sandy Beach Coastline",
        topBadge: "Coastal Panorama",
        topBadgeRight: "Midigama Shore",
        script: "palm-lined sands...",
        title: "Palm Fringed Sandy Beach Coastline",
        description:
          "A sweeping view of Midigama's palm-fringed sandy beach coastline, capturing the relaxed character of the shore.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Midigama. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "koggala-lake-cinnamon-island",
        filter: "heritage",
        image:
          NEUTRAL_IMAGE_PLACEHOLDER,
        imageAlt: "Koggala Lake serene lagoon boat safari through mangroves and cinnamon island",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "8.4 km",
        categoryIcon: "waves",
        category: "Wildlife & Estuary",
        title: "Koggala Lake & Cinnamon Island",
        description:
          "Peaceful wooden catamaran cruises gliding past bird-rich mangrove channels, quiet hermitages, and organic cinnamon peelers.",
        footerLeft: "Dawn birdwatching safaris",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "mirissa-whale-watching",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuASH_yMHWtTPBRF1eqeiXfC-9AZLYvIxwi3P-xAwihEGAQPYCqhbVgE8CCUgxiIfsCoT6CsLa0wgXl5zuAyTVzKQoI8OoFHZYo-F3huY7ojQRtHQwMm20BQ1-WUtrujf8NFnGW5f1HWFG49r8vmukOkDB0RNq4WH0gyOrpkm5F-3UGHZs4eG3DxqlXakhU7RhupQMt_USSSgWrjlWdymUTERkbSO9nzTNJFLUZ-iO2OL4BJV4bZ17KcBg",
        imageAlt: "Mirissa Whale Watching majestic blue whale tail off the southern coast",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "6.5 km",
        categoryIcon: "waves",
        category: "Wildlife & Ocean Safaris",
        title: "Mirissa Whale Watching",
        description:
          "Encounter gentle blue whales, playful spinner dolphins, and sea turtles across open Indian Ocean waters on morning marine expeditions.",
        footerLeft: "Dawn offshore boat departures",
        href: "/experiences",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "ahangama-beach",
        filter: "beaches",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ahangama turquoise reef breaks and palm-lined shoreline",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.8 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Ahangama Beach",
        description:
          "Iconic reef breaks, vibrant oceanfront cafes, and traditional stilt fishermen along a lively coastline.",
        footerLeft: "Great for surf sessions & sunset cafes",
        href: "/experiences/ahangama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "polhena-tidal-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Sheltered natural tidal pool along the southern coast",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "17.5 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Polhena Natural Pool",
        description:
          "Reef-sheltered turquoise water forming a calm natural swimming pool, perfect for an unhurried afternoon dip.",
        footerLeft: "Best in settled seas",
        href: "/experiences",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Midigama Outing?",
    deck: "Our team will arrange a trusted local driver, provide custom reef booties, pack chilled king coconuts in cooler packs, and ensure boards are waiting for your morning tide.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Midigama%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const abimanagamaBase = BEACH_DESTINATIONS.find((d) => d.slug === "abimanagama-beach");

export const ABIMANAGAMA_BEACH_DETAIL: DestinationDetail = {
  slug: "abimanagama-beach",
  name: abimanagamaBase?.name ?? "Abimanagama Beach",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Secluded Cove", "Coastal Lagoon"],
  distanceLabel: "1.7 km from Noonna",
  hero: {
        image: "/images/experiences/beaches/abimanagama-beach/Scenic_Sandy_Bay_and_Coastal_Cliff.webp",
    imageAlt: "Scenic sandy bay and coastal cliff at Abimanagama Beach",
    script: "quiet shores & gentle coastal waters...",
    title: "Abimanagama Beach & Secluded Cove",
    deck: "A tranquil sandy hideaway featuring calm low-tide lagoons, swaying palm canopies, and unhurried coastal solitude.",
    meta: [
      { icon: "location_on", label: "Southern Province, Midigama East / Weligama" },
      { icon: "pool", label: "Sheltered Sandy Cove & Fringing Reef" },
      { icon: "wb_sunny", label: "Best Conditions: November – April" },
    ],
  },
  vitals: {
    sectionScript: "field notes & coastal intelligence...",
    sectionTitle: "Abimanagama At A Glance: Tidepools & Terrain",
    sectionDeck:
      "Field notes for peaceful morning shoreline walks, calm low-tide dipping pools, and quick journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/abimanagama-beach/Sunlit_Rocky_Headland_and_Shoreline.webp",
      imageAlt: "Sunlit rocky headland and shoreline at Abimanagama Beach",
      topBadge: "Rocky Headland Shoreline",
      distanceBadge: "1.7 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Low Tide: 06:30 – 10:00 AM",
      title: "Sunlit Rocky Headland & Shoreline",
      description:
        "A sunlit rocky headland meeting gentle shoreline waters, offering a clear view of Abimanagama's coastal terrain and calm tidal character.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Approx)" },
        { icon: "footprint", label: "Reef Shoes Recommended at Low Tide" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Water Window",
        title: "Best Swimming Window",
        pill: "Morning Low Tide",
        description:
          "Glassy morning conditions between 06:30 – 10:00 AM yield gentle, clear water for swimming. Golden hour brings soft light and cooler coastal breezes.",
        left: { icon: "air", label: "Light offshore sea breeze" },
        right: "High water clarity",
      },
      {
        icon: "surfing",
        eyebrow: "Cove Character",
        title: "Cove & Surf Character",
        pill: "Beginner / Relaxed",
        description:
          "Soft beach breaks and easy ocean entry suitable for longboard sessions or casual dips, sheltered from heavier outer swell.",
        left: { icon: "waves", label: "Sandy beach entry" },
        right: "Low crowd density",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "1.7 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Positioned 2.9 km east along the Matara Coastal Road (A2) towards Weligama. Easily reached via a short 5-minute tuk-tuk ride or a scenic 11-minute coastal bicycle cruise.",
      mapsHref: "https://maps.app.goo.gl/7fSnS9QP8AqMa29r7",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20beach%20and%20tide%20updates%20for%20Abimanagama.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Abimanagama Beach",
    sectionDeck:
      "Located 2.9 km east of Noonna Beach Hotel along the southern coastal road, reaching Abimanagama's quiet cove is simple and fast:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "2.9 km along Matara Coastal Road (A2)",
        durationBadge: "~5 mins",
        icon: "electric_rickshaw",
        iconLabel: "Quick Ride",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Open-air tuk-tuk ride along Sri Lanka coastal road",
        description:
          "Enjoy a quick, breezy ride along the coastal palm strip. Drivers can drop you directly at Abimanagama Road leading to the shoreline.",
        leftNote: "Estimated fare: 400–500 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Bicycle Ride",
        subtitle: "Inland village & coastal lanes",
        durationBadge: "~11 mins",
        icon: "pedal_bike",
        iconLabel: "Scenic Cruise",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cruiser bicycle parked by golden sand beach",
        description:
          "Pedal along gentle coastal lanes and village paths, bypassing main road traffic with front-basket or rack-equipped bikes.",
        leftNote: "Bikes subject to hotel availability",
        rightNote: "Locks provided",
        featured: true,
      },
      {
        title: "Shoreline Stroll",
        subtitle: "Beach & roadside tideline stroll",
        durationBadge: "~30 mins",
        icon: "footprint",
        iconLabel: "Coastal Walk",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Stroll along golden tide line in southern Sri Lanka",
        description:
          "Walk eastward along the coastal margin at low tide, taking in roadside coconut stalls and glimpses of local fishing boats.",
        leftNote: "Best during morning hours",
        rightNote: "Sun protection recommended",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Abimanagama",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-7 lg:row-span-2",
    image: "/images/experiences/beaches/abimanagama-beach/Scenic_Sandy_Bay_and_Coastal_Cliff.webp",
        imageAlt: "Scenic Sandy Bay and Coastal Cliff",
        topBadge: "Coastal Bay",
        topBadgeRight: "1.7 km from Noonna",
        script: "secluded shoreline...",
        title: "Scenic Sandy Bay and Coastal Cliff",
        description:
          "A sweeping view of Abimanagama's sandy bay framed by a coastal cliff and calm turquoise water.",
      },
      {
        span: "lg:col-span-5",
        image: "/images/experiences/beaches/abimanagama-beach/Family_and_Outrigger_Canoe_on_Tropical_Beach.webp",
        imageAlt: "Family and Outrigger Canoe on Tropical Beach",
        topBadge: "Beach Life",
        topBadgeRight: "Golden Sands",
        script: "coastal moments...",
        title: "Family and Outrigger Canoe on Tropical Beach",
        description:
          "A family moment beside a traditional outrigger canoe resting on the tropical beach.",
      },
      {
        span: "lg:col-span-5",
        image: "/images/experiences/beaches/abimanagama-beach/Golden_Sandy_Beach_and_Turquoise_Waves.webp",
        imageAlt: "Golden Sandy Beach and Turquoise Waves",
        topBadge: "Turquoise Shore",
        topBadgeRight: "Gentle Waves",
        script: "sunlit sands...",
        title: "Golden Sandy Beach and Turquoise Waves",
        description:
          "Golden sand meeting clear turquoise waves along Abimanagama's quiet shoreline.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/abimanagama-beach/Dramatic_Coastal_Cliffs_and_Rocky_Shore.webp",
        imageAlt: "Dramatic Coastal Cliffs and Rocky Shore",
        topBadge: "Rocky Coast",
        topBadgeRight: "Headland Views",
        script: "wild edge...",
        title: "Dramatic Coastal Cliffs and Rocky Shore",
        description:
          "Dramatic coastal cliffs and a rocky shore shaping the rugged character of the cove.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/abimanagama-beach/Vibrant_Sunset_Over_Palm_Fringed_Beach.webp",
        imageAlt: "Vibrant Sunset Over Palm Fringed Beach",
        topBadge: "Golden Hour",
        topBadgeRight: "Sunset Quiet",
        script: "evening glow...",
        title: "Vibrant Sunset Over Palm Fringed Beach",
        description:
          "A vibrant sunset casting warm color over the palm-fringed beach at Abimanagama.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Abimanagama. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "ahangama-beach",
        filter: "beaches",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ahangama turquoise reef breaks and palm-lined shoreline",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.8 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Ahangama Beach",
        description:
          "Iconic reef breaks, vibrant oceanfront cafes, and traditional stilt fishermen along a lively coastline.",
        footerLeft: "Great for surf sessions & sunset cafes",
        href: "/experiences/ahangama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Abimanagama Outing?",
    deck: "Our team can arrange a local driver, provide fresh towels, pack chilled king coconuts, and advise on optimal tide times for your visit.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Abimanagama%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const weligamaBase = BEACH_DESTINATIONS.find((d) => d.slug === "weligama-beach");

export const WELIGAMA_BEACH_DETAIL: DestinationDetail = {
  slug: "weligama-beach",
  name: weligamaBase?.name ?? "Weligama Beach",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Sandy Bay Break", "Beginner Surf Haven"],
  distanceLabel: "3.5 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/weligama-beach/Golden_Sunset_Over_Weligama_Coast.webp",
    imageAlt: "Golden sunset over Weligama coast",
    script: "broad golden bay & forgiving waves...",
    title: "Weligama Bay & Sandy Crescent",
    deck: "Sri Lanka's quintessential surf haven—a wide, golden sand bay featuring forgiving sandbar waves, beginner surf schools, and coastal views toward Taprobane Island.",
    meta: [
      { icon: "location_on", label: "Southern Province, Weligama Bay" },
      { icon: "surfing", label: "Sand-Bottom Beach Break & Gentle Inside Rollers" },
      { icon: "wb_sunny", label: "Prime Season: November – April" },
    ],
  },
  vitals: {
    sectionScript: "field notes & bay intelligence...",
    sectionTitle: "Weligama At A Glance: Sandbars, Swell & Shoreline",
    sectionDeck:
      "Field notes and coastal conditions for morning surf lessons, unhurried beach walks, and effortless excursions from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/weligama-beach/Sunset_Glow_Over_Palm_Fringed_Shore.webp",
      imageAlt: "Sunset glow over palm fringed shore at Weligama Bay",
      topBadge: "Palm-Fringed Sunset Shore",
      distanceBadge: "3.5 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Best Light: 06:00 – 09:30 AM & 17:00 – 18:30 PM",
      title: "Sunset Glow Over Palm-Fringed Shore",
      description:
        "A palm-lined Weligama shoreline bathed in warm sunset light, where gentle bay waves meet soft sand and a relaxed coastal evening atmosphere.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "surfing", label: "Softboard & Rashguard Recommended" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Surf Window",
        title: "Prime Surf & Water Window",
        pill: "Dawn & Golden Hour",
        description:
          "Glassy dawn sessions between 06:00 – 09:30 AM yield light offshore sea breezes. Late afternoon sessions offer soft amber twilight lighting and consistent sandbar peelers.",
        left: { icon: "air", label: "Gentle offshore winds" },
        right: "Sandbar clarity",
      },
      {
        icon: "surfing",
        eyebrow: "Bay Character",
        title: "The Bay Breaks & Taprobane",
        pill: "All Levels / Beginner Friendly",
        description:
          "Gentle whitewash inside for beginner practice, while steady A-frame sandbar peaks near central bay provide long, smooth rides for longboards.",
        left: { icon: "waves", label: "Sand beach break" },
        right: "Easy sandy entry",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "3.5 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "About 3.5 km east along Matara Coastal Road (A2) towards Weligama. Around 6 minutes by tuk-tuk or 14 minutes by bicycle from Noonna.",
      mapsHref: "https://maps.app.goo.gl/Cnv9bM1WtPMbeVaH8",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20a%20surf%20instructor%20or%20transfer%20to%20Weligama%20Bay.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Weligama Bay",
    sectionDeck:
      "Positioned 3.5 km east of Noonna Beach Hotel along the southern coastal road, reaching Weligama's expansive bay and surf line is a quick, scenic trip:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "3.5 km along Matara Coastal Road (A2)",
        durationBadge: "~6 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Tuk-tuk ride along Sri Lankan coastal road near Weligama",
        description:
          "Hop in an open-air tuk-tuk equipped with surfboard racks for a quick ride past coastal views and fruit stalls directly to the beach front.",
        leftNote: "Estimated fare: 400–600 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Inland village & coastal paths",
        durationBadge: "~14 mins",
        icon: "pedal_bike",
        iconLabel: "Guest Quiver Bike",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Cruiser bicycles parked along Weligama coastal strip",
        description:
          "Pedal along peaceful backstreets and cinnamon-scented lanes into Weligama Bay, avoiding main highway busyness with front-racked bikes.",
        leftNote: "Bikes subject to hotel availability",
        rightNote: "Racks & locks provided",
        featured: true,
      },
      {
        title: "Coastal Train Connection",
        subtitle: "Kumbalgama Station to Weligama Station",
        durationBadge: "~4 mins",
        icon: "train",
        iconLabel: "Southern Railway",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Scenic coastal train traveling toward Weligama Railway Station",
        description:
          "Board at nearby Kumbalgama Halt for a quick, scenic 1-stop coastal train ride into Weligama town center, steps from the bay.",
        leftNote: "Tickets at station (~80–120 LKR)",
        rightNote: "Ocean view tracks",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Weligama Bay",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-7 lg:row-span-2",
        image: "/images/experiences/beaches/weligama-beach/Weligama_Beach_Coastal_Aerial_View.webp",
        imageAlt: "Weligama Beach Coastal Aerial View",
        topBadge: "Aerial Bay",
        topBadgeRight: "3.5 km from Noonna",
        script: "crescent coastline...",
        title: "Weligama Beach Coastal Aerial View",
        description:
          "An aerial perspective of Weligama Bay's broad sandy crescent, calm turquoise water, and lively coastal shoreline.",
      },
      {
        span: "lg:col-span-5",
        image: "/images/experiences/beaches/weligama-beach/Golden_Sunset_Over_Weligama_Coast.webp",
        imageAlt: "Golden Sunset Over Weligama Coast",
        topBadge: "Golden Hour",
        topBadgeRight: "Evening Coast",
        script: "sunset glow...",
        title: "Golden Sunset Over Weligama Coast",
        description:
          "Warm sunset light settling over the Weligama coastline, casting golden tones across the bay.",
      },
      {
        span: "lg:col-span-5",
        image: "/images/experiences/beaches/weligama-beach/Aerial_View_of_Surfers_in_Turquoise_Bay.webp",
        imageAlt: "Aerial View of Surfers in Turquoise Bay",
        topBadge: "Surf Lineup",
        topBadgeRight: "Turquoise Water",
        script: "gentle swells...",
        title: "Aerial View of Surfers in Turquoise Bay",
        description:
          "Surfers spread across Weligama's turquoise bay, riding soft waves along the sandy-bottom break.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/weligama-beach/Coastal_Rock_Breakwater_and_Ocean_Waves.webp",
        imageAlt: "Coastal Rock Breakwater and Ocean Waves",
        topBadge: "Breakwater",
        topBadgeRight: "Ocean Edge",
        script: "shoreline rhythm...",
        title: "Coastal Rock Breakwater and Ocean Waves",
        description:
          "Ocean waves meeting the coastal rock breakwater along Weligama's working shoreline.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/weligama-beach/Fishing_Boats_Anchored_in_Coastal_Bay.webp",
        imageAlt: "Fishing Boats Anchored in Coastal Bay",
        topBadge: "Harbour Life",
        topBadgeRight: "Anchored Boats",
        script: "coastal heritage...",
        title: "Fishing Boats Anchored in Coastal Bay",
        description:
          "Traditional fishing boats resting at anchor in the sheltered coastal bay near Weligama.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/weligama-beach/Traditional_Stilt_Fishermen_at_Dusk.webp",
        imageAlt: "Traditional Stilt Fishermen at Dusk",
        topBadge: "Living Tradition",
        topBadgeRight: "Dusk Silhouettes",
        script: "stilt fishing...",
        title: "Traditional Stilt Fishermen at Dusk",
        description:
          "Stilt fishermen silhouetted at dusk, reflecting one of the southern coast's iconic traditions.",
      },
      {
        span: "lg:col-span-12",
        image: "/images/experiences/beaches/weligama-beach/Sunset_Glow_Over_Palm_Fringed_Shore.webp",
        imageAlt: "Sunset Glow Over Palm Fringed Shore",
        topBadge: "Palm-Fringed Shore",
        topBadgeRight: "Twilight Glow",
        script: "evening calm...",
        title: "Sunset Glow Over Palm Fringed Shore",
        description:
          "A wide view of Weligama's palm-fringed shore glowing in warm sunset light.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Weligama. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "abimanagama-beach",
        filter: "beaches",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Calm turquoise waters and golden sand cove at Abimanagama Beach",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "2.9 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Abimanagama Beach",
        description: "A peaceful sandy cove with calm low-tide dip pools and unhurried coastal views.",
        footerLeft: "Ideal for unhurried morning swims",
        href: "/experiences/abimanagama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "ahangama-beach",
        filter: "beaches",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ahangama turquoise reef breaks and palm-lined shoreline",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.8 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Ahangama Beach",
        description:
          "Iconic reef breaks, vibrant oceanfront cafes, and traditional stilt fishermen along a lively coastline.",
        footerLeft: "Great for surf sessions & sunset cafes",
        href: "/experiences/ahangama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Weligama Surf & Beach Outing?",
    deck: "Our team can arrange a local driver, connect you with certified surf instructors, pack chilled king coconuts, and advise on wave timing.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Weligama%20surf%20and%20beach%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const ahangamaBase = BEACH_DESTINATIONS.find((d) => d.slug === "ahangama-beach");

export const AHANGAMA_BEACH_DETAIL: DestinationDetail = {
  slug: "ahangama-beach",
  name: ahangamaBase?.name ?? "Ahangama Beach",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Reef Point Breaks", "Boho Coastal Town"],
  distanceLabel: "3.8 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/ahangama-beach/Ahangama_Coastline_Sunset_Aerial_View.webp",
    imageAlt: "Ahangama coastline sunset aerial view",
    script: "boho surf vibes & steady reef peelers...",
    title: "Ahangama Beach & Surf Lineup",
    deck: "The vibrant surf epicenter of Sri Lanka's southern coast—renowned for iconic reef breaks, oceanfront cafes, stilt fishermen, and golden sunset views.",
    meta: [
      { icon: "location_on", label: "Southern Province, Ahangama" },
      { icon: "surfing", label: "A-Frame Reef Breaks & Sandy Coves" },
      { icon: "wb_sunny", label: "Prime Season: November – April" },
    ],
  },
  vitals: {
    sectionScript: "field notes & surf intelligence...",
    sectionTitle: "Ahangama At A Glance: Reef Breaks & Coastal Vibe",
    sectionDeck:
      "Field notes and coastal conditions for morning reef sessions, vibrant cafe hops, and quick journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/ahangama-beach/Overcast_Day_at_Ahangama_Beach.webp",
      imageAlt: "Overcast day at Ahangama Beach with reef and shoreline",
      topBadge: "Reef & Shoreline View",
      distanceBadge: "3.8 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Swell: 06:00 – 09:30 AM & 16:30 – 18:30 PM",
      title: "Overcast Day at Ahangama Beach",
      description:
        "A moody coastal view of Ahangama's shoreline and reef under soft overcast light, capturing the area's rugged surf character and relaxed beach atmosphere.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Reef Booties Recommended for Outer Breaks" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Surf Window",
        title: "Prime Swell & Light Window",
        pill: "Dawn Patrol & Sunset",
        description:
          "Glassy early morning sessions between 06:00 – 09:30 AM before afternoon sea breezes pick up. Late golden hour brings warm amber light and mellow peelers.",
        left: { icon: "air", label: "Light offshore sea breeze" },
        right: "High water clarity",
      },
      {
        icon: "surfing",
        eyebrow: "Break Character",
        title: "Reef & Beach Break Lineup",
        pill: "Intermediate to Advanced",
        description:
          "Consistent lefts and rights peeling over shallow reef ledges for experienced surfers, with sandy beach entries available inside sheltered coves.",
        left: { icon: "waves", label: "Sticks & Marshmallow Reefs" },
        right: "Reef & sand channel entries",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "3.8 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Positioned ~3.8 km west along the Matara Coastal Road (A2). Reached in a 7-minute tuk-tuk ride or a 15-minute coastal bicycle ride through quiet back lanes.",
      mapsHref: "https://maps.app.goo.gl/ZMevFYvCWWBkVnwp9",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20surf%20updates%20and%20cafe%20recommendations%20for%20Ahangama.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Ahangama Beach",
    sectionDeck:
      "Located 3.8 km west of Noonna Beach Hotel along the southern coastal road, reaching Ahangama's surf breaks and coastal spots is an easy journey:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "3.8 km along Matara Coastal Road (A2)",
        durationBadge: "~7 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Ride",
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Open-air tuk-tuk with surfboards driving toward Ahangama",
        description:
          "Enjoy a breezy ride west past coastal palm grooves and fruit stands. Drivers can drop you directly at your preferred surf break or beach cafe.",
        leftNote: "Estimated fare: 400–600 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Inland village & coastal paths",
        durationBadge: "~15 mins",
        icon: "pedal_bike",
        iconLabel: "Scenic Cruise",
        image:
          "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cruiser bicycle parked near Ahangama beach",
        description:
          "Pedal along peaceful back lanes, bypassing highway traffic on bicycles equipped with surfboard side racks.",
        leftNote: "Bikes subject to hotel availability",
        rightNote: "Locks provided",
        featured: true,
      },
      {
        title: "Coastal Train Trip",
        subtitle: "Midigama Station to Ahangama Station",
        durationBadge: "~5 mins",
        icon: "train",
        iconLabel: "Southern Railway",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Coastal train heading toward Ahangama Railway Station",
        description:
          "Catch a quick 1-stop coastal train ride westward to Ahangama Halt, dropping you right in the center of town near cafes and beaches.",
        leftNote: "Tickets at station (~80–120 LKR)",
        rightNote: "Ocean views along the track",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Ahangama",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-7 lg:row-span-2",
        image: "/images/experiences/beaches/ahangama-beach/Ahangama_Coastline_Sunset_Aerial_View.webp",
        imageAlt: "Ahangama Coastline Sunset Aerial View",
        topBadge: "Sunset Aerial",
        topBadgeRight: "3.8 km from Noonna",
        script: "coastline glow...",
        title: "Ahangama Coastline Sunset Aerial View",
        description:
          "An aerial view of Ahangama's coastline bathed in sunset light, revealing the sweep of shore, reef, and ocean.",
      },
      {
        span: "lg:col-span-5",
        image: "/images/experiences/beaches/ahangama-beach/Ahangama_Beach_Coastal_Aerial_View.webp",
        imageAlt: "Ahangama Beach Coastal Aerial View",
        topBadge: "Aerial Coast",
        topBadgeRight: "Reef & Shore",
        script: "from above...",
        title: "Ahangama Beach Coastal Aerial View",
        description:
          "A broad aerial look at Ahangama's beach and coastal waters, showing the curve of sand and reef-lined sea.",
      },
      {
        span: "lg:col-span-5",
        image: "/images/experiences/beaches/ahangama-beach/Traditional_Stilt_Fishermen_at_Coast.webp",
        imageAlt: "Traditional Stilt Fishermen at Coast",
        topBadge: "Living Tradition",
        topBadgeRight: "Stilt Fishing",
        script: "heritage & sea...",
        title: "Traditional Stilt Fishermen at Coast",
        description:
          "Traditional stilt fishermen along the Ahangama coast, a distinctive scene of the southern shoreline.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/ahangama-beach/Scenic_Ocean_Waves_and_Coastal_Horizon.webp",
        imageAlt: "Scenic Ocean Waves and Coastal Horizon",
        topBadge: "Open Horizon",
        topBadgeRight: "Rolling Waves",
        script: "ocean rhythm...",
        title: "Scenic Ocean Waves and Coastal Horizon",
        description:
          "Rolling ocean waves stretching to the coastal horizon, capturing Ahangama's open sea character.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/ahangama-beach/Ahangama_Headland_and_Rocky_Shoreline.webp",
        imageAlt: "Ahangama Headland and Rocky Shoreline",
        topBadge: "Rocky Headland",
        topBadgeRight: "Coastal Edge",
        script: "rugged shore...",
        title: "Ahangama Headland and Rocky Shoreline",
        description:
          "Ahangama's headland and rocky shoreline where textured rock meets moving coastal water.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/ahangama-beach/Fishing_Boats_Anchored_on_Ahangama_Beach.webp",
        imageAlt: "Fishing Boats Anchored on Ahangama Beach",
        topBadge: "Harbour Life",
        topBadgeRight: "Anchored Boats",
        script: "coastal craft...",
        title: "Fishing Boats Anchored on Ahangama Beach",
        description:
          "Fishing boats anchored along Ahangama Beach, reflecting the area's working coastal life.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/ahangama-beach/Sandy_Shoreline_and_Tropical_Trees_at_Ahangama.webp",
        imageAlt: "Sandy Shoreline and Tropical Trees at Ahangama",
        topBadge: "Sandy Shore",
        topBadgeRight: "Tropical Trees",
        script: "palm-lined sands...",
        title: "Sandy Shoreline and Tropical Trees at Ahangama",
        description:
          "A sandy shoreline edged by tropical trees, offering a calm, leafy corner of Ahangama.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/ahangama-beach/Overcast_Day_at_Ahangama_Beach.webp",
        imageAlt: "Overcast Day at Ahangama Beach",
        topBadge: "Moody Coast",
        topBadgeRight: "Soft Light",
        script: "coastal calm...",
        title: "Overcast Day at Ahangama Beach",
        description:
          "A quiet, overcast day at Ahangama Beach with soft light over the shore and sea.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/ahangama-beach/Rocky_Shoreline_and_Crashing_Waves_at_Ahangama.webp",
        imageAlt: "Rocky Shoreline and Crashing Waves at Ahangama",
        topBadge: "Crashing Waves",
        topBadgeRight: "Rocky Shore",
        script: "wild surf...",
        title: "Rocky Shoreline and Crashing Waves at Ahangama",
        description:
          "Waves crashing against Ahangama's rocky shoreline, highlighting the energy of the reef coast.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Ahangama. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "abimanagama-beach",
        filter: "beaches",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Calm turquoise waters and golden sand cove at Abimanagama Beach",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "2.9 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Abimanagama Beach",
        description: "A peaceful sandy cove with calm low-tide dip pools and unhurried coastal views.",
        footerLeft: "Ideal for unhurried morning swims",
        href: "/experiences/abimanagama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Ahangama Outing?",
    deck: "Our concierge team can arrange tuk-tuk transport, recommend popular surf spots or cafes, and organize reef booties or board rentals.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Ahangama%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const lazyLeftBase = BEACH_DESTINATIONS.find((d) => d.slug === "lazy-left-surf-break");

export const LAZY_LEFT_SURF_BREAK_DETAIL: DestinationDetail = {
  slug: "lazy-left-surf-break",
  name: lazyLeftBase?.name ?? "Lazy Left Surf Break",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Iconic Reef Break", "Longboard Haven"],
  distanceLabel: "1.5 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/lazy-left-surf-break/Lazy_Left_Surf_Break_Aerial_Coastline.webp",
    imageAlt: "Aerial coastline view of Lazy Left surf break at Midigama",
    script: "endless left walls & glassy dawn swells...",
    title: "Lazy Left Surf Break",
    deck: "Sri Lanka's legendary long-peeling left-hand reef break—celebrated for forgiving shoulders, long walls, and ideal conditions for longboards and progression.",
    meta: [
      { icon: "location_on", label: "Southern Province, Midigama" },
      { icon: "surfing", label: "Deep Reef Left Point Break" },
      { icon: "wb_sunny", label: "Prime Season: November – April" },
    ],
  },
  vitals: {
    sectionScript: "surf intelligence & swell dispatch...",
    sectionTitle: "Lazy Left At A Glance: Swell, Reef & Rhythm",
    sectionDeck:
      "Essential field notes and wave conditions for morning dawn patrols, reef navigation, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/lazy-left-surf-break/Lazy_Left_Beach_Bathers_and_Umbrellas.webp",
      imageAlt: "Beach bathers and umbrellas near Lazy Left at Midigama",
      topBadge: "Beachside Shore Scene",
      distanceBadge: "1.5 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Window: 06:00 – 09:30 AM (Low to Mid Tide)",
      title: "Lazy Left Beach Bathers and Umbrellas",
      description:
        "A relaxed view of beachgoers and umbrellas along the Lazy Left shore, capturing the easygoing seaside atmosphere beside Midigama's surf lineup.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Reef Booties Recommended for Outer Shelf" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Swell Window",
        title: "Prime Swell & Wind Window",
        pill: "Dawn & Offshore",
        description:
          "Glassy dawn sessions between 06:00 – 09:30 AM with offshore North-Northeast (NNE) winds and South-Southwest (SSW) groundswells.",
        left: { icon: "air", label: "Light offshore NNE winds" },
        right: "SSW groundswell alignment",
      },
      {
        icon: "surfing",
        eyebrow: "Break Specs",
        title: "Wave Character & Suitability",
        pill: "Intermediate / Longboard",
        description:
          "Works best from 3 to 8 feet. Provides a friendly channel for paddling back out and long, walling rides favored by longboarders and progressive shortboarders.",
        left: { icon: "waves", label: "Left-hand reef break" },
        right: "Easy beach channel entry",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "1.5 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "About 1.5 km west along Matara Coastal Road (A2) in Midigama. Around 3 minutes by tuk-tuk or 5 minutes by bicycle from Noonna.",
      mapsHref: "https://maps.app.goo.gl/6BAipJAkShgEmCMFA",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20Lazy%20Left%20swell%20and%20tide%20updates.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Lazy Left Surf Break",
    sectionDeck:
      "Positioned 1.5 km west of Noonna Beach Hotel along the southern coastal road, reaching Midigama's premier surf lineup is quick and effortless:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "1.5 km along Matara Coastal Road (A2)",
        durationBadge: "~3 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Tuk-tuk with surfboard racks heading toward Midigama surf breaks",
        description:
          "Our front desk connects you with local drivers for a fast, breezy ride straight to the Midigama beachfront facing Lazy Left.",
        leftNote: "Estimated fare: 300–400 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Scenic coastal lane path",
        durationBadge: "~5 mins",
        icon: "pedal_bike",
        iconLabel: "Guest Quiver Bike",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Cruiser bicycle with surfboard racks parked near Midigama beach",
        description:
          "Pedal down short coastal roads on our custom cruiser bikes outfitted with secure front surf racks.",
        leftNote: "Complimentary for guests (subject to availability)",
        rightNote: "Locks & racks provided",
        featured: true,
      },
      {
        title: "Low-Tide Shoreline Stroll",
        subtitle: "Barefoot beach walk along coves",
        durationBadge: "~15 mins",
        icon: "footprint",
        iconLabel: "Tideline Walk",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Shoreline walking view along Midigama coastal coves",
        description:
          "Take a leisurely morning barefoot walk westward along the golden tide line during low tide, enjoying ocean views all the way.",
        leftNote: "Best during morning low tide",
        rightNote: "Reef shoes recommended",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Lazy Left",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/lazy-left-surf-break/Lazy_Left_Surf_Break_Aerial_Coastline.webp",
        imageAlt: "Lazy Left Surf Break Aerial Coastline",
        topBadge: "Aerial Coastline",
        topBadgeRight: "1.5 km from Noonna",
        script: "reef from above...",
        title: "Lazy Left Surf Break Aerial Coastline",
        description:
          "An aerial view of the Lazy Left coastline at Midigama, showing the surf break, reef, and shoreline stretching along the southern coast.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/lazy-left-surf-break/Surfers_Riding_Lazy_Left_Wave.webp",
        imageAlt: "Surfers Riding Lazy Left Wave",
        topBadge: "Surf Lineup",
        topBadgeRight: "Peeling Lefts",
        script: "morning rides...",
        title: "Surfers Riding Lazy Left Wave",
        description:
          "Surfers riding a clean left-hand wave at Lazy Left, capturing the smooth, peeling character of the break.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/lazy-left-surf-break/Lazy_Left_Beach_Bathers_and_Umbrellas.webp",
        imageAlt: "Lazy Left Beach Bathers and Umbrellas",
        topBadge: "Beachside Scene",
        topBadgeRight: "Shoreline Relaxation",
        script: "easygoing shore...",
        title: "Lazy Left Beach Bathers and Umbrellas",
        description:
          "Beach bathers and umbrellas along the Lazy Left shore, reflecting the relaxed seaside atmosphere beside the surf.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/lazy-left-surf-break/Surfers_Near_Midigama_Islet.webp",
        imageAlt: "Surfers Near Midigama Islet",
        topBadge: "Islet & Lineup",
        topBadgeRight: "Coastal Panorama",
        script: "ocean horizon...",
        title: "Surfers Near Midigama Islet",
        description:
          "Surfers in the water near the Midigama islet, with open ocean views framing this iconic stretch of coastline.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Lazy Left. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "abimanagama-beach",
        filter: "beaches",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Calm turquoise waters and golden sand cove at Abimanagama Beach",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "2.9 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Abimanagama Beach",
        description: "A peaceful sandy cove with calm low-tide dip pools and unhurried coastal views.",
        footerLeft: "Ideal for unhurried morning swims",
        href: "/experiences/abimanagama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "ahangama-beach",
        filter: "beaches",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ahangama turquoise reef breaks and palm-lined shoreline",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.8 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Ahangama Beach",
        description:
          "Iconic reef breaks, vibrant oceanfront cafes, and traditional stilt fishermen along a lively coastline.",
        footerLeft: "Great for surf sessions & sunset cafes",
        href: "/experiences/ahangama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Lazy Left Surf Session?",
    deck: "Our team will arrange reliable tuk-tuk transport, check live tide and swell reports, provide reef booties, and ensure your morning gear is ready.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Lazy%20Left%20surf%20session.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const ramsRightBase = BEACH_DESTINATIONS.find((d) => d.slug === "rams-right-surf-break");

export const RAMS_RIGHT_SURF_BREAK_DETAIL: DestinationDetail = {
  slug: "rams-right-surf-break",
  name: ramsRightBase?.name ?? "Rams Right Surf Break",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Shallow Reef Barrel", "Advanced Surf Spot"],
  distanceLabel: "1.6 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/rams-right-surf-break/Surfers_Catching_Waves_in_Shallow_Waters.webp",
    imageAlt: "Surfers catching waves in shallow waters at Rams Right",
    script: "hollow barrels & technical right walls...",
    title: "Rams Right Surf Break",
    deck: "Sri Lanka's most iconic heavy right-hand barrel—a punchy, fast reef break offering short, technical rides and pristine tubes for confident surfers.",
    meta: [
      { icon: "location_on", label: "Southern Province, Midigama" },
      { icon: "surfing", label: "Shallow Right Reef Barrel" },
      { icon: "wb_sunny", label: "Prime Season: November – March" },
    ],
  },
  vitals: {
    sectionScript: "surf intelligence & barrel dispatch...",
    sectionTitle: "Rams Right At A Glance: Swell, Reef & Lineup",
    sectionDeck:
      "Essential field notes and wave conditions for morning barrel sessions, reef navigation, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/rams-right-surf-break/Surfer_Riding_Wave_at_Sunset.webp",
      imageAlt: "Surfer riding a wave at sunset at Rams Right",
      topBadge: "Sunset Ride",
      distanceBadge: "1.6 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Window: 06:00 – 09:00 AM (Mid Tide)",
      title: "Surfer Riding Wave at Sunset",
      description:
        "A surfer carving along a wave at sunset, capturing the warm evening light and energetic surf character of Rams Right.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Reef Booties Strongly Recommended" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Swell Window",
        title: "Prime Swell & Wind Window",
        pill: "Dawn Patrol & Offshore",
        description:
          "Glassy early morning sessions between 06:00 – 09:00 AM with clean Northeast (NE) offshore winds and South-Southwest (SSW) groundswells.",
        left: { icon: "air", label: "Clean NE offshore winds" },
        right: "SSW groundswell alignment",
      },
      {
        icon: "surfing",
        eyebrow: "Break Specs",
        title: "Wave Character & Suitability",
        pill: "Intermediate to Advanced",
        description:
          "Works best from 2 to 8 feet. Features a condensed takeoff zone with an easy roadside channel paddle-out directly in front of local cafes.",
        left: { icon: "waves", label: "Right-hand reef barrel" },
        right: "Roadside channel entry",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "1.6 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just 1.4 km west along Matara Coastal Road (A2). 4 minutes by open-air tuk-tuk safari or 15 minutes barefoot stroll at low tide.",
      mapsHref: "https://maps.app.goo.gl/WNvd5u5TLcYy9Enj7",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20Rams%20Right%20swell%20and%20tide%20updates.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Rams Right Surf Break",
    sectionDeck:
      "Positioned 1.6 km west of Noonna Beach Hotel along the southern coastal road, reaching Midigama's premier barrel spot is quick and straightforward:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "1.6 km along Matara Coastal Road (A2)",
        durationBadge: "~3 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Tuk-tuk with surfboard racks heading toward Midigama surf spots",
        description:
          "Our front desk connects you with trusted local drivers for a fast ride straight to the roadside viewing area and paddle-out channel at Rams.",
        leftNote: "Estimated fare: 300–400 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Scenic coastal lane path",
        durationBadge: "~6 mins",
        icon: "pedal_bike",
        iconLabel: "Guest Quiver Bike",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Cruiser bicycle with surfboard racks parked near Midigama coast",
        description:
          "Pedal down short coastal roads on our custom cruiser bikes outfitted with secure front surf racks.",
        leftNote: "Complimentary for guests (subject to availability)",
        rightNote: "Locks & racks provided",
        featured: true,
      },
      {
        title: "Low-Tide Shoreline Stroll",
        subtitle: "Barefoot beach walk along coves",
        durationBadge: "~15 mins",
        icon: "footprint",
        iconLabel: "Tideline Walk",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Shoreline walking view along Midigama coastal coves",
        description:
          "Take a leisurely morning barefoot walk westward along the golden tide line during low tide, enjoying ocean views all the way.",
        leftNote: "Best during morning low tide",
        rightNote: "Reef booties recommended",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Rams Right",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/rams-right-surf-break/Surfers_Catching_Waves_in_Shallow_Waters.webp",
        imageAlt: "Surfers Catching Waves in Shallow Waters",
        topBadge: "Reef Lineup",
        topBadgeRight: "1.6 km from Noonna",
        script: "shallow-water rides...",
        title: "Surfers Catching Waves in Shallow Waters",
        description:
          "Surfers catching waves in the shallow waters at Rams Right, with clear turquoise conditions over the reef.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/rams-right-surf-break/Noonna_Beach_Hotel_and_Coastline_Aerial_View.webp",
        imageAlt: "Noonna Beach Hotel and Coastline Aerial View",
        topBadge: "Aerial Coastline",
        topBadgeRight: "Hotel & Shore",
        script: "from above...",
        title: "Noonna Beach Hotel and Coastline Aerial View",
        description:
          "An aerial view of Noonna Beach Hotel and the surrounding coastline near Rams Right on Sri Lanka's southern shore.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/rams-right-surf-break/Surfer_Riding_Wave_at_Sunset.webp",
        imageAlt: "Surfer Riding Wave at Sunset",
        topBadge: "Golden Hour",
        topBadgeRight: "Sunset Session",
        script: "evening glow...",
        title: "Surfer Riding Wave at Sunset",
        description:
          "A surfer riding a wave at Rams Right as warm sunset light reflects across the water.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/rams-right-surf-break/Surfer_Walking_Down_Tropical_Path_with_Board.webp",
        imageAlt: "Surfer Walking Down Tropical Path with Board",
        topBadge: "Coastal Path",
        topBadgeRight: "Board in Hand",
        script: "path to the break...",
        title: "Surfer Walking Down Tropical Path with Board",
        description:
          "A surfer carrying a board along a tropical path toward the shoreline, setting out for a session at Rams Right.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Rams Right. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "lazy-left-surf-break",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Lazy Left surf break peeling wave in Midigama",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Lazy Left Surf Break",
        description: "Sri Lanka's legendary longboard left-hand wave, offering smooth peeling walls and easy paddle channels.",
        footerLeft: "Ideal for dawn patrol & longboard sessions",
        href: "/experiences/lazy-left-surf-break",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "ahangama-beach",
        filter: "beaches",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ahangama turquoise reef breaks and palm-lined shoreline",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.8 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Ahangama Beach",
        description:
          "Iconic reef breaks, vibrant oceanfront cafes, and traditional stilt fishermen along a lively coastline.",
        footerLeft: "Great for surf sessions & sunset cafes",
        href: "/experiences/ahangama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Rams Right Surf Session?",
    deck: "Our team will arrange reliable tuk-tuk transport, check live swell and wind conditions, provide reef booties, and ensure your morning gear is ready.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Rams%20Right%20surf%20session.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const aweeCocoBase = BEACH_DESTINATIONS.find((d) => d.slug === "awee-coco-secret-pool");

export const AWEE_COCO_SECRET_POOL_DETAIL: DestinationDetail = {
  slug: "awee-coco-secret-pool",
  name: aweeCocoBase?.name ?? "Awee Coco Secret Pool",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Secluded Tidal Pools", "Natural Saltwater Bath"],
  distanceLabel: "2.8 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/awee-coco-secret-pool/Group_Surf_Lesson_on_Weligama_Beach.webp",
    imageAlt: "Group surf lesson on Weligama Beach near Awee Coco",
    script: "hidden tidal basins & serene palm shade...",
    title: "Awee Coco Secret Pool",
    deck: "A secluded coastal sanctuary featuring natural granite saltwater dipping baths, sheltered turquoise tide pools, and tranquil shaded palm groves.",
    meta: [
      { icon: "location_on", label: "Southern Province, Midigama East" },
      { icon: "pool", label: "Natural Volcanic Granite Tide Pools" },
      { icon: "wb_sunny", label: "Best at Morning Low Tide" },
    ],
  },
  vitals: {
    sectionScript: "field notes & tide intelligence...",
    sectionTitle: "Awee Coco At A Glance: Tidepools, Swell & Terrain",
    sectionDeck:
      "Essential field notes and coastal conditions for unhurried morning soak sessions, reef navigation, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/awee-coco-secret-pool/Clifftop_Infinity_Pool_Overlooking_Weligama_Coast.webp",
      imageAlt: "Clifftop infinity pool overlooking Weligama coast",
      topBadge: "Clifftop Coastal View",
      distanceBadge: "2.8 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Best Light: Morning & Late Afternoon",
      title: "Clifftop Infinity Pool Overlooking Weligama Coast",
      description:
        "A clifftop infinity pool with sweeping views over the Weligama coastline, capturing the elevated coastal scenery near Awee Coco.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Reef Footwear Recommended for Rocky Areas" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Tidal Rhythm",
        title: "Prime Tide & Light Window",
        pill: "Dawn & Morning Low Tide",
        description:
          "Glassy morning soak sessions between 06:30 – 10:00 AM during low tide provide maximum water clarity and protection from surf swells.",
        left: { icon: "air", label: "Light offshore morning breezes" },
        right: "Crystalline pool clarity",
      },
      {
        icon: "pool",
        eyebrow: "Pool Character",
        title: "Immersion & Sanctuary Character",
        pill: "Peaceful & Secluded",
        description:
          "Calm, shallow saltwater pools ideal for gentle stretching, mindful breathing, and quiet relaxation sheltered beneath swaying coconut palms.",
        left: { icon: "waves", label: "Outer reef wave buffer" },
        right: "Shaded rock ledges",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "2.8 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just 1.6 km west along the Matara Coastal Road (A2). Reachable in a 3-minute open-air tuk-tuk safari or a 5-minute coastal bicycle cruise to Awee Coco Secret Pool Surf Point.",
      mapsHref: "https://maps.app.goo.gl/CCDnMHh7qBNg2DCj8",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20Awee%20Coco%20tide%20and%20access%20updates.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Awee Coco Secret Pool",
    sectionDeck:
      "Positioned 2.8 kilometers along Sri Lanka's southern shoreline, reaching this hidden tide pool sanctuary is a short, scenic trip:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "2.8 km along Matara Coastal Road (A2)",
        durationBadge: "~4 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Open-air tuk-tuk ride along coastal road near secret pool location",
        description:
          "Our front desk connects you directly with trusted drivers for a quick, breezy ride past palm canopies straight to the coastal footpath.",
        leftNote: "Estimated fare: 350–450 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Scenic village interior path",
        durationBadge: "~10 mins",
        icon: "pedal_bike",
        iconLabel: "Guest Quiver Bike",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Vintage coastal cruiser bicycle parked near quiet shore path",
        description:
          "Pedal along tranquil inland lanes through quiet coconut groves, bypassing highway bustle with our curated cruiser bikes.",
        leftNote: "Complimentary for guests (subject to availability)",
        rightNote: "Locks provided",
        featured: true,
      },
      {
        title: "Low-Tide Shoreline Stroll",
        subtitle: "Barefoot beach walk along coves",
        durationBadge: "~20 mins",
        icon: "footprint",
        iconLabel: "Tideline Walk",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Couple walking along golden sand shoreline near coastal tide pools",
        description:
          "Tuck your sandals in hand and walk westward along the golden tide line during morning low tide. Pass serene shallow rock pools and coastal flora.",
        leftNote: "Best at low tide (06:30–09:00 AM)",
        rightNote: "Reef shoes handy",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Awee Coco",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/awee-coco-secret-pool/Surfers_Riding_Waves_at_Coco_Surf_Point.webp",
        imageAlt: "Surfers Riding Waves at Coco Surf Point",
        topBadge: "Surf Point",
        topBadgeRight: "Coco Break",
        script: "rolling swells...",
        title: "Surfers Riding Waves at Coco Surf Point",
        description:
          "Surfers riding waves at Coco Surf Point, capturing the lively surf scene near Awee Coco.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/awee-coco-secret-pool/Group_Surf_Lesson_on_Weligama_Beach.webp",
        imageAlt: "Group Surf Lesson on Weligama Beach",
        topBadge: "Surf Lesson",
        topBadgeRight: "Sandy Shore",
        script: "learn to surf...",
        title: "Group Surf Lesson on Weligama Beach",
        description:
          "A group surf lesson underway on Weligama Beach, with instructors guiding beginners in gentle conditions.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/awee-coco-secret-pool/Beginner_Surf_Coaching_on_Sandy_Shore.webp",
        imageAlt: "Beginner Surf Coaching on Sandy Shore",
        topBadge: "Coaching",
        topBadgeRight: "Beginner Waves",
        script: "first rides...",
        title: "Beginner Surf Coaching on Sandy Shore",
        description:
          "Beginner surf coaching on the sandy shore, focused on building confidence in the shallows.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/awee-coco-secret-pool/Secluded_Palm_Fringed_Beach_and_Pool_Aerial.webp",
        imageAlt: "Secluded Palm Fringed Beach and Pool Aerial",
        topBadge: "Aerial Cove",
        topBadgeRight: "Palm-Fringed Shore",
        script: "hidden sanctuary...",
        title: "Secluded Palm Fringed Beach and Pool Aerial",
        description:
          "An aerial view of a secluded palm-fringed beach and pool, highlighting Awee Coco's tucked-away coastal setting.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/awee-coco-secret-pool/Awee_Coco_Secret_Pool_Surf_Point.webp",
        imageAlt: "Awee Coco Secret Pool Surf Point",
        topBadge: "Surf Point",
        topBadgeRight: "Secret Pool",
        script: "coastal landmark...",
        title: "Awee Coco Secret Pool Surf Point",
        description:
          "A view of Awee Coco Secret Pool Surf Point, where coastal scenery and surf culture meet.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/awee-coco-secret-pool/Clifftop_Infinity_Pool_Overlooking_Weligama_Coast.webp",
        imageAlt: "Clifftop Infinity Pool Overlooking Weligama Coast",
        topBadge: "Clifftop View",
        topBadgeRight: "Weligama Coast",
        script: "elevated outlook...",
        title: "Clifftop Infinity Pool Overlooking Weligama Coast",
        description:
          "An infinity pool perched above the coastline, offering sweeping views over Weligama's shoreline and ocean.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Awee Coco. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "lazy-left-surf-break",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Lazy Left surf break peeling wave in Midigama",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Lazy Left Surf Break",
        description: "Sri Lanka's legendary longboard left-hand wave, offering smooth peeling walls and easy paddle channels.",
        footerLeft: "Ideal for dawn patrol & longboard sessions",
        href: "/experiences/lazy-left-surf-break",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "rams-right-surf-break",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Rams Right surf break barrel in Midigama",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.6 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Rams Right Surf Break",
        description: "Midigama's heavy, short, and hollow right-hand reef barrel for experienced surfers seeking technical tubes.",
        footerLeft: "Ideal for morning barrel sessions",
        href: "/experiences/rams-right-surf-break",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Awee Coco Outing?",
    deck: "Our team will arrange a trusted local driver, provide custom reef booties, pack chilled king coconuts in cooler packs, and ensure towels are ready for your morning soak.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Awee%20Coco%20pool%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const secretJungleBase = BEACH_DESTINATIONS.find((d) => d.slug === "secret-jungle-beach");

export const SECRET_JUNGLE_BEACH_DETAIL: DestinationDetail = {
  slug: "secret-jungle-beach",
  name: secretJungleBase?.name ?? "Secret Jungle Beach",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Hidden Cove", "Jungle Canopy Shore"],
  distanceLabel: "2.1 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/secret-jungle-beach/Palm_Fringed_Jungle_Beach_and_Rocky_Shoreline.webp",
    imageAlt: "Palm-fringed jungle beach and rocky shoreline at Secret Jungle Beach",
    script: "shaded jungle canopy & untamed shoreline...",
    title: "Secret Jungle Beach",
    deck: "A hidden coastal cove sheltered by overhanging tropical foliage, ancient granite boulders, and unhurried southern solitude.",
    meta: [
      { icon: "location_on", label: "Southern Province, Weligama Coast" },
      { icon: "park", label: "Palm-Fringed Cove & Rocky Shoreline" },
      { icon: "wb_sunny", label: "Best in Morning & Late Afternoon Light" },
    ],
  },
  vitals: {
    sectionScript: "field notes & coastal intelligence...",
    sectionTitle: "Secret Jungle Beach At A Glance: Canopy & Cove",
    sectionDeck:
      "Essential field notes and coastal conditions for shaded morning shoreline strolls, secluded tidal exploration, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/secret-jungle-beach/Weligama_Secret_Jungle_Beach_Cove_and_Boat.webp",
      imageAlt: "Weligama Secret Jungle Beach cove with a boat near the shoreline",
      topBadge: "Secluded Jungle Cove",
      distanceBadge: "2.1 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Best Light: Morning & Late Afternoon",
      title: "Secret Jungle Beach Cove and Shoreline",
      description:
        "A sheltered jungle-fringed cove where turquoise water meets a quiet sandy shoreline, with a small boat resting near the beach and lush greenery framing the scene.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Sturdy Footwear Recommended for Trail and Rocks" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Shade Window",
        title: "Prime Shade & Light Window",
        pill: "Morning Canopy Light",
        description:
          "Early morning hours between 06:30 – 10:00 AM provide cool shade under the tropical foliage and pristine, glassy water conditions in the cove.",
        left: { icon: "air", label: "Cool jungle breeze" },
        right: "Natural canopy shade",
      },
      {
        icon: "pool",
        eyebrow: "Cove Character",
        title: "Sanctuary & Seclusion Character",
        pill: "Private & Untamed",
        description:
          "An intimate stretch of sand flanked by greenery, ideal for quiet reading, reflective morning walks, and peaceful saltwater wading.",
        left: { icon: "waves", label: "Calm sheltered waters" },
        right: "Natural rock buffers",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "2.1 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just 2.1 km west along the Matara Coastal Road (A2). Reachable in a 4-minute open-air tuk-tuk safari or a 7-minute coastal bicycle cruise to Weligama Secret Jungle Beach.",
      mapsHref: "https://maps.app.goo.gl/KPaEdnqpMcRWrrHu8",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20send%20Secret%20Jungle%20Beach%20access%20details.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Secret Jungle Beach",
    sectionDeck:
      "Positioned 3.4 kilometers along Sri Lanka's southern coastline, reaching this hidden jungle haven is a short, scenic journey:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "3.4 km along Matara Coastal Road (A2)",
        durationBadge: "~5 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Open-air tuk-tuk ride along coastal road near Secret Jungle Beach",
        description:
          "Our front desk connects you directly with trusted drivers for a quick, breezy ride past palm canopies straight to the shaded jungle trail entry.",
        leftNote: "Estimated fare: 400–500 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Scenic village interior path",
        durationBadge: "~12 mins",
        icon: "pedal_bike",
        iconLabel: "Guest Quiver Bike",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Vintage coastal cruiser bicycle parked near quiet shaded path",
        description:
          "Pedal along tranquil inland lanes through quiet coconut groves, bypassing highway bustle with our curated cruiser bikes.",
        leftNote: "Complimentary for guests (subject to availability)",
        rightNote: "Locks provided",
        featured: true,
      },
      {
        title: "Low-Tide Shoreline Stroll",
        subtitle: "Barefoot beach walk along coves",
        durationBadge: "~25 mins",
        icon: "footprint",
        iconLabel: "Tideline Walk",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
        imageAlt: "Shoreline walking view along southern coastal coves",
        description:
          "Tuck your sandals in hand and walk westward along the golden tide line during morning low tide, passing serene rock formations.",
        leftNote: "Best at low tide (06:30–09:00 AM)",
        rightNote: "Sturdy footwear handy",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Secret Jungle Beach",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/secret-jungle-beach/Weligama_Coastal_Peninsula_and_Secret_Beach_Aerial.webp",
        imageAlt: "Weligama Coastal Peninsula and Secret Beach Aerial",
        topBadge: "Aerial View",
        topBadgeRight: "Coastal Peninsula",
        script: "from above...",
        title: "Weligama Coastal Peninsula and Secret Beach Aerial",
        description:
          "An aerial view of the Weligama coastal peninsula revealing the secret beach tucked along the shoreline.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/secret-jungle-beach/Weligama_Secret_Jungle_Beach_Cove_and_Boat.webp",
        imageAlt: "Weligama Secret Jungle Beach Cove and Boat",
        topBadge: "Jungle Cove",
        topBadgeRight: "Shoreline Boat",
        script: "hidden inlet...",
        title: "Weligama Secret Jungle Beach Cove and Boat",
        description:
          "A quiet jungle-fringed cove with a small boat resting by the shoreline in clear coastal water.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/secret-jungle-beach/Secret_Jungle_Beach_Lagoon_at_Dusk.webp",
        imageAlt: "Secret Jungle Beach Lagoon at Dusk",
        topBadge: "Dusk Light",
        topBadgeRight: "Lagoon Calm",
        script: "evening hush...",
        title: "Secret Jungle Beach Lagoon at Dusk",
        description:
          "Soft dusk light settling over the Secret Jungle Beach lagoon, casting a calm glow across the water and shore.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/secret-jungle-beach/Palm_Fringed_Jungle_Beach_and_Rocky_Shoreline.webp",
        imageAlt: "Palm Fringed Jungle Beach and Rocky Shoreline",
        topBadge: "Palm Fringe",
        topBadgeRight: "Rocky Shore",
        script: "untamed coast...",
        title: "Palm Fringed Jungle Beach and Rocky Shoreline",
        description:
          "Palm trees lining a jungle-backed beach beside a rocky shoreline, showing the cove's natural coastal character.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Secret Jungle Beach. Explore the living heritage, secret tidal pools, spice trails, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "ahangama-beach",
        filter: "beaches",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ahangama turquoise reef breaks and palm-lined shoreline",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.8 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Ahangama Beach",
        description:
          "Iconic reef breaks, vibrant oceanfront cafes, and traditional stilt fishermen along a lively coastline.",
        footerLeft: "Great for surf sessions & sunset cafes",
        href: "/experiences/ahangama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Secret Jungle Beach Outing?",
    deck: "Our team will arrange trusted transport, provide trail guidance, pack chilled king coconuts in cooler packs, and ensure towels are ready.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Secret%20Jungle%20Beach%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const polhenaBase = BEACH_DESTINATIONS.find((d) => d.slug === "polhena-beach-coral-reef");

export const POLHENA_BEACH_CORAL_REEF_DETAIL: DestinationDetail = {
  slug: "polhena-beach-coral-reef",
  name: polhenaBase?.name ?? "Polhena Beach & Coral Reef",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Coral Lagoon", "Snorkeling & Sea Turtles"],
  distanceLabel: "2.4 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/polhena-beach-coral-reef/Beach_Loungers_and_Stilt_Fishermen_at_Polhena.webp",
    imageAlt: "Beach loungers and stilt fishermen at Polhena Beach",
    script: "protected coral lagoons & gentle sea turtles...",
    title: "Polhena Beach & Coral Reef",
    deck: "A reef-sheltered natural swimming lagoon in Matara featuring crystal-clear turquoise shallows, vibrant coral gardens, and resident green sea turtles.",
    meta: [
      { icon: "location_on", label: "Southern Province, Matara" },
      { icon: "pool", label: "Offshore Coral Barrier & Calm Lagoon" },
      { icon: "wb_sunny", label: "Prime Season: November – April" },
    ],
  },
  vitals: {
    sectionScript: "field notes & reef intelligence...",
    sectionTitle: "Polhena At A Glance: Coral Lagoon & Marine Life",
    sectionDeck:
      "Essential field notes and coastal conditions for morning snorkeling expeditions, calm afternoon dips, and comfortable journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/polhena-beach-coral-reef/Rocky_Shoreline_and_Lighthouse_View_near_Polhena.webp",
      imageAlt: "Rocky shoreline and lighthouse view near Polhena",
      topBadge: "Rocky Coastal View",
      distanceBadge: "2.4 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Best Light: Morning & Late Afternoon",
      title: "Rocky Shoreline and Lighthouse View near Polhena",
      description:
        "A rocky stretch of coastline near Polhena with ocean views toward the lighthouse, showing the rugged coastal character alongside the reef-sheltered beach.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Snorkel & Mask Rentals Available On-Site" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Snorkeling Window",
        title: "Prime Snorkeling & Visibility Window",
        pill: "Morning Calm",
        description:
          "Early morning hours between 07:00 – 11:00 AM provide highest water clarity, calm surface conditions, and active turtle feeding along the seagrass beds.",
        left: { icon: "air", label: "Gentle morning offshore breeze" },
        right: "High underwater visibility",
      },
      {
        icon: "pool",
        eyebrow: "Lagoon Character",
        title: "Lagoon & Marine Character",
        pill: "Family Friendly / Calm",
        description:
          "Waist-deep, wave-free water sheltered by coral walls makes it exceptionally safe for relaxed swimming and beginner snorkeling.",
        left: { icon: "waves", label: "Offshore reef wave buffer" },
        right: "Resident green sea turtles",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "2.4 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just 2.4 km west along the Matara Coastal Road (A2). Reachable in a 5-minute open-air tuk-tuk safari or a 9-minute coastal bicycle cruise to Polhena Beach.",
      mapsHref: "https://maps.app.goo.gl/7oG12aDTcvRtTwwd8",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20transport%20to%20Polhena%20Beach.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Polhena Beach",
    sectionDeck:
      "Positioned 14 kilometers east along Sri Lanka's southern shoreline toward Matara, reaching Polhena's calm coral lagoon is a smooth trip:",
    cards: [
      {
        title: "Hotel-Arranged Transport",
        subtitle: "14 km along Matara Coastal Road (A2)",
        durationBadge: "~22 mins",
        icon: "electric_rickshaw",
        iconLabel: "Direct Transfer",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Comfortable coastal transport heading toward Matara and Polhena",
        description:
          "Our concierge team can arrange a comfortable private car or trusted driver to take you directly to Polhena's main beach entrance.",
        leftNote: "Estimated fare: 1,500–2,000 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
        featured: true,
      },
      {
        title: "Coastal Train Journey",
        subtitle: "Kumbalgama Station to Matara Station",
        durationBadge: "~18 mins + short tuk-tuk",
        icon: "train",
        iconLabel: "Southern Railway",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Scenic coastal railway tracks along southern Sri Lanka",
        description:
          "Take the scenic coastal train from nearby Kumbalgama to Matara terminus, followed by a quick 10-minute local tuk-tuk ride to the beach.",
        leftNote: "Tickets at station (~100–150 LKR)",
        rightNote: "Ocean views along the rail line",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Polhena",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/polhena-beach-coral-reef/Polhena_Beach_Reef_Lagoon_Aerial_View.webp",
        imageAlt: "Polhena Beach Reef Lagoon Aerial View",
        topBadge: "Aerial View",
        topBadgeRight: "Reef Lagoon",
        script: "from above...",
        title: "Polhena Beach Reef Lagoon Aerial View",
        description:
          "An aerial view of Polhena's reef-sheltered lagoon, showing calm turquoise water protected by the coral barrier.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/polhena-beach-coral-reef/Rocky_Shoreline_and_Lighthouse_View_near_Polhena.webp",
        imageAlt: "Rocky Shoreline and Lighthouse View near Polhena",
        topBadge: "Rocky Shore",
        topBadgeRight: "Lighthouse View",
        script: "coastal edge...",
        title: "Rocky Shoreline and Lighthouse View near Polhena",
        description:
          "A rocky shoreline near Polhena with ocean views toward the lighthouse, highlighting the area's rugged coastal scenery.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/polhena-beach-coral-reef/Beach_Loungers_and_Stilt_Fishermen_at_Polhena.webp",
        imageAlt: "Beach Loungers and Stilt Fishermen at Polhena",
        topBadge: "Beachfront",
        topBadgeRight: "Stilt Fishermen",
        script: "shoreline life...",
        title: "Beach Loungers and Stilt Fishermen at Polhena",
        description:
          "Beach loungers along the sand with stilt fishermen in the shallows, capturing a classic Polhena scene.",
      },
      {
        span: "lg:col-span-6",
        image: "/images/experiences/beaches/polhena-beach-coral-reef/Palm_Fringed_Sandy_Shore_at_Polhena_Beach.webp",
        imageAlt: "Palm Fringed Sandy Shore at Polhena Beach",
        topBadge: "Palm Fringe",
        topBadgeRight: "Sandy Shore",
        script: "tropical calm...",
        title: "Palm Fringed Sandy Shore at Polhena Beach",
        description:
          "A palm-fringed sandy stretch at Polhena Beach, lined with coastal greenery beside calm waters.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Polhena’s coral lagoon. Explore surf breaks, secret tidal pools, coastal heritage, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "secret-jungle-beach",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Jungle Beach tropical cove",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.1 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Secret Jungle Beach",
        description: "A secluded coastal haven framed by lush tropical foliage and ancient granite boulders, offering absolute tranquility.",
        footerLeft: "Ideal for shaded morning walks",
        href: "/experiences/secret-jungle-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Polhena Snorkeling Outing?",
    deck: "Our concierge team will arrange comfortable transport, coordinate snorkel gear rentals, and advise on optimal tide and turtle-spotting windows.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Polhena%20snorkeling%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const secretBeachBase = BEACH_DESTINATIONS.find((d) => d.slug === "secret-beach-mirissa");

export const SECRET_BEACH_MIRISSA_DETAIL: DestinationDetail = {
  slug: "secret-beach-mirissa",
  name: secretBeachBase?.name ?? "Secret Beach Mirissa",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Hidden Cove", "Cliffside Snorkeling"],
  distanceLabel: "2.9 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/secret-beach-mirissa/Secret_Beach_Mirissa_Cove_and_Rocks.webp",
    imageAlt: "Secret Beach Mirissa cove and rocks",
    script: "hidden coves & cliffside sunset lookouts...",
    title: "Secret Beach Mirissa",
    deck: "A secluded coastal hideaway tucked behind Mirissa's green headlands, featuring intimate sandy pockets, calm tide pools, and a relaxed cliffside bar.",
    meta: [
      { icon: "location_on", label: "Southern Province, Mirissa West" },
      { icon: "pool", label: "Sheltered Sandy Pockets & Reef Pools" },
      { icon: "wb_sunny", label: "Prime Season: November – April" },
    ],
  },
  vitals: {
    sectionScript: "field notes & cove intelligence...",
    sectionTitle: "Secret Beach At A Glance: Coves, Reefs & Crows",
    sectionDeck:
      "Essential field notes and coastal conditions for morning snorkeling sessions, cliffside relaxation, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/secret-beach-mirissa/Secret_Beach_Mirissa_Aerial_View.webp",
      imageAlt: "Secret Beach Mirissa Aerial View",
      topBadge: "Aerial Cove View",
      distanceBadge: "2.9 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Best Light: Morning & Late Afternoon",
      title: "Secret Beach Mirissa Aerial View",
      description:
        "An aerial view over Secret Beach Mirissa, showing the tucked-away coves, turquoise water, and green headland that frame this hidden stretch of coast.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Reef Shoes Recommended for Rocky Entry" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Snorkel Window",
        title: "Prime Snorkeling & Light Window",
        pill: "Morning Calm",
        description:
          "Early morning hours between 07:00 – 11:00 AM provide glass-calm water, optimal underwater visibility, and peaceful shade before midday sun.",
        left: { icon: "air", label: "Light offshore breeze" },
        right: "High underwater clarity",
      },
      {
        icon: "pool",
        eyebrow: "Cove Character",
        title: "Cove & Atmosphere Character",
        pill: "Intimate & Bohemian",
        description:
          "A relaxed, away-from-it-all atmosphere with shaded seating, hammock spots under palms, and gentle rock-protected wading pools.",
        left: { icon: "waves", label: "Rock-sheltered coves" },
        right: "Cliffside bistro views",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "2.9 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just 2.9 km west along the Matara Coastal Road (A2). Reachable in a 6-minute open-air tuk-tuk safari or a 10-minute coastal bicycle cruise to Secret Beach Mirissa.",
      mapsHref: "https://maps.app.goo.gl/rSpiZSeZGJArgFe37",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20transport%20to%20Secret%20Beach%20Mirissa.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Secret Beach Mirissa",
    sectionDeck:
      "Positioned 6.5 kilometers east along Sri Lanka's southern shoreline toward Mirissa, reaching this hidden cliffside cove is a scenic trip:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "6.5 km along Matara Coastal Road (A2)",
        durationBadge: "~11 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Open-air tuk-tuk ride along coastal road heading toward Mirissa",
        description:
          "Our front desk connects you with trusted drivers for a comfortable ride east along the coastal palm strip, dropping you at the hilltop path leading down to the coves.",
        leftNote: "Estimated fare: 800–1,000 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
        featured: true,
      },
      {
        title: "Private Car Transfer",
        subtitle: "Direct coastal highway route",
        durationBadge: "~10 mins",
        icon: "pedal_bike",
        iconLabel: "Coastal Drive",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Coastal road scenery near Mirissa",
        description:
          "For maximum comfort, our concierge can dispatch a private air-conditioned car to handle the brief morning or afternoon trip.",
        leftNote: "Arranged via concierge",
        rightNote: "Flexible return timing",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Secret Beach",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/secret-beach-mirissa/Secret_Beach_Mirissa_Aerial_View.webp",
        imageAlt: "Secret Beach Mirissa Aerial View",
        topBadge: "Aerial View",
        topBadgeRight: "Hidden Coves",
        script: "from above...",
        title: "Secret Beach Mirissa Aerial View",
        description:
          "An aerial view of Secret Beach Mirissa revealing its tucked-away coves, turquoise water, and surrounding greenery.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/secret-beach-mirissa/Secret_Beach_Mirissa_Coastline_Top_View.webp",
        imageAlt: "Secret Beach Mirissa Coastline Top View",
        topBadge: "Coastline View",
        topBadgeRight: "Rocky Shore",
        script: "coastal contours...",
        title: "Secret Beach Mirissa Coastline Top View",
        description:
          "A top-down view of the Secret Beach Mirissa coastline, showing rocky edges meeting clear coastal waters.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/secret-beach-mirissa/Couple_Splashing_in_Waves_at_Secret_Beach.webp",
        imageAlt: "Couple Splashing in Waves at Secret Beach",
        topBadge: "Shoreline Fun",
        topBadgeRight: "Ocean Waves",
        script: "playful moments...",
        title: "Couple Splashing in Waves at Secret Beach",
        description:
          "A couple splashing in the waves at Secret Beach, capturing the lively shoreline atmosphere.",
      },
      {
        span: "lg:col-span-12",
        image: "/images/experiences/beaches/secret-beach-mirissa/Secret_Beach_Mirissa_Cove_and_Rocks.webp",
        imageAlt: "Secret Beach Mirissa Cove and Rocks",
        topBadge: "Cove & Rocks",
        topBadgeRight: "Secluded Shore",
        script: "hidden sanctuary...",
        title: "Secret Beach Mirissa Cove and Rocks",
        description:
          "A view of Secret Beach Mirissa's cove framed by rocks, highlighting its secluded coastal setting.",
      },
    ],
  },  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Secret Beach Mirissa. Explore surf breaks, hidden coves, coastal heritage, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "polhena-beach-coral-reef",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Polhena Beach natural coral pool",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Polhena Natural Pool",
        description: "Reef-sheltered turquoise water forming a calm natural swimming pool, perfect for an unhurried afternoon dip with sea turtles.",
        footerLeft: "Best in settled seas & morning light",
        href: "/experiences/polhena-beach-coral-reef",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "secret-jungle-beach",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Jungle Beach tropical cove",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.1 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Secret Jungle Beach",
        description: "A secluded coastal haven framed by lush tropical foliage and ancient granite boulders, offering absolute tranquility.",
        footerLeft: "Ideal for shaded morning walks",
        href: "/experiences/secret-jungle-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Secret Beach Outing?",
    deck: "Our concierge team will arrange comfortable tuk-tuk transport, coordinate cafe seating reservations, and ensure your morning towels are packed.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Secret%20Beach%20Mirissa%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const parrotRockBase = BEACH_DESTINATIONS.find((d) => d.slug === "parrot-rock");

export const PARROT_ROCK_DETAIL: DestinationDetail = {
  slug: "parrot-rock",
  name: parrotRockBase?.name ?? "Parrot Rock",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Offshore Islet", "Panoramic Viewpoint"],
  distanceLabel: "5.8 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAdT7cKQ0G9XszZA52Ecr-6t63aKpdlh-Yms2GGNfehpuRUO4OkRFUYNvf3dDRM6Iey1TWrcW1UM2rlZnyiWE__efwJ2_QlXRF7IbxxmTic6UFFD_-vrIZ8lHbtP9EBHKYV44XSEXzRbnXBrJwjFL7hiz6-X4is1HlHG4X4vLFq35BHJywMe549tRuEKgXxpb4WuhcJ-L9tIp3B9oU1RDNs8VmuRAIirDeq8zAGXv1vHFs5-FHuIhJuQ",
    imageAlt: "Parrot Rock rocky islet rising above Mirissa Bay and the Indian Ocean",
    script: "offshore lookout & crashing ocean crests...",
    title: "Parrot Rock Mirissa",
    deck: "A dramatic offshore rocky islet accessible from Mirissa's main beach, offering elevated 360-degree panoramic views across the golden bay and open ocean.",
    meta: [
      { icon: "location_on", label: "Southern Province, Mirissa Bay" },
      { icon: "compass", label: "Offshore Rocky Islet & Viewpoint" },
      { icon: "wb_sunny", label: "Prime Viewing: Low to Mid Tide" },
    ],
  },
  vitals: {
    sectionScript: "field notes & viewpoint intelligence...",
    sectionTitle: "Parrot Rock At A Glance: Islet, Surf & Horizon",
    sectionDeck:
      "Essential field notes and coastal conditions for morning islet climbs, bay observation, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Looking back at Mirissa golden beach from the heights of Parrot Rock",
      topBadge: "Offshore Panoramic Islet",
      distanceBadge: "5.8 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Access: 07:00 – 11:00 AM (Low to Mid Tide)",
      title: "Elevated Bay Lookout & Wave Vantage",
      description:
        "A striking rock formation standing just off the sandy shore. Climbing to its summit provides sweeping vistas of surfers, beach coves, and turquoise horizon waters.",
      facts: [
        { icon: "thermostat", label: "Coastal Breeze: Refreshing Open-Ocean Air" },
        { icon: "footprint", label: "Sturdy Footwear Recommended for Rock Steps" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Access Window",
        title: "Prime Access & Tide Window",
        pill: "Morning Low Tide",
        description:
          "Visiting during morning low to mid tide ensures the safest and easiest crossing from the main sandy beach onto the rock stairway.",
        left: { icon: "air", label: "Refreshing ocean breeze" },
        right: "Safe tide crossing",
      },
      {
        icon: "compass",
        eyebrow: "Vantage Character",
        title: "Islet & Vibe Character",
        pill: "Elevated Lookout",
        description:
          "An invigorating climb yielding unmatched vantage points over Mirissa's sweeping coastline and breaking waves.",
        left: { icon: "waves", label: "Surrounding surf spray" },
        right: "360-degree ocean views",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "5.8 km from Noonna",
      title: "Door-to-Islet Access",
      description:
        "Located ~5.8 km east along the Matara Coastal Road (A2) to Mirissa Beach. Reached in 10 minutes by open-air tuk-tuk.",
      mapsHref: "https://www.google.com/maps/search/?api=1&query=Parrot+Rock+Mirissa+Sri+Lanka",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20transport%20to%20Parrot%20Rock%20Mirissa.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Parrot Rock",
    sectionDeck:
      "Positioned 5.8 kilometers east along Sri Lanka's southern shoreline toward Mirissa, reaching this iconic offshore islet is a quick, scenic trip:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "5.8 km along Matara Coastal Road (A2)",
        durationBadge: "~10 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Open-air tuk-tuk ride along coastal road heading toward Mirissa beach",
        description:
          "Our front desk connects you directly with trusted drivers for a fast ride east along the coastal palm strip, dropping you directly at Mirissa main beach.",
        leftNote: "Estimated fare: 700–900 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
        featured: true,
      },
      {
        title: "Private Car Transfer",
        subtitle: "Direct coastal highway route",
        durationBadge: "~10 mins",
        icon: "pedal_bike",
        iconLabel: "Coastal Drive",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Coastal road scenery near Mirissa",
        description:
          "Enjoy a comfortable air-conditioned private car transfer arranged by our concierge for your morning or afternoon excursion.",
        leftNote: "Arranged via concierge",
        rightNote: "Flexible return timing",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Parrot Rock",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAAdT7cKQ0G9XszZA52Ecr-6t63aKpdlh-Yms2GGNfehpuRUO4OkRFUYNvf3dDRM6Iey1TWrcW1UM2rlZnyiWE__efwJ2_QlXRF7IbxxmTic6UFFD_-vrIZ8lHbtP9EBHKYV44XSEXzRbnXBrJwjFL7hiz6-X4is1HlHG4X4vLFq35BHJywMe549tRuEKgXxpb4WuhcJ-L9tIp3B9oU1RDNs8VmuRAIirDeq8zAGXv1vHFs5-FHuIhJuQ",
        imageAlt: "Parrot Rock offshore islet rising above Mirissa Bay surf",
        topBadge: "08:00 AM • Morning View",
        topBadgeRight: "5.8 km from hotel",
        script: "ocean lookout...",
        title: "Summit Vista over Mirissa Bay",
        description: "Panoramic views looking back toward the golden crescent beach and rolling waves.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Waves crashing against the rocky base of Parrot Rock",
        topBadge: "Wave Action",
        topBadgeRight: "Surrounding Surf",
        script: "spray & stone...",
        title: "Crashing Surf Below",
        description: "Dynamic ocean swells breaking dramatically against the rocky base of the islet.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Shallow water crossing leading to Parrot Rock at low tide",
        topBadge: "Low-Tide Crossing",
        topBadgeRight: "Sand Spit",
        script: "path & tide...",
        title: "Islet Access Walkway",
        description: "The natural sand spit and shallow crossing connecting the mainland to Parrot Rock.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Amber golden hour sunset glow over Parrot Rock Mirissa",
        topBadge: "18:00 PM • Sunset Glow",
        topBadgeRight: "Golden Hour",
        script: "evening light...",
        title: "Twilight Ocean Horizon",
        description: "Warm evening twilight washing over the offshore rock and surrounding bay waters.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Parrot Rock. Explore surf breaks, hidden coves, coastal heritage, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "secret-beach-mirissa",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Beach Mirissa hidden cove",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.9 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Secret Beach Mirissa",
        description: "A secluded coastal hideaway featuring intimate sandy pockets, calm tide pools, and a relaxed cliffside bar.",
        footerLeft: "Ideal for morning snorkeling & cliffside views",
        href: "/experiences/secret-beach-mirissa",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "polhena-beach-coral-reef",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Polhena Beach natural coral pool",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Polhena Natural Pool",
        description: "Reef-sheltered turquoise water forming a calm natural swimming pool, perfect for an unhurried afternoon dip with sea turtles.",
        footerLeft: "Best in settled seas & morning light",
        href: "/experiences/polhena-beach-coral-reef",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Parrot Rock Outing?",
    deck: "Our concierge team will arrange comfortable transport, check optimal low-tide crossing times, and ensure your morning towels or camera gear are packed.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Parrot%20Rock%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

const mirissaPromontoryBase = BEACH_DESTINATIONS.find((d) => d.slug === "mirissa-coastal-promontory");

export const MIRISSA_COASTAL_PROMONTORY_DETAIL: DestinationDetail = {
  slug: "mirissa-coastal-promontory",
  name: mirissaPromontoryBase?.name ?? "Mirissa Coastal Promontory",
  breadcrumbCategory: "Beaches & Surf",
  categoryLabel: "Beaches & Surf",
  tags: ["Iconic Viewpoint", "Coastal Promontory"],
  distanceLabel: "3.1 km from Noonna",
  hero: {
    image: "/images/experiences/beaches/mirissa-coastal-promontory/Mirissa_Coastal_Promontory_Aerial_View_at_Dusk.webp",
    imageAlt: "Aerial view of Mirissa coastal promontory at dusk",
    script: "dramatic red cliffs & swaying crown palms...",
    title: "Mirissa Coastal Promontory",
    deck: "Sri Lanka's quintessential southern panorama—a dramatic red-earth cliff dome crowned with soaring palms overlooking crashing Indian Ocean swells.",
    meta: [
      { icon: "location_on", label: "Southern Province, Mirissa East" },
      { icon: "compass", label: "Coastal Promontory & Viewpoint" },
      { icon: "wb_sunny", label: "Prime Viewing: Dawn & Golden Hour" },
    ],
  },
  vitals: {
    sectionScript: "field notes & viewpoint intelligence...",
    sectionTitle: "Mirissa Coastal Promontory At A Glance: Panorama & Terrain",
    sectionDeck:
      "Essential field notes and coastal conditions for dawn photography sessions, golden hour walks, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image: "/images/experiences/beaches/mirissa-coastal-promontory/Sunset_Silhouettes_at_Mirissa_Coconut_Hill.webp",
      imageAlt: "Sunset silhouettes at Mirissa Coconut Hill",
      topBadge: "Sunset Silhouette Viewpoint",
      distanceBadge: "3.1 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Window: Sunrise & Golden Hour Sunset",
      title: "Palm Silhouettes Against the Ocean Sunset",
      description:
        "Slender coconut palms standing against a glowing sunset sky, framing views over the Mirissa coastline and the Indian Ocean horizon.",
      facts: [
        { icon: "thermostat", label: "Coastal Breeze: Refreshing On-Shore Air" },
        { icon: "footprint", label: "Easy Coastal Path & Hillside Access" },
      ],
    },
    cards: [
      {
        icon: "schedule",
        eyebrow: "Viewpoint Window",
        title: "Prime Viewing & Lighting Window",
        pill: "Dawn & Sunset Golden Hour",
        description:
          "Early morning hours between 06:00 – 07:30 AM offer serene, uncrowded lighting and soft pastel skies. Evening golden hour brings vibrant amber sunset reflections.",
        left: { icon: "air", label: "Fresh coastal sea breeze" },
        right: "Panoramic 360° horizon",
      },
      {
        icon: "compass",
        eyebrow: "Promontory Character",
        title: "Promontory & Vibe Character",
        pill: "Photographic Landmark",
        description:
          "An open, breezy hilltop platform offering unobstructed views of ocean swells crashing against the red cliff base and surrounding coconut groves.",
        left: { icon: "waves", label: "Crashing ocean swell below" },
        right: "Iconic palm silhouettes",
      },
    ],
    intel: {
      eyebrow: "Direct Access & Navigation",
      coordinates: "3.1 km from Noonna",
      title: "Door-to-Shore Navigation",
      description:
        "Just 3.1 km west along the Matara Coastal Road (A2). Reachable in a 6-minute open-air tuk-tuk safari or a 11-minute coastal bicycle cruise to Mirissa Coastal Promontory.",
      mapsHref: "https://maps.app.goo.gl/p6qbtF3DszuEL2jPA",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20transport%20to%20Mirissa%20Coastal%20Promontory.",
      hostLabel: "WhatsApp Host",
    },
  },
  transit: {
    sectionScript: "effortless journeys...",
    sectionTitle: "Getting to Mirissa Coastal Promontory",
    sectionDeck:
      "Positioned 3.1 kilometers west along Sri Lanka's southern shoreline toward Mirissa, reaching this iconic palm promontory is a quick, scenic trip:",
    cards: [
      {
        title: "Local Tuk-Tuk Safari",
        subtitle: "3.1 km along Matara Coastal Road (A2)",
        durationBadge: "~6 mins",
        icon: "electric_rickshaw",
        iconLabel: "Open-Air Safari",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Open-air tuk-tuk ride along coastal road heading toward Mirissa viewpoint",
        description:
          "Our front desk connects you directly with trusted drivers for a fast ride along the coastal road, dropping you steps away from the hillside access path.",
        leftNote: "Estimated fare: 400–600 LKR (confirm locally)",
        rightNote: "Hotel gate pickup available",
        featured: true,
      },
      {
        title: "Coastal Cruiser Bike Ride",
        subtitle: "Scenic coastal road route",
        durationBadge: "~11 mins",
        icon: "pedal_bike",
        iconLabel: "Coastal Ride",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Coastal road scenery near Mirissa",
        description:
          "Enjoy a breezy coastal bicycle cruise along the Matara Coastal Road (A2) to reach Mirissa Coastal Promontory at your own pace.",
        leftNote: "Complimentary for guests (subject to availability)",
        rightNote: "Locks provided",
      },
    ],
  },
  gallery: {
    sectionScript: "visual journal...",
    sectionTitle: "Curated Glimpses of Mirissa Coastal Promontory",
    allHref: "/experiences",
    items: [
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Coconut_Tree_Hill_View_from_Mirissa_Beach.webp",
        imageAlt: "Mirissa Coastal Promontory viewed from Mirissa Beach",
        topBadge: "Beach View",
        topBadgeRight: "Mirissa Shore",
        script: "shoreline vista...",
        title: "Promontory Viewed from Mirissa Beach",
        description:
          "A view of Mirissa Coastal Promontory rising above the shoreline, seen from Mirissa Beach with palms crowning the headland.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Mirissa_Coastal_Promontory_Aerial_View_at_Dusk.webp",
        imageAlt: "Mirissa Coastal Promontory Aerial View at Dusk",
        topBadge: "Aerial Dusk",
        topBadgeRight: "Coastal Promontory",
        script: "evening aerial...",
        title: "Mirissa Coastal Promontory Aerial View at Dusk",
        description:
          "An aerial view of the Mirissa coastal promontory at dusk, showing the headland and surrounding ocean in soft evening light.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Visitors_on_Mirissa_Coconut_Tree_Hill.webp",
        imageAlt: "Visitors on Mirissa Coastal Promontory",
        topBadge: "Hilltop",
        topBadgeRight: "Palm Grove",
        script: "among the palms...",
        title: "Visitors on the Mirissa Promontory",
        description:
          "Visitors exploring Mirissa Coastal Promontory among the tall palms, taking in the coastal scenery from the headland.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Rocky_Cove_and_Turquoise_Waters_Aerial_View.webp",
        imageAlt: "Rocky Cove and Turquoise Waters Aerial View",
        topBadge: "Aerial Cove",
        topBadgeRight: "Turquoise Waters",
        script: "coastal contours...",
        title: "Rocky Cove and Turquoise Waters Aerial View",
        description:
          "An aerial view of a rocky cove with turquoise waters along the Mirissa coastline near the coastal promontory.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Sunset_Silhouettes_at_Mirissa_Coconut_Hill.webp",
        imageAlt: "Sunset Silhouettes at Mirissa Coastal Promontory",
        topBadge: "Sunset Silhouettes",
        topBadgeRight: "Golden Sky",
        script: "twilight palms...",
        title: "Sunset Silhouettes at the Mirissa Promontory",
        description:
          "Coconut palms silhouetted against a sunset sky atop Mirissa Coastal Promontory, overlooking the ocean.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Shaded_Shoreline_View_of_Mirissa_Promontory.webp",
        imageAlt: "Shaded Shoreline View of Mirissa Promontory",
        topBadge: "Shaded Shore",
        topBadgeRight: "Promontory View",
        script: "palm shade...",
        title: "Shaded Shoreline View of Mirissa Promontory",
        description:
          "A shaded shoreline perspective looking toward the Mirissa promontory, framed by coastal palms.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Coastal_Footpath_Along_Mirissa_Promontory.webp",
        imageAlt: "Coastal Footpath Along Mirissa Promontory",
        topBadge: "Footpath",
        topBadgeRight: "Coastal Trail",
        script: "path to the ridge...",
        title: "Coastal Footpath Along Mirissa Promontory",
        description:
          "A coastal footpath winding along the Mirissa promontory, leading toward the headland with ocean views beside it.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Golden_Hour_Palm_Grove_on_Mirissa_Hill.webp",
        imageAlt: "Golden Hour Palm Grove on Mirissa Hill",
        topBadge: "Golden Hour",
        topBadgeRight: "Palm Grove",
        script: "warm light...",
        title: "Golden Hour Palm Grove on Mirissa Hill",
        description:
          "Warm golden-hour light filtering through the palm grove on Mirissa Hill, bathing the hillside in soft tones.",
      },
      {
        span: "lg:col-span-4",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Wide_Angle_Sunset_Through_Coconut_Palms.webp",
        imageAlt: "Wide Angle Sunset Through Coconut Palms",
        topBadge: "Wide Sunset",
        topBadgeRight: "Palm Frame",
        script: "sunset frame...",
        title: "Wide Angle Sunset Through Coconut Palms",
        description:
          "A wide-angle view of the sunset framed by coconut palms on the Mirissa headland.",
      },
      {
        span: "lg:col-span-12",
        image: "/images/experiences/beaches/mirissa-coastal-promontory/Vibrant_Dusk_Over_Mirissa_Palm_Headland.webp",
        imageAlt: "Vibrant Dusk Over Mirissa Palm Headland",
        topBadge: "Vibrant Dusk",
        topBadgeRight: "Palm Headland",
        script: "evening glow...",
        title: "Vibrant Dusk Over Mirissa Palm Headland",
        description:
          "Vibrant dusk colors over the Mirissa palm headland, with the coastal promontory silhouetted against the evening sky.",
      },
    ],
  },
  discover: {
    sectionScript: "unfold the journey...",
    sectionTitle: "Discover More Along the Southern Coast",
    sectionDeck:
      "Extend your slow days beyond Mirissa Coastal Promontory. Explore surf breaks, hidden coves, coastal heritage, and ocean wildlife nestled within effortless reach of Noonna Beach Hotel.",
    slides: [
      {
        id: "secret-beach-mirissa",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Beach Mirissa hidden cove",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.9 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Secret Beach Mirissa",
        description: "A secluded coastal hideaway featuring intimate sandy pockets, calm tide pools, and a relaxed cliffside bar.",
        footerLeft: "Ideal for morning snorkeling & cliffside views",
        href: "/experiences/secret-beach-mirissa",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "polhena-beach-coral-reef",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Polhena Beach natural coral pool",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Polhena Natural Pool",
        description: "Reef-sheltered turquoise water forming a calm natural swimming pool, perfect for an unhurried afternoon dip with sea turtles.",
        footerLeft: "Best in settled seas & morning light",
        href: "/experiences/polhena-beach-coral-reef",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "awee-coco-secret-pool",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Awee Coco Secret Pool natural granite tide basins",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "2.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Awee Coco Secret Pool",
        description: "Naturally protected saltwater dipping baths etched into volcanic rock shelves, offering serene morning soak sessions.",
        footerLeft: "Best at morning low tide",
        href: "/experiences/awee-coco-secret-pool",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "weligama-bay-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Wide sandy Weligama Bay shoreline with gentle surf",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "3.5 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline & surf lessons",
        href: "/experiences/weligama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "galle-dutch-fort",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Galle Dutch Fort ocean ramparts and historic stone lighthouse bastion",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "22 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Galle Dutch Fort Ramparts",
        description:
          "Centuries-old stone bastions, ocean breeze walks along Flag Rock, colonial archways, and vibrant independent artisan jewelers.",
        footerLeft: "Late afternoon sunset walk",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "shirani-home-made-rice-curry",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Shirani Home Made Rice & Curry authentic storefront and restaurant in Weligama",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "0.9 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Shirani Home Made Rice & Curry",
        description:
          "Beloved courtyard feast prepared in traditional earthenware pots—jackfruit, spiced okra, clay-oven dhal, and freshly pressed coconut sambol.",
        footerLeft: "Concierge table reservations",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
      {
        id: "midigama-beach",
        filter: "beaches",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Midigama Sandy Cove panoramic coastal view",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "1.4 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Midigama Beach & Coastal Coves",
        description:
          "Legendary surf breaks, secluded rock pools, and sunset gathering point of Sri Lanka’s southern coast.",
        footerLeft: "Reef breaks & tidepools",
        href: "/experiences/midigama-beach",
        linkLabel: "View Dedicated Page â†’",
      },
      {
        id: "kushtarajagala-rock-relief",
        filter: "heritage",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw",
        imageAlt: "Ancient Kushtarajagala Bodhisattva rock relief carved into massive granite boulder",
        topBadge: "Single Page Hub",
        topBadgeVariant: "glass",
        distance: "3.3 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "10-12 min cruiser bicycle ride",
        href: "/experiences/southern-heritage-coastal-expeditions",
        linkLabel: "Explore Heritage & Wildlife Hub →",
      },
      {
        id: "coastal-spice-lunch",
        filter: "taste",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q",
        imageAlt: "Traditional Sri Lankan rice and curry spread in coastal setting",
        topBadge: "Single Dining Directory",
        topBadgeVariant: "glass",
        distance: "2.4 km",
        categoryIcon: "utensils",
        category: "A Taste of Sri Lanka",
        title: "Coastal Spice Lunch Tables",
        description:
          "Seasonal rice and curry with fresh catch, garden vegetables, and bright sambols served in relaxed local dining rooms.",
        footerLeft: "Host recommendations available",
        href: "/experiences/dining",
        linkLabel: "Explore Coastal Dining Guide â†’",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Promontory Outing?",
    deck: "Our concierge team will arrange comfortable transport timed perfectly for dawn or sunset lighting, and ensure your morning towels or camera gear are ready.",
    primaryHref:
      "https://wa.me/94716300100?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Mirissa%20Coastal%20Promontory%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94716300100",
    secondaryLabel: "WhatsApp Concierge",
  },
};

export const DESTINATION_DETAILS: DestinationDetail[] = [
  MIDIGAMA_BEACH_DETAIL,
  ABIMANAGAMA_BEACH_DETAIL,
  WELIGAMA_BEACH_DETAIL,
  AHANGAMA_BEACH_DETAIL,
  LAZY_LEFT_SURF_BREAK_DETAIL,
  RAMS_RIGHT_SURF_BREAK_DETAIL,
  AWEE_COCO_SECRET_POOL_DETAIL,
  SECRET_JUNGLE_BEACH_DETAIL,
  POLHENA_BEACH_CORAL_REEF_DETAIL,
  SECRET_BEACH_MIRISSA_DETAIL,
  PARROT_ROCK_DETAIL,
  MIRISSA_COASTAL_PROMONTORY_DETAIL,
];

export function getDestinationDetailBySlug(slug: string): DestinationDetail | undefined {
  return DESTINATION_DETAILS.find((d) => d.slug === slug);
}
