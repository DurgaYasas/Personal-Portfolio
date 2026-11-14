// Homepage copy, sprint timings, the 60% claim, and self-ratings are supplied
// by the owner in the AI Spotlight / My Toolkit reference screenshots.
export type SpotlightFeature = {
  id: string;
  icon: "zap" | "bot" | "trend" | "lightbulb";
  title: string;
  description: string;
};

export const aiSpotlight = {
  badge: "Pioneering AI-Integrated Workflows",
  title: "AI & Innovation Spotlight",
  introduction:
    "Embracing AI as a force multiplier in the design process — not replacing creativity, but amplifying it to deliver better experiences faster.",
  features: [
    {
      id: "rapid-prototyping",
      icon: "zap",
      title: "Rapid Prototyping",
      description:
        "From concept to testable prototype in hours, not days. AI-assisted design iteration cuts cycle time by 60%.",
    },
    {
      id: "ai-design-tools",
      icon: "bot",
      title: "AI Design Tools",
      description:
        "Leveraging Uizard, ChatGPT, and emerging AI tools to accelerate ideation and content strategy.",
    },
    {
      id: "data-driven-decisions",
      icon: "trend",
      title: "Data-Driven Decisions",
      description:
        "Integrating machine learning insights into UX decisions for personalization and improved user flows.",
    },
    {
      id: "future-vision",
      icon: "lightbulb",
      title: "Future Vision",
      description:
        "Exploring generative AI for design systems, automated usability testing, and predictive UX patterns.",
    },
  ] satisfies SpotlightFeature[],
  sprint: {
    title: "AI-Powered Design Sprint: Concept to Test in 1 Day",
    steps: [
      {
        id: "ideation",
        title: "Ideation",
        duration: "~30 min",
        description: "AI-assisted brainstorming & concept generation",
      },
      {
        id: "wireframes",
        title: "Wireframes",
        duration: "~2 hours",
        description: "Rapid wireframing with AI layout suggestions",
      },
      {
        id: "prototype",
        title: "Prototype",
        duration: "~4 hours",
        description: "Interactive prototype with AI-generated content",
      },
      {
        id: "test",
        title: "Test",
        duration: "~1 day",
        description: "User testing with AI-analyzed feedback",
      },
      {
        id: "iterate",
        title: "Iterate",
        duration: "~2 hours",
        description: "Data-driven refinement cycle",
      },
    ],
  },
};

export type ToolkitGroup = {
  id: string;
  title: string;
  tools: { name: string; rating: 1 | 2 | 3 | 4 | 5 }[];
};

export const toolkit = {
  eyebrow: "TOOLS & TECHNOLOGIES",
  title: "My Toolkit",
  groups: [
    {
      id: "design-prototyping",
      title: "Design & Prototyping",
      tools: [
        { name: "Figma", rating: 5 },
        { name: "Adobe XD", rating: 5 },
        { name: "Protopie", rating: 4 },
        { name: "Uizard (AI)", rating: 4 },
      ],
    },
    {
      id: "visual-design",
      title: "Visual Design",
      tools: [
        { name: "Adobe Photoshop", rating: 4 },
        { name: "Adobe Illustrator", rating: 4 },
      ],
    },
    {
      id: "development",
      title: "Development",
      tools: [
        { name: "HTML5/CSS", rating: 4 },
        { name: "JavaScript", rating: 3 },
      ],
    },
    {
      id: "research-testing",
      title: "Research & Testing",
      tools: [
        { name: "User Testing Platforms", rating: 4 },
        { name: "Stitch", rating: 4 },
        { name: "Analytics Tools", rating: 4 },
      ],
    },
  ] satisfies ToolkitGroup[],
};
