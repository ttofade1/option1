"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/her-story", label: "Her Story" },
  { href: "/career", label: "Career" },
  { href: "/impact", label: "Impact" },
  { href: "/publications", label: "Publications" },
  { href: "/media", label: "Media" },
  { href: "/global-women-leaders", label: "Global Women Leaders" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-cream font-serif text-xl tracking-wide">
              Dr. Toyin Tofade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-muted hover:text-cream text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/speaker-request"
              className="bg-gold hover:bg-gold/90 text-text-heading px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              Request to Speak
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-muted/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-navy-muted hover:text-cream text-base tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/speaker-request"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-gold hover:bg-gold/90 text-text-heading px-5 py-3 text-center font-medium tracking-wide transition-colors duration-200 mt-4"
            >
              Request to Speak
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
