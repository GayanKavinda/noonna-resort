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

export interface DiningVenue {
  id: string;
  number: number;
  featured?: boolean;
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

export const DINING_HERO = {
  eyebrow: "wood-fired clay pots & coastal feasts...",
  title: "A Taste of Sri Lanka",
  subtitle:
    "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline.",
  deck: "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBL4lTnKk_jB68DUvM9JjR-KvGSxyLxKYBgPgt6hHWs6kGZa3VuafeCQn3gqtrRdvmuysyAI6FegcB8OFbZwUcgqAVtFjco3F40Z2519mBb2-PnOh6w52gpdA84j2Qeu058iCKz0kFjaSD51nL61PSfFveelYhm__8zCUd3CrgrrgFeiaxLMZfuC9YCqsueWg1iXvc_yEAaJs9aO0E--G4yKhpU3lilr-getUstOONKVPaZKdCSaVwZKQ",
  heroImg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBL4lTnKk_jB68DUvM9JjR-KvGSxyLxKYBgPgt6hHWs6kGZa3VuafeCQn3gqtrRdvmuysyAI6FegcB8OFbZwUcgqAVtFjco3F40Z2519mBb2-PnOh6w52gpdA84j2Qeu058iCKz0kFjaSD51nL61PSfFveelYhm__8zCUd3CrgrrgFeiaxLMZfuC9YCqsueWg1iXvc_yEAaJs9aO0E--G4yKhpU3lilr-getUstOONKVPaZKdCSaVwZKQ",
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
    "name": "Lucky Fort Restaurant",
    "subtitle": "Mama Lucky's Family Kitchen since 1999 • No 7 Parawa St, Galle Fort",
    "description": "Mama Lucky's celebrated 10-curry terracotta feast in an intimate Dutch Fort garden courtyard. All curries prepared fresh with hand-pressed coconut milk & traditional spices.",
    "locationBadge": "Galle Fort • ~24 km",
    "categoryBadge": "Clay Pot Feast",
    "secondaryPill": "UNESCO Galle Fort",
    "rating": "4.5",
    "reviews": "(1,950 TripAdvisor Reviews)",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD_AGsCYTXEz2ZNQQCYD9GHPQFlawrMa3edy_y-FUrsAfr8ZBejvpJYr1rqgCPXdB9OgRvL7zMZAk5IxqLveU9_Gt8R2tCqh12udzMVgIcOLPSP7-OBMQQpbg5GAhGBVwzDU8MXMzuB4ijKhi7CtY77f-w3koPBggBiEQLFhSFHD6Uji85EKplS572b_0DI8vfMkemWq2m0kAWdDfLJSZL3xO9jTY03A2hInp3lbYdLrLw392gjZBIbtQ",
      "alt": "Lucky Fort Restaurant Courtyard & Garden Entrance"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD_AGsCYTXEz2ZNQQCYD9GHPQFlawrMa3edy_y-FUrsAfr8ZBejvpJYr1rqgCPXdB9OgRvL7zMZAk5IxqLveU9_Gt8R2tCqh12udzMVgIcOLPSP7-OBMQQpbg5GAhGBVwzDU8MXMzuB4ijKhi7CtY77f-w3koPBggBiEQLFhSFHD6Uji85EKplS572b_0DI8vfMkemWq2m0kAWdDfLJSZL3xO9jTY03A2hInp3lbYdLrLw392gjZBIbtQ",
        "alt": "Garden Courtyard Entrance",
        "label": "Courtyard"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBD4dwL9i42RhOdyunbr73DN9tLRpvi7Yk6iODEO9ws-7C8MGgDPF04lZwXm8Roxiw0vl65bQDt27t6g_Qrly2wRyX3e7gj1N0fddjNq-Zt9R9IRpH7e0I39uhtDrdenrhn6uvaHZkz7lyiqVts6goOfC-Y-1qeQoX25OhXyfi3puKGLGUOjlwl0vIri_WN0CtRMVkR92QtPK6_YOcz-HpcMMYUKQ0jLaOOPs8AdcQLGnwPTyG23NmNlA",
        "alt": "10-Curry Spread",
        "label": "10 Curries"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAuyJ-FoAloLi1cvh_GuCl4viaqZvwDYLo1yUakc0avnfaUBJUTBVdJMnOZ_qyKSyVBFiDBcKgShQ7wfyqwhsaZ7Ri4tm011wqeS77wLHzPDKlwS8bd0i2Nz0htk9Dn37smCCNsZMFKRQIZEyb_VkDC-1fZlQuT6kXDQcKfGJPjR6WQtmTJdyeRqfyFT4B9i80OLwTP-NTxOFkpYP9xHXYuhQai3X5-KphmJdxfyU2W8z0drzZ1QwF4TA",
        "alt": "Curry Dishes &amp; Papadams",
        "label": "Clay Pots"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBRlWQmb-TYafAXy0QSIf8RguCgE3t8bjRxWBjD-uDmweX-RYUsMTMkTWwtnKukYvRq4JsRSX7_DGEGStGn_jwAvQffh1dkPKWJC53FSZQ8Sg7a1xqvzZKKHn6HHz1BukDSFVnPeNm-saTjMVi9nu0980CF7ly0mEY5R0Iif90Kx7bEWXRLW70Rq79n_YIx59AJ7jAPR_s_E6yz0I_mofE3szL9rymEQju6qHF3yy6uaPeaEJbHhgojGA",
        "alt": "Cooking Class Group",
        "label": "Class"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1WaeH8Ha6_BGuX8CjdjL-JdVH6r9P7ZCdCGWp-DFYLtdnpgdtUP52yE3txW3OJR2i_aYuFaBI1Ucth-ChFtgdyr9dLC-sSzNo20lnxikFa6UM4bcZWX-JQW9iNLOUuYAbWafEfKJ3OnWDC0lWBtajIbRgo3JhuAj9qlhFi9rsa0zPl9hFaFD-5uT54I3UrFikeYR2RCPlMtt4vOH9_S3y6ALWdowrD5ZIuOUP7zQxgKdJsvuQZUW2Y8BCA",
      "desc": "A celebrated Dutch Fort institution renowned for its traditional 10-curry terracotta feast served in an airy colonial garden courtyard. Every individual dish celebrates ancestral southern seasoning without shortcuts.",
      "specialties": "Legendary 10-curry feast featuring young jackfruit (polos), spicy eggplant moju, toasted dhal, mango curry, and golden papadams.",
      "dietary": "100% Vegan feast option, dairy-free coconut curries, gluten-free red rice available upon request."
    }
  },
  {
    "id": "shirani",
    "number": 2,
    "featured": false,
    "name": "Shirani Home Made Rice & Curry",
    "subtitle": "Shirani & Lala's Family Kitchen • No. 36 Kadabaddagama, Gurubebila",
    "description": "Simmered slowly over coconut husk fire in hand-crafted clay pots on a breezy village veranda 3 minutes from our gate. Renowned for rotating daily 6-curry feasts, mango curry, and personal cooking lessons.",
    "locationBadge": "Kadabedda • 250m Walk",
    "categoryBadge": "Hotel Favorite",
    "secondaryPill": "3 Mins Walk",
    "rating": "4.8",
    "reviews": "(288 Google • 4.7★ 172 TripAdvisor)",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCdHN8SegYSnRhuARly7hgHtY2dJHP533x7bK5nuEgKx8d5hkPF0b2WzdRs9of6A7-pGzCCOrT0F1AMby6d64lNic6EXN9zyNcZazMgogY-ktXxQI8ZWcmW2COCGyECl_aXTi791oLYCMIj4of9QirJSPRmDySsAoH1vUCVLO0KaWMhY3u0adkAuxRryEUozoaloJ-LPKo3UXZdk6n7On30vBu3BDC7d7v04JcgmI0f1Rf8bpt7IzlHBw",
      "alt": "Shirani Home Made Rice & Curry Village Veranda Spread"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCdHN8SegYSnRhuARly7hgHtY2dJHP533x7bK5nuEgKx8d5hkPF0b2WzdRs9of6A7-pGzCCOrT0F1AMby6d64lNic6EXN9zyNcZazMgogY-ktXxQI8ZWcmW2COCGyECl_aXTi791oLYCMIj4of9QirJSPRmDySsAoH1vUCVLO0KaWMhY3u0adkAuxRryEUozoaloJ-LPKo3UXZdk6n7On30vBu3BDC7d7v04JcgmI0f1Rf8bpt7IzlHBw",
        "alt": "The Feast &amp; Daily Spread",
        "label": "Feast"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDbr9M3Ol3uIPwKGwCVn7xF2Jyf6GMUa_evdJY7Nf6k2RR5baEBJLLRfz7R-sDWaAh5mGtxEg_n5NvbB8Jgi8SE3Acee_sI197G6K28DH0L0c6OMkhQJwKIZu-CT2zJsZWn3xTITLTmR13Vi5Tks1iSFUHIg_9eiQiPXbJvEHC9NVbZDHBNbSjQKIZ543UDHai9Dz0rDpS0evFJD6HJlwTLF04g5bfM8SgK1j9nJ5swHHSJXYRUm312Tg",
        "alt": "Nourishing Thali &amp; Curries",
        "label": "Curries"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBkiR1eXVyxaxpKBFFbjGigbPWQM52BWdPvrTSBr5EtaG_6b5F3yZAaYidSqYvUlwgYNZegKrYb1E66IfCO9Wl86kvVLFMIAbPYX_2bSCo8Q4LknzskU-Ief3_jaZiO3evsGtz0o_0Np6Hs6Ax4mNXX0Gng3e_cxyxK-l0Iq5--2sh4OTMIuOHdvm_jGL1Zjz_YauzXNZfI45yFJ38gp8fZYmF473JYkpN37w4nQWKlT_Ij4cyjRGB9-g",
        "alt": "Family &amp; Host Hospitality",
        "label": "Hospitality"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCdHN8SegYSnRhuARly7hgHtY2dJHP533x7bK5nuEgKx8d5hkPF0b2WzdRs9of6A7-pGzCCOrT0F1AMby6d64lNic6EXN9zyNcZazMgogY-ktXxQI8ZWcmW2COCGyECl_aXTi791oLYCMIj4of9QirJSPRmDySsAoH1vUCVLO0KaWMhY3u0adkAuxRryEUozoaloJ-LPKo3UXZdk6n7On30vBu3BDC7d7v04JcgmI0f1Rf8bpt7IzlHBw",
        "alt": "Evening Courtyard &amp; Lanterns",
        "label": "Courtyard"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1Wuh45leaz8PCqe8LHLilyfyIrCs-ZdKHno6PtSdwoLbvILGTo_MzSeeLyvtmLK3Ld58NRXBO7LoYAQtQo4xvRngtbivvGbP7XCbnWQhmhO5uldlzR7ddhiPVC3opBQP7LP0CiOcMOdDkbPG5BdxDOhxbnhCgcY-1OGY0BRssWeDdqJJ_2BbNIbkJwwpgPedityRBkKffQWSa-m_Gp444h_h4HBEM5raTuy94_bsatRbqqZrzdFY9McuL1_",
      "desc": "Simmered slowly over coconut husk fire in hand-molded terracotta pots on a breezy village veranda just 3 minutes leisurely walk from our hotel gates. Infinite hospitality and true village cooking.",
      "specialties": "Wood-fired young jackfruit curry, black pepper yellowfin tuna, fresh hand-pounded pol sambol, and sweet-sour eggplant moju.",
      "dietary": "100% Vegan & Vegetarian feast options, gluten-free heirloom unpolished rice, completely dairy-free."
    }
  },
  {
    "id": "kumbala",
    "number": 3,
    "featured": false,
    "name": "Kumbala Restaurant & Cafe",
    "subtitle": "Community Gathering Hub • 32/A Kadabeddagama Rd, Weligama",
    "description": "Casual, cozy surfer & traveler hub celebrated for authentic Sri Lankan rice & curry buffet evenings, healthy fresh juices, and western comforts like chicken schnitzel. Free parking available.",
    "locationBadge": "Gurubebila • ~2.1 km",
    "categoryBadge": "Community Buffet & Cafe",
    "secondaryPill": "Kadabeddagama",
    "rating": "4.7",
    "reviews": "(47 Google Reviews • #47 in Weligama)",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDs5LZVudRv1NUIiK40TmMaquNE6GZ66mSMW6jknFtS84a27RJnu2WLa-_MVfpkky0nBCkj-ngQxlobRSosLH0zidw5Ax3-f1cfiy1kAeHfacMO_SMXMc1BCYtxpvo8AqzzoY6jko1r67Uij8uwqzwohfxZERhm6d3gE5P5y8Uy3PaZTCyni_371zfu-j9i3URU6QUgMD0_XXyofaoJai43V1Ea8HWhrBf_6Rq8Z9N4nFhoZBtphqHCqA",
      "alt": "Kumbala Restaurant seafood feast platter"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_AuRF044jWzWjWCF8kbTblez9QQLMsOYXnKC5N4gt1Ornofh_aiU6Lfh92hKezW4Q-cxr7Z0E7LsxpprWXw9ZVB7iJrodRqD9Mz6wZpQs9nwAhPFTsEDSMXyxYOizXI4h5bEWjSEgXwB3Kp6tMcMns6lDQwYW4wp7nkd3UlkXIwDN3q1AVLFWFB7tazeQI378qwoHCKRh4o9XFhyZixe91K8Chh6Qsl4P9vv1nOORGe-B1x2p8LJEfg",
        "alt": "Fresh Catch &amp; Chips",
        "label": "Fish &amp; Chips"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDU84TkX6bxmW7WNdGPAokGJw5RWLgOZfa9jclCN5PDz2smDn4yZcEKUs_QiZHLOF3Ocs99Uoa69mr1pr-IwU2PWS3MrxPZ4xKN4YDVVA5btCyULot4NbD_PDnEwc-ZQM1yL_AearQQoeCythrV8JLg4Tlz_-2ssVoFl9mMBom0pD_XCyBos8RkQ2-J4-RRw7GF7pDHlEFfyNTXIPC0xwXKw8DxyfiAqQB8rAGQ_ppxFTw11_UG0B7Njg",
        "alt": "Courtyard Dining",
        "label": "Courtyard"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCszWWHyqYyncTaTu3yniwgLcVBdGtPVXSeLwQIsM4AaoJeSIrUozvCQdMPufBy_ukdeWLJZZ82lRTD49q4XH6h7Lt9HcDdFIcyUCI72jJ7v0M6G4XXO22O0lJkwSVZmL6iAvgXZP4Mqwel6Hb-JmaNQLWt8ChZfGICGolQvTWJY0g8O7LDNJ4eOM-_Qp_Vln7DHQU2giv9LOoRtjVLJrh1wOmmcsg85eGiH6LqLo_h9JPiMGHc7-bX4A",
        "alt": "Curry Spread",
        "label": "Curry Buffet"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1W74aW2tofj98nhXR8t4YBaAu_ckKwrPdHLUnpd1ulUfK2Tz02_CuJc3nTA1D_YQp11Cp2fTxK0S9mumdRAP-aWHFH1oDVXFDIYh6_NDtWppdhBFiCorgTX3JszbBGp_CqMBWorZeSJkmIGYam5fgibZqkkdXYA9WQcbtUGv6e-CsYm69Ki0BTtIqprjFDagdl17DkaXCjq7mcEWGquZsBAFAS7Cri_NYGzo7nPheX9HFOKiczhWxoK452Y",
      "desc": "A friendly surf outpost celebrated for wholesome, generous ingredients and evening all-you-can-eat Sri Lankan buffet tables surrounded by travelers and wave riders.",
      "specialties": "All-you-can-eat evening clay pot buffet, coconut dhal curry, beetroot curry, pumpkin stew, and roti wraps.",
      "dietary": "Abundant vegetarian and plant-forward selections prepared fresh twice daily."
    }
  },
  {
    "id": "mettha",
    "number": 4,
    "featured": false,
    "name": "Mettha's Home Cooked Meals",
    "subtitle": "Mettha's Family Veranda Kitchen • Yaddehimulla Road, Unawatuna",
    "description": "Authentic family-run traditional eatery in Unawatuna known for fresh rotating curries (jackfruit, beetroot, aubergine, mushroom, dhal, chicken & ocean prawns) cooked upon order by Mettha with custom spice levels.",
    "locationBadge": "Unawatuna • ~18 km",
    "categoryBadge": "Woman-Owned • Local Gem",
    "rating": "4.8",
    "reviews": "(210 Reviews • Traditional Sri Lankan)",
    "priceNote": "Rs 1,000–2,000",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBwkoGVpv9SezDw_tehZyUBo2iFlUBmPaCglPJFoLYGvaqzENh7XQhUOH1onJwdSxN0ymg_JpyrizkjDmI8_f5sHBFm0H2y24LeF7iwxOI7I8koilGGMAprwHjmf3OBlna01qHWHPJmpyEchf_Qm-6P9hX0BeOQyOrBJLiR0hHNLFzsx1TpVenBltcH-pB44BguSIr8ctRSS1eKfnrOBAdgubZNACTwFiM65spqf8D6p21tfiagIGiC4g",
      "alt": "Mettha's Home Cooked Meals Unawatuna"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAnOlUkyEvVkNk0JkLG9qUxDZ5UVQVzXCNAWHBUmwEmbxgHleQ4sXV14ozn0bFDA92tDKpnH_yKpxTT4rsrt58NUEgXI7qIUbxajf1Ray0l_Q-96m-Vc3tHD3zoGnFm0JXqxM2E0bqKWQGAs_Qr_JIl1gaV5MIKO66971LdbAMMqTov8baxmftrssvZslM9_lHACPnqHpRpjb5HVD108SFcyCqXJ3-nJ3FYGWLookZ_kxGNjcm8inWJRw",
        "alt": "Kottu Rotti Feast",
        "label": "Kottu Feast"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDUlNkW_aXajjay2QOT6XpjO3OiZIigop4GKOPYAq8yFcprILxhDiovey0AGliC0GZnfddqfYX6z1zAG6xSxVXaqRwrOSWjakua5H4gbyPOywlXNUF0L1XSxePo7hP62kmimIV63yBB0avJh8Md_-8MeJ-pcRWAoUPyxk3VMHA-UANzm9_F1MAuQqtNZK1IYUQWqs58WhhliCuuureRrj4gJK3Qpv-5oOAmZvotmPXhaIpDpXuUykjUcw",
        "alt": "Village Entrance",
        "label": "Entrance"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuC8mkE84rRjC-P0QNBrCXu3Ebs2Mvz7E41NPK0dCSNm_MpKpd8ZGomSGiyKg0LHGq-LMQ5oCnPBiWgu8XSgpifOuKYYuLv09DpdBWyLEo-fUm1rTSLnf7Jk0-C_0LFWQ2hX9QhpP0hkypM9c4U0h3aMGKDR5laKignHBq5-QzQvujhdFlrvMabpn86s4NVbd7cECAhS3v1g9_VtjFfIC0YTzq_pD0MO8v8L-4aQq7_AWG2HV3hv7nROQQ",
        "alt": "Curry Plate &amp; Fresh Juice",
        "label": "Curry Plate"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1Wuh45leaz8PCqe8LHLilyfyIrCs-ZdKHno6PtSdwoLbvILGTo_MzSeeLyvtmLK3Ld58NRXBO7LoYAQtQo4xvRngtbivvGbP7XCbnWQhmhO5uldlzR7ddhiPVC3opBQP7LP0CiOcMOdDkbPG5BdxDOhxbnhCgcY-1OGY0BRssWeDdqJJ_2BbNIbkJwwpgPedityRBkKffQWSa-m_Gp444h_h4HBEM5raTuy94_bsatRbqqZrzdFY9McuL1_",
      "desc": "Generational home recipes served under garden fruit trees on a tranquil covered family porch away from the busy harbor strip.",
      "specialties": "Coconut cream okra, devilled prawns, caramelized onion sambol, and gentle golden pumpkin curry.",
      "dietary": "Naturally plant-focused, made to order with organic spices."
    }
  },
  {
    "id": "le-fish",
    "number": 5,
    "featured": false,
    "name": "Le' Fish Weligama",
    "subtitle": "Beachfront Fresh Catch & Charcoal Embers • Weligama Bypass Road",
    "description": "Feet-in-the-sand seafood feast. Pick fresh whole reef fish, king prawns, and calamari grilled over hot charcoal embers.",
    "locationBadge": "Weligama Beach • ~3.2 km",
    "categoryBadge": "Fresh Catch Grill",
    "rating": "4.7",
    "reviews": "(1,453 Reviews • #5 in Weligama)",
    "priceNote": "Rs 3,000–8,000",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OByZYpD6V4CO5hs1QTE-CgaBkOnah2fctz4K6tnNw2S1YIHoTuKXglDyEXIuIygFhEnEx3kMUBeXtZbcRG5Y0Q0XGc2NcIZ_EjYodisZN_9jcLCZt9J8PQVL_1MJNKKecVcKuYdbXS6dVpI7-igyjze5r57vg7sRvLvqyHuO77M68BBn0a8n6QNDBIDxEmmA9PshvvLiaTOmfidJFoNTLIfpZJKJCJUnD2t0iEdE0Jouq32DwP9Pvw",
      "alt": "Le' Fish Weligama Beachfront Dining on the Sand"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAhRyIZkarz2POVUCdvvQ4EwHnYceLr3CeBvKzgvFhT1uSE88TXQiy5jNyQKODo3KgjXKIr9DI_3doP8sLyEH8AT-lmQYWR-jEA6tBKXn5dLsbUhQqvAi4PzHOl93ZURgElkqFU_jmXF02-zJvLMhEEQ-gVvYourFwNKsfKp1bpT40kN0u6iVYSPNCYAElnIUGhARlgguMhdxxDTMPj8w2HEekGRlFoDP7FsNI8PO3yIBnS_AA_wRNoxQ",
        "alt": "Fresh Crab and Catch of the Day platter",
        "label": "Catch of Day"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuChbLtXtAt2rIG-T7IzbTymJk_HY1hKndqO1sQTlkPg-1A0jx1s1wSnd2Me0IGkLijk4hM995RutjldQoitpS9Ywo_WdCANpHxc4Xc09cN7JhECBDtuzdIS0vpGrCcJbq7i8Pggw4sVNa0EoQa5cgtFD8fau4qxIIls189tqhd41a8IgC5dOkFQtzG3-YQwWTgueBBSI8eIa2Hy61un1a0pG-P2Ji6pmACORxnxubtOZ6k98q7oekBvgA",
        "alt": "Whole grilled reef fish with lime and salad",
        "label": "Charcoal Grill"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBd8KKAy5doEbEa87bnbCXTSRV1wgDPd-oL3s7neF6XzYgxpoFqicw4xJvk-dInTI6G1FwhlpFkPJx6z29vuGpNvmgwWOahy-FLWcrFDJbqpiYswTN6mPyQUgF_L5VoEKZ45YTgBAki4oeAky4uYRUrdnO0h4z0ZXgyjSiXuSaj0gkI7zp2JXT1F11A-zWHph8ST5-aQTkK-Dxf31trr4Nk9jAMmc9OxMilA9dyLdwWI6jBy_e0ksiueA",
        "alt": "Complete beachside candlelight seafood feast",
        "label": "Sunset Tables"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1X67X5Ijk98Q412bse9ur3DH_qlJMw-LoBoUK0aARdpfnBXj_5-O2ywvS9N9lz_ZpEA251_Ec4ykBNtu1jXhwqYPPToJEP5Sk8MFOeOorASVwiD5X8VOAVga7OwbHIUPq_NbVaJd2lTx_S9u8M5U5jA-X3kUsgFOwdAVQyqMXoIZZd1wn1HsXPSgY766a5TX7_2w-rK2e1D5NfwQqWO0eewcxBV7XvJ1AZ4FeGH4bymrS0HBZW_tivmqAjY",
      "desc": "Barefoot dining directly on the sands of Weligama Bay. Hand-select your seafood catch from iced wooden dhow trays, grilled directly over coconut charcoal.",
      "specialties": "Charcoal grilled jumbo prawns, whole red snapper with garlic butter, calamari steaks, and sea-salt roasted sweet potatoes.",
      "dietary": "Pescatarian paradise; gluten-free grilled options with fresh lime and garlic herbs."
    }
  },
  {
    "id": "sithum",
    "number": 6,
    "featured": false,
    "name": "Sithum Fish Point",
    "subtitle": "Casual Beachfront Grill • Bypass Beach Road, Weligama",
    "description": "Casual seaside tables on the sand renowned for generous portions of freshly caught red snapper, tuna, and garlic prawns.",
    "locationBadge": "Weligama Beach • ~3.0 km",
    "categoryBadge": "Seafood Platters",
    "rating": "4.9",
    "reviews": "(268 Reviews • 270 Online Ratings)",
    "priceNote": "Rs 2,000–6,000",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAkTYMrUDmZxzJ_BLceIcRUhdKgb5V-oG77uaXWOz2WyB847A66m-CL8caUfAqkPA9xZYJ7Pr_qaDv2WExi5biRwWqFXaKOZgszK1L9WItYe9NkS5uTDX23S277rueVaHyD6yLNgt9DhIF8VGXohuucHboJhA8DMIUwY6qmmP1E3iAu44ZsVjKAVpLZvgv-P0McXoVkqsGnufMDnJEwKZLhTxXuzcxuWZWzBE06THSjacu6MvEyDaWd_g",
      "alt": "Sithum Fish Point Weligama Beachfront Dining Table Feast"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuB940JCvaPhoBs6AoNosX-cHQhRJssQQ---NNw3Id8J67ZUJxWXMQR813GN92d9bQQjFGURNXy7gFll7F8Q178HeILFgSjWASVmbV7CZ_QrEfJGSD4jtaKH8UWC6Mx-Fb0inDiQ3nR3lFMAJXXUOXof_WJH7fT7OgrCU-N1lkf1Gd5M3Lr--AX2mCHXjrDfACHaX1ovSE6y0dBjAW_LxybvvOEBvEfu3B9A8iZs-GC6f6cYTxeOgSdPUg",
        "alt": "Fish Point Weligama fresh seafood display stall",
        "label": "Fish Stall"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuByv04vJDvgs3akSW2sdxSCvyphv71ymkMI8Tg_ic-jNLJ0OgUPVhqLRAVx3RDh8v80uJYx1_tbSLYG_ElBy7KbmkNOIwTU-YsMmfP7En4jF9IKnp6RqqZwIXNNylNiM3uhpwVmwRkXlmaLvKn8xCUsnHskT031NZepacDIh_69UbSn93H4OeF94oQrlXaFr8018Ivp5UEfQIJBxjw3ITrBqRBvx1rSUMv2uaxZ3FipWbVTN-W7_sJMmw",
        "alt": "Vibrant fresh catch close-up on ice",
        "label": "Fresh Catch"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAkTYMrUDmZxzJ_BLceIcRUhdKgb5V-oG77uaXWOz2WyB847A66m-CL8caUfAqkPA9xZYJ7Pr_qaDv2WExi5biRwWqFXaKOZgszK1L9WItYe9NkS5uTDX23S277rueVaHyD6yLNgt9DhIF8VGXohuucHboJhA8DMIUwY6qmmP1E3iAu44ZsVjKAVpLZvgv-P0McXoVkqsGnufMDnJEwKZLhTxXuzcxuWZWzBE06THSjacu6MvEyDaWd_g",
        "alt": "Beach dining table with whole grilled fish feast",
        "label": "Beach Feast"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1X67X5Ijk98Q412bse9ur3DH_qlJMw-LoBoUK0aARdpfnBXj_5-O2ywvS9N9lz_ZpEA251_Ec4ykBNtu1jXhwqYPPToJEP5Sk8MFOeOorASVwiD5X8VOAVga7OwbHIUPq_NbVaJd2lTx_S9u8M5U5jA-X3kUsgFOwdAVQyqMXoIZZd1wn1HsXPSgY766a5TX7_2w-rK2e1D5NfwQqWO0eewcxBV7XvJ1AZ4FeGH4bymrS0HBZW_tivmqAjY",
      "desc": "A no-frills, top-rated local fishermen point serving enormous sizzling platters of freshly brought morning catch at candid prices.",
      "specialties": "Garlic butter lobster, grilled tuna steaks, Sri Lankan curried crab, and cassava chips.",
      "dietary": "Fresh seafood simply grilled with sea salt, pepper, and coconut oil."
    }
  },
  {
    "id": "after-surf",
    "number": 7,
    "featured": false,
    "name": "After Surf Rooftop Cafe",
    "subtitle": "Top floor above Surf Camp • Palabandara Watta, Weligama",
    "description": "Relaxed breezy rooftop above Weligama surf break serving poke bowls, grilled tacos, smoothie jars, and sunset mocktails.",
    "locationBadge": "Pelabandara Watta • ~3.5 km",
    "categoryBadge": "Sunset Rooftop",
    "rating": "4.8",
    "reviews": "(95 Reviews • 5.0 TripAdvisor)",
    "priceNote": "Rs 2,000–4,000",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCCQ8XxCmvdc5aDEMxW4fIkvkCETqjz0IfiosNXdtHk6YqtWNYJsE4kTyF1IhqaRdgrZ_R6vmGETOnlthYs3YS29jKt93QJFGGvsCLoo1IeAyOPO7An1LjpFE2BM6DdYm16CBAIEngPFQv1buf5QZsGAc70VgKxkSJ4awOIpUPG7IB-6DWhn8hrGkcStJGK7b5ER1tueuphQPqQ_sWGVHmXsFH96kLBPm_SoGLQHT-_U4Yvx2qrBcQlAw",
      "alt": "After Surf Rooftop Cafe rooftop terrace with friends and palms"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDzVTJmPfJSoOA-IQvbf5jwPRR8-v4Zl14D576XakSkJ0dAPqyjNnZGfhK2Y2hzov9RUIXQFBy7KQyWcM6ORejNR2GlDqCHGlIY3TZASxItBtdKDyr1mXDZn-k27Ldk3wu_ny1UIJM-MgXPElaDFbxK0zwr0uyCQxNPH2reNmC-9G8WQlPUfHcv0BNs0toZqedOWNo3hBOpQv8H5D0UfmVHtLYIjNd6Z7G7hqn4tqABrUeOJhSeQ2a24A",
        "alt": "Sunlit Veranda with wicker lamps and sunset light",
        "label": "Sunlit Veranda"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDXFsMpoQrU6KeVBtembsZMOiev8QCOmOunOZuwrCCBQRZ__vWBHBeb1p5AvDBRirZqVdohkUuL2jdUwaSw-T804jkv7bmRj_XWyoE5sKgMaHRWnFP4ws9dg3ofJxH-b3E4ZL3deXDfz23kC_uWQGSWgccaHc1GeldwioUfcLoBc4bWB3iLiHnJo8DFef4bNkg6MEIRwX-5c7Qh3cIgmH6eKsyLtf_E-b8ARtxo9no7jCsiCmt0KYMwVQ",
        "alt": "Ocean View and palm railing bar with travelers",
        "label": "Gathering"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCwooPTptX4J4OHsFwopDqjOSL6T6ojHSOXpI1QaloSvcWV0zG9u838xaicq4vpz9CN9xSivu3Nd3xtAf7EgW0BbEJoJzCmtxHc8Dnc0zdIz1RgAHvnuIesUBLRwOr1iWTg71hqniMZL-bEgdJDzAh_vQkrxj7SuomqMna7BVHs-vn2Evni8VF082qhTIn0zTCEn4w--qhcyjyO5ThwrsaLjNPXUikTprzbI3j4t3VbA3wR36dGmkIZ9Q",
        "alt": "Artisan poke and grain bowl held in hand",
        "label": "Poke &amp; Bowls"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1V04xicQqJPBijWjfd2pyHcdi3NWiov9b_OluPcjFW4LitpNF9OdF6RQQt5J6VRJVhPt_TvE_WLWi3gJURz_lsqksA30PTBeKoMnzieFpljy6bFhd_8o5p8xiyucPsVUSdkTBmUozAYIjFH3YJsNtcZmEmFaKsnvMDX9bgUfwBlIMOmcgNo7KqbFsFcbXlZtyUgLSN9T5t743oXbj-KbpDsk98JnqrwAFlIk0MaFng7urlT8-mHxrffPDE",
      "desc": "Breezy wooden rooftop perch looking across the Weligama bay break. Perfect for post-surf refueling, sunset cocktails, and refreshing bowls.",
      "specialties": "Yellowfin tuna poke bowls, grilled mahi-mahi tacos, passion fruit smoothie jars, and cold drip coffee.",
      "dietary": "Gluten-free smoothie bowls, vegan wraps, and cold-pressed botanical juices."
    }
  },
  {
    "id": "kerabujen",
    "number": 8,
    "featured": false,
    "name": "Kerabujen Restaurant",
    "subtitle": "Coastal Rooftop Dining • 4th Floor, 631A Matara Rd, Weligama",
    "description": "Elevated coastal dining with elevator access, sweeping bay panoramas, cold drinks, and tender grilled catch of the day.",
    "locationBadge": "Weligama • ~3.4 km",
    "categoryBadge": "4TH FL PANORAMA",
    "rating": "4.5",
    "reviews": "(110 Reviews • 5.0 TripAdvisor)",
    "priceNote": "Rs 2,000–6,000",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyjN9Z_YjB_XIdgWxK0pBasAEmVeEC7f86fCBfL1WHCI_qxbsFqnHHaqgrvWG2LfVQUryW-jJWGZPR8C_IdIcp2R8qbEYCaR0eRApAnXVSO12dY_a-fMmrx3GJ05HLe6nr83sqrVi3zOAyHasWIGufsEeMaKilihZPEQW9ucq9Qfxqg_K9tsV8MJKVjyz41cGvGa8S0OVEXdzDPn3px72Bt6TFXJKUcKl1aYBo6mqoJ_w47Noh_M7jQ",
      "alt": "Kerabujen Restaurant Rooftop Dining & Wicker Lanterns Ambiance"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBASOPcVnh13YRIRqWdiXA0yLrq4JfPfZupYe8mQCuVCYilEW5OOXys07OWhqVR39WX_5d-qRlKFY1igA9qwEWb4liO2WRkt4-dFkRfG9DywkJQ-4FYqDK0YImv7Vvusupbpm70MggulxpzTHFuXB1FL28TE5Y7zAuVaMthpt-IH9BgjjrobZqUPhm1VepPA41PXPb5ofFOdE3Jn4e4UK8BU2wQR_lTShwV17u_cey4GLrZtTHRKUiZAQ",
        "alt": "Kerabujen Restaurant Illuminated Exterior Signage",
        "label": "Exterior"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBH39pAwq17oBLSGv_8caLgxViSLWXgd2EhbTb9vGtdXApvSxMBN28Q9j56EQ-Yws6fPttdekl0tD9RX2lUccVG6euUqoItftigINxYvdbCp0bmk_-bCB4Xunjfsahj0-Co5BvI_jPojv1Ywlg0ctrYcuj_4bV9MDiMqcjUS-ogUEXOJsO9Y4h_oJqEE0bhBUSEsseHLzIf8o0TpKc0Cvmjn5uxNiJ2AzwlB8ODiJ8L9U5QRcX9kdpeKw",
        "alt": "Grilled Jumbo Prawns and Tuna Seafood Platter",
        "label": "Seafood Feast"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_YHbxNOpfhFnrfsiH6Cxb_elTWcR6jAUbczy-WeqZJasup6DecIOB2GnXLpHXC_AaB8nxHw7R32FQiK2aN4-VcB0jZ2p0xeaztWMZMzN9mmRGW8DxHfkxiwcQ5NXj_daxrW2NfrJograxyHDFjUqJyqNBV3tmS1h3r26mhgHeAyJHZBphW7OTFOqw8C47XZT6gDruBr8LBU4rW8ky8r5y5JD0uymJHwTa8nJfM3pNN5UMQVThkhYFTA",
        "alt": "Frosted Tropical Fruit Cocktails",
        "label": "Cocktails"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1W74aW2tofj98nhXR8t4YBaAu_ckKwrPdHLUnpd1ulUfK2Tz02_CuJc3nTA1D_YQp11Cp2fTxK0S9mumdRAP-aWHFH1oDVXFDIYh6_NDtWppdhBFiCorgTX3JszbBGp_CqMBWorZeSJkmIGYam5fgibZqkkdXYA9WQcbtUGv6e-CsYm69Ki0BTtIqprjFDagdl17DkaXCjq7mcEWGquZsBAFAS7Cri_NYGzo7nPheX9HFOKiczhWxoK452Y",
      "desc": "Elevated coastal dining featuring expansive bay panoramas, gentle acoustic sounds, and an extensive ocean grill menu.",
      "specialties": "Catch of the day grilled with lemon-grass butter, coastal pasta, and wood-fired coconut desserts.",
      "dietary": "Gluten-friendly grill menu, vegetarian risotto, and vegan salads."
    }
  },
  {
    "id": "aloha",
    "number": 9,
    "featured": false,
    "name": "Aloha Coffee Gallery",
    "subtitle": "Specialty Coffee & Brunch Hideaway • 7 Sunanda Road, Weligama",
    "description": "Specialty espresso and brunch hideaway. Seasonal tip: Shady Lane Mirissa serves breakfast favorites 8:00 AM – 4:00 PM.",
    "locationBadge": "Weligama • ~3.6 km",
    "categoryBadge": "Artisan Roast",
    "rating": "4.8",
    "reviews": "(310 Reviews • 4.6 TripAdvisor)",
    "priceNote": "Rs 1,800–3,500",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida/ALJJyrDT9ElnDSumWpLETbaGJOo9N-i4ubTnbueh4UsvZvhV1m5zvPkNXrdCuRkRnMO7fChbcyST85f_yLYsYbWj1mamaOY0EuXY3zJ7LzTbpnkexFY9G1xnK6tNvQjt9PStvKNodYOYr4gecaqSKP0jEFsKyVSmn9MrZkpSp5QaGfcdV2XIXMrLryxDE7NIe6CcseuRKDgv5Z4MrKH9SstUeLU3Sph2SntqoC2abJbx4vb7DQ",
      "alt": "Aloha Coffee Gallery smoothie bowl & artisanal breakfast"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuCbnKDhryB0TRf382I725agYcCZgeall_knxphXZjTFAy02jVo2qBDhVjhewrC2pOGWytEwcbJTaHV3GuREpaw82adX1tSK1Hhs35eow81iX3WGK0yx2VRndPsYtZVZeHxJjULD5nwxEFbKtkyHqGRaYAkq0V_fPneCxKB4vVBp9cxo6czoSOjBOdIbVt4r2ZD793irVw8cNZVQJpvvBcvZcPSIcj1SvKEWi-VNk9OUARUx6SZ2x2Ae5Q",
        "alt": "Fresh smoothie bowl with coconut and strawberries",
        "label": "Smoothies"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtYcpFs6o5vVUQdCXZEfPQyQiGrvPmVZUcjgRbGUKnCAniqu1rjUHq0_mKDV2wX2gr9lwyZ1WSRc65WIES1QqEWMotRgCWUWD33b6cbR3uzqqtvX5d75Ja6Wg1etHfnuxi902vKSyourIrSL5IizYZQkpEmD4fvJW2OOHIkruPHLmJ-0jVxlK3KdgO6mIZKauHtpKP18wyDCfpvvfOTQCUQ8RIS4vAB1QvdcK58MsiiOWJ49NSmvyJ7g",
        "alt": "Modern minimalist indoor cafe interior",
        "label": "Cafe Interior"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAJp7tHEpgaAprQHRkffXKXoSh2FpDV3sO6gwqjpwZzCGTQoXDS67eOoLTmdPMstPDvTL3HAPcWrQx524JtsF3Q0i3axPEN12A_PCe8zN1enFO6j6Oge9yqCFbhhF9wrAkdufwQQYYybkO2WBGdocEjlHIQ4gkzWsKOHwBZG-dH1gjQ37tQzFnwWWwLkXN2saDAx0oLoc4aKDasNbTisJ0BbThOx-enKr5lsRXktNDwAetxW_RfkCsjxQ",
        "alt": "Friendly group gathering inside cafe lounge",
        "label": "Gathering"
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
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1V04xicQqJPBijWjfd2pyHcdi3NWiov9b_OluPcjFW4LitpNF9OdF6RQQt5J6VRJVhPt_TvE_WLWi3gJURz_lsqksA30PTBeKoMnzieFpljy6bFhd_8o5p8xiyucPsVUSdkTBmUozAYIjFH3YJsNtcZmEmFaKsnvMDX9bgUfwBlIMOmcgNo7KqbFsFcbXlZtyUgLSN9T5t743oXbj-KbpDsk98JnqrwAFlIk0MaFng7urlT8-mHxrffPDE",
      "desc": "Artisanal roastery tucked in a quiet palm garden. Famous for craft cold brews, oat milk flat whites, and healthy brunch plates.",
      "specialties": "Specialty pour-overs, avocado sourdough toasts with poached eggs, and spirulina smoothie bowls.",
      "dietary": "Oat and coconut milk lattes, keto and vegan brunch alternatives."
    }
  },
  {
    "id": "salty-swamis",
    "number": 10,
    "featured": true,
    "name": "Salty Swamis Cafe & Surf Shop",
    "subtitle": "Legendary beachfront surf hangout pouring single-origin pour-overs alongside artisanal sourdough wraps, smoothie bowls, and curated coastal aesthetics.",
    "description": "",
    "locationBadge": "Narigama Beach • ~3.1 km",
    "categoryBadge": "Surf Lounge",
    "rating": "4.9",
    "reviews": "(520 Reviews • 4.8 TripAdvisor 670 reviews)",
    "priceNote": "Rs 2,000–5,000",
    "featuredFooterLeft": "Beachside Specialty Roastery",
    "mainImage": {
      "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAJnxZk1hgz_w3DGNEaEbhk3IfA71If_L-BVC4WRoEw1BOrCOyOrhDD63OYqlY9uH5NzMdOFKbb9QjfwXZzqi5-tlH_TytmWuP2tFU-IgVdvYEeuozSQVEjE6WxIXsWM-sJvABs25qR4ZmSv8HJWnWMuWbdYxIFMCxJEExv3aZQnHjX3u1qr9ofYYGaYeByAZyq8FL9npRmjlTP50U4_OrP6lXqr4hC9QAsVGmkw2T9ohjNxFnlP0wtGw",
      "alt": "Salty Swamis Cafe & Surf Shop interior, custom surfboards, and coastal lifestyle apparel"
    },
    "thumbs": [
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDWI6l6G30R_C6bGD88T6-CYs5-86sFrTcVFfp8pT14IxiOPJjSymjN6rU2xMsSjotxhTaQSnkSmMO8LFpKged-XDWgcJe7A0pXlSYHiHWIUnGXYyrmLxe8687pBBF7Q-pa3Q-ZYdyALDVvzOTKlL7g9Bra8FKqp83Oq5RTPteb4lV2t-fjLxZpjrbza4sYxe0m0bZLafguEASziSXmTLPzzGuEOSxJ4dPiC3309Am2j-ZSb1DixYph5Q",
        "alt": "Salty Swamis beach cafe community gathering under coastal shade",
        "label": "Community"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA8pqx6pGosJ0PSiYtG1NfQcSix9IOXAxfQthuw7zgG1AhUtOAu-xyy9cZKxS7sohypmkG2njKMb25-PMScSvZmF4QydtOqcIfhTWafafIDnAx5O5MVFEhgk2w7WOvdPdkUF8GcI3GymhTw_4PbFcfwfAwch6wZ-4C_uvUgZ-s2mOQDYwVKQTKc3PxaLJDi2gKFHh4FLEuI1qFbA7PnJiV3Jvs-tEc7I_8V9powhJHSj8EeSvHVVLJ1sA",
        "alt": "Salty Swamis evening surf veranda with glowing warm string lights",
        "label": "Veranda"
      },
      {
        "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuBmz3feJbXIIVcWxsP3ZmKVKl0OsqJwZoZ_fm4DpnlpLKlLkv5Y2Xnc9GuhbeEklVW28eeZ1cn0g1p9kf3EuQ_RuE9oej9fB8r9aTdtEifJ6SO0ISiGQGJsB0FujdTuoWr4HHt667KiVhSgrZP1-Y5HQfMaLY3-OnnuHPkuPoIF6wy4zvTfNQrPPXl8MAdSEHB9SbliGKkBUlHxQ_DCM_XXs2Miak8uNnIrUJtSXjMKeZs5uhC-nmTMkA",
        "alt": "Live acoustic music session and surf culture at Salty Swamis",
        "label": "Acoustic"
      }
    ],
    "highlights": [],
    "meta": [
      {
        "icon": "schedule",
        "text": "Hours: 8:00 AM – 4:00 PM",
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
        "label": "WhatsApp Concierge",
        "icon": "chat",
        "href": "https://wa.me/94779206951?text=Hello%20Noonna%20Concierge%2C%20I%20am%20staying%20at%20the%20hotel%20and%20would%20like%20to%20reserve%20a%20table%20or%20cooking%20class%20at%20Shirani%20Home%20Made%20Rice%20%26%20Curry.%20Could%20you%20please%20assist%3F",
        "variant": "primary",
        "external": true
      },
      {
        "label": "+94 77 920 6951",
        "icon": "call",
        "href": "tel:+94779206951",
        "variant": "outline",
        "external": false
      },
      {
        "label": "Get Directions",
        "icon": "directions",
        "href": "https://www.google.com/maps/search/?api=1&query=Shirani+Home+Made+Rice+Curry+Weligama",
        "variant": "default",
        "external": true
      },
      {
        "label": "<svg class=\"w-4 h-4 fill-none stroke-current\" stroke-width=\"2\" viewBox=\"0 0 24 24\"><path d=\"M14 5l7 7m0 0l-7 7m7-7H3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
        "icon": "chat",
        "href": "https://www.booking.com/hotel/lk/noonna-beach.html",
        "variant": "primary",
        "external": true
      }
    ],
    "modal": {
      "title": "Salty Swamis Cafe & Surf Shop",
      "tag": "Surf Lounge",
      "dist": "Narigama Beach • ~3.1 km",
      "rating": "4.7",
      "reviews": "(1.1K reviews)",
      "price": "Rs 2,000–5,000",
      "hours": "8:00 AM – 4:00 PM • Daytime Roast",
      "address": "543 Matara Road, Weligama Beach",
      "img": "https://lh3.googleusercontent.com/aida/AEtjO1V04xicQqJPBijWjfd2pyHcdi3NWiov9b_OluPcjFW4LitpNF9OdF6RQQt5J6VRJVhPt_TvE_WLWi3gJURz_lsqksA30PTBeKoMnzieFpljy6bFhd_8o5p8xiyucPsVUSdkTBmUozAYIjFH3YJsNtcZmEmFaKsnvMDX9bgUfwBlIMOmcgNo7KqbFsFcbXlZtyUgLSN9T5t743oXbj-KbpDsk98JnqrwAFlIk0MaFng7urlT8-mHxrffPDE",
      "desc": "Iconic southern coastline surf hideout boasting single-origin specialty coffees, ocean view benches, and creative culinary bowls.",
      "specialties": "House-blend flat whites, sourdough breakfast burritos, smoked salmon toasts, and vegan power bowls.",
      "dietary": "Plant-based milk alternatives, gluten-free baked treats, and dairy-free bowls."
    }
  }
];
