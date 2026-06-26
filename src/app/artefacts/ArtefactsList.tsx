"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ArtefactsItem } from "@/_utils/types";
import styles from "./page.module.css";

export function ArtefactsList({ items }: { items: readonly ArtefactsItem[] }) {
  const [hoveredItem, setHoveredItem] = useState<ArtefactsItem | null>(null);

  function handleMouseEnter(item: ArtefactsItem) {
    setHoveredItem(item);
  }

  function handleMouseLeave() {
    setHoveredItem(null);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      className={styles.artefactsListRoot}
    >
      <div className={styles.imageContainer}>
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              key={hoveredItem.id}
              className={styles.imageWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={hoveredItem.bannerImage}
                alt={hoveredItem.title}
                fill
                className={styles.artefactsImage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.listContainer}>
        <ul>
          {items.map((item) => (
            <Link key={item.id} href={`/artefacts/${item.id}`}>
              <motion.li
                initial={{ backgroundPosition: "100% 0" }}
                whileHover={{ backgroundPosition: "0% 0" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles.mobileCards}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/artefacts/${item.id}`}
            className={styles.mobileCard}
          >
            <div className={styles.mobileCardImage}>
              <Image
                src={item.bannerImage}
                alt={item.title}
                width={800}
                height={1200}
                sizes="67vw"
                className={styles.mobileImage}
              />
            </div>
            <p className={styles.mobileCardTitle}>{item.title}</p>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
