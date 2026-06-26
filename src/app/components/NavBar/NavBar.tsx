"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./NavBar.module.css";

interface NavBarProps {
  fullWidth?: boolean;
}

const HOVER_VIDEO_SRC =
  "https://res.cloudinary.com/drcns5wjs/video/upload/f_auto,q_auto,vc_auto/v1777708687/mannatsingh_compressed_hixl3a.mp4";

const HOVER_VIDEO_POSTER =
  "https://res.cloudinary.com/drcns5wjs/video/upload/so_1200,f_auto,q_auto/v1777708256/mannatsingh_compressed_wvmitr.jpg";

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void) => number;
  cancelIdleCallback?: (id: number) => void;
};

export default function NavBar({ fullWidth = false }: NavBarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldPreload, setShouldPreload] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMobile && isHomePage) {
      setShouldPreload(true);
    }
  }, [isMobile, isHomePage]);

  useEffect(() => {
    if (!isHomePage) return;

    const prefetch = () => {
      const img = new Image();
      img.src = HOVER_VIDEO_POSTER;
    };

    const win = window as IdleWindow;
    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(prefetch);
      return () => win.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(prefetch, 1);
    return () => window.clearTimeout(id);
  }, [isHomePage]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isHovering || (isMobile && isHomePage && isReady)) {
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isHovering, isMobile, isHomePage, isReady]);

  const handleLogoEnter = () => {
    if (!isHomePage) return;
    setShouldPreload(true);
    setIsHovering(true);
  };

  const handleLogoLeave = () => {
    if (!isHomePage) return;
    setIsHovering(false);
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${fullWidth ? styles.fullWidth : ""}`}
        onPointerEnter={() => isHomePage && setShouldPreload(true)}
      >
        <ul>
          <li
            className={styles.logoItem}
            onPointerEnter={handleLogoEnter}
            onPointerLeave={handleLogoLeave}
            onFocus={handleLogoEnter}
            onBlur={handleLogoLeave}
          >
            <Link href="/">
              mannat singh<sup>TM</sup>
            </Link>
          </li>
          {!fullWidth && <div className={styles.divider} />}
          <li>
            <Link href="/logs_v2">logs</Link>
          </li>
          <li>
            <Link href="/artefacts">artefacts</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>

      {portalTarget &&
        isHomePage &&
        shouldPreload &&
        createPortal(
          <video
            ref={videoRef}
            className={[
              styles.hoverVideo,
              isMobile ? styles.mobileVideo : "",
              (isHovering || isMobile) && isReady ? styles.hoverVideoReady : "",
            ]
              .filter(Boolean)
              .join(" ")}
            src={HOVER_VIDEO_SRC}
            poster={HOVER_VIDEO_POSTER}
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setIsReady(true)}
          />,
          portalTarget,
        )}
    </>
  );
}
