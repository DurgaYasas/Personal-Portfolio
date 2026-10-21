// Career details, achievements, and skill percentages supplied in the reference.
export const careerFacts = [
  { icon: "location", text: "Sri Lanka & International" },
  { icon: "education", text: "BSc Management Information Systems, UCD" },
  { icon: "consulting", text: "Design Consultant" },
] as const;

export const careerJourney = [
  {
    id: "liveroom",
    period: "2017 - 2021",
    role: "Product Designer & Business Analyst",
    company: "LiveRoom (OGMO)",
    color: "#b47dff",
  },
  {
    id: "pickme",
    period: "2021 - 2022",
    role: "UX Designer",
    company: "PickMe",
    color: "#35d5a4",
  },
  {
    id: "arimac",
    period: "2022 - 2023",
    role: "Senior UX Designer",
    company: "Arimac (for Du Mobile UAE)",
    color: "#ffd04c",
  },
  {
    id: "pickme-food-market",
    period: "2023 - Present",
    role: "Senior UX Designer",
    company: "PickMe (Food & Market Team)",
    color: "#4b9fff",
  },
  {
    id: "freelance",
    period: "2021 - Present",
    role: "Freelance Product Designer",
    company: "KAST, Redblocks, Ingenii IoT etc.",
    color: "#2bd8ed",
  },
] as const;

export const achievements = [
  "Led UX strategy for Sri Lanka’s leading super app, impacting 1M+ food delivery users",
  "Involved in designing the Mobile and Web applications for UAE’s major telecom operator Du Mobile",
  "Pioneered the ux for a cloud-based AR/3D visualization platform for eCommerce",
  "Reduced design iteration cycles by using AI-powered workflows",
  "Managed end-to-end product lifecycle from ideation to UAT across multiple verticals",
] as const;

export type SkillGroup = {
  id: string;
  title: string;
  icon: "design" | "ai" | "technical" | "strategy";
  color: string;
  skills: { label: string; value: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "design-excellence",
    title: "Design Excellence",
    icon: "design",
    color: "#4b9fff",
    skills: [
      { label: "UX/UI Design & Design Systems", value: 95 },
      { label: "User Research & Testing", value: 90 },
      { label: "User Journey Mapping", value: 92 },
      { label: "Wireframing & Rapid Prototyping", value: 95 },
    ],
  },
  {
    id: "ai-innovation",
    title: "AI & Innovation",
    icon: "ai",
    color: "#b47dff",
    skills: [
      { label: "AI-Powered Rapid Prototyping", value: 88 },
      { label: "AI Design Tools", value: 85 },
      { label: "ML Insights in UX Decisions", value: 80 },
      { label: "Prompt Engineering for Design", value: 85 },
    ],
  },
  {
    id: "technical-skills",
    title: "Technical Skills",
    icon: "technical",
    color: "#2bd8ed",
    skills: [
      { label: "Figma & Adobe XD", value: 98 },
      { label: "Protopie & Stitch", value: 85 },
      { label: "Design System Architecture", value: 92 },
    ],
  },
  {
    id: "product-strategy",
    title: "Product Strategy",
    icon: "strategy",
    color: "#35d5a4",
    skills: [
      { label: "Product Roadmap Creation", value: 88 },
      { label: "Agile & Backlog Management", value: 90 },
      { label: "UAT Coordination", value: 92 },
      { label: "Cross-Functional Collaboration", value: 95 },
    ],
  },
];
