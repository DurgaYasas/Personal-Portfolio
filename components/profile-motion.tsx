"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import styles from "./profile-sections.module.css";

export function TimelineProgress() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 80%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <div className={styles.timelineTrack} ref={track} aria-hidden="true">
      <motion.div
        className={styles.timelineFill}
        style={{ scaleY: reduced ? 1 : progress }}
      />
    </div>
  );
}

export function SkillMeter({
  id,
  label,
  value,
  delay = 0,
}: {
  id: string;
  label: string;
  value: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <li className={styles.skill}>
      <div className={styles.skillLabel}>
        <span id={id}>{label}</span>
        <span aria-hidden="true">{value}%</span>
      </div>
      <div
        className={styles.meter}
        role="meter"
        aria-labelledby={id}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={`${value}%`}
      >
        <motion.span
          className={styles.meterFill}
          style={{ width: `${value}%` }}
          initial={reduced ? false : { scaleX: 0 }}
          animate={reduced ? { scaleX: 1 } : undefined}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -20px 0px" }}
          transition={{
            duration: reduced ? 0 : 0.8,
            delay: reduced ? 0 : delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </li>
  );
}
