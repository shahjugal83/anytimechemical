"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Industrial Chemicals",
    description: "High-performance industrial chemicals for manufacturing and processing applications.",
    icon: "⚗️",
  },
  {
    title: "Pharmaceutical Intermediates",
    description: "Quality pharmaceutical intermediates meeting international standards.",
    icon: "💊",
  },
  {
    title: "Agricultural Solutions",
    description: "Sustainable agricultural chemicals for enhanced crop production.",
    icon: "🌱",
  },
  {
    title: "Specialty Chemicals",
    description: "Customized specialty chemicals for unique industrial requirements.",
    icon: "🔬",
  },
  {
    title: "Cleaning Agents",
    description: "Eco-friendly cleaning agents for industrial and commercial use.",
    icon: "🧪",
  },
  {
    title: "Research Chemicals",
    description: "Premium research chemicals for laboratories and R&D facilities.",
    icon: "📊",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="brand-text text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-heading)]">
            Our <span style={{ color: 'var(--accent)' }}>Products</span>
          </h2>
          <p className="body-text text-lg max-w-2xl mx-auto text-[var(--text)]">
            Comprehensive range of chemical solutions engineered for excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              className="rounded-2xl p-8 transition-all duration-300 cursor-pointer border border-transparent hover:border-[var(--accent)]"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="brand-text text-xl font-bold mb-3 text-[var(--text-heading)]">{product.title}</h3>
              <p className="body-text leading-relaxed text-[var(--text)]">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}