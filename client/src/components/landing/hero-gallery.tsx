import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* -------- Headline & Assets -------- */
const heroTexts = ["Phen AI", "Phenomenal AI"];

const IMAGES = [
  "/images/Hero (1).png",
  "/images/Hero (2).png",
  "/images/Hero (3).png",
  "/images/Hero (4).png",
  "/images/Hero (5).png",
  "/images/Hero (6).png",
  "/images/Hero (7).png",
  "/images/Hero (8).png",
];

declare global {
  interface Window {
    gsap?: any;
  }
}

/** Prefers-reduced-motion */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setReduced("matches" in e ? e.matches : (e as MediaQueryList).matches);
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/** 270° clockwise arc with fade-in/out windows */
function getArcState(
  t: number,
  rx: number,
  ry: number,
  depth: number
): { x: number; y: number; scale: number; opacity: number; z: number } {
  const angle = Math.PI / 4 + (3 * Math.PI * t) / 2; // 45° → 315°
  const x = rx * Math.cos(angle);
  const y = ry * Math.sin(angle);

  const scale = 1 - depth * 0.05;

  let opacity = 1;
  if (t < 0.05) opacity = 0;
  else if (t < 0.1) opacity = (t - 0.05) / 0.05;
  else if (t > 0.9) opacity = (1 - t) / 0.1;
  opacity *= 1;

  const z = -200 * depth;
  return { x, y, scale, opacity, z };
}

export default function HeroGallery() {
  const reduced = usePrefersReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);

  const [headline, setHeadline] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  // Headline auto-cycle
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setHeadline((i) => (i + 1) % heroTexts.length),
      3800
    );
    return () => clearInterval(id);
  }, [reduced]);

  // Recompute on resize
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setRefreshKey((k) => k + 1));
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage || reduced) return;

    const gsap = window.gsap;
    const tiles = Array.from(
      stage.querySelectorAll<HTMLDivElement>(".orbit-tile")
    );

    // Bigger images (↑ size) and slightly larger ellipse
    const CARD = 200;
    tiles.forEach((el) => {
      const depth = Number(el.dataset.depth || 0);
      const size = CARD + depth * 28; // was +20
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
    });

    // Responsive ellipse radii
    const vw = window.innerWidth;
    const rx = Math.max(340, Math.min(vw * 0.40, 720)); // ↑ radius
    const ry = Math.max(200, Math.min(rx * 0.40, 340));

    // Timing
    const duration = 2; // seconds per 270° path
    const PAUSE = 2;    // <-- 2s delay after each rotation

    // Prime at t=0
    tiles.forEach((el) => {
      const depth = Number(el.dataset.depth || 0);
      const start = getArcState(0, rx, ry, depth);
      el.style.left = "50%";
      el.style.top = "50%";
      el.style.opacity = String(start.opacity);
      el.style.zIndex = String(1000 - depth);
      el.style.transform = `translate(-50%, -50%) translate3d(${start.x}px, ${start.y}px, ${start.z}px) scale(${start.scale})`;
      (el.style as any).willChange = "transform, opacity";
    });

    if (gsap) {
      const timelines: any[] = [];
      tiles.forEach((el, i) => {
        const depth = Number(el.dataset.depth || 0);
        const delay = (i * duration) / tiles.length;

        const tl = gsap.timeline({
          repeat: -1,
          delay,
          repeatDelay: PAUSE, // <-- pause after each loop
          defaults: { ease: "none" },
        });

        tl.to(el, {
          duration,
          onUpdate() {
            const t = tl.progress(); // 0→1 during the active segment
            const s = getArcState(t, rx, ry, depth);
            gsap.set(el, {
              x: s.x,
              y: s.y,
              z: s.z,
              scale: s.scale,
              opacity: s.opacity,
              xPercent: -50,
              yPercent: -50,
            });
          },
        });

        timelines.push(tl);
      });

      return () => timelines.forEach((tl) => tl.kill());
    } else {
      // rAF fallback with pause handling
      let raf = 0;
      const startTS = performance.now();
      const cycle = duration + PAUSE;

      const step = (now: number) => {
        const elapsed = (now - startTS) / 1000;

        tiles.forEach((el, i) => {
          const depth = Number(el.dataset.depth || 0);
          const localOffset = (i * duration) / tiles.length;
          // phase in [0, cycle)
          let phase = (elapsed - localOffset) % cycle;
          if (phase < 0) phase += cycle;

          if (phase >= duration) {
            // In the pause window: hold at end (t=1), fully faded
            const s = getArcState(1, rx, ry, depth);
            el.style.opacity = "0";
            el.style.zIndex = String(1000 - depth);
            el.style.transform = `translate(-50%, -50%) translate3d(${s.x}px, ${s.y}px, ${s.z}px) scale(${s.scale})`;
          } else {
            // Active motion 0..duration
            const t = phase / duration;
            const s = getArcState(t, rx, ry, depth);
            el.style.opacity = String(s.opacity);
            el.style.zIndex = String(1000 - depth);
            el.style.transform = `translate(-50%, -50%) translate3d(${s.x}px, ${s.y}px, ${s.z}px) scale(${s.scale})`;
          }
        });

        raf = requestAnimationFrame(step);
      };

      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }
  }, [reduced, refreshKey]);

  const layers = [0, 1, 2]; // 0=front, 2=back

  return (
    <section className="relative w-screen max-w-none h-[74vh] md:h-[80vh] lg:h-[88vh] overflow-hidden hero-vignette">
      {/* Orbit layer */}
      <div
        key={refreshKey}
        ref={stageRef}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
      >
        {IMAGES.map((src, i) => {
          const depth = layers[i % layers.length];
          return (
            <div
              key={i}
              className="orbit-tile absolute"
              data-depth={depth}
            >
              {/* Frame removed: no wrapper, no rounded/shadow */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          );
        })}
      </div>

      {/* Centered headline + CTAs */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headline}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight"
            >
              {heroTexts[headline]}
            </motion.h1>
          </AnimatePresence>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Schedule a Consultation
            </a>
            <a
              href="/industries"
              className="rounded-full bg-white/70 px-5 py-3 font-semibold text-black/80 backdrop-blur transition-all hover:scale-105 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Pagination dots (headline only) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {heroTexts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeadline(idx)}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === headline ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
