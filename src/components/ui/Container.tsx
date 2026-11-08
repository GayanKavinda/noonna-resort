import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "w-full",
  }[size];

  return (
    <div
      className={`mx-auto w-full px-6 lg:px-8 ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

