"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  "/projects/westin-tampa/westin-tampa-1.jpg",
  "/projects/westin-tampa/westin-tampa-2.jpg",
  "/projects/westin-tampa/westin-tampa-3.jpg",
  "/projects/westin-tampa/westin-tampa-4.jpg",
  "/projects/westin-tampa/westin-tampa-5.jpg",
];

export default function WestinTampa() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">← Back to Portfolio</Link>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 mt-6">The Westin Tampa Bay</h1>
            <p className="text-xl text-gray-300">Tampa, FL</p>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">The Westin Tampa Bay represents a flagship hospitality investment in one of Florida's most dynamic business and leisure markets. This waterfront property serves as a premier destination for both corporate travelers and convention attendees, benefiting from Tampa's position as a major Southeast business hub and growing tourism market. The hotel's location provides direct access to Tampa's downtown business district and waterfront attractions.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">The property combines full-service hotel amenities with extensive meeting and conference facilities, positioning it to capture demand from Tampa's robust convention center and expanding corporate presence. Florida's favorable business climate and population growth trends support continued strength in both business travel and leisure tourism, providing multiple demand drivers for the property's performance.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Waterfront location in Tampa's central business district with convention proximity</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Full-service Westin brand with established reputation and operational excellence</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Extensive meeting and conference facilities supporting group demand</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Market benefiting from Florida's business-friendly environment and population growth</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Diversified revenue base including corporate, leisure, and group segments</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Strategic Florida market exposure with year-round tourism appeal</span></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-gray-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-k4-navy mb-6">Property Details</h3>
              <dl className="space-y-4">
                <div><dt className="text-sm font-medium text-gray-500">Location</dt><dd className="text-base text-gray-900">Downtown Tampa, FL</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Property Type</dt><dd className="text-base text-gray-900">Luxury Hotel</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Brand</dt><dd className="text-base text-gray-900">Westin Hotels & Resorts</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Asset Class</dt><dd className="text-base text-gray-900">Hospitality</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Investment Type</dt><dd className="text-base text-gray-900">Private Credit / Real Estate</dd></div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
