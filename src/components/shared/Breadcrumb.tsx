import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500 font-light ${className}`.trim()}
    >
      <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
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
                  className="hover:text-[#397FA8] transition-colors text-slate-600 no-underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
