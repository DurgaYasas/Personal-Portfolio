import type { CSSProperties } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { achievements, careerFacts, careerJourney } from "@/data/about";
import { Reveal } from "./reveal";
import { TimelineProgress } from "./profile-motion";
import styles from "./profile-sections.module.css";

const factIcons = {
  location: MapPin,
  education: GraduationCap,
  consulting: Sparkles,
};

export function CareerJourney() {
  return (
    <section
      id="about"
      className={`${styles.section} container`}
      aria-labelledby="career-title"
    >
      <Reveal>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>ABOUT ME</p>
          <h2 id="career-title">Career Journey &amp; Philosophy</h2>
        </header>
      </Reveal>
      <Reveal delay={0.05}>
        <ul className={styles.facts} aria-label="Professional background">
          {careerFacts.map((fact) => {
            const Icon = factIcons[fact.icon];
            return (
              <li key={fact.icon}>
                <Icon size={14} strokeWidth={1.6} aria-hidden="true" />
                {fact.text}
              </li>
            );
          })}
        </ul>
      </Reveal>

      <div className={styles.timeline}>
        <TimelineProgress />
        <ol className={styles.timelineList} aria-label="Career timeline">
          {careerJourney.map((entry, index) => (
            <li
              key={entry.id}
              className={`${styles.timelineEntry} ${index % 2 === 0 ? styles.leftEntry : styles.rightEntry}`}
              style={{ "--entry-accent": entry.color } as CSSProperties}
            >
              <span className={styles.timelineMarker} aria-hidden="true" />
              <Reveal className={styles.timelineCardWrap} delay={0.04}>
                <article
                  className={styles.careerCard}
                  aria-labelledby={`${entry.id}-role`}
                >
                  <p className={styles.period}>{entry.period}</p>
                  <h3 id={`${entry.id}-role`}>{entry.role}</h3>
                  <p className={styles.company}>{entry.company}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.achievements}>
        <Reveal>
          <h3>Key Achievements and Learnings</h3>
        </Reveal>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={achievement}>
              <Reveal className={styles.achievement} delay={index * 0.025}>
                <span aria-hidden="true" />
                <p>{achievement}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
