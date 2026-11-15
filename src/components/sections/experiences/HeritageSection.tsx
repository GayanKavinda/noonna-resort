import Link from "next/link";
import { ArrowRight, Compass, Info } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function HeritageSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-12"
      id="heritage-wildlife"
    >
      <Reveal>
        <div className="flex flex-col justify-between gap-6 pb-8 sm:pb-10 md:flex-row md:items-end md:pb-12">
        <div className="space-y-2">
          <span
            className="block font-script text-[1.6rem] font-normal tracking-wide text-[#2f6b8f] sm:text-2xl md:text-3xl"
            style={{
              fontFamily: "Moon Dance, cursive",
              lineHeight: "1.2",
            }}
          >
            ancient kingdoms &amp; living ecosystems...
          </span>
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
            Discover the Local Area
          </h2>
          <p className="max-w-xl font-body-md text-[15px] font-light leading-relaxed text-on-surface-variant sm:text-body-md">
            Explore nine revered heritage treasures, ancient monasteries, serene coastal lagoons, and vibrant wildlife sanctuaries situated near Kumbalgama.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          <span className="rounded-full bg-surface-container-low px-4 py-2 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            09 Heritage &amp; Wildlife Gems
          </span>
        </div>
        </div>
      </Reveal>
      <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Galle Dutch Fort UNESCO Citadel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/galle-dutch-fort/grok-1793163385571jpg-fdd856b0-2k-6ae3488dc47da.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~24 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">UNESCO World Heritage</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Galle Dutch Fort</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">Living 17th-century fortified citadel with cobblestone alleys, Dutch colonial architecture, ocean ramparts, and artisan jewellery boutiques.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Colonial Bastions &amp; Sunset Walk</span>
              <span className="text-xs text-on-surface-variant font-light">Heritage Site</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Martin Wickramasinghe Folk Art Museum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/martin-wickramasinghe-museum/imgi_2_martin-wickramasinghe-folk-museum-complex-feb3b7d1b1e35ae650b6575c026007fa.jpg_6332be77_2K_2752x1536_1.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~7.8 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Literary &amp; Folk History</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Martin Wickramasinghe Museum</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">The preserved ancestral estate of Sri Lanka&apos;s greatest author, exhibiting indigenous southern artifacts, craft tools, and tropical gardens.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Indigenous Southern Artifacts</span>
              <span className="text-xs text-on-surface-variant font-light">Folk Museum</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Kushtarajagala Rock Relief Weligama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/kushtarajagala-rock-relief/screenshot-2026-08-21-at-130903png-0ee9ef07-2k-6ae34bc08308c.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~2.7 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Ancient Sacred Monolith</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Kushtarajagala Rock Relief</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">An 8th-century Mahayana Bodhisattva Avalokiteshvara relief carved directly into solid granite, surrounded by tranquil village temple grounds.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">8th-Century Mahayana Carving</span>
              <span className="text-xs text-on-surface-variant font-light">Ancient Shrine</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Kumbalgama Potters Village traditional terracotta crafts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/kumbalgama-potters-village/can_you_change_cloths_colors_db40388e_2K_2752x1536_2.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~0.4 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Artisan Craft Heritage</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Kumbalgama Potters&apos; Village</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">Steps from Noonna, skilled generational artisans shape authentic terracotta cooking vessels, water pots, and roof tiles on traditional hand wheels.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Terracotta Wheel Crafting</span>
              <span className="text-xs text-on-surface-variant font-light">Local Artisans</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Taprobane Island Weligama Bay private islet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/taprobane-island/LSL_B2_Taprobane-Island_1920x700.jpg_039d249e_2K_2752x1536_3.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~3.1 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Private Islet Villa</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Taprobane Island</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">Sri Lanka&apos;s only private island, built in the 1920s by the eccentric Count de Mauny, rising like a romantic tropical dream in Weligama Bay.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Iconic Weligama Offshore Islet</span>
              <span className="text-xs text-on-surface-variant font-light">Coastal Landmark</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Koggala Lake &amp; Mangroves lagoon sanctuary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/koggala-lake-and-mangroves/soft-golden-hour-color-grade-aa5d2c8b-2k-6ae34b7acfc14.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~7.0 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Coastal Lagoon Ecology</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Koggala Lake &amp; Mangroves</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">An expansive brackish lagoon dotted with cinnamon-growing islands, ancient Buddhist hermitages, and birdwatching boat safaris under tropical foliage.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Island Safaris &amp; Cinnamon Isles</span>
              <span className="text-xs text-on-surface-variant font-light">Lagoon Sanctuary</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Koggala Stilt Fishermen Coastline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/koggala-stilt-fishermen-coast/d73f2c_7803db0635204ae1b3933fdcf11c735dmv2-2-1536x1024.webp_0a0b8f81_2K_2752x1536_1.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~6.8 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Living Artisanal Custom</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Koggala Stilt Fishermen Coast</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">The iconic Sri Lankan fishing spectacle where anglers balance delicately on wooden crossbars planted in the surf to cast for spotted herrings.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Timeless Riti Panna Fishing</span>
              <span className="text-xs text-on-surface-variant font-light">Living Tradition</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Whale Watching Cruises off Mirissa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/whale-watching-cruises/ep29e5zs0fadacjhqabp.webp_43e61c12_2K_2752x1536_1.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~8.0 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Marine Expedition</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Whale Watching Cruises</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">Board eco-conscious morning boats from Mirissa Harbour to witness magnificent blue whales, fin whales, and acrobat spinner dolphins in deep ocean waters.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Blue Whale &amp; Dolphin Safaris</span>
              <span className="text-xs text-on-surface-variant font-light">Marine Wildlife</span>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
          <div className="space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
              <img alt="Snake Farm Weligama Ayurvedic Sanctuary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/experiences/discover-the-local-area/snake-farm-weligama/f6534070-8554-4033-8009-0fda72aed238.webp_0b76be95_2K_2752x1536_4.webp" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">~5.1 km</span>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Ayurvedic Herbal Sanctuary</div>
              <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>Snake Farm Weligama</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">A renowned family of traditional Ayurvedic doctors who rescue and protect indigenous reptiles while providing natural snakebite cures and educational talks.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-label-sm font-label-sm text-primary font-medium bg-surface-container-low px-3 py-1 rounded-full">Indigenous Reptile Conservation</span>
              <span className="text-xs text-on-surface-variant font-light">Ayurvedic Centre</span>
            </div>
          </div>
        </StaggerItem>
      </Stagger>
      <Reveal delay={0.1}>
        <div className="mt-10 mb-6 flex flex-col items-center justify-center gap-4 text-center sm:mt-12 sm:flex-row">
          <Link
            href="/experiences/southern-heritage-coastal-expeditions"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6b8f] px-6 py-3.5 font-label-md text-label-md font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#25566f] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.12)] sm:w-auto sm:px-8"
          >
            <Compass className="text-[18px]" size={18} />
            <span>Explore Southern Heritage &amp; Coastal Expeditions</span>
            <ArrowRight className="text-[16px]" size={16} />
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-8 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
          <Info className="text-outline text-[16px]" size={16} />
          <span>Day excursions and English-speaking guided tours arranged daily by the concierge desk.</span>
        </div>
      </Reveal>
    </section>
  );
}

export { HeritageSection };
