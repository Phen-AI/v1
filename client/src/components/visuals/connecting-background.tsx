import { useEffect, useMemo, useState, useId } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type Props = {
  className?: string;
  id?: string; // ✅ new
  // ... (keep your other optional tuning props if you added them)
};

export default function ConnectingBackground({ className = "", id }: Props) {
  const autoId = useId();               // ✅ unique per mount
  const canvasId = id ?? `particles-${autoId}`;

  const [isReduced, setIsReduced] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateRM = () => setIsReduced(mql.matches);
    updateRM();
    mql.addEventListener?.("change", updateRM);

    const checkLight = () =>
      document.documentElement.classList.contains("light") ||
      document.body.classList.contains("light");

    const updateTheme = () => setIsLight(checkLight());
    updateTheme();

    const obs = new MutationObserver(updateTheme);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mql.removeEventListener?.("change", updateRM);
      obs.disconnect();
    };
  }, []);

  const color = isLight ? "#0f172a" : "#4ade80";
  const linkColor = isLight ? "#0ea5e9" : "#4ade80";

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: color },
        links: { enable: true, distance: 140, color: linkColor, opacity: 0.25, width: 1 },
        move: { enable: !isReduced, speed: 0.7, outModes: { default: "bounce" } },
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: { onHover: { enable: !isReduced, mode: "grab" }, resize: true },
        modes: { grab: { distance: 130, links: { opacity: 0.4 } } },
      },
    }),
    [color, linkColor, isReduced]
  );

  if (!ready) return null;

  return (
    <Particles
      id={canvasId}                      // ✅ unique id per instance
      className={`pointer-events-none ${className}`}
      options={options as any}
    />
  );
}
