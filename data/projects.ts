import { pickmeSearchRevamp } from "./case-studies/pickme-search-revamp";
import type { SourceCaseStudy } from "./case-studies/types";

export type ProjectCover = {
  wordmark: string;
  icon: "search" | "payment" | "fleet";
  titleLines: string[];
};

type ProjectBase = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  cover?: ProjectCover;
};

export type UpcomingProject = ProjectBase & {
  kind: "upcoming";
};

export type CaseStudyProject = ProjectBase & {
  kind: "case-study";
  article: SourceCaseStudy;
};

export type Project = UpcomingProject | CaseStudyProject;

// Upcoming projects contain only supplied titles; article content can be added later.
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
    kind: "upcoming",
    slug: "seamless-payment-experience-at-the-table",
    number: "02",
    title: "Seamless Payment Experience at the Table",
    category: "Payments",
    description: "Case study coming soon.",
    tags: ["Payments"],
    cover: {
      wordmark: "Payments",
      icon: "payment",
      titleLines: ["Seamless Payment", "Experience at the Table"],
    },
  },
  {
    kind: "upcoming",
    slug: "revamping-ingenii-fleet-tracker",
    number: "03",
    title: "Revamping Ingenii Fleet Tracker",
    category: "Fleet Tracking",
    description: "Case study coming soon.",
    tags: ["Fleet Tracking"],
    cover: {
      wordmark: "Ingenii",
      icon: "fleet",
      titleLines: ["Revamping Ingenii", "Fleet Tracker"],
    },
  },
];
