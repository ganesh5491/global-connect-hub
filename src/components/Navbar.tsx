import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["What We Do", "About Us", "Resources", "Products"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="T-IMOEXO International Pvt Ltd" className="h-10 sm:h-12" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <Button variant="hero" size="lg" className="rounded-full px-8">
            Contact
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10"
          >
            <div className="container mx-auto py-6 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium text-primary-foreground/80 hover:text-secondary py-2"
                >
                  {link}
                </a>
              ))}
              <Button variant="hero" size="lg" className="rounded-full mt-2">
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
