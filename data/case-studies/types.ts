export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  background?: "white";
};

export type ArticleBlock =
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
