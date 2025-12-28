"use client"

import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import Card from "./Card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Africa",
    content:
      "Beelio Technologies transformed our IT infrastructure completely. Their cloud migration strategy was flawless, and we've seen a 40% reduction in operational costs.",
    rating: 5,
  },
  {
    name: "Michael Ochieng",
    role: "CEO",
    company: "Innovate Solutions",
    content:
      "The cybersecurity implementation was outstanding. We now have enterprise-grade protection, and their 24/7 support gives us complete peace of mind.",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "Operations Director",
    company: "Global Manufacturing Ltd",
    content:
      "Their managed IT services have been a game-changer. We can focus on our core business while they handle all our technology needs seamlessly.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-beelio-bg dark:bg-beelio-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Real feedback from businesses we've helped transform"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Card className="h-full flex flex-col">
                <Quote className="w-12 h-12 text-beelio-accent/30 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-5 h-5 ${
                        j < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-beelio-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80 mb-6 flex-grow italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="pt-4 border-t border-beelio-border">
                  <p className="text-base md:text-lg font-bold text-beelio-primary dark:text-beelio-bg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/70">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

