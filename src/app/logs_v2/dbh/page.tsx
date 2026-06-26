import styles from "../logs.module.css";

const HEYZINE_FLIPBOOK_URL = "https://heyzine.com/flip-book/aa7b8772ab.html";

export default function DBHLogPage() {
  return (
    <main className={styles.main}>
      <iframe
        title="DBH flip book"
        src={HEYZINE_FLIPBOOK_URL}
        className={styles.flipbook}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  );
}
