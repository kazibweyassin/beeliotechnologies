"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={cn(
        centered ? "text-center max-w-4xl mx-auto mb-12 sm:mb-16" : "mb-12 sm:mb-16",
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-block text-beelio-accent font-bold text-sm uppercase tracking-[0.2em] mb-4 px-4 py-1.5 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-full"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        className="text-xl md:text-2xl lg:text-3xl font-extrabold text-beelio-primary dark:text-beelio-bg mb-4 sm:mb-6 leading-tight tracking-tight"
      >
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/70 leading-relaxed max-w-3xl mx-auto font-normal"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

