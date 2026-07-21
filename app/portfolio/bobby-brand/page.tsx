"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  "/projects/bobby-brand/bobby-brand-1.jpg",
  "/projects/bobby-brand/bobby-brand-2.jpg",
  "/projects/bobby-brand/bobby-brand-3.jpg",
  "/projects/bobby-brand/bobby-brand-4.jpg",
  "/projects/bobby-brand/bobby-brand-5.jpg",
  "/projects/bobby-brand/bobby-brand-6.jpg",
  "/projects/bobby-brand/bobby-brand-7.jpg",
];

export default function BobbyBrand() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">← Back to Portfolio</Link>
            <div className="flex flex-wrap items-center gap-4 mb-4 mt-6">
              <h1 className="text-5xl md:text-6xl font-light text-white">The Bobby Brand</h1>
              <span className="rounded-full border border-gray-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-200">
                Realized
              </span>
            </div>
            <p className="text-xl text-gray-300">Multi-Location Expansion</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <ImageGallery images={galleryImages} />
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-light text-k4-navy mb-6">Brand Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">As co-founder and creator of the brand, K4 conceived The Bobby from inception and built its foundational infrastructure, launching The Bobby Nashville as the platform's flagship property. The brand represented an innovative approach to boutique hospitality, blending contemporary design, local culture, and experiential programming into a cohesive platform.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Our role in The Bobby Brand extended beyond individual properties to encompass the broader brand infrastructure, intellectual property, and growth strategy, reflecting our expertise in building scalable hospitality concepts and deploying flexible capital across both property-level and corporate initiatives. We have since realized this investment through the sale of the brand in 2026.</p>
              <p className="text-lg text-gray-700 leading-relaxed">The brand's expansion strategy focused on markets with strong fundamentals for experiential hospitality, emphasizing quality over quantity while preserving the authentic character that differentiated The Bobby from conventional hotel offerings.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Proven brand concept with strong unit economics and an operational track record</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Differentiated positioning in the growing lifestyle hospitality segment</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Scalable brand platform built from concept through launch and expansion</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Experienced management team with hospitality development expertise</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Value created across both brand appreciation and property-level returns</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Investment successfully realized through the sale of the brand</span></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-gray-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-k4-navy mb-6">Investment Details</h3>
              <dl className="space-y-4">
                <div><dt className="text-sm font-medium text-gray-500">Markets</dt><dd className="text-base text-gray-900">Multi-Location Portfolio</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Investment Type</dt><dd className="text-base text-gray-900">Brand Platform / Corporate</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Strategy</dt><dd className="text-base text-gray-900">Growth Capital</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Asset Class</dt><dd className="text-base text-gray-900">Lifestyle Hospitality</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Capital Type</dt><dd className="text-base text-gray-900">Private Equity</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Status</dt><dd className="text-base text-gray-900">Realized (Exited)</dd></div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
