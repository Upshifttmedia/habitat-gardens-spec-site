"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/animations";
import { ABOUT_BRETT } from "@/lib/images";
import SectionLabel from "@/components/SectionLabel";
import CredentialBadge from "@/components/CredentialBadge";

const credentials = [
  "Est. 2004",
  "Certified Permaculture Design Consultant",
  "Certified Western Herbalist",
  "Green Gardener Lead Instructor",
];

export default function AboutClient() {
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, margin: "-80px" });
  const credRef = useRef(null);
  const credInView = useInView(credRef, { once: true, margin: "-80px" });
  const philRef = useRef(null);
  const philInView = useInView(philRef, { once: true, margin: "-80px" });

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
              About
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-fraunces font-light text-wheat text-5xl md:text-7xl max-w-2xl"
            >
              Thirty Years in the Soil.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Bio section */}
      <section className="bg-wheat py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={bioRef}
            variants={staggerContainer}
            initial="hidden"
            animate={bioInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row gap-12 md:gap-20 items-start"
          >
            <motion.div
              variants={fadeUp}
              className="w-full md:w-[45%] relative aspect-[3/4] rounded-[6px] overflow-hidden"
            >
              {/* PLACEHOLDER — Replace with: real portrait of Brett Graf in a garden setting */}
              <Image
                src={ABOUT_BRETT}
                alt="Brett Graf, ecological landscape designer"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div variants={fadeUp} className="w-full md:w-[55%] space-y-6">
              <SectionLabel text="About Brett" color="text-terracotta" />
              <div className="font-worksans font-light text-forest/80 text-lg leading-[1.8] space-y-6">
                <p>
                  Brett Graf has been working and educating in horticulture and ecology since 1993.
                  He&apos;s a Certified Permaculture Design Consultant, Certified Western Herbalist,
                  and Certified Landscape Horticulturist, with hands-on experience in landscape
                  design, installation, habitat restoration, and integrated pest management.
                </p>
                <p>
                  Brett is the lead instructor for the Green Gardener Certification Program in
                  Santa Cruz County, founder and coordinator of the EcoGarden in Santa Cruz, and a
                  former four-year coordinator of the Monterey Bay Working Group of the California
                  Chapter of the Ecological Landscaping Association. He&apos;s also a member of the
                  Santa Cruz Permaculture Guild and the Surfrider Foundation.
                </p>
                <p>
                  Habitat Gardens has been designing ecological landscapes in Santa Cruz since 2004
                  — gardens that are abundant, drought-tolerant, and built around keystone native
                  plants that support pollinators, birds, and healthy soil. The idea is simple: a
                  garden should feed everything it touches, not just the people who live there.
                </p>
                <p>
                  When you work with Brett, you work with someone who has spent three decades
                  learning what actually thrives in this specific corner of California — and
                  who&apos;s still out there teaching others to do the same.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-forest py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={credRef}
            variants={staggerContainer}
            initial="hidden"
            animate={credInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {credentials.map((cred) => (
              <motion.div
                key={cred}
                variants={fadeUp}
                className="border-t border-amber/30 pt-6 space-y-2"
              >
                <CredentialBadge text={cred} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-wheat py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.p
            ref={philRef}
            variants={fadeIn}
            initial="hidden"
            animate={philInView ? "visible" : "hidden"}
            className="font-fraunces italic text-forest text-2xl md:text-4xl leading-relaxed"
          >
            &ldquo;A keystone garden is not simply native.
            <br />
            It is a functioning ecosystem.&rdquo;
          </motion.p>
        </div>
      </section>
    </>
  );
}
