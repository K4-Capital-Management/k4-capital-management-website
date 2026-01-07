"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  "/projects/westin-nashville/westin-nashville-1.jpg",
  "/projects/westin-nashville/westin-nashville-2.jpg",
  "/projects/westin-nashville/westin-nashville-3.jpg",
  "/projects/westin-nashville/westin-nashville-4.jpg",
  "/projects/westin-nashville/westin-nashville-5.jpg",
  "/projects/westin-nashville/westin-nashville-6.jpg",
  "/projects/westin-nashville/westin-nashville-7.jpg",
  "/projects/westin-nashville/westin-nashville-8.jpg",
  "/projects/westin-nashville/westin-nashville-9.jpg",
];

export default function WestinNashville() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">
              ← Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4 mt-6">The Westin Nashville</h1>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Westin Nashville represents a premier hospitality investment in the heart of Music City's vibrant downtown district. This luxury hotel serves as a flagship property in one of the nation's fastest-growing hospitality markets, offering exceptional amenities and proximity to Nashville's entertainment and business corridors.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located in downtown Nashville's central business district, the property benefits from strong convention demand, corporate travel, and leisure tourism driven by the city's reputation as a premier entertainment destination. The hotel's strategic positioning provides access to the Music City Center, Broadway's entertainment district, and Nashville's expanding corporate office market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                K4 Capital Management's investment in The Westin Nashville reflects our strategy of deploying capital in high-quality hospitality assets within markets demonstrating strong demographic growth, business activity, and tourism fundamentals. The property aligns with our focus on real estate-backed investments offering stable cash flows and appreciation potential.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Prime downtown Nashville location with strong leisure and corporate demand</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Proximity to Music City Center convention facility and downtown entertainment district</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Institutional-quality asset with established brand recognition and operational track record</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Market benefiting from strong population growth and expanding corporate presence</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Full-service hotel with extensive meeting and event facilities</span></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-gray-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-k4-navy mb-6">Property Details</h3>
              <dl className="space-y-4">
                <div><dt className="text-sm font-medium text-gray-500">Location</dt><dd className="text-base text-gray-900">Downtown Nashville, TN</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Property Type</dt><dd className="text-base text-gray-900">Luxury Hotel</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Brand</dt><dd className="text-base text-gray-900">Westin Hotels & Resorts</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Asset Class</dt><dd className="text-base text-gray-900">Hospitality</dd></div>
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
