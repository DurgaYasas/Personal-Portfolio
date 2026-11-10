import Image from "next/image";
import type { ProjectThumbnailConfig } from "@/data/projects";
import styles from "./project-thumbnail.module.css";

// Home-page artwork is separate from each article's original imagery and cover.
export function ProjectThumbnail({
  thumbnail,
  brand,
}: {
  thumbnail: ProjectThumbnailConfig;
  brand: string;
}) {
  const original = thumbnail.variant === "interface";
  return (
    <div
      className={original ? `${styles.thumbnail} ${styles.interface}` : styles.thumbnail}
      data-thumbnail-kind={thumbnail.variant}
      aria-hidden="true"
    >
      {original ? (
        <div className={styles.screenFrame}>
          <Image
            src={thumbnail.image.src}
            alt={thumbnail.image.alt}
            width={thumbnail.image.width}
            height={thumbnail.image.height}
            sizes="(max-width: 760px) 85vw, 860px"
            className={styles.screenImage}
          />
        </div>
      ) : (
        <Image
          src={thumbnail.image.src}
          alt={thumbnail.image.alt}
          fill
          sizes="(max-width: 760px) 100vw, 1320px"
          className={styles.artwork}
        />
      )}
      <div className={styles.copy}>
        <span className={styles.brand}>{brand}</span>
        <div className={styles.story}>
          <span className={styles.eyebrow}>PRODUCT DESIGN / CASE STUDY</span>
          <div className={styles.headline}>
            {thumbnail.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <p>{thumbnail.detail}</p>
        </div>
        <span className={styles.provenance}>
          <span /> {original ? "Original project UI" : "Illustrative cover"}
        </span>
      </div>
    </div>
  );
}
