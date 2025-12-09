"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp, Shield, Users, CheckCircle2 } from "lucide-react"
import SectionHeader from "./SectionHeader"

const achievements = [
  {
    icon: TrendingUp,
    title: "145% Growth",
    description: "Year-over-year revenue growth in 2024",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "98% Retention",
    description: "Client satisfaction and retention rate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "ISO Certified",
    description: "ISO 27001 & SOC 2 compliant operations",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "50+ Awards",
    description: "Industry recognition and accolades",
    color: "from-amber-500 to-orange-500",
  },
]

const certifications = [
  "ISO 27001:2013 Information Security",
  "ISO 9001:2015 Quality Management",
  "SOC 2 Type II Compliance",
  "Microsoft Gold Partner",
  "AWS Advanced Consulting Partner",
  "Cisco Premier Partner",
]

export default function CompanyImpact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-beelio-primaryDark dark:to-beelio-primary">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Impact & Achievements"
          subtitle="Driving digital transformation across Africa with proven results"
          centered
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white dark:bg-beelio-primary/50 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-beelio-accent/50 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-beelio-primary dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-beelio-textSecondary dark:text-beelio-lightGray text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-beelio-primary/30 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-beelio-primary dark:text-white mb-3">
              Industry Certifications & Partnerships
            </h3>
            <p className="text-beelio-textSecondary dark:text-beelio-lightGray max-w-2xl mx-auto">
              We maintain the highest standards through rigorous certifications and strategic partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-beelio-primaryDark/50 hover:bg-beelio-accent/5 dark:hover:bg-beelio-accent/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-beelio-accent flex-shrink-0 mt-0.5" />
                <span className="text-beelio-primary dark:text-white font-medium text-sm">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-beelio-accent to-beelio-accentDark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Quality Policy
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Beelio Technologies shall deliver ICT Solutions that add value to our customer's 
              operations, meet and exceed expectations, and deliver them right first time, every time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
