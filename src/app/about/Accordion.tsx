"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import styles from "./Accordion.module.css";

export interface AccordionSection {
  title: string;
  content: ReactNode;
  titleClassName?: string;
}

interface AccordionProps {
  sections: AccordionSection[];
  defaultOpenIndex?: number;
}

export function Accordion({ sections, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set([defaultOpenIndex]),
  );

  function toggle(index: number) {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className={styles.accordion}>
      {sections.map((section, index) => {
        const isOpen = openIndices.has(index);
        return (
          <div
            key={section.title}
            className={`${styles.section} ${isOpen ? styles.open : ""}`}
          >
            <button
              type="button"
              className={styles.header}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span
                className={`${styles.title} ${section.titleClassName ?? ""}`}
              >
                {section.title}
              </span>
            </button>
            <div className={styles.body} aria-hidden={!isOpen}>
              <div className={styles.bodyInner}>{section.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
