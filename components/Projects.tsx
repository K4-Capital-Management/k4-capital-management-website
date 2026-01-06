"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    title: "THE WESTIN NASHVILLE",
    image: "/projects/westin-nashville.webp",
    href: "/portfolio/westin-nashville",
  },
  {
    title: "THE BOBBY NASHVILLE",
    image: "/projects/bobby-nashville.webp",
    href: "/portfolio/bobby-nashville",
  },
  {
    title: "THE BOBBY BRAND",
    image: "/projects/bobby-brand.webp",
    href: "/portfolio/bobby-brand",
  },
  {
    title: "OAK STEAKHOUSE",
    image: "/projects/oak-steakhouse.jpg",
    href: "/portfolio/oak-steakhouse",
  },
  {
    title: "DISTRIKT HOTEL NEW YORK",
    image: "/projects/distrikt-hotel.jpg",
    href: "/portfolio/distrikt-hotel",
  },
  {
    title: "THE WESTIN TAMPA",
    image: "/projects/westin-tampa.webp",
    href: "/portfolio/westin-tampa",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-k4-navy py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center text-4xl font-light text-white md:text-5xl"
        >
          Latest Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={project.href} className="group block">
                <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/3]">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-light text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300 transition-all group-hover:text-white">
                      View More →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
