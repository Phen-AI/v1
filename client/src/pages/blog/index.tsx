import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, Search, Tag } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { blogPosts } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { useGSAP } from "@/lib/gsap-utils";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useGSAP(() => {
    if (!window.gsap || !window.ScrollTrigger) {
      return;
    }

    const tweens: any[] = [];
    const cards = window.gsap.utils?.toArray?.(".blog-post-card") as
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

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the latest in AI, immersive technologies, and enterprise innovation
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 glass-strong border-border h-12 text-base"
                data-testid="input-search-blog"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTag === null
                    ? "bg-primary text-primary-foreground"
                    : "glass border border-border hover:bg-white/10"
                }`}
                data-testid="button-tag-all"
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "glass border border-border hover:bg-white/10"
                  }`}
                  data-testid={`button-tag-${tag.toLowerCase()}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <a>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="blog-post-card glass-strong rounded-xl overflow-hidden mb-6 hover:bg-white/10 transition-all group cursor-pointer"
                    data-testid={`card-blog-${post.slug}`}
                  >
                    <div className="md:flex">
                      <div className="md:w-96 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={post.heroImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 flex-1">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} min read
                          </span>
                        </div>

                        <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.summary}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-muted-foreground" />
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 glass rounded-full text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read More
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
                          </span>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground">
                            By {post.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </a>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
