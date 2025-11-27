"use client"

import { useState } from "react"
import SectionHeader from "./SectionHeader"
import ProductCard from "./ProductCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const products = [
  {
    title: "Enterprise Server Solutions",
    description:
      "High-performance servers designed for mission-critical business applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Hardware",
    href: "/products/enterprise-servers",
  },
  {
    title: "Network Security Appliances",
    description:
      "Advanced firewall and security appliances to protect your network infrastructure.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    category: "Security",
    href: "/products/security-appliances",
  },
  {
    title: "Cloud Management Platform",
    description:
      "Unified platform for managing multi-cloud environments and resources.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "Software",
    href: "/products/cloud-platform",
  },
  {
    title: "Business Intelligence Suite",
    description:
      "Comprehensive analytics and reporting tools for data-driven decision making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Software",
    href: "/products/bi-suite",
  },
  {
    title: "Backup & Recovery Systems",
    description:
      "Reliable backup solutions to ensure business continuity and data protection.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Infrastructure",
    href: "/products/backup-systems",
  },
]

export default function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const currentProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  const next = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    )
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, products.length - itemsPerPage)
        : prev - itemsPerPage
    )
  }

  return (
    <section className="py-24 md:py-32 bg-beelio-bg dark:bg-beelio-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Products"
          subtitle="Enterprise Solutions"
          description="Cutting-edge IT products and tools to power your business"
          centered
        />
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProducts.map((product, i) => (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                >
                  <ProductCard {...product} delay={i * 0.1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {products.length > itemsPerPage && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-beelio-surface dark:bg-beelio-primaryLight rounded-full flex items-center justify-center shadow-lg hover:bg-beelio-accent hover:text-white transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-beelio-surface dark:bg-beelio-primaryLight rounded-full flex items-center justify-center shadow-lg hover:bg-beelio-accent hover:text-white transition-colors"
                aria-label="Next products"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerPage) === i
                    ? "bg-beelio-accent"
                    : "bg-beelio-border"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

