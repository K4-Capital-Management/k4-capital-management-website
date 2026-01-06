
"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const team = [
  {
    name: "Leadership Team",
    role: "Managing Partners",
    bio: "Experienced investment professionals with deep expertise in real estate and capital markets.",
  },
  {
    name: "Investment Team",
    role: "Senior Associates",
    bio: "Dedicated team focused on sourcing, analyzing, and executing investment opportunities.",
  },
  {
    name: "Asset Management",
    role: "Portfolio Managers",
    bio: "Hands-on approach to maximizing value across our diverse portfolio of assets.",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A diverse team of investment professionals committed to creating value 
              through strategic real asset investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-k4-navy mb-6">
              Expertise Across the Capital Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team brings decades of combined experience in real estate investment, 
              development, and asset management. We pride ourselves on our collaborative 
              approach and commitment to excellence.
            </p>
          </motion.div>

          <div className="space-y-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border-b border-gray-200 pb-12 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Team Photo</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-k4-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}