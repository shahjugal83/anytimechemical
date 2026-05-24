"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Our Team", url: "/team" },
  { name: "Contact", url: "/contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--bg-card)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="brand-text text-xl font-bold text-[var(--text-heading)]"
            whileHover={{ scale: 1.05 }}
          >
            Anytime <span className="text-[var(--accent)]">Chemicals</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="nav-link text-base text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}