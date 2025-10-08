import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a quick 30-minute strategy call with our team.
            </p>
          </motion.div>

          {/* Calendly Embed */}
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden mb-20">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hari-hiphen/30min?hide_gdpr_banner=1"
              style={{
                minWidth: "100%",
                height: "700px",
                margin: 0,
                padding: 0,
                border: "none",
                overflow: "hidden",
              }}
            ></div>
          </div>


          {/* Company Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:info@hiphen.ai"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@hiphen.ai
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+14378891457"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (437) 889-1457
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                Ontario, Canada
                <br />
                Proudly Canadian
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Mon - Fri: 9AM - 6PM EST
                <br />
                Weekend: By Appointment
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
