import { ArrowUpRight, Search } from "lucide-react";
import { Fragment } from "react";
import styles from "./case-study-cover.module.css";

// Typographic thumbnail only. Original project imagery will be supplied later.
export function CaseStudyCover({
  title,
  tags,
  detail = false,
}: {
  title: string;
  tags: string[];
  detail?: boolean;
}) {
  const [lead, ...rest] = title.split(" ");
  return (
    <div
      className={`${styles.cover} ${detail ? styles.detail : ""}`}
      aria-hidden="true"
    >
      <div className={styles.topline}>
        <span className={styles.wordmark}>{lead}</span>
        <span>CASE STUDY</span>
      </div>
      <div className={styles.composition}>
        <div>
          <span className={styles.kicker}>{tags[0]}</span>
          <div className={styles.title}>
            {lead}
            <br />
            {rest.join(" ")}
          </div>
        </div>
        <div className={styles.searchMark}>
          <Search strokeWidth={1} />
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
