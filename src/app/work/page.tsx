import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "The Gardens — Habitat Gardens",
  description:
    "Ecological landscapes across Santa Cruz County, built around abundance and habitat.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
