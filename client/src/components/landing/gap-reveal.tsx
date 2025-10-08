import { useEffect, useRef } from "react";

// Hook for GSAP with cleanup
function useGSAP(callback: () => void | (() => void), deps: any[] = []) {
  useEffect(() => {
    const cleanup = callback();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, deps);
}

const VIDEO_SRC = "/videos/GapReveal.mp4"; // client/public/videos/GapReveal.mp4

export default function GapReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // the two words that split apart
  const leftWordRef = useRef<HTMLHeadingElement>(null);
  const rightWordRef = useRef<HTMLHeadingElement>(null);

  // the media block that grows in the gap
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useGSAP(() => {
    if (
      !window.gsap ||
      !window.ScrollTrigger ||
      !sectionRef.current ||
      !leftWordRef.current ||
      !rightWordRef.current ||
      !mediaRef.current
    ) return;

    const gsap = window.gsap;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // initial states - words together, media hidden
    gsap.set(leftWordRef.current, { x: 0, opacity: 1 });
    gsap.set(rightWordRef.current, { x: 0, opacity: 1 });
    gsap.set(mediaRef.current, { width: 0, opacity: 0, scale: 0.9 });
    gsap.set(overlineRef.current, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        onEnter: () => { if (!reduce) videoRef.current?.play().catch(()=>{}); },
        onLeaveBack: () => {
          const v = videoRef.current;
          if (v) { v.pause(); try { v.currentTime = 0; } catch {} }
        },
        // markers: true,
      },
    });

    // 0.00–0.45: words split apart to edges
    tl.to(leftWordRef.current,  { x: "-35vw", ease: "power2.inOut" }, 0.0);
    tl.to(rightWordRef.current, { x: "35vw",  ease: "power2.inOut" }, 0.0);

    // 0.15–0.55: media grows in the gap with fade and scale
    tl.to(mediaRef.current, { 
      width: "85vw", 
      opacity: 1, 
      scale: 1.0,
      ease: "power2.out" 
    }, 0.15);

    // 0.35–0.50: words fade out as media takes over
    tl.to([leftWordRef.current, rightWordRef.current], { 
      opacity: 0, 
      ease: "power2.out" 
    }, 0.35);

    // 0.50–0.75: media expands to full bleed
    tl.to(mediaRef.current, { 
      width: "100vw",
      scale: 1.02,
      ease: "power2.inOut" 
    }, 0.50);

    // 0.60–1.0: overline text appears and settles
    tl.to(overlineRef.current, { 
      opacity: 1, 
      y: 0, 
      ease: "power2.out" 
    }, 0.60);

    // 0.75–1.0: final scale settle
    tl.to(mediaRef.current, { 
      scale: 1.0,
      ease: "power1.inOut" 
    }, 0.75);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-neutral-100 overflow-hidden"
      aria-label="Identity and value reveal"
    >
      {/* Words that split apart */}
      <div className="absolute inset-0 flex items-center justify-center gap-8 pointer-events-none">
        <h2
          ref={leftWordRef}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-black  tracking-tighter text-black"
          style={{ letterSpacing: '-0.02em' }}
        >
          We are
        </h2>
        <h2
          ref={rightWordRef}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-black  tracking-tighter text-black"
          style={{ letterSpacing: '-0.02em' }}
        >
          Phen AI
        </h2>
      </div>

      {/* Media that grows in the gap - centered vertically */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={mediaRef}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] aspect-[21/9] transform-gpu will-change-transform"
          style={{ width: 0 }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/25 pointer-events-none" />

          <div
            ref={overlineRef}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            <p className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight tracking-tight">
              Not just an AI company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}