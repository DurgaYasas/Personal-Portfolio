import { pickmeSearchRevamp } from "./case-studies/pickme-search-revamp";
import { seamlessPaymentExperience } from "./case-studies/seamless-payment-experience-at-the-table";
import { ingeniiFleetTracker } from "./case-studies/revamping-ingenii-fleet-tracker";
import type { CaseStudyImage, SourceCaseStudy } from "./case-studies/types";

export type ProjectThumbnailConfig = {
  variant: "illustration" | "interface";
  image: CaseStudyImage;
  headline: string[];
  detail: string;
};

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
  thumbnail?: ProjectThumbnailConfig;
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
    thumbnail: {
      variant: "illustration",
      image: {
        src: "/images/thumbnails/pickme-search.png",
        alt: "Illustrative food-search screens showing grouped outlet and dish results",
        width: 1935,
        height: 813,
      },
      headline: ["Find your", "next craving."],
      detail: "Food search & discovery",
    },
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
    thumbnail: {
      variant: "illustration",
      image: {
        src: "/images/thumbnails/table-payments.png",
        alt: "Illustrative restaurant payment screens with a QR code, bill splitting and tipping options",
        width: 1938,
        height: 811,
      },
      headline: ["Scan. Split.", "Settle."],
      detail: "QR payments & flexible bill splitting",
    },
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
    thumbnail: {
      variant: "interface",
      image: {
        src: "/images/ingenii-fleet-tracker/cover.png",
        alt: "Original Ingenii fleet tracking interface with vehicle lists, location maps and tracking widgets",
        width: 1920,
        height: 1048,
      },
      headline: ["Clarity,", "in motion."],
      detail: "Fleet tracking & vehicle insights",
    },
    cover: {
      wordmark: "Ingenii",
      icon: "fleet",
      titleLines: ["Revamping Ingenii", "Fleet Tracker"],
    },
  },
];
