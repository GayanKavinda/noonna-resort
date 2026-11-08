import { FaqItem } from "@/types";

export interface HighlightItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  location: string;
}

export interface TransitItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

// 1. Confirmed Amenities & Highlights (No unverified claims)
export const HOME_HIGHLIGHTS: HighlightItem[] = [
  {
    id: "wifi",
    icon: "wifi",
    title: "Wi-Fi Access",
    description: "Complimentary wireless connectivity throughout the property.",
  },
  {
    id: "parking",
    icon: "car",
    title: "Private Parking",
    description: "On-site vehicle parking available for guests.",
  },
  {
    id: "ensuite",
    icon: "bath",
    title: "Private Bathroom",
    description: "Equipped with dedicated shower facilities and amenities.",
  },
  {
    id: "beachfront",
    icon: "waves",
    title: "Beachfront Location",
    description: "Situated right by the peaceful southern shoreline of Kumbalgama.",
  },
];

// 2. Curated Editorial Experiences (Regional Southern Coast)
export const HOME_EXPERIENCES: ExperienceItem[] = [
  {
    id: "coastal-beaches",
    tag: "Coastal Tides",
    title: "Southern Coast Beaches",
    description:
      "Explore the golden sands and rolling Indian Ocean waves across nearby Kumbalgama and Hiriketiya bays.",
    location: "Southern Coast",
  },
  {
    id: "historic-landmarks",
    tag: "Coast Trails",
    title: "Dondra Head Lighthouse",
    description:
      "Visit Sri Lanka's southernmost point, home to the iconic white octagonal lighthouse overlooking the open ocean.",
    location: "Dondra, Matara",
  },
  {
    id: "local-flavours",
    tag: "Local Flavours",
    title: "Southern Culinary Heritage",
    description:
      "Experience authentic coastal Sri Lankan cuisine, fresh ocean seafood, and aromatic cinnamon-infused curries.",
    location: "Matara District",
  },
];

// 3. Location & Arrival Info (Confirmed regional context only)
export const HOME_TRANSIT_GUIDES: TransitItem[] = [
  {
    id: "rail",
    title: "Coastal Railway Line",
    subtitle: "Matara Railway Terminal",
    description:
      "Scenic coastal train service connects Colombo to Matara along the palm-fringed southwestern shoreline.",
  },
  {
    id: "expressway",
    title: "Southern Expressway (E01)",
    subtitle: "Direct highway transit",
    description:
      "Efficient highway route linking Bandaranaike International Airport and Colombo directly to Matara exits.",
  },
  {
    id: "arrival-note",
    title: "Personalized Arrival Note",
    subtitle: "Provided upon booking",
    description:
      "Precise property directions and check-in instructions are delivered upon confirmed Booking.com reservation.",
  },
];

// 4. Confirmed Homepage FAQs (Master Reference)
export const HOME_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What room types are available at Noonna Beach Hotel?",
    answer:
      "Noonna Beach Hotel offers an intimate sanctuary featuring a dedicated Double Room with a private bathroom, designed for a quiet coastal stay for up to two guests.",
  },
  {
    id: "faq-2",
    question: "How do I make a reservation?",
    answer:
      "Reservations can be made securely through our official Booking.com partner listing. You can click any 'Book Your Stay' button to view live availability.",
  },
  {
    id: "faq-3",
    question: "Where is the property situated?",
    answer:
      "We are situated in Kumbalgama along the southern coast of Sri Lanka, within the Matara district, offering tranquil oceanfront surroundings away from crowded resort strips.",
  },
  {
    id: "faq-4",
    question: "Is vehicle parking available on-site?",
    answer:
      "Yes, complimentary private parking is available on the property premises for registered guests.",
  },
  {
    id: "faq-5",
    question: "Is Wi-Fi available at the property?",
    answer:
      "Yes, complimentary wireless internet access is available for staying guests.",
  },
  {
    id: "faq-6",
    question: "What are the standard check-in and check-out times?",
    answer:
      "Standard check-in and check-out timings follow our Booking.com policies. For special arrival arrangements, please contact us following your booking.",
  },
  {
    id: "faq-7",
    question: "How close is the hotel to the ocean?",
    answer:
      "The property is located directly on the coastal edge in Kumbalgama, allowing you to enjoy ocean breezes and soothing coastal vistas right from the grounds.",
  },
];
