import {
  Camera,
  Clock,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
} from "lucide-react";
import type {
  HeritageChapter as HeritageChapterData,
  HeritageImage,
} from "@/data/southernHeritageData";

function PlaceholderImage({
  image,
  className,
  overlay = "bottom",
  compact = false,
}: {
  image: HeritageImage;
  className: string;
  overlay?: "bottom" | "none";
  compact?: boolean;
}) {
  const grad =
    overlay === "bottom"
      ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
      : "";
  return (
    <div
      className={`relative overflow-hidden border border-slate-100 bg-gradient-to-br from-slate-200 via-slate-100 to-[#dbe9f2] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
        <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      {overlay !== "none" && <div className={`absolute inset-0 ${grad}`} />}
      {image.topBadge && (
        <div
          className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white uppercase tracking-wider font-medium ${
            image.topBadge.includes("06:00") || image.topBadge.includes("Photography")
              ? "px-3 py-1 text-[10px] flex items-center gap-1.5 bg-black/60 border-white/20"
              : "text-[10px]"
          }`}
        >
          {image.topBadge.includes("06:00") && (
            <Clock className="w-[13px] h-[13px] text-[#8ccefb]" />
          )}
          {image.topBadge.includes("Photography") && (
            <Camera className="w-[13px] h-[13px] text-[#8ccefb]" />
          )}
          <span>{image.topBadge}</span>
        </div>
      )}
      {image.caption && (
        <div
          className={`absolute text-white ${
            compact ? "bottom-2 left-2 text-[11px] font-medium" : "bottom-3 left-3 right-3"
          }`}
        >
          {image.iconCaption ? (
            <>
              <p className="text-xs sm:text-sm font-medium tracking-wide drop-shadow-sm">
                {image.caption}
              </p>
              <p className="text-[11px] text-white/80 font-light">
                {image.iconCaption}
              </p>
            </>
          ) : compact ? (
            <span>{image.caption}</span>
          ) : (
            <p className={`${image.caption.length > 40 ? "text-xs sm:text-sm" : "text-xs"} font-medium tracking-wide drop-shadow-sm`}>
              {image.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function Facts({ facts }: { facts: HeritageChapterData["facts"] }) {
  return (
    <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-neutral-800">
      {facts.map((f, i) => (
        <div key={f.label} className={i > 0 ? "pl-2.5 border-l border-slate-200" : ""}>
          <span className="text-[10px] text-neutral-400 block uppercase tracking-wider font-medium">
            {f.label}
          </span>
          <span className="text-xs font-semibold text-[#173F56] block">{f.value}</span>
          <span className="text-[10px] text-neutral-500 font-light block">{f.sub}</span>
        </div>
      ))}
    </div>
  );
}

function Actions({ actions }: { actions: HeritageChapterData["actions"] }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-1">
      {actions.map((a) => (
        <a
          key={a.label}
          className={
            a.variant === "outline"
              ? "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-[#173F56] hover:text-[#397FA8] hover:border-[#397FA8] transition-colors text-xs font-medium shadow-sm"
              : "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#397FA8] text-white hover:bg-[#2c6687] transition-colors text-xs font-medium shadow-sm"
          }
          href={a.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {a.icon === "map" ? (
            <MapPin className={`w-4 h-4 ${a.variant === "outline" ? "text-[#397FA8]" : ""}`} />
          ) : (
            <MessageCircle className="w-4 h-4" />
          )}
          <span>{a.label}</span>
        </a>
      ))}
    </div>
  );
}

function TextBlock({ chapter }: { chapter: HeritageChapterData }) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {chapter.badges.map((b) =>
            b.star ? (
              <span
                key={b.text}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF4F9] text-[#173F56] border border-[#397FA8]/20 text-[10px] tracking-wider uppercase font-semibold"
              >
                <span className="text-[#397FA8]">★</span> {b.text}
              </span>
            ) : (
              <span
                key={b.text}
                className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] text-[10px] font-medium tracking-wide uppercase"
              >
                {b.text}
              </span>
            )
          )}
        </div>
        <h3 className="font-cormorant text-2xl lg:text-3xl font-medium text-[#173F56] leading-snug tracking-tight">
          {chapter.title}
        </h3>
        <p className="text-xs font-medium text-[#397FA8] tracking-wide">
          {chapter.subtitle}
        </p>
      </div>
      <p className="text-sm text-[#475569] font-light leading-relaxed">
        {chapter.description}
      </p>
      <Facts facts={chapter.facts} />
      <Actions actions={chapter.actions} />
    </div>
  );
}

function ChapterImages({ chapter }: { chapter: HeritageChapterData }) {
  const [i0, i1, i2, i3] = chapter.images;
  switch (chapter.imageLayout) {
    case "fort":
    case "potters":
    case "museum":
    case "stilt":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PlaceholderImage
            image={i0}
            className="sm:col-span-2 rounded-2xl shadow-sm aspect-[16/9] min-h-[220px]"
          />
          <PlaceholderImage
            image={i1}
            className="sm:col-span-2 rounded-xl shadow-sm aspect-[21/9] min-h-[140px]"
          />
        </div>
      );
    case "kushta":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <PlaceholderImage
            image={i0}
            className="sm:col-span-7 rounded-2xl shadow-sm min-h-[260px] sm:min-h-[320px]"
          />
          <PlaceholderImage
            image={i1}
            className="sm:col-span-5 rounded-2xl shadow-sm min-h-[200px] sm:min-h-[320px]"
          />
        </div>
      );
    case "taprobane":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PlaceholderImage
            image={i0}
            className="sm:col-span-2 rounded-2xl shadow-sm aspect-[16/9] min-h-[240px]"
          />
          <PlaceholderImage
            image={i1}
            className="sm:col-span-2 rounded-xl shadow-sm aspect-[21/9] min-h-[140px]"
          />
        </div>
      );
    case "lagoon":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PlaceholderImage
            image={i0}
            className="sm:col-span-2 rounded-2xl shadow-sm aspect-[16/9] min-h-[220px]"
          />
          <PlaceholderImage
            image={i1}
            className="sm:col-span-2 rounded-xl shadow-sm aspect-[21/9] min-h-[140px]"
          />
        </div>
      );
    case "whale":
      return (
        <div className="grid grid-cols-2 gap-3.5">
          {[i0, i1, i2, i3].filter(Boolean).map((img, idx) => (
            <PlaceholderImage
              key={idx}
              image={img}
              className="rounded-2xl shadow-sm aspect-[16/10]"
              compact
            />
          ))}
        </div>
      );
    case "snake":
      return (
        <div className="grid grid-cols-2 gap-3.5">
          <PlaceholderImage
            image={i0}
            className="col-span-2 rounded-2xl shadow-sm aspect-[16/9] min-h-[220px]"
          />
          <PlaceholderImage image={i1} className="rounded-xl shadow-sm aspect-[16/10]" compact />
          <PlaceholderImage image={i2} className="rounded-xl shadow-sm aspect-[16/10]" compact />
          <PlaceholderImage
            image={i3}
            className="col-span-2 rounded-xl shadow-sm aspect-[21/9]"
            compact
          />
        </div>
      );
    default:
      return null;
  }
}

export function HeritageChapter({ chapter }: { chapter: HeritageChapterData }) {
  const textFirst = chapter.layout === "text-left";
  const textColClass = "lg:col-span-5 space-y-4";
  const imgColClass = "lg:col-span-7";

  return (
    <article
      id={`chapter-${chapter.number}`}
      className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {textFirst ? (
          <>
            <div className={`${textColClass} order-2 lg:order-1`}>
              <TextBlock chapter={chapter} />
            </div>
            <div className={`${imgColClass} order-1 lg:order-2`}>
              <ChapterImages chapter={chapter} />
            </div>
          </>
        ) : (
          <>
            <div className={imgColClass}>
              <ChapterImages chapter={chapter} />
            </div>
            <div className={textColClass}>
              <TextBlock chapter={chapter} />
            </div>
          </>
        )}
      </div>
    </article>
  );
}
