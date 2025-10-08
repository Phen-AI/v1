import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import { services } from "@/lib/content";
import NotFound from "@/pages/not-found";
import { useGSAP } from "@/lib/gsap-utils";

export default function ServiceDetail() {
  const [, params] = useRoute("/technology/services/:slug");
  const service = services.find((s) => s.slug === params?.slug);

  useGSAP(() => {
    if (!window.gsap) return;

    window.gsap.from(".process-step", {
      opacity: 0,
      x: -50,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process-step",
        start: "top 80%",
      },
    });
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Services", href: "/technology" },
              { label: service.title },
            ]}
          />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-12 h-12 text-primary"
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
              <div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground">{service.summary}</p>
              </div>
            </div>
          </motion.div>

          {/* What's Included */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 glass rounded-xl p-6"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Key Capabilities */}
          {service.keyCapabilities.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-8">Key Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.keyCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 glass rounded-xl p-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    </div>
                    <p className="text-muted-foreground">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">Our Process</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className="process-step relative pl-0 md:pl-20"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white hidden md:flex">
                      {index + 1}
                    </div>
                    <div className="glass-strong rounded-xl p-8 hover:bg-white/10 transition-colors">
                      <h3 className="text-2xl font-semibold mb-3">{step.step}</h3>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-8">Deliverables</h2>
            <div className="glass-strong rounded-xl p-8">
              <ul className="space-y-4">
                {service.deliverables.map((deliverable, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{deliverable}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tools & Technologies */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-8">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-4">
              {service.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 glass-strong rounded-lg font-mono text-sm"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Deployment Options */}
          {service.deploymentOptions && (
            <section className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-6">Deployment Options</h2>
              <div className="glass-strong rounded-xl p-8 text-lg text-muted-foreground leading-relaxed">
                {service.deploymentOptions}
              </div>
            </section>
          )}

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how this service can transform your business operations and
              accelerate your goals.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
