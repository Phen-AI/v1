import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { teamMembers } from "@/lib/content";
import { useGSAP } from "@/lib/gsap-utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function About() {
  const [selectedMember, setSelectedMember] =
    useState<typeof teamMembers[0] | null>(null);

  useGSAP(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const tweens: any[] = [];
    const timelineItems = window.gsap.utils?.toArray?.(
      ".timeline-item"
    ) as HTMLElement[] | undefined;

    if (timelineItems?.length) {
      timelineItems.forEach((item, index) => {
        const t = window.gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
            onComplete: () =>
              window.gsap.set(item, { clearProps: "opacity,transform" }),
          }
        );
        tweens.push(t);
      });
    }

    return () => {
      tweens.forEach((t) => {
        t?.scrollTrigger?.kill?.();
        t?.kill?.();
      });
    };
  }, []);

  const timeline = [
    { year: "2024", title: "Foundation", description: "Phen AI was founded with a mission to make AI accessible and practical for enterprises across industries." },
    { year: "2024", title: "First Major Client", description: "Deployed our first large-scale AI solution for agricultural crop monitoring, achieving 94% accuracy in disease detection." },
    { year: "2025", title: "VR/AR Expansion", description: "Launched immersive training platform for healthcare professionals, revolutionizing medical education." },
    { year: "2025", title: "On-Premise Solutions", description: "Pioneered secure, on-premise AI deployments for regulated industries including legal and finance sectors." },
    { year: "2025", title: "Global Impact", description: "Serving clients across 6 major industries with AI solutions that have generated over $50M in measurable business value." },
  ];

  const values = [
    { title: "Excellence", description: "We deliver production-ready solutions with uncompromising quality and attention to detail.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Innovation", description: "We stay at the forefront of AI research while prioritizing practical, measurable outcomes.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Integrity", description: "We build AI systems that are ethical, explainable, and aligned with our clients' values.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Partnership", description: "We work as an extension of your team, committed to your long-term success and growth.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HERO (no box) */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
              About Phen AI
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              At Phen AI, we believe artificial intelligence isn’t just a tool — it’s a
              turning point in how humanity works, learns, and creates.
            </p>
          </section>

          {/* INTRO (boxed) */}
          <section className="mb-20">
            <div className="glass-strong rounded-xl sm:rounded-2xl max-w-5xl mx-auto p-8 sm:p-12 backdrop-blur-md ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10">
              <div className="max-w-4xl mx-auto space-y-5 text-left">
                <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
                  Our journey began with a clear vision: to make the power of AI accessible, purposeful, and profoundly human. What started as a small team of innovators and designers with a shared obsession for intelligent systems has evolved into a company building the next generation of digital transformation — one solution at a time.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
                  We design intelligent ecosystems — not just chatbots or automations, but connected experiences that think, adapt, and scale with the people they serve. From AI-powered customer engagement to workflow automation and immersive training environments, Phen AI bridges creativity, logic, and technology into something truly transformational.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
                  Across industries like agriculture, education, finance, legal, renewables, and supply chain, we help organizations use AI as a catalyst for efficiency, insight, and imagination.
                </p>
              </div>
            </div>
          </section>

          {/* TEAM (heading OUTSIDE the box) */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-semibold text-center mb-8">
              The Team Behind Phen AI
            </h2>
            {/* ❗️Keep glass classes on the DIV below, NOT on the section */}
            <div className="glass-strong rounded-xl sm:rounded-2xl max-w-5xl mx-auto p-8 sm:p-12 backdrop-blur-md ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10">
              <div className="mx-auto max-w-3xl text-left">
                <p className="text-lg leading-relaxed text-foreground/80">
                  We’re a multidisciplinary team of engineers, designers, and strategists driven by one shared goal — to redefine how businesses interact with intelligence.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mt-4">
                  Each member brings expertise from software engineering, product design, and AI research, creating the balance between logic and creativity. Together, we turn ambitious ideas into intelligent realities.
                </p>
              </div>
            </div>
          </section>

          {/* CORE PRINCIPLES (heading OUTSIDE the box) */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif font-semibold text-center mb-8">
              Our Core Principles
            </h2>
            {/* ❗️Heading is above; box only wraps tiles + paragraph */}
            <div className="glass-strong rounded-xl sm:rounded-2xl max-w-5xl mx-auto p-8 sm:p-12 backdrop-blur-md ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Simplicity in Innovation", "AI should simplify decisions, not complicate them."],
                  ["Transparency in Execution", "Every solution should earn trust through clarity."],
                  ["Scalability by Design", "Systems that grow as our clients grow."],
                  ["Human-Centric Intelligence", "Every product begins with empathy, not algorithms."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-xl p-5 backdrop-blur-sm ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10"
                  >
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-foreground/70 mt-1">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-center text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto">
                Phen AI stands at the intersection of intelligence and intuition — where automation meets artistry, and data meets design. We’re not just building AI solutions; we’re building a future where technology understands people as deeply as people understand purpose.
              </p>
            </div>
          </section>

          {/* JOURNEY */}
          <section className="mb-32">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Journey</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item relative pl-0 md:pl-24"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white hidden md:flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                    <div className="glass-strong rounded-xl p-8 ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10">
                      <div className="md:hidden text-primary font-bold mb-2">{item.year}</div>
                      <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-foreground/80 text-lg">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* VALUES */}
          <section className="mb-32">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-strong rounded-xl p-6 text-center hover:bg-white/10 transition-colors ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/80 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-12 text-center ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for building intelligent systems that make a real difference.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105">
                Get in Touch
              </a>
            </Link>
          </motion.section>
        </div>
      </main>

      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="glass-strong max-w-2xl border-border ring-1 bg-black/5 ring-black/10 dark:bg-white/5 dark:ring-white/10">
          {selectedMember && (
            <div>
              <div className="flex items-start gap-6 mb-6">
                <img src={selectedMember.headshot} alt={selectedMember.name} className="w-32 h-32 rounded-xl object-cover" />
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{selectedMember.name}</h3>
                  <p className="text-primary font-semibold mb-4">{selectedMember.role}</p>
                  <div className="flex gap-3">
                    {selectedMember.socials.map((s, i) => (
                      <a key={i} href={s.url} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={s.platform}>
                        {s.platform === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                        {s.platform === "Twitter" && <Twitter className="w-5 h-5" />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{selectedMember.bio}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
