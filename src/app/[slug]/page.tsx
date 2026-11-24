import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { builds } from "@/content/builds";
import { galleries } from "@/content/galleries";
import { projects } from "@/content/projects";
import Gallery from "./gallery";
import styles from "./page.module.css";

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const build = builds[slug];
  const photos = galleries[slug];
  if (!project || (!build && !photos)) notFound();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">{"< back"}</Link>
        <h1>{project.name}</h1>
      </header>
      {build && (
        <>
          {build.readme && <pre className={styles.readme}>{build.readme}</pre>}
          {build.links.length > 0 && (
            <ul className={styles.links}>
              {build.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div
            className={
              build.wide ? `${styles.shots} ${styles.wide}` : styles.shots
            }
          >
            {build.shots.map((shot) => (
              <a
                key={shot.file}
                href={shot.href ?? `/${slug}/${shot.file}`}
                target="_blank"
                rel="noreferrer"
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
          {build.embed && (
            <iframe
              className={styles.embed}
              src={build.embed}
              title={project.name}
              loading="lazy"
              allowFullScreen
            />
          )}
        </>
      )}
      {photos && <Gallery slug={slug} photos={photos} />}
    </main>
  );
}
