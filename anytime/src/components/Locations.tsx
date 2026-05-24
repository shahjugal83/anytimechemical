"use client";

import { motion } from "framer-motion";

const locations = [
  {
    name: "Head Office",
    address: "123 Industrial Boulevard, Mumbai, Maharashtra 400001",
    phone: "+91 22 2765 4321",
    email: "info@anytimechem.com",
    icon: "🏢",
  },
  {
    name: "Manufacturing Plant",
    address: "Plot 45-48, MIDC Industrial Area, Tarapur, Maharashtra 401506",
    phone: "+91 22 2765 8900",
    email: "plant@anytimechem.com",
    icon: "🏭",
  },
];

export default function Locations() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span style={{ color: 'var(--accent)' }}>Locations</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text)' }}>Find us at our offices and facilities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-2xl p-8"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="text-5xl mb-4">{location.icon}</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>{location.name}</h3>
              <div className="space-y-3">
                <p className="flex items-start gap-3" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent)' }}>📍</span>
                  {location.address}
                </p>
                <p className="flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent)' }}>📞</span>
                  {location.phone}
                </p>
                <p className="flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent)' }}>✉️</span>
                  {location.email}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}