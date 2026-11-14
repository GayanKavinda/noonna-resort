export type NavChildItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChildItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Stay", href: "/stay" },
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      { label: "Overview", href: "/experiences" },
      { label: "Beaches & Surf", href: "/experiences#nearby-beaches" },
      { label: "Southern Heritage", href: "/experiences/southern-heritage-coastal-expeditions" },
      { label: "Coastal Dining", href: "/experiences/dining" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const HOTEL_INFO = {
  name: "Noonna Beach Hotel",
  tagline: "Your Quiet Escape by the Sea",
  scriptMotto: "where the ocean sets the rhythm...",
  location: "Kumbalgama, Southern Coast, Sri Lanka",
  // Verified official booking channel
  bookingUrl: "https://www.booking.com/hotel/lk/noonna-beach.html",
  // Temporary project contact value pending authentic owner confirmation/replacement before production.
  // Do not treat as a verified official hotel number.
  tempPhone: "+94779206951",
  tempPhoneDisplay: "+94 77 920 6951",
  tempWhatsapp: "94779206951",
  // Social media handles (destinations pending final owner confirmation)
  socials: {
    instagram: "https://instagram.com/noonnabeach",
    facebook: "https://facebook.com/noonnabeach",
    youtube: "https://youtube.com/@noonnabeach",
    // Temporary project WhatsApp value pending authentic owner confirmation/replacement before production.
    whatsapp: "94779206951" as string | undefined,
  },
} as const;
