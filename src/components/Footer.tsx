import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="visit" className="bg-coffee-dark border-t border-coffee-latte/20 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-coffee-latte/5 rounded-full blur-[80px] -z-0" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 border-2 border-coffee-latte rounded-full flex items-center justify-center">
                <span className="serif text-xl font-bold text-coffee-latte">G</span>
              </div>
              <span className="serif text-2xl font-bold tracking-tight uppercase text-paper">
                Gowtham Cafe
              </span>
            </a>
            <p className="text-paper/50 leading-relaxed mb-10 italic font-light text-sm">
              Cultivating moments of stillness and connection through artisanal roasts and mindful hospitality.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-coffee-latte/20 flex items-center justify-center text-paper/60 hover:bg-coffee-latte hover:text-coffee-dark transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="serif text-xl text-paper mb-10 italic">Opening Hours</h4>
            <div className="space-y-5 text-[10px] uppercase tracking-[0.2em] text-paper/40">
              <div className="flex justify-between border-b border-coffee-latte/10 pb-2">
                <span>Mon — Thu</span>
                <span className="text-paper/60">07:00 — 19:00</span>
              </div>
              <div className="flex justify-between border-b border-coffee-latte/10 pb-2">
                <span>Fri — Sat</span>
                <span className="text-paper/60">08:00 — 21:00</span>
              </div>
              <div className="flex justify-between border-b border-coffee-latte/10 pb-2">
                <span>Sunday</span>
                <span className="text-paper/60">09:00 — 17:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="serif text-xl text-paper mb-10 italic">Explore</h4>
            <ul className="space-y-5 text-[10px] uppercase tracking-[0.2em] text-paper/40">
              <li><a href="#the-bean" className="hover:text-coffee-latte transition-colors">The Bean</a></li>
              <li><a href="#menu" className="hover:text-coffee-latte transition-colors">Digital Menu</a></li>
              <li><a href="#" className="hover:text-coffee-latte transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-coffee-latte transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl text-paper mb-10 italic">Say Hello</h4>
            <div className="space-y-8">
              <a href="mailto:hello@gowthamcafe.com" className="flex items-center gap-4 text-paper/60 hover:text-coffee-latte transition-colors group">
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-light">hello@gowthamcafe.com</span>
              </a>
              <div className="flex items-center gap-4 text-paper/60 group">
                <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                <div className="text-sm font-light leading-relaxed">
                  124 Coffee Lane, <br /> Downtown Metropolis
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-latte/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-paper/30 uppercase tracking-[0.3em]">
            © 2024 GOWTHAMCAFE • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-10 text-[10px] text-paper/30 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-coffee-latte transition-colors">Spotify</a>
            <a href="#" className="hover:text-coffee-latte transition-colors">Instagram</a>
            <a href="#" className="hover:text-coffee-latte transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
