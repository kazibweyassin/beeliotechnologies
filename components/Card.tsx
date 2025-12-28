"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
  variant?: "default" | "elevated" | "bordered"
}

const variants = {
  default: "bg-beelio-surface dark:bg-beelio-primaryLight shadow-lg hover:shadow-2xl",
  elevated: "bg-beelio-surface dark:bg-beelio-primaryLight shadow-xl hover:shadow-2xl border border-beelio-border/50",
  bordered: "bg-beelio-surface dark:bg-beelio-primaryLight border-2 border-beelio-border dark:border-beelio-primaryLight shadow-md hover:shadow-xl",
}

export default function Card({
  children,
  className,
  hover = true,
  delay = 0,
  variant = "default",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }
          : undefined
      }
      className={cn(
        "rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 relative overflow-hidden group",
        variants[variant],
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-beelio-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

