export type GalleryCategory = "all" | "sanctuary" | "ocean" | "epicure" | "atmosphere";

export interface GalleryFilter {
  id: GalleryCategory;
  label: string;
  count: number;
  matchCategories?: string[];
}

export interface GalleryImage {
  id: number;
  title: string;
  alt: string;
  category: GalleryCategory | "featured";
  gridCategory?: string;
  label: string;
  caption: string;
  src: string;
  dataAlt?: string;
}

export const GALLERY_FILTERS: GalleryFilter[] = [
  { id: "all", label: "All Photos", count: 36 },
  { id: "sanctuary", label: "The Sanctuary & Suites", count: 14, matchCategories: ["stay"] },
  { id: "ocean", label: "Ocean Horizons & Coastline", count: 10, matchCategories: ["coast", "views"] },
  { id: "epicure", label: "Epicure & Dining", count: 8, matchCategories: ["dining"] },
  { id: "atmosphere", label: "Daily Atmosphere", count: 4, matchCategories: [] },
];

export const FEATURED_IMAGE: GalleryImage = {
  id: 0,
  title: "Veranda Horizon at Dusk",
  alt: "Kumbalgama Sunset Panorama",
  dataAlt:
    "Sweeping twilight panorama of Kumbalgama beach in Sri Lanka, captured from the shaded open-air veranda of Noonna Beach Hotel. Warm amber sunset glow blends with pastel turquoise waves rolling softly onto fine sands, framed by tall swaying coconut palms and airy architectural linen drapes. Clean sun-bleached teak patio furniture bathed in gentle tropical dusk.",
  category: "featured",
  label: "KUMBALGAMA SHORELINE",
  caption:
    "Panoramic Indian Ocean sunset from the quiet coastal veranda at Noonna Beach Hotel.",
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlBtP_-60XP4xSQu2x8Zdv6F434OzpFDrqOBf1-lTzPDzgDlZ2TWuzFvMFxPpPCU7MpDVtKI5I0DnpSP6cs7i5Z1YS6BGBmyiP0ALzxfXKsV6xgnAfBdNvlbo-LMh1tCRbuvIxvDpLKstTX3oTb84YWbjrPy-5QEiCU_EL-rCR4jIbe_ZEyYOMI1iwSHxLwb8Zh2d_scuZkrnSdAEiFv6QkeG1Z7WgpAxseUPnZ4jQdjeuTi3nPuSoXw",
};

