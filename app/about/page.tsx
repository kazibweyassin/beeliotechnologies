import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CTABanner from "@/components/CTABanner"
import Image from "next/image"
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Beelio Technologies",
  description: "Learn about Beelio Technologies, our mission, vision, and commitment to empowering African businesses with enterprise-grade IT solutions.",
}

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower African businesses with cutting-edge IT solutions that drive growth, innovation, and digital transformation across the continent.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To become Africa's leading IT solutions provider, recognized for excellence, innovation, and transformative impact on businesses and communities.",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Integrity, excellence, innovation, and customer-centricity guide everything we do. We're committed to delivering value and building lasting partnerships.",
  },
]

const stats = [
  { value: "15+", label: "Years of Experience", icon: Award },
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "50+", label: "Countries Reached", icon: Globe },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              About Beelio Technologies
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Beelio Technologies is an IT company that provides a comprehensive range of IT products and services. 
              We don&apos;t only specialize in providing managed IT services, cloud solutions, infrastructure design, 
              enterprise software development and 24/7 support, but also supply top-quality IT products from renowned manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
                  Our Story
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
                    Beelio Technologies is an IT company that provides a comprehensive range of IT products and services. 
                    We don&apos;t only specialize in providing managed IT services, cloud solutions, infrastructure design, 
                    enterprise software development and 24/7 support, but also supply top-quality IT products from renowned manufacturers.
                  </p>
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
                    Our comprehensive approach sets us apart in the industry. We combine deep technical expertise with 
                    strategic partnerships with leading technology manufacturers, ensuring our clients have access to both 
                    cutting-edge solutions and premium hardware and software products.
                  </p>
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80">
                    Whether you need end-to-end IT management, cloud migration, custom software development, or enterprise-grade 
                    IT products, Beelio Technologies delivers integrated solutions that drive business growth and digital transformation 
                    across Africa.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-beelio-bg dark:bg-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Mission, Vision & Values"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Card key={i}>
                  <div className="w-12 h-12 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-beelio-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <Card key={i} hover={false}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-beelio-accent" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-beelio-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-beelio-textSecondary dark:text-beelio-bg/80">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work With Us?"
        description="Join hundreds of satisfied clients who trust Beelio Technologies for their IT needs."
        primaryButton={{ text: "Get in Touch", href: "/contact" }}
        secondaryButton={{ text: "View Services", href: "/services" }}
      />
    </>
  )
}

