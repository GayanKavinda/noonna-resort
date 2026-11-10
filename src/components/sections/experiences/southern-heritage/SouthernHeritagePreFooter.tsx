import { ExternalLink, ShieldCheck } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export function SouthernHeritagePreFooter() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-script text-3xl sm:text-4xl text-[#397FA8] mb-3 lowercase tracking-wide select-none">
          sacred chronicles &amp; timeless heritage...
        </p>
        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-slate-900 font-normal tracking-tight mb-4 leading-tight">
          Anchor Your Days in Southern Heritage
        </h2>
        <p className="font-body text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
          From ancient 8th-century granite sanctuaries to fortified colonial
          ramparts, return to unhurried coastal living on the sands of Thalpe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#397FA8] hover:bg-[#2e698d] text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm hover:shadow gap-2 group"
          >
            <span>Reserve Your Room on Booking.com</span>
            <ExternalLink className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="inline-flex items-center justify-center gap-2 text-xs text-slate-500 font-light font-body">
          <ShieldCheck className="w-[17px] h-[17px] text-[#397FA8]" />
          <span>Secured through Booking.com • Verified Private Coastal Listing</span>
        </div>
      </div>
    </section>
  );
}
