"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Order Placed",
    description: "Submit your requirements through our online form",
    icon: "📋",
  },
  {
    title: "Processing",
    description: "Our team reviews and prepares your custom quote",
    icon: "⚙️",
  },
  {
    title: "Manufacturing",
    description: "Production begins with quality control at every stage",
    icon: "🏭",
  },
  {
    title: "Delivery",
    description: "Safe and timely delivery to your doorstep",
    icon: "🚚",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="brand-text text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-heading)]">
            Delivery <span style={{ color: 'var(--accent)' }}>Process</span>
          </h2>
          <p className="body-text text-lg text-[var(--text)]">From order to delivery in four simple steps</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2" style={{ background: 'linear-gradient(to right, var(--accent), var(--accent-hover))' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10"
              >
                <div className="rounded-2xl p-6 text-center transition-all duration-300" style={{ background: 'var(--bg-card)' }}>
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4" style={{ background: 'var(--accent)' }}>
                    {step.icon}
                  </div>
                  <div className="brand-text font-bold text-lg mb-2 text-[var(--accent)]">
                    Step {index + 1}
                  </div>
                  <h3 className="brand-text text-xl font-bold mb-2 text-[var(--text-heading)]">{step.title}</h3>
                  <p className="body-text text-sm text-[var(--text)]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}