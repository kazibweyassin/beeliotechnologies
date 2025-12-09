import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import EnhancedFooter from "@/components/EnhancedFooter"
import { ThemeProvider } from "@/components/ThemeProvider"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://beelio.tech"),
  title: {
    default: "Beelio Technologies - Empowering Africa with Enterprise-Grade IT Solutions",
    template: "%s | Beelio Technologies",
  },
  description:
    "Beelio Technologies provides reliable IT infrastructure, security, and digital transformation for businesses across Africa. Expert managed IT services, cloud solutions, cybersecurity, software development, and government ICT procurement in Uganda and South Sudan.",
  keywords: [
    "IT Services Uganda",
    "Cloud Solutions Africa",
    "Cybersecurity Uganda",
    "Software Development East Africa",
    "Managed IT Services Uganda",
    "IT Consultancy Kampala",
    "Enterprise IT Solutions",
    "Digital Transformation Africa",
    "Government ICT Procurement Uganda",
    "Government Tenders ICT Uganda",
    "ICT Equipment Supply South Sudan",
    "IT Infrastructure Uganda",
    "Government IT Supplier Uganda",
    "Public Sector ICT Solutions",
    "Beelio Technologies",
    "IT Company Kampala",
    "East Africa IT Services",
    "Technology Solutions Uganda",
  ],
  authors: [{ name: "Beelio Technologies" }],
  creator: "Beelio Technologies",
  publisher: "Beelio Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beelio.tech",
    siteName: "Beelio Technologies",
    title: "Beelio Technologies - Empowering Africa with Enterprise-Grade IT Solutions",
    description:
      "Beelio Technologies provides reliable IT infrastructure, security, and digital transformation for businesses across Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beelio Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beelio Technologies - Enterprise IT Solutions for Africa",
    description:
      "Empowering African businesses with enterprise-grade IT solutions, cloud infrastructure, and digital transformation services.",
    creator: "@beeliotech",
  },
  alternates: {
    canonical: "https://beelio.tech",
  },
  category: "Technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beelio Technologies',
    url: 'https://beelio.tech',
    logo: 'https://beelio.tech/logo.png',
    description: 'Enterprise IT Solutions, Cloud Infrastructure, Cybersecurity, and Government ICT Procurement in Uganda and South Sudan',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UG',
      addressLocality: 'Kampala',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+256-786-367460',
      contactType: 'Customer Service',
      email: 'beeliotechnologies@gmail.com',
      areaServed: ['UG', 'SS'],
    },
    sameAs: [
      'https://twitter.com/beeliotech',
      'https://linkedin.com/company/beeliotech',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="UG" />
        <meta name="geo.placename" content="Kampala" />
        <meta name="geo.position" content="0.3476;32.5825" />
        <meta name="ICBM" content="0.3476, 32.5825" />
      </head>
      <body className={sora.variable}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <EnhancedFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

