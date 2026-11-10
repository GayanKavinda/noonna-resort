import { ArrowRight, ExternalLink, Play } from "lucide-react";

export default function CoastalMotion() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-16">
      <div className="space-y-2 pb-12">
        <span
          className="font-script text-2xl md:text-3xl text-[#397FA8] font-normal tracking-wide block"
          style={{
            fontFamily: '"Moon Dance", cursive',
            color: "rgb(57, 127, 168)",
            fontSize: "1.85rem",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          atmosphere &amp; effortless arrival...
        </span>
        <h2
          className="font-serif text-[38px] md:text-[44px] text-on-surface tracking-tight font-normal leading-tight"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 400,
            color: "rgb(23, 63, 86)",
            letterSpacing: "-0.01em",
            fontSize: "2.5rem",
            lineHeight: 1.15,
          }}
        >
          See the Shoreline, Find the Sanctuary
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl font-light leading-relaxed">
          Immerse yourself in coastal motion and explore Noonna Beach Hotel&apos;s serene setting in Kumbalgama between Midigama and Weligama Bay.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_4px_30px_-6px_rgba(23,63,86,0.08)] flex flex-col justify-between border-t border-surface-container">
          <div className="space-y-5">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-[0_8px_32px_-6px_rgba(23,63,86,0.1)] h-64">
              <img
                alt="Cinematic frame capture of sunlit ocean waves breaking along pristine white sandy shore at Noonna Beach Hotel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBey65-FoXd6qTRvfcbryzrM_leT3ejlSI8v6wVU-po28Gc6FKGO7-Y-yOR5bUEY4dZ0IT8pbQObKza_f4LQaQDw1ErEHfDwLenAd20xiNzjrqU7n1QfmF3B0ZmNvHba8MtcXRpZJCkpFcPKmkQSjvWgBluCh68DwzjtW4vwDfnN1hsIDdxlAE59IKTGi6runkmedSBMqe6gYTvHp2wquHByxawx_BkRExYkpcz0w9jkCtFsTlIpRa__g"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 px-4 py-1.5 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-body-sm text-body-sm font-medium">
                Watch: Coastal Impressions • 01:45
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Visual Storytelling</div>
              <h3 className="font-headline-md text-headline-md text-on-surface">The Ocean in Motion</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Sun-drenched tides, slow-turning ceiling fans, and golden light filtering through palm fronds. Experience the stillness and tidal rhythm of Noonna before you arrive.
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4">
            <a className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-semibold hover:underline" href="#">
              <span>Explore Instagram Channel</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_4px_30px_-6px_rgba(23,63,86,0.08)] flex flex-col justify-between border-t border-surface-container">
          <div className="space-y-5">
            <div
              aria-label="Map showing Noonna Beach Hotel in Kumbalgama, Weligama, Sri Lanka"
              className="w-full h-64 rounded-2xl bg-cover bg-center overflow-hidden relative shadow-inner"
              role="img"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk7v56Hyxhhp3nnGLcWn60fRaSG4KW2phXivfVS2rQQctqDD1KEk9elhzSoXkpXNlKxLRKIYNjSTnA_Es0x2ADqC7kqa6OaKeMHQi1Stx_5g_GmsLyZIWTJJFUyWfYV3Ki3kEvgIlsQcFQgRURsc_SgZvlrI8Zv6qk_AfDFLE6yjsoEcLrKoRbhzcbcpnVKcewaI_g8vdjxw-NI41ZRON4-tQ0UdIuCHhQwy1pDK0thsvPt2RyTTWaUw")',
              }}
            >
              <div className="absolute top-3 left-3 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm space-y-0.5">
                <div className="font-label-sm text-label-sm text-primary font-semibold">Noonna Beach Hotel</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant font-light">81170 Kumbalgama, Sri Lanka</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-surface-container-low text-center space-y-1">
                <div className="text-primary font-label-sm text-label-sm font-semibold">~1.2 km</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Train Station</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low text-center space-y-1">
                <div className="text-primary font-label-sm text-label-sm font-semibold">~1.4 km</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Midigama Surf</div>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low text-center space-y-1">
                <div className="text-primary font-label-sm text-label-sm font-semibold">~3.0 km</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Weligama Bay</div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-surface-container mt-4">
            <a className="inline-flex items-center gap-2 text-primary font-label-md text-label-md font-semibold hover:gap-3 transition-all" href="#">
              <span>View Full Arrival &amp; Route Guide</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CoastalMotion };
