import type { DestinationConciergeData } from "@/data/destinationDetailData";
import { MessageCircle, Headset } from "lucide-react";

export function DestinationConciergeBanner({ concierge }: { concierge: DestinationConciergeData }) {
  return (
    <section className="w-full bg-white pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-14 shadow-lg text-center flex flex-col items-center justify-center max-w-4xl mx-auto">
          <span className="font-script text-xl sm:text-2xl lg:text-3xl text-[#2f6b8f] italic block mb-2 leading-none">
            {concierge.script}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#173F56] font-normal tracking-tight mb-3 text-balance">
            {concierge.title}
          </h3>
          <p className="text-neutral-600 font-sans text-sm sm:text-base max-w-2xl font-light leading-relaxed mx-auto mb-6 sm:mb-8">
            {concierge.deck}
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              className="min-h-11 h-auto py-3 sm:py-0 sm:h-11 px-5 sm:px-6 bg-[#2f6b8f] hover:bg-[#2D6A8E] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-center"
              href={concierge.primaryHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
              <span>{concierge.primaryLabel}</span>
            </a>
            <a
              className="min-h-11 h-auto py-3 sm:py-0 sm:h-11 px-5 sm:px-6 bg-[#2f6b8f]/10 hover:bg-[#2f6b8f]/20 text-[#2f6b8f] text-sm font-medium rounded-xl flex items-center justify-center gap-2 border border-[#2f6b8f]/20 transition-all text-center"
              href={concierge.secondaryHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Headset className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
              <span>{concierge.secondaryLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
