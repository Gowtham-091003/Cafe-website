import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(18, 12, 8, 0)", "rgba(18, 12, 8, 0.9)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(212, 163, 115, 0)", "1px solid rgba(212, 163, 115, 0.2)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-coffee-latte rounded-full flex items-center justify-center">
            <span className="serif text-xl font-bold text-coffee-latte">G</span>
          </div>
          <span className="serif text-2xl font-bold tracking-tight uppercase text-paper">
            Gowtham Cafe
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["The Bean", "Menu", "Our Story", "Visit"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-semibold tracking-widest uppercase text-paper/80 hover:text-coffee-latte transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-coffee-latte text-coffee-dark px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-coffee-latte/10">
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-brown p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-cream border-b border-brand-brown/10 px-6 py-10"
        >
          <div className="flex flex-col gap-8">
            {["Philosophy", "Menu", "Journal", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl font-serif font-medium text-brand-brown"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-brand-green text-white py-4 rounded-full font-medium">
              Book Table
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
