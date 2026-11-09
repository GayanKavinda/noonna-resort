import React from "react";
import { STAY_DATA } from "@/data/stayData";

interface StayPoliciesProps {
  className?: string;
}

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
          {STAY_DATA.policies.map((policy) => (
            <div
              key={policy.id}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#EBF5FB]/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center shrink-0">
                  {policy.id === "checkin" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
                      />
                    </svg>
                  )}
                  {policy.id === "checkout" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                  )}
                  {policy.id === "children" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.5 21v-2a6.5 6.5 0 0113 0v2"
                      />
                    </svg>
                  )}
                  {policy.id === "beds" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9"
                      />
                    </svg>
                  )}
                  {policy.id === "pets" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="4" r="2" />
                      <circle cx="18" cy="8" r="2" />
                      <circle cx="20" cy="16" r="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 10a5 5 0 015 5v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a5 5 0 015-5z"
                      />
                    </svg>
                  )}
                  {policy.id === "events" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                      />
                    </svg>
                  )}
                  {policy.id === "booking" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12 2 2 4-4"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-heading text-lg text-[#173F56] font-normal">
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
          ))}
        </div>

        {/* Verification Note Footnote */}
        <div className="mt-6 p-4 rounded-xl bg-[#EBF5FB]/60 border border-[#D9EAF3] text-center text-xs text-slate-600 font-light flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4 text-[#397FA8] shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span>
            Please review your exact arrival date details and cancellation terms directly on Booking.com before confirming your reservation.
          </span>
        </div>
      </div>
    </section>
  );
};

