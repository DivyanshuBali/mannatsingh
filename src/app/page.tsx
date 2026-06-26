import * as motion from "motion/react-client";
import { BottomNav } from "./components/NavBar/BottomNav";
import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      className={styles.mainContainer}
    >
      <NavBar />
      <BottomNav />
    </motion.main>
  );
}
