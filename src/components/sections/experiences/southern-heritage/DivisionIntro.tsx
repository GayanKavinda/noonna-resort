import { Landmark, Waves } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface DivisionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: "temple" | "kayaking";
  variant?: "default" | "panel";
}

export function DivisionIntro({
  eyebrow,
  title,
  description,
  icon,
  variant = "default",
}: DivisionIntroProps) {
  const Icon = icon === "temple" ? Landmark : Waves;
  const inner = (
    <Reveal>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-2 sm:space-y-2.5">
        <p className="font-script text-xl sm:text-2xl md:text-3xl text-[#2f6b8f] leading-none">
          {eyebrow}
        </p>
        <h2 className="font-cormorant text-[1.75rem] leading-tight sm:text-2xl md:text-3xl lg:text-[34px] font-normal text-[#173F56] sm:leading-snug tracking-tight text-balance">
          {title}
        </h2>
        <p className="font-body text-sm text-[#475569] font-light max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="pt-1.5 sm:pt-2 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-10 h-px bg-slate-200" />
          <Icon className="text-[#2f6b8f] w-4 h-4" strokeWidth={1.8} />
          <span className="w-8 sm:w-10 h-px bg-slate-200" />
        </div>
      </div>
    </Reveal>
  );

  if (variant === "panel") {
    return (
      <div className="w-full py-8 sm:py-10 bg-slate-50 border border-slate-200/80 text-center rounded-2xl">
        {inner}
      </div>
    );
  }

  return <section className="w-full py-6 sm:py-8 lg:py-12 bg-white">{inner}</section>;
}
