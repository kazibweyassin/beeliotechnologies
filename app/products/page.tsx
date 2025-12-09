import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import ProductCard from "@/components/ProductCard"

export const metadata: Metadata = {
  title: "Products - Beelio Technologies",
  description: "Enterprise IT products including hardware, software tools, and enterprise solutions.",
}

const products = [
  {
    title: "Enterprise Server Solutions",
    description: "High-performance servers designed for mission-critical business applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Hardware",
    href: "/products/enterprise-servers",
  },
  {
    title: "Network Security Appliances",
    description: "Advanced firewall and security appliances to protect your network infrastructure.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    category: "Security",
    href: "/products/security-appliances",
  },
  {
    title: "Cloud Management Platform",
    description: "Unified platform for managing multi-cloud environments and resources.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    category: "Software",
    href: "/products/cloud-platform",
  },
  {
    title: "Business Intelligence Suite",
    description: "Comprehensive analytics and reporting tools for data-driven decision making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Software",
    href: "/products/bi-suite",
  },
  {
    title: "Backup & Recovery Systems",
    description: "Reliable backup solutions to ensure business continuity and data protection.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Infrastructure",
    href: "/products/backup-systems",
  },
  {
    title: "Storage Solutions",
    description: "Scalable storage systems for enterprise data management and archiving.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Hardware",
    href: "/products/storage-solutions",
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Our Products
            </h1>
            <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80">
              Enterprise IT products including hardware, software tools, and enterprise solutions 
              to power your business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Product Categories"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

