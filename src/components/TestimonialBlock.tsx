"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import { Testimonial } from "@/types";

export default function TestimonialBlock({ quote, author, location }: Testimonial) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative"
    >
      <span className="absolute -top-4 -left-2 font-fraunces text-8xl text-amber opacity-20 leading-none select-none">
        &ldquo;
      </span>
      <p className="font-fraunces text-2xl md:text-[26px] text-forest leading-relaxed pt-8">
        {quote}
      </p>
      <p className="mt-6 font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-sm">
        — {author}, {location}
      </p>
    </motion.div>
  );
}
