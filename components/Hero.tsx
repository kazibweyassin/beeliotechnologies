"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Button from "./Button"
import Image from "next/image"
import { ArrowRight, Play, Volume2 } from "lucide-react"

const heroImages = [
  "/hero_banner_72c5560d49.png",
  "/hero_bannertwo.png",
  "/Cloud-services.jpg", // Using one of the other images as third slide
]

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "1000+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-beelio-primaryDark">
      {/* Image Slider Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentSlide]}
              alt={`Hero slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-beelio-primaryDark/80 via-beelio-primaryDark/70 to-beelio-primaryDark/80" />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-beelio-primaryDark/90 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex flex-col pt-24 md:pt-32">
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
            {/* Left Side - Headline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-block"
                >
                  We Are Positioning{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="inline-block"
                >
                  Africa to Maximize{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="inline-block bg-gradient-to-r from-beelio-accent to-beelio-accentDark bg-clip-text text-transparent"
                >
                  the Future
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-base md:text-lg text-white/90 mb-10 max-w-xl leading-relaxed"
              >
                We have over two decades of immense contribution to the
                Information Communication & Technology Sector across Africa.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  className="group bg-beelio-accent hover:bg-beelio-accentDark text-white border-0"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Explore Solutions
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Video/Story Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Video/Story Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 cursor-pointer group"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-beelio-accent rounded-full flex items-center justify-center group-hover:bg-beelio-accentDark transition-colors"
                    >
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        The Beelio Story
                      </h3>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <Volume2 className="w-4 h-4" />
                        <span>SOUND ON</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Discover how we&apos;re transforming businesses across Africa
                    through innovative IT solutions.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicators - Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="flex items-center gap-3 group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`h-12 transition-all duration-300 ${
                  currentSlide === index
                    ? "w-1 bg-beelio-accent"
                    : "w-0.5 bg-white/30 group-hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
              />
              <motion.span
                className={`text-sm font-medium transition-colors ${
                  currentSlide === index
                    ? "text-beelio-accent"
                    : "text-white/50 group-hover:text-white/70"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </button>
          ))}
        </motion.div>

        {/* Statistics - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 border-t border-white/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-beelio-accent mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.6 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base font-medium text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide Navigation Dots - Bottom Center (Mobile) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? "bg-beelio-accent w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
