import React from "react";
import { STAY_DATA } from "@/data/stayData";
import {
  LogIn,
  Clock,
  Baby,
  BedDouble,
  PawPrint,
  Moon,
  ShieldCheck,
  Info,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

interface StayPoliciesProps {
  className?: string;
}

const POLICY_ICONS: Record<string, React.ElementType> = {
  checkin: LogIn,
  checkout: Clock,
  children: Baby,
  beds: BedDouble,
  pets: PawPrint,
  events: Moon,
  booking: ShieldCheck,
};

export const StayPolicies: React.FC<StayPoliciesProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full border-b border-[#D9EAF3]/60 bg-white py-14 sm:py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
          <span className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] md:text-4xl">
            seamless stay...
          </span>
          <h2 className="mb-3 font-heading text-[32px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-4xl md:text-[40px]">
            Good to Know
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-slate-600 sm:text-base">
            Simple guidelines to ensure a restful, harmonious stay for every traveler on the southern shore.
          </p>
        </Reveal>

        <Reveal className="divide-y divide-[#D9EAF3]/60 overflow-hidden rounded-2xl border border-[#D9EAF3] bg-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
          {STAY_DATA.policies.map((policy) => {
            const IconComponent = POLICY_ICONS[policy.id] ?? Info;
            return (
              <div
                key={policy.id}
                className="flex flex-col justify-between gap-3 p-4 transition-colors hover:bg-[#EBF5FB]/30 sm:flex-row sm:items-center sm:gap-4 sm:p-6"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBF5FB] text-[#2f6b8f]">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-medium text-[#173F56]">
                      {policy.title}
                    </h4>
                    <span
                      className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium sm:hidden ${
                        policy.isNeutral
                          ? "border border-slate-200 bg-slate-100 text-slate-600"
                          : "bg-[#EBF5FB] text-[#173F56]"
                      }`}
                    >
                      {policy.badge}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:max-w-md sm:text-right">
                  <span
                    className={`mb-1 hidden rounded-full px-2.5 py-0.5 text-xs font-medium sm:inline-block ${
                      policy.isNeutral
                        ? "border border-slate-200 bg-slate-100 text-slate-600"
                        : "bg-[#EBF5FB] text-[#173F56]"
                    }`}
                  >
                    {policy.badge}
                  </span>
                  <p className="mt-0.5 text-sm font-light leading-relaxed text-slate-600">
                    {policy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 flex items-start justify-center gap-2 rounded-xl border border-[#D9EAF3] bg-[#EBF5FB]/60 p-4 text-center text-xs font-light text-slate-600 sm:items-center">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6b8f] sm:mt-0" />
            <span className="text-left sm:text-center">
              Please review your exact arrival date details and cancellation terms directly on Booking.com before confirming your reservation.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

