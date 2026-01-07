"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-k4-navy">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
	      Privacy Policy
            </h1>
            <p className="text-s text-gray-300">
              Last Updated and Effective January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This Privacy Policy sets forth the privacy practices of KIV Capital Management LLC ("K4," "we," "our," or "us") with respect to our collection, use, sharing, and disclosure of Personal Information, including, but not limited to, Personal Information collected through this website (the "Site"), how it is used, and the circumstances under which it may be shared and disclosed. This Privacy Policy constitutes a legally binding agreement between you and K4 that conditions your use of the Site, where and as permitted by applicable law.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you visit the Site and during our ordinary business activities, K4 may collect or ask you to provide certain nonpublic personal information ("Personal Information") in order to help us manage our relationship with you and serve your investment needs. Personal Information may include your name, address, email address, phone number, and other information that identifies you personally.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">How We Use Personal Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use Personal Information to provide investment services, communicate with clients and prospective clients, comply with legal and regulatory requirements, and improve our services. We may use Personal Information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Manage client accounts and relationships</li>
              <li>Process transactions and provide investment services</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Comply with legal, regulatory, and compliance obligations</li>
              <li>Detect and prevent fraud or other illegal activities</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">How We Share Personal Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your privacy is important to us. K4 does not disclose any Personal Information to nonaffiliated third parties, except to service or manage a client's account or as permitted by law. We do not sell any Personal Information. We may share Personal Information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Service providers who assist us in providing our services</li>
              <li>Professional advisors such as lawyers, auditors, and consultants</li>
              <li>Regulatory authorities as required by law</li>
              <li>Other third parties with your consent or as directed by you</li>
            </ul>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">How We Protect Personal Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              K4 seeks to carefully safeguard Personal Information. We will use commercially reasonable efforts to ensure that Personal Information is kept secure and safe from any loss or unauthorized disclosure or use. We restrict access to our client's Personal Information to employees requiring that Personal Information to provide our products or services. We maintain physical, electronic, and procedural safeguards designed to protect Personal Information.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">Use of Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may send text files (e.g., "cookies" or other cached files) or images to your web browser to collect and/or store information on your computer. Such text files and images are used to support the operation of our digital offerings and for the technical convenience to store information on your computer. You may disable cookies through your browser settings, though some features of the Site may not function properly if you do so.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">Third-Party Websites</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Site may contain links to third-party websites. K4 is not responsible for the privacy practices or content of such third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              K4 reserves the right to modify this Privacy Policy at any time. We will notify you of any material changes by posting the updated Privacy Policy on this Site with a new effective date. Your continued use of the Site after any such changes constitutes your acceptance of the revised Privacy Policy.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">Security Warning</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Please be aware that K4's name, brand, and reputation may be misused by unauthorized third parties. We do not provide investment advice or otherwise solicit capital via social media, including LinkedIn and Facebook, or encrypted chat platforms, including Telegram, WhatsApp, or Signal. If you receive a communication that appears suspicious, please report it to us at info@k4capitalmanagement.com.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions or comments about this Privacy Policy, please feel free to contact K4 at:
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Email:</strong> info@k4capitalmanagement.com
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Address:</strong> 680 Fifth Ave, Suite 2200, New York, NY 10019
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                K4 Capital Management LLC is a private investment platform. The information presented on this website does not constitute investment advice or recommendations and does not constitute an offer to sell or a solicitation of an offer to buy an interest in any entity managed by K4 Capital Management LLC and may not be relied upon in connection with any offer or sale of any interests or securities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
