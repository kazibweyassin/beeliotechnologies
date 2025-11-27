import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import IndustriesWeDominate from "@/components/IndustriesWeDominate"
import WhyChooseBeelio from "@/components/WhyChooseBeelio"
import CaseStudiesHighlight from "@/components/CaseStudiesHighlight"
import ClientLogos from "@/components/ClientLogos"
import Testimonials from "@/components/Testimonials"
import CTABanner from "@/components/CTABanner"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesWeDominate />
      <WhyChooseBeelio />
      <CaseStudiesHighlight />
      <Testimonials />
      <ClientLogos />
      <CTABanner
        title="Ready to Transform Your IT Infrastructure?"
        description="Get in touch with our experts and discover how Beelio Technologies can help your business thrive."
        primaryButton={{ text: "Book Consultation", href: "/contact" }}
        secondaryButton={{ text: "Explore Services", href: "/services" }}
      />
    </>
  )
}

