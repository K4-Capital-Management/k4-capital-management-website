"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-light text-k4-navy md:text-5xl">
            Owner, Developer, Operator, and Investor of Real Assets
          </h2>
          <p className="mb-4 text-xl text-gray-600 font-light">
            Creating Value and Enhancing Communities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
            K4 Capital Management is a multi-strategy investment platform involved in a diverse 
            range of investment activities. While our primary focus is on real estate, we also 
            maintain the flexibility to invest in various asset classes, encompassing both debt 
            and equity opportunities. We are recognized as a leading investor across the capital 
            stack in real estate assets, loans, and special situations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
