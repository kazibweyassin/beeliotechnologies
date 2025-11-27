"use client"

import Card from "./Card"
import Button from "./Button"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProductCardProps {
  title: string
  description: string
  image: string
  category: string
  href: string
  delay?: number
}

export default function ProductCard({
  title,
  description,
  image,
  category,
  href,
  delay = 0,
}: ProductCardProps) {
  return (
    <Card delay={delay} className="h-full flex flex-col group">
      <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden bg-beelio-bg group-hover:scale-105 transition-transform duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-beelio-primaryDark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        <motion.span
          className="absolute top-4 left-4 px-3 py-1 bg-beelio-accent text-white text-xs font-bold uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          {category}
        </motion.span>
      </div>
      <span className="text-xs font-bold text-beelio-accent uppercase tracking-wider mb-2">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-beelio-primary dark:text-beelio-bg mb-3 group-hover:text-beelio-accent transition-colors">
        {title}
      </h3>
      <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-6 text-sm flex-grow leading-relaxed">
        {description}
      </p>
      <Button href={href} variant="outline" className="w-full">
        View Details
      </Button>
    </Card>
  )
}

