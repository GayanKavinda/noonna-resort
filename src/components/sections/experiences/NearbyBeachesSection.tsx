import Link from "next/link";
import { Info, Umbrella, Waves, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function NearbyBeachesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-12" id="nearby-beaches">
      <Reveal className="flex flex-col justify-between gap-6 pb-8 sm:pb-10 md:flex-row md:items-end md:pb-12">
        <div className="space-y-2">
          <span
            className="block font-script text-[1.6rem] font-normal tracking-wide text-[#2f6b8f] sm:text-2xl md:text-3xl"
            style={{ fontFamily: '"Moon Dance", cursive', lineHeight: 1.2 }}
          >
            where the ocean sets the rhythm...
          </span>
          <h2
            className="font-serif text-[32px] font-normal leading-tight tracking-tight text-on-surface sm:text-[38px] md:text-[44px]"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 400,
              color: "rgb(23, 63, 86)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            Find Your Favourite Shore
          </h2>
          <p className="max-w-xl font-body-md text-[15px] font-light leading-relaxed text-on-surface-variant sm:text-body-md">
            Explore the distinct sands along Sri Lanka&apos;s famed southern coastal strip, from quiet secluded tide-pool bays to celebrated point breaks.
          </p>
        </div>
        <div className="self-start rounded-full bg-surface-container-low px-4 py-2 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant md:self-auto">
          Southern Province • Ahangama - Weligama Belt
        </div>
      </Reveal>
      <Reveal className="mb-8">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl border-t-2 border-primary bg-surface-container-lowest p-5 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] transition-all hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] sm:p-6 lg:col-span-7 lg:p-8">
          <div className="space-y-5 sm:space-y-6">
            <div className="group relative h-56 overflow-hidden rounded-2xl bg-surface-container sm:h-64 lg:h-72">
              <img
                alt="Midigama Beach sandy cove and turquoise surf"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/experiences/find-your-favourite-shore/midigama-beach/midigama-sandy-cove-visit-weligama.jpg_473eaa99_2K_2752x1536_1.webp"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                <Waves size={14} /> Point Break Waves • ~1.4 km
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                <Waves className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>World-Renowned Swell Sanctuary</span>
              </div>
              <h3 className="font-serif text-[32px] text-on-surface leading-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Midigama Beach
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                Famed for its legendary peeling reef breaks including Lazy Left, Rams, and Plantations. Midigama retains an unhurried, laid-back coastal charm with authentic roadside coconut shacks, quiet stretches of sand, and golden afternoon light.
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-surface-container mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
              <Umbrella className="text-primary" size={18} />
              <span>Surf &amp; Sunset Sanctuary</span>
            </div>
            <Link className="flex items-center gap-1.5 font-label-sm text-label-sm text-primary font-semibold hover:gap-2.5 transition-all" href="/experiences/midigama-beach">
              <span>Explore Tides</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {[
            {
              title: "Abimanagama Beach",
              tag: "Secluded Cove",
              dist: "~1.7 km",
              desc: "An unhurried stretch of amber sands tucked away from the main highway, ideal for restorative coastal strolls and calm water wading.",
              footer: "Quiet Coastal Solitude",
              img: "/images/experiences/find-your-favourite-shore/abimanagama-beach/sunset-on-tropical-beach-landscape-2k-20261027194553-6ae347dde3f00.webp",
              href: "/experiences/abimanagama-beach",
              cta: "View Shoreline",
            },
            {
              title: "Weligama Beach",
              tag: "Sandy Bay Break",
              dist: "~3.5 km",
              desc: "Sri Lanka's quintessential surf haven—a wide, golden sand bay featuring forgiving sandbar waves, beginner surf schools, and coastal views toward Taprobane Island.",
              footer: "Beginner Surf Haven",
              img: "/images/experiences/find-your-favourite-shore/weligama-beach/weligama-beach-the-ultimate-destination-for-vacation.webp",
              href: "/experiences/weligama-beach",
              cta: "View Bay Guide",
            },
            {
              title: "Ahangama Beach",
              tag: "Reef Point Breaks",
              dist: "~3.8 km",
              desc: "The vibrant surf epicenter of Sri Lanka's southern coast—renowned for iconic reef breaks, oceanfront cafes, stilt fishermen, and golden sunset views.",
              footer: "Boho Coastal Town",
              img: "/images/experiences/find-your-favourite-shore/ahangama-beach/make-ultra-wide-view-646c8e58-2k-6ae34cd82b4c4.webp",
              href: "/experiences/ahangama-beach",
              cta: "Explore Ahangama",
            },
          ].map((c) => (
            <div key={c.title} className="flex flex-col items-stretch gap-4 rounded-3xl border-t border-surface-container bg-surface-container-lowest p-5 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] transition-all hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.1)] sm:flex-row sm:gap-5 sm:p-6">
              <div className="h-44 w-full shrink-0 overflow-hidden rounded-2xl bg-surface-container sm:h-36 sm:w-40">
                <img alt={c.title} className="h-full w-full object-cover" src={c.img} />
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">{c.tag}</span>
                    <span className="text-primary font-label-sm text-label-sm font-semibold bg-surface-container-low px-2 py-0.5 rounded-full">{c.dist}</span>
                  </div>
                  <h4 className="font-serif text-xl text-on-surface font-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{c.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light line-clamp-3 sm:line-clamp-2">{c.desc}</p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 font-label-sm text-label-sm text-primary font-semibold">
                  <span>{c.footer}</span>
                  {c.href ? (
                    <Link href={c.href} className="flex items-center gap-1 hover:gap-1.5 transition-all">
                      <span>{c.cta ?? "Explore"}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <ArrowUpRight size={16} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {[
          { name: "Lazy Left Surf Break", tag: "Classic Point Break", dist: "~1.5 km", desc: "Long, ultra-smooth, and gentle reef wave heavily popular for longboarders and intermediate surfers peeling across deep coral.", footer: "Longboard & Intermediate Haven", img: "/images/experiences/find-your-favourite-shore/lazy-left-surf-break/Lazy-Left-Sri-Lanka.webp", href: "/experiences/lazy-left-surf-break", cta: "View Surf Intel" },
          { name: "Rams Right Surf Break", tag: "Hollow Reef Barrel", dist: "~1.6 km", desc: "Fast, powerful, and sharp A-frame reef break that creates heavy hollow barrels for advanced surfers seeking technical hollow waves.", footer: "Shortboard Reef Challenge", img: "/images/experiences/find-your-favourite-shore/rams-right-surf-break/480548153_122214750026083898_7444910258561657280_n.jpg_1c472787_2K_2752x1536_3.webp", href: "/experiences/rams-right-surf-break", cta: "View Reef Guide" },
          { name: "Awee Coco Secret Pool", tag: "Secluded Tidal Pools", dist: "~2.8 km", desc: "A secluded coastal sanctuary featuring natural granite saltwater dipping baths, sheltered turquoise tide pools, and tranquil shaded palm groves.", footer: "Natural Saltwater Bath", img: "/images/experiences/find-your-favourite-shore/awee-coco-secret-pool/A-secret-beach-cove-near-Weligama.jpg_e18043f1_2K_2752x1536_1.webp", href: "/experiences/awee-coco-secret-pool", cta: "View Pool Guide" },
          { name: "Secret Jungle Beach", tag: "Hidden Cove", dist: "~3.4 km", desc: "A hidden coastal cove sheltered by overhanging tropical foliage, ancient granite boulders, and unhurried southern solitude.", footer: "Jungle Canopy Shore", img: "/images/experiences/find-your-favourite-shore/secret-jungle-beach/jungle-beach-coast-visit-weligama.jpg_1a985ae0_2K_2752x1536_4.webp", href: "/experiences/secret-jungle-beach", cta: "Access Guide" },
          { name: "Polhena Beach & Coral Reef", tag: "Coral Lagoon", dist: "~12 km", desc: "A reef-sheltered natural swimming lagoon in Matara featuring crystal-clear turquoise shallows, vibrant coral gardens, and resident green sea turtles.", footer: "Snorkeling & Sea Turtles", img: "/images/experiences/find-your-favourite-shore/polhena-beach-coral-reef/817663936_18088621133666188_6333421277778168248_n.jpg_2e61ba44_2K_2752x1536_1.webp", href: "/experiences/polhena-beach-coral-reef", cta: "Explore Map" },
          { name: "Secret Beach Mirissa", tag: "Hidden Cove", dist: "~6.5 km", desc: "A secluded coastal hideaway tucked behind Mirissa's green headlands, featuring intimate sandy pockets, calm tide pools, and a relaxed cliffside bar.", footer: "Cliffside Snorkeling", img: "/images/experiences/find-your-favourite-shore/secret-beach-mirissa/Secret-Beach-Mirissa-1.webp_fb6ce4a2_2K_2752x1536_4.webp", href: "/experiences/secret-beach-mirissa", cta: "Discover Secret Cove" },
          { name: "Coconut Tree Hill", tag: "Iconic Viewpoint", dist: "~6.2 km", desc: "Sri Lanka's quintessential southern panorama—a dramatic red-earth cliff dome crowned with soaring palms overlooking crashing Indian Ocean swells.", footer: "Panoramic Sunset Vista", img: "/images/experiences/find-your-favourite-shore/coconut-tree-hill/images_(1).jpg_e8a652d7_2K_2752x1536_2.webp", href: "/experiences/coconut-tree-hill", cta: "Sunset Times" },
          { name: "Parrot Rock", tag: "Offshore Islet", dist: "~5.8 km", desc: "A dramatic offshore rocky islet accessible from Mirissa's main beach, offering elevated 360-degree panoramic views across the golden bay and open ocean.", footer: "360° Bay Lookout", img: "/images/experiences/find-your-favourite-shore/parrot-rock/Parrot-Rock.jpg_5cf8aa91_2K_2752x1536_2.webp", href: "/experiences/parrot-rock", cta: "Low Tide Timetable" },
          { name: "Mirissa Coastal Promontory", tag: "Coastal Ridge", dist: "~6.0 km", desc: "A striking raised coastal ridge offering sweeping panoramic vistas across Mirissa's sweeping harbor, golden crescent shores, and breaking surf.", footer: "Panoramic Ocean Vista", img: "/images/experiences/find-your-favourite-shore/mirissa-coastal-promontory/remove-the-girl-from-the-59cb498d-2k-6ae349b0d4201.webp", href: "/experiences/mirissa-coastal-promontory", cta: "View Route Guide" },
        ].map((c) => (
          <div key={c.name} className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
            <div className="space-y-4">
              <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
                <img alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={c.img} />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">{c.dist}</span>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">{c.tag}</div>
                <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{c.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">{c.desc}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-surface-container mt-3 flex items-center justify-between font-label-sm text-label-sm text-primary font-semibold">
              <span>{c.footer}</span>
              {c.href ? (
                <Link href={c.href} className="flex items-center gap-1 hover:gap-1.5 transition-all">
                  <span>{c.cta ?? "Explore"}</span>
                  <ArrowUpRight size={16} />
                </Link>
              ) : (
                <ArrowUpRight size={16} />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
        <Info className="text-outline" size={16} />
        <span>Distances based on regional road routes from Kumbalgama. Hotel concierge coordinates private tuk-tuks or transfers upon request.</span>
      </div>
    </section>
  );
}
