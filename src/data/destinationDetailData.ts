import { BEACH_DESTINATIONS } from "./experiencesData";

export type DestinationBreadcrumbCategory = "Beaches & Surf";

export interface DestinationMetaItem {
  icon: "location_on" | "waves" | "wb_sunny" | "near_me";
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
  facts: { icon: "thermostat" | "footprint"; label: string }[];
}

export interface DestinationVitalsCard {
  icon: "schedule" | "surfing";
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
        durationBadge: "1.9 km away",
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
        distance: "1.8 km",
        categoryIcon: "landmark",
        category: "Historical & Cultural",
        title: "Kushtarajagala Rock Relief",
        description:
          "Majestic 12-foot rock relief of Avalokiteshvara Bodhisattva carved into a granite cliff edge, draped in centuries of folklore and silent reverence.",
        footerLeft: "5 min cruiser bicycle ride",
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
        distance: "3.2 km",
        categoryIcon: "waves",
        category: "The Beaches & Surf Breaks",
        title: "Weligama Bay",
        description:
          "A long crescent of soft sand and forgiving waves, ideal for easy morning swims and first surf sessions.",
        footerLeft: "Calm morning shoreline",
        href: "/experiences",
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
        distance: "14 km",
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

export const DESTINATION_DETAILS: DestinationDetail[] = [MIDIGAMA_BEACH_DETAIL];

export function getDestinationDetailBySlug(slug: string): DestinationDetail | undefined {
  return DESTINATION_DETAILS.find((d) => d.slug === slug);
}
