"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-s text-gray-300">
              Last Updated and Effective January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-light text-k4-navy mt-8 mb-4">1. Acceptance of the Terms and Conditions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The terms and conditions set forth herein (the "Terms") apply to all pages of this K4 Capital Management LLC ("K4," "we," "our," or "us") website (the "Website"). K4 grants you a limited right to use the Website. Your right to use the Website is subject to your agreement to abide by these Terms in their entirety, as well as any other rules, procedures, policies, terms or conditions that govern all or any portion of the Website. At any time and for any reason we may revoke your right to use all or any portion of the Website. You may not violate or attempt to violate the security of the Website. These Terms are a binding contract between you and K4. By using or accessing the Website, you accept and agree to be bound by these Terms. Your use of the Website is governed by the version of the Terms in effect on the date the Website is accessed by you. K4 may modify these Terms at any time and without prior notice. We suggest that you review these Terms on a regular basis for any updates.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">2. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All information available through the Website is confidential and proprietary to K4. This includes all investment information and results, investor information, news about K4 and any investment vehicles managed by K4, financial statements and other information provided through the Website. You will keep all this information strictly confidential. You will not disclose any of this information to any person or use it for any purpose other than to evaluate potential investment opportunities or monitor your investment relationship with K4.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">3. Representations and Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You make certain representations and warranties regarding your use of the Website. You represent and warrant that (i) you have full authority and all rights necessary to enter into and fully perform all of your obligations pursuant to these Terms; (ii) you have not and you will not enter into any agreement or perform any act which might contravene the purposes and/or effects of these Terms; and (iii) you will not delete any information contained on this Website.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              UNDER NO CIRCUMSTANCES WILL K4 OR ANY OF ITS OFFICERS, DIRECTORS, EMPLOYEES, MEMBERS, MANAGERS OR AFFILIATES BE LIABLE TO YOU FOR ANY LOST PROFITS, LOST OPPORTUNITY OR ANY DIRECT, INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF ANY USE OF OR INABILITY TO USE THE WEBSITE OR ANY PORTION THEREOF, REGARDLESS OF WHETHER K4 HAS BEEN APPRISED OF THE LIKELIHOOD OF SUCH DAMAGES OCCURRING AND REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              K4 DOES NOT WARRANT THAT THE WEBSITE WILL OPERATE ERROR FREE OR THAT THIS WEBSITE, ITS SERVER, OR ITS CONTENT ARE FREE OF COMPUTER VIRUSES OR SIMILAR CONTAMINATION OR DESTRUCTIVE FEATURES. IF YOUR USE OF THE WEBSITE OR THE CONTENT RESULTS IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, K4 SHALL NOT BE RESPONSIBLE FOR THOSE COSTS.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">5. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to defend, indemnify, and hold harmless K4, from and against any and all claims, actions or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from (i) your access to, use or misuse of the Website or its content; (ii) your breach of these Terms or any representation, warranty or covenant made by you in these Terms; (iii) your violation of any applicable law, statute, ordinance, regulation or of any third party's rights; or (iv) claims asserted by third parties which, if proven, would place you in breach of representations, warranties, covenants or other provisions contained in these Terms.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">6. No Offer of Securities</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Website and all of its content is for informational purposes only. No information on this Website should be construed as a solicitation, offer, recommendation, representation of suitability or endorsement of any security or investment. Any descriptions or information involving investment objectives or criteria, investment process, or investment strategies are provided for illustration purposes only, may not be fully indicative of any present or future investments, may be changed in the discretion of K4 and are not intended to reflect actual performance or to project performance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Although the Website may include investment-related information, nothing on the Website is a recommendation that you purchase, sell or hold any security or other investment, or that you pursue any investment style or strategy. We do not give any advice or make any representations through the Website as to whether any security or investment is suitable to you or will be profitable. Nothing on the Website is intended to be, and you should not consider anything on the Website to be, investment, accounting, tax or legal advice. If you would like investment, accounting, tax or legal advice, you should consult with your own financial advisors, accountants or attorneys regarding your individual circumstances and needs.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">7. Performance Data</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Any performance data reported on this Website is an indication of past performance and does not indicate or guarantee future results. K4 advises all users of this Website that there is a possibility of loss on all investments and investor principal is not guaranteed. All investments involve risk, including the loss of principal. Unless otherwise specified, all performance data presented is unaudited.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Website has been compiled in good faith by K4; however, no representation is made as to the completeness or accuracy of the information it contains. K4 makes no commitment, and disclaims any duty, to update such information. K4 reserves the right to add, modify or delete any information on this Website at any time.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All trade names, trademarks, service marks and other product and service names and logos displayed herein are the proprietary marks and names of their respective owners, are protected by applicable copyright and trademark laws and may not be used by you without express authorization.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms shall be construed in accordance with the laws of the State of New York without regard to its principles of conflicts of law.
            </p>

            <h2 className="text-2xl font-light text-k4-navy mt-12 mb-4">10. Security Warning</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Please be aware that K4's name, brand, and reputation may be misused by unauthorized third parties. We do not provide investment advice or otherwise solicit capital via social media, including LinkedIn and Facebook, or encrypted chat platforms, including Telegram, WhatsApp, or Signal. If you receive a communication that appears suspicious, please report it to us at info@k4capitalmanagement.com.
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
