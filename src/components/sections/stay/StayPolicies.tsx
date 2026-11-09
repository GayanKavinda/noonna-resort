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
      className={`w-full bg-white py-16 md:py-24 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
            seamless stay...
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[40px] leading-tight text-[#173F56] font-normal mb-3 tracking-tight">
            Good to Know
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 font-light leading-relaxed">
            Simple guidelines to ensure a restful, harmonious stay for every traveler on the southern shore.
          </p>
        </div>

        {/* Policies List Container */}
        <div className="bg-white rounded-2xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] overflow-hidden divide-y divide-[#D9EAF3]/60">
          {STAY_DATA.policies.map((policy) => {
            const IconComponent = POLICY_ICONS[policy.id] ?? Info;
            return (
              <div
                key={policy.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#EBF5FB]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-[#173F56] font-medium">
                      {policy.title}
                    </h4>
                    <span
                      className={`inline-block sm:hidden mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        policy.isNeutral
                          ? "bg-slate-100 text-slate-600 border border-slate-200"
                          : "bg-[#EBF5FB] text-[#173F56]"
                      }`}
                    >
                      {policy.badge}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right sm:max-w-md">
                  <span
                    className={`hidden sm:inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-1 ${
                      policy.isNeutral
                        ? "bg-slate-100 text-slate-600 border border-slate-200"
                        : "bg-[#EBF5FB] text-[#173F56]"
                    }`}
                  >
                    {policy.badge}
                  </span>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mt-0.5">
                    {policy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note Footnote */}
        <div className="mt-6 p-4 rounded-xl bg-[#EBF5FB]/60 border border-[#D9EAF3] text-center text-xs text-slate-600 font-light flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#397FA8] shrink-0" />
          <span>
            Please review your exact arrival date details and cancellation terms directly on Booking.com before confirming your reservation.
          </span>
        </div>
      </div>
    </section>
  );
};

