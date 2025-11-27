"use client"

import { useState } from "react"
import SectionHeader from "@/components/SectionHeader"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-beelio-bg to-beelio-surface dark:from-beelio-primaryDark dark:to-beelio-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-beelio-textSecondary dark:text-beelio-bg/80">
              Ready to transform your IT infrastructure? Contact us today and let&apos;s discuss how we can help your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beelio-surface dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <SectionHeader
                title="Contact Information"
                description="We're here to help. Reach out through any of these channels."
              />
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-beelio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-beelio-primary dark:text-beelio-bg mb-1">Address</h3>
                    <p className="text-beelio-textSecondary dark:text-beelio-bg/80">
                      Kampala, Uganda<br />
                      East Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-beelio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-beelio-primary dark:text-beelio-bg mb-1">Phone</h3>
                    <a
                      href="tel:+256700000000"
                      className="text-beelio-textSecondary dark:text-beelio-bg/80 hover:text-beelio-accent transition-colors"
                    >
                      +256 700 000 000
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-beelio-accent/10 dark:bg-beelio-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-beelio-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-beelio-primary dark:text-beelio-bg mb-1">Email</h3>
                    <a
                      href="mailto:info@beelio.tech"
                      className="text-beelio-textSecondary dark:text-beelio-bg/80 hover:text-beelio-accent transition-colors"
                    >
                      info@beelio.tech
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <h2 className="text-2xl font-bold text-beelio-primary dark:text-beelio-bg mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-beelio-primary dark:text-beelio-bg mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-beelio-border bg-beelio-bg dark:bg-beelio-primaryDark text-beelio-primary dark:text-beelio-bg focus:outline-none focus:ring-2 focus:ring-beelio-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-beelio-primary dark:text-beelio-bg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-beelio-border bg-beelio-bg dark:bg-beelio-primaryDark text-beelio-primary dark:text-beelio-bg focus:outline-none focus:ring-2 focus:ring-beelio-accent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-beelio-primary dark:text-beelio-bg mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-beelio-border bg-beelio-bg dark:bg-beelio-primaryDark text-beelio-primary dark:text-beelio-bg focus:outline-none focus:ring-2 focus:ring-beelio-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-beelio-primary dark:text-beelio-bg mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-beelio-border bg-beelio-bg dark:bg-beelio-primaryDark text-beelio-primary dark:text-beelio-bg focus:outline-none focus:ring-2 focus:ring-beelio-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-beelio-primary dark:text-beelio-bg mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-beelio-border bg-beelio-bg dark:bg-beelio-primaryDark text-beelio-primary dark:text-beelio-bg focus:outline-none focus:ring-2 focus:ring-beelio-accent resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

