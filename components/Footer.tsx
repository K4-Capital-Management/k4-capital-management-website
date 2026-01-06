import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-k4-darkgray text-white py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo and Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">K4 Capital Management</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A multi-strategy investment platform focused on real estate and diverse asset classes.
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
          <p>© 2026 K4 Capital Management. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a 
              href="https://www.linkedin.com/company/k4-capital-management" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
