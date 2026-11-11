import type { DestinationConciergeData } from "@/data/destinationDetailData";
import { MessageCircle, Headset } from "lucide-react";

export function DestinationConciergeBanner({ concierge }: { concierge: DestinationConciergeData }) {
  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-lg text-center flex flex-col items-center justify-center max-w-4xl mx-auto">
          <span className="font-script text-2xl lg:text-3xl text-[#397FA8] italic block mb-2 leading-none">
            {concierge.script}
          </span>
          <h3 className="font-serif text-3xl lg:text-4xl text-[#173F56] font-normal tracking-tight mb-3">
            {concierge.title}
          </h3>
          <p className="text-neutral-600 font-sans text-base max-w-2xl font-light leading-relaxed mx-auto mb-8">
            {concierge.deck}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="h-11 px-6 bg-[#397FA8] hover:bg-[#2D6A8E] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              href={concierge.primaryHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" />
              <span>{concierge.primaryLabel}</span>
            </a>
            <a
              className="h-11 px-6 bg-[#397FA8]/10 hover:bg-[#397FA8]/20 text-[#397FA8] text-sm font-medium rounded-xl flex items-center justify-center gap-2 border border-[#397FA8]/20 transition-all"
              href={concierge.secondaryHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Headset className="w-[18px] h-[18px]" aria-hidden="true" />
              <span>{concierge.secondaryLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
