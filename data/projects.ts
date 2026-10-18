export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  visual: "workspace" | "mobile";
  tags: string[];
  premise: string;
  rationale: string;
  flow: string[];
};

// These are explicitly illustrative directions, not claims about client work.
// Replace them with approved project facts and original designs when supplied.
export const projects: Project[] = [
  {
    slug: "clarity-at-scale",
    number: "01",
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
    slug: "everyday-connected",
    number: "02",
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
