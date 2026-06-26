import styles from "./EnquireTag.module.css";

export function EnquireTag({ code, title }: { code: string; title: string }) {
	return (
		<a href={`mailto:mannat@misaal.co?subject=${code} - ${title.toUpperCase()}`}>
			<span className={styles.enquireTag}>enquire</span>
		</a>
	);
}
