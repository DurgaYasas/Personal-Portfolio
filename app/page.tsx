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
import profileStyles from "@/components/profile-sections.module.css";

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
            <header
              className={`${profileStyles.sectionHeader} ${profileStyles.titleOnly} work-heading`}
            >
              <h2 id="work-title">Selected case studies</h2>
            </header>
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
        </section>

        <AIInnovation />
        <Toolkit />
      </main>
      <Footer />
    </div>
  );
}
