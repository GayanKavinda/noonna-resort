"use client";

import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};

export function ScrollToTop() {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 420 : false
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    const raf = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-[#D9EAF3] bg-white/95 text-[#397FA8] shadow-[0_8px_24px_-8px_rgba(23,63,86,0.18)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#397FA8] hover:bg-[#397FA8] hover:text-white hover:shadow-[0_12px_28px_-10px_rgba(57,127,168,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#397FA8]/40 focus-visible:ring-offset-2 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
    </button>,
    document.body
  );
}
