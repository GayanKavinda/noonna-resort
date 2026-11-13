import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  deck?: string;
  alignment?: "center" | "left";
  theme?: "light" | "dark";
  isHero?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  deck,
  alignment = "center",
  theme = "light",
  isHero = false,
  className = "",
}) => {
  const isDark = theme === "dark";

  const alignStyles = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
  }[alignment];

  const eyebrowColor = isDark ? "text-white/90" : "text-[#2f6b8f]";
  const titleColor = isDark ? "text-white" : "text-[#173F56]";
  const deckColor = isDark ? "text-slate-200" : "text-slate-600";

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles} ${className}`}>
      {/* Tier 1: Cursive Eyebrow */}
      {eyebrow && (
        <span
          className={`font-script text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-2 tracking-wide select-none ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}

      {/* Tier 2: Primary Section Title */}
      {isHero ? (
        <h1
          className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight mb-4 ${titleColor}`}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={`font-heading text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.18] tracking-tight mb-4 ${titleColor}`}
        >
          {title}
        </h2>
      )}

      {/* Tier 3: Explanatory Deck */}
      {deck && (
        <p
          className={`font-body text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl ${deckColor}`}
        >
          {deck}
        </p>
      )}
    </div>
  );
};

