import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "How We Work — Habitat Gardens",
  description:
    "Every Habitat Gardens project starts with one question: what does this land already want to grow? Learn about our ecological design process.",
};

export default function ProcessPage() {
  return <ProcessClient />;
}
