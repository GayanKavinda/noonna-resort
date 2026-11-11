import { BEACH_DESTINATIONS } from "./experiencesData";

export type DestinationBreadcrumbCategory = "Beaches & Surf";

export interface DestinationMetaItem {
  icon: "location_on" | "waves" | "wb_sunny" | "near_me" | "pool" | "surfing";
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
  icon: "schedule" | "surfing" | "pool";
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
  span: "lg:col-span-7" | "lg:col-span-5" | "lg:col-span-4";
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
  distanceLabel: midigamaBase?.distance ? `${midigamaBase.distance} from Noonna` : "1.4 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Midigama Sandy Cove panoramic coastal view",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt:
        "Calm turquoise tidepools and shallow volcanic granite reef shelf in Midigama at low tide",
      topBadge: "Low-Tide Granite Soak Basins",
      distanceBadge: "1.4 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Low Tide: 06:30 – 10:00 AM",
      title: "Volcanic Granite Tidal Pools & Reef Shelf",
      description:
        "Naturally protected saltwater dipping baths etched into ancient volcanic rock shelves. Glassy turquoise pools allow serene, wakeful immersion sheltered from the Indian Ocean swell.",
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
      coordinates: "5°58'12\"N 80°23'31\"E",
      title: "Door-to-Shore Navigation",
      description:
        "Just 1.4 km west along Matara Coastal Road (A2). 4 minutes by open-air tuk-tuk safari or 15 minutes barefoot stroll at low tide.",
      mapsHref: "https://maps.google.com/?q=Midigama+Beach+Sri+Lanka",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20Midigama%20tide%20and%20surf%20updates.",
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5g419uHZs12brsUfcG0d1a5sujcloZoA26W30KpuaHeTDmk16C43LGbW0vD7HPrL-Mu2cCDZ5NKDL74dBX4qnGy8csA0HNKXR9PlithWT-DZXyLEdgv04xQwYNLt9o0TzfiLTo24RVKxYfJpMNsj_YOsoLxoL9xU6IDvO0Q7MUD2oNPnYLFkEteF5UP3lrOV14FZIwVW70mGiELC8KnzVHvXvb1D9lJ1AlYVk2WO3D7Nc0s5lTPHtg",
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
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
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Midigama turquoise outer reef and peeling dawn surf break",
        topBadge: "06:15 AM • Outer Reef",
        topBadgeRight: "1.4 km from hotel",
        script: "morning swell...",
        title: "Dawn Glass over Outer Reef",
        description:
          "Crisp offshore walls peeling unhurried over shallow coral shelves in crystalline morning light, sheltered by ancient granite topography.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Surfer waxing single fin board on golden sand in Midigama",
        topBadge: "Dawn Patrol Ritual",
        topBadgeRight: "Portico Quiver",
        script: "wax & wave...",
        title: "Barefoot Surf Preparation",
        description: "Single fins waxed on golden sands with mineral zinc before the morning tide rises.",
      },
      {
        span: "lg:col-span-4",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMeHUCJQXkpMUYdzxYm0uwRYfO3AtsTsijzRkSqHjw4P1Z37sn1yQqCY1ApH069Mr3i82DIn78DNgkGvx-7VdeFZ1Xczr72EBQlmfStaKsqJbBnQKe5LJJiuTOztvaRTE2QkbZaI_xql_kfrcobybPZdxOInwvrUwUPX_qUb8AF4GNMpHhJWt6XosBuOJnPAr7X8jV2K6p6NCkzLpPyvpaHyz966S4j61Z-OHjZAUpGme4CVEjAa6leQ",
        imageAlt: "Natural rock dip pools and volcanic granite tide basins in Midigama",
        topBadge: "Low Tide • 07:30 AM",
        topBadgeRight: "Tidal Pools",
        script: "natural baths...",
        title: "Granite Tidal Soak Basins",
        description: "Natural calm saltwater baths sheltered by ancient volcanic granite ledges.",
      },
      {
        span: "lg:col-span-4",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Coconut Grove palm canopies along the southern coastal shoreline near Midigama",
        topBadge: "Matara Coastal Road",
        topBadgeRight: "Inland Cruise",
        script: "canopy & reef...",
        title: "Coconut Grove Shaded Trails",
        description: "Quiet cycling routes winding through cinnamon plantations and swaying palms.",
      },
      {
        span: "lg:col-span-4",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Twilight solitude and amber sunset reflection on Midigama beach",
        topBadge: "Twilight Solitude • 18:15 PM",
        topBadgeRight: "Sunset Cove",
        script: "evening calm...",
        title: "Golden Crescent Cove",
        description: "Quiet evening shoreline bathed in warm amber Indian Ocean twilight glow.",
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
        id: "coconut-tree-hill",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAAdT7cKQ0G9XszZA52Ecr-6t63aKpdlh-Yms2GGNfehpuRUO4OkRFUYNvf3dDRM6Iey1TWrcW1UM2rlZnyiWE__efwJ2_QlXRF7IbxxmTic6UFFD_-vrIZ8lHbtP9EBHKYV44XSEXzRbnXBrJwjFL7hiz6-X4is1HlHG4X4vLFq35BHJywMe549tRuEKgXxpb4WuhcJ-L9tIp3B9oU1RDNs8VmuRAIirDeq8zAGXv1vHFs5-FHuIhJuQ",
        imageAlt: "Coconut Tree Hill in Mirissa overlooking the Indian Ocean",
        topBadge: "Dedicated Page",
        topBadgeVariant: "primary",
        distance: "5.8 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Coconut Tree Hill & Mirissa Point",
        description:
          "Dramatic red cliff dome crowned with swaying palms over crashing Indian Ocean swells—the quintessential southern panorama.",
        footerLeft: "Ideal at dawn or golden hour",
        href: "/experiences",
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "Explore Coastal Dining Guide →",
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
          "https://lh3.googleusercontent.com/aida/AEtjO1V0IcFLWz4OIUDOkUbRQE8Oeo_YfMBPpbiQuKC9qtsmnqL7YVaGLeUyoeJgUkuwKi64LS_sVYNAQ4unp2R2iJ4PQ0otYfd3tko4dD38lpnEqeTkXXjp_BjcH-YfagJb7y1Q8XZfEzo-Mk971W0O2OA_RIlzswHIcbIdnMQpsnbq3xrWTUB33rzUOyilqmmBb82lMhqVji36efy_5HnLLKGLuKoxopTUoUQ-Wcfm_bEe9Q",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "Explore Coastal Dining Guide →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Midigama Outing?",
    deck: "Our team will arrange a trusted local driver, provide custom reef booties, pack chilled king coconuts in cooler packs, and ensure boards are waiting for your morning tide.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Midigama%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: abimanagamaBase?.distance ? `${abimanagamaBase.distance} from Noonna` : "~2.9 km from Noonna",
  hero: {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Tranquil sandy cove and turquoise waters at Abimanagama Beach",
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
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Shallow turquoise sea shelf and golden sand at Abimanagama Beach",
      topBadge: "Secluded Shoreline Dip",
      distanceBadge: "2.9 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Low Tide: 06:30 – 10:00 AM",
      title: "Sheltered Sand Basin & Fringing Reef",
      description:
        "Naturally protected shallow waters tucked behind a light reef shelf. Offers calm, clear saltwater immersion away from high-density surf crowds.",
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
      coordinates: "5°57'30\"N 80°24'30\"E",
      title: "Door-to-Shore Access",
      description:
        "Positioned 2.9 km east along the Matara Coastal Road (A2) towards Weligama. Easily reached via a short 5-minute tuk-tuk ride or a scenic 11-minute coastal bicycle cruise.",
      mapsHref: "https://maps.google.com/?q=5.958333,80.408333",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20beach%20and%20tide%20updates%20for%20Abimanagama.",
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
        span: "lg:col-span-7",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Panoramic view of Abimanagama sandy bay at low tide",
        topBadge: "07:00 AM • Morning Low Tide",
        topBadgeRight: "2.9 km from hotel",
        script: "morning calm...",
        title: "Glassy Morning Cove",
        description: "Soft golden sands and sheltered water illuminated by early morning light.",
      },
      {
        span: "lg:col-span-5",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Palm trees hanging over calm turquoise water at Abimanagama",
        topBadge: "Coastal Flora",
        topBadgeRight: "Palm Canopy",
        script: "shade & sea...",
        title: "Coconut Shade & Shallow Waters",
        description: "Naturally shaded beach spots perfect for quiet reading and relaxed sea dips.",
      },
      {
        span: "lg:col-span-7",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Local fishing boats resting on golden sand at Abimanagama Beach",
        topBadge: "Local Heritage",
        topBadgeRight: "Artisanal Fishermen",
        script: "coastal life...",
        title: "Artisanal Fishing Boats",
        description: "Traditional wooden outrigger canoes rested on golden sand between morning trips.",
      },
      {
        span: "lg:col-span-5",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Warm amber golden hour reflections on Abimanagama shoreline",
        topBadge: "17:45 PM • Golden Hour",
        topBadgeRight: "Sunset Quiet",
        script: "evening glow...",
        title: "Sunset over the Horizon",
        description: "Peaceful coastal twilight bathed in warm amber ocean reflections.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Abimanagama Outing?",
    deck: "Our team can arrange a local driver, provide fresh towels, pack chilled king coconuts, and advise on optimal tide times for your visit.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Abimanagama%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: weligamaBase?.distance ? `${weligamaBase.distance} from Noonna` : "~3.5 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Wide sandy crescent cove of Weligama Bay with gentle ocean surf",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Broad golden sand beach and soft rolling waves at Weligama Bay",
      topBadge: "Sand-Bottom Beginner Haven",
      distanceBadge: "3.5 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Waves: 06:00 – 10:00 AM & 16:30 – 18:30 PM",
      title: "Expansive Golden Sand Crescent & Taprobane View",
      description:
        "A sweeping 3 km crescent bay protected from heavy ocean swell, offering safe sand-bottom wave entries and iconic views of forested Taprobane Island.",
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
      coordinates: "5°58'25\"N 80°25'45\"E",
      title: "Door-to-Bay Access",
      description:
        "Located ~3.5 km east along the Matara Coastal Road (A2). Reached in a 6-minute open-air tuk-tuk ride or a 14-minute coastal bicycle ride along village lanes.",
      mapsHref: "https://maps.google.com/?q=5.97371,80.42935",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20a%20surf%20instructor%20or%20transfer%20to%20Weligama%20Bay.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Panoramic morning light over Weligama Bay and surf lineup",
        topBadge: "06:30 AM • Morning Dawn",
        topBadgeRight: "3.5 km from hotel",
        script: "morning swell...",
        title: "Dawn Lineup across the Bay",
        description: "Soft glass waves breaking evenly along golden sandbars in early light.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Surfer heading into soft rolling surf at Weligama Bay",
        topBadge: "Beginner Sessions",
        topBadgeRight: "Softboard Haven",
        script: "learn & glide...",
        title: "First Wave Immersion",
        description: "Forgiving sand-bottom swells ideal for initial stand-up rides and longboard glides.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Forested Taprobane Island silhouette in Weligama Bay",
        topBadge: "Coastal Landmark",
        topBadgeRight: "Taprobane Islet",
        script: "island view...",
        title: "Taprobane Island Silhouette",
        description: "The famous private island villa framed by swaying palms and ocean horizons.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Golden sunset over Weligama Bay with surfboards on the sand",
        topBadge: "17:45 PM • Golden Hour",
        topBadgeRight: "Sunset Glow",
        script: "evening calm...",
        title: "Golden Hour Glow",
        description: "Warm amber twilight washing over relaxed beachfront cafes and sandy shores.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Weligama Surf & Beach Outing?",
    deck: "Our team can arrange a local driver, connect you with certified surf instructors, pack chilled king coconuts, and advise on wave timing.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Weligama%20surf%20and%20beach%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: ahangamaBase?.distance ? `${ahangamaBase.distance} from Noonna` : "~3.8 km from Noonna",
  hero: {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Ahangama coastal cove with peeling waves and stilt fishermen frames",
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
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Ahangama shallow turquoise reef shelf and coastal palms",
      topBadge: "Reef Breaks & Surf Hub",
      distanceBadge: "3.8 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Swell: 06:00 – 09:30 AM & 16:30 – 18:30 PM",
      title: "Volcanic Reef Lineup & Beach Coves",
      description:
        "A dynamic stretch featuring famous reef breaks like Sticks and Marshmallows, alongside serene sandy coves for relaxed dips and morning walks.",
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
      coordinates: "5°58'40\"N 80°22'28\"E",
      title: "Door-to-Shore Access",
      description:
        "Positioned ~3.8 km west along the Matara Coastal Road (A2). Reached in a 7-minute tuk-tuk ride or a 15-minute coastal bicycle ride through quiet back lanes.",
      mapsHref: "https://maps.google.com/?q=5.9777,80.3744",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20surf%20updates%20and%20cafe%20recommendations%20for%20Ahangama.",
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
        span: "lg:col-span-7",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Panoramic view of Ahangama outer reef break at dawn",
        topBadge: "06:15 AM • Outer Reef",
        topBadgeRight: "3.8 km from hotel",
        script: "morning swell...",
        title: "Dawn Lines at Sticks Break",
        description: "Clean offshore walls peeling over shallow coral ledges in early morning light.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Stilt fishermen perched over turquoise water in Ahangama",
        topBadge: "Traditional Culture",
        topBadgeRight: "Stilt Fishermen",
        script: "heritage & sea...",
        title: "Iconic Stilt Fishermen",
        description: "Traditional fishermen standing watch on wooden poles against the ocean horizon.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Surfer walking along Ahangama palm-fringed shoreline",
        topBadge: "Surf Lifestyle",
        topBadgeRight: "Boho Vibe",
        script: "coastal rhythm...",
        title: "Barefoot Coastal Vibe",
        description: "Relaxed oceanfront cafes and palm-shaded paths lining the beach strip.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Amber golden hour sunset over Ahangama ocean reef",
        topBadge: "17:50 PM • Golden Hour",
        topBadgeRight: "Sunset Chill",
        script: "evening calm...",
        title: "Amber Sunset over the Reef",
        description: "Peaceful twilight hues reflecting off calm tidepools and peeling waves.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Ahangama Outing?",
    deck: "Our concierge team can arrange tuk-tuk transport, recommend popular surf spots or cafes, and organize reef booties or board rentals.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Ahangama%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: lazyLeftBase?.distance ? `${lazyLeftBase.distance} from Noonna` : "~1.5 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Clean left-hand peeling wave at Lazy Left surf break in Midigama",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Crystal clear water and peeling wave crest at Midigama Lazy Left",
      topBadge: "Legendary Left Lineup",
      distanceBadge: "1.5 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Window: 06:00 – 09:30 AM (Low to Mid Tide)",
      title: "Long-Walling Lefts over Volcanic Shelf",
      description:
        "A reliable reef break delivering smooth, peeling left-hand rides spanning hundreds of meters. Features a gentle takeoff that mellows into forgiving, open shoulders.",
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
      coordinates: "5°57'45\"N 80°23'20\"E",
      title: "Door-to-Lineup Access",
      description:
        "Just 1.5 km west along the Matara Coastal Road (A2). Reachable in a 3-minute open-air tuk-tuk ride or a 5-minute coastal bicycle cruise.",
      mapsHref: "https://maps.google.com/?q=5.9625,80.3880",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20Lazy%20Left%20swell%20and%20tide%20updates.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Clean glass wave peeling across Lazy Left lineup in Midigama",
        topBadge: "06:15 AM • Dawn Glass",
        topBadgeRight: "1.5 km from hotel",
        script: "morning swell...",
        title: "Dawn Glass over Lazy Left",
        description: "Crisp offshore walls peeling unhurried over shallow coral shelves in crystalline morning light.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Surfer preparing longboard on golden sand near Midigama break",
        topBadge: "Dawn Patrol Ritual",
        topBadgeRight: "Quiver Prep",
        script: "wax & wave...",
        title: "Pre-Surf Setup",
        description: "Single and longboards waxed on golden sands before paddling out into the morning lineup.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Palm tree canopy along Midigama coastal road near surf spot",
        topBadge: "Coastal Approach",
        topBadgeRight: "Palm Canopy",
        script: "canopy path...",
        title: "Shaded Coastal Access",
        description: "Tranquil roadside coconut groves framing the short trip from Noonna Beach Hotel.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Golden sunset reflection over Midigama ocean waters",
        topBadge: "18:00 PM • Golden Hour",
        topBadgeRight: "Evening Glow",
        script: "sunset surf...",
        title: "Twilight Peelers",
        description: "Evening golden hour sessions bathed in warm amber Indian Ocean light.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Lazy Left Surf Session?",
    deck: "Our team will arrange reliable tuk-tuk transport, check live tide and swell reports, provide reef booties, and ensure your morning gear is ready.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Lazy%20Left%20surf%20session.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: ramsRightBase?.distance ? `${ramsRightBase.distance} from Noonna` : "~1.6 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Hollow right-hand barrel breaking over shallow reef at Rams Right in Midigama",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Crystal clear water and hollow right-hand breaking wave at Rams Right",
      topBadge: "Advanced Barrel Lineup",
      distanceBadge: "1.6 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Window: 06:00 – 09:00 AM (Mid Tide)",
      title: "Short, Fast & Hollow Right-Hander",
      description:
        "A focused reef break delivering intense, fast right-hand tubes over a shallow volcanic shelf. Features a critical takeoff and high-performance sections for experienced riders.",
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
      coordinates: "5°57'48\"N 80°23'24\"E",
      title: "Door-to-Lineup Access",
      description:
        "Just 1.6 km west along the Matara Coastal Road (A2). Reachable in a 3-minute open-air tuk-tuk ride or a 6-minute coastal bicycle cruise.",
      mapsHref: "https://maps.google.com/?q=5.9633,80.3900",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20Rams%20Right%20swell%20and%20tide%20updates.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
        imageAlt: "Hollow right barrel peeling across Rams Right lineup in Midigama",
        topBadge: "06:30 AM • Morning Barrel",
        topBadgeRight: "1.6 km from hotel",
        script: "clean tubes...",
        title: "Dawn Barrels at Rams Right",
        description: "Crisp offshore walls squaring up over a shallow reef shelf in clean morning light.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Surfer checking waves from the roadside cafe overlooking Rams Right",
        topBadge: "Roadside Vantage",
        topBadgeRight: "The Blue Porch View",
        script: "coffee & swell...",
        title: "Roadside Lineup Watch",
        description: "Watching sets roll in from the elevated comfort of the front-row coastal cafe.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Palm tree canopy along Midigama coastal road near Rams",
        topBadge: "Coastal Approach",
        topBadgeRight: "Palm Canopy",
        script: "canopy path...",
        title: "Shaded Coastal Route",
        description: "Tranquil roadside coconut groves framing the short journey from Noonna Beach Hotel.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Golden sunset reflection over Midigama ocean waters",
        topBadge: "18:00 PM • Golden Hour",
        topBadgeRight: "Evening Glow",
        script: "sunset surf...",
        title: "Twilight Right Peelers",
        description: "Evening golden hour sessions bathed in warm amber Indian Ocean light.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Rams Right Surf Session?",
    deck: "Our team will arrange reliable tuk-tuk transport, check live swell and wind conditions, provide reef booties, and ensure your morning gear is ready.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Rams%20Right%20surf%20session.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: aweeCocoBase?.distance ? `${aweeCocoBase.distance} from Noonna` : "~2.8 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Calm turquoise natural rock pool sheltered by volcanic granite ledges at Awee Coco",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Sheltered shallow turquoise water in natural rock basin at Awee Coco Secret Pool",
      topBadge: "Low-Tide Granite Soak Basins",
      distanceBadge: "2.8 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Low Tide: 06:30 – 10:00 AM",
      title: "Sheltered Saltwater Dipping Baths",
      description:
        "Naturally formed rock basins etched into ancient volcanic ledges. Outer reef barriers block ocean swells, creating crystal-clear calm water for peaceful morning immersion.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Reef Footwear Loaned at Portico" },
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
      coordinates: "5°57'55\"N 80°23'50\"E",
      title: "Door-to-Pool Access",
      description:
        "Positioned 2.8 km along the southern coastal route. Easily reached via a 4-minute tuk-tuk safari or a 10-minute scenic coastal bicycle ride.",
      mapsHref: "https://maps.google.com/?q=5.9653,80.3972",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20Awee%20Coco%20tide%20and%20access%20updates.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Calm turquoise tidepools and shallow volcanic granite reef shelf at low tide",
        topBadge: "07:00 AM • Low Tide",
        topBadgeRight: "2.8 km from hotel",
        script: "morning calm...",
        title: "Glassy Granite Soak Basins",
        description: "Crystal-clear saltwater dipping baths sheltered by ancient volcanic granite ledges.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Sunlight filtering through palm canopy over coastal rock pools",
        topBadge: "Canopy Shade",
        topBadgeRight: "Palm Ledge",
        script: "shade & breeze...",
        title: "Sheltered Palm Ledge",
        description: "Natural shade and tranquil seating spots nestled among coastal palm trees.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Coconut Grove palm canopies along the southern coastal shoreline",
        topBadge: "Inland Approach",
        topBadgeRight: "Grove Path",
        script: "grove trail...",
        title: "Coconut Grove Pathway",
        description: "Quiet shaded trails winding past swaying palms and coastal greenery.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Amber golden hour twilight reflecting on coastal tide pools",
        topBadge: "18:00 PM • Twilight",
        topBadgeRight: "Sunset Glow",
        script: "evening calm...",
        title: "Amber Twilight Pool",
        description: "Quiet evening tide pools bathed in warm amber Indian Ocean twilight glow.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Awee Coco Outing?",
    deck: "Our team will arrange a trusted local driver, provide custom reef booties, pack chilled king coconuts in cooler packs, and ensure towels are ready for your morning soak.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Awee%20Coco%20pool%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: secretJungleBase?.distance ? `${secretJungleBase.distance} from Noonna` : "~3.4 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Secluded sandy cove framed by lush tropical jungle canopy at Secret Jungle Beach",
    script: "shaded jungle canopy & untamed shoreline...",
    title: "Secret Jungle Beach",
    deck: "A hidden coastal cove sheltered by overhanging tropical foliage, ancient granite boulders, and unhurried southern solitude.",
    meta: [
      { icon: "location_on", label: "Southern Province, Midigama Coast" },
      { icon: "pool", label: "Jungle-Framed Sandy Cove & Tide Pools" },
      { icon: "wb_sunny", label: "Best at Morning Low Tide" },
    ],
  },
  vitals: {
    sectionScript: "field notes & coastal intelligence...",
    sectionTitle: "Secret Jungle Beach At A Glance: Canopy & Cove",
    sectionDeck:
      "Essential field notes and coastal conditions for shaded morning shoreline strolls, secluded tidal exploration, and effortless journeys from Noonna Beach Hotel.",
    climateBadge: "Southern Province Microclimate",
    showcase: {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Shallow turquoise sea shelf and jungle-fringed sand at Secret Jungle Beach",
      topBadge: "Untamed Coastal Cove",
      distanceBadge: "3.4 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Exploration: 06:30 – 10:00 AM",
      title: "Canopy-Sheltered Sandy Sanctuary",
      description:
        "A quiet, private beach enclave where tropical jungle greenery meets golden sand. Protected by natural rock formations, it offers absolute peace away from the main highway.",
      facts: [
        { icon: "thermostat", label: "Water Temp: ~28°C / 82°F (Year-Round)" },
        { icon: "footprint", label: "Sturdy Footwear Recommended for Trail Path" },
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
      coordinates: "5°58'10\"N 80°23'45\"E",
      title: "Door-to-Cove Access",
      description:
        "Located 3.4 km along the southern coast via coastal road and a short shaded path. Reachable in 5 minutes by tuk-tuk or 12 minutes by cruiser bicycle.",
      mapsHref: "https://maps.google.com/?q=5.9694,80.3958",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20send%20Secret%20Jungle%20Beach%20access%20details.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secluded sandy cove framed by lush tropical jungle canopy",
        topBadge: "07:00 AM • Morning Shade",
        topBadgeRight: "3.4 km from hotel",
        script: "jungle calm...",
        title: "Canopy-Framed Shoreline",
        description: "Golden sand cove sheltered entirely by overhanging tropical foliage and coastal trees.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Sunlight filtering through tropical foliage onto hidden sand beach",
        topBadge: "Tropical Greenery",
        topBadgeRight: "Shaded Trail",
        script: "green light...",
        title: "Sunlit Foliage Path",
        description: "Dappled morning sunlight filtering through the coastal jungle canopy onto the sand.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Granite boulders and coastal green belt along Secret Jungle Beach",
        topBadge: "Granite Boulders",
        topBadgeRight: "Rock Buffer",
        script: "stone & sea...",
        title: "Granite Boulder Outcrops",
        description: "Ancient stone formations buffering the cove from open ocean swells.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Amber twilight reflecting on jungle-bordered coastal waters",
        topBadge: "18:00 PM • Twilight",
        topBadgeRight: "Sunset Calm",
        script: "evening glow...",
        title: "Jungle Twilight Calm",
        description: "Peaceful evening shadows and warm amber light resting over the secluded cove.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Secret Jungle Beach Outing?",
    deck: "Our team will arrange trusted transport, provide trail guidance, pack chilled king coconuts in cooler packs, and ensure towels are ready.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Secret%20Jungle%20Beach%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: polhenaBase?.distance ? `${polhenaBase.distance} from Noonna` : "~14 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Calm turquoise reef-sheltered waters and golden sand at Polhena Beach",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Shallow turquoise protected swimming pool inside Polhena coral reef",
      topBadge: "Reef-Protected Sanctuary",
      distanceBadge: "14 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Snorkeling: 07:00 – 11:00 AM",
      title: "Calm Coral Lagoon & Sea Turtle Habitat",
      description:
        "Protected by an offshore barrier reef that blocks heavy ocean swells, Polhena creates a vast, calm natural swimming pool where wild green turtles graze peacefully in the shallows.",
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
      coordinates: "5°56'20\"N 80°31'50\"E",
      title: "Door-to-Reef Access",
      description:
        "Located ~14 km east along the Matara Coastal Road (A2). Reached in 20–25 minutes by comfortable taxi or tuk-tuk safari.",
      mapsHref: "https://maps.google.com/?q=5.9389,80.5306",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20transport%20to%20Polhena%20Beach.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Calm turquoise natural swimming lagoon sheltered by coral reef at Polhena",
        topBadge: "08:00 AM • Calm Lagoon",
        topBadgeRight: "14 km from hotel",
        script: "crystal shallows...",
        title: "Glassy Coral Lagoon",
        description: "Protected turquoise shallows offering wave-free swimming and crystal-clear visibility.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Green sea turtle swimming gracefully in shallow coral waters",
        topBadge: "Marine Wildlife",
        topBadgeRight: "Resident Turtles",
        script: "gentle swimmers...",
        title: "Wild Green Sea Turtles",
        description: "Friendly marine turtles frequently spotted grazing just feet from the shoreline.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Palm trees and golden sand beach along Polhena coastline",
        topBadge: "Golden Shoreline",
        topBadgeRight: "Palm Fringe",
        script: "sunny shores...",
        title: "Golden Sands & Palms",
        description: "Spacious sandy beach areas lined with coconut palms and relaxed local shade spots.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Amber golden hour sunset over Polhena reef lagoon",
        topBadge: "18:00 PM • Twilight",
        topBadgeRight: "Sunset Calm",
        script: "evening glow...",
        title: "Matara Sunset Horizon",
        description: "Peaceful evening skies reflecting across the tranquil, glass-like reef basin.",
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
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
      {
        id: "secret-jungle-beach",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Jungle Beach tropical cove",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "3.4 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Secret Jungle Beach",
        description: "A secluded coastal haven framed by lush tropical foliage and ancient granite boulders, offering absolute tranquility.",
        footerLeft: "Ideal for shaded morning walks",
        href: "/experiences/secret-jungle-beach",
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Polhena Snorkeling Outing?",
    deck: "Our concierge team will arrange comfortable transport, coordinate snorkel gear rentals, and advise on optimal tide and turtle-spotting windows.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Polhena%20snorkeling%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
  distanceLabel: secretBeachBase?.distance ? `${secretBeachBase.distance} from Noonna` : "~6.5 km from Noonna",
  hero: {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Hidden sandy coves and turquoise tide pools at Secret Beach Mirissa",
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
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
      imageAlt: "Shallow turquoise water and rocky cove formation at Secret Beach Mirissa",
      topBadge: "Secluded Cliffside Cove",
      distanceBadge: "6.5 km from Noonna",
      panelBadge: "Daily Rhythm",
      panelBadgeText: "Optimal Window: 07:00 – 11:00 AM",
      title: "Intimate Sandy Pockets & Snorkel Reef",
      description:
        "A collection of three tiny, stunning coves shielded by rocky outcrops and coconut palms. Offers calm shallows for wading and vibrant marine life around the outer reef shelf.",
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
      coordinates: "5°56'45\"N 80°26'55\"E",
      title: "Door-to-Cove Access",
      description:
        "Located ~6.5 km east along the Matara Coastal Road (A2) followed by a short hilltop lane. Reached in 10–12 minutes by open-air tuk-tuk.",
      mapsHref: "https://maps.google.com/?q=5.9458,80.4486",
      mapsLabel: "Google Maps Pin",
      hostHref:
        "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20arrange%20transport%20to%20Secret%20Beach%20Mirissa.",
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
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Beach Mirissa turquoise cove and rocky ledge",
        topBadge: "08:00 AM • Morning Shallows",
        topBadgeRight: "6.5 km from hotel",
        script: "hidden cove...",
        title: "Glassy Cove Shallows",
        description: "Intimate sandy pocket sheltered by volcanic rock outcrops and clear turquoise water.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Shaded cliffside seating area overlooking Secret Beach",
        topBadge: "Cliffside Lookout",
        topBadgeRight: "Shaded Café",
        script: "coastal view...",
        title: "Cliffside Bistro Vistas",
        description: "Relaxed shaded seating overlooking the open ocean and hidden sandy coves below.",
      },
      {
        span: "lg:col-span-7",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDHrQAt5FWvfF6S3lX6tY0-KZFLaApcroNzMzgSb4ZxraB5eQRNqJHER6iCJHFN3zV4cox7TIP3uafnKROHYqkAlmx5c0bikQjfnjOzbqTDZj0D1r6_incNJyYcfRLoi8DAjBPhoJ0nijNL-mEdM3FxNxpxMbBxL4rovvMg2MdeLFBm-2AmSql6r3yQ0MUiNXHo37Ybk3GxC2Ys4gYnsGG_AkptpKlzTZVW7XsrSkrdtZUOywN6IiRrAw",
        imageAlt: "Lush green coastal headland framing Secret Beach Mirissa",
        topBadge: "Green Headland",
        topBadgeRight: "Palm Canopy",
        script: "tropical ridge...",
        title: "Tropical Headland Trail",
        description: "Shaded pathway winding through coastal greenery down to the hidden shoreline.",
      },
      {
        span: "lg:col-span-5",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA8T14NK17znhnRCR4z_fY31VBnIDTG2xG4Mw3tL_yMZGwQ8wLYMS4tewxMXiJY-qWq9Ye1FXtvqS_xZ9i6zMyuMFW9BdIp--gifAA6YTZL8nR3Sgusebxhly4YSF7quV3bS12zvbo1setTPo9UwTQA7t-oWIPEhvM9OxPGQ-etIS62ZxPza3jDzncVaXWlVWRHwOQU5LMHqwtixvW3umzlLLoBoBQmHLpKpRtH84tIcPF9YEfN8KeBWw",
        imageAlt: "Amber sunset glow over Secret Beach Mirissa headland",
        topBadge: "18:00 PM • Sunset",
        topBadgeRight: "Golden Hour",
        script: "evening calm...",
        title: "Cliffside Sunset Horizon",
        description: "Breathtaking evening golden hour light washing over the western Mirissa headland.",
      },
    ],
  },
  discover: {
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
        distance: "14 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Polhena Natural Pool",
        description: "Reef-sheltered turquoise water forming a calm natural swimming pool, perfect for an unhurried afternoon dip with sea turtles.",
        footerLeft: "Best in settled seas & morning light",
        href: "/experiences/polhena-beach-coral-reef",
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
      {
        id: "secret-jungle-beach",
        filter: "spots",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M7aGwpJb3Tt2_Jll_GTXGAC6k9ga1dVgPnvlQT5so6SKbh5jm_yhz3rDcB7Mxb1jLMZG3kLP1HH7Oo9yjx3nBxWWtczKh-ZvUe-jvBWn9LY290oNcxRDJrUd2L825zzGc5Gi8GaWI4UuCsVOFmoJ2BXgm_NroxmtMKwf6U4_noZ_cnVpCgkjGEH9lPyLDChkFUpVtZ_9Gqr9uHBHvsZoShaMPT-1TTjDvjLqFU0wptqxZfG3NGEQRw",
        imageAlt: "Secret Jungle Beach tropical cove",
        topBadge: "Dedicated Page",
        topBadgeVariant: "glass",
        distance: "3.4 km",
        categoryIcon: "compass",
        category: "Hidden Swim Spots & Viewpoints",
        title: "Secret Jungle Beach",
        description: "A secluded coastal haven framed by lush tropical foliage and ancient granite boulders, offering absolute tranquility.",
        footerLeft: "Ideal for shaded morning walks",
        href: "/experiences/secret-jungle-beach",
        linkLabel: "View Dedicated Page →",
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
        linkLabel: "View Dedicated Page →",
      },
    ],
  },
  concierge: {
    script: "seamless sanctuary service",
    title: "Would You Like Us to Prepare Your Secret Beach Outing?",
    deck: "Our concierge team will arrange comfortable tuk-tuk transport, coordinate cafe seating reservations, and ensure your morning towels are packed.",
    primaryHref:
      "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20help%20plan%20our%20Secret%20Beach%20Mirissa%20outing.",
    primaryLabel: "Plan Outing with Host",
    secondaryHref: "https://wa.me/94779206951",
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
];

export function getDestinationDetailBySlug(slug: string): DestinationDetail | undefined {
  return DESTINATION_DETAILS.find((d) => d.slug === slug);
}
