import React from "react";
import Link from "next/link";
import { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2 shadow-xs",
    lg: "text-base px-7 py-3 rounded-xl gap-2.5 shadow-sm",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#397FA8] text-white hover:bg-[#2E698D] hover:shadow-md focus:ring-[#397FA8]",
    secondary:
      "bg-[#F1F9FD] text-[#173F56] border border-[#D9EAF3] hover:bg-[#E2F0F9] focus:ring-[#397FA8]",
    outline:
      "bg-transparent text-[#397FA8] border border-[#397FA8] hover:bg-[#F1F9FD] focus:ring-[#397FA8]",
    ghost:
      "bg-transparent text-[#475569] hover:text-[#173F56] hover:bg-[#F1F9FD] focus:ring-[#397FA8]",
    link: "bg-transparent text-[#397FA8] hover:text-[#2E698D] underline underline-offset-4 p-0 shadow-none",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

