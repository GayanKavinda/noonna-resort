import { MessageCircle, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export function GastronomyBanner() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] border border-slate-100 bg-gradient-to-br from-[#e8dfd2] via-[#f3ede4] to-[#d9cdbb]" />
            <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] border border-slate-100 bg-gradient-to-br from-[#dbe7ec] via-[#eef4f7] to-[#c8d9e3]" />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <p className="font-script text-2xl md:text-3xl text-[#2f6b8f] leading-none">
                flavor &amp; heritage...
              </p>
              <h2 className="font-cormorant text-2xl lg:text-3xl font-normal text-[#173F56] leading-snug tracking-tight">
                A Taste of the Southern Coast
              </h2>
              <p className="text-xs font-medium text-[#2f6b8f] tracking-wide">
                Fresh Ocean Catch, Clay-Pot Curries &amp; Coastal Cafes
              </p>
            </div>
            <p className="font-body text-sm text-[#475569] font-light leading-relaxed">
              From slow-simmered village curries infused with roasted curry leaves
              and fresh coconut milk to morning catches grilled over open coconut
              husks and breezy specialty coffee spots in nearby surf hamlets.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] text-xs font-medium">
                Village curries
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] text-xs font-medium">
                Fresh catch
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] text-xs font-medium">
                Artisan cafes
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 pt-1.5">
              <Link
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-[#173F56] hover:text-[#2f6b8f] hover:border-[#2f6b8f] transition-colors text-xs font-medium shadow-sm"
                href="/experiences"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#2f6b8f]" />
                <span>View Dining Directory</span>
              </Link>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2f6b8f] text-white hover:bg-[#25566f] transition-colors text-xs font-medium shadow-sm"
                href="https://wa.me/?text=Hello%20Concierge,%20could%20you%20share%20your%20favorite%20local%20curry%20and%20cafe%20recommendations%20near%20Noonna?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Host for Food Recommendations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
