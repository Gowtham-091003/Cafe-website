import { motion } from "motion/react";

export default function About() {
  return (
    <section className="pt-32 pb-24 bg-coffee-dark min-h-screen text-paper">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-coffee-latte font-semibold uppercase tracking-[0.3em] text-xs block mb-6">
            Our Craft & Heritage
          </span>
          <h1 className="serif text-6xl md:text-8xl italic mb-8">
            The Soul of Our <br /> <span className="not-italic font-bold">Alchemy.</span>
          </h1>
          <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed">
            More than just a beverage, our coffee is a testament to the pursuit of perfection. From the high-altitude forests to your cup, every step is an act of devotion.
          </p>
        </motion.div>

        {/* Narrative Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="serif text-4xl mb-6 italic text-coffee-latte underline underline-offset-8 decoration-coffee-latte/20">The Look</h2>
            <p className="text-paper/70 font-light leading-relaxed mb-6">
              Our signature roast presents a rich, mahogany hue with a dense, tiger-striped crema that signals freshness. When brewed, it displays a clarity that reflects our meticulous processing, as dark and inviting as a moonless night in the highlands.
            </p>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-[#120C08] border border-coffee-latte/30"></div>
              <div className="h-10 w-10 rounded-full bg-[#2C1B12] border border-coffee-latte/30"></div>
              <div className="h-10 w-10 rounded-full bg-[#D4A373] border border-coffee-latte/30"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-[48px] overflow-hidden glass p-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" 
              alt="The Look of our Coffee" 
              className="w-full h-full object-cover rounded-[36px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Taste & Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-10 rounded-[40px] border-coffee-latte/10">
              <h3 className="serif text-3xl mb-6 italic text-coffee-latte text-center">The Taste</h3>
              <p className="text-paper/70 font-light leading-relaxed text-center italic">
                "A velvet symphony of dark cocoa, toasted nuts, and a whisper of wild berries. The finish is clean, with a lingering sweetness that evokes memories of caramelized sugar."
              </p>
            </div>

            {/* Vibrant Coffee Seed Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[32px] overflow-hidden aspect-square shadow-2xl hover:scale-105 transition-transform duration-500 bg-stone-900">
                <img 
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop" 
                  alt="Artisanal Roasted Beans" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-[32px] overflow-hidden aspect-square shadow-2xl hover:scale-105 transition-transform duration-500 bg-stone-900">
                <img 
                  src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=2574&auto=format&fit=crop" 
                  alt="Vibrant Coffee Cherries" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-[40px] border-coffee-latte/10"
          >
            <h3 className="serif text-3xl mb-6 italic text-coffee-latte text-center">The Benefits</h3>
            <ul className="space-y-6 text-coffee-latte/70 font-light text-center">
              <li>
                <span className="block text-paper font-medium mb-1">Bio-Vitality</span>
                A concentrated source of rare polyphenols and essential antioxidants that nourish your cellular rhythm.
              </li>
              <li>
                <span className="block text-paper font-medium mb-1">Mental Precision</span>
                Our specialized roasting curve ensures a clean, jitter-free caffeine delivery for profound cognitive focus.
              </li>
              <li>
                <span className="block text-paper font-medium mb-1">Metabolic Anchor</span>
                Designed to support a healthy digestive flow while providing a steady, natural energy uplift throughout the day.
              </li>
              <li>
                <span className="block text-paper font-medium mb-1">Ethical Integrity</span>
                Every single bean is traceable to high-altitude estates where farmers are empowered through fair-trade partnership.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pb-12"
        >
          <h2 className="serif text-4xl mb-10 italic">Experience the <span className="not-italic font-bold text-coffee-latte">Difference.</span></h2>
          <button className="bg-coffee-latte text-coffee-dark px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all duration-500 shadow-2xl shadow-coffee-latte/20">
            Order Your Roast
          </button>
        </motion.div>
      </div>
    </section>
  );
}
