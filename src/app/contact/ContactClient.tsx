"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/SectionLabel";

const inputClass =
  "w-full bg-transparent border border-amber text-forest font-worksans font-light px-4 py-3 rounded-[4px] placeholder:text-forest/40 focus:outline-none focus:border-terracotta transition-colors duration-200";

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Unable to send. Please try again.");
      setStatus("error");
    }
  };

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
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-fraunces font-light text-wheat text-5xl md:text-7xl"
            >
              Start Your Garden
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-worksans font-light text-wheat-dim/80 text-lg max-w-xl"
            >
              Habitat Gardens is currently accepting new design, installation, and consultation
              projects across Santa Cruz County.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-wheat py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Form */}
          <div className="w-full md:w-[55%]">
            {status === "success" ? (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-center py-20"
              >
                <p className="font-fraunces text-3xl text-forest">
                  Thank you. We&apos;ll be in touch within 1–2 business days.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-worksans font-bold uppercase tracking-[0.1em] text-xs text-terracotta mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-worksans font-bold uppercase tracking-[0.1em] text-xs text-terracotta mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-worksans font-bold uppercase tracking-[0.1em] text-xs text-terracotta mb-2">
                      Phone <span className="font-light normal-case tracking-normal opacity-60">(optional)</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(831) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-worksans font-bold uppercase tracking-[0.1em] text-xs text-terracotta mb-2">
                      Property Location
                    </label>
                    <input
                      name="location"
                      type="text"
                      required
                      value={form.location}
                      onChange={handleChange}
                      placeholder="Santa Cruz, Aptos..."
                      className={inputClass}
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block font-worksans font-bold uppercase tracking-[0.1em] text-xs text-terracotta mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    <option value="New Design">New Design</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Irrigation">Irrigation</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block font-worksans font-bold uppercase tracking-[0.1em] text-xs text-terracotta mb-2">
                    Tell us about your garden
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your property, goals, and what you're hoping to create..."
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                {status === "error" && (
                  <p className="font-worksans text-sm text-terracotta">{errorMsg}</p>
                )}

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-worksans font-bold uppercase tracking-[0.12em] text-sm bg-forest text-wheat px-10 py-4 hover:bg-forest-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {status === "sending" ? "Sending..." : "Send My Garden Details →"}
                  </button>
                </motion.div>
              </motion.form>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-[45%]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-10"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel text="Reach Us Directly" color="text-terracotta" className="mb-4" />
                <div className="space-y-2 font-worksans font-light text-forest/80 text-lg">
                  <p>(831) 359-7918</p>
                  <p>brett@habitat-gardens.com</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="border-t border-amber/20 pt-8">
                <p className="font-worksans font-bold uppercase tracking-[0.12em] text-terracotta text-xs mb-4">
                  Service Area
                </p>
                <div className="font-worksans font-light text-forest/70 text-lg space-y-2">
                  <p>Santa Cruz · Soquel · Aptos</p>
                  <p>Capitola · Monterey Bay</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="border-t border-amber/20 pt-8">
                <p className="font-fraunces italic text-forest text-xl">
                  Serving Santa Cruz County since 2004
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
