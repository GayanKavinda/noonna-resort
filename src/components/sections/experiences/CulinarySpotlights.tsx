import Link from "next/link";
import { ArrowRight, ConciergeBell, Fish, Info, Star, Utensils, UtensilsCrossed } from "lucide-react";

export default function CulinarySpotlights() {
  return (
    <section
      className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 scroll-mt-24"
      id="taste-of-sri-lanka"
    >
      <div className="space-y-2 pb-12">
        <span
          className="font-script text-2xl md:text-3xl text-[#397FA8] font-normal tracking-wide block"
          style={{
            fontFamily: "Moon Dance, cursive",
            color: "rgb(57, 127, 168)",
            fontSize: "1.85rem",
            fontWeight: "400",
            lineHeight: "1.2",
          }}
        >
          artisanal spices &amp; coastal kitchens...
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2
              className="font-serif text-[38px] md:text-[44px] text-on-surface tracking-tight font-normal leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontWeight: "400",
                color: "rgb(23, 63, 86)",
                letterSpacing: "-0.01em",
                fontSize: "2.5rem",
                lineHeight: "1.15",
              }}
            >
              A Taste of Sri Lanka
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Discover the delicate heat, coconut-milk curries, and everyday coastal culinary traditions that define southern Sri Lankan life.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_4px_30px_-6px_rgba(23,63,86,0.08)] flex flex-col justify-between border-t-2 border-primary border border-slate-200/60">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-60 rounded-2xl overflow-hidden bg-surface-container">
                <img
                  alt="Traditional clay pot curry feast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5mfmgEsrNgKfAjHQHMcOfMMaXXtvMblIuI5w1wFzrDIAtFzG2IgHQvYlGgDPSlGpvPZJulmrBGdGrbpVDBEx0il2pk5LuzSBSj7uDULf3v7KnI8pPclWBr232AGAuXS6fk3i2Lg49vAAxGaC83KGRf7OKJGID1jlmlPQdB5jUm_l1JUTemYA9LTPRaXgJi9Wm3ac78dO3faehyQ027lCbOw_iPSSHvT5jULBlDKr_YdZy5nYCW2uG7Q"
                />
              </div>
              <div className="h-60 rounded-2xl overflow-hidden bg-surface-container">
                <img
                  alt="Fresh seafood catch grilling over charcoal fire on a Sri Lankan beach"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X67X5Ijk98Q412bse9ur3DH_qlJMw-LoBoUK0aARdpfnBXj_5-O2ywvS9N9lz_ZpEA251_Ec4ykBNtu1jXhwqYPPToJEP5Sk8MFOeOorASVwiD5X8VOAVga7OwbHIUPq_NbVaJd2lTx_S9u8M5U5jA-X3kUsgFOwdAVQyqMXoIZZd1wn1HsXPSgY766a5TX7_2w-rK2e1D5NfwQqWO0eewcxBV7XvJ1AZ4FeGH4bymrS0HBZW_tivmqAjY"
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
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_32px_-6px_rgba(23,63,86,0.1)] flex flex-col justify-between relative overflow-hidden border-t-2 border-primary border border-slate-200/60">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-secondary-container/20 blur-2xl" />
          <div className="space-y-6 relative">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-primary font-label-sm text-label-sm font-semibold">
                <Star size={16} /> Host Recommendation • Local Gem
              </div>
              <span className="text-outline font-label-sm text-label-sm font-medium">
                Kumbalgama Village
              </span>
            </div>
            <div className="h-60 rounded-2xl overflow-hidden bg-surface-container">
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
                className="font-script text-2xl text-[#397FA8] font-normal tracking-wide block italic"
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
      <div className="mt-8 rounded-2xl bg-surface-container-low border border-[#D9EAF3] p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left space-y-1 max-w-xl">
          <h4
            className="font-serif text-2xl text-[#173F56] font-normal"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            Explore All 10 Coastal Dining Destinations
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            From authentic village curries to beachfront seafood barbecues and specialty surf cafes along Weligama, Midigama, and Ahangama.
          </p>
        </div>
        <Link
          className="px-8 py-3.5 rounded-xl bg-[#397FA8] hover:bg-[#2D6A8E] text-white font-label-md text-label-md font-semibold tracking-wide transition-all duration-200 shadow-sm inline-flex items-center gap-2 shrink-0"
          href="/experiences/dining"
        >
          <UtensilsCrossed size={18} />
          <span>View Complete Dining &amp; Restaurant Guide</span>
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-6 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
        <Info className="text-outline" size={16} />
        <span>
          Concierge assists with private driver transport, reservations, and dietary requests at all local venues.
        </span>
      </div>
    </section>
  );
}

export { CulinarySpotlights };
