"use client"

import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import Card from "./Card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Africa",
    content:
      "Beelio Technologies transformed our IT infrastructure completely. Their cloud migration strategy was flawless, and we've seen a 40% reduction in operational costs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Michael Ochieng",
    role: "CEO",
    company: "Innovate Solutions",
    content:
      "The cybersecurity implementation was outstanding. We now have enterprise-grade protection, and their 24/7 support gives us complete peace of mind.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Amina Hassan",
    role: "Operations Director",
    company: "Global Manufacturing Ltd",
    content:
      "Their managed IT services have been a game-changer. We can focus on our core business while they handle all our technology needs seamlessly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-beelio-bg dark:bg-beelio-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Real feedback from businesses we've helped transform"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-6 flex-grow italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-beelio-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-beelio-primary dark:text-beelio-bg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-beelio-textSecondary dark:text-beelio-bg/70">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

