import { motion } from "motion/react";

const MENU_ITEMS = [
  {
    category: "Signature Brews",
    items: [
      { name: "Single Origin Batch", price: "$4.5", desc: "Rotating small-batch roasts from our partners" },
      { name: "Velvet Flat White", price: "$5.5", desc: "Micro-foam milk poured over double ristretto" },
      { name: "Cold Smoke Latte", price: "$6.5", desc: "Cold brew with house-made smoked vanilla syrup" },
    ]
  },
  {
    category: "Small Plates",
    items: [
      { name: "Avocado & Dukkah", price: "$12.0", desc: "Sourdough with lemon zest and hazelnut dukkah" },
      { name: "Truffle Mushroom Toast", price: "$14.5", desc: "Wild mushrooms with pecorino and honey" },
      { name: "Yuzu Granola Bowl", price: "$11.0", desc: "House granola with Greek yogurt and yuzu curd" },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-coffee-dark text-paper relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-coffee-latte/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coffee-latte font-semibold uppercase tracking-[0.3em] text-xs block mb-6">
              Carefully Curated
            </span>
            <h2 className="serif text-5xl md:text-7xl leading-tight italic">
              A Taste of <br /> <span className="not-italic font-bold text-coffee-latte">Refinement.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-paper/60 max-w-sm mb-4 leading-relaxed font-light"
          >
            Our menu evolves seasonally, reflecting the freshest ingredients and newest roasting profiles.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {MENU_ITEMS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-10 rounded-[32px] hover:border-coffee-latte/30 transition-all duration-500"
            >
              <h3 className="serif text-3xl mb-12 pb-6 border-b border-coffee-latte/20 italic text-coffee-latte">
                {cat.category}
              </h3>
              <div className="space-y-10">
                {cat.items.map((item) => (
                  <div key={item.name} className="group cursor-pointer">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xl font-medium group-hover:text-coffee-latte transition-colors duration-300">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dotted border-paper/20" />
                      <span className="serif text-2xl text-paper/80">{item.price}</span>
                    </div>
                    <p className="text-paper/40 text-sm italic font-light tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-coffee-latte text-coffee-dark px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all duration-500 shadow-xl shadow-coffee-latte/10">
            View Full Digital Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
