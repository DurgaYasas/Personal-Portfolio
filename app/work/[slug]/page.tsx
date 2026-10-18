import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";

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
      ? `${project.title} — Illustrative concept`
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
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div id="top">
      <Navigation />
      <main id="main">
        <section className="case-hero container">
          <Link href="/#work" className="text-link">
            <ArrowLeft size={17} /> Back to work
          </Link>
          <Reveal>
            <div className="case-kicker eyebrow">
              {project.category}{" "}
              <span>ILLUSTRATIVE CONCEPT / {project.number}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="case-description">{project.description}</p>
          </Reveal>
          <Reveal>
            <ProjectVisual variant={project.visual} detail />
          </Reveal>
          <p className="case-disclosure">
            An original visual exploration created for this portfolio. This is
            not a documented client project or a claim of shipped work. All UI
            content is sample content.
          </p>
        </section>
        <div className="case-body container">
          <Reveal>
            <section className="case-section">
              <div className="eyebrow">01 / OVERVIEW</div>
              <div>
                <h2>A starting point for exploration.</h2>
                <p>{project.premise}</p>
                <dl className="case-facts">
                  <div>
                    <dt>Format</dt>
                    <dd>Illustrative design direction</dd>
                  </div>
                  <div>
                    <dt>Focus</dt>
                    <dd>{project.category}</dd>
                  </div>
                  <div>
                    <dt>Role, timeline & outcomes</dt>
                    <dd>Not documented</dd>
                  </div>
                </dl>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <div className="eyebrow">02 / PROBLEM & GOAL</div>
              <div>
                <h2>Give complexity a clear path.</h2>
                <p>
                  {project.premise} The direction below explores a possible
                  response; it does not represent a validated problem statement.
                </p>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <div className="eyebrow">03 / RESEARCH & INSIGHTS</div>
              <div>
                <h2>Evidence before conclusions.</h2>
                <p>
                  No research documents or user findings have been supplied for
                  this exploration. Interviews, usability observations, and
                  supporting insights will be added only when source material is
                  available.
                </p>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <div className="eyebrow">04 / DESIGN RATIONALE</div>
              <div>
                <h2>Every choice needs a reason.</h2>
                <p>{project.rationale}</p>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <div className="eyebrow">05 / PROPOSED USER FLOW</div>
              <div>
                <h2>From intent to next step.</h2>
                <p>
                  An illustrative sequence for discussion, pending validation.
                </p>
                <ol className="flow-list">
                  {project.flow.map((step, index) => (
                    <li key={step}>
                      <span>0{index + 1}</span>
                      {step}
                      {index < project.flow.length - 1 && (
                        <ArrowRight size={17} />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </Reveal>
          <Reveal>
            <section className="case-gallery">
              <div className="section-topline">
                <span className="eyebrow">06 / SOLUTION & UI GALLERY</span>
                <span className="section-aside">ILLUSTRATIVE UI</span>
              </div>
              <h2>A direction, brought into focus.</h2>
              <ProjectVisual variant={project.visual} detail />
            </section>
          </Reveal>
          <Reveal>
            <section className="case-section">
              <div className="eyebrow">07 / REFLECTIONS & NEXT STEPS</div>
              <div>
                <h2>The next step is listening.</h2>
                <p>
                  The visuals establish an initial direction, not a finished
                  outcome. The next steps would be to confirm the problem, test
                  the proposed flow with users, and refine the design against
                  those findings. No impact metrics or results are claimed.
                </p>
              </div>
            </section>
          </Reveal>
          <Link href={`/work/${next.slug}`} className="next-project">
            <div>
              <span className="eyebrow">NEXT EXPLORATION</span>
              <h2>{next.title}</h2>
            </div>
            <ArrowUpRight size={42} strokeWidth={1.2} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
