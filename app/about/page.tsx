"use client"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Target, Eye, Heart, Users, Award, Globe, 
  TrendingUp, Shield, Clock, CheckCircle2,
  ArrowRight, Building2, MapPin, Sparkles
} from "lucide-react"

const metadata: Metadata = {
  title: "About Us - Beelio Technologies",
  description: "Learn about Beelio Technologies, our mission, vision, and commitment to empowering African businesses with enterprise-grade IT solutions.",
}

const exploreLinks = [
  { title: "Mission, Vision & Values", href: "/about#mission" },
  { title: "Our Leadership", href: "/about#leadership" },
  { title: "Awards & Recognition", href: "/about#awards" },
  { title: "Our Impact", href: "/about#impact" },
  { title: "Partners", href: "/about#partners" },
  { title: "Our Services", href: "/services" },
]

const timeline = [
  {
    year: "2010",
    title: "Beelio Founded",
    description: "We commenced operations as an IT infrastructure provider, focusing on delivering enterprise-grade solutions to businesses across East Africa.",
  },
  {
    year: "2013",
    title: "Regional Expansion",
    description: "Expanded operations to multiple countries, establishing partnerships with major tech vendors and becoming a trusted IT solutions provider.",
  },
  {
    year: "2016",
    title: "Cloud Services Launch",
    description: "Launched comprehensive cloud solutions division, helping businesses migrate to modern, scalable infrastructure.",
  },
  {
    year: "2019",
    title: "ISO Certifications",
    description: "Achieved ISO 27001 and ISO 9001 certifications, demonstrating our commitment to quality and security standards.",
  },
  {
    year: "2022",
    title: "Major Partnerships",
    description: "Became Microsoft Gold Partner and AWS Advanced Consulting Partner, expanding our capabilities in cloud and enterprise solutions.",
  },
  {
    year: "2025",
    title: "Leading Provider",
    description: "Now serving 500+ clients across multiple countries, recognized as one of Africa's leading IT solutions providers.",
  },
]

const journey = [
  { year: "2010", achievement: "Founded", description: "Infrastructure & IT Solutions" },
  { year: "2013", achievement: "Regional Expansion", description: "Multi-country operations" },
  { year: "2016", achievement: "Cloud Services", description: "Cloud transformation" },
  { year: "2019", achievement: "ISO Certified", description: "Quality & Security standards" },
  { year: "2022", achievement: "Major Partnerships", description: "Microsoft Gold & AWS" },
  { year: "2025", achievement: "500+ Clients", description: "Leading IT Provider" },
]

