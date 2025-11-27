"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { cn } from "@/lib/utils"
import Button from "./Button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Managed IT Services", href: "/services/managed-it" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "IT Consultancy", href: "/services/it-consultancy" },
      { name: "Software Development", href: "/services/software-development" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-beelio-surface/95 dark:bg-beelio-primaryDark/95 shadow-xl backdrop-blur-xl border-b border-beelio-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="Beelio Technologies"
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setOpenSubmenu(link.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-semibold transition-all duration-300 relative group",
                        pathname.startsWith(link.href)
                          ? "text-beelio-accent"
                          : "text-beelio-text dark:text-beelio-bg hover:text-beelio-accent"
                      )}
                    >
                      {link.name}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 w-0 h-0.5 bg-beelio-accent transition-all duration-300 group-hover:w-full",
                          pathname.startsWith(link.href) && "w-full"
                        )}
                      />
                    </Link>
                    <ChevronDown className="w-4 h-4" />
                    <AnimatePresence>
                      {openSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-beelio-surface dark:bg-beelio-primaryLight shadow-xl rounded-xl p-2"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 rounded-lg hover:bg-beelio-bg dark:hover:bg-beelio-primaryDark transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-beelio-accent",
                      pathname === link.href
                        ? "text-beelio-accent"
                        : "text-beelio-text dark:text-beelio-bg"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-beelio-bg dark:hover:bg-beelio-primaryLight transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-beelio-accent" />
              ) : (
                <Moon className="w-5 h-5 text-beelio-primary" />
              )}
            </button>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-beelio-bg dark:hover:bg-beelio-primaryLight transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-beelio-surface dark:bg-beelio-primaryDark border-t border-beelio-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === link.name ? null : link.name
                          )
                        }
                        className="flex items-center justify-between w-full text-left py-2"
                      >
                        <span className="font-medium">{link.name}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openSubmenu === link.name && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-beelio-textSecondary"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 font-medium"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-beelio-border">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 py-2"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
                <Button href="/contact" variant="primary" className="w-full mt-4">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

