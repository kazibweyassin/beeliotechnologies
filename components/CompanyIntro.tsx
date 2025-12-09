"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CompanyIntro() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-beelio-primaryDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Beelio Technologies"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold text-beelio-primary dark:text-beelio-bg mb-6"
            >
              <span className="text-beelio-accent">Beelio</span> is a leading African multinational technology systems solutions company
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80 mb-4 leading-relaxed"
            >
              Specializing in a broad range of IT services including communications and integration, infrastructure services, managed and support services, cloud solutions, and software development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 leading-relaxed"
            >
              With a strong footprint across Africa, Beelio leverages a robust partnership network to connect businesses, enterprises, governments, and consumers. Through our value-added services, we help clients streamline their operations, enhance efficiency, and drive meaningful improvements across various sectors.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

