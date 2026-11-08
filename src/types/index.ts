export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "youtube" | "whatsapp";
  href: string;
  label: string;
  title: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CarouselSlide {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  imageSrc?: string;
  href?: string;
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

