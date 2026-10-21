import type { CSSProperties } from "react";
import { BrainCircuit, Code2, Palette, Target } from "lucide-react";
import { skillGroups } from "@/data/about";
import { Reveal } from "./reveal";
import { SkillMeter } from "./profile-motion";
import styles from "./profile-sections.module.css";

const skillIcons = {
  design: Palette,
  ai: BrainCircuit,
  technical: Code2,
  strategy: Target,
};

export function SkillsExpertise() {
  return (
    <section
      id="skills"
      className={`${styles.section} ${styles.skillsSection} container`}
      aria-labelledby="skills-title"
    >
      <Reveal>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>CORE COMPETENCIES</p>
          <h2 id="skills-title">Skills &amp; Expertise</h2>
        </header>
      </Reveal>
      <div className={styles.skillsGrid}>
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.icon];
          return (
            <Reveal key={group.id} delay={(index % 2) * 0.07}>
              <article
                className={styles.skillCard}
                aria-labelledby={`${group.id}-title`}
                style={{ "--skill-accent": group.color } as CSSProperties}
              >
                <header className={styles.skillCardHeader}>
                  <span className={styles.skillIcon}>
                    <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 id={`${group.id}-title`}>{group.title}</h3>
                </header>
                <ul className={styles.skillList}>
                  {group.skills.map((skill, skillIndex) => (
                    <SkillMeter
                      key={skill.label}
                      id={`${group.id}-skill-${skillIndex}`}
                      label={skill.label}
                      value={skill.value}
                      delay={skillIndex * 0.06}
                    />
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
