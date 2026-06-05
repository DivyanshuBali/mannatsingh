"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export type LogItem = {
  id: string;
  title: string;
  description: string[];
  code: string;
  bannerImage: string;
};

export function LogsLayout({ logs }: { logs: readonly LogItem[] }) {
  const [hoveredLog, setHoveredLog] = useState<LogItem | null>(null);

  function handleMouseEnter(log: LogItem) {
    setHoveredLog(log);
  }

  function handleMouseLeave() {
    setHoveredLog(null);
  }

  return (
    <>
      <section className={styles.listContainer}>
        <ol>
          {logs.map((log) => (
            <Link key={log.code} href={`/logs/${log.id}`}>
              <li
                onMouseEnter={() => handleMouseEnter(log)}
                onMouseLeave={handleMouseLeave}
              >
                {log.title}
              </li>
            </Link>
          ))}
        </ol>
      </section>

      <section className={styles.imageContainer}>
        {hoveredLog && (
          <Image
            src={hoveredLog.bannerImage}
            alt={hoveredLog.title}
            fill
            className={styles.logImage}
          />
        )}
      </section>

      <section className={styles.mobileCards}>
        {logs.map((log) => (
          <Link
            key={log.code}
            href={`/logs/${log.id}`}
            className={styles.mobileCard}
          >
            <div className={styles.mobileCardImage}>
              <Image
                src={log.bannerImage}
                alt={log.title}
                width={800}
                height={1200}
                sizes="67vw"
                className={styles.mobileImage}
              />
            </div>
            <p className={styles.mobileCardTitle}>{log.title}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
