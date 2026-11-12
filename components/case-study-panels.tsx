import Image from "next/image";
import { Check, Minus } from "lucide-react";
import type { CSSProperties } from "react";
import type {
  CompetitorAnalysisBlock,
  DesignSystemBlock,
  PersonaCollectionBlock,
} from "@/data/case-studies/types";
import "@fontsource-variable/inter";
import styles from "./case-study-panels.module.css";

function Findings({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "positive" | "negative";
}) {
  const Icon = variant === "positive" ? Check : Minus;
  return (
    <div className={styles.findings}>
      <h4>{title}</h4>
      <ul className={styles.findingList}>
        {items.map((item) => (
          <li key={item}>
            <Icon
              size={15}
              strokeWidth={2}
              aria-hidden="true"
              className={styles[variant]}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CompetitorAnalysis({
  block,
}: {
  block: CompetitorAnalysisBlock;
}) {
  return (
    <div id={block.id} className={styles.collection}>
      <div className={styles.competitorGrid}>
        {block.items.map((competitor) => (
          <article
            key={competitor.id}
            id={competitor.id}
            className={styles.competitorCard}
            aria-labelledby={`${competitor.id}-title`}
          >
            <div className={styles.brandHeader} aria-hidden="true">
              {competitor.logo ? (
                <div
                  className={`${styles.brandMark} ${competitor.logo.crop === "board-header" ? styles.boardLogo : ""}`}
                >
                  <Image
                    src={competitor.logo.src}
                    alt=""
                    width={competitor.logo.width}
                    height={competitor.logo.height}
                    sizes={
                      competitor.logo.crop === "board-header" ? "720px" : "200px"
                    }
                    className={styles.logoImage}
                  />
                </div>
              ) : (
                <span className={styles.brandName}>{competitor.name}</span>
              )}
            </div>
            <div className={styles.cardContent}>
              <h3 id={`${competitor.id}-title`}>{competitor.name}</h3>
              <Findings
                title="Strengths"
                items={competitor.strengths}
                variant="positive"
              />
              <Findings
                title="Weakness"
                items={competitor.weaknesses}
                variant="negative"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function UserPersonas({ block }: { block: PersonaCollectionBlock }) {
  return (
    <div id={block.id} className={styles.collection}>
      <div className={styles.personaGrid}>
        {block.items.map((persona) => (
          <article
            key={persona.id}
            id={persona.id}
            className={styles.personaCard}
            aria-labelledby={`${persona.id}-title`}
          >
            <header className={styles.personaHeader}>
              <div className={styles.avatar} aria-hidden="true">
                {persona.portrait ? (
                  <Image
                    src={persona.portrait.src}
                    alt=""
                    width={persona.portrait.width}
                    height={persona.portrait.height}
                    sizes="64px"
                  />
                ) : (
                  persona.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                )}
              </div>
              <div>
                <h3 id={`${persona.id}-title`}>{persona.name}</h3>
                <p className={styles.personaRole}>
                  {persona.role} · Age {persona.age}
                </p>
                <p className={styles.personaSummary}>{persona.summary}</p>
              </div>
            </header>
            <Findings title="Goals" items={persona.goals} variant="positive" />
            <Findings
              title="Pain points"
              items={persona.painPoints}
              variant="negative"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export function DesignSystem({ block }: { block: DesignSystemBlock }) {
  return (
    <div id={block.id} className={styles.collection}>
      <div className={styles.foundationsGrid}>
        <section
          className={styles.foundationCard}
          aria-labelledby={`${block.id}-colors`}
        >
          <h3 id={`${block.id}-colors`}>Colour Palette</h3>
          <ul className={styles.swatchList}>
            {block.colors.map((color) => (
              <li key={color.name}>
                <span
                  className={styles.swatch}
                  style={{ "--swatch-color": color.value } as CSSProperties}
                  aria-hidden="true"
                />
                <span>{color.name}</span>
                <code>{color.value}</code>
              </li>
            ))}
          </ul>
        </section>
        <section
          className={styles.foundationCard}
          aria-labelledby={`${block.id}-type`}
        >
          <h3 id={`${block.id}-type`}>Typography</h3>
          <div
            className={styles.typeSpecimen}
            style={
              {
                "--specimen-font": `"${block.typography.fontFamily}", sans-serif`,
              } as CSSProperties
            }
          >
            <div className={styles.typeBanner}>
              <span className={styles.glyphs} aria-hidden="true">
                {block.typography.glyphs}
              </span>
              <div>
                <p className={styles.typefaceName}>{block.typography.name}</p>
                <p className={styles.typefaceNote}>Primary typeface</p>
              </div>
            </div>
            <dl className={styles.typeScale}>
              {block.typography.samples.map((sample) => (
                <div key={sample.role}>
                  <dt>{sample.role}</dt>
                  <dd className={styles[`sample${sample.role}`]}>
                    {sample.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
