import { Star } from "lucide-react";
import { toolkit } from "@/data/practice";
import { Reveal } from "./reveal";
import styles from "./practice-sections.module.css";

function ToolRating({ rating }: { rating: number }) {
  return (
    <span
      className={styles.rating}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={14}
          strokeWidth={1.7}
          fill={index < rating ? "currentColor" : "none"}
          className={index < rating ? styles.filledStar : styles.emptyStar}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function Toolkit() {
  return (
    <section
      id="toolkit"
      className={`${styles.section} ${styles.toolkitSection} container`}
      aria-labelledby="toolkit-title"
    >
      <Reveal>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{toolkit.eyebrow}</p>
          <h2 id="toolkit-title">{toolkit.title}</h2>
        </header>
      </Reveal>
      <div className={styles.cardGrid}>
        {toolkit.groups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.06} className={styles.gridItem}>
            <section
              className={`${styles.card} ${styles.toolkitCard}`}
              aria-labelledby={`toolkit-${group.id}-title`}
            >
              <h3 id={`toolkit-${group.id}-title`}>{group.title}</h3>
              <dl className={styles.tools}>
                {group.tools.map((tool) => (
                  <div key={tool.name}>
                    <dt>{tool.name}</dt>
                    <dd><ToolRating rating={tool.rating} /></dd>
                  </div>
                ))}
              </dl>
            </section>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
