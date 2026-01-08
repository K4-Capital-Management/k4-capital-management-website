import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-k4-darkgray text-white py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo and Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/k4-logo.png"
                alt="K4 Capital Management"
                className="h-24 w-auto brightness-0 invert"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                K4 Capital Management
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A multi-strategy private credit platform focused on real estate-backed investments across the capital stack.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div>
                <p className="font-semibold text-white">New York</p>
                <p>680 Fifth Ave, Suite 2200</p>
                <p>New York, NY 10019</p>
              </div>
              <div>
                <p className="font-semibold text-white">Nashville</p>
                <p>401 Church Street, Suite 2800</p>
                <p>Nashville, TN 37219</p>
              </div>
              <div>
                <a
                  href="mailto:info@k4capitalmanagement.com"
                  className="hover:text-white transition-colors"
                >
                  info@k4capitalmanagement.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 KIV Capital Management LLC. All Rights Reserved.</p>
          <div className="flex space-x-6 items-center mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a
              href="https://www.linkedin.com/company/k4-capital-management"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
