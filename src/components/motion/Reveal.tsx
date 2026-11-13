"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

export const easeOutSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: React.ReactNode;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
  duration?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 18,
  amount = 0.2,
  once = true,
  duration = 0.55,
  className,
  style,
  id,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style as React.CSSProperties | undefined} id={id}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: easeOutSoft }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
};

export function Stagger({
  children,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  amount = 0.15,
  once = true,
  className,
  style,
  id,
}: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style as React.CSSProperties | undefined} id={id}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: React.ReactNode;
  y?: number;
  duration?: number;
};

export function StaggerItem({
  children,
  y = 16,
  duration = 0.5,
  className,
  style,
  id,
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} style={style as React.CSSProperties | undefined} id={id}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      id={id}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration, ease: easeOutSoft } },
      }}
    >
      {children}
    </motion.div>
  );
}

export { motion, useReducedMotion };
