import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import useSEO from "../hooks/useSEO";

export default function TermsOfUse() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useSEO({
    title: "Terms of Use | Neoriz Solutions",
    description: "Review the Terms of Use governing access to and usage of the Neoriz Solutions website, intellectual property, and project inquiries.",
    url: "https://neorizsolutions.com/terms-of-use"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px", background: "var(--nr-white)", minHeight: "100vh" }}>
        
        {/* Header Hero */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "80px 0 60px 0", borderBottom: "1px solid var(--nr-light-gray)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div style={{ color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.8125rem" }}>
              Legal Documentation
            </div>
            <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "20px" }}>
              Terms of Use
            </h1>
            <p style={{ color: "var(--nr-medium-gray)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Last Updated: October 16, 2026 &bull; Effective Date: October 16, 2026
            </p>
          </div>
        </section>

        {/* Content Document */}
        <section style={{ padding: "80px 0 120px 0" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <div className="legal-article" style={{ color: "var(--nr-dark-navy)", fontSize: "1.0625rem", lineHeight: 1.8 }}>
              
              <div style={{ background: "var(--nr-soft-white)", border: "1px solid var(--nr-light-gray)", borderRadius: "16px", padding: "28px 32px", marginBottom: "48px" }}>
                <p style={{ margin: 0, color: "var(--nr-medium-gray)", fontSize: "1rem", lineHeight: 1.7 }}>
                  <strong>Important Notice:</strong> These Terms of Use govern your browsing and informational access to the Neoriz Solutions website. Formal software engineering, design consulting, or development contracts are governed by independent, bilateral client service agreements.
                </p>
              </div>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  1. Acceptance of Terms
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  By accessing or browsing this website (<code>https://neorizsolutions.com</code>), you agree to comply with and be bound by these Terms of Use. If you do not accept these terms, you should discontinue use of the website immediately.
                </p>
                <p style={{ margin: 0 }}>
                  We reserve the right to modify these terms at any time. Continued use of the website following published updates represents your acceptance of the revised terms.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  2. Permitted Use of the Website
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  You are granted a limited, revocable, non-exclusive license to access and browse the website for informational purposes regarding our software engineering and design capabilities. You agree not to:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>Deploy automated scrapers, crawlers, or harvesting tools to extract content or data without prior written authorization.</li>
                  <li>Transmit unsolicited promotional materials, spam, or automated bot submissions through contact forms.</li>
                  <li>Attempt to compromise, disrupt, or probe the vulnerability of the website, hosting infrastructure, or underlying APIs.</li>
                  <li>Misrepresent your identity or affiliation when requesting project evaluations.</li>
                </ul>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  3. Intellectual Property & Brand Assets
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  All website content, including brand logos, visual designs, showcase screenshots, case study narratives, graphics, icons, and software source code, is the property of Neoriz Solutions or its respective licensors and is protected by applicable intellectual property laws.
                </p>
                <p style={{ margin: 0 }}>
                  Case studies and client project highlights demonstrate engineering work performed by our team. Third-party trademarks, product names, and company logos referenced remain the property of their respective owners.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  4. Project Inquiries & Service Engagements
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  Submitting a project enquiry or budget estimate via our website does not create a binding development contract, partnership, or client relationship. 
                </p>
                <p style={{ margin: 0 }}>
                  Any commercial engagement, scope of work, technical milestone schedule, warranty, or support obligation requires a formal, mutually executed Master Services Agreement (MSA) or Statement of Work (SOW).
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  5. Accuracy of Information & External Links
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  While we strive to maintain accurate, up-to-date information regarding our technical capabilities, the website is provided on an "as is" and "as available" basis without express or implied warranties.
                </p>
                <p style={{ margin: 0 }}>
                  The website may provide hyperlinks to external third-party services, client domains, or live project demonstrations. Neoriz Solutions does not control and is not responsible for the availability, content, or privacy practices of external web destinations.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  6. Limitation of Liability
                </h2>
                <p style={{ margin: 0 }}>
                  To the maximum extent permitted under applicable law, Neoriz Solutions and its directors, employees, or contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to, use of, or inability to use this website.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  7. Governing Law & Dispute Resolution
                </h2>
                <p style={{ margin: 0 }}>
                  These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these terms shall be instituted in the competent courts located in Kerala, India.
                </p>
              </section>

              <section style={{ borderTop: "1px solid var(--nr-light-gray)", paddingTop: "40px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  8. Contact & Legal Notices
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  For inquiries or official legal notices regarding these Terms of Use, please contact:
                </p>
                <div style={{ background: "var(--nr-soft-white)", border: "1px solid var(--nr-light-gray)", borderRadius: "12px", padding: "20px 24px" }}>
                  <p style={{ margin: "0 0 8px 0", fontWeight: 700, color: "var(--nr-deep-navy)" }}>Neoriz Solutions</p>
                  <p style={{ margin: "0 0 8px 0", color: "var(--nr-medium-gray)" }}>
                    Email: <a href="mailto:hello@neorizsolutions.com" style={{ color: "var(--nr-blue)", fontWeight: 600 }}>hello@neorizsolutions.com</a>
                  </p>
                  <p style={{ margin: 0, color: "var(--nr-medium-gray)" }}>
                    Location: Kochi Infopark, Kerala, India
                  </p>
                </div>
              </section>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
