import { Metadata } from "next"
import Button from "@/components/Button"
import Card from "@/components/Card"
import Image from "next/image"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())} - Beelio Technologies`,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const productName = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
  
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative w-full h-96 rounded-xl overflow-hidden bg-beelio-bg shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                  alt={productName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-beelio-primary dark:text-beelio-bg mb-4">
                  {productName}
                </h1>
                <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80 mb-6">
                  Enterprise-grade solution designed for mission-critical business applications. 
                  Built with reliability and performance in mind.
                </p>
                <Button href="/contact" variant="primary" className="w-full md:w-auto">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Description</h2>
            <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80 mb-4">
              This enterprise solution provides comprehensive features designed to meet the demanding 
              requirements of modern businesses. Built with cutting-edge technology and industry best practices.
            </p>
            <p className="text-sm md:text-base text-beelio-textSecondary dark:text-beelio-bg/80">
              Our solution is scalable, secure, and designed to grow with your business needs. 
              Contact us for detailed specifications and custom configurations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-bg dark:bg-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-beelio-border">
                    {[
                      { label: "Model", value: "Enterprise Edition" },
                      { label: "Performance", value: "High Performance" },
                      { label: "Scalability", value: "Highly Scalable" },
                      { label: "Support", value: "24/7 Support Included" },
                      { label: "Warranty", value: "3 Years" },
                    ].map((spec, i) => (
                      <tr key={i}>
                        <td className="py-3 font-semibold text-beelio-primary dark:text-beelio-bg">
                          {spec.label}
                        </td>
                        <td className="py-3 text-beelio-textSecondary dark:text-beelio-bg/80">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

