"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  HERO_MAIN,
  HERO_ALT,
  PORTFOLIO_FOODFOREST,
  PORTFOLIO_POLLINATOR,
  PORTFOLIO_HABITAT,
  ABOUT_BRETT,
} from "@/lib/images";
import {
  fadeUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  wordVariant,
} from "@/lib/animations";
import TestimonialBlock from "@/components/TestimonialBlock";
import SectionLabel from "@/components/SectionLabel";

const HEADLINE = "A Garden That Feeds Everything.";

const featuredProjects = [
  {
    slug: "food-forest",
    name: "The Food Forest",
    location: "Santa Cruz, CA",
    description:
      "A layered, edible landscape designed around fruit trees, berry shrubs, and perennial herbs — built to mimic a forest ecosystem while producing food nearly year-round.",
    image: PORTFOLIO_FOODFOREST,
    imageAlt: "Layered food forest with fruit trees and perennial plantings",
  },
  {
    slug: "pollinator-garden",
    name: "The Pollinator Garden",
    location: "Soquel, CA",
    description:
      "A keystone native planting designed to support bees, butterflies, and hummingbirds from early spring through late fall — proof that habitat and beauty can be the same thing.",
    image: PORTFOLIO_POLLINATOR,
    imageAlt: "Native pollinator garden in full bloom",
  },
  {
    slug: "habitat-restoration",
    name: "Habitat Restoration",
    location: "Aptos, CA",
    description:
      "A degraded hillside returned to native habitat — invasive removal, erosion control, and a keystone plant palette that now supports birds, pollinators, and healthy soil life.",
    image: PORTFOLIO_HABITAT,
    imageAlt: "Restored native hillside habitat with established keystone plants",
  },
];

const testimonials = [
  {
    quote:
      "Brett and team installed a drip system and mulched my large landscape that was reasonable in cost and completely fulfilling in beauty and function.",
    author: "Bill Patterson",
    location: "Santa Cruz",
  },
  {
    quote:
      "I live in the woods, and the side of my house had been inaccessible for years — uneven, steep, overgrown. Brett saw what it could become before I ever could.",
    author: "Local Client",
    location: "Santa Cruz Mountains",
  },
];

const philosophyColumns = [
  {
    title: "KEYSTONE PLANTS",
    body: "Every design centers on species that support the most pollinators, birds, and soil life — not just natives, but ecological anchors.",
  },
  {
    title: "EDIBLE ABUNDANCE",
    body: "Gardens that produce food and beauty at once — drought-tolerant, low-maintenance, and genuinely productive.",
  },
  {
    title: "THREE DECADES OF PRACTICE",
    body: "Hands-on horticultural and ecological experience since 1993 — not theory, lived knowledge of what actually thrives here.",
  },
];

const credentials = [
  "EST. 2004",
  "CERTIFIED PERMACULTURE DESIGN CONSULTANT",
  "CERTIFIED WESTERN HERBALIST",
  "GREEN GARDENER LEAD INSTRUCTOR",
];

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const words = HEADLINE.split(" ");

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* PLACEHOLDER — Replace with: aerial view of lush ecological garden in golden-hour light */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={HERO_MAIN}
          alt="Habitat Gardens ecological landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/30 to-forest/70" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="font-worksans font-bold uppercase tracking-[0.15em] text-amber text-xs mb-6"
        >
          Santa Cruz, CA · Ecological Landscape Design Since 2004
        </motion.p>

        <h1 className="font-fraunces font-light text-wheat text-[clamp(2.8rem,8vw,5.5rem)] leading-tight max-w-3xl mb-6">
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-4"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariant}>
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: words.length * 0.08 + 0.3 }}
          className="font-worksans font-light text-wheat-dim text-lg max-w-xl mb-10 leading-relaxed"
        >
          Ecological landscape design rooted in keystone plants, edible abundance, and three
          decades of hands-on practice.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: words.length * 0.08 + 0.5 }}
        >
          <Link
            href="/work"
            className="inline-block font-worksans font-bold uppercase tracking-[0.12em] text-sm text-wheat border border-wheat px-8 py-4 hover:bg-amber hover:border-amber hover:text-forest transition-all duration-300"
          >
            See the Gardens →
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-12 bg-wheat/60 origin-top"
        />
      </motion.div>
    </section>
  );
}

function CredentialsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-forest border-y border-amber/40 py-6">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-center"
      >
        {credentials.map((cred, i) => (
          <div key={cred} className="flex flex-col md:flex-row items-center">
            <motion.span
              variants={fadeIn}
              className="font-worksans font-bold uppercase tracking-[0.12em] text-wheat-dim text-xs py-3 md:py-0 md:px-8 text-center"
            >
              {cred}
            </motion.span>
            {i < credentials.length - 1 && (
              <>
                <div className="hidden md:block w-px h-6 bg-amber/30" />
                <div className="md:hidden w-full h-px bg-amber/30" />
              </>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function PositioningStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-wheat py-16 px-6 text-center">
      <motion.p
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-fraunces italic text-forest text-2xl md:text-3xl max-w-3xl mx-auto"
      >
        &ldquo;A keystone garden is not simply native. It is a functioning ecosystem.&rdquo;
      </motion.p>
    </section>
  );
}

function FeaturedWorkItem({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const imgRef = useRef(null);
  const txtRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-80px" });
  const txtInView = useInView(txtRef, { once: true, margin: "-80px" });

  return (
    <div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
    >
      <motion.div
        ref={imgRef}
        variants={isEven ? slideInLeft : slideInRight}
        initial="hidden"
        animate={imgInView ? "visible" : "hidden"}
        className="w-full md:w-[60%] relative aspect-[3/2] rounded-[6px] overflow-hidden"
      >
        {/* PLACEHOLDER — Replace with: actual project photography */}
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        ref={txtRef}
        variants={fadeUp}
        initial="hidden"
        animate={txtInView ? "visible" : "hidden"}
        className="w-full md:w-[40%] space-y-4"
      >
        <p className="font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-xs">
          {project.location}
        </p>
        <h2 className="font-fraunces text-4xl md:text-[44px] text-forest leading-tight">
          {project.name}
        </h2>
        <p className="font-worksans font-light text-forest/70 text-base leading-relaxed">
          {project.description}
        </p>
        <Link
          href={`/work/${project.slug}`}
          className="inline-block font-worksans text-fern text-sm hover:underline mt-2"
        >
          View Garden →
        </Link>
      </motion.div>
    </div>
  );
}

function FeaturedWork() {
  return (
    <section className="py-24 px-6 bg-wheat">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Selected Gardens" color="text-terracotta" className="mb-16" />
        <div className="space-y-28">
          {featuredProjects.map((project, i) => (
            <FeaturedWorkItem key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] bg-wheat px-8 md:px-16 py-20 flex flex-col justify-center">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-5 max-w-md"
        >
          <SectionLabel text="About Brett" color="text-terracotta" />
          <motion.h2
            variants={fadeUp}
            className="font-fraunces text-3xl md:text-4xl text-forest leading-tight"
          >
            Ecological designer. Teacher. Thirty years in the soil.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-worksans font-light text-forest/70 leading-relaxed"
          >
            Brett Graf has been working and teaching in horticulture and ecology since 1993.
            He&apos;s a Certified Permaculture Design Consultant, Certified Western Herbalist, and
            Certified Landscape Horticulturist — and the lead instructor for the Green Gardener
            Certification Program in Santa Cruz County. Habitat Gardens has been designing
            ecological landscapes since 2004, built around one idea: a garden should feed people
            and feed the land at the same time.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/about" className="font-worksans text-terracotta text-sm hover:underline">
              Read Brett&apos;s Full Story →
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full md:w-[60%] relative min-h-[400px] md:min-h-[560px]">
        {/* PLACEHOLDER — Replace with: real portrait of Brett Graf in a garden setting */}
        <Image
          src={ABOUT_BRETT}
          alt="Brett Graf, ecological landscape designer"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-forest py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="How We Design" color="text-amber" className="mb-16" />
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row"
        >
          {philosophyColumns.map((col, i) => (
            <div key={col.title} className="flex flex-col md:flex-row w-full md:w-1/3">
              <motion.div
                variants={fadeUp}
                className="flex-1 px-0 md:px-10 py-8 md:py-0 space-y-4"
              >
                <h3 className="font-worksans font-bold uppercase tracking-[0.12em] text-wheat text-sm">
                  {col.title}
                </h3>
                <p className="font-worksans font-light text-wheat-dim/80 leading-relaxed">
                  {col.body}
                </p>
              </motion.div>
              {i < philosophyColumns.length - 1 && (
                <>
                  <div className="hidden md:block w-px bg-amber/30 self-stretch" />
                  <div className="md:hidden w-full h-px bg-amber/30 my-4" />
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-wheat py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="From the Garden" color="text-terracotta" className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {testimonials.map((t) => (
            <TestimonialBlock key={t.author} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EcologicalApproach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-forest py-24 px-6 text-center">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-fraunces text-4xl md:text-5xl text-wheat mb-6"
        >
          This isn&apos;t just landscaping.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="font-worksans font-light text-wheat-dim/80 text-lg leading-relaxed mb-10"
        >
          Habitat Gardens designs living ecosystems — abundant, edible, and built around the
          keystone species that support pollinators, birds, and soil health. Three decades of
          ecological practice, community teaching, and hands-on horticultural expertise inform
          every garden we build.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.35 }}
          className="font-worksans font-bold uppercase tracking-[0.2em] text-amber text-xs"
        >
          Santa Cruz · Soquel · Aptos · Capitola · Monterey Bay
        </motion.p>
      </div>
    </section>
  );
}

function CTASection() {
  const heroAltRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroAltRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={heroAltRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* PLACEHOLDER — Replace with: evening garden scene with warm ambient light */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={HERO_ALT}
          alt="Habitat garden at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest/50 to-forest/80" />

      <div ref={ref} className="relative z-10 text-center px-6 max-w-2xl mx-auto w-full">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-fraunces text-4xl md:text-5xl text-wheat mb-4"
        >
          Ready to Plant Something That Lasts?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.15 }}
          className="font-worksans font-light text-wheat-dim text-lg mb-8"
        >
          Habitat Gardens is currently accepting new design and consultation projects.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block font-worksans font-bold uppercase tracking-[0.12em] text-sm bg-amber text-forest px-10 py-4 hover:bg-terracotta hover:text-wheat transition-all duration-300"
          >
            Start Your Garden →
          </Link>
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="font-worksans font-light text-wheat-dim/60 text-sm mt-5"
        >
          Design packages, maintenance, and irrigation services available
        </motion.p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredentialsStrip />
      <PositioningStrip />
      <FeaturedWork />
      <AboutStrip />
      <PhilosophySection />
      <TestimonialsSection />
      <EcologicalApproach />
      <CTASection />
    </>
  );
}
