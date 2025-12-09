import { Metadata } from "next"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import CTABanner from "@/components/CTABanner"
import Button from "@/components/Button"
import { CheckCircle, Briefcase, Target, TrendingUp, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "IT Consultancy - Beelio Technologies",
  description: "Strategic IT consulting to help you make informed decisions and optimize your technology investments.",
}

const benefits = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Develop comprehensive IT strategies aligned with your business objectives and goals.",
  },
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description: "Access to experienced consultants who understand both technology and business needs.",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Identify opportunities to reduce costs while improving efficiency and performance.",
  },
  {
    icon: Briefcase,
    title: "Technology Roadmaps",
    description: "Create clear roadmaps for technology adoption and digital transformation initiatives.",
  },
]

const services = [
  "IT strategy and planning",
  "Technology assessment",
  "Digital transformation consulting",
  "Cloud strategy and architecture",
  "Security and compliance consulting",
  "Vendor selection and evaluation",
  "IT governance and best practices",
  "Change management",
  "Project management",
  "Technology training and enablement",
]

export default function ITConsultancyPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              IT Consultancy
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Strategic IT consulting to help you make informed decisions and optimize your technology investments. 
              Expert guidance when you need it most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Overview</h2>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
              Making the right technology decisions is critical for business success. Our IT consultancy services 
              provide the strategic guidance and expert insights you need to navigate complex technology choices 
              and drive digital transformation.
            </p>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-bg/80">
              Whether you&apos;re planning a major technology initiative, evaluating vendors, or optimizing your IT 
              investments, our consultants bring deep expertise and industry knowledge to help you succeed.
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
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Our Consulting Services</h2>
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
            <Card>
              <h2 className="text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Pricing Model</h2>
              <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-6">
                IT consultancy services are available through flexible engagement models:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Hourly Consulting:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Flexible hourly rates for ad-hoc consulting and advice
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Project-Based:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Fixed-price engagements for specific consulting projects
                    </span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-beelio-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-beelio-primary dark:text-beelio-bg">Retainer:</strong>
                    <span className="text-beelio-textSecondary dark:text-beelio-bg/80 ml-2">
                      Monthly retainer for ongoing strategic guidance and support
                    </span>
                  </div>
                </li>
              </ul>
              <Button href="/contact" variant="primary">
                Schedule Consultation
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-beelio-primary dark:text-beelio-bg mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What types of consulting engagements do you offer?",
                  a: "We offer strategic planning, technology assessments, digital transformation consulting, vendor selection, and ongoing advisory services tailored to your needs.",
                },
                {
                  q: "How long does a typical consulting engagement last?",
                  a: "Engagement duration varies from short-term assessments (1-2 weeks) to long-term strategic partnerships (ongoing). We'll work with you to determine the right approach.",
                },
                {
                  q: "Do you provide implementation services?",
                  a: "Yes, we can provide both consulting and implementation services. We can help you plan and execute technology initiatives from start to finish.",
                },
                {
                  q: "What industries do you serve?",
                  a: "We serve clients across various industries including finance, healthcare, manufacturing, retail, and government. Our consultants have experience across multiple sectors.",
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
        title="Need Expert IT Guidance?"
        description="Let our experienced consultants help you make the right technology decisions for your business."
        primaryButton={{ text: "Get Started", href: "/contact" }}
        variant="accent"
      />
    </>
  )
}

