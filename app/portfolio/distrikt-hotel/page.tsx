"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  "/projects/distrikt-hotel/distrikt-hotel-1.jpg",
  "/projects/distrikt-hotel/distrikt-hotel-2.jpg",
  "/projects/distrikt-hotel/distrikt-hotel-3.jpg",
  "/projects/distrikt-hotel/distrikt-hotel-4.jpg",
];

export default function DistriktHotel() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">← Back to Portfolio</Link>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 mt-6">Distrikt Hotel New York City</h1>
            <p className="text-xl text-gray-300">New York, NY</p>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Distrikt Hotel New York City represents a contemporary hospitality investment in Manhattan's dynamic urban landscape. The property combines modern design sensibilities with strategic positioning to serve both business and leisure travelers in one of the world's most competitive hotel markets. Its location provides convenient access to Manhattan's commercial districts, cultural attractions, and transportation infrastructure.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">The hotel's positioning within New York's diverse hospitality ecosystem reflects careful market analysis and operational strategy. The property targets value-conscious business travelers and tourists seeking quality accommodations with contemporary amenities at accessible price points, a segment demonstrating resilient demand characteristics through market cycles.</p>
              <p className="text-lg text-gray-700 leading-relaxed">K4's investment in Distrikt Hotel reflects our ability to evaluate opportunities in gateway markets with complex supply-demand dynamics. The investment demonstrates our expertise in underwriting urban hotel assets and structuring capital solutions appropriate for Manhattan's institutional-quality hospitality market. This exposure provides portfolio diversification across geographic markets and property types.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Strategic Manhattan location with strong accessibility and market fundamentals</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Contemporary design and amenities appealing to modern travelers</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Diversified demand base including corporate, leisure, and group segments</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Gateway market exposure with institutional depth and liquidity</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Experienced operator with local market expertise and proven track record</span></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-gray-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-k4-navy mb-6">Property Details</h3>
              <dl className="space-y-4">
                <div><dt className="text-sm font-medium text-gray-500">Location</dt><dd className="text-base text-gray-900">New York, NY</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Property Type</dt><dd className="text-base text-gray-900">Urban Hotel</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Brand</dt><dd className="text-base text-gray-900">Distrikt Hotel</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Asset Class</dt><dd className="text-base text-gray-900">Select Service Hospitality</dd></div>
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
