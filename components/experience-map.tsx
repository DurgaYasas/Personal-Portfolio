"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveHorizontal, X } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import type { ExperienceCountry, ExperienceProject } from "@/data/experience";
import styles from "./my-experience.module.css";

function position(country: ExperienceCountry) {
  return {
    x: ((country.longitude + 180) / 360) * 1000,
    y: ((90 - country.latitude) / 180) * 500,
  };
}

function ProjectLogo({ project }: { project: ExperienceProject }) {
  return (
    <span className={styles.projectLogo}>
      {project.logo ? (
        <Image
          src={project.logo.src}
          alt=""
          width={72}
          height={48}
        />
      ) : (
        <span>{project.brand}</span>
      )}
    </span>
  );
}

export function ExperienceMap({
  countries,
  children,
}: {
  countries: ExperienceCountry[];
  children: ReactNode;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const popupTitle = useRef<HTMLHeadingElement>(null);
  const pins = useRef(new Map<string, HTMLButtonElement>());
  const id = useId();
  const popupId = `${id}-projects`;
  const titleId = `${id}-country`;
  const helpId = `${id}-help`;
  const selected = countries.find((country) => country.id === selectedId);
  const mapCenter = selected ?? countries[0];

  // Small screens can pan the map. Keep the chosen hotspot in view without
  // scrolling the page or changing the server-rendered initial state.
  useEffect(() => {
    const frame = viewport.current;
    const map = stage.current;
    if (!frame || !map || !mapCenter) return;
    const pan = () => {
      const { x } = position(mapCenter);
      frame.scrollTo({
        left: (x / 1000) * map.clientWidth - frame.clientWidth / 2,
        behavior: "instant",
      });
    };
    pan();
    const observer = new ResizeObserver(pan);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [mapCenter]);

  useEffect(() => {
    if (selectedId) popupTitle.current?.focus({ preventScroll: true });
  }, [selectedId]);

  function closeDetails() {
    if (selectedId) pins.current.get(selectedId)?.focus({ preventScroll: true });
    setSelectedId(null);
  }

  function toggleCountry(countryId: string) {
    setSelectedId((current) => (current === countryId ? null : countryId));
  }

  function selectOutline(event: MouseEvent<HTMLDivElement>) {
    const iso = (event.target as Element).closest<SVGElement>(
      "[data-map-country]",
    )?.dataset.mapCountry;
    const country = countries.find((country) => country.iso === iso);
    if (country) toggleCountry(country.id);
  }

  return (
    <div
      className={styles.explorer}
      data-selected-country={selectedId ?? undefined}
      onKeyDown={(event) => {
        if (event.key === "Escape" && selectedId) {
          event.preventDefault();
          closeDetails();
        }
      }}
    >
      <div
        ref={viewport}
        className={styles.mapViewport}
        role="region"
        aria-label="Interactive world map"
        aria-describedby={helpId}
        tabIndex={0}
      >
        <div
          ref={stage}
          className={styles.mapStage}
          onClick={selectOutline}
        >
          {children}
          <div role="group" aria-label="Countries on the world map">
            {countries.map((country) => {
              const { x, y } = position(country);
              const active = selectedId === country.id;
              return (
                <button
                  key={country.id}
                  ref={(button) => {
                    if (button) pins.current.set(country.id, button);
                    else pins.current.delete(country.id);
                  }}
                  type="button"
                  className={`${styles.mapPin} ${styles[country.labelPosition]}`}
                  data-country={country.id}
                  data-active={active}
                  style={
                    {
                      "--pin-x": `${x / 10}%`,
                      "--pin-y": `${(y / 440) * 100}%`,
                    } as CSSProperties
                  }
                  aria-label={`${country.name} — ${country.projects.length ? country.projects.map((project) => project.brand).join(", ") : "project details coming soon"}`}
                  aria-expanded={active}
                  aria-haspopup="dialog"
                  aria-controls={active ? popupId : undefined}
                  onClick={() => toggleCountry(country.id)}
                >
                  <span className={styles.pinRing} aria-hidden="true">
                    <span />
                  </span>
                  <span className={styles.pinLabel} aria-hidden="true">
                    {country.shortName}
                  </span>
                  {country.projects.length > 0 && (
                    <span className={styles.logoRail} aria-hidden="true">
                      {country.projects.map((project) => (
                        <ProjectLogo key={project.id} project={project} />
                      ))}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <p id={helpId} className={styles.mapHelp}>
        <MoveHorizontal size={13} aria-hidden="true" />
        Pan to explore · Click or tap a hotspot
      </p>
      {selected && (
        <section
          id={popupId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className={styles.projectPopup}
          key={selected.id}
        >
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close project details"
            onClick={closeDetails}
          >
            <X size={17} aria-hidden="true" />
          </button>
          <p className={styles.popupEyebrow}>PROJECTS & CONTRIBUTIONS</p>
          <h3 id={titleId} ref={popupTitle} tabIndex={-1}>
            {selected.name}
          </h3>
          {selected.projects.length > 0 ? (
            <ul className={styles.projectList}>
              {selected.projects.map((project) => (
                <li key={project.id} className={styles.project}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  {project.href && (
                    <Link href={project.href} className={styles.projectLink}>
                      View case study{" "}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Project details coming soon.</p>
          )}
        </section>
      )}
    </div>
  );
}
