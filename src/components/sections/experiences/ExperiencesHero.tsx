import { Umbrella, Landmark, Utensils, Waves, ArrowRight, Compass } from "lucide-react";

export function ExperiencesHero() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-6 pb-20">
      <div className="max-w-3xl mx-auto text-center space-y-5 pb-10">
        <div className="space-y-1.5">
          <span
            className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide block"
            style={{ fontFamily: '"Moon Dance", cursive', fontSize: "2.15rem" }}
          >
            where the ocean sets the rhythm...
          </span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm tracking-widest uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Explore the Southern Coast
          </div>
        </div>
        <h1
          className="font-serif text-[44px] md:text-[54px] text-on-surface tracking-tight leading-tight font-normal"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            color: "rgb(23, 63, 86)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          Discover More <span className="italic font-normal text-primary">by the Sea</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto">
          From laid-back beaches to local flavours and memorable coastal adventures, discover the experiences waiting around Kumbalgama.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            className="px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.12)]"
            href="#nearby-beaches"
          >
            Explore Nearby Places
          </a>
          <a
            className="px-8 py-3.5 rounded-full bg-surface-container-low text-primary hover:bg-secondary-container/40 font-label-lg text-label-lg tracking-wide transition-all duration-200"
            href="https://www.booking.com/hotel/lk/noonna-beach.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Book Your Stay
          </a>
        </div>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Umbrella className="text-primary" size={16} /> 10 Coastal Shores &amp; Breaks
          </span>
          <span className="text-outline-variant font-light">•</span>
          <span className="flex items-center gap-1.5">
            <Landmark className="text-primary" size={16} /> 9 Heritage &amp; Wildlife Gems
          </span>
          <span className="text-outline-variant font-light">•</span>
          <span className="flex items-center gap-1.5">
            <Utensils className="text-primary" size={16} /> 10 Coastal Dining Discoveries
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] group hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] transition-all duration-500 relative min-h-[460px] border border-slate-200/80">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Midigama and Mirissa surf point breaks and turquoise ocean waters"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_xdzZP3YJockyGu4FNNlUqEOhIm9HXbrfnV7be8AIaYUwn58s2cqzFN17YaDaIVaXAnIenjOJdTesY6e8y9YTQcpftT5cQO0mFVRS3MSxGdXoKR_cnfH9ZoBBWJsBlB6-XtoOuQftKFJHDu4lHMRFvvqmOSu3jqhPG5xacookYTJAxlnwOJYuWGVg-9tDMdQtjjPpg6fFs2Se19GKdl8I3uBumGReTQbpX1Pv3zYMDHyntuRer4is3pbj5KcN9vLfTmPDfZjGGuGCt84"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Waves size={16} className="text-primary" />
              <span>World-Class Breaks • 1.4 km</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#397FA8] group-hover:text-white transition-colors">
              <Waves size={18} />
            </span>
          </div>
          <div className="relative z-10 p-6 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="font-script text-2xl text-secondary-fixed block" style={{ fontFamily: '"Moon Dance", cursive' }}>
                peeling point breaks &amp; morning swell...
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Lazy Left, Rams &amp; Secluded Reefs
              </h3>
              <p className="font-body-sm text-body-sm text-slate-200/90 font-light leading-relaxed">
                Peeling left-hand point breaks, calm inner lagoons, and morning tide pools carved into ancient volcanic granite shelf.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Surf: Intermediate to Pro</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Tides: 06:00 – 09:30 AM</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Water: 28°C</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <a href="#nearby-beaches" className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm font-semibold hover:text-secondary-fixed transition-colors group/link">
                <span>Explore Surf Breaks</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 shadow-[0_16px_48px_-8px_rgba(23,63,86,0.18)] group hover:scale-[1.015] hover:shadow-[0_24px_56px_-10px_rgba(23,63,86,0.25)] transition-all duration-500 relative min-h-[480px] lg:min-h-[500px] border border-primary/30 ring-1 ring-white/20">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Barefoot oceanfront stroll during golden hour sunset near Kumbalgama"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuwerReLJklD7OMCbBS2WA1GWBtqVg19-sg27s5pXPp-daCJKrDsGG4YfAs57uPiDy-kVOc5d8UjedAmhE3avPwtjaSUIBz6W2OWyzsOCKsamUpq-Uy_CDmIdvPV7LJxv2ePHs2mT49D0cp8aYOhSTS2rKpfDvQuRGuqqjkWs-kXMJnRLwHa7-q0mYbfjV0zP2PmTr80XTdoe0Xmdxf74I3rCENZUFhQZau9XuVBU7Joo2MJXAvD6_wQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b28]/95 via-[#0a1b28]/40 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Barefoot Sanctuary • Direct Shoreline</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#397FA8] group-hover:text-white transition-colors">
              <Umbrella size={18} />
            </span>
          </div>
          <div className="relative z-10 p-6 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="font-script text-2xl text-secondary-fixed block" style={{ fontFamily: '"Moon Dance", cursive' }}>
                where stillness meets the sunset tides...
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Kumbalgama &amp; Unbroken Shorelines
              </h3>
              <p className="font-body-sm text-body-sm text-slate-200/90 font-light leading-relaxed">
                The peaceful sanctuary crescent nestled between vibrant Weligama Bay and laid-back Midigama coves. Where unhurried days follow ocean tides.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Golden Hour Strolls</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Natural Tide Pools</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Zero Tourist Crowds</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <a href="#nearby-beaches" className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm font-semibold hover:text-secondary-fixed transition-colors group/link">
                <span>Discover Our Shoreline</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-slate-900 shadow-[0_12px_40px_-8px_rgba(23,63,86,0.12)] group hover:scale-[1.015] hover:shadow-[0_20px_48px_-10px_rgba(23,63,86,0.2)] transition-all duration-500 relative min-h-[460px] border border-slate-200/80">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            alt="Coastal Buddhist temple stupa island and turquoise ocean waters"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQvu1MDvOISw-WHTlWYwzSLXhP3DyqO7t6n2Svh9beEHWWWbzQRBBNEvVWExP1Ozs-rMV5HrY6PphjGX0jYXOuauK1Y5QzYkIstmaPxtHU9HZ4NLhGd_Em18e5y0sERnDzhH02TsW8MO45NKYw4hbUcTm_a1vw3U-kpzdWKJcmY6C5KPO3zRV06hbENBPaJTe-nEUGcl6f1SwfkD9wziexKYhPPSx9AI-Z8sUKC42xbp8z8uWGofempA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2232]/95 via-[#0d2232]/45 to-black/20" />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#173F56] shadow-sm font-label-sm text-label-sm font-semibold">
              <Landmark size={16} className="text-primary" />
              <span>Southern Heritage • 10–25 Mins</span>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#173F56] shadow-sm group-hover:bg-[#397FA8] group-hover:text-white transition-colors">
              <Compass size={18} />
            </span>
          </div>
          <div className="relative z-10 p-6 mt-auto space-y-4">
            <div className="space-y-1.5">
              <span className="font-script text-2xl text-secondary-fixed block" style={{ fontFamily: '"Moon Dance", cursive' }}>
                living history, cinnamon &amp; lagoons...
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug tracking-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Ancient Rock Reliefs &amp; Mangrove Safaris
              </h3>
              <p className="font-body-sm text-body-sm text-slate-200/90 font-light leading-relaxed">
                8th-century Kushtarajagala Bodhisattva rock carving, serene Koggala lagoon boat safaris through cinnamon islands, and colonial Dutch bastions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">History &amp; Living Culture</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Mangrove Wildlife</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-light border border-white/10">Tea &amp; Spice Trails</span>
            </div>
            <div className="pt-2 border-t border-white/15">
              <a href="#heritage-wildlife" className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm font-semibold hover:text-secondary-fixed transition-colors group/link">
                <span>Explore Heritage Trails</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
