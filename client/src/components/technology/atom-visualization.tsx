import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { checkReducedMotion } from "@/lib/gsap-utils";

const NUCLEUS_LOGO_SRC = new URL(
  "../../../../attached_assets/Green_logo.png",
  import.meta.url
).href;

const techData = {
  "ai-ml": {
    title: "AI & Machine Learning",
    content:
      "Advanced machine learning models and neural networks that power intelligent automation, predictive analytics, and natural language processing. Our AI solutions are designed for production environments with emphasis on accuracy, explainability, and ethical deployment.",
    link: "/technology/ai-ml",
  },
  "data-engineering": {
    title: "Data Engineering",
    content:
      "Scalable data pipelines and infrastructure that transform raw data into actionable insights. We build robust ETL processes, data lakes, and real-time streaming architectures that handle billions of events with reliability and performance.",
    link: "/technology/data-engineering",
  },
  "vr-ar": {
    title: "Virtual & Augmented Reality",
    content:
      "Immersive VR/AR experiences that revolutionize training, education, and customer engagement. From realistic simulations to interactive product visualizations, we create compelling experiences that drive real business outcomes.",
    link: "/technology/vr-ar",
  },
  "computer-vision": {
    title: "Computer Vision",
    content:
      "State-of-the-art visual recognition systems for object detection, image classification, and scene understanding. Our computer vision solutions power everything from quality control automation to advanced driver assistance systems.",
    link: "/technology/computer-vision",
  },
  "on-prem-ai": {
    title: "On-Premise AI Models",
    content:
      "Secure, on-premise AI deployments for regulated industries requiring strict data privacy and compliance. We deliver the power of cloud AI with the security of on-premise infrastructure, ensuring your sensitive data never leaves your environment.",
    link: "/technology/on-prem-ai",
  },
};

const particles = [
  { id: "ai-ml", label: "AI & ML", duration: 20, delay: 0, radius: 180 },
  { id: "data-engineering", label: "Data Engineering", duration: 25, delay: 2, radius: 220 },
  { id: "vr-ar", label: "VR/AR", duration: 30, delay: 1, radius: 260 },
  { id: "computer-vision", label: "Computer Vision", duration: 22, delay: 3, radius: 210 },
  { id: "on-prem-ai", label: "On-Prem AI", duration: 28, delay: 1.5, radius: 240 },
];

export default function AtomVisualization() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = checkReducedMotion();

  useEffect(() => {
    if (selectedTech) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }, [selectedTech]);

  const handleParticleClick = (techId: string) => {
    setSelectedTech(techId);
  };

  const handleClose = () => {
    setSelectedTech(null);
  };

  return (
    <div className="relative flex items-center justify-center" style={{ height: "600px" }}>
      {/* Nucleus - Phen AI Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-36 h-36 rounded-full glass-strong flex items-center justify-center animate-float" style={{ backgroundColor: "black" }}>
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: "#22d3a3" }}>
            <img
                   src="/images/logo gif.gif"  // <-- place your GIF in /public and use this path
                    alt="Phen AI Logo"
                    className="w-full h-full object-contain"
              />
          </div>
        </div>
      </div>

      {/* Orbiting Particles */}
      <div className="relative w-full h-full">
        {particles.map((particle, index) => {
          const baseAngle = (index * 360) / particles.length;
          const animated = !reducedMotion && !isPaused;

          const orbitAnimation = animated
            ? {
                animate: { rotate: baseAngle + 360 },
                transition: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay,
                },
              }
            : {
                animate: { rotate: baseAngle },
                transition: {},
              };

          const counterRotation = animated
            ? {
                animate: { rotate: -baseAngle - 360 },
                transition: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay,
                },
              }
            : {
                animate: { rotate: -baseAngle },
                transition: {},
              };

          return (
            <div
              key={particle.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                className="relative"
                initial={{ rotate: baseAngle }}
                {...orbitAnimation}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-y-1/2"
                  style={{ x: particle.radius }}
                  initial={{ rotate: -baseAngle }}
                  {...counterRotation}
                >
                  <button
                    onClick={() => handleParticleClick(particle.id)}
                    className="glass-strong px-6 py-3 rounded-full cursor-pointer hover:scale-110 transition-transform group focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid={`particle-${particle.id}`}
                  >
                    <span className="text-sm font-semibold whitespace-nowrap">
                      {particle.label}
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Popover Panel */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute z-20 glass-strong rounded-2xl p-6 max-w-md"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <h3 className="text-xl font-serif font-semibold mb-3">
              {techData[selectedTech as keyof typeof techData]?.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {techData[selectedTech as keyof typeof techData]?.content}
            </p>
            <a
              href={techData[selectedTech as keyof typeof techData]?.link}
              className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
              data-testid={`link-learn-more-${selectedTech}`}
            >
              Learn More
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
              data-testid="button-close-popover"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
