"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  {
    name: "Kevin Fee",
    role: "Managing Partner",
    image: "/team/kevin-fee.jpg",
    href: "/team/kevin-fee",
  },
  {
    name: "Cole McNally",
    role: "Investment Associate",
    image: "/team/cole-mcnally.jpg",
    href: "/team/cole-mcnally",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Navy background like other pages */}
      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Experienced investment professionals with deep expertise in private credit, real estate finance, and hospitality operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light text-k4-navy mb-16 text-center"
          >
            Leadership
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <Link href={member.href} className="group block">
                  <div className="mb-6 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-k4-navy mb-2 group-hover:text-gray-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
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
