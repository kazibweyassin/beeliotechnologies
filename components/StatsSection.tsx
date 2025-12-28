"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Award, Users, Briefcase, Clock } from "lucide-react"

const stats = [
  { 
    value: 500, 
    suffix: "+", 
    label: "Clients Served",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    value: 1000, 
    suffix: "+", 
    label: "Projects Completed",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500"
  },
  { 
    value: 50, 
    suffix: "+", 
    label: "Industry Awards",
    icon: Award,
    color: "from-amber-500 to-orange-500"
  },
  { 
    value: 24, 
    suffix: "/7", 
    label: "Support Available",
    icon: Clock,
    color: "from-purple-500 to-pink-500"
  },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    requestAnimationFrame(animateCount)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-beelio-primaryDark via-beelio-primary to-beelio-primaryDark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Icon with gradient */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Stat Number */}
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
                    <AnimatedCounter value={stat.value} />
                    <span className="text-beelio-accent">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-base md:text-lg text-beelio-lightGray font-medium">
                    {stat.label}
                  </p>

                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "15+", label: "Years in Business" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10+", label: "Countries Served" },
            { value: "ISO", label: "Certified" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-beelio-lightGray">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
