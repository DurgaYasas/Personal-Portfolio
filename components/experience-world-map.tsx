import { worldMapPaths } from "@/data/maps/world-map";
import styles from "./my-experience.module.css";

export function ExperienceWorldMap() {
  return (
    <svg
      viewBox="0 0 1000 440"
      className={styles.worldMap}
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.graticule}>
        <path d="M0 125H1000M0 250H1000M0 375H1000M250 0V440M500 0V440M750 0V440" />
      </g>
      <g className={styles.land} fillRule="evenodd">
        {worldMapPaths.map(({ iso, path }) => (
          <path key={iso} d={path} data-map-country={iso} />
        ))}
      </g>
    </svg>
  );
}
