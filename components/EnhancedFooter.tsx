"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Facebook, Twitter, Linkedin, Mail, Phone, MapPin, 
  ArrowRight, Youtube, Instagram, ExternalLink 
} from "lucide-react"
import { useState } from "react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/about#leadership" },
    { name: "Culture & Values", href: "/about#culture" },
    { name: "Impact", href: "/about#impact" },
    { name: "Partners", href: "/about#partners" },
    { name: "Careers", href: "/contact" },
  ],
  services: [
    { name: "Managed IT Services", href: "/services/managed-it" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "IT Consultancy", href: "/services/it-consultancy" },
    { name: "Software Development", href: "/services/software-development" },
  ],
  industries: [
    { name: "Financial Services", href: "/portfolio#finance" },
    { name: "Healthcare", href: "/portfolio#healthcare" },
    { name: "Retail & E-commerce", href: "/portfolio#retail" },
    { name: "Telecommunications", href: "/portfolio#telecom" },
    { name: "Manufacturing", href: "/portfolio#manufacturing" },
  ],
  insights: [
    { name: "Blog & Articles", href: "/blog" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Whitepapers", href: "/blog#whitepapers" },
    { name: "Events", href: "/blog#events" },
  ],
  policy: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Quality Policy", href: "/quality" },
  ],
}

const offices = [
  {
    name: "Kampala HQ",
    address: "Plot 123, Kampala Road",
    city: "Kampala, Uganda",
    mapLink: "#",
  },
  {
    name: "Nairobi Office",
    address: "Westlands Business Park",
    city: "Nairobi, Kenya",
    mapLink: "#",
  },
]

export default function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      alert("Thank you for subscribing!")
    }, 1000)
  }

  return (
    <footer className="bg-gradient-to-br from-beelio-primaryDark via-beelio-primary to-beelio-primaryDark text-beelio-bg">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-beelio-accent to-beelio-accentDark rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-white/90 text-lg">
                Subscribe to our newsletter and receive the latest technology insights and updates delivered straight to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-6 py-4 rounded-lg text-beelio-primary focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-beelio-accent font-bold rounded-lg hover:bg-beelio-bg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Beelio Technologies"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-beelio-lightGray text-sm mb-6 leading-relaxed">
              Beelio Technologies is a leading African technology solutions provider, specializing in digital transformation, cloud services, and enterprise IT infrastructure.
            </p>
            
            {/* Social Media */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-beelio-accent transition-all duration-300 border border-white/20"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.insights.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-sm mb-3 text-white">Policy</h4>
            <ul className="space-y-2">
              {footerLinks.policy.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-xs inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-6 text-white">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-beelio-accent/50 transition-all"
              >
                <h4 className="font-bold text-white mb-2">{office.name}</h4>
                <p className="text-beelio-lightGray text-sm mb-1">{office.address}</p>
                <p className="text-beelio-lightGray text-sm mb-3">{office.city}</p>
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beelio-accent text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View on map
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
            
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-beelio-accent/20 to-beelio-accentDark/20 rounded-lg p-4 border border-beelio-accent/30">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-beelio-accent" />
                <h4 className="font-bold text-white">Call Us</h4>
              </div>
              <a
                href="tel:+256786367460"
                className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-sm block"
              >
                +256 786 367460
              </a>
              <p className="text-beelio-lightGray/60 text-xs mt-1">24/7 Support Available</p>
            </div>

            <div className="bg-gradient-to-br from-beelio-accent/20 to-beelio-accentDark/20 rounded-lg p-4 border border-beelio-accent/30">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-beelio-accent" />
                <h4 className="font-bold text-white">Email Us</h4>
              </div>
              <a
                href="mailto:beeliotechnologies@gmail.com"
                className="text-beelio-lightGray hover:text-beelio-accent transition-colors text-sm block break-all"
              >
                beeliotechnologies@gmail.com
              </a>
              <p className="text-beelio-lightGray/60 text-xs mt-1">We reply within 24hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-beelio-primaryDark/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-beelio-lightGray text-sm text-center md:text-left">
              © {new Date().getFullYear()} Beelio Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-beelio-lightGray">ISO 27001 Certified</span>
              <span className="text-beelio-lightGray">•</span>
              <span className="text-beelio-lightGray">SOC 2 Compliant</span>
              <span className="text-beelio-lightGray">•</span>
              <span className="text-beelio-lightGray">Made in Africa 🌍</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
