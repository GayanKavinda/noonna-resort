export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  category: "beach" | "heritage";
  badge: string;
  distance: string;
  subtitle?: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  image?: string;
  imageAlt?: string;
}

export interface CulinarySpotlightItem {
  id: string;
  title: string;
  tagline: string;
  cursiveQuote?: string;
  badge: string;
  location: string;
  description: string;
  meta: string;
  images: { src: string; alt: string }[];
}

export interface SurroundingsCategory {
  title: string;
  iconName: string;
  items: { name: string; distance: string }[];
}

export interface ActivityHighlight {
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

// 13 Beaches and Surf Breaks
export const BEACH_DESTINATIONS: DestinationItem[] = [
  {
    id: "midigama-beach",
    slug: "midigama-beach",
    name: "Midigama Beach",
    category: "beach",
    badge: "World-Renowned Swell Sanctuary",
    distance: "~1.4 km",
    subtitle: "Point Break Waves",
    description:
      "Famed for its legendary peeling reef breaks including Lazy Left, Rams, and Plantations. Midigama retains an unhurried, laid-back coastal charm with authentic roadside coconut shacks, quiet stretches of sand, and golden afternoon light.",
    features: ["Surf & Sunset Sanctuary", "Tide Pools", "Coconut Groves"],
    ctaLabel: "Explore Tides",
    image: "/images/hotel/hero-beach.jpg",
    imageAlt: "Midigama Beach waves and turquoise surf break near Noonna Beach Hotel",
  },
  {
    id: "abimanagama-beach",
    slug: "abimanagama-beach",
    name: "Abimanagama Beach",
    category: "beach",
    badge: "Secluded Cove",
    distance: "~2.9 km",
    subtitle: "Quiet Coastal Solitude",
    description:
      "An unhurried stretch of amber sands tucked away from the main highway, ideal for restorative coastal strolls and calm water wading.",
    features: ["Quiet Coastal Solitude", "Amber Sands", "Tide Shallows"],
    ctaLabel: "View Shoreline",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tranquil sandy cove and turquoise waters at Abimanagama Beach",
  },
  {
    id: "weligama-beach",
    slug: "weligama-beach",
    name: "Weligama Beach",
    category: "beach",
    badge: "Sandy Bay Break",
    distance: "~3.5 km",
    subtitle: "Beginner Surf Haven",
    description:
      "Sri Lanka's quintessential surf haven—a wide, golden sand bay featuring forgiving sandbar waves, beginner surf schools, and coastal views toward Taprobane Island.",
    features: ["Beginner Surf Haven", "Sandy Bay Break", "Taprobane Views"],
    ctaLabel: "View Bay Guide",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Wide sandy crescent cove of Weligama Bay with gentle ocean surf",
  },
  {
    id: "ahangama-beach",
    slug: "ahangama-beach",
    name: "Ahangama Beach",
    category: "beach",
    badge: "Reef Point Breaks",
    distance: "~3.8 km",
    subtitle: "Boho Coastal Town",
    description:
      "The vibrant surf epicenter of Sri Lanka's southern coast—renowned for iconic reef breaks, oceanfront cafes, stilt fishermen, and golden sunset views.",
    features: ["Reef Point Breaks", "Surf & Cafe Scene", "Stilt Fishermen"],
    ctaLabel: "Explore Ahangama",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ahangama coastal cove with peeling waves and stilt fishermen frames",
  },
  {
    id: "lazy-left-surf-break",
    slug: "lazy-left-surf-break",
    name: "Lazy Left Surf Break",
    category: "beach",
    badge: "Iconic Reef Break",
    distance: "~1.5 km",
    subtitle: "Longboard Haven",
    description:
      "Sri Lanka's legendary long-peeling left-hand reef break—celebrated for forgiving shoulders, long walls, and ideal conditions for longboards and progression.",
    features: ["Deep Reef Left", "Longboard Haven", "Dawn Glass"],
    ctaLabel: "View Surf Intel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Clean left-hand peeling wave at Lazy Left surf break in Midigama",
  },
  {
    id: "rams-right-surf-break",
    slug: "rams-right-surf-break",
    name: "Rams Right Surf Break",
    category: "beach",
    badge: "Shallow Reef Barrel",
    distance: "~1.6 km",
    subtitle: "Advanced Surf Spot",
    description:
      "Sri Lanka's most iconic heavy right-hand barrel—a punchy, fast reef break offering short, technical rides and pristine tubes for confident surfers.",
    features: ["Right-Hand Barrel", "Shallow Reef", "Advanced Lineup"],
    ctaLabel: "View Wave Intel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Hollow right-hand barrel breaking over shallow reef at Rams Right in Midigama",
  },
  {
    id: "awee-coco-secret-pool",
    slug: "awee-coco-secret-pool",
    name: "Awee Coco Secret Pool",
    category: "beach",
    badge: "Secluded Tidal Pools",
    distance: "~2.8 km",
    subtitle: "Natural Saltwater Bath",
    description:
      "A secluded coastal sanctuary featuring natural granite saltwater dipping baths, sheltered turquoise tide pools, and tranquil shaded palm groves.",
    features: ["Granite Tide Pools", "Natural Saltwater Bath", "Palm Shade"],
    ctaLabel: "View Pool Guide",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
    imageAlt: "Calm turquoise natural rock pool sheltered by volcanic granite ledges at Awee Coco",
  },
  {
    id: "secret-jungle-beach",
    slug: "secret-jungle-beach",
    name: "Secret Jungle Beach",
    category: "beach",
    badge: "Tucked Jungle Cove",
    distance: "~3.4 km",
    subtitle: "Hidden Coastal Footpath",
    description:
      "A sheltered bay nestled between lush rainforest headlands and turquoise shallows. Reached via a shaded dirt footpath, offering peaceful seclusion and calm swimming.",
    features: ["Lush Headland Canopy", "Turquoise Shallows", "Hidden Trail"],
    ctaLabel: "Access Guide",
  },
  {
    id: "polhena-beach-coral-reef",
    slug: "polhena-beach-coral-reef",
    name: "Polhena Beach & Coral Reef",
    category: "beach",
    badge: "Lagoon & Marine Sanctuary",
    distance: "~12 km",
    subtitle: "Snorkelling with Green Sea Turtles",
    description:
      "Enclosed by an expansive offshore barrier reef that creates a placid, pool-like lagoon. Renowned for frequent sightings of resident green turtles feeding in shallow seagrass beds.",
    features: ["Barrier Reef Shallows", "Sea Turtle Sanctuary", "Snorkel Basin"],
    ctaLabel: "Explore Marine Life",
  },
  {
    id: "secret-beach-mirissa",
    slug: "secret-beach-mirissa",
    name: "Secret Beach Mirissa",
    category: "beach",
    badge: "Hidden Cove Trio",
    distance: "~6.5 km",
    subtitle: "Blue Lagoon & Coconut Bluff",
    description:
      "A collection of three tiny secluded rocky coves including Blue Lagoon, Shelley Beach, and Main Beach. Golden sandbars and natural rock pools sheltered from heavier swell.",
    features: ["Three Hidden Coves", "Sheltered Lagoon", "Rock Shallows"],
    ctaLabel: "Discover Secret Cove",
  },
  {
    id: "coconut-tree-hill",
    slug: "coconut-tree-hill",
    name: "Coconut Tree Hill",
    category: "beach",
    badge: "Iconic Promontory",
    distance: "~6.2 km",
    subtitle: "Sunrise & Twilight Viewpoint",
    description:
      "A dramatic red-clay dome jutting straight into the Indian Ocean, densely crowned with towering leaning coconut palms that frame unobstructed horizon views.",
    features: ["Red Clay Headland", "Leaning Palms", "360° Ocean Horizon"],
    ctaLabel: "Sunset Times",
  },
  {
    id: "parrot-rock",
    slug: "parrot-rock",
    name: "Parrot Rock",
    category: "beach",
    badge: "Tidal Red Rock Islet",
    distance: "~5.8 km",
    subtitle: "Mirissa Bay Panoramas",
    description:
      "A standalone oceanic red rock islet situated right in Mirissa Bay, accessible via shallow tidal sandbars at low water, offering panoramic vistas across the surf arcs.",
    features: ["Tidal Sandbar Walk", "Panoramic Bay View", "Low-Tide Access"],
    ctaLabel: "Low Tide Timetable",
  },
  {
    id: "mirissa-coastal-promontory",
    slug: "mirissa-coastal-promontory",
    name: "Mirissa Coastal Promontory",
    category: "beach",
    badge: "Eastern Bay Headland",
    distance: "~6.0 km",
    subtitle: "Coastal Lookouts & Coves",
    description:
      "A natural headland separating Mirissa's main surf bay from quieter eastern fishing harbours, providing elevated trails, breezy ocean lookouts, and tucked rocky coves.",
    features: ["Elevated Coastal Trails", "Ocean Overlooks", "Fishing Harbour"],
    ctaLabel: "View Route Guide",
  },
];

// 9 Heritage & Wildlife Sanctuaries
export const HERITAGE_DESTINATIONS: DestinationItem[] = [
  {
    id: "galle-dutch-fort",
    slug: "galle-dutch-fort",
    name: "Galle Dutch Fort",
    category: "heritage",
    badge: "UNESCO World Heritage",
    distance: "~24 km",
    subtitle: "Colonial Bastions & Sunset Walk",
    description:
      "Living 17th-century fortified citadel with cobblestone alleys, Dutch colonial architecture, ocean ramparts, and artisan jewellery boutiques.",
    features: ["Colonial Bastions", "Ocean Ramparts", "Artisan Boutiques"],
    ctaLabel: "Explore Heritage Site",
  },
  {
    id: "martin-wickramasinghe-museum",
    slug: "martin-wickramasinghe-museum",
    name: "Martin Wickramasinghe Museum",
    category: "heritage",
    badge: "Literary & Folk History",
    distance: "~7.8 km",
    subtitle: "Koggala Folk Culture Sanctuary",
    description:
      "The preserved ancestral estate of Sri Lanka's greatest author, exhibiting rare folk artifacts, traditional fishing implements, and native flora gardens.",
    features: ["Ancestral Estate", "Folk Artifacts", "Native Flora"],
    ctaLabel: "View Museum Hours",
  },
  {
    id: "kushtarajagala-rock-relief",
    slug: "kushtarajagala-rock-relief",
    name: "Kushtarajagala Rock Relief",
    category: "heritage",
    badge: "Ancient Sacred Monolith",
    distance: "~2.7 km",
    subtitle: "8th-Century Granite Bodhisattva",
    description:
      "An extraordinary 8th-century Mahayana Buddhist rock carving of Avalokiteshvara chiseled directly into a towering roadside granite cliff in Weligama.",
    features: ["8th-Century Carving", "Granite Bodhisattva", "Sacred Relief"],
    ctaLabel: "Historical Notes",
  },
  {
    id: "kumbalgama-potters-village",
    slug: "kumbalgama-potters-village",
    name: "Kumbalgama Potters' Village",
    category: "heritage",
    badge: "Artisan Craft Heritage",
    distance: "~0.4 km",
    subtitle: "Living Terracotta Traditions",
    description:
      "Quiet village compound moments from Noonna where multi-generational families shape terracotta water jars, cooking pots, and lamps on manual kick wheels.",
    features: ["Kick-Wheel Pottery", "Terracotta Craft", "Village Compound"],
    ctaLabel: "Village Walk Route",
  },
  {
    id: "taprobane-island",
    slug: "taprobane-island",
    name: "Taprobane Island",
    category: "heritage",
    badge: "Private Islet Villa",
    distance: "~3.1 km",
    subtitle: "Weligama Bay Architectural Icon",
    description:
      "A romantic octagonal private island villa built in the 1920s by the eccentric Count de Mauny-Talvande, rising dramatically from the turquoise shallows of Weligama Bay.",
    features: ["1920s Octagonal Villa", "Weligama Shallows", "Private Islet"],
    ctaLabel: "Island History",
  },
  {
    id: "koggala-lake-mangroves",
    slug: "koggala-lake-mangroves",
    name: "Koggala Lake & Mangroves",
    category: "heritage",
    badge: "Coastal Lagoon Ecology",
    distance: "~7.0 km",
    subtitle: "Cinnamon Islands & Wildlife Safari",
    description:
      "A vast brackish wetland lagoon sprinkled with eight secluded islets, home to traditional cinnamon peelers, Buddhist hermitage monasteries, and abundant birdlife.",
    features: ["Lagoon Boat Safari", "Cinnamon Orchards", "Bird Sanctuary"],
    ctaLabel: "Boat Safari Intel",
  },
  {
    id: "koggala-stilt-fishermen-coast",
    slug: "koggala-stilt-fishermen-coast",
    name: "Koggala Stilt Fishermen Coast",
    category: "heritage",
    badge: "Living Artisanal Custom",
    distance: "~6.8 km",
    subtitle: "Iconic Southern Maritime Ritual",
    description:
      "The enduring southern Sri Lankan spectacle of fishermen balancing poised on crossbars lashed to vertical poles embedded deep in nearshore coral reefs.",
    features: ["Ritual Pole Fishing", "Coral Shelf Shallows", "Twilight Watching"],
    ctaLabel: "Photography Guidelines",
  },
  {
    id: "whale-watching-cruises",
    slug: "whale-watching-cruises",
    name: "Whale Watching Cruises",
    category: "heritage",
    badge: "Marine Expedition",
    distance: "~8.0 km",
    subtitle: "Blue Whales & Oceanic Trenches",
    description:
      "Departure harbor for ethical oceanic cruises into the continental shelf trench where Blue Whales, Sperm Whales, and pods of Spinner Dolphins feed in deep waters.",
    features: ["Blue Whale Encounters", "Continental Shelf", "Dolphin Pods"],
    ctaLabel: "Cruises & Seasons",
  },
  {
    id: "snake-farm-weligama",
    slug: "snake-farm-weligama",
    name: "Snake Farm Weligama",
    category: "heritage",
    badge: "Ayurvedic Herbal Sanctuary",
    distance: "~5.1 km",
    subtitle: "Reptile Conservation Sanctuary",
    description:
      "A respected conservation sanctuary and indigenous Ayurvedic medicine center dedicated to rescuing local reptiles and producing traditional snakebite antidotes.",
    features: ["Reptile Conservation", "Ayurvedic Antidotes", "Rescue Center"],
    ctaLabel: "Sanctuary Details",
  },
];

// 2 Culinary Spotlights
export const CULINARY_SPOTLIGHTS: CulinarySpotlightItem[] = [
  {
    id: "claypot-curries",
    title: "Claypot Curries & Ocean Bounty",
    tagline: "Coastal Gastronomy & Fresh Harbours",
    badge: "Daily Harbour Catch & Ahangama Espresso Bars",
    location: "Southern Coastline",
    description:
      "Slow-simmered over cinnamon firewood in porous clay pots, the coastal fare here revolves around freshly pressed coconut cream, scorched cumin, fragrant curry leaves, and yellowfin tuna brought ashore that very dawn by local outriggers.",
    meta: "Daily Harbour Catch & Local Claypot Traditions",
    images: [
      {
        src: "/images/hotel/property-grounds.jpg",
        alt: "Traditional clay pot curry feast in southern Sri Lanka",
      },
      {
        src: "/images/hotel/hero-beach.jpg",
        alt: "Fresh seafood grilling along Sri Lankan coastline",
      },
    ],
  },
  {
    id: "shirani-rice-curry",
    title: "Shirani Home Made Rice & Curry",
    tagline: "Host Recommendation • Local Gem",
    cursiveQuote: "authentic village flavours cooked over coconut embers...",
    badge: "Kumbalgama Village • Walking Distance",
    location: "Kumbalgama Village",
    description:
      "An unpretentious sanctuary of true southern cooking just moments from Noonna. Shirani welcomes guests onto her breezy open porch with vibrant banana leaf platters, caramelized pol sambol, tender young jackfruit (polos), and soulful island warmth.",
    meta: "Ask Concierge for Walking Directions & Seating",
    images: [
      {
        src: "/images/hotel/property-exterior.jpg",
        alt: "Shirani Home Made Rice and Curry in Kumbalgama",
      },
    ],
  },
];

// Surroundings Tables Data (Exact from code.html)
export const SURROUNDINGS_DATA: SurroundingsCategory[] = [
  {
    title: "What's Nearby",
    iconName: "Compass",
    items: [
      { name: "Kumbalgama Potters' Village", distance: "0.4 km" },
      { name: "Midigama Surf Break & Coves", distance: "1.4 km" },
      { name: "Lazy Left Surf Point", distance: "1.5 km" },
      { name: "Rams Right Surf Point", distance: "1.6 km" },
      { name: "Abimanagama Beach Cove", distance: "1.7 km" },
      { name: "Kushtarajagala Rock Relief", distance: "2.7 km" },
      { name: "Awee Coco Natural Pool", distance: "2.8 km" },
      { name: "Taprobane Island Weligama", distance: "3.1 km" },
      { name: "Secret Jungle Beach Trail", distance: "3.4 km" },
      { name: "Weligama Bay Surf Arc", distance: "3.5 km" },
    ],
  },
  {
    title: "Restaurants & Cafés",
    iconName: "Utensils",
    items: [
      { name: "Shirani Home Made Rice & Curry", distance: "2.1 km" },
      { name: "Kumbala Restaurant & Cafe", distance: "3.2 km" },
      { name: "Mettha's Home Cooked Meals", distance: "3.0 km" },
      { name: "Le' Fish Weligama Seafood", distance: "3.5 km" },
      { name: "Sithum Fish Point Mirissa", distance: "3.4 km" },
      { name: "After Surf Rooftop Cafe", distance: "3.6 km" },
      { name: "Kerabujen Restaurant Ahangama", distance: "3.1 km" },
      { name: "Aloha Coffee Gallery Midigama", distance: "5.5 km" },
      { name: "Salty Swamis Cafe Ahangama", distance: "3.2 km" },
      { name: "Lucky Fort 10-Curry Feast", distance: "24 km" },
    ],
  },
  {
    title: "Natural Beauty",
    iconName: "Waves",
    items: [
      { name: "Kumbalgama Coastline Reefs", distance: "0.0 km" },
      { name: "Ahangama Coastal Rock Pools", distance: "3.8 km" },
      { name: "Snake Farm Weligama Sanctuary", distance: "5.1 km" },
      { name: "Parrot Rock Mirissa Lookout", distance: "5.8 km" },
      { name: "Mirissa Coastal Promontory", distance: "6.0 km" },
      { name: "Coconut Tree Hill Red Cliff", distance: "6.2 km" },
      { name: "Secret Beach Mirissa Lagoon", distance: "6.5 km" },
      { name: "Koggala Lake & Mangrove Estuary", distance: "7.0 km" },
      { name: "Martin Wickramasinghe Gardens", distance: "7.8 km" },
      { name: "Polhena Coral Barrier Reef", distance: "12 km" },
    ],
  },
  {
    title: "Beaches in Neighbourhood",
    iconName: "Umbrella",
    items: [
      { name: "Midigama Beach", distance: "1.4 km" },
      { name: "Abimanagama Beach", distance: "1.7 km" },
      { name: "Weligama Beach", distance: "3.5 km" },
      { name: "Ahangama Beach", distance: "3.8 km" },
      { name: "Secret Beach Mirissa", distance: "6.5 km" },
      { name: "Mirissa Beach", distance: "6.0 km" },
      { name: "Polhena Beach", distance: "12 km" },
      { name: "Kabalana Beach", distance: "5.2 km" },
      { name: "Madiha Beach", distance: "14 km" },
      { name: "Talpe Beach & Rock Pools", distance: "16 km" },
    ],
  },
  {
    title: "Public Transport",
    iconName: "Train",
    items: [
      { name: "Kumbalgama Railway Station", distance: "1.2 km" },
      { name: "Midigama Railway Station", distance: "1.8 km" },
      { name: "Ahangama Railway Station", distance: "3.2 km" },
      { name: "Weligama Central Railway Station", distance: "3.8 km" },
      { name: "Weligama Main Bus Terminal", distance: "4.0 km" },
      { name: "Galle Central Railway Station", distance: "24 km" },
      { name: "Matara Central Railway Station", distance: "18 km" },
    ],
  },
  {
    title: "Closest Airports",
    iconName: "Plane",
    items: [
      { name: "Koggala Domestic Airport (KCT)", distance: "8.5 km" },
      { name: "Mattala Rajapaksa Int Airport (HRI)", distance: "95 km" },
      { name: "Bandaranaike Int Airport Colombo (CMB)", distance: "165 km" },
      { name: "Southern Expressway Access (Weligama)", distance: "6.5 km" },
    ],
  },
];

// Coastal Activities Highlights (6 cards)
export const ACTIVITIES_HIGHLIGHTS: ActivityHighlight[] = [
  {
    title: "Surf & Point Breaks",
    badge: "World-Class Swell",
    iconName: "Waves",
    description: "Beginner rollers at Weligama Bay to powerful shallow barrels at Rams and Lazy Left.",
  },
  {
    title: "Low-Tide Alcoves & Reef Walks",
    badge: "Natural Marine Basins",
    iconName: "Footprints",
    description: "Explore calm volcanic granite pools and sea-life shallows as the tide recedes.",
  },
  {
    title: "Snorkelling & Sea Turtles",
    badge: "Barrier Reef Lagoon",
    iconName: "Eye",
    description: "Swim alongside gentle resident green sea turtles in protected, placid reef waters.",
  },
  {
    title: "Deep Sea Whale Watching",
    badge: "Oceanic Trench",
    iconName: "Sailboat",
    description: "Morning expeditions into the deep continental shelf to view Blue Whales and dolphins.",
  },
  {
    title: "Cinnamon Plantation Walks",
    badge: "Living Spice Heritage",
    iconName: "TreePine",
    description: "Walk shaded island groves and observe master artisans hand-peeling single-origin quills.",
  },
  {
    title: "Cultural Shrines & Fort Heritage",
    badge: "Colonial Ramparts",
    iconName: "Landmark",
    description: "Walk cobblestone ramparts at Galle Fort and ancient 8th-century granite Bodhisattvas.",
  },
];

