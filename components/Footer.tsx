"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Managed IT Services", href: "/services/managed-it" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "IT Consultancy", href: "/services/it-consultancy" },
    { name: "Software Development", href: "/services/software-development" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-beelio-primaryDark dark:bg-beelio-primary text-beelio-bg mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Beelio Technologies"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-beelio-bg/80 text-sm mb-4">
              Empowering Africa with enterprise-grade IT solutions and digital transformation services.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-beelio-primaryLight flex items-center justify-center hover:bg-beelio-accent transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 tracking-tight">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-beelio-bg/80 hover:text-beelio-accent transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beelio-bg/80 hover:text-beelio-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-beelio-accent mt-0.5 flex-shrink-0" />
                <span className="text-beelio-bg/80 text-sm">
                  Kampala, Uganda<br />
                  East Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-beelio-accent flex-shrink-0" />
                <a
                  href="tel:+256786367460"
                  className="text-beelio-bg/80 hover:text-beelio-accent transition-colors text-sm"
                >
                  +256 786 367460
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-beelio-accent flex-shrink-0" />
                <a
                  href="mailto:beeliotechnologies@gmail.com"
                  className="text-beelio-bg/80 hover:text-beelio-accent transition-colors text-sm"
                >
                  beeliotechnologies@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beelio-primaryLight mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beelio-bg/60 text-sm">
              © {new Date().getFullYear()} Beelio Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-beelio-bg/60 hover:text-beelio-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

