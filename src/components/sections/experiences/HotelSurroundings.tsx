import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  Compass,
  Info,
  Landmark,
  Plane,
  Sparkles,
  Train,
  Trees,
  Utensils,
  Waves,
} from "lucide-react";
import Link from "next/link";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

export default function HotelSurroundings() {
  return (
    <>
      <section
        className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 scroll-mt-24"
        id="surroundings"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-2">
            <span
              className="font-script text-3xl text-[#2f6b8f] font-normal tracking-wide block"
              style={{ fontFamily: "Moon Dance, cursive", fontSize: "2.15rem" }}
            >
              close by &amp; effortless discovery...
            </span>
            <h2
              className="font-serif text-[38px] md:text-[44px] text-[#173F56] tracking-tight font-normal leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                letterSpacing: "-0.01em",
                lineHeight: "1.15",
              }}
            >
              Hotel Surroundings &amp; What&apos;s Nearby
            </h2>
            <p className="font-body-md text-body-md text-[#4A6B82] max-w-2xl font-light leading-relaxed">
              Everything within easy reach of Noonna Beach Hotel in Kumbalgama — from secluded bays and village eateries to railway stations and regional airstrips.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#D9EAF3] text-[#173F56] hover:border-[#2f6b8f] hover:bg-slate-50 text-xs font-medium tracking-wide shadow-sm transition-all duration-200"
              href="#arrival-map"
            >
              <Compass className="w-3.5 h-3.5 text-[#2f6b8f]" />
              <span className="font-normal">Show on Map</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2f6b8f] hover:bg-[#25566f] text-white text-xs font-medium tracking-wide shadow-sm transition-all duration-200"
              href="https://www.booking.com/hotel/lk/noonna-beach.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-medium">Check Availability</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white rounded-2xl p-6 border border-[#D9EAF3] hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9EAF3]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2f6b8f] bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#173F56] leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>What&apos;s Nearby</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block pt-0.5">Heritage &amp; History</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200/60">Landmarks</span>
              </div>
              <ul className="divide-y divide-[#D9EAF3]/30 mt-3">
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Kushtarajagala Rock Relief</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">2.7 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Koggala Beach Park</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">9 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Koggala EPZ Playground</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">9 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Medinduwa</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">9 km</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#D9EAF3] hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9EAF3]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2f6b8f] bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#173F56] leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Restaurants &amp; Cafés</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block pt-0.5">Local Dining</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200/60">Dining</span>
              </div>
              <ul className="divide-y divide-[#D9EAF3]/30 mt-3">
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Shirani Home Made Rice &amp; Curry</span><span className="text-xs font-normal text-[#2f6b8f] bg-slate-50 border border-[#2f6b8f]/20 px-2 py-0.5 rounded-full shrink-0">250 m</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Surf View Restaurant</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">1.2 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Turtle Bay Seafood Restaurant</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">2.4 km</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#D9EAF3] hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9EAF3]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2f6b8f] bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#173F56] leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Natural Beauty</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block pt-0.5">Lagoons &amp; Coast</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200/60">Ecology</span>
              </div>
              <ul className="divide-y divide-[#D9EAF3]/30 mt-3">
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Koggala Lake</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">7 km</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#D9EAF3] hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9EAF3]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2f6b8f] bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                    <Waves className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#173F56] leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Beaches in Neighbourhood</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block pt-0.5">Tides &amp; Point Breaks</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200/60">Coastline</span>
              </div>
              <ul className="divide-y divide-[#D9EAF3]/30 mt-3">
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Midigama Beach</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">1.4 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Abimanagama Beach</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">1.7 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Weligama Beach</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">3 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Ahangama Beach</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">3 km</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#D9EAF3] hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9EAF3]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2f6b8f] bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#173F56] leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Public Transport</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block pt-0.5">Coastal Rail Line</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200/60">Transit</span>
              </div>
              <ul className="divide-y divide-[#D9EAF3]/30 mt-3">
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Kumbalgama Railway Station</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">1.2 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Midigama Railway Station</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">1.9 km</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#D9EAF3] hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D9EAF3]/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2f6b8f] bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#173F56] leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Closest Airports</h3>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500 block pt-0.5">Aviation &amp; Transfers</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200/60">Airports</span>
              </div>
              <ul className="divide-y divide-[#D9EAF3]/30 mt-3">
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Koggala Airport</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">11 km</span></li>
                <li className="py-2.5 flex items-center justify-between group/item"><span className="text-[14px] font-normal text-slate-700 group-hover/item:text-[#2f6b8f] transition-colors">Mattala Rajapaksa International Airport</span><span className="text-xs font-normal text-slate-500 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-full shrink-0">95 km</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 scroll-mt-24"
        id="arrival-map"
      >
        <div className="space-y-2 pb-8">
          <span
            className="font-script text-2xl md:text-3xl text-[#2f6b8f] font-normal tracking-wide block"
            style={{ fontFamily: "Moon Dance, cursive", fontSize: "1.85rem", lineHeight: "1.2" }}
          >
            encounters along the southern shore...
          </span>
          <h2
            className="font-serif text-[38px] md:text-[44px] text-[#173F56] tracking-tight font-normal leading-tight"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", letterSpacing: "-0.01em", lineHeight: "1.15" }}
          >
            Make the Most of Your Stay
          </h2>
          <p className="font-body-md text-body-md text-[#4A6B82] max-w-2xl font-light leading-relaxed">
            Handcrafted ocean adventures and slow-living coastal discoveries curated for your days along Kumbalgama&apos;s shores.
          </p>
        </div>
        <div className="mb-10 w-full h-64 md:h-72 rounded-2xl overflow-hidden relative border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] group">
          <img
            alt="Southern Sri Lanka coastline and ocean encounters"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={NEUTRAL_IMAGE_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[0.5px]" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between flex-wrap gap-4">
            <div className="px-4 py-2 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[#173F56] font-label-sm text-label-sm uppercase tracking-wider font-semibold border border-white/60 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Southern Coast Experiences • Handcrafted Daily Itineraries
            </div>
            <Link
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2f6b8f] text-white font-label-sm text-label-sm font-medium hover:bg-[#2D6A8E] transition-colors shadow-sm"
              href="/contact#inquiry-form"
            >
              <span>Reserve with Concierge</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {[
            { n: "01", icon: Waves, cat: "Point Breaks", time: "Year-round", title: "Surf & Point Breaks", desc: "Catch world-class peeling waves across Lazy Left, Rams, and Weligama Bay with guided private coaching.", link: "Board Rentals & Coaching" },
            { n: "02", icon: Compass, cat: "Coastal Solitude", time: "Morning Low Tide", title: "Low-Tide Alcoves & Reef Walks", desc: "Stroll tranquil exposed sand bars and bathe in calm natural rock pools sheltered from outer swells.", link: "Tide Guides on Request" },
            { n: "03", icon: CircleDot, cat: "Marine Sanctuary", time: "Nov â€“ Apr", title: "Snorkelling & Sea Turtles", desc: "Swim alongside gentle green sea turtles amidst vibrant coral reefs in Polhena's protected calm waters.", link: "Gear & Fins Arranged" },
            { n: "04", icon: Waves, cat: "Ocean Expedition", time: "Dec â€“ Apr", title: "Deep Sea Whale Watching", desc: "Set out from Mirissa Harbour to witness majestic blue whales and spinner dolphins with ethical maritime skippers.", link: "Private Yacht Charters" },
            { n: "05", icon: Sparkles, cat: "Inland Groves", time: "Koggala Hills", title: "Cinnamon Plantation Walks", desc: "Explore lush inland estates near Koggala Lake, witness artisan quill peeling, and taste freshly brewed spiced infusions.", link: "Estate Walk & Tasting" },
            { n: "06", icon: Landmark, cat: "Heritage Path", time: "Half-Day", title: "Cultural Shrines & Fort Heritage", desc: "Journey to ancient Kushtarajagala rock reliefs, Galle Dutch Fort ramparts, and southern folk art sanctuaries.", link: "Curated Private Itinerary" },
          ].map((item) => (
            <div
              key={item.n}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-slate-200/80 hover:border-[#2f6b8f]/50 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-light text-[#2f6b8f]" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>{item.n}</span>
                  <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2f6b8f] group-hover:bg-[#2f6b8f] group-hover:text-white transition-colors">
                    <item.icon size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">{item.cat}</span>
                    <span className="text-slate-500" aria-hidden="true">•</span>
                    <span className="text-xs text-slate-500 font-light">{item.time}</span>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#173F56] group-hover:text-[#2f6b8f] transition-colors leading-tight" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>{item.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between text-xs text-[#2f6b8f] font-medium">
                <span>{item.link}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
          <Info className="text-outline" size={16} />
          <span>Activities operate with verified local guides and independent instructors. Concierge manages private reservations.</span>
        </div>
      </section>
    </>
  );
}

export { HotelSurroundings };

