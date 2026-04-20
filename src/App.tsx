/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Menu from "./components/Menu";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-coffee-latte z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        
        {/* Subtle transition section */}
        <section className="py-24 bg-coffee-dark border-y border-coffee-latte/10">
          <div className="max-w-4xl mx-auto px-12 text-center">
            <motion.p 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="serif text-3xl md:text-5xl text-paper leading-relaxed italic"
            >
              "Coffee is a language in itself."
            </motion.p>
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-paper/30 uppercase tracking-[0.3em] text-[10px] font-bold mt-10 block"
            >
              — Jackie Chan
            </motion.span>
          </div>
        </section>

        <Journal />
      </main>

      <Footer />
    </div>
  );
}
