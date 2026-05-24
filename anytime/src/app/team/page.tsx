"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Rajesh Patel",
    role: "Chief Executive Officer",
    bio: "Over 25 years of experience in the chemical industry, leading Anytime Chemicals from a small startup to a leading manufacturer.",
    image: "👔",
  },
  {
    name: "Priya Sharma",
    role: "Head of Research & Development",
    bio: "PhD in Chemistry from IIT Bombay with expertise in developing innovative chemical formulations.",
    image: "🔬",
  },
  {
    name: "Vikram Singh",
    role: "Operations Director",
    bio: "15+ years in manufacturing operations ensuring quality and efficiency across all production lines.",
    image: "⚙️",
  },
  {
    name: "Anita Desai",
    role: "Quality Assurance Manager",
    bio: "Certified quality professional ensuring all products meet international standards.",
    image: "✓",
  },
  {
    name: "Sanjay Kumar",
    role: "Sales & Marketing Head",
    bio: "Strategic leader building partnerships with clients across multiple industries.",
    image: "📈",
  },
  {
    name: "Meera Joshi",
    role: "Finance Director",
    bio: "Expert in financial planning and investor relations with CA and MBA credentials.",
    image: "💼",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
                Our <span style={{ color: 'var(--accent)' }}>Team</span>
              </h1>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
                Meet the dedicated professionals driving innovation and excellence at Anytime Chemicals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  className="rounded-2xl p-8 text-center transition-all duration-300 border border-transparent"
                  style={{ background: 'var(--bg-card)' }}
                >
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-4" style={{ background: 'var(--bg)' }}>
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-heading)' }}>{member.name}</h3>
                  <p className="font-medium mb-4" style={{ color: 'var(--accent)' }}>{member.role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}