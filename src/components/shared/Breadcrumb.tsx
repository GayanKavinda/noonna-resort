import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500 font-light ${className}`.trim()}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isHomeRoot = index === 0 && item.label === "Home";
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span className="text-slate-300 select-none" aria-hidden="true">
                /
              </span>
            )}
            {isLast || !item.href ? (
              <span
                className="text-[#173F56] font-medium"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={
                  isHomeRoot
                    ? "hover:text-[#397FA8] transition-colors flex items-center gap-1.5 text-slate-600"
                    : "hover:text-[#397FA8] transition-colors text-slate-600"
                }
              >
                {isHomeRoot && <HomeIcon className="w-3.5 h-3.5 stroke-current" />}
                <span>{item.label}</span>
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
