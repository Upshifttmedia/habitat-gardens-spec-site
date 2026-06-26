"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkPageClient() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-fraunces font-light text-wheat text-5xl md:text-7xl"
            >
              The Gardens
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-worksans font-light text-wheat-dim/80 text-lg max-w-xl"
            >
              Ecological landscapes across Santa Cruz County, built around abundance and habitat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-wheat py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
