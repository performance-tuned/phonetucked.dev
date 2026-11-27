import { builds } from "@/content/builds";
import { galleries } from "@/content/galleries";
import Kinds from "./kinds";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        index of builds by <span className={styles.name}>phonetucked</span>,
        engineer
      </h1>
      <Kinds pages={[...Object.keys(builds), ...Object.keys(galleries)]} />
      <footer className={styles.footer}>
        <a href="mailto:one@phonetucked.dev">one@phonetucked.dev</a>
        <span className={styles.dates}>
          <span>pub 2025 - 06 - 09</span>
          <span>upd 2026 - 11 - 27</span>
        </span>
      </footer>
    </main>
  );
}
