import { ArrowUpRight, CreditCard, Route, Search } from "lucide-react";
import { Fragment } from "react";
import type { ProjectCover } from "@/data/projects";
import styles from "./case-study-cover.module.css";

// Typographic thumbnail only. Original project imagery will be supplied later.
export function CaseStudyCover({
  title,
  tags,
  cover,
  upcoming = false,
  detail = false,
}: {
  title: string;
  tags: string[];
  cover?: ProjectCover;
  upcoming?: boolean;
  detail?: boolean;
}) {
  const [lead, ...rest] = title.split(" ");
  const titleLines = cover?.titleLines ?? [lead, rest.join(" ")];
  const Icon = { search: Search, payment: CreditCard, fleet: Route }[
    cover?.icon ?? "search"
  ];
  return (
    <div
      className={`${styles.cover} ${detail ? styles.detail : ""} ${title.length > 36 ? styles.longTitle : ""}`}
      aria-hidden="true"
    >
      <div className={styles.topline}>
        <span className={styles.wordmark}>{cover?.wordmark ?? lead}</span>
        <span>{upcoming ? "COMING SOON" : "CASE STUDY"}</span>
      </div>
      <div className={styles.composition}>
        <div>
          <span className={styles.kicker}>{tags[0]}</span>
          <div className={styles.title}>
            {titleLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>
        <div className={styles.searchMark}>
          <Icon strokeWidth={1} />
          <span className={styles.orbit} />
          <span className={styles.orbitOuter} />
        </div>
      </div>
      <div className={styles.bottomline}>
        <span>
          {tags.map((tag, index) => (
            <Fragment key={tag}>
              {index > 0 && <i />}
              {tag}
            </Fragment>
          ))}
        </span>
        <ArrowUpRight size={22} strokeWidth={1.2} />
      </div>
    </div>
  );
}
