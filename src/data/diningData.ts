export interface DiningHighlight {
  icon: "dinner_dining" | "skillet" | "local_cafe" | "coffee";
  label: string;
  value: string;
}

export interface DiningMetaItem {
  icon: "schedule" | "call" | "location_on";
  text: string;
  href?: string;
  emphasis?: string;
  truncate?: boolean;
}

export interface DiningAction {
  label: string;
  icon: "directions" | "call" | "table_restaurant" | "chat";
  href: string;
  variant: "default" | "outline" | "primary";
  external?: boolean;
}

export interface DiningThumbnail {
  src: string;
  alt: string;
  label?: string;
}

export interface DiningVenueModal {
  title: string;
  tag: string;
  dist: string;
  rating: string;
  reviews: string;
  price: string;
  hours: string;
  address: string;
  img: string;
  desc: string;
  specialties: string;
  dietary: string;
}

export type DiningCategory = "clay-pot" | "beach-grill" | "rooftop" | "cafe";

export interface DiningVenue {
  id: string;
  number: number;
  featured?: boolean;
  categories: DiningCategory[];
  name: string;
  subtitle: string;
  description: string;
  locationBadge: string;
  categoryBadge: string;
  secondaryPill?: string;
  rating: string;
  reviews: string;
  priceNote?: string;
  featuredFooterLeft?: string;
  mainImage: {
    src: string;
    alt: string;
  };
  thumbs: DiningThumbnail[];
  highlights?: DiningHighlight[];
  meta: DiningMetaItem[];
  actions: DiningAction[];
  modal: DiningVenueModal;
}

export const DINING_FILTERS: { id: DiningCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "clay-pot", label: "Clay Pot Feasts" },
  { id: "beach-grill", label: "Beach Grills" },
  { id: "rooftop", label: "Rooftop Vistas" },
  { id: "cafe", label: "Artisan Cafes" },
];

export const DINING_HERO = {
  eyebrow: "wood-fired clay pots & coastal feasts...",
  title: "A Taste of Sri Lanka",
  subtitle:
    "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline.",
  deck: "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline.",
  image: "/images/experiences/dining/a-taste-of-sri-lanka/718435113_18426276415135798_8947026187997305840_n.jpg",
  heroImg: "/images/experiences/dining/a-taste-of-sri-lanka/718435113_18426276415135798_8947026187997305840_n.jpg",
  highlights: [
    { label: "Traditional Clay Pots", icon: "soup_kitchen" as const },
    { label: "Fresh Beach Grills", icon: "outdoor_grill" as const },
    { label: "Artisanal Surf Cafes", icon: "coffee" as const },
  ],
};

export const DINING_VITALS = {
  title: "Southern Coast Gastronomy Guide",
  subtitle: "10 handpicked dining sanctuaries personally recommended for Noonna guests.",
  pills: [
    "All 10 Destinations",
    "Clay Pot Feasts",
    "Beach Grills",
    "Rooftop Vistas",
    "Artisan Cafes",
  ],
};

export const DINING_DIRECTORY = {
  eyebrow: "Curated Culinary Directory",
  title: "10 Coastal Dining Destinations",
  subtitle:
    "From legendary 10-curry terracotta platters to sunset beach barbecues and tranquil surf garden roasters. Click any destination for menu notes and concierge bookings.",
};

