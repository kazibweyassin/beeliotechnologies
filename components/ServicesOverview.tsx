"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Server,
  Cloud,
  Shield,
  Briefcase,
  Code,
} from "lucide-react"

const services = [
  {
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support to keep your infrastructure running smoothly 24/7.",
    subtitle: "Solutions across Africa",
    icon: Server,
    href: "/services/managed-it",
    image: "/Technical-Support-Consulting-cybersecurite.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to modernize your business operations.",
    subtitle: "Solutions across Africa",
    icon: Cloud,
    href: "/services/cloud-solutions",
    image: "/Cloud-services.jpg",
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced security solutions to protect your business from threats and ensure compliance.",
    subtitle: "Solutions across Africa",
    icon: Shield,
    href: "/services/cybersecurity",
    image: "/Security-Services.jpg",
  },
  {
    title: "IT Consultancy",
    description:
      "Strategic IT consulting to help you make informed decisions and optimize your technology investments.",
    subtitle: "Solutions across Africa",
    icon: Briefcase,
    href: "/services/it-consultancy",
    image: "/Networking-Services-data-cabling-1024x696-1.jpg",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from web apps to enterprise systems.",
    subtitle: "Solutions across Africa",
    icon: Code,
    href: "/services/software-development",
    image: "/services-title-image.jpg",
  },
]

export default function ServicesOverview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const currentService = services[currentIndex]

  return (
    <section className="py-24 md:py-32 bg-beelio-bg dark:bg-beelio-primaryDark relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-beelio-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-beelio-accentDark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Service Slideshow */}
          <div className="bg-white dark:bg-beelio-primary rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px]">
              {/* Left Side - Image */}
              <div className="relative h-[300px] md:h-[400px] lg:h-full order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentService.image}
                      alt={currentService.title}
                      fill
                      className="object-cover"
                      priority={currentIndex === 0}
                      quality={90}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-sm font-medium text-beelio-textSecondary dark:text-beelio-bg/70 mb-4 uppercase tracking-wider"
                    >
                      {currentService.subtitle}
                    </motion.p>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-beelio-primary dark:text-beelio-bg mb-6 leading-tight"
                    >
                      {currentService.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 mb-8 leading-relaxed max-w-xl"
                    >
                      {currentService.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href={currentService.href}
                        className="inline-flex items-center text-beelio-primary dark:text-beelio-accent font-bold text-lg hover:gap-3 transition-all group"
                      >
                        <span>Explore all</span>
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/90 dark:bg-beelio-primaryLight/90 backdrop-blur-sm rounded-full flex items-center justify-center text-beelio-primary dark:text-beelio-bg hover:bg-white dark:hover:bg-beelio-primaryLight transition-all shadow-lg hover:scale-110"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-beelio-accent hover:bg-beelio-accentDark rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-110"
                aria-label="Next service"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators - Bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-beelio-accent w-8"
                      : "bg-beelio-textSecondary/30 hover:bg-beelio-textSecondary/50 w-2"
                  }`}
                  aria-label={`Go to ${services[index].title}`}
                />
              ))}
            </div>
          </div>

          {/* Service Icons Grid - Below Slideshow */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group flex flex-col items-center p-4 rounded-xl transition-all ${
                  currentIndex === index
                    ? "bg-beelio-accent/10 dark:bg-beelio-accent/20 border-2 border-beelio-accent"
                    : "bg-white/50 dark:bg-beelio-primaryLight/30 border-2 border-transparent hover:border-beelio-accent/50"
                }`}
                aria-label={`View ${service.title}`}
              >
                <service.icon
                  className={`w-6 h-6 mb-2 transition-colors ${
                    currentIndex === index
                      ? "text-beelio-accent"
                      : "text-beelio-textSecondary dark:text-beelio-bg/70 group-hover:text-beelio-accent"
                  }`}
                />
                <span
                  className={`text-xs font-medium text-center leading-tight ${
                    currentIndex === index
                      ? "text-beelio-accent"
                      : "text-beelio-textSecondary dark:text-beelio-bg/70 group-hover:text-beelio-primary dark:group-hover:text-beelio-accent"
                  }`}
                >
                  {service.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
