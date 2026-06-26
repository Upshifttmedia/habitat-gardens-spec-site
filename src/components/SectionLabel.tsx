"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

interface SectionLabelProps {
  text: string;
  color?: string;
  className?: string;
}

export default function SectionLabel({
  text,
  color = "text-terracotta",
  className = "",
}: SectionLabelProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.p
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`font-worksans font-bold uppercase tracking-[0.15em] text-xs ${color} ${className}`}
    >
      {text}
    </motion.p>
  );
}
