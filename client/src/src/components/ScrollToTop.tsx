import { useEffect, useMemo } from "react";
import { useLocation } from "wouter";

/**
 * Robust scroll reset for SPAs using wouter:
 * - Disables browser scroll restoration
 * - Resets after route change on multiple ticks (now, next frame, after layout)
 * - Handles back/forward (popstate)
 * - Resets the *true* scroll root plus any custom containers marked with:
 *    - data-scroll-root (for a single app-wide scroll container)
 *    - data-reset-scroll (for page-level scrollable sections)
 * Skips when URL contains a #hash (anchor navigation).
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  // normalize hash presence once per render
  const hasHash = useMemo(() => location.includes("#"), [location]);

  useEffect(() => {
    // Turn off browser restoration globally
    if ("scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (hasHash) return;

    const scrollRoots: HTMLElement[] = [];

    // 1) Prefer an explicit app scroll root if present
    const appScrollRoot = document.querySelector<HTMLElement>("[data-scroll-root]");
    if (appScrollRoot) scrollRoots.push(appScrollRoot);

    // 2) Fallback to the document scrolling element
    const docRoot = document.scrollingElement as HTMLElement | null;
    if (docRoot && !scrollRoots.includes(docRoot)) scrollRoots.push(docRoot);

    // 3) Any extra containers that should also reset
    const extra = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reset-scroll]")
    );
    for (const el of extra) if (!scrollRoots.includes(el)) scrollRoots.push(el);

    const toTop = () => {
      for (const el of scrollRoots) {
        if (el === docRoot) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        } else {
          el.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      }
    };

    // Reset immediately, then after paint, then after layout settles.
    toTop();
    requestAnimationFrame(() => {
      toTop();
      requestAnimationFrame(() => toTop());
    });

    // Also reset shortly after in case images/fonts reflow
    const t1 = setTimeout(toTop, 0);
    const t2 = setTimeout(toTop, 250);

    // If the user navigates via back/forward and the browser tries to restore,
    // push it back to top (still respecting hash rule above).
    const onPop = () => {
      if (!location.includes("#")) toTop();
    };
    window.addEventListener("popstate", onPop);

    // One-time after window 'load' (images, fonts)
    const onLoad = () => toTop();
    window.addEventListener("load", onLoad, { once: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("load", onLoad);
    };
  }, [location, hasHash]);

  return null;
}