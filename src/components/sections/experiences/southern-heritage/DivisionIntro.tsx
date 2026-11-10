import { Landmark, Waves } from "lucide-react";

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
    <div className="max-w-3xl mx-auto px-6 text-center space-y-2.5">
      <p className="font-script text-2xl md:text-3xl text-[#397FA8] leading-none">
        {eyebrow}
      </p>
      <h2 className="font-cormorant text-2xl md:text-3xl lg:text-[34px] font-normal text-[#173F56] leading-snug tracking-tight">
        {title}
      </h2>
      <p className="font-body text-sm text-[#475569] font-light max-w-xl mx-auto leading-relaxed">
        {description}
      </p>
      <div className="pt-2 flex items-center justify-center gap-3">
        <span className="w-10 h-px bg-slate-200" />
        <Icon className="text-[#397FA8] w-4 h-4" strokeWidth={1.8} />
        <span className="w-10 h-px bg-slate-200" />
      </div>
    </div>
  );

  if (variant === "panel") {
    return (
      <div className="w-full py-10 bg-slate-50 border border-slate-200/80 text-center rounded-2xl">
        {inner}
      </div>
    );
  }

  return <section className="w-full py-8 lg:py-12 bg-white">{inner}</section>;
}
