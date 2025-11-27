"use client"

import SectionHeader from "./SectionHeader"
import { Building2, Briefcase, Globe, TrendingUp, Shield, Zap } from "lucide-react"

const clients = [
  { name: "Enterprise Solutions", icon: Building2 },
  { name: "Global Partners", icon: Globe },
  { name: "Tech Leaders", icon: Zap },
  { name: "Security Experts", icon: Shield },
  { name: "Business Growth", icon: TrendingUp },
  { name: "Consulting", icon: Briefcase },
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-beelio-surface dark:bg-beelio-primaryDark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Trusted by Leading Organizations"
          subtitle="Our Partners"
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, i) => {
            const Icon = client.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-beelio-bg dark:bg-beelio-primaryLight hover:bg-beelio-accent/10 dark:hover:bg-beelio-accent/20 transition-all group"
              >
                <Icon className="w-12 h-12 text-beelio-accent mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-beelio-textSecondary dark:text-beelio-bg/80 text-center">
                  {client.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

