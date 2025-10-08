import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, X } from "lucide-react";
export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className=" flex items-center justify-center overflow-hidden">
              <img
                   src="/images/12.gif"  // <-- place your GIF in /public and use this path
                    alt="Phen AI Logo"
                    className="w-16 h-16 object-contain"
              />
            </div>
              <span className="text-xl font-serif font-semibold">Phen AI</span>
           </Link>
            </div>
            <p className="text-muted-foreground">
              Engineering intelligence you can trust. Delivering elegant systems
              with measurable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Industries
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Technology
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@phenai.com"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  info@hiphen.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +1 (437) 889-1457
                </a>
              </li>
              <li className="text-muted-foreground flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>
                  Ontario, Canada
                  <br />
                  Proudly Canadian
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/phen-ai/"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/hiphenai"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/hiphenai/"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Phen AI. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-white/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="button-scroll-top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
