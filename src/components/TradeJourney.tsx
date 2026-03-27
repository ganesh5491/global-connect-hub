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
import { useRef, useEffect, useState } from "react";

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

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

        {/* Scrollable horizontal flow */}
        <div className="relative">
          {/* Left fade + arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
          )}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-[5] pointer-events-none rounded-l-xl" />
          )}

          {/* Right fade + arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-[5] pointer-events-none rounded-r-xl" />
          )}

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
