import Image from "next/image";

export function SouthernHeritageHero() {
  return (
    <section className="w-full px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-xl bg-neutral-900 min-h-[380px] lg:min-h-[440px] flex flex-col justify-end">
        <Image
          src="/images/experiences/southern-heritage-coastal-expeditions/hero/southern-heritage-coastal-expeditions-hero.webp"
          alt="Southern heritage and coastal landscape near Galle Fort, Sri Lanka"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative z-10 p-8 md:p-12 lg:p-14 max-w-3xl space-y-3.5">
          <p className="font-script text-2xl md:text-3xl text-white/95 leading-none drop-shadow-sm">
            sacred lore &amp; coastal rhythm...
          </p>
          <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight">
            Southern Heritage &amp; Coastal Expeditions
          </h1>
          <p className="font-body text-sm md:text-base text-slate-100/90 font-light leading-relaxed max-w-2xl">
            An unhurried journey through ancient living stone, fortified colonial
            ramparts, mangrove waterways, and ocean giants — nine handpicked
            southern Sri Lankan sanctuaries curated by Noonna Beach Hotel.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-body text-white/90">
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              9 Curated Chapters
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              5 Heritage Sanctuaries
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              4 Wildlife Expeditions
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              0.4 km – 24 km Range
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
