import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { builds } from "@/content/builds";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return Object.keys(builds).map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const build = builds[slug];
  if (!project || !build) notFound();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">← back</Link>
        <h1>{project.name}</h1>
      </header>
      <pre className={styles.readme}>{build.readme}</pre>
      <ul className={styles.links}>
        {build.links.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.shots}>
        {build.shots.map((shot) => (
          <a
            key={shot.file}
            href={`/${slug}/${shot.file}`}
            target="_blank"
            style={{ "--ratio": shot.width / shot.height } as CSSProperties}
          >
            <Image
              src={`/${slug}/${shot.file}`}
              width={shot.width}
              height={shot.height}
              alt={shot.alt}
              sizes={
                build.shots.length === 1
                  ? "100vw"
                  : "(max-width: 640px) 100vw, 33vw"
              }
            />
          </a>
        ))}
      </div>
    </main>
  );
}
