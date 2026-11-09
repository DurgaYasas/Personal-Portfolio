"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2, MapPin, MoveHorizontal } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
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
    <div className={styles.projectLogo}>
      {project.logo ? (
        <Image
          src={project.logo.src}
          alt={project.logo.alt}
          width={72}
          height={48}
        />
      ) : (
        <span>{project.brand}</span>
      )}
    </div>
  );
}

export function ExperienceMap({
  countries,
  children,
}: {
  countries: ExperienceCountry[];
  children: ReactNode;
}) {
  const [selectedId, setSelectedId] = useState(countries[0].id);
  const viewport = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const selected =
    countries.find((country) => country.id === selectedId) ?? countries[0];

  // Keep the selected marker in view when the map pans on smaller screens.
  // Panning runs after hydration and does not alter the server markup.
  useEffect(() => {
    const frame = viewport.current;
    const map = stage.current;
    if (!frame || !map) return;
    const pan = () => {
      const { x } = position(selected);
      frame.scrollTo({
        left: (x / 1000) * map.clientWidth - frame.clientWidth / 2,
        behavior: "instant",
      });
    };
    pan();
    const observer = new ResizeObserver(pan);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [selected]);

  function selectOutline(event: PointerEvent<HTMLDivElement>) {
    // Hovering a real SVG country outline works alongside the HTML marker buttons.
    if (event.pointerType !== "mouse") return;
    const iso = (event.target as Element).closest<SVGElement>(
      "[data-map-country]",
    )?.dataset.mapCountry;
    const country = countries.find((country) => country.iso === iso);
    if (country) setSelectedId(country.id);
  }

  return (
    <div className={styles.explorer} data-selected-country={selected.id}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>
          <Globe2 size={15} aria-hidden="true" /> EXPLORE BY COUNTRY
        </span>
        <div
          className={styles.countryControls}
          role="group"
          aria-label="Choose a country"
        >
          {countries.map((country) => (
            <button
              key={country.id}
              type="button"
              aria-pressed={selectedId === country.id}
              aria-controls="experience-projects"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setSelectedId(country.id);
              }}
              onFocus={() => setSelectedId(country.id)}
              onClick={() => setSelectedId(country.id)}
            >
              <span aria-hidden="true" />
              {country.shortName}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.explorerBody}>
        <div className={styles.mapColumn}>
          <div
            ref={viewport}
            className={styles.mapViewport}
            role="region"
            aria-label="Interactive world map"
            aria-describedby="experience-map-help"
            tabIndex={0}
          >
            <div
              ref={stage}
              className={styles.mapStage}
              onPointerOver={selectOutline}
            >
              {children}
              <div role="group" aria-label="Countries on the world map">
                {countries.map((country) => {
                  const { x, y } = position(country);
                  return (
                    <button
                      key={country.id}
                      type="button"
                      className={`${styles.mapPin} ${styles[country.labelPosition]}`}
                      style={
                        {
                          "--pin-x": `${x / 10}%`,
                          "--pin-y": `${(y / 440) * 100}%`,
                        } as CSSProperties
                      }
                      aria-label={country.name}
                      aria-pressed={selectedId === country.id}
                      aria-controls="experience-projects"
                      onPointerEnter={(event) => {
                        if (event.pointerType === "mouse")
                          setSelectedId(country.id);
                      }}
                      onFocus={() => setSelectedId(country.id)}
                      onClick={() => setSelectedId(country.id)}
                    >
                      <span className={styles.pinRing} aria-hidden="true">
                        <span />
                      </span>
                      <span className={styles.pinLabel} aria-hidden="true">
                        {country.shortName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.mapFooter}>
            <span>
              <span className={styles.legendDot} /> Selected location
            </span>
            <span id="experience-map-help">
              <MoveHorizontal size={13} aria-hidden="true" /> Pan the map or
              select a country above
            </span>
          </div>
        </div>
        <section
          id="experience-projects"
          className={styles.projectsPanel}
          aria-labelledby="experience-country-name"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className={styles.panelTopline}>
            <span>SELECTED LOCATION</span>
            <MapPin size={15} aria-hidden="true" />
          </div>
          <h3 id="experience-country-name">{selected.name}</h3>
          {selected.projects.length > 0 ? (
            <ul className={styles.projectList}>
              {selected.projects.map((project) => (
                <li key={project.id} className={styles.project}>
                  <ProjectLogo project={project} />
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    {project.href && (
                      <Link href={project.href} className={styles.projectLink}>
                        View case study{" "}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Project details coming soon.</p>
          )}
          <div className={styles.panelFooter}>
            <span aria-hidden="true" /> Thoughtful design, across borders.
          </div>
        </section>
      </div>
    </div>
  );
}
