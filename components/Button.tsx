"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  ariaLabel?: string
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group tracking-tight"

  const variants = {
    primary:
      "bg-beelio-primaryDark dark:bg-beelio-accent text-white hover:bg-beelio-accent dark:hover:bg-beelio-accentDark shadow-lg hover:shadow-2xl hover:shadow-beelio-accent/50",
    secondary:
      "bg-beelio-accent text-white hover:bg-beelio-accentDark shadow-lg hover:shadow-2xl hover:shadow-beelio-accent/50",
    outline:
      "border-2 border-beelio-primaryDark dark:border-beelio-accent text-beelio-primaryDark dark:text-beelio-accent bg-transparent hover:bg-beelio-primaryDark dark:hover:bg-beelio-accent hover:text-white hover:border-transparent",
    ghost:
      "text-beelio-primaryDark dark:text-beelio-accent hover:bg-beelio-bg dark:hover:bg-beelio-primaryLight",
  }

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" || variant === "secondary" ? (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-beelio-accent/20 to-beelio-accentDark/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      ) : null}
    </>
  )

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link
          href={href}
          className={cn(baseStyles, sizeClasses[size], variants[variant], className, "relative overflow-hidden")}
          aria-label={ariaLabel}
        >
          {buttonContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, sizeClasses[size], variants[variant], className, "relative overflow-hidden")}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </motion.button>
  )
}