export const DINING_VENUES: DiningVenue[] = [
  {
    "id": "lucky-fort",
    "number": 1,
    "featured": false,
    "categories": ["clay-pot"],
    "name": "Lucky Fort Restaurant",
    "subtitle": "Mama Lucky's Family Kitchen since 1999 • No 7 Parawa St, Galle Fort",
    "description": "Mama Lucky's celebrated 10-curry terracotta feast in an intimate Dutch Fort garden courtyard. All curries prepared fresh with hand-pressed coconut milk & traditional spices.",
    "locationBadge": "Galle Fort • ~24 km",
    "categoryBadge": "Clay Pot Feast",
    "secondaryPill": "UNESCO Galle Fort",
    "rating": "4.5",
    "reviews": "(1,950 TripAdvisor Reviews)",
    "mainImage": {
      "src": "/images/experiences/dining/lucky-fort-restaurant/01-img_1784439200_4f65f76a.webp",
      "alt": "Lucky Fort Restaurant"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/lucky-fort-restaurant/01-img_1784439200_4f65f76a.webp",
        "alt": "Lucky Fort Restaurant"
      },
      {
        "src": "/images/experiences/dining/lucky-fort-restaurant/02-getlstd-property-photo.jpg",
        "alt": "Lucky Fort Restaurant property"
      },
      {
        "src": "/images/experiences/dining/lucky-fort-restaurant/03-caption1.jpg",
        "alt": "Lucky Fort Restaurant dining"
      },
      {
        "src": "/images/experiences/dining/lucky-fort-restaurant/04-caption.jpg",
        "alt": "Lucky Fort Restaurant dish"
      }
    ],
    "highlights": [
      {
        "icon": "dinner_dining",
        "label": "Rice & 10 Different Curries",
        "value": "Rs 3,250 (Feast for 2)"
      }
    ],
    "meta": [
      {
        "icon": "schedule",
        "text": "12:00 PM – 10:30 PM",
        "emphasis": "Open daily"
      },
      {
        "icon": "call",
        "text": "+94 91 2 242922",
        "href": "tel:+94912242922"
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Lucky+Fort+Restaurant+Galle+Fort",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Call",
        "icon": "call",
        "href": "tel:+94912242922",
        "variant": "outline",
        "external": false
      },
      {
        "label": "Book Table",
        "icon": "table_restaurant",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20Lucky%20Fort%20Restaurant%20Galle%20Fort",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Lucky Fort Restaurant",
      "tag": "Clay Pot Feast",
      "dist": "Galle Fort • ~24 km",
      "rating": "4.7",
      "reviews": "(717 reviews)",
      "price": "Rs 1,000–5,000",
      "hours": "12:00 PM – 9:00 PM daily • Open for lunch & dinner",
      "address": "07 Parawa St, Galle Fort, Southern Province",
      "img": "/images/experiences/dining/lucky-fort-restaurant/01-img_1784439200_4f65f76a.webp",
      "desc": "A celebrated Dutch Fort institution renowned for its traditional 10-curry terracotta feast served in an airy colonial garden courtyard. Every individual dish celebrates ancestral southern seasoning without shortcuts.",
      "specialties": "Legendary 10-curry feast featuring young jackfruit (polos), spicy eggplant moju, toasted dhal, mango curry, and golden papadams.",
      "dietary": "100% Vegan feast option, dairy-free coconut curries, gluten-free red rice available upon request."
    }
  },
  {
    "id": "shirani",
    "number": 2,
    "featured": false,
    "categories": ["clay-pot"],
    "name": "Shirani Home Made Rice & Curry",
    "subtitle": "Shirani & Lala's Family Kitchen • No. 36 Kadabaddagama, Gurubebila",
    "description": "Simmered slowly over coconut husk fire in hand-crafted clay pots on a breezy village veranda 3 minutes from our gate. Renowned for rotating daily 6-curry feasts, mango curry, and personal cooking lessons.",
    "locationBadge": "Kadabedda • 250m Walk",
    "categoryBadge": "Hotel Favorite",
    "secondaryPill": "3 Mins Walk",
    "rating": "4.8",
    "reviews": "(288 Google • 4.7★ 172 TripAdvisor)",
    "mainImage": {
      "src": "/images/experiences/dining/shirani-home-made-rice-and-curry/01-img-20191009-195211-largejpg.jpg",
      "alt": "Shirani Home Made Rice & Curry"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/shirani-home-made-rice-and-curry/01-img-20191009-195211-largejpg.jpg",
        "alt": "Shirani Home Made Rice & Curry"
      },
      {
        "src": "/images/experiences/dining/shirani-home-made-rice-and-curry/02-img-20161230-151234-714.jpg",
        "alt": "Shirani Home Made Rice & Curry meal"
      },
      {
        "src": "/images/experiences/dining/shirani-home-made-rice-and-curry/03-e272a269-81c8-4c67-acf2-2eafe944f1a8.jpg",
        "alt": "Shirani Home Made Rice & Curry dishes"
      },
      {
        "src": "/images/experiences/dining/shirani-home-made-rice-and-curry/04-739ad20e-87f0-4519-b415-0d328ec573a4.jpg",
        "alt": "Shirani Home Made Rice & Curry spread"
      }
    ],
    "highlights": [
      {
        "icon": "dinner_dining",
        "label": "Daily 6 Curries Feast & Fish",
        "value": "Rs 1,000–2,000"
      }
    ],
    "meta": [
      {
        "icon": "schedule",
        "text": "8:00 AM – 10:00 PM",
        "emphasis": "Open daily"
      },
      {
        "icon": "call",
        "text": "+94 77 920 6951",
        "href": "tel:+94779206951"
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Shirani+Home+Made+Rice+Curry+Weligama",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Call",
        "icon": "call",
        "href": "tel:+94779206951",
        "variant": "outline",
        "external": false
      },
      {
        "label": "Book / Class",
        "icon": "table_restaurant",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20Shirani%20Home%20Made%20Rice%20&%20Curry%20or%20Cooking%20Class",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Shirani Home Made Rice & Curry",
      "tag": "Hotel Favorite",
      "dist": "Kadabedda • 250m Walk (3 Mins)",
      "rating": "4.8",
      "reviews": "(288 reviews)",
      "price": "Rs 1,000–2,000",
      "hours": "8:00 AM – 10:00 PM daily • Fresh midday hearth",
      "address": "No. 36, Kadabaddagama, Gurubebila (Near Noonna Beach Hotel)",
      "img": "/images/experiences/dining/shirani-home-made-rice-and-curry/01-img-20191009-195211-largejpg.jpg",
      "desc": "Simmered slowly over coconut husk fire in hand-molded terracotta pots on a breezy village veranda just 3 minutes leisurely walk from our hotel gates. Infinite hospitality and true village cooking.",
      "specialties": "Wood-fired young jackfruit curry, black pepper yellowfin tuna, fresh hand-pounded pol sambol, and sweet-sour eggplant moju.",
      "dietary": "100% Vegan & Vegetarian feast options, gluten-free heirloom unpolished rice, completely dairy-free."
    }
  },
  {
    "id": "kumbala",
    "number": 3,
    "featured": false,
    "categories": ["clay-pot"],
    "name": "Kumbala Restaurant & Cafe",
    "subtitle": "Community Gathering Hub • 32/A Kadabeddagama Rd, Weligama",
    "description": "Casual, cozy surfer & traveler hub celebrated for authentic Sri Lankan rice & curry buffet evenings, healthy fresh juices, and western comforts like chicken schnitzel. Free parking available.",
    "locationBadge": "Gurubebila • ~2.1 km",
    "categoryBadge": "Community Buffet & Cafe",
    "secondaryPill": "Kadabeddagama",
    "rating": "4.7",
    "reviews": "(47 Google Reviews • #47 in Weligama)",
    "mainImage": {
      "src": "/images/experiences/dining/kumbala-restaurant-and-cafe/01-r9dd-Kumbala-Restaurant-and-Cafe-food.jpg",
      "alt": "Kumbala Restaurant & Cafe"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/kumbala-restaurant-and-cafe/01-r9dd-Kumbala-Restaurant-and-Cafe-food.jpg",
        "alt": "Kumbala Restaurant & Cafe food"
      },
      {
        "src": "/images/experiences/dining/kumbala-restaurant-and-cafe/02-r12a-Kumbala-Restaurant-and-Cafe-fish-and-chips.jpg",
        "alt": "Kumbala Restaurant & Cafe fish and chips"
      },
      {
        "src": "/images/experiences/dining/kumbala-restaurant-and-cafe/03-r929-interior-Kumbala-Restaurant-and-Cafe-2025-11.jpg",
        "alt": "Kumbala Restaurant & Cafe interior"
      },
      {
        "src": "/images/experiences/dining/kumbala-restaurant-and-cafe/04-re0d-meals-Kumbala-Restaurant-and-Cafe-2025-11.jpg",
        "alt": "Kumbala Restaurant & Cafe meals"
      }
    ],
    "highlights": [
      {
        "icon": "dinner_dining",
        "label": "All-You-Can-Eat Curry Buffet",
        "value": "Rs 1,500–2,500 ($5–8)"
      }
    ],
    "meta": [
      {
        "icon": "schedule",
        "text": "8:00 AM – 10:00 PM",
        "emphasis": "Open daily"
      },
      {
        "icon": "location_on",
        "text": "32/A Kadabeddagama Rd, Weligama 81700",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Kumbala+Restaurant+Cafe+Gurubebila",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Inquire",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20or%20inquiring%20about%20Kumbala%20Restaurant%20%26%20Cafe",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Kumbala Restaurant & Cafe",
      "tag": "Community Buffet",
      "dist": "Gurubebila • ~2.1 km",
      "rating": "4.6",
      "reviews": "(47 reviews)",
      "price": "Rs 1,200–2,500",
      "hours": "8:00 AM – 10:00 PM • Evening Buffet 6:30 PM",
      "address": "32/A Kadabeddagama Rd, Weligama 81700",
      "img": "/images/experiences/dining/kumbala-restaurant-and-cafe/01-r9dd-Kumbala-Restaurant-and-Cafe-food.jpg",
      "desc": "A friendly surf outpost celebrated for wholesome, generous ingredients and evening all-you-can-eat Sri Lankan buffet tables surrounded by travelers and wave riders.",
      "specialties": "All-you-can-eat evening clay pot buffet, coconut dhal curry, beetroot curry, pumpkin stew, and roti wraps.",
      "dietary": "Abundant vegetarian and plant-forward selections prepared fresh twice daily."
    }
  },
  {
    "id": "mettha",
    "number": 4,
    "featured": false,
    "categories": ["clay-pot"],
    "name": "Mettha's Home Cooked Meals",
    "subtitle": "Mettha's Family Veranda Kitchen • Yaddehimulla Road, Unawatuna",
    "description": "Authentic family-run traditional eatery in Unawatuna known for fresh rotating curries (jackfruit, beetroot, aubergine, mushroom, dhal, chicken & ocean prawns) cooked upon order by Mettha with custom spice levels.",
    "locationBadge": "Unawatuna • ~18 km",
    "categoryBadge": "Woman-Owned • Local Gem",
    "rating": "4.8",
    "reviews": "(210 Reviews • Traditional Sri Lankan)",
    "priceNote": "Rs 1,000–2,000",
    "mainImage": {
      "src": "/images/experiences/dining/metthas-home-cooked-meals/01-curry-vegetables-chicken.jpg",
      "alt": "Mettha's Home Cooked Meals"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/metthas-home-cooked-meals/01-curry-vegetables-chicken.jpg",
        "alt": "Mettha's Home Cooked Meals curry"
      },
      {
        "src": "/images/experiences/dining/metthas-home-cooked-meals/02-caption-1.jpg",
        "alt": "Mettha's Home Cooked Meals dish"
      },
      {
        "src": "/images/experiences/dining/metthas-home-cooked-meals/03-caption-2.jpg",
        "alt": "Mettha's Home Cooked Meals spread"
      },
      {
        "src": "/images/experiences/dining/metthas-home-cooked-meals/04-mettha-s.jpg",
        "alt": "Mettha's Home Cooked Meals"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "8:00 AM – 10:00 PM",
        "emphasis": "Daily"
      },
      {
        "icon": "location_on",
        "text": "Yaddehimulla Road, Unawatuna 80600",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Mettha's+Home+Cooked+Meals+Unawatuna",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Call",
        "icon": "call",
        "href": "tel:+94775016678",
        "variant": "outline",
        "external": false
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20or%20inquiring%20about%20Mettha's%20Home%20Cooked%20Meals%20Unawatuna",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Mettha Home Cooked Meals",
      "tag": "Garden Porch",
      "dist": "Mirissa • ~5.5 km",
      "rating": "4.8",
      "reviews": "(190 reviews)",
      "price": "Rs 1,000–2,200",
      "hours": "11:30 AM – 9:30 PM daily",
      "address": "Beach Road / Udupila area, Mirissa",
      "img": "/images/experiences/dining/metthas-home-cooked-meals/01-curry-vegetables-chicken.jpg",
      "desc": "Generational home recipes served under garden fruit trees on a tranquil covered family porch away from the busy harbor strip.",
      "specialties": "Coconut cream okra, devilled prawns, caramelized onion sambol, and gentle golden pumpkin curry.",
      "dietary": "Naturally plant-focused, made to order with organic spices."
    }
  },
  {
    "id": "le-fish",
    "number": 5,
    "featured": false,
    "categories": ["beach-grill"],
    "name": "Le' Fish Weligama",
    "subtitle": "Beachfront Fresh Catch & Charcoal Embers • Weligama Bypass Road",
    "description": "Feet-in-the-sand seafood feast. Pick fresh whole reef fish, king prawns, and calamari grilled over hot charcoal embers.",
    "locationBadge": "Weligama Beach • ~3.2 km",
    "categoryBadge": "Fresh Catch Grill",
    "rating": "4.7",
    "reviews": "(1,453 Reviews • #5 in Weligama)",
    "priceNote": "Rs 3,000–8,000",
    "mainImage": {
      "src": "/images/experiences/dining/le-fish-weligama/01-rabd-Le-Fish-Weligama-mussels.jpg",
      "alt": "Le' Fish Weligama"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/le-fish-weligama/01-rabd-Le-Fish-Weligama-mussels.jpg",
        "alt": "Le' Fish Weligama mussels"
      },
      {
        "src": "/images/experiences/dining/le-fish-weligama/02-r096-Le-Fish-Weligama-food-2025-11-4.jpg",
        "alt": "Le' Fish Weligama food"
      },
      {
        "src": "/images/experiences/dining/le-fish-weligama/03-r802-food-Le-Fish-Weligama-2025-11-2.jpg",
        "alt": "Le' Fish Weligama seafood"
      },
      {
        "src": "/images/experiences/dining/le-fish-weligama/04-r9fd-Le-Fish-Weligama-interior-2025-11.jpg",
        "alt": "Le' Fish Weligama interior"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "10:00 AM – 10:00 PM",
        "emphasis": "Open daily"
      },
      {
        "icon": "location_on",
        "text": "Weligama Bypass Beach Rd",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Le+Fish+Weligama+Bypass+Road",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20a%20table%20at%20Le%27%20Fish%20Weligama",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Le' Fish Weligama",
      "tag": "Fresh Catch Grill",
      "dist": "Weligama Beach • ~3.2 km",
      "rating": "4.8",
      "reviews": "(1.5K reviews)",
      "price": "Rs 3,000–8,000",
      "hours": "10:00 AM – 10:00 PM daily",
      "address": "Weligama Bypass Beach Rd, Weligama Bay",
      "img": "/images/experiences/dining/le-fish-weligama/01-rabd-Le-Fish-Weligama-mussels.jpg",
      "desc": "Barefoot dining directly on the sands of Weligama Bay. Hand-select your seafood catch from iced wooden dhow trays, grilled directly over coconut charcoal.",
      "specialties": "Charcoal grilled jumbo prawns, whole red snapper with garlic butter, calamari steaks, and sea-salt roasted sweet potatoes.",
      "dietary": "Pescatarian paradise; gluten-free grilled options with fresh lime and garlic herbs."
    }
  },
  {
    "id": "sithum",
    "number": 6,
    "featured": false,
    "categories": ["beach-grill"],
    "name": "Sithum Fish Point",
    "subtitle": "Casual Beachfront Grill • Bypass Beach Road, Weligama",
    "description": "Casual seaside tables on the sand renowned for generous portions of freshly caught red snapper, tuna, and garlic prawns.",
    "locationBadge": "Weligama Beach • ~3.0 km",
    "categoryBadge": "Seafood Platters",
    "rating": "4.9",
    "reviews": "(268 Reviews • 270 Online Ratings)",
    "priceNote": "Rs 2,000–6,000",
    "mainImage": {
      "src": "/images/experiences/dining/sithum-fish-point/01-1mi33224x93nv5y0iBE26_Q90.avif",
      "alt": "Sithum Fish Point"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/sithum-fish-point/01-1mi33224x93nv5y0iBE26_Q90.avif",
        "alt": "Sithum Fish Point"
      },
      {
        "src": "/images/experiences/dining/sithum-fish-point/02-475535421_122227507472077882_2078322202998919114_n.jpg",
        "alt": "Sithum Fish Point dining"
      },
      {
        "src": "/images/experiences/dining/sithum-fish-point/03-fish-point-weligama.jpg",
        "alt": "Sithum Fish Point seafood"
      },
      {
        "src": "/images/experiences/dining/sithum-fish-point/04-caption.jpg",
        "alt": "Sithum Fish Point dish"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "9:00 AM – 10:00 PM",
        "emphasis": "Open"
      },
      {
        "icon": "location_on",
        "text": "Bypass Beach Road, Weligama",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Sithum+Fish+Point+Bypass+Beach+Road+Weligama",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20or%20inquiring%20about%20Sithum%20Fish%20Point%20Weligama",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Sithum Fish Point",
      "tag": "Seafood Platters",
      "dist": "Weligama Beach • ~3.0 km",
      "rating": "4.9",
      "reviews": "(268 reviews)",
      "price": "Rs 2,000–6,000",
      "hours": "9:00 AM – 10:00 PM daily",
      "address": "Bypass Beach Road, Weligama Bay",
      "img": "/images/experiences/dining/sithum-fish-point/01-1mi33224x93nv5y0iBE26_Q90.avif",
      "desc": "A no-frills, top-rated local fishermen point serving enormous sizzling platters of freshly brought morning catch at candid prices.",
      "specialties": "Garlic butter lobster, grilled tuna steaks, Sri Lankan curried crab, and cassava chips.",
      "dietary": "Fresh seafood simply grilled with sea salt, pepper, and coconut oil."
    }
  },
  {
    "id": "after-surf",
    "number": 7,
    "featured": false,
    "categories": ["rooftop", "cafe"],
    "name": "After Surf Rooftop Cafe",
    "subtitle": "Top floor above Surf Camp • Palabandara Watta, Weligama",
    "description": "Relaxed breezy rooftop above Weligama surf break serving poke bowls, grilled tacos, smoothie jars, and sunset mocktails.",
    "locationBadge": "Pelabandara Watta • ~3.5 km",
    "categoryBadge": "Sunset Rooftop",
    "rating": "4.8",
    "reviews": "(95 Reviews • 5.0 TripAdvisor)",
    "priceNote": "Rs 2,000–4,000",
    "mainImage": {
      "src": "/images/experiences/dining/after-surf-rooftop-cafe/01-604218999_17990426393879642_3975295764916320382_n.jpg",
      "alt": "After Surf Rooftop Cafe"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/after-surf-rooftop-cafe/01-604218999_17990426393879642_3975295764916320382_n.jpg",
        "alt": "After Surf Rooftop Cafe"
      },
      {
        "src": "/images/experiences/dining/after-surf-rooftop-cafe/02-607899093_17991285635879642_392793167178096304_n.jpg",
        "alt": "After Surf Rooftop Cafe view"
      },
      {
        "src": "/images/experiences/dining/after-surf-rooftop-cafe/03-658975289_967863016195618_232561311671886841_n.jpg",
        "alt": "After Surf Rooftop Cafe dining"
      },
      {
        "src": "/images/experiences/dining/after-surf-rooftop-cafe/04-images.jfif",
        "alt": "After Surf Rooftop Cafe atmosphere"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "8:00 AM – 9:00 PM",
        "emphasis": "Open"
      },
      {
        "icon": "location_on",
        "text": "Palabandara Watta, Weligama",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Palabandara+Watta+New+Bypass+Road+Pelana+Weligama",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20please%20assist%20with%20reserving%20or%20inquiring%20about%20After%20Surf%20Rooftop%20Cafe%20Weligama",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "After Surf Rooftop Cafe",
      "tag": "Sunset Rooftop",
      "dist": "Weligama • ~3.5 km",
      "rating": "4.9",
      "reviews": "(2.4K reviews)",
      "price": "Rs 2,000–4,000",
      "hours": "8:00 AM – 9:00 PM daily",
      "address": "Palabandara Watta, Weligama Surf Point",
      "img": "/images/experiences/dining/after-surf-rooftop-cafe/01-604218999_17990426393879642_3975295764916320382_n.jpg",
      "desc": "Breezy wooden rooftop perch looking across the Weligama bay break. Perfect for post-surf refueling, sunset cocktails, and refreshing bowls.",
      "specialties": "Yellowfin tuna poke bowls, grilled mahi-mahi tacos, passion fruit smoothie jars, and cold drip coffee.",
      "dietary": "Gluten-free smoothie bowls, vegan wraps, and cold-pressed botanical juices."
    }
  },
  {
    "id": "kerabujen",
    "number": 8,
    "featured": false,
    "categories": ["rooftop"],
    "name": "Kerabujen Restaurant",
    "subtitle": "Coastal Rooftop Dining • 4th Floor, 631A Matara Rd, Weligama",
    "description": "Elevated coastal dining with elevator access, sweeping bay panoramas, cold drinks, and tender grilled catch of the day.",
    "locationBadge": "Weligama • ~3.4 km",
    "categoryBadge": "4TH FL PANORAMA",
    "rating": "4.5",
    "reviews": "(110 Reviews • 5.0 TripAdvisor)",
    "priceNote": "Rs 2,000–6,000",
    "mainImage": {
      "src": "/images/experiences/dining/kerabujen-restaurant/01-a5f1d5e5-09ff-409d-b647-9f86cda8823a.jpg",
      "alt": "Kerabujen Restaurant"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/kerabujen-restaurant/01-a5f1d5e5-09ff-409d-b647-9f86cda8823a.jpg",
        "alt": "Kerabujen Restaurant"
      },
      {
        "src": "/images/experiences/dining/kerabujen-restaurant/02-ead9ad32-56fd-4e47-a0b7-7c8742982ba8.jpg",
        "alt": "Kerabujen Restaurant dining"
      },
      {
        "src": "/images/experiences/dining/kerabujen-restaurant/03-IMG_8326-2048x1536.webp",
        "alt": "Kerabujen Restaurant dishes"
      },
      {
        "src": "/images/experiences/dining/kerabujen-restaurant/04-IMG_9564-2048x1536.webp",
        "alt": "Kerabujen Restaurant view"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "11:00 AM – 11:00 PM",
        "emphasis": "Open"
      },
      {
        "icon": "location_on",
        "text": "4th Fl, 631A Matara Rd (Elevator access)",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=4th+Floor+631A+Matara+Rd+Weligama+Kerabujen+Restaurant",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20I'd%20like%20to%20reserve%20a%20sunset%20table%20at%20Kerabujen%20Restaurant%20on%20the%204th%20floor...",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Kerabujen Restaurant",
      "tag": "4th Fl Panorama",
      "dist": "Weligama • ~3.4 km",
      "rating": "4.9",
      "reviews": "(214 reviews)",
      "price": "Rs 2,000–6,000",
      "hours": "11:00 AM – 11:00 PM daily",
      "address": "4th Fl, 631A Matara Rd (Elevator access), Weligama",
      "img": "/images/experiences/dining/kerabujen-restaurant/01-a5f1d5e5-09ff-409d-b647-9f86cda8823a.jpg",
      "desc": "Elevated coastal dining featuring expansive bay panoramas, gentle acoustic sounds, and an extensive ocean grill menu.",
      "specialties": "Catch of the day grilled with lemon-grass butter, coastal pasta, and wood-fired coconut desserts.",
      "dietary": "Gluten-friendly grill menu, vegetarian risotto, and vegan salads."
    }
  },
  {
    "id": "aloha",
    "number": 9,
    "featured": false,
    "categories": ["cafe"],
    "name": "Aloha Coffee Gallery",
    "subtitle": "Specialty Coffee & Brunch Hideaway • 7 Sunanda Road, Weligama",
    "description": "Specialty espresso and brunch hideaway. Seasonal tip: Shady Lane Mirissa serves breakfast favorites 8:00 AM – 4:00 PM.",
    "locationBadge": "Weligama • ~3.6 km",
    "categoryBadge": "Artisan Roast",
    "rating": "4.8",
    "reviews": "(310 Reviews • 4.6 TripAdvisor)",
    "priceNote": "Rs 1,800–3,500",
    "mainImage": {
      "src": "/images/experiences/dining/aloha-coffee-gallery/01-482027539_4002902003315657_4915331321099658958_n.jpg",
      "alt": "Aloha Coffee Gallery"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/aloha-coffee-gallery/01-482027539_4002902003315657_4915331321099658958_n.jpg",
        "alt": "Aloha Coffee Gallery"
      },
      {
        "src": "/images/experiences/dining/aloha-coffee-gallery/02-53595886_2276025569336651_1902386546070257664_n.jpg",
        "alt": "Aloha Coffee Gallery interior"
      },
      {
        "src": "/images/experiences/dining/aloha-coffee-gallery/03-71307822_2424701507802389_2044706850133245952_n.jpg",
        "alt": "Aloha Coffee Gallery drinks"
      },
      {
        "src": "/images/experiences/dining/aloha-coffee-gallery/04-86176213_2569820826623789_7113138373925011456_n.jpg",
        "alt": "Aloha Coffee Gallery atmosphere"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "8:00 AM – 4:00 PM",
        "emphasis": "Brunch"
      },
      {
        "icon": "location_on",
        "text": "7 Sunanda Road, Weligama",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Aloha+Coffee+Gallery+7+Sunanda+Road+Mirissa",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge,%20could%20you%20check%20morning%20table%20availability%20and%20opening%20hours%20for%20Aloha%20Coffee%20Gallery%20in%20Mirissa?",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Aloha Coffee Gallery",
      "tag": "Artisan Roast",
      "dist": "Weligama • ~3.6 km",
      "rating": "4.5",
      "reviews": "(265 reviews)",
      "price": "Rs 1,500–3,500",
      "hours": "8:00 AM – 4:00 PM daily",
      "address": "7 Sunanda Road, Weligama",
      "img": "/images/experiences/dining/aloha-coffee-gallery/01-482027539_4002902003315657_4915331321099658958_n.jpg",
      "desc": "Artisanal roastery tucked in a quiet palm garden. Famous for craft cold brews, oat milk flat whites, and healthy brunch plates.",
      "specialties": "Specialty pour-overs, avocado sourdough toasts with poached eggs, and spirulina smoothie bowls.",
      "dietary": "Oat and coconut milk lattes, keto and vegan brunch alternatives."
    }
  },
  {
    "id": "salty-swamis",
    "number": 10,
    "featured": true,
    "categories": ["cafe"],
    "name": "Salty Swamis Cafe & Surf Shop",
    "subtitle": "Specialty Roasters & Surf Shop • 543 Matara Road, Narigama",
    "description": "Legendary beachfront surf hangout pouring single-origin pour-overs alongside artisanal sourdough wraps, smoothie bowls, and curated coastal aesthetics.",
    "locationBadge": "Narigama Beach • ~3.1 km",
    "categoryBadge": "Surf Lounge",
    "rating": "4.9",
    "reviews": "(520 Google • 4.8★ TripAdvisor)",
    "priceNote": "Rs 2,000–5,000",
    "featuredFooterLeft": "Beachside Specialty Roastery",
    "mainImage": {
      "src": "/images/experiences/dining/salty-swamis-cafe-and-surf-shop/01-669764173_18417958036135798_738046575561334994_n.jpg",
      "alt": "Salty Swamis Cafe & Surf Shop"
    },
    "thumbs": [
      {
        "src": "/images/experiences/dining/salty-swamis-cafe-and-surf-shop/01-669764173_18417958036135798_738046575561334994_n.jpg",
        "alt": "Salty Swamis Cafe & Surf Shop"
      },
      {
        "src": "/images/experiences/dining/salty-swamis-cafe-and-surf-shop/02-718435113_18426276415135798_8947026187997305840_n.jpg",
        "alt": "Salty Swamis Cafe & Surf Shop food"
      },
      {
        "src": "/images/experiences/dining/salty-swamis-cafe-and-surf-shop/03-811203255_18445570573135798_7794319013072998238_n.jpg",
        "alt": "Salty Swamis Cafe & Surf Shop vibe"
      },
      {
        "src": "/images/experiences/dining/salty-swamis-cafe-and-surf-shop/04-816309872_18445570558135798_3257888295586002107_n.jpg",
        "alt": "Salty Swamis Cafe & Surf Shop interior"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "8:00 AM – 4:00 PM",
        "emphasis": "Daytime Roast"
      },
      {
        "icon": "location_on",
        "text": "543 Matara Road, Weligama",
        "truncate": true
      }
    ],
    "actions": [
      {
        "label": "Get Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Salty+Swamis+Cafe+%26+Surf+Shop+Weligama",
        "variant": "primary",
        "external": true
      },
      {
        "label": "Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge%2C%20please%20assist%20with%20visiting%20or%20reserving%20at%20Salty%20Swamis%20Cafe%20%26%20Surf%20Shop%20in%20Weligama.",
        "variant": "outline",
        "external": true
      }
    ],
    "modal": {
      "title": "Salty Swamis Cafe & Surf Shop",
      "tag": "Surf Lounge",
      "dist": "Narigama Beach • ~3.1 km",
      "rating": "4.9",
      "reviews": "(520 reviews)",
      "price": "Rs 2,000–5,000",
      "hours": "8:00 AM – 4:00 PM • Daytime Roast",
      "address": "543 Matara Road, Weligama Beach",
      "img": "/images/experiences/dining/salty-swamis-cafe-and-surf-shop/01-669764173_18417958036135798_738046575561334994_n.jpg",
      "desc": "Iconic southern coastline surf hideout boasting single-origin specialty coffees, ocean view benches, and creative culinary bowls.",
      "specialties": "House-blend flat whites, sourdough breakfast burritos, smoked salmon toasts, and vegan power bowls.",
      "dietary": "Plant-based milk alternatives, gluten-free baked treats, and dairy-free bowls."
    }
  }
];
