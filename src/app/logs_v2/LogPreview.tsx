import * as motion from "motion/react-client";
import Image from "next/image";
import type { LogItem_V2 } from "@/_utils/types";
import { Tag } from "@/components/Tag/Tag";
import styles from "./LogPreview.module.css";

function LogPreview(props: { log: LogItem_V2 }) {
  const { log } = props;

  return (
    <div className={styles.logPreview}>
      <div className={styles.topSection}>
        <motion.div
          className={styles.animatedLeftBorder}
          initial={{ height: 0 }}
          animate={{ height: "60%" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3>{log.title}</h3>

          <h5>{log.creator}</h5>
          <h5>{log.year}</h5>
        </motion.div>
      </div>

      <motion.div
        className={styles.middleSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image src={log.cover_image} alt={log.title} fill />
      </motion.div>

      <div className={styles.bottomSection}>
        <motion.div
          className={styles.animatedLeftBorder}
          initial={{ height: 0 }}
          animate={{ height: "85%" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {log.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        <div className={styles.tags}>
          {log.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogPreview;
