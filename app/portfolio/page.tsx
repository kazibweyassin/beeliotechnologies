import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import Button from "@/components/Button"
import Image from "next/image"
import { ArrowRight, TrendingUp, Shield, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio - Beelio Technologies",
  description: "Explore our successful projects and case studies showcasing our expertise in IT solutions.",
}

const caseStudies = [
  {
    title: "Digital Transformation for Financial Institution",
    description: "Migrated legacy systems to cloud infrastructure, reducing costs by 40% and improving performance by 300%.",
    metrics: { improvement: "300%", metric: "Performance" },
    icon: TrendingUp,
    category: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Cybersecurity Overhaul for Manufacturing",
    description: "Implemented comprehensive security framework protecting 10,000+ endpoints and achieving 99.9% uptime.",
    metrics: { improvement: "99.9%", metric: "Uptime" },
    icon: Shield,
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    title: "Enterprise Software Development",
    description: "Built custom ERP solution serving 500+ users, streamlining operations and increasing productivity by 50%.",
    metrics: { improvement: "50%", metric: "Productivity" },
    icon: Building2,
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
]

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Our Portfolio
            </h1>
            <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80">
              Explore our successful projects and case studies showcasing our expertise in delivering 
              transformative IT solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Case Studies"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => {
              const Icon = study.icon
              return (
                <Card key={i}>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-beelio-accent/90 dark:bg-beelio-accent rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-beelio-accent uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-2 mt-2">
                    {study.title}
                  </h3>
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-beelio-accent">
                        {study.metrics.improvement}
                      </div>
                      <div className="text-sm text-beelio-textSecondary dark:text-beelio-bg/80">
                        {study.metrics.metric} Improvement
                      </div>
                    </div>
                    <Button variant="outline">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

