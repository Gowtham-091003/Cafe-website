import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section id="the-bean" className="py-24 md:py-32 bg-coffee-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2670&auto=format&fit=crop"
                alt="Process"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass text-paper p-8 rounded-3xl shadow-xl hidden lg:block z-20">
              <span className="block text-4xl serif mb-1 italic text-coffee-latte">100%</span>
              <span className="text-xs uppercase tracking-widest opacity-70">Sustainably Sourced</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-coffee-latte font-semibold uppercase tracking-[0.3em] text-xs block mb-6">
              Our Essence
            </span>
            <h2 className="serif text-5xl md:text-7xl text-paper leading-tight mb-10 italic">
              Purity is our <br /> <span className="not-italic font-bold">Standard.</span>
            </h2>
            <div className="space-y-8 text-paper/70 leading-relaxed text-lg font-light">
              <p>
                At Gowtham Cafe, we believe that coffee is more than just a morning routine—it's a dialogue between earth, roaster, and you. We partner directly with farms in Ethiopia and Colombia to ensure every bean reaches its highest potential.
              </p>
              <p>
                Our baristas are artisans who understand the chemistry behind the perfect pull. From the temperature of the water to the pressure of the press, we obsess over the details so you can enjoy the moment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-coffee-latte/20">
              <div>
                <span className="block serif text-3xl text-paper mb-2 italic text-coffee-latte">Artisanal</span>
                <span className="text-[10px] text-paper/40 uppercase tracking-[0.2em]">Techniques</span>
              </div>
              <div>
                <span className="block serif text-3xl text-paper mb-2 italic text-coffee-latte">Community</span>
                <span className="text-[10px] text-paper/40 uppercase tracking-[0.2em]">Focused</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
