// Hero copy and statistics supplied by Durga in the reference image.
// Only use supplied original files or approved URLs for profile assets.
export const profile: {
  name: string;
  availability: string;
  summary: string;
  portrait: { src: string; alt: string } | null;
  resumeUrl: string | null;
  metrics: { value: string; label: string }[];
} = {
  name: "Durga Yasas",
  availability: "Available for new opportunities",
  summary:
    "Specialized in super apps, IOT systems, fintech, AR/3D visualization, and AI-powered design workflows. Turning complex problems into elegant, user-centered solutions.",
  portrait: {
    src: "/images/durga-yasas.png",
    alt: "Durga Yasas",
  },
  resumeUrl: null,
  metrics: [
    { value: "7+", label: "Years Experience" },
    { value: "5M+", label: "Users Impacted" },
    { value: "3", label: "Design Systems Contributed" },
  ],
};
