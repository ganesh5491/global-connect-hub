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
  ChevronDown,
} from "lucide-react";

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

        {/* Desktop: horizontal flow (lg+) */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-2">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 min-w-[90px]"
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.Icon size={24} className="text-primary" />
                </div>
                <span className="text-[11px] xl:text-xs font-medium text-foreground text-center leading-tight">
                  {step.title}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight size={16} className="text-secondary shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Tablet: grid (sm to lg) */}
        <div className="hidden sm:grid lg:hidden grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center gap-2 relative"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.Icon size={22} className="text-primary" />
              </div>
              <span className="text-[11px] font-medium text-foreground text-center leading-tight">
                {step.title}
              </span>
              {i < steps.length - 1 && (
                <ChevronDown size={14} className="text-secondary mt-1" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline (below sm) */}
        <div className="flex sm:hidden flex-col items-center gap-1">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 w-full max-w-[260px]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <step.Icon size={18} className="text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{step.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TradeJourney;
