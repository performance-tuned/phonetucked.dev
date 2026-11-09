"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/projects";
import styles from "./kinds.module.css";

type Kind = Project["kind"];

const kinds: Kind[] = ["build", "gallery"];

export default function Kinds() {
  const [open, setOpen] = useState<Kind | null>(null);

  return (
    <nav className={styles.kinds}>
      {kinds.map((kind) => (
        <div key={kind} className={styles.column}>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open === kind}
            onClick={() => setOpen(open === kind ? null : kind)}
          >
            {kind}
          </button>
          {open === kind && (
            <ul className={styles.list}>
              {projects
                .filter((project) => project.kind === kind)
                .map((project) => (
                  <li key={project.slug}>
                    {project.external ? (
                      <a
                        href={project.external.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}
