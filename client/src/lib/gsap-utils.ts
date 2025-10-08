import { useEffect } from "react";
import type { RefObject } from "react";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

let gsapLoader: Promise<void> | null = null;

const ensureGSAP = async () => {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gsap && window.ScrollTrigger) {
    return;
  }

  if (!gsapLoader) {
    gsapLoader = (async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsapInstance = gsapModule.gsap ?? gsapModule.default;
      const scrollTriggerInstance =
        scrollTriggerModule.ScrollTrigger ?? scrollTriggerModule.default;

      if (!gsapInstance || !scrollTriggerInstance) {
        throw new Error("Unable to load GSAP or ScrollTrigger modules");
      }

      gsapInstance.registerPlugin(scrollTriggerInstance);
      window.gsap = gsapInstance;
      window.ScrollTrigger = scrollTriggerInstance;
    })();
  }

  return gsapLoader;
};

export function useGSAP(
  callback: () => void | (() => void),
  dependencies: any[] = []
) {
  useEffect(() => {
    let cancelled = false;
    let cleanup: void | (() => void);

    ensureGSAP()
      ?.then(() => {
        if (!cancelled && window.gsap && window.ScrollTrigger) {
          cleanup = callback();
          window.ScrollTrigger.refresh?.();
        }
      })
      .catch((error) => {
        console.error("Failed to initialise GSAP", error);
      });

    return () => {
      cancelled = true;
      if (typeof cleanup === "function") {
        cleanup();
      }
    };
  }, dependencies);
}

export function useScrollTrigger(
  ref: RefObject<HTMLElement>,
  animation: any,
  options: any = {}
) {
  useEffect(() => {
    let cancelled = false;
    let trigger: any;

    ensureGSAP()
      ?.then(() => {
        if (cancelled || !ref.current || !window.ScrollTrigger) {
          return;
        }

        trigger = window.ScrollTrigger.create({
          trigger: ref.current,
          ...options,
          animation,
        });
      })
      .catch((error) => {
        console.error("Failed to initialise ScrollTrigger", error);
      });

    return () => {
      cancelled = true;
      if (trigger) {
        trigger.kill();
      }
    };
  }, [ref, animation, options]);
}

export const checkReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
