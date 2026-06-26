import styles from "./Loader.module.css";

export function Loader({ className }: { className?: string }) {
	return <span className={`${styles.dot} ${className ?? ""}`} />;
}
