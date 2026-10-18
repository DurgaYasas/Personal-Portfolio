import { pickmeSearchRevamp } from "./case-studies/pickme-search-revamp";
import type { SourceCaseStudy } from "./case-studies/types";

type ProjectBase = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export type ConceptProject = ProjectBase & {
  kind: "concept";
  visual: "workspace" | "mobile";
  premise: string;
  rationale: string;
  flow: string[];
};

export type CaseStudyProject = ProjectBase & {
  kind: "case-study";
  article: SourceCaseStudy;
};

export type Project = ConceptProject | CaseStudyProject;

// Documented case studies and illustrative concepts remain explicitly distinct.
export const projects: Project[] = [
  {
    kind: "case-study",
    slug: "pickme-search-revamp",
    number: "01",
    title: pickmeSearchRevamp.title,
    category: "Super App · Search UX",
    description: pickmeSearchRevamp.subtitle,
    tags: pickmeSearchRevamp.tags,
    article: pickmeSearchRevamp,
  },
  {
    kind: "concept",
    slug: "clarity-at-scale",
    number: "02",
    title: "Clarity at scale.",
    category: "SaaS & complex digital products",
    description:
      "An illustrative workspace that gives complex work room to breathe.",
    visual: "workspace",
    tags: ["PRODUCT DESIGN", "WEB EXPERIENCE"],
    premise:
      "Explore how a calm visual hierarchy could make a busy digital workspace easier to navigate.",
    rationale:
      "A persistent navigation rail, a clear primary action, and restrained use of color create an intentional starting point. This is a visual hypothesis, awaiting research and validation.",
    flow: [
      "Open workspace",
      "Find a project",
      "Review tasks",
      "Choose the next action",
    ],
  },
  {
    kind: "concept",
    slug: "everyday-connected",
    number: "03",
    title: "Everyday, connected.",
    category: "Mobile applications & super apps",
    description:
      "An illustrative mobile experience for the little things that fill a day.",
    visual: "mobile",
    tags: ["MOBILE DESIGN", "SUPER APP"],
    premise:
      "Explore a shared entry point for everyday services without making every service compete for attention.",
    rationale:
      "Recognizable service icons, generous touch targets, and a short route from discovery to selection offer a starting direction. Usability and service priorities still need to be tested.",
    flow: [
      "Explore services",
      "Choose a category",
      "Review an option",
      "Continue to the service",
    ],
  },
];
