import { pickmeSearchRevamp } from "./case-studies/pickme-search-revamp";
import { seamlessPaymentExperience } from "./case-studies/seamless-payment-experience-at-the-table";
import { ingeniiFleetTracker } from "./case-studies/revamping-ingenii-fleet-tracker";
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
    kind: "case-study",
    slug: "seamless-payment-experience-at-the-table",
    number: "02",
    title: seamlessPaymentExperience.title,
    category: "Payments",
    description: seamlessPaymentExperience.subtitle,
    tags: seamlessPaymentExperience.tags,
    article: seamlessPaymentExperience,
    cover: {
      wordmark: "Payments",
      icon: "payment",
      titleLines: ["Seamless Payment", "Experience at the Table"],
    },
  },
  {
    kind: "case-study",
    slug: "revamping-ingenii-fleet-tracker",
    number: "03",
    title: ingeniiFleetTracker.title,
    category: "Fleet Tracking",
    description: ingeniiFleetTracker.subtitle,
    tags: ingeniiFleetTracker.tags,
    article: ingeniiFleetTracker,
    cover: {
      wordmark: "Ingenii",
      icon: "fleet",
      titleLines: ["Revamping Ingenii", "Fleet Tracker"],
    },
  },
];
