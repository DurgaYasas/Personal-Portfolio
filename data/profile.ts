// Hero copy and statistics supplied by Durga in the reference image.
// Keep asset URLs null until the original files or approved URLs are available.
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
  portrait: null,
  resumeUrl: null,
  metrics: [
    { value: "7+", label: "Years Experience" },
    { value: "5M+", label: "Users Impacted" },
    { value: "3", label: "Design Systems Contributed" },
  ],
};
