import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { CaseStudyCover } from "./case-study-cover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-project-kind={project.kind}>
      <Link
        href={`/work/${project.slug}`}
        className="project-link"
        aria-label={`Explore ${project.title}${project.kind === "upcoming" ? " — case study coming soon" : " — case study"}`}
      >
        <div className="project-image-wrap">
          <CaseStudyCover
            title={project.title}
            tags={project.tags}
            cover={project.cover}
            upcoming={project.kind === "upcoming"}
          />
          <span className="project-open">
            <ArrowUpRight size={23} />
          </span>
          {project.kind === "case-study" && (
            <span className="concept-label">CASE STUDY</span>
          )}
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
