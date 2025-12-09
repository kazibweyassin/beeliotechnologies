import Hero from "@/components/Hero"
import CompanyIntro from "@/components/CompanyIntro"
import ServicesOverview from "@/components/ServicesOverview"
import CompanyImpact from "@/components/CompanyImpact"
import IndustriesWeDominate from "@/components/IndustriesWeDominate"
import WhyChooseBeelio from "@/components/WhyChooseBeelio"
import CaseStudiesHighlight from "@/components/CaseStudiesHighlight"
import Testimonials from "@/components/Testimonials"
import NewsSection from "@/components/NewsSection"
import ClientLogos from "@/components/ClientLogos"
import CTABanner from "@/components/CTABanner"

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
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

