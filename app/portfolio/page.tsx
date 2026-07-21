"use client";

import { useState } from "react";
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
    exited: true,
  },
  {
    title: "THE BOBBY BRAND",
    location: "Multi-location",
    description: "Expanding boutique hotel brand",
    image: "/projects/bobby-brand/bobby-brand-1.jpg",
    href: "/portfolio/bobby-brand",
    exited: true,
  },
  {
    title: "OAK STEAKHOUSE",
    location: "Nashville, TN",
    description: "Premium dining destination",
    image: "/projects/oak-steakhouse/oak-steakhouse-1.jpg",
    href: "/portfolio/oak-steakhouse",
  },
  {
    title: "DISTRIKT HOTEL NYC",
    location: "New York, NY",
    description: "Contemporary hotel in Manhattan",
    image: "/projects/distrikt-hotel/distrikt-hotel-1.jpg",
    href: "/portfolio/distrikt-hotel",
    exited: true,
  },
  {
    title: "THE WESTIN TAMPA BAY",
    location: "Tampa, FL",
    description: "Waterfront hotel and conference center",
    image: "/projects/westin-tampa/westin-tampa-1.jpg",
    href: "/portfolio/westin-tampa",
    exited: true,
  },
];

// Venture capital investments. Add a logo file to /public/ventures/ for each entry.
const ventures = [
  {
    name: "Privateer",
    descriptor: "AI geospatial intelligence, from sea to space",
    logo: "/ventures/privateer.svg",
    url: "https://www.privateer.com",
    fullBleed: true,
    zoom: 0.75,
  },
  {
    name: "Replit",
    descriptor: "AI-powered software development platform",
    logo: "/ventures/replit.webp",
    url: "https://replit.com",
    fullBleed: true,
  },
  {
    name: "Irys",
    descriptor: "Unified AI platform for legal work",
    logo: "/ventures/irys.png",
    url: "https://www.irys.ai",
    fullBleed: true,
    fit: "cover" as const,
  },
  {
    name: "Lucid Bots",
    descriptor: "Robotics for dangerous, hard-to-reach work",
    logo: "/ventures/lucidbots.jpg",
    url: "https://lucidbots.com",
    fullBleed: true,
    lightBg: true,
    zoom: 0.85,
  },
  {
    name: "Deribit",
    descriptor: "Crypto options and futures exchange",
    logo: "/ventures/deribit.jpg",
    url: "https://deribit.com",
    fullBleed: true,
    fit: "cover" as const,
  },
  {
    name: "Ledger",
    descriptor: "Security and self-custody for digital assets",
    logo: "/ventures/ledger.jpg",
    url: "https://ledger.com",
    fullBleed: true,
  },
  {
    name: "Off Court",
    descriptor: "The first social media platform owned by NBA and WNBA players",
    logo: "/ventures/offcourt.jpg",
    url: "https://offcourt.io",
    fullBleed: true,
    zoom: 0.65,
  },
  {
    name: "Yext",
    descriptor: "Digital presence and search platform for brands",
    logo: "/ventures/yext.png",
    url: "https://yext.com",
    fullBleed: true,
    fit: "cover" as const,
  },
];

type Tab = "realEstate" | "ventures";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("realEstate");

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
              From hospitality and real estate to early-stage venture investments,
              our portfolio spans major markets and sectors across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Toggle */}
      <section className="px-6 pt-12">
        <div className="mx-auto max-w-7xl flex justify-center">
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-gray-50">
            <button
              onClick={() => setActiveTab("realEstate")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === "realEstate"
                  ? "bg-k4-navy text-white"
                  : "text-gray-500 hover:text-k4-navy"
              }`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setActiveTab("ventures")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === "ventures"
                  ? "bg-k4-navy text-white"
                  : "text-gray-500 hover:text-k4-navy"
              }`}
            >
              Venture Capital
            </button>
          </div>
        </div>
      </section>

      {/* Real Estate Grid */}
      {activeTab === "realEstate" && (
        <section className="py-16 px-6">
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
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-light text-k4-navy group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.exited && (
                        <span className="rounded-full border border-gray-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                          Realized
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                    <p className="text-gray-600">{project.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Venture Capital Grid */}
      {activeTab === "ventures" && (
        <section className="py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ventures.map((venture, index) => (
                <motion.a
                  key={`${venture.name}-${index}`}
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={
                    venture.fullBleed
                      ? `group relative block overflow-hidden rounded-lg border border-gray-100 transition-all hover:shadow-md ${venture.lightBg ? "bg-white" : "bg-black"}`
                      : "group block rounded-lg border border-gray-100 bg-gray-50 p-8 text-center transition-all hover:shadow-md hover:bg-white"
                  }
                >
                  {venture.fullBleed ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={venture.logo}
                        alt={venture.name}
                        style={venture.zoom ? { transform: `scale(${venture.zoom})` } : undefined}
                        className={`absolute inset-0 h-full w-full ${venture.fit === "cover" ? "object-cover" : "object-contain"}`}
                      />
                      {/* Invisible spacer mirrors a standard card's layout so heights match */}
                      <div className="invisible p-8 text-center" aria-hidden="true">
                        <div className="h-20 mb-6" />
                        <p className="text-lg mb-1">{venture.name}</p>
                        <p className="text-sm">{venture.descriptor}</p>
                      </div>
                      {/* Description revealed on hover */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-k4-navy/85 px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-lg font-light text-white mb-1">{venture.name}</h3>
                        <p className="text-sm text-gray-200">{venture.descriptor}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex h-20 items-center justify-center mb-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={venture.logo}
                          alt={venture.name}
                          onError={(e) => {
                            e.currentTarget.src = "/ventures/placeholder.svg";
                          }}
                          className="max-h-16 w-auto object-contain grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                        />
                      </div>
                      <h3 className="text-lg font-light text-k4-navy mb-1">{venture.name}</h3>
                      <p className="text-sm text-gray-500">{venture.descriptor}</p>
                    </>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
