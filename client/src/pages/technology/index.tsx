import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AtomVisualization from "@/components/technology/atom-visualization";
import { services } from "@/lib/content";

export default function TechnologyIndex() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our Technology & Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge solutions powered by AI, immersive technologies, and enterprise
              automation.
            </p>
          </motion.div>

          {/* Services Section */}
          <section className="mb-32">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={service.slug} href={`/technology/services/${service.slug}`}>
                  <a>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="service-card group glass-strong rounded-2xl p-8 cursor-pointer h-full transition-all"
                      data-testid={`card-service-${service.slug}`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 rounded-xl ${
                          index % 2 === 0 ? "bg-primary/20" : "bg-secondary/20"
                        } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <svg
                          className={`w-10 h-10 ${
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

                      {/* Title + Description */}
                      <h3 className="text-2xl font-serif font-semibold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.summary}
                      </p>

                      {/* Learn More */}
                      <div className="flex items-center gap-2 text-primary font-semibold transition-all group-hover:gap-3">
                        Learn More
                        <svg
                          className="w-5 h-5"
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
          </section>

          {/* Technology Visualization Section */}
          <section>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our core technologies powering intelligent solutions.
              </p>
            </div>

            <AtomVisualization />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
