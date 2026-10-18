import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        href={`/work/${project.slug}`}
        className="project-link"
        aria-label={`Explore ${project.title} — illustrative concept`}
      >
        <div className="project-image-wrap">
          <ProjectVisual variant={project.visual} />
          <span className="project-open">
            <ArrowUpRight size={23} />
          </span>
          <span className="concept-label">ILLUSTRATIVE CONCEPT</span>
        </div>
        <div className="project-meta">
          <span>{project.category}</span>
          <span>/{project.number}</span>
        </div>
        <h3>
          {project.title} <ArrowUpRight size={28} />
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
