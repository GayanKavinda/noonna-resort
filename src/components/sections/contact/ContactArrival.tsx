import Link from "next/link";
import {
  Train,
  Plane,
  Clock3,
  Car,
  BadgeCheck,
  ArrowRight,
  Compass,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ContactArrival() {
  return (
    <section className="w-full bg-surface-container-lowest py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12">
        <Reveal className="max-w-2xl mx-auto text-center space-y-3">
          <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#2f6b8f] block leading-tight">
            journey to the coast...
          </span>

          <h2 className="font-headline-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#173F56] font-normal tracking-tight text-balance">
            Arrival Hubs &amp; Nearby Transit
          </h2>

          <div
            className="flex items-center justify-center gap-3.5 py-1 sm:py-2"
            aria-hidden="true"
          >
            <span className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#397FA8]/40" />
            <div className="w-8 h-8 rounded-full bg-[#F1F9FD] border border-[#D9EAF3] flex items-center justify-center text-[#2f6b8f]">
              <Compass className="w-4 h-4" />
            </div>
            <span className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#397FA8]/40" />
          </div>

          <p className="font-body-md text-[#475569] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Effortlessly connected along Sri Lanka&apos;s southern shoreline via
            scenic rail lines, domestic airstrips, and coastal expressways.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          <StaggerItem className="bg-white rounded-3xl border border-[#D9EAF3] p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#2f6b8f]/10 text-[#2f6b8f] flex items-center justify-center shrink-0">
                    <Train className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#475569] font-semibold block">
                      Railways
                    </span>
                    <h3 className="font-headline-sm text-lg text-[#173F56] font-medium leading-snug">
                      Public Rail
                    </h3>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#2f6b8f]/10 text-[#2f6b8f] shrink-0 text-center leading-snug">
                  COASTAL LINE
                </span>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#F1F9FD]/60 border border-[#D9EAF3]">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="min-w-0">
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#2f6b8f] font-semibold block">
                        Station
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium leading-snug">
                        Kumbalgama Station
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#2f6b8f]">
                        1.2 km
                      </span>
                      <span className="block text-[10px] text-[#475569]">
                        ~3 min
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-xs text-[#475569] font-light leading-relaxed">
                    Scenic southern connection linking Colombo Fort, Galle, and
                    Matara.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F1F9FD]/60 border border-[#D9EAF3]">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="min-w-0">
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#2f6b8f] font-semibold block">
                        Surf Hub
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium leading-snug">
                        Midigama Station
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#2f6b8f]">
                        1.9 km
                      </span>
                      <span className="block text-[10px] text-[#475569]">
                        ~5 min
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-xs text-[#475569] font-light leading-relaxed">
                    Neighboring surf breaks, coconut groves, and beach cafes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D9EAF3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[11px] text-[#475569]">
              <span className="flex items-center gap-1.5">
                <Clock3
                  className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0"
                  aria-hidden="true"
                />
                <span>Daily departures</span>
              </span>
              <span className="text-[#2f6b8f] font-medium">
                Tuk-tuk friendly
              </span>
            </div>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-3xl border border-[#D9EAF3] p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#2f6b8f]/10 text-[#2f6b8f] flex items-center justify-center shrink-0">
                    <Plane className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#475569] font-semibold block">
                      Aviation
                    </span>
                    <h3 className="font-headline-sm text-lg text-[#173F56] font-medium leading-snug">
                      Air Transfers
                    </h3>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#2f6b8f]/10 text-[#2f6b8f] shrink-0 text-center leading-snug">
                  DOMESTIC HOPS
                </span>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#F1F9FD]/60 border border-[#D9EAF3]">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="min-w-0">
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#2f6b8f] font-semibold block">
                        Airfield
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium leading-snug">
                        Koggala Airport
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#2f6b8f]">
                        11 km
                      </span>
                      <span className="block text-[10px] text-[#475569]">
                        ~20 min
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-xs text-[#475569] font-light leading-relaxed">
                    Domestic charters and scenic sea-plane flights along the
                    lagoon coast.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F1F9FD]/60 border border-[#D9EAF3]">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="min-w-0">
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#2f6b8f] font-semibold block">
                        International
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium leading-snug">
                        Mattala Airport
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#2f6b8f]">
                        95 km
                      </span>
                      <span className="block text-[10px] text-[#475569]">
                        ~1h 45m
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-xs text-[#475569] font-light leading-relaxed">
                    Southern gateway with swift expressway connection (E01).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D9EAF3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[11px] text-[#475569]">
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0" aria-hidden="true" />
                <span>AC private transfers</span>
              </span>
              <span className="text-[#2f6b8f] font-medium">
                Expressway route
              </span>
            </div>
          </StaggerItem>

          <StaggerItem className="bg-gradient-to-br from-[#173F56] to-[#25526d] text-white rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_-6px_rgba(23,63,86,0.15)] flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-slate-300 font-semibold block">
                      Assistance
                    </span>
                    <h3 className="font-headline-sm text-lg text-white font-medium leading-snug">
                      Host Concierge
                    </h3>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white shrink-0 text-center leading-snug">
                  24/7 SUPPORT
                </span>
              </div>

              <div className="space-y-4 pt-1">
                <p className="font-body-md text-xs sm:text-[13px] text-slate-200 font-light leading-relaxed">
                  Navigating Sri Lanka’s southern coast is seamless. Whether you
                  are arriving on an overnight flight or taking the scenic
                  coastal rail line, our team coordinates private drivers or
                  trusted local tuk-tuks directly to your door.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <p className="font-label-sm text-[11px] text-white font-semibold">
                    Custom Arrival Coordination
                  </p>
                  <p className="font-body-md text-xs text-slate-300 font-light leading-relaxed">
                    Share your flight or train number in advance for a
                    frictionless check-in experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px]">
              <span className="text-slate-300">Kumbalgama Shoreline</span>
              <span className="text-white font-medium">Noonna Beach Hotel</span>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D9EAF3] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-2.5 text-xs text-[#475569] font-body-md font-light min-w-0">
              <BadgeCheck
                className="w-4 h-4 text-[#2f6b8f] shrink-0 mt-0.5 sm:mt-0"
                aria-hidden="true"
              />
              <span className="leading-relaxed">
                * Distances verified from property location at Kumbalgama. Private
                driver and tuk-tuk arrangements can be assisted via our concierge.
              </span>
            </div>
            <Link
              className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-sm text-[#2f6b8f] hover:text-[#173F56] font-semibold shrink-0 transition-colors group py-1"
              href="/experiences"
            >
              <span className="font-body-md">Explore Coastal Excursions</span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}