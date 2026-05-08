"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ArtefactsItem } from "../archives";
import styles from "./page.module.css";

const SWIPE_THRESHOLD = 50;

export function ArtefactDetail({ item }: { item: ArtefactsItem }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const touchStartX = useRef(0);
  const hasPrev = imageIndex > 0;
  const hasNext = imageIndex < item.images.length - 1;

  function navigate(next: number) {
    setImageLoading(true);
    setImageIndex(next);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > SWIPE_THRESHOLD && hasNext) {
      navigate(imageIndex + 1);
    } else if (delta < -SWIPE_THRESHOLD && hasPrev) {
      navigate(imageIndex - 1);
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.imageNav}>
        <button
          type="button"
          className={styles.navButton}
          disabled={!hasPrev}
          onClick={() => navigate(imageIndex - 1)}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={styles.imageFrame}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {imageLoading && <div className={styles.imageSkeleton} />}
          <Image
            key={item.images[imageIndex]}
            src={item.images[imageIndex]}
            alt={item.title}
            fill
            className={`${styles.artefactImage} ${imageLoading ? styles.artefactImageLoading : ""}`}
            onLoad={() => setImageLoading(false)}
          />
        </div>

        <button
          type="button"
          className={styles.navButton}
          disabled={!hasNext}
          onClick={() => setImageIndex((i) => i + 1)}
          aria-label="Next image"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {item.images.length > 1 && (
        <div className={styles.dots}>
          {item.images.map((_, i) => (
            <span
              key={item.images[i]}
              className={`${styles.dot} ${i === imageIndex ? styles.dotActive : ""}`}
            />
          ))}
        </div>
      )}

      <div className={styles.divider} />

      <div className={styles.infoWithDivider}>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <div>
              <div className={styles.titleRow}>
                <span>{item.code.split("-")[0]?.trim()}</span>
                <div className={styles.titleDash} />
                <span>{item.code.split("-")[1]?.trim()}</span>
              </div>
              <div className={styles.details}>
                <p>{item.title}</p>
                <p>{item.year}</p>
              </div>
            </div>

            <div className={styles.descriptionAndTags}>
              <div>
                {item.description.length > 0
                  ? item.description.map((description) => (
                      <p key={description} className={styles.description}>
                        {description}
                      </p>
                    ))
                  : null}
              </div>
              {item.tags.length > 0 && (
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag.id} className={styles.tag}>
                      {tag.name}
                    </span>
                  ))}
                  <a
                    href={`mailto:mannat@misaal.co?subject=${item.code} - ${item.title.toUpperCase()}`}
                  >
                    <span className={styles.enquireTag}>enquire</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
