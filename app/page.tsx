import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  MoveUpRight,
} from "lucide-react";
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
      <Navigation home />
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <Reveal>
            <div className="hero-intro">
              <span className="eyebrow">
                <span className="status-dot" /> HELLO, I’M DURGA YASAS
              </span>
              <span className="hero-role">SENIOR PRODUCT DESIGNER</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="hero-heading-wrap">
              <h1 id="hero-title">
                Making complex
                <br /> feel{" "}
                <span className="simple-word">
                  simple
                  <svg
                    viewBox="0 0 460 22"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 16C102 4 286 1 453 9"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="hero-period">.</span>
              </h1>
              <div className="design-seal" aria-hidden="true">
                <span>THOUGHTFUL BY DESIGN</span>
                <Asterisk strokeWidth={1.1} />
                <span>HUMAN AT HEART</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="hero-bottom">
              <div className="hero-description">
                <span className="intro-arrow">
                  <ArrowDownRight size={30} strokeWidth={1.3} />
                </span>
                <p>
                  I turn complex challenges into clear,
                  <br className="desktop-break" /> considered digital
                  experiences.
                </p>
              </div>
              <Link href="#work" className="explore-link">
                <span>EXPLORE THE WORK</span>
                <span className="circle-button">
                  <ArrowDown size={18} />
                </span>
              </Link>
            </div>
          </Reveal>
          <div className="hero-footnote">
            <span>
              PRODUCT STRATEGY <i /> DIGITAL EXPERIENCES <i /> VISUAL CRAFT
            </span>
            <span>SCROLL TO DISCOVER</span>
          </div>
        </section>

        <section
          id="work"
          className="work-section container"
          aria-labelledby="work-title"
        >
          <Reveal>
            <div className="section-topline">
              <span className="eyebrow">01 / SELECTED DIRECTIONS</span>
              <span className="section-aside">
                A FEW WAYS I THINK ABOUT DESIGN <ArrowDownRight size={15} />
              </span>
            </div>
            <div className="work-heading">
              <h2 id="work-title">
                Less friction.
                <br />
                <span>More possibility.</span>
              </h2>
              <p>
                Explorations across the products
                <br />
                and experiences I design.
              </p>
            </div>
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <p className="work-disclosure">
            <span /> Concept UI is illustrative. Detailed project stories will
            follow with original source material.
          </p>
        </section>

        <section
          id="about"
          className="about-section container"
          aria-labelledby="about-title"
        >
          <Reveal>
            <div className="section-topline">
              <span className="eyebrow">02 / A LITTLE ABOUT ME</span>
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
            <span className="note-star">✳</span>
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
