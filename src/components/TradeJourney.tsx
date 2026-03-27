import { motion } from "framer-motion";
import {
  ClipboardList,
  ShieldCheck,
  Package,
  Truck,
  Globe,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: ClipboardList, label: "Product Registration" },
  { icon: ShieldCheck, label: "Quality Check" },
  { icon: Package, label: "Packaging" },
  { icon: Truck, label: "Logistics" },
  { icon: Globe, label: "International Buyers" },
  { icon: BarChart3, label: "Market Access" },
];

const TradeJourney = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-card rounded-2xl shadow-2xl border border-border p-8 md:p-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
          Your Trade Journey
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 min-w-[100px]"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon size={28} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {step.label}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight size={18} className="text-secondary hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["Export Process", "Import Solutions", "Global Network"].map((label) => (
            <Button
              key={label}
              variant="outline"
              className="rounded-full text-sm gap-2 border-primary/20 hover:border-primary"
            >
              <Globe size={16} className="text-secondary" />
              {label}
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TradeJourney;
