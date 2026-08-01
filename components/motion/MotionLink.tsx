"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionLinkProps = HTMLMotionProps<"a"> & {
  lift?: boolean;
};

/** Drop-in replacement for <a> with a subtle hover-lift + tap-press. Use for buttons/CTAs. */
export function MotionLink({ children, lift = true, ...props }: MotionLinkProps) {
  return (
    <motion.a
      {...props}
      whileHover={lift ? { y: -2 } : { scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.a>
  );
}
