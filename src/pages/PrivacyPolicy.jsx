import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import useSEO from "../hooks/useSEO";

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useSEO({
    title: "Privacy Policy | Neoriz Solutions",
    description: "Read the Privacy Policy for Neoriz Solutions. Learn how we handle your project inquiries, form submissions, and communications with confidentiality and care.",
    url: "https://neorizsolutions.com/privacy-policy"
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
              Privacy Policy
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
                  <strong>Summary:</strong> At Neoriz Solutions, we respect your privacy and handle all communications with strict confidentiality. This policy outlines how information submitted through our website and project enquiry channels is collected, processed, and safeguarded.
                </p>
              </div>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  1. Introduction & Scope
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  This Privacy Policy applies to personal information collected by Neoriz Solutions through our primary website (<code>https://neorizsolutions.com</code>) and associated direct business communication channels, including project inquiry forms, electronic mail, and official messaging platforms.
                </p>
                <p style={{ margin: 0 }}>
                  By accessing our website or submitting project details through our contact forms, you acknowledge the collection and handling of information as described in this policy.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  2. Information We Collect
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  We collect information strictly necessary to evaluate project inquiries, respond to business messages, and provide technical consulting. This includes:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>
                    <strong>Inquiry Information:</strong> Name, professional email address, organization or business name, estimated project budget, and project requirements submitted via our contact form.
                  </li>
                  <li>
                    <strong>Direct Communications:</strong> Information provided when communicating directly with our engineering or advisory team via email (<code>hello@neorizsolutions.com</code>) or messaging channels.
                  </li>
                  <li>
                    <strong>Technical & Server Log Data:</strong> Basic HTTP request data automatically transmitted by web browsers, including IP addresses, browser user agents, and referral timestamps recorded for system security, abuse prevention, and network debugging.
                  </li>
                </ul>
                <p style={{ margin: 0, color: "var(--nr-medium-gray)", fontSize: "0.9375rem" }}>
                  <em>Note: Our website does not require public user account registration, password creation, or online consumer payment processing.</em>
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  3. How We Use Submitted Information
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  Information collected is utilized exclusively for legitimate business and technical evaluation purposes:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>Reviewing project specifications and preparing technical architecture assessments.</li>
                  <li>Drafting tailored project scopes, engineering proposals, and cost estimates.</li>
                  <li>Communicating directly regarding your inquiries, scheduled consultations, and development milestones.</li>
                  <li>Protecting our contact endpoints against automated spam, denial-of-service, and malicious submissions.</li>
                </ul>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  4. Third-Party Service Providers
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  We do not sell, rent, monetize, or trade your personal information. To facilitate core communications and host our web platform, we partner with verified infrastructure providers bound by appropriate data privacy and security terms:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>
                    <strong>Hosting & Server Infrastructure:</strong> Cloud hosting services (e.g., Vercel) that deliver edge web assets and process secure API endpoints.
                  </li>
                  <li>
                    <strong>Transactional Email Dispatch:</strong> Automated message relay services (e.g., Resend) used to securely transmit contact inquiries to our internal team.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  5. Data Retention & Security Practices
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  We retain contact inquiry information for the period required to address your business requirements, maintain communication records, or satisfy legal and accounting obligations. When data is no longer necessary, it is securely archived or deleted.
                </p>
                <p style={{ margin: 0 }}>
                  We employ industry-standard technical measures, including SSL/TLS encryption for all in-transit traffic, input length restrictions, and honeypot spam protection. While we apply diligent security standards, no electronic transmission over the Internet can be guaranteed completely immune from unauthorized interference.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  6. Your Privacy Rights
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  Depending on your jurisdiction, you may hold rights regarding your personal information, including:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>Requesting confirmation of whether we hold personal information relating to you.</li>
                  <li>Requesting access to, correction of, or deletion of your submitted contact details.</li>
                  <li>Objecting to or requesting the restriction of further processing of your inquiry data.</li>
                </ul>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  7. Policy Updates
                </h2>
                <p style={{ margin: 0 }}>
                  We may periodically revise this Privacy Policy to reflect technical modifications, operational practices, or statutory standards. Any modifications will be posted directly to this page with an updated effective date.
                </p>
              </section>

              <section style={{ borderTop: "1px solid var(--nr-light-gray)", paddingTop: "40px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  8. Contact Information
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  For questions concerning this Privacy Policy, our data handling practices, or to exercise applicable privacy rights, please reach out directly:
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
