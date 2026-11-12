import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Waves,
  Clock3,
  Lock,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function ContactHero() {
  return (
    <section className="w-full bg-surface-container-lowest pt-8 pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-100">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] block leading-tight">
              conversations by the sea...
            </span>
            <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-6xl text-[#173F56] font-normal tracking-tight leading-tight">
              We&apos;d Love to Hear from You
            </h1>
            <p className="font-body-md text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Planning a coastal escape for your group or family? Reach out to
              our seaside sanctuary directly for tailored itineraries, entire
              resort rental enquiries, or effortless reservation options along
              Kumbalgama&apos;s calm shoreline. Noonna Beach Hotel is offered as
              an entire resort rental for a private resort stay.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#397FA8] hover:bg-[#2e698d] text-white font-medium text-sm transition-all shadow-[0_4px_24px_-4px_rgba(23,63,86,0.15)] hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="font-body-md">Book Your Stay</span>
                <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
              </a>
              <Link
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-low text-secondary font-medium text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all"
              >
                <span className="font-body-md">Direct Inquiry</span>
                <ChevronDown className="w-[18px] h-[18px]" aria-hidden="true" />
              </Link>
              <Link
                href="#property-location"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-200 text-[#173F56] font-medium text-sm hover:border-[#397FA8]/40 hover:text-[#397FA8] transition-all"
              >
                <MapPin
                  className="w-[18px] h-[18px] text-[#397FA8]"
                  aria-hidden="true"
                />
                <span className="font-body-md">Find Location</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.12)] border border-slate-200">
              <div className="relative w-full h-80 lg:h-96">
                <Image
                  src="/images/hotel/property-exterior.jpg"
                  alt="Noonna Beach Hotel oceanfront setting and tropical palms in Kumbalgama"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-slate-200 block mb-1 font-semibold">
                    Kumbalgama Coastline
                  </span>
                  <p className="font-headline-sm text-xl font-medium leading-snug">
                    Restorative Barefoot Days &amp; Indian Ocean Tides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          <div className="p-3 rounded-lg bg-[#F1F9FD] border border-[#D9EAF3] flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold">
                Direct Host Care
              </p>
              <p className="font-body-sm text-xs font-semibold text-[#173F56]">
                Personalized Stays
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F1F9FD] border border-[#D9EAF3] flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0">
              <Waves className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold">
                Sanctuary Cove
              </p>
              <p className="font-body-sm text-xs font-semibold text-[#173F56]">
                Kumbalgama Coast
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F1F9FD] border border-[#D9EAF3] flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0">
              <Clock3 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold">
                Response Window
              </p>
              <p className="font-body-sm text-xs font-semibold text-[#173F56]">
                Within 2–4 Hours
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F1F9FD] border border-[#D9EAF3] flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0">
              <Lock className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <p className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold">
                Verified Partner
              </p>
              <p className="font-body-sm text-xs font-semibold text-[#173F56]">
                Booking.com Listed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
