"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "THE WESTIN NASHVILLE",
    location: "Nashville, TN",
    description: "Luxury hotel in the heart of downtown Nashville",
    image: "/projects/westin-nashville/westin-nashville-1.jpg",
    href: "/portfolio/westin-nashville",
  },
  {
    title: "THE BOBBY NASHVILLE",
    location: "Nashville, TN",
    description: "Boutique hotel experience in Music City",
    image: "/projects/bobby-nashville/bobby-nashville-1.jpg",
    href: "/portfolio/bobby-nashville",
  },
  {
    title: "THE BOBBY BRAND",
    location: "Multi-location",
    description: "Expanding boutique hotel brand",
    image: "/projects/bobby-brand/bobby-brand-1.jpg",
    href: "/portfolio/bobby-brand",
  },
  {
    title: "OAK STEAKHOUSE",
    location: "Nashville, TN",
    description: "Premium dining destination",
    image: "/projects/oak-steakhouse/oak-steakhouse-1.jpg",
    href: "/portfolio/oak-steakhouse",
  },
  {
    title: "DISTRIKT HOTEL NEW YORK CITY",
    location: "New York, NY",
    description: "Contemporary hotel in Manhattan",
    image: "/projects/distrikt-hotel/distrikt-hotel-1.jpg",
    href: "/portfolio/distrikt-hotel",
  },
  {
    title: "THE WESTIN TAMPA BAY",
    location: "Tampa, FL",
    description: "Waterfront hotel and conference center",
    image: "/projects/westin-tampa/westin-tampa-1.jpg",
    href: "/portfolio/westin-tampa",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our diverse portfolio spans hospitality, real estate, and special situations
              across major markets in the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={project.href} className="group block">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`absolute inset-0 w-full h-full object-cover ${project.title === "THE WESTIN TAMPA" ? "object-top" : "object-center"}`}
                    />
                    {/* Subtle hover darkening */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                  </div>
                  <h3 className="text-2xl font-light text-k4-navy mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
