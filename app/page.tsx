import Hero from "@/components/Hero"
import CompanyIntro from "@/components/CompanyIntro"
import ServicesOverview from "@/components/ServicesOverview"
import CompanyImpact from "@/components/CompanyImpact"
import GovernmentSolutions from "@/components/GovernmentSolutions"
import IndustriesWeDominate from "@/components/IndustriesWeDominate"
import WhyChooseBeelio from "@/components/WhyChooseBeelio"
import CaseStudiesHighlight from "@/components/CaseStudiesHighlight"
import Testimonials from "@/components/Testimonials"
import NewsSection from "@/components/NewsSection"
import ClientLogos from "@/components/ClientLogos"
import CTABanner from "@/components/CTABanner"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise IT Solutions & Government ICT Procurement | Uganda & South Sudan",
  description: "Leading IT services provider in Uganda and South Sudan. Managed IT, cloud solutions, cybersecurity, software development, and government ICT procurement. Trusted by 150+ enterprises across East Africa.",
  keywords: "IT services Uganda, managed IT Kampala, cloud solutions Uganda, cybersecurity East Africa, government ICT procurement Uganda, IT supplier South Sudan, enterprise IT solutions",
  openGraph: {
    title: "Beelio Technologies - Enterprise IT Solutions Uganda",
    description: "Transform your business with enterprise-grade IT infrastructure, cloud solutions, and government ICT procurement services in Uganda and South Sudan.",
    type: "website",
    url: "https://beelio.tech",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <GovernmentSolutions />
      <CompanyImpact />
      <IndustriesWeDominate />
      <WhyChooseBeelio />
      <CaseStudiesHighlight />
      <Testimonials />
      <NewsSection />
      <ClientLogos />
      <CTABanner
        title="Ready to Transform Your IT Infrastructure?"
        description="Get in touch with our experts and discover how Beelio Technologies can help your business thrive."
        primaryButton={{ text: "Book Consultation", href: "/contact" }}
        secondaryButton={{ text: "Explore Solutions", href: "/services" }}
        variant="primary"
      />
    </>
  )
}

