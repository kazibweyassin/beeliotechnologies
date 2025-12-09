"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const industries = [
  {
    title: "Financial Service Institutions",
    description:
      "Globally, Financial Services Institutions are constantly undergoing technological upgrades. Beelio Technologies supports this drive in Financial Technology platforms and provides cloud services and software solutions to financial institutions across Africa. We have successfully implemented and supported core banking applications and digital transformation initiatives that power modern banking systems.",
    image: "/money-3602159.jpg",
    stats: "60% of financial institutions in East Africa trust our solutions",
    clientCount: "25+ Banks"
  },
  {
    title: "Telecommunications",
    description:
      "The telecommunications sector requires robust, scalable infrastructure to support growing connectivity demands. Beelio Technologies delivers cutting-edge network solutions, cloud infrastructure, and managed services that enable telecom operators to provide reliable, high-speed connectivity to millions of users across Africa.",
    image: "https://images.unsplash.com/photo-1609930196695-25f1f779ba47?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: "50% of mobile calls route through our managed infrastructure",
    clientCount: "Major Carriers"
  },
  {
    title: "Public Sector",
    description:
      "Government institutions need secure, efficient digital solutions to serve citizens effectively. We provide e-government solutions, secure infrastructure, and digital transformation services that help public sector organizations modernize operations, improve transparency, and deliver better services to citizens.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: "Serving 15+ government agencies across Africa",
    clientCount: "Regional Impact"
  },
  {
    title: "Healthcare",
    description:
      "Healthcare organizations rely on secure, compliant IT systems to manage patient data and deliver quality care. Beelio Technologies offers specialized healthcare IT solutions including secure data management, telemedicine platforms, and compliance-focused infrastructure that help healthcare providers improve patient outcomes.",
    image: "/home_1_e585da2d2b.png",
    stats: "HIPAA-compliant solutions powering healthcare delivery",
    clientCount: "30+ Facilities"
  },
  {
    title: "Manufacturing",
    description:
      "Modern manufacturing requires integrated IT systems for operations, supply chain management, and quality control. We provide industrial IT solutions, IoT integration, and enterprise software that enable manufacturers to optimize production, reduce costs, and maintain competitive advantage in the digital age.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    stats: "35% improvement in operational efficiency for manufacturers",
    clientCount: "Industrial Leaders"
  },
  {
    title: "Education",
    description:
      "Educational institutions need reliable technology infrastructure to support learning, research, and administration. Beelio Technologies delivers comprehensive IT solutions including learning management systems, campus networks, and cloud services that empower educational institutions to provide quality education and research capabilities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    stats: "Supporting digital learning for 100,000+ students",
    clientCount: "Universities"
  },
]

export default function IndustriesWeDominate() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length)
  }

  const currentIndustry = industries[currentIndex]

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-beelio-primaryDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg">
            Industries we dominate
          </h2>
        </motion.div>

        {/* Industry Slideshow */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px]">
            {/* Left Side - Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-full order-2 lg:order-1 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentIndustry.image}
                    alt={currentIndustry.title}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                    quality={90}
                  />
                  {/* Gradient overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-br from-beelio-primaryDark/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-beelio-accent to-beelio-accentDark">
                      {currentIndustry.clientCount}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-4 leading-tight"
                  >
                    {currentIndustry.title}
                  </motion.h3>

                  {/* Impact Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 p-4 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-lg border border-beelio-accent/20"
                  >
                    <p className="text-sm font-bold text-beelio-accent">
                      {currentIndustry.stats}
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-beelio-textSecondary dark:text-beelio-bg/80 leading-relaxed"
                  >
                    {currentIndustry.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-beelio-surface dark:bg-beelio-primaryLight rounded-full flex items-center justify-center text-beelio-primary dark:text-beelio-bg hover:bg-beelio-accent hover:text-white transition-all shadow-md hover:scale-110"
              aria-label="Previous industry"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-beelio-accent w-8"
                      : "bg-beelio-textSecondary/30 hover:bg-beelio-textSecondary/50 w-2"
                  }`}
                  aria-label={`Go to ${industries[index].title}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-beelio-accent hover:bg-beelio-accentDark rounded-full flex items-center justify-center text-white transition-all shadow-md hover:scale-110"
              aria-label="Next industry"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

