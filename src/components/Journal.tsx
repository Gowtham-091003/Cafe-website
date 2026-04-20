import { motion } from "motion/react";

const ARTICLES = [
  {
    title: "Behind the Roast: The Ethiopian Highlands",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2574&auto=format&fit=crop",
    category: "Sourcing"
  },
  {
    title: "The Art of the Perfect Milk Swirl",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2669&auto=format&fit=crop",
    category: "Technique"
  }
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-32 bg-coffee-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-coffee-latte/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-coffee-latte font-semibold uppercase tracking-[0.3em] text-xs block mb-6"
          >
            The Daily Journal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="serif text-5xl md:text-7xl text-paper italic"
          >
            Stories & Insights
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[32px] mb-10 relative">
                <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-6 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] bg-paper/5 text-coffee-latte px-4 py-1.5 rounded-full font-bold border border-coffee-latte/20">
                  {article.category}
                </span>
                <span className="text-[10px] text-paper/40 uppercase tracking-[0.2em]">{article.date}</span>
              </div>
              <h3 className="serif text-3xl md:text-4xl text-paper group-hover:text-coffee-latte transition-colors duration-300 leading-tight">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <a href="#" className="flex items-center gap-6 group">
            <span className="text-xs uppercase tracking-[0.3em] text-paper/60 font-bold group-hover:text-coffee-latte transition-colors">Read all entries</span>
            <div className="w-16 h-[1px] bg-paper/20 group-hover:bg-coffee-latte group-hover:w-24 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
