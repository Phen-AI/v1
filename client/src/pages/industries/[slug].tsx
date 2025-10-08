import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import { industries, technologies, services } from "@/lib/content";
import NotFound from "@/pages/not-found";
import { useGSAP } from "@/lib/gsap-utils";
import { useRef } from "react";

export default function IndustryDetail() {
  const [, params] = useRoute("/industries/:slug");
  const industry = industries.find((i) => i.slug === params?.slug);
  const metricsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!window.gsap || !metricsRef.current) return;

    const metrics = metricsRef.current.querySelectorAll(".metric-value");
    metrics.forEach((metric) => {
      const target = metric.getAttribute("data-value") || "0";
      window.gsap.to(metric, {
        innerHTML: target,
        duration: 2,
        scrollTrigger: {
          trigger: metric,
          start: "top 80%",
        },
        snap: { innerHTML: 1 },
      });
    });
  }, [industry]);

  if (!industry) {
    return <NotFound />;
  }

  const relatedTechs = technologies.filter((t) =>
    industry.technologies.includes(t.slug)
  );
  const relatedServices = services.filter((s) =>
    industry.services.includes(s.slug)
  );

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />

          {/* Hero Section */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-16">
            <img
              src={industry.heroImage}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/85 to-transparent"></div>

            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-6xl font-serif font-bold mb-4 text-gray-900 dark:text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]"
              >
                {industry.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-gray-100/90 dark:text-gray-50/95"
              >
                {industry.tagline}
              </motion.p>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Overview</h2>
              {industry.overview.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-gray-800 dark:text-gray-200 leading-relaxed${
                    index > 0 ? " mt-6" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">Key Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {industry.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-gray-800 dark:text-gray-200">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">Our Approach</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              
              <div className="space-y-8">
                {industry.approach.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-0 md:pl-20"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass-strong flex items-center justify-center text-2xl font-bold text-primary hidden md:flex">
                      {index + 1}
                    </div>
                    <div className="glass-strong rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-3">{step.step}</h3>
                      <p className="text-gray-800 dark:text-gray-200">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="mb-20" ref={metricsRef}>
            <div className="glass-strong rounded-2xl p-12">
              <h2 className="text-3xl font-serif font-bold mb-10 text-center">
                Proven Results
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {industry.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div
                      className="metric-value text-5xl font-bold text-primary mb-2"
                      data-value={metric.value}
                    >
                      0
                    </div>
                    <div className="text-lg text-gray-800 dark:text-gray-200">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Technologies & Services */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">
              Technologies & Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {relatedTechs.map((tech) => (
                    <Link key={tech.slug} href={`/technology/${tech.slug}`}>
                      <a className="px-4 py-2 glass rounded-lg hover:bg-primary/20 transition-colors border border-border">
                        {tech.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Related Services</h3>
                <div className="flex flex-wrap gap-3">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/technology/services/${service.slug}`}
                    >
                      <a className="px-4 py-2 glass rounded-lg hover:bg-secondary/20 transition-colors border border-border">
                        {service.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Transform Your {industry.title} Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive measurable results for your
              organization.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105">
                Discuss Your Use Case
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
