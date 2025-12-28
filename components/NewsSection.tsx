"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import SectionHeader from "./SectionHeader"
import Image from "next/image"

const newsArticles = [
  {
    title: "Beelio Technologies Expands Cloud Services Across East Africa",
    excerpt: "New data centers in Kenya and Tanzania position Beelio as the leading cloud provider in the region.",
    category: "Press Release",
    date: "November 15, 2025",
    readTime: "4 mins",
    image: "/Cloud-services.jpg",
    href: "/blog",
  },
  {
    title: "Achieving 98% Client Satisfaction: Our Commitment to Excellence",
    excerpt: "How our dedicated support team and innovative solutions drive customer success stories.",
    category: "Company News",
    date: "November 08, 2025",
    readTime: "5 mins",
    image: "/Technical-Support-Consulting-cybersecurite.jpg",
    href: "/blog",
  },
  {
    title: "Cybersecurity in 2025: Protecting African Businesses from Emerging Threats",
    excerpt: "Our experts share insights on the latest cybersecurity trends and best practices for enterprises.",
    category: "Insights",
    date: "October 28, 2025",
    readTime: "6 mins",
    image: "/Security-Services.jpg",
    href: "/blog",
  },
  {
    title: "Digital Transformation Success: Financial Institution Case Study",
    excerpt: "How we helped a major African bank modernize their infrastructure and reduce costs by 40%.",
    category: "Case Study",
    date: "October 15, 2025",
    readTime: "7 mins",
    image: "/services-title-image.jpg",
    href: "/blog",
  },
]

const categoryColors: Record<string, string> = {
  "Press Release": "from-blue-500 to-cyan-500",
  "Company News": "from-green-500 to-emerald-500",
  "Insights": "from-purple-500 to-pink-500",
  "Case Study": "from-amber-500 to-orange-500",
}

export default function NewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-beelio-primaryDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
          <SectionHeader
            title="Latest News & Insights"
            subtitle="Stay updated with our latest achievements and industry perspectives"
          />
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center text-beelio-accent font-bold hover:gap-3 transition-all group"
          >
            <span>View all articles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {newsArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={article.href} className="block">
                <div className="bg-gray-50 dark:bg-beelio-primary rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-beelio-accent/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-beelio-textSecondary dark:text-beelio-lightGray mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-beelio-primary dark:text-white mb-2 group-hover:text-beelio-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-lightGray mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-beelio-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Trending Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-beelio-accent/10 to-beelio-accentDark/10 dark:from-beelio-accent/20 dark:to-beelio-accentDark/20 rounded-xl p-6 border border-beelio-accent/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-beelio-accent" />
            <h3 className="text-lg md:text-xl font-bold text-beelio-primary dark:text-white">
              Trending Topics
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Cloud Migration", "AI & ML", "Cybersecurity", "Digital Transformation", "DevOps", "Data Analytics"].map((topic, index) => (
              <Link
                key={index}
                href="/blog"
                className="px-4 py-2 bg-white dark:bg-beelio-primary rounded-full text-sm font-medium text-beelio-primary dark:text-white hover:bg-beelio-accent hover:text-white transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
