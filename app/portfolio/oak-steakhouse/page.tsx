"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  "/projects/oak-steakhouse/oak-steakhouse-1.jpg",
  "/projects/oak-steakhouse/oak-steakhouse-2.jpg",
  "/projects/oak-steakhouse/oak-steakhouse-3.jpg",
];

export default function OakSteakhouse() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">← Back to Portfolio</Link>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 mt-6">Oak Steakhouse</h1>
            <p className="text-xl text-gray-300">Nashville, TN</p>
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
              <h2 className="text-3xl font-light text-k4-navy mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Oak Steakhouse Nashville represents a premier upscale dining destination in one of the nation's most dynamic culinary markets. The restaurant combines sophisticated ambiance, exceptional service, and high-quality cuisine to create a distinctive dining experience that appeals to both local clientele and visitors to Nashville's thriving hospitality scene.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Located in a prime Nashville location, Oak Steakhouse benefits from strong foot traffic, corporate entertainment demand, and special occasion dining. The restaurant's positioning within the upscale steakhouse segment provides exposure to both resilient local demand and tourism-driven visitation, supporting consistent performance through economic cycles.</p>
              <p className="text-lg text-gray-700 leading-relaxed">K4's investment in Oak Steakhouse reflects our interest in cash-flowing restaurant concepts with established brands, strong unit economics, and experienced operators. This investment demonstrates our ability to evaluate and finance hospitality operations beyond traditional hotel assets, leveraging our understanding of food and beverage operations to identify compelling opportunities.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Established upscale steakhouse brand with strong market reputation</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Prime Nashville location with excellent visibility and accessibility</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Resilient business model with diverse revenue streams including corporate and special occasion dining</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Experienced restaurant management with proven operational expertise</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Strong unit-level economics with attractive cash flow characteristics</span></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-gray-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-k4-navy mb-6">Property Details</h3>
              <dl className="space-y-4">
                <div><dt className="text-sm font-medium text-gray-500">Location</dt><dd className="text-base text-gray-900">Nashville, TN</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Property Type</dt><dd className="text-base text-gray-900">Upscale Restaurant</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Concept</dt><dd className="text-base text-gray-900">Fine Dining Steakhouse</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Asset Class</dt><dd className="text-base text-gray-900">Food & Beverage</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Investment Type</dt><dd className="text-base text-gray-900">Real Estate</dd></div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
