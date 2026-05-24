"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Anytime Chemicals has been our trusted partner for over 10 years. Their quality and reliability are unmatched in the industry.",
    author: "Dr. Sarah Mitchell",
    role: "Procurement Director, PharmaCorp",
  },
  {
    quote: "Exceptional service and technical support. They helped us optimize our manufacturing process and reduce costs significantly.",
    author: "James Rodriguez",
    role: "Operations Manager, IndusTech",
  },
  {
    quote: "Their commitment to sustainability aligns perfectly with our values. Highly recommend for any industrial chemical needs.",
    author: "Dr. Emily Chen",
    role: "Sustainability Lead, GreenChem",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="brand-text text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-heading)]">
            Client <span style={{ color: 'var(--accent)' }}>Testimonials</span>
          </h2>
          <p className="body-text text-lg text-[var(--text)]">What our partners say about us</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-8 md:p-12 text-center"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="brand-text text-5xl mb-6 text-[var(--accent)]">&quot;</div>
              <p className="body-text text-xl md:text-2xl mb-8 leading-relaxed text-[var(--text-heading)]">
                {testimonials[current].quote}
              </p>
              <div>
                <div className="brand-text text-lg font-semibold text-[var(--text-heading)]">
                  {testimonials[current].author}
                </div>
                <div className="body-text text-[var(--text)]">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="h-3 rounded-full transition-all hover:opacity-80"
                style={{
                  width: index === current ? '2rem' : '0.75rem',
                  backgroundColor: index === current ? 'var(--accent)' : 'var(--text)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}