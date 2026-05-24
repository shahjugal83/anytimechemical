"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="brand-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--text-heading)]">
              Our <span style={{ color: 'var(--accent)' }}>Mission</span>
            </h2>
            <p className="body-text mb-6 leading-relaxed text-[var(--text)]">
              At Anytime Chemicals, we are committed to delivering excellence through innovation, sustainability, and customer-centric solutions. Our state-of-the-art manufacturing facilities and dedicated team ensure the highest quality standards in every product.
            </p>
            <p className="body-text leading-relaxed text-[var(--text)]">
              With over 20 years of industry experience, we serve diverse sectors including pharmaceuticals, agriculture, manufacturing, and environmental solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl p-1" style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))' }}>
              <div className="rounded-2xl p-8" style={{ background: 'var(--bg-card)' }}>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "20+", label: "Years Experience" },
                    { value: "500+", label: "Products" },
                    { value: "200+", label: "Clients" },
                    { value: "99%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="brand-text text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-[var(--text)]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}