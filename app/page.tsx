import { ArrowDownRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { AIInnovation } from "@/components/ai-innovation";
import { Toolkit } from "@/components/toolkit";
import { MyExperience } from "@/components/my-experience";
import { CareerJourney } from "@/components/career-journey";
import { SkillsExpertise } from "@/components/skills-expertise";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div id="top">
      <Navigation home workCount={projects.length} />
      <main id="main">
        <Hero />
        <MyExperience />
        <CareerJourney />
        <SkillsExpertise />

        <section
          id="work"
          className="work-section container"
          aria-labelledby="work-title"
        >
          <Reveal>
            <div className="section-topline">
              <span className="eyebrow">03 / WORKS</span>
              <span className="section-aside">
                SELECTED CASE STUDIES <ArrowDownRight size={15} />
              </span>
            </div>
            <div className="work-heading">
              <h2 id="work-title">
                Less friction.
                <br />
                <span>More possibility.</span>
              </h2>
              <p>
                Selected work across the products
                <br />
                and experiences I design.
              </p>
            </div>
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.08}
                className="featured-case"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <p className="work-disclosure">
            <span /> More case studies coming soon.
          </p>
        </section>

        <AIInnovation />
        <Toolkit />
      </main>
      <Footer />
    </div>
  );
}
