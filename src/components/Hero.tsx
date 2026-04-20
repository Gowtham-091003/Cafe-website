import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-coffee-dark px-12 overflow-hidden">
      {/* Immersive background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #D4A373 0%, transparent 40%), radial-gradient(circle at 10% 80%, #1A120B 0%, transparent 50%)' }}>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 relative z-10 pt-20">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-coffee-latte font-semibold tracking-[0.3em] uppercase text-xs mb-8 block"
          >
            Artisanal Roastery & Kitchen
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="serif text-6xl md:text-8xl leading-[0.95] mb-10 font-normal italic text-paper"
          >
            Wake up to<br />
            <span className="not-italic font-bold">The Perfect</span><br />
            Roast.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg opacity-60 max-w-lg mb-12 leading-relaxed text-paper"
          >
            Experience the deep, soulful aromas of ethically sourced beans, roasted daily in the heart of the city for a taste that lingers far beyond the last sip.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-8"
          >
            <div className="flex -space-x-3">
              {[11, 12, 13].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  alt={`Visitor ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-coffee-dark object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="block font-bold text-coffee-latte">500+ Daily Visitors</span>
              <span className="opacity-50 uppercase text-[10px] tracking-widest text-paper">Loved by the community</span>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex flex-col justify-end pt-12 lg:pt-0 pb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass rounded-[40px] p-10 relative overflow-hidden h-[500px] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-coffee-latte/10 blur-3xl"></div>
            
            <div className="relative z-20">
              <div className="w-12 h-[1px] bg-coffee-latte mb-8"></div>
              <h3 className="serif text-4xl italic mb-6 text-paper">Today's Special</h3>
              <p className="opacity-70 text-base mb-8 text-paper font-light leading-relaxed">
                Indulge in our 'Maple Pecan Cold Brew' – a seasonal masterpiece crafted with house-made nut milk and Grade A maple syrup.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { name: "Ethiopian Yirgacheffe", price: "$6.50" },
                { name: "Smashed Avocado Toast", price: "$14.00" },
                { name: "Truffle Egg Benedict", price: "$18.50" }
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-end border-b border-coffee-latte/20 pb-3">
                  <span className="text-xs uppercase tracking-[0.15em] text-paper opacity-80">{item.name}</span>
                  <span className="serif text-2xl text-coffee-latte">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="w-14 h-14 border border-coffee-latte rounded-full flex items-center justify-center rotate-45 hover:bg-coffee-latte hover:text-coffee-dark transition-all duration-300">
                <span className="text-coffee-latte hover:text-inherit text-2xl">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
