import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Factory, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import TradeJourney from "./TradeJourney";

const HeroHeader = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/__l5e/assets-v1/7e34f021-8382-4f37-b03a-91bd34956f71/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(224 76% 15% / 0.88) 0%, hsl(220 60% 10% / 0.75) 50%, hsl(224 76% 20% / 0.70) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Animated accent shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-secondary/20 opacity-30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full border border-secondary/10 opacity-20"
      />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wide uppercase border border-secondary/30">
            India's Trusted Trade Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight max-w-5xl"
        >
          Global Trade{" "}
          <span className="text-secondary">Made Simple</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 text-lg sm:text-xl md:text-2xl font-semibold text-primary-foreground/90 max-w-3xl"
        >
          Connecting Indian Manufacturers with the World
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-3 text-base sm:text-lg text-primary-foreground/70 max-w-2xl"
        >
          Your End-to-End International Trading Partner
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="lg" className="rounded-full px-8 text-base gap-3 h-14">
            <ShoppingCart size={20} />
            Buyer Inquiry
            <ArrowRight size={18} />
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-full px-8 text-base gap-3 h-14">
            <Factory size={20} />
            Manufacturer Inquiry
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
        >
          {[
            { num: "50+", label: "Countries" },
            { num: "1000+", label: "Products" },
            { num: "500+", label: "Manufacturers" },
            { num: "10K+", label: "Shipments" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary">{stat.num}</div>
              <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trade Journey overlapping section */}
      <div className="relative z-20 -mt-16">
        <TradeJourney />
      </div>
    </section>
  );
};

export default HeroHeader;
