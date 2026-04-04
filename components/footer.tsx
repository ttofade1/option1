import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Dr. Toyin Tofade</h3>
            <p className="text-navy-muted text-sm leading-relaxed max-w-xs">
              A visionary leader at the intersection of healthcare, higher education, and faith.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/her-story" className="text-navy-muted hover:text-cream text-sm transition-colors">
                  Her Story
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-navy-muted hover:text-cream text-sm transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/global-women-leaders" className="text-navy-muted hover:text-cream text-sm transition-colors">
                  Global Women Leaders
                </Link>
              </li>
              <li>
                <Link href="/speaker-request" className="text-navy-muted hover:text-cream text-sm transition-colors">
                  Speaker Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/toyin-tofade-a604181a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-muted hover:text-cream transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:toyin.tofade@gmail.com"
                className="text-navy-muted hover:text-cream transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Link
              href="/speaker-request"
              className="inline-block bg-gold hover:bg-gold/90 text-text-heading px-6 py-3 text-sm font-medium tracking-wide transition-colors"
            >
              Request Dr. Tofade to Speak
            </Link>
          </div>
        </div>

        <div className="border-t border-divider/30 mt-12 pt-8 text-center">
          <p className="text-navy-muted text-sm">
            &copy; {new Date().getFullYear()} Dr. Toyin Tofade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
