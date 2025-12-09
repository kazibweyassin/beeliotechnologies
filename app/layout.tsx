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
    "Beelio Technologies provides reliable IT infrastructure, security, and digital transformation for businesses across Africa. Expert managed IT services, cloud solutions, cybersecurity, and software development.",
  keywords: [
    "IT Services",
    "Cloud Solutions",
    "Cybersecurity",
    "Software Development",
    "Managed IT",
    "IT Consultancy",
    "Enterprise IT",
    "Digital Transformation",
    "Africa IT Solutions",
    "IT Infrastructure",
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
  return (
    <html lang="en" suppressHydrationWarning>
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

