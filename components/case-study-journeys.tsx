import { ArrowRight, MoveHorizontal } from "lucide-react";
import type { CSSProperties } from "react";
import type {
  JourneyReaction,
  UserFlowBlock,
  UserJourneyBlock,
} from "@/data/case-studies/types";
import styles from "./case-study-journeys.module.css";

const reactions: Record<JourneyReaction, { label: string; y: number }> = {
  smile: { label: "Smiling", y: 64 },
  neutral: { label: "Neutral", y: 112 },
  frown: { label: "Frowning", y: 160 },
  surprised: { label: "Open mouth", y: 208 },
};

function ReactionFace({ reaction }: { reaction: JourneyReaction }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="8.5" cy="9" r="0.8" className={styles.eye} />
      <circle cx="15.5" cy="9" r="0.8" className={styles.eye} />
      {reaction === "smile" && <path d="M7.5 13.5Q12 19 16.5 13.5" />}
      {reaction === "neutral" && <path d="M8 15H16" />}
      {reaction === "frown" && <path d="M7.5 16.5Q12 11 16.5 16.5" />}
      {reaction === "surprised" && <ellipse cx="12" cy="15" rx="2" ry="2.5" />}
    </svg>
  );
}

function ReactionCurve({ phases }: { phases: UserJourneyBlock["phases"] }) {
  const description = phases
    .map((phase) => `${phase.title}: ${reactions[phase.reaction].label}`)
    .join("; ");
  const points = phases
    .map((phase, index) => `${((index + 0.5) / phases.length) * 1000},${reactions[phase.reaction].y}`)
    .join(" ");
  return (
    <div className={styles.reactionChart} role="img" aria-label={description}>
      {/* Only the plot stretches; the face markers retain their own square size. */}
      <svg
        viewBox="0 0 1000 270"
        preserveAspectRatio="none"
        className={styles.reactionPlot}
        aria-hidden="true"
      >
        {[64, 112, 160, 208].map((y) => (
          <line key={y} x1="0" y1={y} x2="1000" y2={y} className={styles.guide} />
        ))}
        <polyline points={points} className={styles.curve} />
      </svg>
      {phases.map((phase, index) => (
        <span
          key={phase.id}
          className={styles.reactionMarker}
          style={{
            left: `${((index + 0.5) / phases.length) * 100}%`,
            top: reactions[phase.reaction].y,
          }}
          aria-hidden="true"
        >
          <ReactionFace reaction={phase.reaction} />
          <span className={styles.reactionLabel}>{reactions[phase.reaction].label}</span>
        </span>
      ))}
    </div>
  );
}

export function UserJourney({
  block,
  headingLevel = 3,
}: {
  block: UserJourneyBlock;
  headingLevel?: 3 | 4;
}) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  const rows = [
    { key: "activity", title: "Activities" },
    { key: "thought", title: "User thinks" },
  ] as const;
  return (
    <figure id={block.id} className={styles.journey}>
      <figcaption>
        <Heading id={`${block.id}-title`} className={styles.caption}>
          {block.caption}
        </Heading>
      </figcaption>
      <p id={`${block.id}-hint`} className={styles.hint}>
        <MoveHorizontal size={14} aria-hidden="true" />
        Scroll horizontally when needed to follow every phase.
      </p>
      <div
        className={styles.journeyScroll}
        role="region"
        aria-labelledby={`${block.id}-title`}
        aria-describedby={`${block.id}-hint`}
        tabIndex={0}
      >
        <table
          className={styles.journeyTable}
          style={{ "--phase-count": block.phases.length } as CSSProperties}
        >
          <caption className="sr-only">
            {block.caption}: phases, activities, user thoughts, reactions and opportunities
          </caption>
          <colgroup>
            <col className={styles.rowLabelColumn} />
            {block.phases.map((phase) => <col key={phase.id} />)}
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Phases</th>
              {block.phases.map((phase, index) => (
                <th key={phase.id} scope="col" id={`${block.id}-${phase.id}`}>
                  <span className={styles.phaseNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {phase.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className={row.key === "activity" ? styles.activities : undefined}>
                <th scope="row">{row.title}</th>
                {block.phases.map((phase) => (
                  <td key={phase.id}><p>{phase[row.key]}</p></td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row">Reactions</th>
              <td colSpan={block.phases.length} className={styles.reactionCell}>
                <ReactionCurve phases={block.phases} />
              </td>
            </tr>
            <tr className={styles.opportunities}>
              <th scope="row">Opportunities</th>
              {block.phases.map((phase) => (
                <td key={phase.id}><p>{phase.opportunity}</p></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </figure>
  );
}

export function UserFlow({
  block,
  headingLevel = 3,
}: {
  block: UserFlowBlock;
  headingLevel?: 3 | 4;
}) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  const nodesById = new Map(block.nodes.map((node) => [node.id, node]));
  return (
    <figure id={block.id} className={styles.flow}>
      <figcaption>
        <Heading id={`${block.id}-title`} className={styles.caption}>
          {block.caption}
        </Heading>
      </figcaption>
      <div className={styles.flowCanvas} role="group" aria-labelledby={`${block.id}-title`}>
        <svg
          viewBox="0 0 1000 950"
          className={styles.flowConnectors}
          aria-hidden="true"
        >
          <defs>
            <marker
              id={`${block.id}-arrow`}
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M1 1L7 4L1 7" className={styles.arrowHead} />
            </marker>
          </defs>
          {block.edges.map((edge) => (
            <polyline
              key={`${edge.from}-${edge.to}`}
              data-flow-from={edge.from}
              data-flow-to={edge.to}
              points={edge.points.map((point) => point.join(",")).join(" ")}
              markerEnd={`url(#${block.id}-arrow)`}
              className={styles.connector}
            />
          ))}
        </svg>
        <ol className={styles.flowNodes}>
          {block.nodes.map((node) => {
            const next = block.edges
              .filter((edge) => edge.from === node.id)
              .map((edge) => nodesById.get(edge.to))
              .filter((target) => target !== undefined);
            return (
              <li
                key={node.id}
                id={`${block.id}-${node.id}`}
                data-flow-node={node.id}
                data-kind={node.kind}
                className={styles.flowNode}
                tabIndex={-1}
                style={{
                  "--node-x": `${node.x / 10}%`,
                  "--node-y": `${(node.y / 950) * 100}%`,
                  "--node-width": `${node.width / 10}%`,
                } as CSSProperties}
              >
                <h4 className={styles.nodeTitle}>{node.title}</h4>
                {node.details && (
                  <ul className={styles.nodeDetails}>
                    {node.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
                <p className={styles.flowNextText}>
                  {next.length ? `Next: ${next.map((target) => target.title).join(" or ")}.` : "End of this branch."}
                </p>
                <div className={styles.flowNextLinks}>
                  {next.length ? (
                    <>
                      <p>Next</p>
                      <ul>
                        {next.map((target) => (
                          <li key={target.id}>
                            <a href={`#${block.id}-${target.id}`}>
                              {target.title}<ArrowRight size={14} aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : <p>End of this branch.</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}
