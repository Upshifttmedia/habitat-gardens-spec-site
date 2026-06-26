import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import ProjectPageClient from "./ProjectPageClient";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Habitat Gardens`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}
