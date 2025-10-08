import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Industries", href: "/industries" },
    { label: "Technology", href: "/technology" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }

    return location === href || location.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong border-b border-border" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className=" rounded-lg flex items-center justify-center overflow-hidden">
              <img
                   src="/images/12.gif"  // <-- place your GIF in /public and use this path
                    alt="Phen AI Logo"
                    className="w-16 h-16 object-contain"
              />
            </div>
              <span className="text-xl font-serif font-semibold">Phen AI</span>
           </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${isActive(item.href) ? "text-foreground" : "text-muted-foreground"}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
            <ThemeToggle />
            <Link 
              href="/contact"
              className="px-6 py-2.5 bg-primary text-black rounded-lg font-medium text-sm hover:bg-primary/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              data-testid="button-contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu lg:hidden glass-strong border-t border-border ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(item.href) ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted"}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              data-testid={`mobile-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
          <Link 
            href="/contact"
            className="block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm text-center hover:bg-primary/90 transition-colors"
            data-testid="mobile-button-contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
