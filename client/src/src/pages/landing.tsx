import { useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroGallery from "@/components/landing/hero-gallery";
import GapReveal from "@/components/landing/gap-reveal";
import { services, industries } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ConnectingBackground from "@/components/visuals/connecting-background";

export default function Landing() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -420 : 420;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="relative">
        {/* === One shared background for Hero + Vision === */}
        <ConnectingBackground
          id="bg-hero-vision"
          className="fixed inset-0 -z-10 pointer-events-none"
        />
        {/* Optional vignette for consistent contrast */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.25)_100%)]" />

        {/* =========================
            HERO
        ========================== */}
        <section className="relative min-h-[80svh] overflow-hidden flex items-center">
          <div className="relative z-10 w-full">
            <HeroGallery />
          </div>
        </section>

        {/* =========================
            VISION
        ========================== */}
        <section className="relative py-32 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-relaxed mb-4"
            >
              We design intelligence you can trust—
              <br />
              elegant systems that deliver measurable value.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground"
            >
              Not just an AI company—your engineering partner for lasting impact.
            </motion.p>
          </div>
        </section>

        {/* =========================
            GAP REVEAL
        ========================== */}
        <GapReveal />

        {/* =========================
            SERVICES
        ========================== */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions tailored to transform your vision into reality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/technology/services/${service.slug}`}
                  className="group block"
                  data-testid={`card-service-link-${service.slug}`}
                >
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="service-card glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    data-testid={`card-service-${service.slug}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl ${
                        index % 2 === 0 ? "bg-primary/20" : "bg-secondary/20"
                      } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <svg
                        className={`w-8 h-8 ${
                          index % 2 === 0 ? "text-primary" : "text-secondary"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={service.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.summary}
                    </p>
                    <span
                      className={`inline-flex items-center ${
                        index % 2 === 0 ? "text-primary" : "text-secondary"
                      } font-medium group-hover:gap-2 transition-all`}
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
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
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            INDUSTRIES SLIDER
        ========================== */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming sectors through intelligent innovation
              </p>
            </div>

            <div className="relative">
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                style={{ scrollBehavior: "smooth" }}
              >
                {industries.map((industry) => (
                  <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                    <a>
                      <div
                        className="industry-slide min-w-[320px] sm:min-w-[400px] snap-center group cursor-pointer"
                        data-testid={`card-industry-${industry.slug}`}
                      >
                        <div className="relative h-96 rounded-2xl overflow-hidden glass-strong">
                          <img
                            src={industry.heroImage}
                            alt={industry.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t
                                       from-black/70 via-black/40 to-transparent
                                       dark:from-background/95 dark:via-background/85"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="text-2xl font-serif font-bold mb-2 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)]">
                              {industry.title}
                            </h3>
                            <p className="text-white/90 mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
                              {industry.tagline}
                            </p>
                            <span className="inline-flex items-center text-primary-foreground/90 bg-primary/70 px-3 py-1.5 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all">
                              View Industry
                              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>

              {/* Slider Controls */}
              <button
                onClick={() => scrollSlider("left")}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Previous slide"
                data-testid="button-slider-prev"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollSlider("right")}
                className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus:ring-ring"
                aria-label="Next slide"
                data-testid="button-slider-next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* =========================
            INNOVATION AREAS
        ========================== */}
        <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                Innovation Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pioneering solutions at the intersection of AI, immersive tech, and industry
                expertise
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "PEBC OSPE VR AI Prep",
                  desc: "Immersive VR training platform for pharmacy professionals preparing for board certification exams.",
                  gradient: "from-primary to-secondary",
                },
                {
                  title: "Computer-Vision Disease Detection",
                  desc: "AI-powered crop monitoring system for early disease detection and yield optimization in agriculture.",
                  gradient: "from-secondary to-primary",
                },
                {
                  title: "Confidential On-Prem Analytics",
                  desc: "Secure, on-premise AI solutions for regulated industries requiring strict data privacy compliance.",
                  gradient: "from-primary to-secondary",
                },
                {
                  title: "Predictive Supply Chain Intelligence",
                  desc: "Machine learning models that forecast demand, optimize inventory, and reduce operational costs.",
                  gradient: "from-secondary to-primary",
                },
                {
                  title: "Immersive Team Training",
                  desc: "Collaborative VR environments for enterprise training, simulations, and skill development.",
                  gradient: "from-primary to-secondary",
                },
                {
                  title: "Smart Energy Management",
                  desc: "AI-driven optimization for renewable energy grids, maximizing efficiency and reducing waste.",
                  gradient: "from-secondary to-primary",
                },
              ].map((innovation, index) => (
                <motion.div
                  key={`${innovation.title}-${index}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="innovation-card glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${innovation.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{innovation.title}</h3>
                  <p className="text-muted-foreground mb-4">{innovation.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
