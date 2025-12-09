import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CTABanner from "@/components/CTABanner"
import Button from "@/components/Button"
import Image from "next/image"
import { CheckCircle, Shield, Lock, Eye, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Cybersecurity Services Uganda | Threat Protection & Compliance",
  description: "Advanced cybersecurity solutions for Uganda businesses. Multi-layered defense, threat detection, compliance consulting, and security audits for complete protection.",
  keywords: "cybersecurity Uganda, security services Kampala, threat protection, compliance Uganda, security audit East Africa",
}

const benefits = [
  {
    icon: Shield,
    title: "Multi-Layered Defense",
    description: "Comprehensive security strategy with multiple layers of protection against threats.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Ensure compliance with industry regulations including GDPR, ISO 27001, and more.",
  },
  {
    icon: Eye,
    title: "24/7 Threat Monitoring",
    description: "Continuous monitoring and threat detection to identify and respond to security incidents quickly.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response team ready to contain and remediate security breaches when they occur.",
  },
]

const services = [
  "Security assessment and audits",
  "Penetration testing",
  "Vulnerability management",
  "Endpoint protection",
  "Network security",
  "Email security and anti-phishing",
  "Identity and access management",
  "Security awareness training",
  "Compliance consulting",
  "Incident response planning",
]

const technologies = [
  "Fortinet FortiGate",
  "CrowdStrike",
  "SentinelOne",
  "Microsoft Defender",
  "Okta",
  "Duo Security",
  "Proofpoint",
  "Splunk",
]

export default function CybersecurityPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80"
            alt="Cybersecurity"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Advanced security solutions to protect your business from threats and ensure compliance. 
              Multi-layered defense for complete protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Overview</h2>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
              In today&apos;s digital landscape, cybersecurity is not optional—it&apos;s essential. Our comprehensive 
              cybersecurity services protect your business from evolving threats while ensuring compliance 
              with industry regulations.
            </p>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80">
              We combine advanced security technologies with expert knowledge to create a defense-in-depth 
              strategy that protects your data, systems, and reputation.
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
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Our Security Services</h2>
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
                Cybersecurity services are available through various pricing models:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Security Assessment:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      One-time project-based pricing for audits and assessments
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Managed Security:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Monthly subscription for ongoing security monitoring and management
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Security Products:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Licensing and implementation costs for security tools and platforms
                    </span>
                  </div>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Request Security Assessment
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
                  q: "How often should we conduct security assessments?",
                  a: "We recommend annual comprehensive assessments, with quarterly reviews for high-risk environments. Regular vulnerability scans should be conducted monthly.",
                },
                {
                  q: "What compliance standards do you help with?",
                  a: "We assist with GDPR, ISO 27001, PCI DSS, HIPAA, and various industry-specific regulations. We'll help you achieve and maintain compliance.",
                },
                {
                  q: "How quickly can you respond to a security incident?",
                  a: "Our incident response team is available 24/7. Response times vary by severity, with critical incidents receiving immediate attention.",
                },
                {
                  q: "Do you provide security training for employees?",
                  a: "Yes, we offer comprehensive security awareness training programs to help your team recognize and avoid security threats.",
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
        title="Protect Your Business Today"
        description="Don't wait for a breach. Strengthen your security posture with our comprehensive cybersecurity solutions."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        variant="accent"
      />
    </>
  )
}

