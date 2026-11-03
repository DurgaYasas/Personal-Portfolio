import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { UpcomingProject } from "@/data/projects";
import { CaseStudyCover } from "./case-study-cover";
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { Reveal } from "./reveal";

export function UpcomingCaseStudy({
  project,
  totalProjects,
}: {
  project: UpcomingProject;
  totalProjects: number;
}) {
  return (
    <div id="top">
      <Navigation workCount={totalProjects} />
      <main id="main">
        <section className="case-hero container">
          <Link href="/#work" className="text-link">
            <ArrowLeft size={17} aria-hidden="true" /> Back to work
          </Link>
          <Reveal>
            <div className="case-kicker eyebrow">
              {project.category} <span>COMING SOON / {project.number}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="case-description">{project.description}</p>
          </Reveal>
          <Reveal>
            <CaseStudyCover
              title={project.title}
              tags={project.tags}
              cover={project.cover}
              upcoming
              detail
            />
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
