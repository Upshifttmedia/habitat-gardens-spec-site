import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Brett Graf — Habitat Gardens",
  description:
    "Ecological designer, teacher, and thirty years in the soil. Brett Graf has been working in horticulture and ecology since 1993.",
};

export default function AboutPage() {
  return <AboutClient />;
}
