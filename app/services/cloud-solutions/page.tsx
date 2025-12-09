import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CTABanner from "@/components/CTABanner"
import Button from "@/components/Button"
import Image from "next/image"
import { CheckCircle, Cloud, Zap, Shield, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Cloud Solutions - Beelio Technologies",
  description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
}

const benefits = [
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description: "Scale your resources up or down based on demand, paying only for what you use.",
  },
  {
    icon: Zap,
    title: "Improved Performance",
    description: "Leverage cloud-native technologies for faster, more reliable applications and services.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Enterprise-grade security with compliance certifications and advanced threat protection.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Reduce capital expenditure and optimize operational costs with cloud-first strategies.",
  },
]

const services = [
  "Cloud migration and strategy",
  "Multi-cloud architecture design",
  "Cloud infrastructure management",
  "DevOps and CI/CD pipelines",
  "Container orchestration (Kubernetes)",
  "Serverless computing",
  "Cloud security and compliance",
  "Cost optimization and monitoring",
]

const technologies = [
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "Jenkins",
]

export default function CloudSolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Cloud infrastructure"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Scalable cloud infrastructure and migration services to modernize your business operations. 
              From AWS to Azure, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Overview</h2>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
              Transform your business with our comprehensive cloud solutions. We help organizations migrate 
              to the cloud, optimize existing cloud infrastructure, and leverage cloud-native technologies 
              for competitive advantage.
            </p>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80">
              Our team of cloud architects and engineers work with leading cloud providers including AWS, 
              Azure, and Google Cloud to deliver scalable, secure, and cost-effective solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-bg dark:bg-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Key Benefits" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <Card key={i}>
                  <div className="w-12 h-12 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-beelio-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80">
                    {benefit.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Our Cloud Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <span className="text-beelio-textSecondary dark:text-beelio-bg/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-bg dark:bg-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-beelio-surface dark:bg-beelio-primaryLight rounded-lg text-beelio-primary dark:text-beelio-bg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Pricing Model</h2>
              <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-6">
                Cloud solutions pricing varies based on your specific requirements:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Project-Based:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Fixed pricing for migration and implementation projects
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Managed Services:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Monthly retainer for ongoing cloud management and optimization
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Consulting:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Hourly or daily rates for strategic cloud consulting
                    </span>
                  </div>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Request Custom Quote
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-bg dark:bg-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Which cloud provider should I choose?",
                  a: "We work with AWS, Azure, and GCP. The best choice depends on your specific needs, existing infrastructure, and business requirements. We'll help you make the right decision.",
                },
                {
                  q: "How long does cloud migration take?",
                  a: "Migration timelines vary based on complexity, but typically range from 2-6 months for most organizations. We'll provide a detailed timeline during the planning phase.",
                },
                {
                  q: "Will cloud migration disrupt my business?",
                  a: "We plan migrations carefully to minimize disruption. Most migrations can be done with minimal downtime, and we work during off-peak hours when possible.",
                },
                {
                  q: "How do you ensure cloud security?",
                  a: "We implement industry best practices including encryption, identity and access management, network security, and compliance frameworks. Security is built into every solution.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <h3 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-2">{faq.q}</h3>
                  <p className="text-beelio-textSecondary dark:text-beelio-bg/80">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Move to the Cloud?"
        description="Let us help you modernize your infrastructure and unlock the power of cloud computing."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        variant="accent"
      />
    </>
  )
}

