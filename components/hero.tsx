import Image from "next/image";
import Link from "next/link";
import { ArrowDown, BriefcaseBusiness, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./reveal";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section
      className={`${styles.hero} container`}
      aria-labelledby="hero-title"
    >
      <Reveal>
        <p className={styles.availability}>
          <span aria-hidden="true" />
          {profile.availability}
        </p>
        <div className={styles.portraitFrame}>
          {profile.portrait ? (
            <Image
              className={styles.portrait}
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={540}
              height={540}
              sizes="(max-width: 640px) 220px, 268px"
              preload
            />
          ) : (
            <div
              className={styles.portraitPlaceholder}
              role="img"
              aria-label={`Profile photo placeholder for ${profile.name}`}
            >
              <span>DY</span>
              <small>Portrait coming soon</small>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.titleLine}>Senior Product Designer</span>{" "}
          <span className={styles.titleLine}>
            crafting{" "}
            <span className={styles.accent}>intuitive experiences</span>
          </span>{" "}
          <span className={styles.titleLine}>for millions of users</span>
        </h1>
        <p className={styles.summary}>{profile.summary}</p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className={styles.actions}>
          <Link href="#work" className={styles.primaryAction}>
            <BriefcaseBusiness size={15} aria-hidden="true" />
            View Case Studies
          </Link>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              className={styles.secondaryAction}
              download
            >
              <FileDown size={15} aria-hidden="true" />
              Download Resume
            </a>
          ) : (
            <button
              type="button"
              className={styles.secondaryAction}
              disabled
              aria-describedby="resume-status"
            >
              <FileDown size={15} aria-hidden="true" />
              Download Resume
            </button>
          )}
        </div>
        {!profile.resumeUrl && (
          <p id="resume-status" className="sr-only">
            Resume coming soon
          </p>
        )}

        <dl className={styles.metrics} aria-label="Experience at a glance">
          {profile.metrics.map(({ value, label }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <Link href="#work" className={styles.scrollCue}>
          Scroll to explore
          <ArrowDown size={15} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
