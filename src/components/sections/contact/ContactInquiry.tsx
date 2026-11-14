"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Send,
  Clock3,
  Headset,
  MessageCircle,
  Camera,
  ArrowUpRight,
  ChevronDown,
  Check,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

const SUBJECT_OPTIONS = [
  "Entire Resort Reservation",
  "Group or Family Private Resort Stay",
  "Airport Transfer & Arrival",
  "Experiences & Surf Advice",
  "Other Inquiry",
] as const;

const CONTACT_METHOD_OPTIONS = [
  "Email Response",
  "WhatsApp Message",
  "Telephone Call",
] as const;

const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Full name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  subject: z.enum(SUBJECT_OPTIONS, {
    message: "Please select a subject",
  }),
  preferredContact: z.enum(CONTACT_METHOD_OPTIONS, {
    message: "Please select a preferred contact method",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please enter a message (at least 10 characters)")
    .max(2000, "Message must be 2000 characters or fewer"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

interface CompactSelectProps<T extends string> {
  id: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
  hasError?: boolean;
  ariaDescribedBy?: string;
}

function CompactSelect<T extends string>({
  id,
  value,
  options,
  onChange,
  hasError,
  ariaDescribedBy,
}: CompactSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={hasError ? "true" : "false"}
        aria-describedby={ariaDescribedBy}
        onClick={() => setOpen((prev) => !prev)}
        style={{ fontSize: "12px", lineHeight: "16px" }}
        className={`w-full min-h-10 flex items-center justify-between gap-2 bg-[#F1F9FD] border rounded-xl px-3.5 py-2.5 text-left font-medium text-[#173F56] focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
          hasError
            ? "border-[#ba1a1a] focus:ring-[#ba1a1a]"
            : "border-[#D9EAF3] focus:ring-[#2f6b8f]"
        }`}
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#2f6b8f] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-30 mt-1.5 w-full bg-white border border-[#D9EAF3] rounded-xl shadow-[0_10px_28px_-6px_rgba(23,63,86,0.14)] py-1 max-h-56 overflow-auto"
        >
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                style={{ fontSize: "12px", lineHeight: "16px" }}
                className={`flex items-center justify-between gap-2 px-3.5 py-2.5 sm:py-2 cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[#F1F9FD] text-[#2f6b8f] font-semibold"
                    : "text-[#173F56] hover:bg-slate-50 font-normal"
                }`}
              >
                <span className="truncate">{opt}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function ContactInquiry() {
  const [submitNotice, setSubmitNotice] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      subject: SUBJECT_OPTIONS[0],
      preferredContact: CONTACT_METHOD_OPTIONS[0],
      message: "",
    },
  });

  const onSubmit = async () => {
    setSubmitNotice(
      "Online message delivery is not configured yet. Please book via Booking.com or use a verified contact channel when available."
    );
  };

  const instagramHandle = HOTEL_INFO.socials.instagram.replace(
    "https://instagram.com/",
    "@"
  );

  return (
    <section
      className="w-full bg-surface-container-lowest py-12 sm:py-16 lg:py-24 border-t border-[#D9EAF3]"
      id="inquiry-form"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12">
        {/* Centered Header with Mail Ornament */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#2f6b8f] block leading-tight">
            reach our sanctuary desk...
          </span>

          <h2 className="font-headline-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#173F56] font-normal tracking-tight text-balance">
            Send an Inquiry or Connect Directly
          </h2>

          <div
            className="flex items-center justify-center gap-3.5 py-1 sm:py-2"
            aria-hidden="true"
          >
            <span className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#397FA8]/40" />
            <div className="w-8 h-8 rounded-full bg-[#F1F9FD] border border-[#D9EAF3] flex items-center justify-center text-[#2f6b8f]">
              <Mail className="w-4 h-4" />
            </div>
            <span className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#397FA8]/40" />
          </div>

          <p className="font-body-md text-[#475569] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Whether requesting special arrival arrangements, an entire resort
            rental for a private resort stay with your group or family, or surf
            condition advice, our hosting team is at your gentle disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
          {/* Left: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] p-5 sm:p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4 mb-5 gap-3">
              <div className="min-w-0">
                <h3 className="font-headline-sm text-lg sm:text-xl text-[#173F56] font-medium">
                  Guest Inquiry Form
                </h3>
                <p className="font-body-sm text-xs text-[#475569] font-light mt-0.5 leading-snug">
                  Direct communication received immediately by on-site
                  management
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#2f6b8f]/10 text-[#2f6b8f] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-label-md text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1.5"
                  >
                    Full Name <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Eleanor Vance"
                    style={{ fontSize: "12px", lineHeight: "16px" }}
                    className={`w-full bg-[#F1F9FD] border rounded-xl px-3.5 py-2.5 min-h-10 text-[#173F56] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                      errors.fullName
                        ? "border-[#ba1a1a] focus:ring-[#ba1a1a]"
                        : "border-[#D9EAF3] focus:ring-[#2f6b8f]"
                    }`}
                    aria-invalid={errors.fullName ? "true" : "false"}
                    aria-describedby={
                      errors.fullName ? "fullName-error" : undefined
                    }
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1 text-[11px] text-[#ba1a1a] font-body-sm leading-snug"
                    >
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-label-md text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1.5"
                  >
                    Email Address <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="eleanor@example.com"
                    style={{ fontSize: "12px", lineHeight: "16px" }}
                    className={`w-full bg-[#F1F9FD] border rounded-xl px-3.5 py-2.5 min-h-10 text-[#173F56] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                      errors.email
                        ? "border-[#ba1a1a] focus:ring-[#ba1a1a]"
                        : "border-[#D9EAF3] focus:ring-[#2f6b8f]"
                    }`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-[11px] text-[#ba1a1a] font-body-sm leading-snug"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-label-md text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1.5"
                  >
                    Subject / Interest <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <CompactSelect
                        id="subject"
                        value={field.value}
                        options={SUBJECT_OPTIONS}
                        onChange={field.onChange}
                        hasError={Boolean(errors.subject)}
                        ariaDescribedBy={
                          errors.subject ? "subject-error" : undefined
                        }
                      />
                    )}
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="mt-1 text-[11px] text-[#ba1a1a] font-body-sm leading-snug"
                    >
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block font-label-md text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1.5"
                  >
                    Preferred Contact Method{" "}
                    <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <Controller
                    name="preferredContact"
                    control={control}
                    render={({ field }) => (
                      <CompactSelect
                        id="preferredContact"
                        value={field.value}
                        options={CONTACT_METHOD_OPTIONS}
                        onChange={field.onChange}
                        hasError={Boolean(errors.preferredContact)}
                        ariaDescribedBy={
                          errors.preferredContact
                            ? "preferredContact-error"
                            : undefined
                        }
                      />
                    )}
                  />
                  {errors.preferredContact && (
                    <p
                      id="preferredContact-error"
                      className="mt-1 text-[11px] text-[#ba1a1a] font-body-sm leading-snug"
                    >
                      {errors.preferredContact.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-label-md text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1.5"
                >
                  Your Message <span className="text-[#ba1a1a]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Please let us know your planned arrival dates, number of guests, or any questions regarding your stay..."
                  style={{ fontSize: "12px", lineHeight: "18px" }}
                  className={`w-full bg-[#F1F9FD] border rounded-xl px-3.5 py-2.5 text-[#173F56] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.message
                      ? "border-[#ba1a1a] focus:ring-[#ba1a1a]"
                      : "border-[#D9EAF3] focus:ring-[#2f6b8f]"
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message")}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-[11px] text-[#ba1a1a] font-body-sm leading-snug"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitNotice && (
                <div
                  role="status"
                  style={{ fontSize: "11.5px", lineHeight: "16px" }}
                  className="rounded-xl border border-[#D9EAF3] bg-[#F1F9FD] px-3.5 py-2.5 font-body-sm text-[#173F56]"
                >
                  {submitNotice}
                </div>
              )}

              <div className="pt-1 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ fontSize: "11.5px", lineHeight: "16px" }}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 bg-[#173F56] hover:bg-[#2f6b8f] text-white px-4 sm:px-3.5 py-2.5 sm:py-1.5 rounded-lg font-medium tracking-wide shadow-sm transition-colors disabled:opacity-70"
                >
                  <span>Send Message</span>
                  <Send className="w-3 h-3" aria-hidden="true" />
                </button>
                <p className="text-[11px] text-[#475569] font-light flex items-center gap-1.5 leading-snug">
                  <Clock3
                    className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0"
                    aria-hidden="true"
                  />
                  <span>Typically answered within 2–4 hours</span>
                </p>
              </div>
            </form>
          </div>

          {/* Right: Compact Concierge Channels & Hours */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3.5">
                <Headset
                  className="w-4 h-4 text-[#2f6b8f] shrink-0"
                  aria-hidden="true"
                />
                <h4 className="font-headline-sm text-lg text-[#173F56] font-medium">
                  Concierge Channels
                </h4>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-[#F1F9FD]/80 border border-[#D9EAF3]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#2f6b8f] shrink-0">
                      <MessageCircle
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="truncate">
                      <p
                        style={{ fontSize: "9.5px", lineHeight: "13px" }}
                        className="font-label-sm uppercase tracking-wider text-[#475569] font-semibold"
                      >
                        WhatsApp Concierge
                      </p>
                      <p
                        style={{ fontSize: "12px", lineHeight: "16px" }}
                        className="font-body-sm font-medium text-[#173F56] truncate"
                      >
                        Pending confirmation
                      </p>
                    </div>
                  </div>
                  <span
                    style={{ fontSize: "10px" }}
                    className="text-[#475569] font-body-sm shrink-0"
                  >
                    Unavailable
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-[#F1F9FD]/80 border border-[#D9EAF3]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#2f6b8f] shrink-0">
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="truncate">
                      <p
                        style={{ fontSize: "9.5px", lineHeight: "13px" }}
                        className="font-label-sm uppercase tracking-wider text-[#475569] font-semibold"
                      >
                        Email Desk
                      </p>
                      <p
                        style={{ fontSize: "12px", lineHeight: "16px" }}
                        className="font-body-sm font-medium text-[#173F56] truncate"
                      >
                        Pending confirmation
                      </p>
                    </div>
                  </div>
                  <span
                    style={{ fontSize: "10px" }}
                    className="text-[#475569] font-body-sm shrink-0"
                  >
                    Unavailable
                  </span>
                </div>

                <a
                  className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-[#F1F9FD]/80 hover:bg-[#D9EAF3]/60 border border-[#D9EAF3] transition-all group"
                  href={HOTEL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-white border border-[#D9EAF3] flex items-center justify-center text-[#2f6b8f] group-hover:bg-[#2f6b8f] group-hover:text-white transition-colors shrink-0">
                      <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div className="truncate">
                      <p
                        style={{ fontSize: "9.5px", lineHeight: "13px" }}
                        className="font-label-sm uppercase tracking-wider text-[#475569] font-semibold"
                      >
                        Visual Journal
                      </p>
                      <p
                        style={{ fontSize: "12px", lineHeight: "16px" }}
                        className="font-body-sm font-medium text-[#173F56] truncate"
                      >
                        {instagramHandle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-[#475569] group-hover:text-[#2f6b8f] transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-[#2f6b8f]/10 border border-[#2f6b8f]/20 text-[#173F56] space-y-2">
              <div className="flex items-center justify-between gap-3">
                <span
                  style={{ fontSize: "10px" }}
                  className="font-label-sm uppercase tracking-wider text-[#2f6b8f] font-bold"
                >
                  Desk Operating Hours
                </span>
                <span
                  style={{ fontSize: "10.5px" }}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white text-[#2f6b8f] font-medium shadow-sm border border-[#D9EAF3] shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Active
                </span>
              </div>
              <p className="font-headline-sm text-lg font-medium">
                08:00 — 20:00 Daily
              </p>
              <p
                style={{ fontSize: "11.5px", lineHeight: "17px" }}
                className="font-body-sm text-[#475569] font-light leading-relaxed"
              >
                Sri Lanka Time (IST, GMT+5:30). Night arrivals and early
                check-ins are supported seamlessly through advance host
                coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}