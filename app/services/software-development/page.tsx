import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CTABanner from "@/components/CTABanner"
import Button from "@/components/Button"
import { CheckCircle, Code, Smartphone, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Software Development Uganda | Web & Enterprise Applications",
  description: "Professional software development services in Uganda. Custom web applications, mobile apps, and enterprise systems built with modern technologies and best practices.",
  keywords: "software development Uganda, custom software Kampala, web development East Africa, mobile app development Uganda",
}

const benefits = [
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored software built specifically for your business processes and requirements.",
  },
  {
    icon: Zap,
    title: "Modern Technologies",
    description: "Built with cutting-edge technologies and best practices for scalability and performance.",
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description: "Web, mobile, and desktop applications that work seamlessly across all devices.",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description: "Designed to grow with your business, handling increased load and users effortlessly.",
  },
]

const services = [
  "Web application development",
  "Mobile app development (iOS & Android)",
  "Enterprise software solutions",
  "API development and integration",
  "E-commerce platforms",
  "CRM and ERP systems",
  "Custom business applications",
  "Legacy system modernization",
  "UI/UX design",
  "Quality assurance and testing",
]

const technologies = [
  "React & Next.js",
  "Node.js & Express",
  "Python & Django",
  "Java & Spring",
  ".NET & C#",
  "React Native",
  "Flutter",
  "PostgreSQL",
  "MongoDB",
  "Docker & Kubernetes",
]

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Software Development
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Custom software solutions tailored to your business needs, from web apps to enterprise systems. 
              Built with modern technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Overview</h2>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
              Transform your business ideas into powerful software solutions. Our development team creates 
              custom applications that solve real business problems, improve efficiency, and drive growth.
            </p>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80">
              From concept to deployment, we follow agile methodologies and industry best practices to deliver 
              high-quality software on time and within budget.
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
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Our Development Services</h2>
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
                Software development projects are priced based on scope and complexity:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Fixed Price:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      For well-defined projects with clear requirements
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Time & Materials:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      For agile projects with evolving requirements
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Dedicated Team:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Monthly retainer for ongoing development and support
                    </span>
                  </div>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Start Your Project
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
                  q: "What is your development process?",
                  a: "We follow agile methodologies with iterative development, regular client feedback, and continuous testing. We start with discovery, move to design and development, and ensure thorough testing before deployment.",
                },
                {
                  q: "How long does software development take?",
                  a: "Timeline depends on project complexity. Simple web apps may take 2-3 months, while enterprise systems can take 6-12 months. We'll provide a detailed timeline during project planning.",
                },
                {
                  q: "Do you provide maintenance and support?",
                  a: "Yes, we offer ongoing maintenance, updates, and support packages to keep your software running smoothly and up-to-date with the latest technologies.",
                },
                {
                  q: "Can you integrate with our existing systems?",
                  a: "Absolutely. We have extensive experience integrating new software with existing systems, APIs, databases, and third-party services.",
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
        title="Ready to Build Your Software Solution?"
        description="Let's turn your ideas into powerful software that drives business growth."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        variant="accent"
      />
    </>
  )
}

