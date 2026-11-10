export type HeritageBadge = {
  text: string;
  star?: boolean;
};

export type HeritageFact = {
  label: string;
  value: string;
  sub: string;
};

export type HeritageImage = {
  src?: string;
  alt: string;
  caption?: string;
  topBadge?: string;
  iconCaption?: string;
};

export type HeritageAction = {
  label: string;
  href: string;
  variant: "outline" | "primary";
  icon: "map" | "chat";
};

export type HeritageChapter = {
  id: string;
  number: number;
  division: 1 | 2;
  layout: "text-right" | "text-left";
  destination: string;
  title: string;
  subtitle: string;
  badges: HeritageBadge[];
  description: string;
  facts: HeritageFact[];
  actions: HeritageAction[];
  images: HeritageImage[];
  imageLayout:
    | "fort"
    | "kushta"
    | "potters"
    | "museum"
    | "taprobane"
    | "lagoon"
    | "stilt"
    | "whale"
    | "snake";
};

export type BeachCard = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  distance: string;
  imageBadge: string;
  tags: string[];
  footerIcon: "surfing" | "waves" | "camera" | "pool";
  footerLabel: string;
  mapHref: string;
  imageAlt: string;
};

export const DIVISION_1 = {
  eyebrow: "ancient chronicles & living craft...",
  title: "Division 1 • Sacred Granite, Fortified Ramparts & Ancestral Clay",
  description:
    "Kumbalgama and Weligama sit at the crossroads of ancient maritime spice routes and revered Buddhist heritage. Journey through our five self-guided cultural chapters before exploring the untamed waterways beyond.",
  icon: "temple",
} as const;

export const DIVISION_2 = {
  eyebrow: "untamed waterways & coastal wild...",
  title: "Division 2 • Mangrove Lagoons, Stilt Reefs & Ocean Giants",
  description:
    "Venture beyond the shore into brackish cinnamon waterways, living stilt fishing traditions, ocean abysses where blue whales surface, and local Ayurvedic reptile sanctuaries.",
  icon: "kayaking",
} as const;

