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
  roomName: "Entire Resort Rental",
  shortDescription:
    "A serene coastal sanctuary in Kumbalgama offered as an entire resort rental for a private resort stay, with quiet ocean-facing surroundings and refreshing southern coastal breezes.",
  capacity: "Private resort stay",
  bedding: "Entire resort rental",
  view: "Coastal Setting",
  bathroom: "Private resort amenities",
  bookingUrl: HOTEL_INFO.bookingUrl,

  heroBadges: [
    {
      label: "Entire Resort Rental",
      detail: "Private resort stay",
      icon: "bed",
    },
    {
      label: "Group & Family Stay",
      detail: "Reserved for your party",
      icon: "group",
    },
    {
      label: "Private Coastal Setting",
      detail: "Kumbalgama shoreline",
      icon: "shower",
    },
    {
      label: "Oceanfront Atmosphere",
      detail: "Southern coastal breezes",
      icon: "waves",
    },
  ],

  // 4 Genuine project images mapped to the mosaic
  mosaicImages: [
    {
      src: "/images/rooms/deluxe-ocean-suite.jpg",
      alt: "Interior space at Noonna Beach Hotel with natural light",
      caption: "Entire Resort Rental Â· Private Resort Stay",
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
      category: "Rest & Stay",
      title: "Entire Resort Rental",
      description:
        "The property is offered as an entire resort rental for a private resort stay, reserved exclusively for your group or family.",
      iconName: "bed",
    },
    {
      id: "bathroom",
      category: "Private Stay",
      title: "Private Resort Comforts",
      description:
        "Enjoy the privacy and comfort of a dedicated coastal retreat prepared for an unhurried stay.",
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

  // Section 6: Food & Your Stay (Culinary Preview)
  diningTitle: "Food & Your Stay",
  diningDeck:
    "Wake up to nourishing seaside dining and artisanal flavors prepared with seasonal southern Sri Lankan ingredients and versatile international dishes.",
  diningBadge: "Dining & Breakfast",
  diningCursive: "a taste of the coast...",
  diningImageBadge: "Oceanfront Dining & Breakfast Spread",
  diningHostNote:
    "Dining arrangements, daily breakfast inclusions, and seasonal menu selections to be confirmed directly with host upon check-in.",

  diningFeatures: [
    {
      title: "Breakfast on the Go",
      description:
        "Convenient takeaway packages tailored for early morning surf dawn patrols or train departures to Galle and Matara.",
      iconName: "takeout_dining",
    },
    {
      title: "Italian, Asian & American Selections",
      description:
        "Versatile cuisine repertoire prepared freshly on-site, spanning authentic Sri Lankan curries, Asian noodles, hearty American breakfasts, and light pasta.",
      iconName: "restaurant",
    },
    {
      title: "Evening Bar & Garden Lounge",
      description:
        "Unwind with king coconut refreshments, chilled beers, and tropical mocktails under the swaying palms.",
      iconName: "local_bar",
    },
  ],

  // Section 7: Good to Know Policies
  policies: [
    {
      id: "checkin",
      title: "Check-in",
      badge: "24 hours",
      description:
        "Check-in is available 24 hours. Please confirm arrival arrangements through your booking channel or directly with the property if agreed.",
    },
    {
      id: "checkout",
      title: "Check-out",
      badge: "12:00–14:00",
      description:
        "Check-out is available from 12:00 to 14:00. Any departure arrangements beyond these times should be confirmed in advance.",
    },
    {
      id: "children",
      title: "Children & Extra Beds",
      badge: "Children welcome",
      description:
        "Children of any age are welcome. Guests aged 18 and above are charged as adults. Cots and extra beds are unavailable. Noonna Beach Hotel is offered as an entire resort rental for a private resort stay.",
    },
    {
      id: "beds",
      title: "Accommodation Details",
      badge: "Confirm with property",
      description:
        "Specific accommodation configuration for an entire-resort stay should be confirmed directly with the property. No room, bedroom, bed, or occupancy details are published on this website.",
      isNeutral: true,
    },
    {
      id: "pets",
      title: "Pets",
      badge: "Not allowed",
      description:
        "Pets are not allowed.",
      isNeutral: true,
    },
    {
      id: "events",
      title: "Parties & Events",
      badge: "Not allowed",
      description:
        "Parties and events are not allowed.",
      isNeutral: true,
    },
    {
      id: "booking",
      title: "Cancellation & Prepayment",
      badge: "Varies by option",
      description:
        "Cancellation and prepayment policies vary according to accommodation type. Please check the conditions for your selected option when making a reservation.",
    },
  ] as StayPolicy[],

  // Section 8: Regional Transit / Location
  location: {
    address: "Noonna Beach Hotel, Kumbalgama, Southern Province, Sri Lanka",
    distances: [
      {
        place: "Kumbalgama Train Station",
        distance: "~1.2 km",
        iconName: "train",
      },
      {
        place: "Midigama Beach",
        distance: "~1.4 km",
        iconName: "surfing",
      },
      {
        place: "Abimanagama Beach",
        distance: "~1.7 km",
        iconName: "beach_access",
      },
      {
        place: "Weligama Beach",
        distance: "~3.0 km",
        iconName: "waves",
      },
      {
        place: "Ahangama Beach",
        distance: "~3.0 km",
        iconName: "explore",
      },
    ] as TransitDistance[],
  },
};


