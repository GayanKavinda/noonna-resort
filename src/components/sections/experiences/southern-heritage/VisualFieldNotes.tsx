import { Play } from "lucide-react";

export function VisualFieldNotes() {
  return (
    <section className="w-full px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-lg bg-neutral-900 min-h-[300px] flex items-center justify-center p-8 text-center">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#173F56] via-[#244b62] to-[#0f3b52] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-xl space-y-4">
          <div
            className="w-16 h-16 rounded-full bg-[#25566f]/90 backdrop-blur-md border border-white/40 flex items-center justify-center mx-auto text-white"
            aria-hidden="true"
          >
            <Play className="w-8 h-8 fill-current" />
          </div>
          <p className="font-script text-2xl text-white/95">
            untold stories in motion...
          </p>
          <h3 className="font-cormorant text-3xl font-medium text-white">
            Visual Field Notes: 9 Southern Sanctuaries
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-light">
            Experience motion captures of golden hour reef breaks, ancient Bo tree
            grounds, and hidden lagoon tributaries prior to venturing out.
          </p>
          <div className="pt-1">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-wide">
              Full 4K Aerial Perspective Available at Concierge
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
