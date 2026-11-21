import Link from "next/link";
import { projects } from "@/content/projects";
import styles from "./kinds.module.css";

export default function Kinds({ pages }: { pages: string[] }) {
  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug}>
          {project.external ? (
            <a href={project.external.url} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          ) : pages.includes(project.slug) ? (
            <Link href={`/${project.slug}`}>{project.name}</Link>
          ) : (
            project.name
          )}
        </li>
      ))}
    </ul>
  );
}
