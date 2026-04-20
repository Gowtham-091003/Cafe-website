import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
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

  const navItems = [
    { label: "Home", page: "home" as Page },
    { label: "About", page: "about" as Page },
    { label: "Our Philosophy", href: "#the-bean", page: "home" as Page },
    { label: "Menu", href: "#menu", page: "home" as Page },
    { label: "Contact", page: "contact" as Page },
  ];

  const handleNavClick = (item: { page: Page; href?: string }) => {
    onNavigate(item.page);
    setIsOpen(false);
    if (item.href && item.page === "home") {
      // Small delay if we need to switch pages before scrolling
      setTimeout(() => {
        const el = document.getElementById(item.href!.replace("#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <button 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="w-14 h-14 bg-coffee-latte rounded-full flex items-center justify-center p-1.5 shadow-lg shadow-coffee-latte/5 transition-transform duration-300 group-hover:scale-110">
            <img 
              src="https://i.ibb.co/2Ys8Y1zp/Gowtham-Cafe-Project.webp" 
              alt="Gowtham Cafe Logo" 
              className="w-full h-full object-contain mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="serif text-2xl font-bold tracking-tight uppercase text-paper leading-none">
            Gowtham <br className="md:hidden" /> <span className="text-coffee-latte">Cafe</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors cursor-pointer ${
                currentPage === item.page && !item.href 
                ? "text-coffee-latte" 
                : "text-paper/60 hover:text-coffee-latte"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate("contact")}
            className="bg-coffee-latte text-coffee-dark px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-coffee-latte/10 cursor-pointer"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-paper p-2 cursor-pointer"
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
          className="md:hidden bg-coffee-dark border-b border-coffee-latte/10 px-6 py-10"
        >
          <div className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`text-2xl serif italic transition-colors cursor-pointer ${
                  currentPage === item.page && !item.href ? "text-coffee-latte" : "text-paper/60"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={() => {
                onNavigate("contact");
                setIsOpen(false);
              }}
              className="w-full bg-coffee-latte text-coffee-dark py-4 rounded-full font-bold uppercase text-xs tracking-widest cursor-pointer"
            >
              Book Table
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
