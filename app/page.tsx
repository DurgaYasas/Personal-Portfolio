import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  MoveUpRight,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { CareerJourney } from "@/components/career-journey";
import { SkillsExpertise } from "@/components/skills-expertise";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const approach = [
  {
    title: "Find the real question.",
    text: "Start with the context, challenge assumptions, and make space for the people behind the product.",
  },
  {
    title: "Make complexity clear.",
    text: "Connect the big picture to the smallest interaction. Give every decision a reason to be there.",
  },
  {
    title: "Care for the details.",
    text: "Bring structure, visual craft, and thoughtful interactions together into a coherent experience.",
  },
];

export default function Home() {
  return (
    <div id="top">
      <Navigation home workCount={projects.length} />
      <main id="main">
        <Hero />
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
                CASE STUDIES & DESIGN EXPLORATIONS <ArrowDownRight size={15} />
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
                className={project.kind === "case-study" ? "featured-case" : ""}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <p className="work-disclosure">
            <span /> Illustrative explorations are labeled on each card.
          </p>
        </section>

        <section
          id="approach"
          className="about-section container"
          aria-labelledby="about-title"
        >
          <Reveal>
            <div className="section-topline">
              <span className="eyebrow">04 / DESIGN APPROACH</span>
              <Asterisk size={25} strokeWidth={1.3} />
            </div>
            <div className="about-grid">
              <div>
                <h2 id="about-title">
                  Clear thinking.
                  <br />
                  Considered <em>craft.</em>
                </h2>
                <span className="about-signature">
                  Durga Yasas <MoveUpRight size={20} />
                </span>
              </div>
              <div className="about-copy">
                <p>
                  I’m Durga, a Senior Product Designer working at the
                  intersection of complexity and everyday life.
                </p>
                <p>
                  My experience spans complex digital products, mobile
                  applications, super apps, and SaaS. My approach is to make
                  these experiences feel clear, connected, and thoughtfully put
                  together.
                </p>
                <a href="#contact" className="text-link">
                  Let’s get to know each other <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="approach-grid">
              {approach.map((item, i) => (
                <div className="approach-item" key={item.title}>
                  <span>0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="design-note container">
            <Asterisk
              className="note-star"
              strokeWidth={1.4}
              aria-hidden="true"
            />
            <p>
              Good design is how it looks.
              <br />
              <span>Great design is how it makes life feel.</span>
            </p>
            <span className="note-caption">A SIMPLE DESIGN PRINCIPLE.</span>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
