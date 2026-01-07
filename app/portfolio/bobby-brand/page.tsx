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
];

export default function BobbyBrand() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">← Back to Portfolio</Link>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 mt-6">The Bobby Brand</h1>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">The Bobby Hotel brand represents an innovative approach to boutique hospitality, blending contemporary design, local culture, and experiential programming into a cohesive brand platform. Following the successful launch of The Bobby Nashville, the brand has demonstrated strong unit economics and guest reception, positioning it for strategic expansion into select markets.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">K4's investment in The Bobby brand platform extends beyond individual properties to encompass the broader brand infrastructure, intellectual property, and growth strategy. This investment reflects our expertise in evaluating scalable hospitality concepts and providing flexible capital solutions that support both property-level investments and corporate growth initiatives.</p>
              <p className="text-lg text-gray-700 leading-relaxed">The brand's expansion strategy focuses on markets with strong fundamentals for experiential hospitality, emphasizing quality over quantity and maintaining the authentic character that differentiates The Bobby from conventional hotel offerings. This disciplined approach to growth aligns with K4's investment philosophy of supporting sustainable value creation.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Proven brand concept with strong unit economics and operational track record</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Strategic expansion plan targeting high-growth urban markets</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Differentiated positioning in growing lifestyle hospitality segment</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Experienced management team with hospitality development expertise</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Scalable brand platform with institutional backing</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Multiple value creation pathways including brand appreciation and property-level returns</span></li>
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
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
