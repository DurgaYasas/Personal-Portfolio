import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudyArticle } from "@/components/case-study-article";
import { UpcomingCaseStudy } from "@/components/upcoming-case-study";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? project.kind === "upcoming"
        ? `${project.title} — Coming soon`
        : project.title
      : "Project not found",
    description: project?.description,
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return project.kind === "case-study" ? (
    <CaseStudyArticle project={project} totalProjects={projects.length} />
  ) : (
    <UpcomingCaseStudy project={project} totalProjects={projects.length} />
  );
}