const stats = [
  { value: "04", label: "Operation Hubs" },
  { value: "50+", label: "Awards" },
  { value: "23", label: "Partnerships" },
  { value: "10+", label: "Countries" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-beelio-primaryDark/95 via-beelio-primary/90 to-beelio-primaryDark/95" />
        </div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-beelio-accent" />
              <span className="text-sm font-medium">Leading IT Solutions Provider in Africa</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              About Beelio Technologies
            </h1>
            <p className="text-xl md:text-2xl text-beelio-lightGray leading-relaxed">
              We are Championing Digital Transformation in Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Image Grid */}
      <section className="py-20 bg-white dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-beelio-primary dark:text-white mb-8 text-center">
              We are Championing the Digital Future of Africa
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-beelio-textSecondary dark:text-beelio-lightGray space-y-6">
              <p className="text-lg leading-relaxed">
                Beelio Technologies is a Pan-African systems solutions company which specializes in a wide array 
                of IT services including: communications and integration services, infrastructure services, 
                managed and support services, cloud services, and software development.
              </p>
              
              <p className="text-lg leading-relaxed">
                As a leading provider of IT services across Africa, Beelio Technologies operates a firmly 
                established partnership network which connects businesses, enterprises, governments, and 
                consumers, utilizing value-added services to help them efficiently drive processes and improve 
                across their respective activities.
              </p>
              
              <p className="text-lg leading-relaxed">
                With over a decade of immense contribution to the Information Communication and Technology 
                Sector, Beelio Technologies has continuously remained a benchmark for excellence in Africa. 
                We believe in and pursue an excellent service culture, and deliver our operations through 
                global best practices using our ISO9001 and ISO27001 certification processes across the 
                entire organization.
              </p>
              
              <p className="text-lg leading-relaxed">
                Over time, we have received numerous accolades from our partners, clients, customers, and 
                professional bodies as a result of our service excellence and increased performance. We are 
                committed to driving digital transformation and empowering businesses across Africa.
              </p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Team meeting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beelio-primaryDark/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Expert Team</h3>
                  <p className="text-sm text-beelio-lightGray">Dedicated professionals</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Innovation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beelio-primaryDark/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Innovation</h3>
                  <p className="text-sm text-beelio-lightGray">Cutting-edge technology</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Collaboration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beelio-primaryDark/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Collaboration</h3>
                  <p className="text-sm text-beelio-lightGray">Working together</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore Beelio Section with Icons */}
      <section className="py-16 bg-gray-50 dark:bg-beelio-primary">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-beelio-primary dark:text-white mb-10 text-center"
          >
            Explore Beelio Technologies
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {exploreLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={link.href}
                  className="block bg-white dark:bg-beelio-primaryDark p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-beelio-accent dark:hover:border-beelio-accent transition-all text-center group h-full"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-beelio-accent/20 to-beelio-accentDark/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6 text-beelio-accent" />
                  </div>
                  <span className="text-sm font-semibold text-beelio-primary dark:text-white group-hover:text-beelio-accent transition-colors">
                    {link.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Enhanced Design */}
      <section className="py-20 bg-white dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-beelio-primary dark:text-white mb-12 text-center"
          >
            A Timeline of Our History
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-32"
                >
                  {/* Year Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute left-0 md:left-0 top-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-beelio-accent to-beelio-accentDark flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{item.year}</span>
                      </div>
                      <ArrowRight className="hidden md:block w-8 h-8 text-beelio-accent" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="ml-0 md:ml-12 bg-gradient-to-br from-gray-50 to-white dark:from-beelio-primary dark:to-beelio-primary/80 rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-bold text-beelio-primary dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-beelio-textSecondary dark:text-beelio-lightGray leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                  
                  {/* Connecting Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-beelio-accent to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Table Section */}
      <section className="py-20 bg-gray-50 dark:bg-beelio-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-beelio-primary dark:text-white mb-12 text-center">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-beelio-primaryDark rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-beelio-accent text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Year</th>
                      <th className="px-6 py-4 text-left font-semibold">Achievement</th>
                      <th className="px-6 py-4 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                    {journey.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-beelio-primary/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-beelio-accent">{item.year}</td>
                        <td className="px-6 py-4 font-semibold text-beelio-primary dark:text-white">{item.achievement}</td>
                        <td className="px-6 py-4 text-beelio-textSecondary dark:text-beelio-lightGray">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan African Section with Animated Stats */}
      <section className="py-20 bg-white dark:bg-beelio-primaryDark">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-beelio-primary dark:text-white mb-6">
              We Are Pan African
            </h2>
            <p className="text-lg text-beelio-textSecondary dark:text-beelio-lightGray leading-relaxed">
              Our footprint spans across multiple regions in Africa. Beelio Technologies provides 
              comprehensive IT solutions and partners with leading technology organizations to deliver 
              world-class services across the continent. We help our numerous clients address challenges 
              in the digital transformation era.
            </p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center bg-gradient-to-br from-gray-50 to-white dark:from-beelio-primary dark:to-beelio-primary/80 rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div 
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-beelio-accent to-beelio-accentDark bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-semibold text-beelio-textSecondary dark:text-beelio-lightGray uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map/Globe Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-beelio-accent/10 to-beelio-accentDark/10 rounded-2xl border border-beelio-accent/20"
          >
            <Globe className="w-16 h-16 text-beelio-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-beelio-primary dark:text-white mb-2">
              Serving Businesses Across Africa
            </h3>
            <p className="text-beelio-textSecondary dark:text-beelio-lightGray">
              From East to West, North to South - delivering world-class IT solutions that drive growth and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values with Enhanced Cards */}
      <section id="mission" className="py-20 bg-gray-50 dark:bg-beelio-primary">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-beelio-primary dark:text-white mb-12 text-center"
          >
            Mission, Vision & Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-beelio-primaryDark rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-beelio-primary dark:text-white mb-4">Our Mission</h3>
              <p className="text-beelio-textSecondary dark:text-beelio-lightGray leading-relaxed">
                To empower African businesses with cutting-edge IT solutions that drive growth, innovation, 
                and digital transformation across the continent.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-beelio-primaryDark rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-beelio-primary dark:text-white mb-4">Our Vision</h3>
              <p className="text-beelio-textSecondary dark:text-beelio-lightGray leading-relaxed">
                To become Africa&apos;s leading IT solutions provider, recognized for excellence, innovation, 
                and transformative impact on businesses and communities.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-beelio-primaryDark rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-beelio-primary dark:text-white mb-4">Our Values</h3>
              <p className="text-beelio-textSecondary dark:text-beelio-lightGray leading-relaxed">
                Integrity, excellence, innovation, and customer-centricity guide everything we do. 
                We&apos;re committed to delivering value and building lasting partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-beelio-accent via-beelio-accentDark to-beelio-accent relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90">
              Join hundreds of businesses across Africa that trust Beelio Technologies for their IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-beelio-accent font-bold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-beelio-accent transition-all inline-flex items-center justify-center gap-2"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}