"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)]" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" style={{ background: 'var(--accent)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" style={{ background: 'var(--accent-hover)' }} />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="brand-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--text-heading)]"
        >
          Innovating Chemicals,{" "}
          <span style={{ color: 'var(--accent)' }}>Empowering Industries</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="body-text text-lg md:text-xl mb-10 max-w-3xl mx-auto text-[var(--text)]"
        >
          Leading the chemical industry with cutting-edge solutions, sustainable practices, and unmatched expertise for over two decades.
        </motion.p>
        
        <motion.a
          href="#products"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glowing-btn inline-block font-semibold px-8 py-4 rounded-full text-lg md:text-xl text-white"
          style={{ background: 'var(--accent)' }}
        >
          Explore Our Products
        </motion.a>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'var(--text)' }}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full mt-2"
            style={{ background: 'var(--accent)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}