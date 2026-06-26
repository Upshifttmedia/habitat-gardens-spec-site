"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import { ProcessStepData } from "@/types";

export default function ProcessStep({ number, title, description }: ProcessStepData) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex gap-8 md:gap-12 py-10 border-b border-amber/20 last:border-0"
    >
      <div className="shrink-0">
        <span className="font-fraunces text-6xl md:text-7xl text-amber/30 leading-none">
          {number}
        </span>
      </div>
      <div className="pt-2">
        <h3 className="font-fraunces text-2xl md:text-3xl text-forest mb-3">{title}</h3>
        <p className="font-worksans font-light text-forest/70 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
