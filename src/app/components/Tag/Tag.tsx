import type { Tag as TagType } from "@/_utils/types";
import styles from "./Tag.module.css";

export function Tag({ tag }: { tag: TagType }) {
	return <span className={styles.tag}>{tag.name}</span>;
}
