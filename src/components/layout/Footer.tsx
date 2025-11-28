import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg"></div>
              <span className="text-xl font-bold font-display text-white">NeoPharma</span>
            </div>
            <p className="text-sm text-gray-400">
              AI-powered pharmaceutical lead discovery platform for modern sales teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/neopharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/neopharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@neopharma.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:sales@neopharma.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  sales@neopharma.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@neopharma.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  support@neopharma.com
                </a>
              </li>
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.neopharma.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 btn btn-primary text-sm"
                >
                  Start Free Trial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} NeoPharma. All rights reserved. Built for pharmaceutical sales teams.
          </p>
        </div>
      </div>
    </footer>
  )
}
