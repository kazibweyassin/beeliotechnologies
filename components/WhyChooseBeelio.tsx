"use client"

import SectionHeader from "./SectionHeader"
import Card from "./Card"
import { motion } from "framer-motion"
import {
  Award,
  Users,
  Clock,
  Globe,
  Shield,
  Zap,
} from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Award-Winning Excellence",
    description:
      "Recognized for outstanding service delivery and innovation in the IT industry.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our certified professionals bring years of experience and deep technical expertise.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support to ensure your systems never fail.",
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    description:
      "Serving businesses across Africa with localized support and understanding.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security protocols to protect your critical business data.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Fast implementation and deployment to get you up and running quickly.",
  },
]

export default function WhyChooseBeelio() {
  return (
    <section className="py-24 md:py-32 bg-beelio-surface dark:bg-beelio-primaryDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Beelio Technologies"
          subtitle="Our Advantages"
          description="What sets us apart in delivering exceptional IT solutions"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <Card key={i} delay={i * 0.1} className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-beelio-accent/20 to-beelio-accentDark/20 dark:from-beelio-accent/30 dark:to-beelio-accentDark/30 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-beelio-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-3">
                  {value.title}
                </h3>
                <p className="text-beelio-textSecondary dark:text-beelio-bg/80 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

