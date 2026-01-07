"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Approach() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Nashville Skyline with Overlay Text */}
      <section className="relative h-[600px] flex items-center justify-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/team/nashville-skyline-hero.jpg"
            alt="Nashville Skyline"
            className="w-full h-full object-cover"
          />
          {/* Stronger dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Text - Centered vertically and horizontally */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight drop-shadow-lg">
              A disciplined approach to private credit investing across the real estate capital stack.
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Rigorous underwriting and operational expertise to identify opportunities, structure investments, and protect capital while generating attractive risk-adjusted returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Strategies - 3 Horizontal Boxes */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-k4-navy mb-4">
              Investment Strategies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Private Credit */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-k4-navy mb-4">
                Private Credit
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Targets mid-teens returns through subordinated debt and mezzanine financing with 3-7 year hold periods. Focus on hospitality, mixed-use developments, and special situations in growth markets including New York, Nashville, and Tampa. Operational expertise provides competitive advantages in middle-market deal sourcing and execution.
              </p>
            </motion.div>

            {/* Direct Equity */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-k4-navy mb-4">
                Direct Equity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Selective equity investments where operational expertise offers advantages in acquisition, repositioning, and value creation. Targets full-service hotels, boutique brands, and urban mixed-use developments. Disciplined approach with private credit remaining core mandate.
              </p>
            </motion.div>

            {/* Special Situations */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-k4-navy mb-4">
                Special Situations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Flexible capital solutions in complex situations including recapitalizations and refinancings. Focus on strong underlying assets with experienced sponsors and clear value realization paths. Leverage relationships to source proprietary deal flow requiring speed and operational partnership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credit-First Mindset */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-k4-navy mb-6">
                Credit-First Mindset
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We prioritize downside protection through subordinated debt and mezzanine financing, generating mid-teens returns through structured credit positions with covenant protections and limited downside exposure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-k4-navy mb-3">
                  Structural Seniority
                </h3>
                <p className="text-gray-700">
                  Positioned between senior debt and equity with structural protections and upside exposure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-k4-navy mb-3">
                  Covenant Packages
                </h3>
                <p className="text-gray-700">
                  Comprehensive covenants provide early warnings and capital protection mechanisms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-k4-navy mb-3">
                  Conservative Leverage
                </h3>
                <p className="text-gray-700">
                  Protected by meaningful equity cushions and sustainable capital structures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Expertise */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-k4-navy mb-3">
                  Asset-Level Understanding
                </h3>
                <p className="text-gray-700">
                  Direct hospitality experience provides insights into property economics and value creation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-k4-navy mb-3">
                  Cycle Recognition
                </h3>
                <p className="text-gray-700">
                  Pattern recognition across real estate cycles identifies attractive entry points.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-k4-navy mb-3">
                  Active Oversight
                </h3>
                <p className="text-gray-700">
                  Hands-on monitoring and sponsor collaboration to protect investment performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light text-k4-navy mb-6">
                Operational Expertise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We integrate operational due diligence with credit underwriting, examining both coverage ratios and unit economics. This dual lens informs underwriting decisions and portfolio management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
