"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KevinFee() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/team" className="text-gray-300 hover:text-white mb-6 inline-flex items-center gap-2">
              ← Back to Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/team/kevin-fee.jpg"
                alt="Kevin Fee"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h1 className="text-4xl font-light text-k4-navy mb-2">
                Kevin Fee
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Managing Partner
              </p>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kevin Fee is the Managing Partner and Founder of K4 Capital Management, bringing over three decades of experience in capital markets, real estate investment, and hospitality development. Prior to founding K4, Kevin co-founded CastleRock Asset Management, where he developed expertise in asset-backed lending and real estate finance.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Kevin's career began in equity trading and capital markets on the trading floor of the New York Stock Exchange for the firm Adler Coleman & Company, where he held senior positions including Managing Director and Co-head of Floor Operations. His deep understanding of market dynamics and capital structure informed his transition into real estate investment, where he has successfully originated, structured, and managed investments across the capital stack in hospitality, mixed-use, and special situations.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  At K4 Capital Management, Kevin oversees the firm's investment strategy and portfolio management, focusing on mezzanine debt, subordinated loans, and structured equity in middle-market real estate transactions.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Kevin graduatd from the State University of New York at Cortland in 1990 with a degree in Economics. He maintains residences in both Montauk and Manhattan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
