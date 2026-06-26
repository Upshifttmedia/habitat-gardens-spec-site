import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Start Your Garden — Habitat Gardens",
  description:
    "Habitat Gardens is currently accepting new design, installation, and consultation projects across Santa Cruz County.",
};

export default function ContactPage() {
  return <ContactClient />;
}
