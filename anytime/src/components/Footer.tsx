"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeContext";
import { themeConfig } from "@/config/theme";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com", color: "#E4405F" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com", color: "#FF0000" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com", color: "#1DA1F2" },
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com", color: "#1877F2" },
];

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Our Team", url: "/team" },
  { name: "Contact", url: "/contact" },
];

const themeOptions = [
  { id: "sophisticated", name: "Sophisticated", color: "#d4af37" },
  { id: "professional", name: "Professional", color: "#2ecc71" },
  { id: "classic", name: "Classic", color: "#5d9a8d" },
] as const;

function HiddenThemeFooter() {
  return (
    <footer className="border-t py-12 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg)', borderColor: 'var(--bg-card)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="brand-text text-2xl font-bold mb-4 text-[var(--text-heading)]">
              Anytime <span className="text-[var(--accent)]">Chemicals</span>
            </h3>
            <p className="body-text leading-relaxed text-[var(--text)]">
              Innovating chemicals, empowering industries for over two decades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-heading)]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="nav-link text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-heading)]">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: social.color }}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--bg-card)' }}>
          <p className="body-text text-[var(--text)]">
            {new Date().getFullYear()} Anytime Chemicals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function VisibleThemeFooter() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t py-12 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg)', borderColor: 'var(--bg-card)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="brand-text text-2xl font-bold mb-4 text-[var(--text-heading)]">
              Anytime <span className="text-[var(--accent)]">Chemicals</span>
            </h3>
            <p className="body-text leading-relaxed text-[var(--text)]">
              Innovating chemicals, empowering industries for over two decades.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-heading)]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="nav-link text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-heading)]">Theme</h4>
            <div className="flex gap-2">
              {themeOptions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className="w-8 h-8 rounded-full transition-all hover:scale-110"
                  style={{
                    background: t.color,
                    outline: theme === t.id ? '2px solid var(--text-heading)' : 'none',
                    outlineOffset: '2px'
                  }}
                  title={t.name}
                />
              ))}
            </div>
            <p className="text-sm mt-2 text-[var(--text)]">
              {themeOptions.find(t => t.id === theme)?.name}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-heading)]">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: social.color }}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderColor: 'var(--bg-card)' }}>
          <p className="body-text text-[var(--text)]">
            {new Date().getFullYear()} Anytime Chemicals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  if (themeConfig.hideThemeSelector) {
    return <HiddenThemeFooter />;
  }
  return <VisibleThemeFooter />;
}