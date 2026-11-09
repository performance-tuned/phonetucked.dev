import Kinds from "./kinds";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        index of builds & galleries by{" "}
        <span className={styles.name}>phonetucked</span>, engineer
      </h1>
      <Kinds />
      <footer className={styles.footer}>
        <a href="mailto:one@phonetucked.dev">one@phonetucked.dev</a>
        <span>macro economic protocols</span>
        <span className={styles.dates}>
          <span>pub 2025 - 06 - 09</span>
          <span>upd 2026 - 10 - 26</span>
        </span>
      </footer>
    </main>
  );
}