export const HERITAGE_CHAPTERS: HeritageChapter[] = [
  {
    id: "galle-dutch-fort",
    number: 1,
    division: 1,
    layout: "text-right",
    destination: "Galle Dutch Fort",
    title: "The Living Coral-Stone Citadel",
    subtitle: "Galle Dutch Fort • 24 km from Noonna",
    badges: [
      { text: "Curator's Top Pick", star: true },
      { text: "UNESCO WORLD HERITAGE • 17TH CENTURY" },
    ],
    description:
      "Stroll 300-year-old bastions overlooking crashing Indian Ocean swells, discover quiet Dutch Reformed archways, and watch golden twilight settle over the ramparts. A vibrant urban fortress continuously inhabited by multi-generational merchant families.",
    facts: [
      { label: "Transit", value: "30 mins", sub: "Scenic train" },
      { label: "Timing", value: "4:30 PM", sub: "Sunset walk" },
      { label: "Entry", value: "Free Access", sub: "Public citadel" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Galle+Fort+Sri+Lanka",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20I%20would%20like%20to%20arrange%20a%20private%20driver%20to%20Galle%20Fort.",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "fort",
    images: [
      {
        alt: "Galle Dutch Fort Bastions and Lighthouse",
        topBadge: "Historic Citadel",
        caption: "Point Utrecht Bastion & 1939 White Lighthouse",
      },
      {
        alt: "Colonial stone masonry and quiet laneways of Galle Fort",
        caption: "Dutch Colonial Archways & Historic Citadel Walkways",
      },
    ],
  },
  {
    id: "kushtarajagala-rock-relief",
    number: 2,
    division: 1,
    layout: "text-left",
    destination: "Kushtarajagala Rock Relief",
    title: "The Colossal Granite Bodhisattva",
    subtitle: "Kushtarajagala • Weligama • 2.7 km from Noonna",
    badges: [{ text: "SACRED GRANITE RELIEF • 8TH–9TH C." }],
    description:
      "An enigmatic 8th-century Mahayana Bodhisattva Avalokiteshvara chiseled directly into a soaring natural granite boulder, sheltered by whispering sacred Bo tree canopies. Revered locally as the healed King of Leprosy and a guardian of coastal mariners.",
    facts: [
      { label: "Transit", value: "7 mins", sub: "Hotel tuk-tuk" },
      { label: "Duration", value: "40 mins", sub: "Contemplation" },
      { label: "Etiquette", value: "Modest Dress", sub: "Cover knees" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Kushtarajagala+Rock+Relief+Weligama",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20can%20you%20reserve%20a%20cruiser%20bike%20for%20a%20morning%20ride%20to%20Kushtarajagala?",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "kushta",
    images: [
      {
        alt: "Detailed full view of ancient Kushtarajagala carved rock relief monolith",
        topBadge: "Sacred Monolith • 8th C.",
        caption: "Mahayana Avalokiteshvara in Granite",
      },
      {
        alt: "Coastal ambiance and sacred grounds near Weligama",
        caption: "Sacred Bo Tree Canopies",
      },
    ],
  },
  {
    id: "kumbalgama-potters-village",
    number: 3,
    division: 1,
    layout: "text-right",
    destination: "Kumbalgama Potters' Village",
    title: "Centuries of Clay on the Wheel",
    subtitle: "Kumbalgama Potters' Village • 0.4 km from Noonna",
    badges: [
      { text: "Guest Favorite", star: true },
      { text: "LIVING HERITAGE & ARTISAN CRAFT" },
    ],
    description:
      "Steps from Noonna's gate lies Kumbalgama's ancestral potting settlement, where local families have spun earthenware cooking vessels from river silt for over five generations. An authentic glimpse into unhurried village craftsmanship.",
    facts: [
      { label: "Transit", value: "4 mins", sub: "Gentle walk" },
      { label: "Timing", value: "9:00 AM", sub: "Morning wheels" },
      { label: "Access", value: "Welcome", sub: "Direct pottery" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Kumbalgama+Pottery+Village+Sri+Lanka",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20could%20a%20guide%20walk%20with%20us%20to%20the%20Kumbalgama%20pottery%20hamlet%20tomorrow%20morning?",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "potters",
    images: [
      {
        alt: "Master Sri Lankan artisan shaping earthenware clay vessel on wheel",
        topBadge: "Traditional Wheel Craft",
        caption: "Generational Master Shaping Terracotta Clay",
      },
      {
        alt: "Tropical sun-curing yards and red clay patios in Kumbalgama",
        caption:
          "Continuous wheel craft sustained across five ancestral village generations",
      },
    ],
  },
  {
    id: "martin-wickramasinghe-museum",
    number: 4,
    division: 1,
    layout: "text-left",
    destination: "Martin Wickramasinghe Museum",
    title: "The Guardian of Coastal Folk Lore",
    subtitle: "Martin Wickramasinghe Museum • 7.8 km from Noonna",
    badges: [{ text: "SOUTHERN FOLKLORE & CULTURAL ESTATE • KOGGALA" }],
    description:
      "Nestled across seven tranquil acres of botanical gardens, this historic ancestral estate showcases antique outrigger canoes, traditional string puppetry, dance masks, and early agricultural implements that shaped southern Sri Lankan life.",
    facts: [
      { label: "Transit", value: "12 mins", sub: "Coastal road" },
      { label: "Hours", value: "9am – 5pm", sub: "Open daily" },
      { label: "Entry", value: "~500 LKR", sub: "Trust ticket" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Martin+Wickramasinghe+Folk+Museum+Complex+Koggala",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20we%20would%20love%20to%20visit%20the%20Martin%20Wickramasinghe%20Museum%20this%20afternoon.",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "museum",
    images: [
      {
        alt: "Martin Wickramasinghe Museum Folk Heritage Estate in Koggala",
        topBadge: "Ancestral Folk Estate",
        caption: "Botanical Gardens & Traditional Southern Artifacts",
      },
      {
        alt: "Quiet scenic coastal atmosphere near Koggala and Weligama",
        caption: "Rich Literary and Folk Traditions of Southern Sri Lanka",
      },
    ],
  },
  {
    id: "taprobane-island",
    number: 5,
    division: 1,
    layout: "text-right",
    destination: "Taprobane Island",
    title: "The Count's Floating Rock Sanctuary",
    subtitle: "Taprobane Island • 2.2 km from Noonna",
    badges: [
      { text: "MARITIME ARCHITECTURE & COASTAL LEGEND • WELIGAMA BAY" },
    ],
    description:
      "A romantic 2.5-acre rocky promontory jutting from Weligama Bay, transformed in the 1920s by the eccentric Count de Mauny as his personal ocean fantasy retreat. Visited by luminaries from Paul Bowles to kings and poets, it remains a spellbinding sight.",
    facts: [
      { label: "Transit", value: "6 mins", sub: "Tuk-tuk" },
      { label: "Timing", value: "Golden Hour", sub: "Sunset vista" },
      { label: "Access", value: "Shoreline", sub: "Bay view" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Taprobane+Island+Weligama",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20what%20is%20the%20best%20vantage%20spot%20to%20view%20Taprobane%20Island%20at%20sunset?",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "taprobane",
    images: [
      {
        alt: "Aerial perspective of Taprobane Island showing colonial villa surrounded by azure waters",
        topBadge: "Aerial Island & Villa",
        caption: "Private Islet in Weligama Bay",
        iconCaption:
          "Count de Mauny's romantic retreat anchored off the beach",
      },
      {
        alt: "Scenic Weligama Bay turquoise tidal waters and headlands",
        caption: "Turquoise Reef Basin & Wadeable Sand Spit at Low Tide",
      },
    ],
  },
  {
    id: "koggala-lake-mangroves",
    number: 6,
    division: 2,
    layout: "text-left",
    destination: "Koggala Lake & Cinnamon Mangroves",
    title: "Koggala Lake & Cinnamon Mangroves",
    subtitle: "Koggala Lagoon • 7.5 km from Noonna",
    badges: [
      { text: "Curator's Top Pick", star: true },
      { text: "LAGOON BIOSPHERE • BIRDS & SPICE ISLANDS" },
    ],
    description:
      "Board a private wooden lagoon boat gliding past lush mangrove tunnels and remote cinnamon-peeling islets. Watch sea eagles dive while tasting freshly scraped warm cinnamon bark prepared by island families.",
    facts: [
      { label: "Transit", value: "12 mins", sub: "Tuk-tuk to jetty" },
      { label: "Timing", value: "2.5 Hours", sub: "Morning / 4 PM" },
      { label: "Access", value: "Private Boat", sub: "Concierge booking" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Koggala+Lake+Sri+Lanka",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20please%20reserve%20a%20private%20cinnamon%20mangrove%20boat%20safari.",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "lagoon",
    images: [
      {
        alt: "Serene misty lagoon waterways of Koggala Lake",
        caption: "Cinnamon Island & Mangrove Lagoons",
      },
      {
        alt: "Fresh cinnamon peeling on islet in Koggala lake",
        caption: "Artisanal Cinnamon Bark Processing & Spice Gardens",
      },
    ],
  },
  {
    id: "koggala-stilt-fishermen-coast",
    number: 7,
    division: 2,
    layout: "text-right",
    destination: "Koggala Stilt Fishermen Coast",
    title: "Koggala Stilt Fishermen Coast",
    subtitle: "Ahangama & Koggala Reefs • 6 km from Noonna",
    badges: [
      { text: "Guest Favorite", star: true },
      { text: "ICONIC MARITIME HERITAGE • REEF LIVING" },
    ],
    description:
      "A centuries-old fishing tradition known as 'Ritipanna', practiced exclusively along this stretch of southern reef. Fishermen balance precariously on slender wooden poles anchored into coral fissures to catch spotted herrings without casting shadows.",
    facts: [
      { label: "Transit", value: "8 mins", sub: "Coastal scooter" },
      { label: "Best Hour", value: "6:30 AM", sub: "First dawn" },
      { label: "Etiquette", value: "Respectful", sub: "Support families" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Stilt+Fishermen+Koggala",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20we%20want%20to%20view%20stilt%20fishermen%20at%20dawn.",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "stilt",
    images: [
      {
        alt: "Traditional stilt fishermen practicing Ritipanna perched on poles above morning coastal waves",
        topBadge: "Dawn Patrol • 06:00 AM",
        caption: "Ritipanna • Ancient Stilt Fishing (Ahangama & Koggala Reefs)",
      },
      {
        alt: "Reef surge and calm waters around Ahangama fishing perches",
        caption: "Handmade Wooden Petta & Shallow Coral Shelves",
      },
    ],
  },
  {
    id: "whale-watching-cruises",
    number: 8,
    division: 2,
    layout: "text-left",
    destination: "Whale Watching Cruises",
    title: "Whale Watching in Mirissa",
    subtitle: "Mirissa Fishery Harbour • 11 km from Noonna",
    badges: [{ text: "INDIAN OCEAN EXPEDITION • OCEAN GIANTS" }],
    description:
      "The deep continental shelf drops off just a few nautical miles off Mirissa, creating one of the world's most reliable corridors to encounter majestic Blue Whales, Bryde's whales, and playful spinner dolphin pods in the open Indian Ocean.",
    facts: [
      { label: "Transit", value: "18 mins", sub: "Hotel vehicle" },
      { label: "Departure", value: "6:00 AM", sub: "Harbour launch" },
      { label: "Season", value: "Nov – Apr", sub: "Calm waters" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Mirissa+Harbour+Sri+Lanka",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20please%20arrange%20a%20private%20charter%20whale%20watching%20cruise%20from%20Mirissa.",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "whale",
    images: [
      {
        alt: "Blue Whale fluke diving into Indian Ocean",
        caption: "Blue Whale Fluke Diving • Mirissa Trench",
      },
      {
        alt: "Whale pod surfacing alongside safari boat",
        caption: "Whale Pod Surfacing Alongside Safari Boat",
      },
      {
        alt: "Double-decker vessel tracking Indian Ocean giants",
        caption: "Double-Decker Expedition Vessel",
      },
      {
        alt: "Coastal whale watching vessel Gindara",
        caption: "Coastal Whale Vessel 'Gindara'",
      },
    ],
  },
  {
    id: "snake-farm-weligama",
    number: 9,
    division: 2,
    layout: "text-right",
    destination: "Snake Farm Weligama",
    title: "Snake Farm Weligama",
    subtitle: "Udukawa, Weligama • 6.2 km from Noonna",
    badges: [{ text: "AYURVEDIC MEDICINE & WILDLIFE RESCUE" }],
    description:
      "Run by multi-generational Ayurvedic doctors practicing traditional antivenom therapies, this renowned sanctuary rescues and rehabilitates local pythons, vipers, and cobras while educating visitors on ethical wildlife coexistence.",
    facts: [
      { label: "Transit", value: "10 mins", sub: "Tuk-tuk" },
      { label: "Hours", value: "9am – 5pm", sub: "Open daily" },
      { label: "Entry", value: "~1,500 LKR", sub: "Rescue fund" },
    ],
    actions: [
      {
        label: "Open in Google Maps",
        href: "https://maps.google.com/?q=Snake+Farm+Weligama",
        variant: "outline",
        icon: "map",
      },
      {
        label: "Ask Concierge on WhatsApp",
        href: "https://wa.me/?text=Hello%20Concierge,%20we%20would%20like%20to%20visit%20the%20Weligama%20Snake%20Farm.",
        variant: "primary",
        icon: "chat",
      },
    ],
    imageLayout: "snake",
    images: [
      {
        alt: "Photographer alongside Ayurvedic handler safely observing spectacled cobra",
        topBadge: "Guided Photography & Safe Handling",
        caption: "Ayurvedic Conservation & Educational Encounters",
      },
      {
        alt: "Spectacled Cobra in sanctuary courtyard",
        caption: "Spectacled Cobra",
      },
      {
        alt: "Ayurvedic handler calmly holding snake in sanctuary grounds",
        caption: "Ayurvedic Coexistence",
      },
      {
        alt: "Guest holding gentle rescued Indian rock python",
        caption: "Gentle Python Interaction & Wildlife Rehabilitation",
      },
    ],
  },
];

export const BEACH_CARDS: BeachCard[] = [
  {
    title: "Midigama Beach & Coves",
    subtitle: "Surf & Snorkel Coves",
    category: "Surf & Snorkel",
    description:
      "Protected quiet sandy pockets alongside legendary surf breaks like Lazy Left and Rams, perfect for uncrowded coastal strolls and reef snorkeling.",
    distance: "0.8 km • 3 mins",
    imageBadge: "Surf & Snorkel",
    tags: ["Tide Pools", "Reef Snorkel", "Quiet Sands"],
    footerIcon: "surfing",
    footerLabel: "Shallow Reefs",
    mapHref: "https://maps.google.com/?q=Midigama+Beach+Sri+Lanka",
    imageAlt: "Midigama Beach & Coves",
  },
  {
    title: "Weligama Bay Surf Arc",
    subtitle: "Gentle Sands & Learn to Surf",
    category: "Beginner Waves",
    description:
      "A sprawling, sheltered sandy crescent bay renowned worldwide for forgiving rolling waves, barefoot surf schools, and vibrant beach cafes.",
    distance: "2.0 km • 5 mins",
    imageBadge: "Beginner Waves",
    tags: ["Beginner Surf", "Sandy Bottom", "Beach Cafes"],
    footerIcon: "waves",
    footerLabel: "Sandy Bottom",
    mapHref: "https://maps.google.com/?q=Weligama+Beach+Sri+Lanka",
    imageAlt: "Weligama Bay Surf Arc",
  },
  {
    title: "Coconut Tree Hill",
    subtitle: "Panoramic Promontory & Snorkeling",
    category: "Scenic Vista",
    description:
      "An iconic red-earth coastal cliff crowned by swaying palms overlooking breaking azure waves, with a hidden crescent cove below for snorkeling.",
    distance: "6.5 km • 14 mins",
    imageBadge: "Scenic Vista",
    tags: ["Sunset Vista", "Snorkel Cove", "Palm Groves"],
    footerIcon: "camera",
    footerLabel: "Sunset View",
    mapHref: "https://maps.google.com/?q=Coconut+Tree+Hill+Mirissa",
    imageAlt: "Coconut Tree Hill & Secret Cove",
  },
  {
    title: "Secret Beach Mirissa",
    subtitle: "Secluded Tidal Cove & Pools",
    category: "Tide Pools",
    description:
      "Tucked behind headlands via a scenic jungle trail, featuring natural granite tide pools and calm turquoise bathing spots sheltered from open ocean swell.",
    distance: "7.2 km • 16 mins",
    imageBadge: "Tide Pools",
    tags: ["Tide Pools", "Secluded Cove", "Snorkel Waters"],
    footerIcon: "pool",
    footerLabel: "Tidal Lagoons",
    mapHref: "https://maps.google.com/?q=Secret+Beach+Mirissa",
    imageAlt: "Secret Beach Mirissa",
  },
];
