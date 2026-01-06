"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Let's discuss your next investment.
            </h1>
            <p className="text-xl text-gray-300">
              Reach out to explore opportunities across the capital stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-k4-navy transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-k4-navy transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-k4-navy transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-k4-navy transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-k4-navy text-white py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Email us
                </h3>
                <a 
                  href="mailto:info@k4capitalmanagement.com"
                  className="text-2xl text-k4-navy hover:text-gray-600 transition-colors"
                >
                  info@k4capitalmanagement.com
                </a>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Visit us
                </h3>
                
                <div className="space-y-8">
                  {/* New York */}
                  <div>
                    <h4 className="text-lg font-semibold text-k4-navy mb-2">New York</h4>
                    <p className="text-gray-600">
                      680 Fifth Ave, Suite 2200<br />
                      New York, NY 10019
                    </p>
                  </div>
                  
                  {/* Nashville */}
                  <div>
                    <h4 className="text-lg font-semibold text-k4-navy mb-2">Nashville</h4>
                    <p className="text-gray-600">
                      401 Church Street, Suite 2800<br />
                      Nashville, TN 37219
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}