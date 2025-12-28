"use client"

import { motion } from "framer-motion"
import Button from "./Button"
import Container from "./Container"

interface CTABannerProps {
  title: string
  description?: string
  primaryButton?: { text: string; href: string }
  secondaryButton?: { text: string; href: string }
  variant?: "primary" | "accent"
}

export default function CTABanner({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "accent",
}: CTABannerProps) {
  const bgClass =
    variant === "accent"
      ? "bg-gradient-to-br from-beelio-accent to-beelio-accentDark"
      : "bg-gradient-to-br from-beelio-primaryDark to-beelio-primary"

  return (
    <section className={`${bgClass} py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight px-2"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/95 text-sm md:text-base mb-8 sm:mb-10 leading-relaxed font-normal px-2"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryButton && (
              <Button
                href={primaryButton.href}
                variant={variant === "accent" ? "primary" : "secondary"}
                size="lg"
              >
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button
                href={secondaryButton.href}
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-beelio-primaryDark"
              >
                {secondaryButton.text}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

