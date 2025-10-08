import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { industries } from "@/lib/content";
import { useGSAP } from "@/lib/gsap-utils";

export default function IndustriesIndex() {
  useGSAP(() => {
    if (!window.gsap || !window.ScrollTrigger) {
      return;
    }

    const tweens: any[] = [];
    const cards = window.gsap.utils?.toArray?.(".industry-card") as
      | HTMLElement[]
      | undefined;

    if (cards?.length) {
      cards.forEach((card, index) => {
        const tween = window.gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
            onComplete: () =>
              window.gsap.set(card, { clearProps: "opacity,transform" }),
          }
        );

        tweens.push(tween);
      });
    }

    return () => {
      tweens.forEach((tween) => {
        tween?.scrollTrigger?.kill?.();
        tween?.kill?.();
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 dark:text-gray-100">
              Industries We Transform
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-800 dark:text-gray-200">

              Delivering AI-powered innovation across diverse sectors, from agriculture to
              renewable energy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                <a>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="industry-card group relative h-[500px] rounded-2xl overflow-hidden glass-strong cursor-pointer"
                    data-testid={`card-industry-${industry.slug}`}
                  >
                    <img
                      src={industry.heroImage}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-background/95 dark:via-background/85 opacity-95 group-hover:opacity-100 transition-opacity"></div>

                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-300">
                      <h2 className="text-3xl font-serif font-bold mb-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)]">
                        {industry.title}
                      </h2>
                      <p className="mb-4 text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
                        {industry.tagline}
                      </p>

                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center text-primary font-semibold">
                          Explore Industry
                          <svg
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-8 h-8 text-primary"
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
                    </div>
                  </motion.div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
