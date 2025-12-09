"use client"

import SectionHeader from "@/components/SectionHeader"
import ServiceCard from "@/components/ServiceCard"
import {
  Server,
  Cloud,
  Shield,
  Briefcase,
  Code,
} from "lucide-react"

const services = [
  {
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support to keep your infrastructure running smoothly 24/7. We handle everything from network monitoring to help desk support.",
    icon: Server,
    href: "/services/managed-it",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to modernize your business operations. From AWS to Azure, we've got you covered.",
    icon: Cloud,
    href: "/services/cloud-solutions",
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced security solutions to protect your business from threats and ensure compliance. Multi-layered defense for complete protection.",
    icon: Shield,
    href: "/services/cybersecurity",
  },
  {
    title: "IT Consultancy",
    description:
      "Strategic IT consulting to help you make informed decisions and optimize your technology investments. Expert guidance when you need it most.",
    icon: Briefcase,
    href: "/services/it-consultancy",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs, from web apps to enterprise systems. Built with modern technologies and best practices.",
    icon: Code,
    href: "/services/software-development",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Our Solutions
            </h1>
            <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80">
              Comprehensive IT solutions designed to drive your business forward.
              From infrastructure management to custom software development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We Offer"
            description="Choose from our range of enterprise-grade IT solutions"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

