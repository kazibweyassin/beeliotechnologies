import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Beelio Technologies",
  description: "Latest insights, news, and articles about IT solutions, technology trends, and digital transformation.",
}

const blogPosts = [
  {
    title: "The Future of Cloud Computing in Africa",
    excerpt: "Exploring how cloud technologies are transforming businesses across the African continent.",
    date: "2024-01-15",
    category: "Cloud Solutions",
  },
  {
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Essential security measures every business should implement to protect against modern threats.",
    date: "2024-01-10",
    category: "Cybersecurity",
  },
  {
    title: "Digital Transformation: A Strategic Guide",
    excerpt: "How to successfully navigate your organization's digital transformation journey.",
    date: "2024-01-05",
    category: "IT Consultancy",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Our Blog
            </h1>
            <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80">
              Latest insights, news, and articles about IT solutions, technology trends, 
              and digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest Articles"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Card key={i}>
                <span className="text-xs font-semibold text-beelio-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-2 mt-2">
                  {post.title}
                </h3>
                <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-beelio-textSecondary dark:text-beelio-bg/80">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-beelio-accent font-semibold hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

