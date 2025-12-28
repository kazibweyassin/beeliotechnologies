"use client"

import { motion } from "framer-motion"
import { Building2, FileCheck, Package, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Government Procurement",
    description: "Authorized supplier for government ICT projects, equipment, and services across Uganda and South Sudan.",
  },
  {
    icon: FileCheck,
    title: "Tender & Bid Services",
    description: "Expert support in tender preparation, bidding processes, and contract fulfillment for public sector projects.",
  },
  {
    icon: Package,
    title: "ICT Equipment Supply",
    description: "Comprehensive supply of computers, servers, networking equipment, and enterprise hardware to government agencies.",
  },
  {
    icon: Shield,
    title: "Compliance & Standards",
    description: "Full compliance with government procurement regulations and international quality standards.",
  },
]

export default function GovernmentSolutions() {
  return (
    <section className="py-20 bg-gradient-to-br from-beelio-primary to-beelio-primaryDark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <Building2 className="w-4 h-4 text-beelio-accent" />
            <span className="text-sm font-semibold">Government & Public Sector</span>
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Government ICT Procurement & Supply
          </h2>
          <p className="text-base md:text-lg text-beelio-lightGray max-w-3xl mx-auto">
            Trusted partner for government tenders, bids, and ICT equipment supply in Uganda and South Sudan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-beelio-accent/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-beelio-accent to-beelio-accentDark rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-beelio-lightGray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-beelio-accent" />
                <div className="text-3xl font-bold text-beelio-accent">15+</div>
              </div>
              <p className="text-beelio-lightGray">Government Contracts Delivered</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="w-6 h-6 text-beelio-accent" />
                <div className="text-3xl font-bold text-beelio-accent">1000+</div>
              </div>
              <p className="text-beelio-lightGray">ICT Equipment Units Supplied</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-beelio-accent" />
                <div className="text-3xl font-bold text-beelio-accent">100%</div>
              </div>
              <p className="text-beelio-lightGray">Timely Delivery & Compliance</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-base md:text-lg mb-6">
            Looking to partner with a reliable ICT supplier for your government project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-beelio-accent hover:bg-beelio-accentDark text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
