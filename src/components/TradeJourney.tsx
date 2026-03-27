import { motion } from "framer-motion";
import {
  ClipboardList,
  ShieldCheck,
  Package,
  Ship,
  Globe,
  Briefcase,
  Megaphone,
  Handshake,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";
import { useRef, useEffect } from "react";

const steps = [
  { Icon: Globe, title: "Indian Manufacturers" },
  { Icon: ClipboardList, title: "Product Registration" },
  { Icon: ShieldCheck, title: "Quality Check" },
  { Icon: Package, title: "Packaging" },
  { Icon: Ship, title: "Logistics" },
  { Icon: Globe, title: "International Buyers" },
  { Icon: Briefcase, title: "Market Entry" },
  { Icon: Megaphone, title: "Digital Marketing" },
  { Icon: Handshake, title: "Partnership" },
  { Icon: TrendingUp, title: "Growth" },
  { Icon: Star, title: "Success" },
];

const TradeJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5; // px per frame

    const animate = () => {
      if (!el) return;
      el.scrollLeft += speed * directionRef.current;

      // Reverse direction at edges
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        directionRef.current = -1;
      } else if (el.scrollLeft <= 0) {
        directionRef.current = 1;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animRef.current);
    const resume = () => {
      animRef.current = requestAnimationFrame(animate);
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(animRef.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8 md:p-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8 md:mb-10">
          Your Trade Journey
        </h2>

        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-[5] pointer-events-none rounded-l-xl" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-[5] pointer-events-none rounded-r-xl" />

          <div
            ref={scrollRef}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-6 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-2 sm:gap-3 shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-2 min-w-[70px] sm:min-w-[90px]"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.Icon size={20} className="text-primary sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] xl:text-xs font-medium text-foreground text-center leading-tight">
                    {step.title}
                  </span>
                </motion.div>
                {i < steps.length - 1 && (
                  <ArrowRight size={14} className="text-secondary shrink-0 sm:w-4 sm:h-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TradeJourney;
