"use client";

import Link from "next/link";
import { useState } from "react";
import type { LogItem_V2 } from "@/_utils/types";
import LogPreview from "./LogPreview";
import styles from "./LogsLayout.module.css";
import LogsMobileLayout from "./LogsMobileLayout";

export function LogsLayout({ logs }: { logs: readonly LogItem_V2[] }) {
  const [hoveredLog, setHoveredLog] = useState<LogItem_V2 | null>(null);

  function handleMouseEnter(log: LogItem_V2) {
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
            <Link
              key={log.code}
              href={`/logs_v2/${log.title.toLowerCase().split(" ").join("-")}`}
            >
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
        {hoveredLog && <LogPreview log={hoveredLog} />}
      </section>

      <LogsMobileLayout logs={logs} />
    </>
  );
}
