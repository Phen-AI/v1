import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import { technologies, services } from "@/lib/content";
import NotFound from "@/pages/not-found";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TechnologyDetail() {
  const [, params] = useRoute("/technology/:slug");
  const technology = technologies.find((t) => t.slug === params?.slug);

  if (!technology) {
    return <NotFound />;
  }

  const relatedServices = services.filter((s) =>
    technology.relatedServices.includes(s.slug)
  );

  const faqs = [
    {
      question: `What makes ${technology.title} effective?`,
      answer: `${technology.title} combines state-of-the-art algorithms with proven methodologies, delivering reliable results in production environments. Our implementations prioritize accuracy, scalability, and ethical considerations.`,
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project scope and complexity. Typical projects range from 8-16 weeks for MVP deployment, with ongoing optimization and enhancement thereafter.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including initial training, documentation, ongoing maintenance, performance monitoring, and regular model updates to ensure continued effectiveness.",
    },
    {
      question: "Can this integrate with our existing systems?",
      answer: "Yes, our solutions are designed with integration in mind. We work with your existing infrastructure, APIs, and data sources to ensure seamless deployment and minimal disruption.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: "Technology", href: "/technology" },
              { label: technology.title },
            ]}
          />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={technology.icon}
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
                  {technology.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {technology.shortDescription}
                </p>
              </div>
            </div>
          </motion.div>

          {/* What It Is */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-10"
            >
              <h2 className="text-3xl font-serif font-bold mb-6">What It Is</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {technology.longDescription}
              </p>
            </motion.div>
          </section>

          {/* Applications */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">
              Where We Apply It
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technology.applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-lg">{application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((service, index) => (
                <Link key={service.slug} href={`/technology/services/${service.slug}`}>
                  <a>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer h-full"
                    >
                      <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                        <svg
                          className="w-7 h-7 text-secondary"
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
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.summary.substring(0, 100)}...
                      </p>
                      <span className="text-secondary font-medium flex items-center gap-1">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-10">
              Frequently Asked Questions
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-8"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Explore {technology.title} for Your Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how this technology can transform your operations and deliver
              measurable business value.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105">
                Talk to an Expert
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
