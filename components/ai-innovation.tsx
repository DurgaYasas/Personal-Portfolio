import {
  ArrowRight,
  Bot,
  Clock3,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { aiSpotlight } from "@/data/practice";
import { Reveal } from "./reveal";
import styles from "./practice-sections.module.css";

const featureIcons = {
  zap: Zap,
  bot: Bot,
  trend: TrendingUp,
  lightbulb: Lightbulb,
};

export function AIInnovation() {
  return (
    <section
      id="ai-innovation"
      className={`${styles.section} ${styles.aiSection} container`}
      aria-labelledby="ai-spotlight-title"
    >
      <Reveal>
        <header className={styles.sectionHeader}>
          <p className={styles.badge}>
            <Sparkles size={16} aria-hidden="true" />
            {aiSpotlight.badge}
          </p>
          <h2 id="ai-spotlight-title">{aiSpotlight.title}</h2>
          <p className={styles.introduction}>{aiSpotlight.introduction}</p>
        </header>
      </Reveal>

      <div className={styles.cardGrid}>
        {aiSpotlight.features.map((feature, index) => {
          const Icon = featureIcons[feature.icon];
          return (
            <Reveal key={feature.id} delay={index * 0.06} className={styles.gridItem}>
              <article className={styles.card} aria-labelledby={`${feature.id}-title`}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Icon size={23} strokeWidth={1.7} />
                </span>
                <h3 id={`${feature.id}-title`}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <section className={styles.sprint} aria-labelledby="ai-sprint-title">
          <h3 id="ai-sprint-title">
            <Clock3 size={21} aria-hidden="true" />
            {aiSpotlight.sprint.title}
          </h3>
          <ol className={styles.sprintSteps} role="list">
            {aiSpotlight.sprint.steps.map((step, index) => (
              <li key={step.id} className={styles.sprintStep}>
                <div className={styles.stepTop} aria-hidden="true">
                  <span className={styles.stepNumber}>{index + 1}</span>
                  {index < aiSpotlight.sprint.steps.length - 1 && (
                    <ArrowRight className={styles.stepArrow} size={18} />
                  )}
                </div>
                <div className={styles.stepBody}>
                  <h4>{step.title}</h4>
                  <p className={styles.duration}>{step.duration}</p>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>
    </section>
  );
}
