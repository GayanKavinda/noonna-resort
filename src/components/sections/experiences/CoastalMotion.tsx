import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function CoastalMotion() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
      <Reveal>
        <div className="space-y-2 pb-8 sm:pb-10 md:pb-12">
          <span
            className="block font-script text-[1.6rem] font-normal tracking-wide text-[#2f6b8f] sm:text-2xl md:text-3xl"
            style={{
              fontFamily: '"Moon Dance", cursive',
              lineHeight: 1.2,
            }}
          >
            atmosphere &amp; effortless arrival...
          </span>
          <h2
            className="font-serif text-[32px] font-normal leading-tight tracking-tight text-on-surface sm:text-[38px] md:text-[44px]"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 400,
              color: "rgb(23, 63, 86)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            See the Shoreline, Find the Sanctuary
          </h2>
          <p className="max-w-2xl font-body-md text-[15px] font-light leading-relaxed text-on-surface-variant sm:text-body-md">
            Immerse yourself in coastal motion and explore Noonna Beach Hotel&apos;s serene setting in Kumbalgama between Midigama and Weligama Bay.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-12">
        <div className="flex flex-col justify-between rounded-3xl border-t border-surface-container bg-surface-container-lowest p-5 shadow-[0_4px_30px_-6px_rgba(23,63,86,0.08)] sm:p-6 lg:col-span-6 lg:p-8">
          <div className="space-y-4 sm:space-y-5">
            <div className="group relative h-56 cursor-pointer overflow-hidden rounded-2xl shadow-[0_8px_32px_-6px_rgba(23,63,86,0.1)] sm:h-64">
              <img
                alt="Cinematic frame capture of sunlit ocean waves breaking along pristine white sandy shore at Noonna Beach Hotel"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBey65-FoXd6qTRvfcbryzrM_leT3ejlSI8v6wVU-po28Gc6FKGO7-Y-yOR5bUEY4dZ0IT8pbQObKza_f4LQaQDw1ErEHfDwLenAd20xiNzjrqU7n1QfmF3B0ZmNvHba8MtcXRpZJCkpFcPKmkQSjvWgBluCh68DwzjtW4vwDfnN1hsIDdxlAE59IKTGi6runkmedSBMqe6gYTvHp2wquHByxawx_BkRExYkpcz0w9jkCtFsTlIpRa__g"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[1px] transition-colors group-hover:bg-primary/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-container-lowest/90 text-primary shadow-lg backdrop-blur-md transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                  <Play className="ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 rounded-xl bg-surface-container-lowest/90 px-3.5 py-1.5 font-body-sm text-body-sm font-medium text-on-surface backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-4">
                Watch: Coastal Impressions • 01:45
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">Visual Storytelling</div>
              <h3 className="font-headline-md text-headline-md text-on-surface">The Ocean in Motion</h3>
              <p className="font-body-sm text-body-sm font-light leading-relaxed text-on-surface-variant">
                Sun-drenched tides, slow-turning ceiling fans, and golden light filtering through palm fronds. Experience the stillness and tidal rhythm of Noonna before you arrive.
              </p>
            </div>
          </div>
          <div className="mt-4 border-t border-surface-container pt-4">
            <a
              className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:underline"
              href="https://instagram.com/noonnabeach"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Explore Instagram Channel</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border-t border-surface-container bg-surface-container-lowest p-5 shadow-[0_4px_30px_-6px_rgba(23,63,86,0.08)] sm:p-6 lg:col-span-6 lg:p-8">
          <div className="space-y-4 sm:space-y-5">
            <div
              aria-label="Map showing Noonna Beach Hotel in Kumbalgama, Weligama, Sri Lanka"
              className="relative h-56 w-full overflow-hidden rounded-2xl bg-cover bg-center shadow-inner sm:h-64"
              role="img"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk7v56Hyxhhp3nnGLcWn60fRaSG4KW2phXivfVS2rQQctqDD1KEk9elhzSoXkpXNlKxLRKIYNjSTnA_Es0x2ADqC7kqa6OaKeMHQi1Stx_5g_GmsLyZIWTJJFUyWfYV3Ki3kEvgIlsQcFQgRURsc_SgZvlrI8Zv6qk_AfDFLE6yjsoEcLrKoRbhzcbcpnVKcewaI_g8vdjxw-NI41ZRON4-tQ0UdIuCHhQwy1pDK0thsvPt2RyTTWaUw")',
              }}
            >
              <div className="absolute left-3 top-3 space-y-0.5 rounded-xl bg-surface-container-lowest/95 px-3.5 py-2 shadow-sm backdrop-blur-md">
                <div className="font-label-sm text-label-sm font-semibold text-primary">Noonna Beach Hotel</div>
                <div className="font-body-sm text-body-sm font-light text-on-surface-variant">81170 Kumbalgama, Sri Lanka</div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-3">
              <div className="space-y-1 rounded-xl bg-surface-container-low p-3 text-center">
                <div className="font-label-sm text-label-sm font-semibold text-primary">~1.2 km</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Train Station</div>
              </div>
              <div className="space-y-1 rounded-xl bg-surface-container-low p-3 text-center">
                <div className="font-label-sm text-label-sm font-semibold text-primary">~1.4 km</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Midigama Surf</div>
              </div>
              <div className="space-y-1 rounded-xl bg-surface-container-low p-3 text-center">
                <div className="font-label-sm text-label-sm font-semibold text-primary">~3.0 km</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">Weligama Bay</div>
              </div>
            </div>
          </div>
          <div className="mt-4 border-t border-surface-container pt-4">
            <a className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary transition-all hover:gap-3" href="#arrival-map">
              <span>View Full Arrival &amp; Route Guide</span>
              <ArrowRight size={16} />
            </a>
          </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export { CoastalMotion };
