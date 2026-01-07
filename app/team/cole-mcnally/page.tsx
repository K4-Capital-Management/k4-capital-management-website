"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ColeMcNally() {
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
                src="/team/cole-mcnally.jpg"
                alt="Cole McNally"
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
                Cole McNally
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Investment Associate
              </p>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cole McNally is an Investment Associate at K4 Capital Management, where he focuses on investment analysis, deal sourcing, and portfolio monitoring across the firm's private credit and real estate investments. He supports transaction execution in mezzanine debt and structured equity opportunities through financial modeling and due diligence.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Prior to K4, Cole worked at Deutsche Bank in commercial real estate lending and underwriting, developing expertise in credit analysis, loan structuring, and institutional capital markets.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Cole graduated from Vanderbilt University in 2022 with a degree in Economics.
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
