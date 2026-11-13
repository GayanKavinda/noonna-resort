import { Umbrella, Landmark, Utensils, Waves, ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ExperiencesHero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 lg:px-12 lg:pb-20">
      <Reveal className="mx-auto max-w-3xl space-y-4 pb-8 text-center sm:space-y-5 sm:pb-10">
        <div className="space-y-1.5">
          <span
            className="block font-script text-[1.75rem] font-normal tracking-wide text-[#2f6b8f] sm:text-3xl md:text-4xl"
            style={{ fontFamily: '"Moon Dance", cursive' }}
          >
            where the ocean sets the rhythm...
          </span>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container/40 px-3.5 py-1 font-label-sm text-label-sm font-semibold uppercase tracking-widest text-on-secondary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Explore the Southern Coast
          </div>
        </div>
        <h1
          className="font-serif text-[34px] font-normal leading-tight tracking-tight text-on-surface sm:text-[44px] md:text-[54px]"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            color: "rgb(23, 63, 86)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          Discover More <span className="font-normal italic text-primary">by the Sea</span>
        </h1>
        <p className="mx-auto max-w-2xl font-body-lg text-[15px] font-light leading-relaxed text-on-surface-variant sm:text-body-lg">
          From laid-back beaches to local flavours and memorable coastal adventures, discover the experiences waiting around Kumbalgama.
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            className="inline-flex items-center justify-center rounded-full bg-primary-container px-8 py-3.5 font-label-lg text-label-lg tracking-wide text-on-primary-container shadow-[0_4px_24px_-4px_rgba(23,63,86,0.12)] transition-all duration-200 hover:bg-primary"
            href="#nearby-beaches"
          >
            Explore Nearby Places
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-surface-container-low px-8 py-3.5 font-label-lg text-label-lg tracking-wide text-primary transition-all duration-200 hover:bg-secondary-container/40"
            href="https://www.booking.com/hotel/lk/noonna-beach.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Book Your Stay
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-4 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant sm:gap-x-6">
          <span className="flex items-center gap-1.5">
            <Umbrella className="text-primary" size={16} /> 13 Coastal Shores &amp; Breaks
          </span>
          <span className="hidden font-light text-slate-500 sm:inline">â€¢</span>
          <span className="flex items-center gap-1.5">
            <Landmark className="text-primary" size={16} /> 9 Heritage &amp; Wildlife Gems
          </span>
          <span className="hidden font-light text-slate-500 sm:inline">â€¢</span>
          <span className="flex items-center gap-1.5">
            <Utensils className="text-primary" size={16} /> 10 Coastal Dining Discoveries
          </span>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 items-stretch gap-6 pt-2 md:grid-cols-2 lg:grid-cols-12">
        <StaggerItem className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] sm:min-h-[420px] lg:col-span-4 lg:min-h-[460px]">
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
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#2f6b8f] group-hover:text-white transition-colors">
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
        </StaggerItem>

        <StaggerItem className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] sm:min-h-[420px] lg:col-span-4 lg:min-h-[460px]">
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Historic ramparts and ocean views at Galle Dutch Fort on Sri Lanka's southern coast"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHVkjDfFQDq5VLW87Q3MjnjGNQbW5xaSmmVPjC7p6J3jIftJ6sGrmDzgCQCnnlFIC1lgkzIjFV7a58RMDB77ByizXhodxDJoFKk5k_sqBUdc0pzM8_uXL3dTdTo7cc1WBNhpDORezd4tmvasJVutugpp8xjO4P38js1BSCCNc4JWBkFFICuXcxLmsovOyH2xU1Yir-VeSyq-1Ll37KE7GhEBHPEKUVk1VIGz7R-jDLdzv8OMRtkl8Xiw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Landmark size={16} className="text-primary" />
              <span>9 Heritage &amp; Wildlife Gems</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#2f6b8f] group-hover:text-white transition-colors">
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
        </StaggerItem>

        <StaggerItem className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] sm:min-h-[420px] md:col-span-2 lg:col-span-4 lg:min-h-[460px]">
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Traditional Sri Lankan rice and curry spread at a coastal dining table"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-PDGX8yJQXxmnEWLqaxJsn-qkR6vHC3GYWU-hZesskSeUhlYL1dNEgMx670Pj3riWYEP7Fqk2_LixTXaS-bvSrzT5zfL26q_S9R9_ZKSjcHrHfDq_c2Ljkbr8MidTkvGJ28pdv6IyHuVBBMAG94IKVz0RWC5imuDgaxg3nhnncra81h9_j47Ye3ospRaNXekrqILhVCD1j7sLdFD_4SOzUPiD_qWKDWuMzM4eKyCqNtAHudxc5NE9Q"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Utensils size={16} className="text-primary" />
              <span>10 Coastal Dining Discoveries</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#2f6b8f] group-hover:text-white transition-colors">
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
        </StaggerItem>
      </Stagger>
    </section>
  );
}
