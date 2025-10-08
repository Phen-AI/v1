import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Tag } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import { blogPosts } from "@/lib/content";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return <NotFound />;
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readingTime} min read
              </span>
              <span>By {post.author}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">{post.summary}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 glass rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                className="ml-auto p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Share article"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none mb-16"
          >
            <div className="glass-strong rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                {post.content}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This article explores the transformative potential of emerging technologies
                and their practical applications across industries. Our team continues to
                research and develop innovative solutions that drive measurable business value.
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`}>
                <a className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-colors group">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    Previous Article
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </h3>
                </a>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`}>
                <a className="glass-strong rounded-xl p-6 hover:bg-white/10 transition-colors group md:text-right">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3 md:justify-end">
                    Next Article
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                </a>
              </Link>
            )}
          </div>

          {/* Back to Blog */}
          <div className="text-center">
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-lg hover:bg-white/10 transition-colors font-medium">
                <ArrowLeft className="w-5 h-5" />
                Back to All Articles
              </a>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
