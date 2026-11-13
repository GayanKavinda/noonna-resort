import { ChefHat, Coffee, Flame } from "lucide-react";
import Image from "next/image";
import { DINING_HERO } from "@/data/diningData";
import { Reveal } from "@/components/motion/Reveal";

const iconMap = { soup_kitchen: ChefHat, outdoor_grill: Flame, coffee: Coffee } as const;

export function DiningHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10 lg:px-12">
        <Reveal className="relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
          <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[480px]">
            <Image
              src={DINING_HERO.image}
              alt="Sri Lankan coastal beachside dining under warm string lights at dusk"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white sm:p-8 lg:p-14">
              <span
                className="mb-2 font-script italic tracking-wide text-sky-200"
                style={{ fontSize: "clamp(1.6rem, 5vw, 2.3rem)", lineHeight: 1 }}
              >
                {DINING_HERO.eyebrow}
              </span>
              <h1 className="max-w-4xl font-cormorant text-[34px] leading-tight tracking-tight text-white sm:text-5xl lg:text-[58px]">
                {DINING_HERO.title}
              </h1>
              <p className="mt-3 max-w-2xl font-sans text-[15px] font-light leading-relaxed text-slate-200 sm:text-lg">
                {DINING_HERO.deck}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/20 pt-4 text-xs font-medium text-white/90 sm:mt-6">
                {DINING_HERO.highlights.map((h, i) => {
                  const Icon = iconMap[h.icon];
                  return (
                    <span key={h.label} className="contents">
                      <span className="flex items-center gap-1.5">
                        <Icon className="h-[18px] w-[18px] text-sky-200" aria-hidden="true" />
                        {h.label}
                      </span>
                      {i < DINING_HERO.highlights.length - 1 && (
                        <span className="hidden h-1.5 w-1.5 rounded-full bg-sky-200 sm:block" />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
