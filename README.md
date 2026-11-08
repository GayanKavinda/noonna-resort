# Noonna Beach Hotel

Noonna Beach Hotel is a private coastal sanctuary on Sri Lanka's southern shoreline in Kumbalgama, Matara District. This is the official website built with Next.js, showcasing the property's Double Room, amenities, regional experiences, gallery, and booking flow through Booking.com.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Forms:** react-hook-form, zod, @hookform/resolvers
- **Notifications:** sonner
- **Email:** resend
- **Icons:** lucide-react
- **Animations:** framer-motion
- **Language:** TypeScript

## Getting Started

### Prerequisites

Node.js 18+ and npm (or yarn/pnpm/bun).

### Installation

```bash
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending contact emails |
| `CONTACT_EMAIL` | Destination email for contact form submissions |
| `RESEND_FROM_EMAIL` | Verified sender email address in Resend |

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                  # Next.js App Router routes & layout
│   ├── api/contact/      # Contact form API route (Resend)
│   ├── globals.css
│   ├── layout.tsx        # Root layout with metadata & fonts
│   └── page.tsx          # Homepage (modular sections)
├── components/
│   ├── layout/           # Header, Footer, SiteLayout
│   ├── sections/         # Homepage sections & route pages
│   │   ├── home/         # Hero, Welcome, Stay Bento, Highlights, Experiences, Gallery, Social Feed, Video, Location
│   │   ├── contact/      # Contact page
│   │   ├── experiences/  # Experiences page
│   │   ├── gallery/      # Gallery page
│   │   └── stay/         # Stay (room) page
│   ├── shared/           # FaqAccordion, PreFooterCta, DiscoverCarousel
│   └── ui/               # Button, Container, SectionHeading
├── data/
│   └── home.ts           # Homepage content (highlights, experiences, transit guides, FAQs)
├── lib/
│   └── constants.ts      # Nav items, hotel info, social links, booking URL
└── types/
    └── index.ts          # TypeScript interfaces
```

## Key Features

- **Homepage** — Modular sections: hero, welcome, stay bento (Double Room), highlights, southern coastline experiences, gallery preview, Instagram social feed, video showcase, location & arrival guidance, FAQ, and pre-footer booking CTA.
- **Stay Page** — Double Room details with booking call-to-action linking to the official Booking.com listing.
- **Experiences Page** — Curated regional activities: Southern Coast Beaches, Dondra Head Lighthouse, Southern Culinary Heritage.
- **Gallery Page** — Property photography carousel.
- **Contact Page** — Contact form powered by Resend for email delivery.
- **Booking** — All reservations route to the verified Booking.com partner listing.

## Deployment

The easiest way to deploy is on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or deploy to any platform that supports Next.js (Node.js 18+). Make sure to configure the environment variables listed above in your hosting provider.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Hook Form](https://react-hook-form.com)
- [Resend](https://resend.com)