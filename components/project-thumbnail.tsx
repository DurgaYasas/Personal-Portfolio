import Image from "next/image";
import type { ProjectThumbnailConfig } from "@/data/projects";
import styles from "./project-thumbnail.module.css";

// Home-page artwork is separate from each article's original imagery and cover.
export function ProjectThumbnail({
  thumbnail,
}: {
  thumbnail: ProjectThumbnailConfig;
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
            fill
            sizes="(max-width: 760px) 85vw, 1100px"
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
    </div>
  );
}
