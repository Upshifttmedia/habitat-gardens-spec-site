"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Project } from "@/types";
import { getNextProject } from "@/lib/projects";
import { TEXTURE_LEAVES } from "@/lib/images";
import SectionLabel from "@/components/SectionLabel";

export default function ProjectPageClient({ project }: { project: Project }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const nextProject = getNextProject(project.slug);

  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });

  const plantsRef = useRef(null);
  const plantsInView = useInView(plantsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* PLACEHOLDER — Replace with: actual project photography */}
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-forest/20" />

        <div className="absolute bottom-0 inset-x-0 p-8 md:p-16 max-w-7xl mx-auto">
          <p className="font-worksans font-bold uppercase tracking-[0.15em] text-amber text-xs mb-3">
            {project.location}
            {project.year && <span className="ml-4">{project.year}</span>}
          </p>
          <h1 className="font-fraunces font-light text-wheat text-5xl md:text-7xl">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-wheat py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={contentRef}
            variants={staggerContainer}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row gap-16"
          >
            {/* Sidebar */}
            <motion.div variants={fadeUp} className="w-full md:w-[35%] space-y-8">
              {project.challenge && (
                <div className="space-y-2 pb-8 border-b border-amber/20">
                  <p className="font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-xs">
                    Challenge
                  </p>
                  <p className="font-worksans font-light text-forest/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.approach && (
                <div className="space-y-2 pb-8 border-b border-amber/20">
                  <p className="font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-xs">
                    Approach
                  </p>
                  <p className="font-worksans font-light text-forest/70 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}
              <div className="space-y-1">
                <p className="font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-xs">
                  Location
                </p>
                <p className="font-worksans font-light text-forest/70">{project.location}</p>
              </div>
              {project.year && (
                <div className="space-y-1">
                  <p className="font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-xs">
                    Year
                  </p>
                  <p className="font-worksans font-light text-forest/70">{project.year}</p>
                </div>
              )}
            </motion.div>

            {/* Narrative */}
            <motion.div variants={fadeUp} className="w-full md:w-[65%]">
              {project.narrative && (
                <div className="font-worksans font-light text-forest/80 text-lg leading-[1.8] space-y-6">
                  {project.narrative.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Texture break */}
      <div className="relative h-64 overflow-hidden">
        {/* PLACEHOLDER — Replace with: close-up of lush layered foliage, dappled light */}
        <Image
          src={TEXTURE_LEAVES}
          alt="Garden foliage texture"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/50" />
      </div>

      {/* Keystone Plants */}
      {project.keystonePlants && (
        <section className="bg-wheat py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionLabel text="Keystone Plants" color="text-terracotta" className="mb-10" />
            <motion.div
              ref={plantsRef}
              variants={staggerContainer}
              initial="hidden"
              animate={plantsInView ? "visible" : "hidden"}
              className="space-y-0"
            >
              {project.keystonePlants.map((plant) => (
                <motion.div
                  key={plant.name}
                  variants={fadeUp}
                  className="flex flex-col md:flex-row gap-2 md:gap-8 py-6 border-b border-amber/20 last:border-0"
                >
                  <p className="font-fraunces italic text-forest text-xl w-full md:w-[40%]">
                    {plant.name}
                  </p>
                  <p className="font-worksans font-light text-forest/70 w-full md:w-[60%]">
                    {plant.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Next garden */}
      {nextProject && (
        <section className="bg-forest py-16 px-6 text-center">
          <p className="font-worksans font-bold uppercase tracking-[0.15em] text-amber/70 text-xs mb-4">
            Next Garden
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="font-fraunces text-3xl md:text-5xl text-wheat hover:text-amber transition-colors duration-300"
          >
            {nextProject.name} →
          </Link>
        </section>
      )}
    </>
  );
}
