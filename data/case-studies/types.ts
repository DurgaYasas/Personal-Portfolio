export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  background?: "white";
};

export type CompetitorAnalysisBlock = {
  type: "competitor-analysis";
  id: string;
  items: {
    id: string;
    name: string;
    logo?: CaseStudyImage & { crop?: "board-header" };
    strengths: string[];
    weaknesses: string[];
  }[];
};

export type PersonaCollectionBlock = {
  type: "personas";
  id: string;
  items: {
    id: string;
    name: string;
    role: string;
    age: string;
    summary: string;
    portrait?: CaseStudyImage;
    goals: string[];
    painPoints: string[];
  }[];
};

export type DesignSystemBlock = {
  type: "design-system";
  id: string;
  colors: { name: string; value: string }[];
  typography: {
    name: string;
    fontFamily: string;
    glyphs: string;
    samples: {
      role: "Display" | "Heading" | "Body" | "Caption" | "Label";
      text: string;
    }[];
  };
};

export type JourneyReaction = "smile" | "neutral" | "frown" | "surprised";

export type UserJourneyBlock = {
  type: "user-journey";
  id: string;
  caption: string;
  phases: {
    id: string;
    title: string;
    activity: string;
    thought: string;
    reaction: JourneyReaction;
    opportunity: string;
  }[];
};

export type UserFlowBlock = {
  type: "user-flow";
  id: string;
  caption: string;
  nodes: {
    id: string;
    title: string;
    kind?: "start" | "highlight";
    details?: string[];
    x: number;
    y: number;
    width: number;
  }[];
  edges: {
    from: string;
    to: string;
    points: [number, number][];
  }[];
};

export type ArticleBlock =
  | CompetitorAnalysisBlock
  | PersonaCollectionBlock
  | DesignSystemBlock
  | UserJourneyBlock
  | UserFlowBlock
  | { type: "paragraph"; text: string; emphasis?: string[] }
  | { type: "list"; items: string[] }
  | {
      type: "quotes";
      variant?: "featured";
      items: { text: string; attribution?: string }[];
    }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "cards"; items: { title: string; text: string }[] }
  | {
      type: "figure";
      id: string;
      label?: string;
      caption?: string;
      sourceImage?: { url: string; width: number; height: number };
      image?: CaseStudyImage;
    }
  | {
      type: "table";
      id?: string;
      caption?: string;
      variant?: "comparison" | "research";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "subsection";
      id: string;
      title: string;
      number?: string;
      blocks: ArticleBlock[];
    };

export type SourceCaseStudy = {
  title: string;
  subtitle: string;
  role?: string;
  period?: string;
  tags: string[];
  heroImage?: CaseStudyImage;
  source: { fileName: string; pages?: number; url?: string };
  sections: { id: string; title: string; blocks: ArticleBlock[] }[];
};
