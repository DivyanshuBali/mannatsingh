"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";

export function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <Link href="/logs">logs</Link>
      <Link href="/artefacts">artefacts</Link>
      <Link href="/about">about</Link>
    </nav>
  );
}
