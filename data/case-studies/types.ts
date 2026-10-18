export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quotes"; items: { text: string; attribution?: string }[] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "cards"; items: { title: string; text: string }[] }
  | {
      type: "figure";
      id: string;
      label?: string;
      caption: string;
      image?: { src: string; alt: string; width: number; height: number };
    }
  | { type: "table"; headers: string[]; rows: string[][] }
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
  role: string;
  period: string;
  tags: string[];
  source: { fileName: string; pages: number };
  sections: { id: string; title: string; blocks: ArticleBlock[] }[];
};
