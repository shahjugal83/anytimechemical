"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  location: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", mobile: "", location: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16" style={{ background: 'var(--bg)' }}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
                Contact <span style={{ color: 'var(--accent)' }}>Us</span>
              </h1>
              <p className="text-lg" style={{ color: 'var(--text)' }}>Get in touch with our team</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 md:p-12"
              style={{ background: 'var(--bg-card)' }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-medium mb-2" style={{ color: 'var(--text-heading)' }}>
                    First Name <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 focus:outline-none"
                    style={{ 
                      background: 'var(--bg)', 
                      borderColor: errors.firstName ? '#ef4444' : 'var(--bg-card)',
                      color: 'var(--text-heading)',
                      border: '1px solid'
                    }}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-2" style={{ color: 'var(--text-heading)' }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 focus:outline-none"
                    style={{ background: 'var(--bg)', color: 'var(--text-heading)', border: '1px solid var(--bg-card)' }}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-medium mb-2" style={{ color: 'var(--text-heading)' }}>
                    Email <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 focus:outline-none"
                    style={{ 
                      background: 'var(--bg)', 
                      borderColor: errors.email ? '#ef4444' : 'var(--bg-card)',
                      color: 'var(--text-heading)',
                      border: '1px solid'
                    }}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-2" style={{ color: 'var(--text-heading)' }}>
                    Mobile <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-3 focus:outline-none"
                    style={{ 
                      background: 'var(--bg)', 
                      borderColor: errors.mobile ? '#ef4444' : 'var(--bg-card)',
                      color: 'var(--text-heading)',
                      border: '1px solid'
                    }}
                    placeholder="+91 98765 43210"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-medium mb-2" style={{ color: 'var(--text-heading)' }}>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none"
                  style={{ background: 'var(--bg)', color: 'var(--text-heading)', border: '1px solid var(--bg-card)' }}
                  placeholder="Mumbai, Maharashtra"
                />
              </div>

              <div className="mb-8">
                <label className="block font-medium mb-2" style={{ color: 'var(--text-heading)' }}>
                  Message <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none resize-none"
                  style={{ 
                    background: 'var(--bg)', 
                    borderColor: errors.message ? '#ef4444' : 'var(--bg-card)',
                    color: 'var(--text-heading)',
                    border: '1px solid'
                  }}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full font-semibold py-4 rounded-lg transition-all duration-300 text-white disabled:opacity-50"
                style={{ background: 'var(--accent)' }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center mt-4"
                >
                  Message sent successfully! We will get back to you soon.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center mt-4"
                >
                  {errorMessage}
                </motion.p>
              )}
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}