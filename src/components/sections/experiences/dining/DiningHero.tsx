import { ChefHat, Coffee, Flame } from "lucide-react";
import Image from "next/image";
import { DINING_HERO } from "@/data/diningData";

const iconMap = { soup_kitchen: ChefHat, outdoor_grill: Flame, coffee: Coffee } as const;

export function DiningHero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-10">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100">
          <div className="w-full h-[420px] lg:h-[480px] relative overflow-hidden">
            <Image
              src={DINING_HERO.image}
              alt="Sri Lankan coastal beachside dining under warm string lights at dusk"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-14 text-white">
              <span
                className="text-sky-200 font-script italic tracking-wide mb-2"
                style={{ fontSize: "2.3rem", lineHeight: 1 }}
              >
                {DINING_HERO.eyebrow}
              </span>
              <h1 className="font-cormorant text-5xl lg:text-[58px] text-white tracking-tight leading-tight max-w-4xl">
                {DINING_HERO.title}
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl mt-3 font-light leading-relaxed font-sans">
                {DINING_HERO.deck}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/20 text-xs font-medium text-white/90">
                {DINING_HERO.highlights.map((h, i) => {
                  const Icon = iconMap[h.icon];
                  return (
                    <span key={h.label} className="contents">
                      <span className="flex items-center gap-1.5">
                        <Icon className="text-sky-200 w-[18px] h-[18px]" aria-hidden="true" />
                        {h.label}
                      </span>
                      {i < DINING_HERO.highlights.length - 1 && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-200" />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
