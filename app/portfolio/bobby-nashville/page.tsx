"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { motion } from "framer-motion";
import Link from "next/link";

const galleryImages = [
  "/projects/bobby-nashville/bobby-nashville-1.jpg",
  "/projects/bobby-nashville/bobby-nashville-2.jpg",
  "/projects/bobby-nashville/bobby-nashville-3.jpg",
  "/projects/bobby-nashville/bobby-nashville-4.jpg",
  "/projects/bobby-nashville/bobby-nashville-5.jpg",
  "/projects/bobby-nashville/bobby-nashville-6.jpg",
  "/projects/bobby-nashville/bobby-nashville-7.jpg",
  "/projects/bobby-nashville/bobby-nashville-8.jpg",
  "/projects/bobby-nashville/bobby-nashville-9.jpg",
  "/projects/bobby-nashville/bobby-nashville-10.jpg",
  "/projects/bobby-nashville/bobby-nashville-11.jpg",
  "/projects/bobby-nashville/bobby-nashville-12.jpg",
];

export default function BobbyNashville() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/portfolio" className="text-gray-300 hover:text-white mb-4 inline-flex items-center gap-2">← Back to Portfolio</Link>
            <div className="flex flex-wrap items-center gap-4 mb-4 mt-6">
              <h1 className="text-5xl md:text-6xl font-light text-white">The Bobby Nashville</h1>
              <span className="rounded-full border border-gray-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-200">
                Realized
              </span>
            </div>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">As co-founder and creator of The Bobby Nashville, K4 conceived and developed the boutique hotel from inception, directing its design, brand identity, and guest experience in the heart of downtown Nashville. The property combined contemporary design with genuine southern hospitality to create a distinctive, experiential concept that resonated with both local and destination guests.</p>
              <p className="text-lg text-gray-700 leading-relaxed">The Bobby established a strong position in the market and served as the flagship and foundation for the broader Bobby brand. It exemplified our ability to create value from concept through completion, and we have since realized the investment through a full exit in 2025.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
              <h2 className="text-3xl font-light text-k4-navy mb-6">Investment Highlights</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Distinctive boutique hotel with strong local identity and guest loyalty</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Prime downtown Nashville location with excellent access to the city's core attractions</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Differentiated market positioning that supported a premium rate structure</span></li>
                <li className="flex items-start gap-3"><span className="text-k4-gold text-xl">•</span><span>Investment successfully realized through a full exit</span></li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-gray-50 rounded-lg p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-k4-navy mb-6">Property Details</h3>
              <dl className="space-y-4">
                <div><dt className="text-sm font-medium text-gray-500">Location</dt><dd className="text-base text-gray-900">Downtown Nashville, TN</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Property Type</dt><dd className="text-base text-gray-900">Boutique Hotel</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Brand</dt><dd className="text-base text-gray-900">The Bobby Brand</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Asset Class</dt><dd className="text-base text-gray-900">Hospitality</dd></div>
                <div><dt className="text-sm font-medium text-gray-500">Investment Type</dt><dd className="text-base text-gray-900">Real Estate</dd></div>
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
