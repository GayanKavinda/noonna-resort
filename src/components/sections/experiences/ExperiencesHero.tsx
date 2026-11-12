import { Umbrella, Landmark, Utensils, Waves, ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

export function ExperiencesHero() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-6 pb-20">
      <div className="max-w-3xl mx-auto text-center space-y-5 pb-10">
        <div className="space-y-1.5">
          <span
            className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide block"
            style={{ fontFamily: '"Moon Dance", cursive', fontSize: "2.15rem" }}
          >
            where the ocean sets the rhythm...
          </span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm tracking-widest uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Explore the Southern Coast
          </div>
        </div>
        <h1
          className="font-serif text-[44px] md:text-[54px] text-on-surface tracking-tight leading-tight font-normal"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            color: "rgb(23, 63, 86)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          Discover More <span className="italic font-normal text-primary">by the Sea</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
          From laid-back beaches to local flavours and memorable coastal adventures, discover the experiences waiting around Kumbalgama.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            className="px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.12)]"
            href="#nearby-beaches"
          >
            Explore Nearby Places
          </a>
          <a
            className="px-8 py-3.5 rounded-full bg-surface-container-low text-primary hover:bg-secondary-container/40 font-label-lg text-label-lg tracking-wide transition-all duration-200"
            href="https://www.booking.com/hotel/lk/noonna-beach.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Book Your Stay
          </a>
        </div>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Umbrella className="text-primary" size={16} /> 13 Coastal Shores &amp; Breaks
          </span>
          <span className="text-outline-variant font-light">•</span>
          <span className="flex items-center gap-1.5">
            <Landmark className="text-primary" size={16} /> 9 Heritage &amp; Wildlife Gems
          </span>
          <span className="text-outline-variant font-light">•</span>
          <span className="flex items-center gap-1.5">
            <Utensils className="text-primary" size={16} /> 10 Coastal Dining Discoveries
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] group hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] transition-all duration-500 relative min-h-[460px] border border-slate-200/80">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Turquoise surf and golden shoreline along Sri Lanka's southern coast near Midigama"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD21pthuzDtjw1SpdnKurfMKvU0N8IptkHHFTLgw26UdlLFxrjTGhosj5nya-18dARMMQF9o4JnMBTI_Q6mkAfRcO98IW_1kth9AkPhZBXueiU4mD0Iqz5dydDqlUHuMlcwXGMEE3hvGbFzvh8DJo7ulUtPUtAOYfmQZmBdGTRbcm0b1uB0QYkxP3piJ9jpfnQrCE6Gzn8J-LbZ0-MYHsuXQ4eRcKgzd7B0YIbW2N3djmkYDfAxJc-BbTcKitPhKqBQzswlsUs8k7q010g"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Waves size={16} className="text-primary" />
              <span>13 Coastal Shores &amp; Breaks</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#397FA8] group-hover:text-white transition-colors">
              <Umbrella size={18} />
            </span>
          </div>
          <div className="relative z-10 p-6 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="font-script text-2xl text-secondary-fixed block" style={{ fontFamily: '"Moon Dance", cursive' }}>
                barefoot sands &amp; rolling swell...
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Southern Coast Beaches &amp; Surf Breaks
              </h3>
              <p className="font-body-sm text-body-sm text-slate-200/90 font-light leading-relaxed">
                Quiet coves, tidal pools, and world-class reef breaks stretching from Midigama to Mirissa—each shore with its own coastal rhythm.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Secluded Coves</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Surf &amp; Tide Pools</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Golden Hour Shores</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <a href="#nearby-beaches" className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm font-semibold hover:text-secondary-fixed transition-colors group/link">
                <span>Explore Beaches</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] group hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] transition-all duration-500 relative min-h-[460px] border border-slate-200/80">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Historic ramparts and ocean views at Galle Dutch Fort on Sri Lanka's southern coast"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Landmark size={16} className="text-primary" />
              <span>9 Heritage &amp; Wildlife Gems</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#397FA8] group-hover:text-white transition-colors">
              <Compass size={18} />
            </span>
          </div>
          <div className="relative z-10 p-6 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="font-script text-2xl text-secondary-fixed block" style={{ fontFamily: '"Moon Dance", cursive' }}>
                living history, cinnamon &amp; lagoons...
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Southern Heritage &amp; Coastal Expeditions
              </h3>
              <p className="font-body-sm text-body-sm text-slate-200/90 font-light leading-relaxed">
                UNESCO fort ramparts, ancient rock reliefs, mangrove lagoons, and wildlife encounters—timeless stories woven along the southern coast.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Historic Forts &amp; Temples</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Mangrove &amp; Wildlife</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Cultural Trails</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <Link href="/experiences/southern-heritage-coastal-expeditions" className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm font-semibold hover:text-secondary-fixed transition-colors group/link">
                <span>Explore Heritage</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] group hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] transition-all duration-500 relative min-h-[460px] border border-slate-200/80">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Traditional Sri Lankan rice and curry spread at a coastal dining table"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Utensils size={16} className="text-primary" />
              <span>10 Coastal Dining Discoveries</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#397FA8] group-hover:text-white transition-colors">
              <Compass size={18} />
            </span>
          </div>
          <div className="relative z-10 p-6 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="font-script text-2xl text-secondary-fixed block" style={{ fontFamily: '"Moon Dance", cursive' }}>
                fresh catch &amp; island spice...
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                A Taste of Sri Lanka&apos;s Southern Coast
              </h3>
              <p className="font-body-sm text-body-sm text-slate-200/90 font-light leading-relaxed">
                From clay-pot rice &amp; curry and oceanfront seafood to café breakfasts and sunset bites—authentic coastal flavours near Noonna.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Local Rice &amp; Curry</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Fresh Seafood</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Cafés &amp; Sunset Dining</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <Link href="/experiences/dining" className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm font-semibold hover:text-secondary-fixed transition-colors group/link">
                <span>Explore Dining</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
