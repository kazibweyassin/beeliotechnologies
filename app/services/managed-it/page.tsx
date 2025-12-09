import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CTABanner from "@/components/CTABanner"
import Button from "@/components/Button"
import Image from "next/image"
import { CheckCircle, Server, Shield, Clock, HeadphonesIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Managed IT Services Uganda | 24/7 Support & Monitoring",
  description: "Professional managed IT services in Uganda. 24/7 monitoring, help desk support, network management, and proactive maintenance for your business infrastructure.",
  keywords: "managed IT services Uganda, IT support Kampala, network monitoring Uganda, help desk services, IT maintenance",
}

const benefits = [
  {
    icon: Server,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring of your IT infrastructure to prevent issues before they impact your business.",
  },
  {
    icon: Shield,
    title: "Proactive Maintenance",
    description: "Regular updates, patches, and maintenance to keep your systems secure and optimized.",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Fast response times with guaranteed SLAs to minimize downtime and disruption.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Access to certified IT professionals who understand your infrastructure and business needs.",
  },
]

const features = [
  "Network infrastructure management",
  "Server and storage administration",
  "Backup and disaster recovery",
  "Security monitoring and management",
  "Help desk and user support",
  "IT asset management",
  "Performance optimization",
  "Compliance and reporting",
]

const technologies = [
  "Microsoft 365",
  "Azure Active Directory",
  "VMware vSphere",
  "Cisco Networking",
  "Fortinet Security",
  "Veeam Backup",
  "PRTG Monitoring",
  "ServiceNow ITSM",
]

export default function ManagedITPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            alt="Server infrastructure"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Managed IT Services
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Comprehensive IT management and support to keep your infrastructure running smoothly 24/7. Focus on your business while we handle your IT.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Overview</h2>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
              Our Managed IT Services provide comprehensive, proactive management of your IT infrastructure. 
              We take care of the day-to-day operations, monitoring, maintenance, and support so you can focus 
              on growing your business.
            </p>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80">
              With our team of certified professionals and advanced monitoring tools, we ensure your systems 
              are always running at peak performance, secure from threats, and ready to scale with your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-bg dark:bg-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Key Benefits"
            centered
          />
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
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <span className="text-beelio-textSecondary dark:text-beelio-bg/80">{feature}</span>
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
                Our Managed IT Services are available through flexible pricing models tailored to your needs:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Per-User Pricing:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Ideal for businesses with predictable user counts
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Per-Device Pricing:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Perfect for managing specific devices and endpoints
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Fixed Monthly Retainer:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Comprehensive coverage with predictable monthly costs
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
                  q: "What is included in Managed IT Services?",
                  a: "Our Managed IT Services include 24/7 monitoring, proactive maintenance, help desk support, security management, backup and disaster recovery, and regular reporting.",
                },
                {
                  q: "How quickly do you respond to issues?",
                  a: "We offer guaranteed response times based on severity. Critical issues receive immediate attention, while standard requests are handled within agreed SLA timeframes.",
                },
                {
                  q: "Can you manage our existing infrastructure?",
                  a: "Yes, we can manage your existing IT infrastructure regardless of the technologies you&apos;re currently using. We&apos;ll assess your environment and provide seamless management.",
                },
                {
                  q: "Do you provide on-site support?",
                  a: "Yes, we offer both remote and on-site support depending on your needs and the nature of the issue. Most issues can be resolved remotely for faster response times.",
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
        title="Ready to Outsource Your IT Management?"
        description="Let us handle your IT infrastructure so you can focus on what matters most - growing your business."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        variant="accent"
      />
    </>
  )
}

