import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { CaseStudyCover } from "./case-study-cover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-project-kind={project.kind}>
      <Link
        href={`/work/${project.slug}`}
        className="project-link"
        aria-label={`Explore ${project.title}${project.kind === "concept" ? " — illustrative concept" : " — case study"}`}
      >
        <div className="project-image-wrap">
          {project.kind === "case-study" ? (
            <CaseStudyCover title={project.title} tags={project.tags} />
          ) : (
            <ProjectVisual variant={project.visual} />
          )}
          <span className="project-open">
            <ArrowUpRight size={23} />
          </span>
          <span className="concept-label">
            {project.kind === "case-study"
              ? "CASE STUDY"
              : "ILLUSTRATIVE CONCEPT"}
          </span>
        </div>
        <div className="project-meta">
          <span>{project.category}</span>
          <span>/{project.number}</span>
        </div>
        <h3>
          <span className="project-title">{project.title}</span>{" "}
          <ArrowUpRight size={28} />
        </h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Link>
    </article>
  );
}
