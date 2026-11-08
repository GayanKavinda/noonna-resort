export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "The Stay", href: "/stay" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOTEL_INFO = {
  name: "Noonna Beach Hotel",
  tagline: "Your Quiet Escape by the Sea",
  scriptMotto: "where the ocean sets the rhythm...",
  location: "Kumbalgama, Southern Coast, Sri Lanka",
  // Verified official booking channel
  bookingUrl: "https://www.booking.com/hotel/lk/noonna-beach.html",
  // Social media handles
  socials: {
    instagram: "https://instagram.com/noonnabeach",
    facebook: "https://facebook.com/noonnabeach",
    youtube: "https://youtube.com/@noonnabeach",
    // Note: Official phone number is pending client confirmation.
    // Kept undefined so components handle unconfirmed status cleanly without fake numbers or placeholder usernames.
    whatsapp: undefined as string | undefined,
  },
} as const;
