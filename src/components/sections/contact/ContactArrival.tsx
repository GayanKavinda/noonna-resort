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

export function ContactArrival() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="font-script text-3xl sm:text-4xl text-[#397FA8] block leading-tight">
            journey to the coast...
          </span>

          <h2 className="font-headline-hero text-3xl sm:text-4xl lg:text-5xl text-[#173F56] font-normal tracking-tight">
            Arrival Hubs &amp; Nearby Transit
          </h2>

          {/* Symmetrical Line + Icon Ornament */}
          <div
            className="flex items-center justify-center gap-3.5 py-2"
            aria-hidden="true"
          >
            <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#397FA8]/40" />
            <div className="w-8 h-8 rounded-full bg-[#F1F9FD] border border-[#D9EAF3] flex items-center justify-center text-[#397FA8]">
              <Compass className="w-4 h-4" />
            </div>
            <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#397FA8]/40" />
          </div>

          <p className="font-body-md text-[#475569] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Effortlessly connected along Sri Lanka&apos;s southern shoreline via
            scenic rail lines, domestic airstrips, and coastal expressways.
          </p>
        </div>

        {/* 3-Column Balanced Transit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Rail Network */}
          <div className="bg-white rounded-3xl border border-[#D9EAF3] p-6 lg:p-7 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#397FA8]/10 text-[#397FA8] flex items-center justify-center shrink-0">
                    <Train className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold block">
                      Railways
                    </span>
                    <h3 className="font-headline-sm text-lg text-[#173F56] font-medium">
                      Public Rail
                    </h3>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#397FA8]/10 text-[#397FA8]">
                  COASTAL LINE
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#F1F9FD]/60 border border-[#D9EAF3]">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#397FA8] font-semibold block">
                        Station
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium">
                        Kumbalgama Station
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#397FA8]">
                        1.2 km
                      </span>
                      <span className="block text-[10px] text-[#64748B]">
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
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#397FA8] font-semibold block">
                        Surf Hub
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium">
                        Midigama Station
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#397FA8]">
                        1.9 km
                      </span>
                      <span className="block text-[10px] text-[#64748B]">
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

            <div className="pt-4 mt-4 border-t border-[#D9EAF3] flex items-center justify-between text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <Clock3
                  className="w-3.5 h-3.5 text-[#397FA8]"
                  aria-hidden="true"
                />
                <span>Daily departures</span>
              </span>
              <span className="text-[#397FA8] font-medium">
                Tuk-tuk friendly
              </span>
            </div>
          </div>

          {/* Card 2: Domestic Aviation */}
          <div className="bg-white rounded-3xl border border-[#D9EAF3] p-6 lg:p-7 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#397FA8]/10 text-[#397FA8] flex items-center justify-center shrink-0">
                    <Plane className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold block">
                      Aviation
                    </span>
                    <h3 className="font-headline-sm text-lg text-[#173F56] font-medium">
                      Air Transfers
                    </h3>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#397FA8]/10 text-[#397FA8]">
                  DOMESTIC HOPS
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#F1F9FD]/60 border border-[#D9EAF3]">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#397FA8] font-semibold block">
                        Airfield
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium">
                        Koggala Airport
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#397FA8]">
                        11 km
                      </span>
                      <span className="block text-[10px] text-[#64748B]">
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
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#397FA8] font-semibold block">
                        International
                      </span>
                      <h4 className="font-headline-sm text-base text-[#173F56] font-medium">
                        Mattala Airport
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-headline-hero text-lg font-normal text-[#397FA8]">
                        95 km
                      </span>
                      <span className="block text-[10px] text-[#64748B]">
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

            <div className="pt-4 mt-4 border-t border-[#D9EAF3] flex items-center justify-between text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#397FA8]" aria-hidden="true" />
                <span>AC private transfers</span>
              </span>
              <span className="text-[#397FA8] font-medium">
                Expressway route
              </span>
            </div>
          </div>

          {/* Card 3: Coastal Context & Concierge */}
          <div className="bg-gradient-to-br from-[#173F56] to-[#25526d] text-white rounded-3xl p-6 lg:p-7 shadow-[0_8px_30px_-6px_rgba(23,63,86,0.15)] flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-label-sm text-[10px] uppercase tracking-wider text-slate-300 font-semibold block">
                      Assistance
                    </span>
                    <h3 className="font-headline-sm text-lg text-white font-medium">
                      Host Concierge
                    </h3>
                  </div>
                </div>
                <span className="font-label-sm text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white">
                  24/7 SUPPORT
                </span>
              </div>

              <div className="space-y-4 pt-1">
                <p className="font-body-md text-xs text-slate-200 font-light leading-relaxed">
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

            <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-[11px]">
              <span className="text-slate-300">Kumbalgama Shoreline</span>
              <span className="text-white font-medium">Noonna Beach Hotel</span>
            </div>
          </div>
        </div>

        {/* Bottom Verification & Explore Bar */}
        <div className="p-5 rounded-2xl bg-white border border-[#D9EAF3] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#475569] font-body-md font-light">
            <BadgeCheck
              className="w-4 h-4 text-[#397FA8] shrink-0"
              aria-hidden="true"
            />
            <span>
              * Distances verified from property location at Kumbalgama. Private
              driver and tuk-tuk arrangements can be assisted via our concierge.
            </span>
          </div>
          <Link
            className="inline-flex items-center gap-1.5 font-label-md text-xs sm:text-sm text-[#397FA8] hover:text-[#173F56] font-semibold shrink-0 transition-colors group"
            href="/experiences"
          >
            <span className="font-body-md">Explore Coastal Excursions</span>
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}