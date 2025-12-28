"use client"

import Card from "./Card"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  delay?: number
  tag?: string
  tagColor?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  delay = 0,
  tag,
  tagColor = "from-blue-500 to-cyan-500",
}: ServiceCardProps) {
  return (
    <Card delay={delay} className="h-full flex flex-col group">
      {/* Tag Badge */}
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
          className="mb-4"
        >
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${tagColor}`}>
            {tag}
          </span>
        </motion.div>
      )}
      
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-beelio-accent/20 to-beelio-accentDark/20 dark:from-beelio-accent/30 dark:to-beelio-accentDark/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-beelio-accent" />
      </motion.div>
      <h3 className="text-lg md:text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-3 group-hover:text-beelio-accent transition-colors tracking-tight">
        {title}
      </h3>
      <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80 mb-6 flex-grow leading-relaxed font-normal">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center text-beelio-accent font-bold hover:gap-3 transition-all group/link"
      >
        <span>Learn More</span>
        <motion.span
          className="inline-block"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowRight className="w-5 h-5 ml-2" />
        </motion.span>
      </Link>
    </Card>
  )
}

