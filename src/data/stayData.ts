import { HOTEL_INFO } from "@/lib/constants";

export interface StaySpecification {
  id: string;
  category: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AmenityCategory {
  title: string;
  iconName: string;
  items: string[];
}

export interface StayPolicy {
  id: string;
  title: string;
  badge: string;
  description: string;
  isNeutral?: boolean;
}

export interface TransitDistance {
  place: string;
  distance: string;
  iconName: string;
}

export const STAY_DATA = {
  roomName: "Double Room with Private Bathroom",
  shortDescription:
    "A serene coastal sanctuary in Kumbalgama with quiet ocean-facing surroundings and refreshing southern coastal breezes.",
  capacity: "Max 2 Guests",
  bedding: "1 Double Bed",
  view: "Coastal Setting",
  bathroom: "Private En-Suite Bathroom",
  bookingUrl: HOTEL_INFO.bookingUrl,

  heroBadges: [
    {
      label: "1 Double Bed",
      detail: "Clean fresh linens",
      icon: "bed",
    },
    {
      label: "Max 2 Guests",
      detail: "Couple & solo stays",
      icon: "group",
    },
    {
      label: "Private Bathroom",
      detail: "En-suite bath & shower",
      icon: "shower",
    },
    {
      label: "Coastal Setting",
      detail: "Kumbalgama shoreline",
      icon: "waves",
    },
  ],

  // 4 Genuine project images mapped to the mosaic
  mosaicImages: [
    {
      src: "/images/rooms/deluxe-ocean-suite.jpg",
      alt: "Double Room interior at Noonna Beach Hotel with double bed and natural light",
      caption: "Double Room · 1 Double Bed",
      span: "md:col-span-7 h-[380px] md:h-[440px]",
    },
    {
      src: "/images/hotel/hero-beach.jpg",
      alt: "Kumbalgama sandy shoreline steps from Noonna Beach Hotel",
      caption: "Kumbalgama Coastline & Surf",
      span: "md:col-span-5 h-[380px] md:h-[440px]",
    },
    {
      src: "/images/hotel/property-exterior.jpg",
      alt: "Exterior facade and private entrance of Noonna Beach Hotel",
      caption: "Private Coastal Entrance & Grounds",
      span: "md:col-span-6 h-[300px] md:h-[340px]",
    },
    {
      src: "/images/hotel/property-grounds.jpg",
      alt: "Lush tropical palm garden surrounding Noonna Beach Hotel",
      caption: "Tropical Coastal Garden",
      span: "md:col-span-6 h-[300px] md:h-[340px]",
    },
  ],

  // Section 4: Inside the Stay (8 Blueprint cards)
  specifications: [
    {
      id: "bedding",
      category: "Rest & Sleep",
      title: "Room & Bedding",
      description:
        "Double room arrangement fitted with one comfortable double bed dressed in fresh coastal linens.",
      iconName: "bed",
    },
    {
      id: "bathroom",
      category: "En-Suite",
      title: "Private Bathroom",
      description:
        "En-suite bathroom with bath and shower facilities, toilet, and fresh towels provided.",
      iconName: "shower",
    },
    {
      id: "setting",
      category: "Coastal Setting",
      title: "Oceanfront Atmosphere",
      description:
        "Calm coastal position moments from the shoreline, capturing refreshing sea air.",
      iconName: "waves",
    },
    {
      id: "climate",
      category: "Comfort",
      title: "Climate Control",
      description:
        "Air conditioning and ceiling airflow options for personalized in-room comfort.",
      iconName: "mode_fan",
    },
    {
      id: "entertainment",
      category: "Leisure",
      title: "Entertainment & Media",
      description:
        "In-room flat-screen television for relaxed quiet evenings after coastal outings.",
      iconName: "tv",
    },
    {
      id: "beverage",
      category: "Refreshment",
      title: "Tea & Coffee Making",
      description:
        "Electric kettle setup for enjoying morning tea or coffee at your own pace.",
      iconName: "coffee",
    },
    {
      id: "storage",
      category: "Storage",
      title: "Wardrobe & Storage",
      description:
        "Wardrobe space with hangers for guest apparel and travel luggage storage.",
      iconName: "checkroom",
    },
    {
      id: "desk",
      category: "Convenience",
      title: "Seating & Desk",
      description:
        "In-room seating area and table space for quiet reading and essentials.",
      iconName: "desk",
    },
  ] as StaySpecification[],

  // Section 5: Thoughtful Essentials & Amenities (4 Columns)
  amenityCategories: [
    {
      title: "Comfort & Climate",
      iconName: "bed",
      items: [
        "Air conditioning",
        "Cooling ceiling fan",
        "Wardrobe or closet",
        "Flat-screen TV",
        "Seating & desk table",
      ],
    },
    {
      title: "Private Bathroom",
      iconName: "shower",
      items: [
        "Private en-suite bathroom",
        "Shower & bath facilities",
        "Fresh bath towels",
        "Linen provided",
        "Toilet & washbasin",
      ],
    },
    {
      title: "In-Room Conveniences",
      iconName: "local_cafe",
      items: [
        "Electric kettle",
        "Tea & coffee setup",
        "Drinking glasses",
        "Electric sockets near bed",
        "Tile / marble flooring",
      ],
    },
    {
      title: "Property Conveniences",
      iconName: "wifi",
      items: [
        "Free High-speed Wi-Fi",
        "Free on-site private parking",
        "Lush coastal garden grounds",
        "Steps to local shoreline",
        "Host check-in assistance",
      ],
    },
  ] as AmenityCategory[],

  // Section 6: Dining Preview highlights
  diningFeatures: [
    {
      title: "Morning Refreshments",
      description:
        "Start coastal mornings with Ceylon tea, tropical coffee, and local fruit options upon arrangement with the host.",
      iconName: "takeout_dining",
    },
    {
      title: "Southern Sri Lankan Flavours",
      description:
        "Discover traditional regional curries, fresh seafood, and tropical specialties prepared locally along the coastal strip.",
      iconName: "restaurant",
    },
    {
      title: "Garden & Veranda Moments",
      description:
        "Enjoy fresh king coconuts and chilled drinks in the peaceful garden surroundings under coastal palm trees.",
      iconName: "local_bar",
    },
  ],

  // Section 7: Good to Know Policies
  policies: [
    {
      id: "checkin",
      title: "Check-in Window",
      badge: "Flexible / Host Assisted",
      description:
        "Check-in arrangements and arrival times are coordinated seamlessly with the property host.",
    },
    {
      id: "checkout",
      title: "Check-out Window",
      badge: "Morning Departure",
      description:
        "Standard morning check-out window. Exact departure times confirmed with host on arrival.",
    },
    {
      id: "children",
      title: "Children & Extra Guests",
      badge: "Standard Policy",
      description:
        "Children are welcome. Accommodation is configured for up to 2 guests in 1 double bed.",
    },
    {
      id: "beds",
      title: "Cots & Extra Beds",
      badge: "Unavailable",
      description:
        "Extra beds and cots are not available for this room configuration.",
      isNeutral: true,
    },
    {
      id: "pets",
      title: "Pets Policy",
      badge: "Not Allowed",
      description:
        "Pets are not permitted in order to maintain a clean, peaceful environment for all guests.",
      isNeutral: true,
    },
    {
      id: "events",
      title: "Parties & Quiet Hours",
      badge: "Not Permitted",
      description:
        "Parties, events, and loud disturbances are not permitted. Calm quiet hours observed at night.",
      isNeutral: true,
    },
    {
      id: "booking",
      title: "Cancellation & Prepayment",
      badge: "Rate Dependent",
      description:
        "Cancellation and prepayment conditions depend on the room rate selected on Booking.com.",
    },
  ] as StayPolicy[],

  // Section 8: Regional Transit / Location
  location: {
    address: "Noonna Beach Hotel, Kumbalgama, Southern Province, Sri Lanka",
    distances: [
      {
        place: "Kumbalgama Train Station",
        distance: "Local access",
        iconName: "train",
      },
      {
        place: "Midigama Surf Beaches",
        distance: "Short coastal drive",
        iconName: "surfing",
      },
      {
        place: "Abimanagama Shoreline",
        distance: "Nearby beach access",
        iconName: "beach_access",
      },
      {
        place: "Weligama Bay",
        distance: "Neighbouring coastal hub",
        iconName: "waves",
      },
      {
        place: "Ahangama Village",
        distance: "Southern coastal stretch",
        iconName: "explore",
      },
    ] as TransitDistance[],
  },
};

