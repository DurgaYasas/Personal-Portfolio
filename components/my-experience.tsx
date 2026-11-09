import { experienceCountries } from "@/data/experience";
import { ExperienceMap } from "./experience-map";
import { ExperienceWorldMap } from "./experience-world-map";
import { Reveal } from "./reveal";
import styles from "./my-experience.module.css";

export function MyExperience() {
  return (
    <section
      id="experience"
      className={`${styles.section} container`}
      aria-labelledby="experience-title"
    >
      <Reveal>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>ACROSS BORDERS</p>
            <h2 id="experience-title">My experience</h2>
          </div>
          <p className={styles.intro}>
            Explore the places behind the work.
            <br />
            Hover, focus or tap a country to discover more.
          </p>
        </header>
        <ExperienceMap countries={experienceCountries}>
          <ExperienceWorldMap />
        </ExperienceMap>
      </Reveal>
    </section>
  );
}
