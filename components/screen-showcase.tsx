"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { CaseStudyImage, ScreenShowcasePresentation } from "@/data/case-studies/types";
import styles from "./screen-showcase.module.css";

type Panel = ScreenShowcasePresentation["panels"][number];

function ShowcasePanel({ panel, image, index }: { panel: Panel; image: CaseStudyImage; index: number }) {
  const { crop } = panel;
  const ref = useRef<HTMLDivElement>(null);
  const [connectors, setConnectors] = useState<{ path: string; x: number; y: number }[]>([]);
  useEffect(() => {
    const root = ref.current;
    if (!root || !panel.notes?.length) return;
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = root.getBoundingClientRect();
        const visual = root.querySelector("[data-frame]")!.getBoundingClientRect();
        const screen = root.querySelector("[data-screen-viewport]")!.getBoundingClientRect();
        const notes = [...root.querySelectorAll("[data-screen-note]")];
        setConnectors(notes.flatMap((note, i) => {
          const target = note.getBoundingClientRect();
          if (target.left < visual.right + 20) return [];
          const x = visual.right - bounds.left + 4;
          const y = screen.top - bounds.top + screen.height * (panel.notes![i].anchor ?? (i + 1) / (notes.length + 1));
          const endX = target.left - bounds.left;
          const endY = target.top - bounds.top + 26;
          const curve = (endX - x) * 0.55;
          return [{ x, y, path: `M${x} ${y} C${x + curve} ${y}, ${endX - curve} ${endY}, ${endX} ${endY}` }];
        }));
      });
    });
    observer.observe(root);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [panel]);
  return (
    <div ref={ref} className={`${styles.panel} ${panel.notes?.length ? styles.annotated : ""}`} data-screen-panel={panel.id}>
      <div className={styles.visual}>
        <div className={panel.frame === "phone" ? styles.phone : styles.component} data-frame={panel.frame}>
          {panel.frame === "phone" && <span className={styles.speaker} aria-hidden="true" />}
          <div className={styles.viewport} data-screen-viewport style={{ aspectRatio: `${crop.width} / ${crop.height}` }}>
            <Image
              className={styles.source}
              src={image.src}
              alt={`PickMe ${panel.title.toLowerCase()} ${panel.frame === "phone" ? "screen" : "component"}`}
              width={image.width}
              height={image.height}
              sizes="(max-width: 760px) 1200px, 1920px"
              style={{
                width: `${image.width / crop.width * 100}%`,
                left: `${-crop.x / crop.width * 100}%`,
                top: `${-crop.y / crop.height * 100}%`,
              }}
            />
            {panel.annotationMasks?.map((mask, i) => (
              <span key={i} aria-hidden="true" className={styles.annotationMask} style={{
                left: `${(mask.x - crop.x) / crop.width * 100}%`,
                top: `${(mask.y - crop.y) / crop.height * 100}%`,
                width: `${mask.width / crop.width * 100}%`,
                height: `${mask.height / crop.height * 100}%`,
                backgroundColor: mask.color ?? "#fff",
              }} />
            ))}
          </div>
          {panel.frame === "phone" && <span className={styles.homeIndicator} aria-hidden="true" />}
        </div>
      </div>
      <div className={styles.caption}>
        <p className={styles.panelTitle}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{panel.title}</p>
        {panel.notes && (
          <ul className={styles.notes}>
            {panel.notes.map((note, i) => (
              <li key={note.title} data-screen-note>
                <span className={styles.noteNumber} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div><strong>{note.title}</strong><p>{note.text}</p></div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {connectors.length > 0 && <svg className={styles.noteConnectors} aria-hidden="true">{connectors.map((connector, i) => <g key={i}><path d={connector.path} /><circle cx={connector.x} cy={connector.y} r="3" /></g>)}</svg>}
    </div>
  );
}

function SequenceConnector({ label }: { label?: string }) {
  return (
    <div className={styles.sequenceConnector}>
      <span className={styles.connectorLine} aria-hidden="true" />
      <ArrowRight className={styles.horizontalArrow} size={20} aria-hidden="true" />
      <ArrowDown className={styles.verticalArrow} size={20} aria-hidden="true" />
      {label && <span className={styles.connectorLabel}>{label}</span>}
    </div>
  );
}

export function ScreenShowcase({ id, image, presentation }: { id: string; image: CaseStudyImage; presentation: ScreenShowcasePresentation }) {
  const { panels, layout = "comparison" } = presentation;
  if (layout === "branch") {
    return (
      <div className={`${styles.showcase} ${styles.branch}`} data-showcase="branch">
        <div className={styles.root}><ShowcasePanel panel={panels[0]} image={image} index={0} /></div>
        <div className={styles.branchLabel}>{presentation.connectorLabel}</div>
        <svg className={styles.branchLines} viewBox="0 0 900 68" preserveAspectRatio="none" aria-hidden="true">
          <defs><marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 1 1 L 8 5 L 1 9" /></marker></defs>
          <circle cx="450" cy="4" r="3" />
          <path d="M450 4 V20 Q450 30 440 30 H160 Q150 30 150 40 V62" markerEnd={`url(#${id}-arrow)`} />
          <path d="M450 4 V62" markerEnd={`url(#${id}-arrow)`} />
          <path d="M450 4 V20 Q450 30 460 30 H740 Q750 30 750 40 V62" markerEnd={`url(#${id}-arrow)`} />
        </svg>
        <div className={`${styles.panelGrid} ${styles.threeColumns}`}>
          {panels.slice(1).map((panel, i) => (
            <div key={panel.id} className={styles.branchTarget}>
              <div className={styles.mobileBranch}><ArrowDown size={16} aria-hidden="true" /><span>From search suggestions</span></div>
              <ShowcasePanel panel={panel} image={image} index={i + 1} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.showcase} ${layout === "detail" ? styles.detail : ""}`} data-showcase={layout}>
      <div className={`${styles.panelGrid} ${layout === "sequence" ? styles.sequence : ""} ${panels.length === 3 ? styles.threeColumns : ""}`}>
        {panels.map((panel, i) => (
          <div key={panel.id} className={styles.panelSlot}>
            <ShowcasePanel panel={panel} image={image} index={i} />
            {layout === "sequence" && i < panels.length - 1 && <SequenceConnector label={presentation.connectorLabel} />}
          </div>
        ))}
      </div>
    </div>
  );
}
