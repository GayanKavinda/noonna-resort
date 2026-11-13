import Link from "next/link";
import { ArrowRight, ConciergeBell, Fish, Info, Star, Utensils, UtensilsCrossed } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

export default function CulinarySpotlights() {
  return (
    <section
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
      id="taste-of-sri-lanka"
    >
      <Reveal>
        <div className="space-y-2 pb-8 sm:pb-10 md:pb-12">
          <span
            className="block font-script text-[1.6rem] font-normal tracking-wide text-[#2f6b8f] sm:text-2xl md:text-3xl"
            style={{ fontFamily: "Moon Dance, cursive", lineHeight: "1.2" }}
          >
            artisanal spices &amp; coastal kitchens...
          </span>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <h2
                className="font-serif text-[32px] font-normal leading-tight tracking-tight text-on-surface sm:text-[38px] md:text-[44px]"
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontWeight: "400",
                  color: "rgb(23, 63, 86)",
                  letterSpacing: "-0.01em",
                  lineHeight: "1.15",
                }}
              >
                A Taste of Sri Lanka
              </h2>
              <p className="max-w-2xl font-body-md text-[15px] font-light leading-relaxed text-on-surface-variant sm:text-body-md">
                Discover the delicate heat, coconut-milk curries, and everyday coastal culinary traditions that define southern Sri Lankan life.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/60 border-t-2 border-primary bg-surface-container-lowest p-5 shadow-[0_4px_30px_-6px_rgba(23,63,86,0.08)] sm:p-6 lg:col-span-6 lg:p-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="h-48 overflow-hidden rounded-2xl bg-surface-container sm:h-60">
                  <img
                    alt="Traditional clay pot curry feast"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5mfmgEsrNgKfAjHQHMcOfMMaXXtvMblIuI5w1wFzrDIAtFzG2IgHQvYlGgDPSlGpvPZJulmrBGdGrbpVDBEx0il2pk5LuzSBSj7uDULf3v7KnI8pPclWBr232AGAuXS6fk3i2Lg49vAAxGaC83KGRf7OKJGID1jlmlPQdB5jUm_l1JUTemYA9LTPRaXgJi9Wm3ac78dO3faehyQ027lCbOw_iPSSHvT5jULBlDKr_YdZy5nYCW2uG7Q"
                  />
                </div>
                <div className="h-48 overflow-hidden rounded-2xl bg-surface-container sm:h-60">
                  <img
                    alt="Fresh seafood catch grilling over charcoal fire on a Sri Lankan beach"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={NEUTRAL_IMAGE_PLACEHOLDER}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    Coastal Gastronomy &amp; Fresh Harbours
                  </span>
                </div>
                <h3
                  className="font-headline-md text-headline-md text-on-surface"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  Claypot Curries &amp; Ocean Bounty
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                  Slow-simmered over cinnamon firewood in porous clay pots, the coastal fare here revolves around freshly pressed coconut cream, scorched cumin, fragrant curry leaves, and yellowfin tuna brought ashore that very dawn by local outriggers.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-surface-container mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
                <Fish className="text-primary" size={18} />
                <span>Daily Harbour Catch &amp; Ahangama Espresso Bars</span>
              </div>
              <Utensils className="text-primary" size={20} />
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 border-t-2 border-primary bg-surface-container-lowest p-5 shadow-[0_8px_32px_-6px_rgba(23,63,86,0.1)] sm:p-6 lg:col-span-6 lg:p-8">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-secondary-container/20 blur-2xl" />
            <div className="relative space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container/40 px-3 py-1 font-label-sm text-label-sm font-semibold text-primary">
                  <Star size={16} /> Host Recommendation • Local Gem
                </div>
                <span className="font-label-sm text-label-sm font-medium text-outline">Kumbalgama Village</span>
              </div>
              <div className="h-48 overflow-hidden rounded-2xl bg-surface-container sm:h-60">
                <img
                  alt="Shirani Home Made Rice and Curry"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj7_11MWwGzAUfS7-5vWQKKq0i-WQNfHj4d1yD_aqiIsy596jc6R4q__uanBdd4pvOxT4yEYltKrgFAZA-3ciTkveSmcca9lrBe-vK4FvEdsrVT7oQhmPSjHIY3vNRyZWtWcwZG3xW0kvozhzxAV2nszmk3jQOaetF8YZZcOIIFRwQxpF45G2GQEYkw2jW43ldGONc0qKOGF2vxmJTw7rUhd6gWYU1kaUJTk4_P5UJVMOPVSsv4pDP9g"
                />
              </div>
              <div className="space-y-3">
                <h3
                  className="font-headline-md text-headline-md text-on-surface"
                  style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
                >
                  Shirani Home Made Rice &amp; Curry
                </h3>
                <span
                  className="font-script text-2xl text-[#2f6b8f] font-normal tracking-wide block italic"
                  style={{ fontFamily: "Moon Dance, cursive", fontSize: "1.75rem" }}
                >
                  authentic village flavours cooked over coconut embers...
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                  An unpretentious sanctuary of true southern cooking just moments from Noonna. Shirani welcomes guests onto her breezy open porch with vibrant banana leaf platters, caramelized pol sambol, tender young jackfruit (polos), and soulful island warmth.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-surface-container mt-6 relative flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <ConciergeBell size={18} />
                <span>Ask Concierge for Walking Directions &amp; Seating</span>
              </div>
              <ArrowRight className="text-primary" size={20} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#D9EAF3] bg-surface-container-low p-6 text-center sm:p-8 md:flex-row md:text-left">
          <div className="max-w-xl space-y-1">
            <h4
              className="font-serif text-2xl font-normal text-[#173F56]"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              Explore All 10 Coastal Dining Destinations
            </h4>
            <p className="font-body-sm text-body-sm font-light text-on-surface-variant">
              From authentic village curries to beachfront seafood barbecues and specialty surf cafes along Weligama, Midigama, and Ahangama.
            </p>
          </div>
          <Link
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2f6b8f] px-8 py-3.5 font-label-md text-label-md font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#2D6A8E] sm:w-auto"
            href="/experiences/dining"
          >
            <UtensilsCrossed size={18} />
            <span>View Complete Dining &amp; Restaurant Guide</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-6 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
          <Info className="text-outline" size={16} />
          <span>
            Concierge assists with private driver transport, reservations, and dietary requests at all local venues.
          </span>
        </div>
      </Reveal>
    </section>
  );
}

export { CulinarySpotlights };

