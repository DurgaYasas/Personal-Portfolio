import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronDown, ImageIcon } from "lucide-react";
import type { ArticleBlock } from "@/data/case-studies/types";
import type { CaseStudyProject } from "@/data/projects";
import { CaseStudyCover } from "./case-study-cover";
import {
  CompetitorAnalysis,
  DesignSystem,
  UserPersonas,
} from "./case-study-panels";
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { Reveal } from "./reveal";
import styles from "./case-study-article.module.css";

const tableStyles = {
  comparison: styles.comparisonTable,
  research: styles.researchTable,
};

function ParagraphText({
  text,
  emphasis = [],
}: {
  text: string;
  emphasis?: string[];
}) {
  if (emphasis.length === 0) return text;
  const pattern = emphasis
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  return text
    .split(new RegExp(`(${pattern})`, "g"))
    .map((part, index) =>
      emphasis.includes(part) ? <strong key={index}>{part}</strong> : part,
    );
}

function ArticleBlocks({
  blocks,
  depth = 3,
}: {
  blocks: ArticleBlock[];
  depth?: number;
}) {
  const Heading = depth > 3 ? "h4" : "h3";
  return blocks.map((block, index) => {
    const key = "id" in block ? block.id : `${block.type}-${index}`;
    switch (block.type) {
      case "competitor-analysis":
        return <CompetitorAnalysis key={key} block={block} />;
      case "personas":
        return <UserPersonas key={key} block={block} />;
      case "design-system":
        return <DesignSystem key={key} block={block} />;
      case "paragraph":
        return (
          <p key={key} className={styles.paragraph}>
            <ParagraphText text={block.text} emphasis={block.emphasis} />
          </p>
        );
      case "list":
        return (
          <ul key={key} className={styles.list}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      case "quotes":
        return (
          <div key={key} className={styles.quotes}>
            {block.items.map((item) => (
              <figure
                key={item.text}
                className={`${styles.quote} ${block.variant === "featured" ? styles.featuredQuote : ""}`}
              >
                {item.attribution && block.variant !== "featured" && (
                  <figcaption>{item.attribution}</figcaption>
                )}
                <blockquote>{item.text}</blockquote>
                {item.attribution && block.variant === "featured" && (
                  <figcaption>{item.attribution}</figcaption>
                )}
              </figure>
            ))}
          </div>
        );
      case "stats":
        return (
          <dl key={key} className={styles.stats}>
            {block.items.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        );
      case "cards":
        return (
          <div key={key} className={styles.cards}>
            {block.items.map((item) => (
              <div key={item.title} className={styles.card}>
                <Heading>{item.title}</Heading>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        );
      case "figure":
        return (
          <figure
            key={key}
            id={block.id}
            className={styles.figure}
            data-figure-id={block.id}
          >
            {(block.caption || block.label) && (
              <figcaption>
                {block.label && <span>{block.label}</span>}
                {block.caption}
              </figcaption>
            )}
            {block.image ? (
              <Image
                className={styles.figureImage}
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                style={{
                  maxWidth: block.image.width,
                  backgroundColor: block.image.background,
                }}
                sizes="(max-width: 760px) 100vw, 900px"
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <ImageIcon size={29} strokeWidth={1.2} aria-hidden="true" />
                <span>Image to be added</span>
              </div>
            )}
          </figure>
        );
      case "table":
        return (
          <div
            key={key}
            id={block.id}
            className={styles.tableScroll}
            role="region"
            aria-label={
              block.caption ?? "Analytics & KPIs: before and after revamp"
            }
            aria-describedby={
              block.variant === "comparison" && block.id
                ? `${block.id}-hint`
                : undefined
            }
            tabIndex={0}
          >
            {block.variant === "comparison" && (
              <div
                id={block.id ? `${block.id}-hint` : undefined}
                className={styles.tableHint}
              >
                Scroll horizontally to compare all columns.
              </div>
            )}
            <table
              className={`${styles.table} ${block.variant ? tableStyles[block.variant] : ""}`}
            >
              <caption className="sr-only">
                {block.caption ?? "Analytics & KPIs"}
              </caption>
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th key={cellIndex} scope="row">
                          {cell}
                        </th>
                      ) : (
                        <td key={cellIndex}>
                          <TableCell text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "subsection":
        return (
          <section
            key={key}
            id={block.id}
            className={styles.subsection}
            aria-labelledby={`${block.id}-title`}
          >
            <Heading id={`${block.id}-title`} className={styles.subheading}>
              {block.number && (
                <span className={styles.solutionNumber} aria-hidden="true">
                  {block.number}
                </span>
              )}
              {block.title}
            </Heading>
            <ArticleBlocks blocks={block.blocks} depth={depth + 1} />
          </section>
        );
    }
  });
}

function TableCell({ text }: { text: string }) {
  const status = text.match(/^(✅|❌)/)?.[0];
  if (!status) return text;
  return (
    <>
      <span
        role="img"
        aria-label={status === "✅" ? "Supported" : "Not supported"}
      >
        {status}
      </span>
      {text.slice(status.length)}
    </>
  );
}

export function CaseStudyArticle({
  project,
  totalProjects,
}: {
  project: CaseStudyProject;
  totalProjects: number;
}) {
  const { article } = project;
  const contents = article.sections.map((section) => (
    <a key={section.id} href={`#${section.id}`}>
      {section.title}
    </a>
  ));
  return (
    <div id="top">
      <Navigation workCount={totalProjects} />
      <main id="main">
        <header className={`${styles.hero} container`}>
          <Link href="/#work" className="text-link">
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>
          <Reveal>
            <div className={styles.tags}>
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h1>{article.title}</h1>
            <p className={styles.subtitle}>{article.subtitle}</p>
            {(article.role || article.period) && (
              <div className={styles.metadata}>
                {article.role && <span>{article.role}</span>}
                {article.period && <span>{article.period}</span>}
              </div>
            )}
          </Reveal>
          <Reveal>
            <div className={styles.cover}>
              {article.heroImage ? (
                <Image
                  className={styles.figureImage}
                  src={article.heroImage.src}
                  alt={article.heroImage.alt}
                  width={article.heroImage.width}
                  height={article.heroImage.height}
                  style={{ backgroundColor: article.heroImage.background }}
                  sizes="(max-width: 760px) 100vw, 1320px"
                />
              ) : (
                <CaseStudyCover
                  title={article.title}
                  tags={article.tags}
                  cover={project.cover}
                  detail
                />
              )}
            </div>
          </Reveal>
        </header>

        <div className={`${styles.articleLayout} container`}>
          <aside className={styles.desktopContents}>
            <div className={styles.stickyContents}>
              <span className="eyebrow">IN THIS CASE STUDY</span>
              <nav aria-label="Case study contents">{contents}</nav>
              <Link href="/#work" className={styles.contentsBack}>
                <ArrowLeft size={13} />
                Back to All Projects
              </Link>
            </div>
          </aside>
          <article className={styles.article} aria-label={article.title}>
            <details className={styles.mobileContents}>
              <summary>
                In this case study
                <ChevronDown size={18} />
              </summary>
              <nav aria-label="Case study contents">{contents}</nav>
            </details>
            {article.sections.map((section, index) => (
              <section
                id={section.id}
                key={section.id}
                className={`${styles.section} ${index === 0 ? styles.challenge : ""}`}
                aria-labelledby={`${section.id}-title`}
              >
                <div className={styles.sectionHeading}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                </div>
                <ArticleBlocks blocks={section.blocks} />
              </section>
            ))}
            <Link href="/#work" className={styles.backToProjects}>
              <span>Back to All Projects</span>
              <ArrowUpRight size={26} strokeWidth={1.3} />
            </Link>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
