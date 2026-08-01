"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type CounterProps = {
  value: string;
  className?: string;
};

/** Animates a numeric prefix in a string like "500+", "99.9%", "24/7" up from zero on scroll into view. */
export function Counter({ value, className }: CounterProps) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (!match) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  const [, numStr, suffix] = match;
  const target = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (display.current) {
        display.current.textContent = `${v.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, decimals, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      <span ref={display}>0{suffix}</span>
    </motion.span>
  );
}