export const GALLERY_GRID_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: "Oceanfront Suite & King Bed",
    alt: "Oceanfront Suite King Bed",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Spacious master bedroom dressed with unbleached organic cotton linens and uninterrupted ocean views.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXWkgiqrR1kpKBFEDdxTRrng6BtOiTZj8MFLRV0C8sWJcNhCifUOw-4iNVOEgJGQg1L6LbsJmKMIa_eqpqPQC836JyqxnoM4bSYpEOFcyBPAcPhk-ifx66UVrliXVtVOxhsC-rRHul-P2MfF1XlX8dzWaKafCBNbMBT6hLwGPldnHmICvEu4WMLX8o6fmLMrhjSxqf0FRvTDtlTlwc_druGiKxmgYecMYyrCvcTXhQIccD6ooVJfwdLg",
  },
  {
    id: 2,
    title: "Open-Air Garden Rain Shower",
    alt: "Open-Air Garden Rain Shower",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Tactile river stone textures, native tropical palms, and warm open-air sky showers.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA5YeS5jYVz_tQ4C1KPA2bU--84E761OsAkC4KICXx8aLcm1qKpxJzYKeT4kVrqbAb4He13vicpqEzabifXGTvG6UMtyLgzsyhkc7pRKTrrVqwmz0mfQTq2jfq9uZDQlget5hJFSfNDXxRyYYm6bMtFdagYmuRRNl7wDiggtqc6TjGQfQqBWlsVpzdJVmMhlvoR0J6JSAr4Y0GvMYg2WNdPhSZUUo3AqhmRukNEJSXZ3FzvjKt_uZjvA",
  },
  {
    id: 3,
    title: "Shaded Ocean Veranda",
    alt: "Shaded Ocean Veranda",
    category: "ocean",
    gridCategory: "views",
    label: "VIEWS & OUTDOORS",
    caption:
      "Midday ocean breeze flowing through sheer white curtains and hand-hewn teak daybeds.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCualR7lOB7dmgh6IqreaYElv1zd5ulBhsB-aUGZx16Nv7f496NEvY6i4TNA717H1Ze-2DYgF9Xe75EWNInYyZxmDNXY2w7I7rYGEKEnj-0izDiUDyjzDhNWgqWFbRgDmWwgiBtVAPHg0CcTM0ZqSX1EKVfdYXl0IENc12Ezqh10ztQ6xaTbB-XgUi_yyXf9gAhyyaTvxg4Wr3AqOBQVoAflla_vnxAtDVkaOcnAauq2fixHsElywcyTA",
  },
  {
    id: 4,
    title: "Secluded Midigama Sandy Cove",
    alt: "Secluded Midigama Sandy Cove",
    category: "ocean",
    gridCategory: "coast",
    label: "AROUND THE COAST",
    caption:
      "A sheltered beach cove just moments south of the hotel, ideal for dawn strolls and soft reef surfing.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtbRCa8yZ-KHVK8PVdsYLLTgOPal23vKs5qvsaWFyGScNa11hhCXX_CGgj7DzSZcHWej0hO4Yc953NLqOISxa9PR5ljSCA9UP9f5m98_-UzPFx5p-FlbM4oe2KccvajD8l5KFFWgL7Ysf_04sOBi7InZTASQOneZwf6QKpyWTnrLj0SZLVJFzwQEepRv7SBuCKEHlWFpxIiz7T394tN_D66yzLUpMWiWowcNAyW8frtllQYoXDciigaQ",
  },
  {
    id: 5,
    title: "Southern Clay Pot Gastronomy",
    alt: "Southern Clay Pot Gastronomy",
    category: "epicure",
    gridCategory: "dining",
    label: "DINING",
    caption:
      "Traditional clay-fired coconut curries, sambols, and fresh morning harvests from southern Sri Lanka.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv4RpOCe5J5M4HWWmuJzFvhk0ELpmHGd7-lZhYaPvocwcatbJUL044YJnndlXwZcYQH9IUqUI2abIjTn6sNpFTYx4HNJKjh9oVHDr1s_H8ycqtsEll9PIixHwVC_mQK7zYioqiShRtNVfeVY2RibZyW1aPP149QdW4QinBswX6H8raDFMgiLt9KBZnkzJNNGnQRfq8f2y5rlHrQ7PEzcx3jDMHD5LxnWWzT-2N15OBJQ_uYuK6e9zYXQ",
  },
  {
    id: 6,
    title: "Balcony Ceylon Tea Ritual",
    alt: "Balcony Ceylon Tea Ritual",
    category: "epicure",
    gridCategory: "dining",
    label: "DINING",
    caption:
      "Freshly brewed single-origin loose leaf Ceylon black tea paired with seasonal island fruits.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVQfUVvSjACRA-21G3HcL_21RUFAIDfrDQfKt4eR1lBaSZXV5W4rwvxIH1ancxzk9OO5JULqObCGTw-Eaa4ij8TW6r7XEy_uoBEhihrcvQWlPHCSHQ7J-112b9cN_PVecwt_gFc6Prd69MOVLf5tAE3EA5cO0QFnF0tF5YAHHtflUJBPU16pqzk6m_D1-qQPMtEhDhwOeMZSRkCZpkoIqdctJ5OrKy5syC9yK2Z8UIL5oUpKGA_FrEw",
  },
  {
    id: 7,
    title: "Woven Textures & Linen Accents",
    alt: "Woven Textures & Natural Linen Accents",
    category: "sanctuary",
    gridCategory: "stay",
    label: "THE STAY",
    caption:
      "Artisan cane weave details, calm neutral surfaces, and handcrafted pottery in quiet corners.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtUlqZW7egSzQvqWLJfLZL63Aq1AXVS70XCXdpZ2WrRQ4hxftFIHTmGFa-uGYR5GRWL0fgSEwClmI6XreTKvw8TjJWBloLlJYWgNQgZ09PHvXe3snALDbwYk0NqDiJ0oDzlPqMLYzw8yZ34cROmy73IWBD_Be7GhQAEhpSVVdnAc0h6hgw6YS4jKusueYDecgzKI-6D0r2jOMFxe05CNJGCz9jxlOnCuXU5hezVNIFO3HdCvFW2aMEdQ",
  },
  {
    id: 8,
    title: "Sunset Golden Hour & Stilt Fishermen",
    alt: "Sunset Golden Hour & Stilt Fishermen",
    category: "ocean",
    gridCategory: "views",
    label: "VIEWS & OUTDOORS",
    caption:
      "Traditional southern stilt fishing silhouettes catching late afternoon tides against breaking waves.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeRNkBCLLDayooxSuOMZyb2sCxr26kdVFC6vOh_0uBkWX0nXz6UOy65pecdHFdgEi9k3nsQ8TSMBdZZeBTLBVfVKAqgXBSs8uyS5qiZxcHNksGBmHSFwAM0-ZFA98g3vsFh8grnlrMB_iG8T_t_Lu2_VhP0X8uQpDEaQIQFTOidb8X84UeIy8ON8t2K8NrQizDMCIut1azqdCpn_lizZCtBCvq1oxQxOTse-4vLMw9-Mvdd03juvakZg",
  },
  {
    id: 9,
    title: "Path to Private Sands & Coconut Palms",
    alt: "Path to Private Sands & Coconut Palms",
    category: "ocean",
    gridCategory: "coast",
    label: "AROUND THE COAST",
    caption:
      "Natural sandy beach pathways meandering through quiet coconut groves directly onto the water's edge.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLrVAJk0gp0TEliH_bwaTOOWPTrzt3-9cVTHTCl3_zqcoACq8_JbEaHq1CZ-8eqteA7oaiFA-DJMvr3CGBpoO0yxu06gLQcr64ahCPoE5wLqHoFYylaaIWf7meb-3MaoyWVFmlfKJpP--cVHDqQfgUfA7vOgfY2SKsnDGTOIUxewwAsYYwvcYvRnD6O4LqHDbUTt_3n7YqyLn3RlZnIDJUdy4gOBpopklxvL_rxvmLA0mtNwBx6zYHBg",
  },
];

export const GALLERY_TOTAL_COUNT = 36;
export const GALLERY_INITIAL_VISIBLE = 9;
export const ALL_GALLERY_IMAGES: GalleryImage[] = [FEATURED_IMAGE, ...GALLERY_GRID_IMAGES];
