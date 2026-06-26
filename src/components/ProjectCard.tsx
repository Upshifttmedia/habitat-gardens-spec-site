"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-[6px] aspect-[4/3]">
          {/* PLACEHOLDER — Replace with: actual project photography */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-worksans font-bold uppercase tracking-[0.12em] text-amber text-xs mb-1">
              {project.location}
            </p>
            <h3 className="font-fraunces text-2xl text-wheat">{project.name}</h3>
            <span className="inline-block mt-3 font-worksans text-wheat/0 group-hover:text-wheat text-sm transition-colors duration-300">
              View Garden →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
