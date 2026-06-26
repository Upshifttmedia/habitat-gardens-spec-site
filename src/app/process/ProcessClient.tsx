"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import ProcessStep from "@/components/ProcessStep";

const steps = [
  {
    number: "01",
    title: "Site Visit & Consultation",
    description:
      "We walk the property together — sun exposure, soil, existing plants, water access, and what you want your garden to do for you.",
  },
  {
    number: "02",
    title: "Design Package",
    description:
      "A complete planting and layout plan built around keystone species suited to your specific site conditions.",
  },
  {
    number: "03",
    title: "Plant Selection",
    description:
      "We choose species that work double duty — beautiful, productive, and genuinely supportive of pollinators and soil life.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Full landscape installation, irrigation setup, and the hands-on work of getting everything in the ground correctly.",
  },
  {
    number: "05",
    title: "Ongoing Care",
    description:
      "Maintenance services and irrigation support to keep your garden thriving for years, not just its first season.",
  },
];

export default function ProcessClient() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="font-worksans font-bold uppercase tracking-[0.15em] text-amber text-xs"
            >
              Process
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-fraunces font-light text-wheat text-5xl md:text-7xl"
            >
              How We Work
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Intro + steps */}
      <section className="bg-wheat py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-worksans font-light text-forest/70 text-xl text-center leading-relaxed mb-20"
          >
            Every Habitat Gardens project starts with the same question: what does this land
            already want to grow? The process builds outward from there.
          </motion.p>

          <div>
            {steps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-24 px-6 text-center">
        <div ref={ctaRef} className="max-w-xl mx-auto space-y-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="font-worksans font-light text-wheat-dim text-lg"
          >
            Design packages, installation, and maintenance services available.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="/contact"
              className="inline-block font-worksans font-bold uppercase tracking-[0.12em] text-sm bg-amber text-forest px-10 py-4 hover:bg-terracotta hover:text-wheat transition-all duration-300"
            >
              Start Your Garden →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
