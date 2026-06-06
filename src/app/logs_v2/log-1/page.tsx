import styles from "./page.module.css";

const HEYZINE_FLIPBOOK_URL = "https://heyzine.com/flip-book/a1a1b82a65.html";

export default function Log1Page() {
	return (
		<main className={styles.main}>
			<iframe
				title="Log 1 flip book"
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
