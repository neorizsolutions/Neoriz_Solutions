import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import useSEO from "../hooks/useSEO";

export default function CookiePolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useSEO({
    title: "Cookie Policy | Neoriz Solutions",
    description: "Read the Cookie Policy for Neoriz Solutions. Learn about how our website operates, our minimal technology footprint, and your choices regarding cookies.",
    url: "https://neorizsolutions.com/cookie-policy"
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
              Cookie Policy
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
                  <strong>Overview:</strong> Neoriz Solutions is committed to transparency. This website is designed with a minimal technology footprint: we do not set third-party tracking cookies, advertising pixels, or cross-site profiling tools. This policy explains what cookies are, how our website functions, and how you can manage browser settings.
                </p>
              </div>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  1. What Are Cookies and Similar Technologies?
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  A cookie is a small text file placed on your device (computer, smartphone, or tablet) by websites you visit. Cookies are commonly used to ensure websites function properly, retain session preferences, improve page loading speed, and provide general analytical reporting.
                </p>
                <p style={{ margin: 0 }}>
                  Other similar technologies include <em>local storage</em>, <em>session storage</em>, and <em>server logs</em>, which can store data locally in your browser or record standard HTTP communication headers.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  2. Essential & Strictly Necessary Technologies
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  Essential technologies are necessary for the core operation of our web application. They enable essential navigation, network routing, and security protection:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>
                    <strong>Hosting & Edge Delivery:</strong> Our site is served through global cloud content delivery networks (such as Vercel). These providers may set essential network cookies or security headers (e.g., load balancing, DDoS mitigation, and anti-abuse checks) to deliver pages reliably and securely.
                  </li>
                  <li>
                    <strong>Client-Side Routing:</strong> We utilize client-side single-page routing (React Router) to provide fast, seamless page transitions without setting persistent tracking identifiers.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  3. Analytics and Performance Cookies
                </h2>
                <p style={{ margin: 0 }}>
                  Our website does not deploy third-party analytics trackers, session replay recorders, or behavioral profiling scripts (such as Google Analytics or Hotjar). Standard server-side web server logs may record basic request data (such as page URLs requested, browser user agents, and IP addresses) strictly for network diagnostics, security monitoring, and capacity planning.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  4. Marketing & Advertising Cookies
                </h2>
                <p style={{ margin: 0 }}>
                  We do not use advertising networks, retargeting pixels, marketing cookies, or third-party behavioral profiling trackers (such as Meta Pixel, LinkedIn Insight Tag, or Google Ads). We do not monetize your browsing activity or share visitor data with data brokers.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  5. Third-Party Integrations
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  When you interact with certain external links or form submissions on our website:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>
                    <strong>Inquiry Dispatch:</strong> Contact form submissions are transmitted securely via API (Resend) for direct email relay without setting tracking cookies on your device.
                  </li>
                  <li>
                    <strong>External Links:</strong> If you navigate to external domains (such as our LinkedIn profile, Twitter account, or live project demonstrations), those external services have their own independent cookie policies and terms.
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  6. Managing & Disabling Cookies
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  You have full control over cookie storage through your browser settings. Most browsers allow you to:
                </p>
                <ul style={{ listStyle: "disc", paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li>View cookies stored on your device and delete them individually or in bulk.</li>
                  <li>Block all third-party cookies or block cookies from specific sites.</li>
                  <li>Configure your browser to reject all cookies automatically.</li>
                  <li>Clear all cookies and local data whenever you close your browser.</li>
                </ul>
                <p style={{ margin: 0, color: "var(--nr-medium-gray)", fontSize: "0.9375rem" }}>
                  To adjust these settings, consult your browser's Help documentation (e.g., Chrome, Safari, Firefox, or Edge). Because Neoriz Solutions does not rely on tracking cookies, disabling non-essential cookies will not impair your ability to browse our portfolio or submit inquiries.
                </p>
              </section>

              <section style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  7. Policy Updates
                </h2>
                <p style={{ margin: 0 }}>
                  We may update this Cookie Policy from time to time to reflect changes in our operational technologies or statutory guidelines. When revisions are published, the "Last Updated" date at the top of this document will be amended accordingly.
                </p>
              </section>

              <section style={{ borderTop: "1px solid var(--nr-light-gray)", paddingTop: "40px" }}>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", marginBottom: "18px" }}>
                  8. Contact Information
                </h2>
                <p style={{ marginBottom: "16px" }}>
                  If you have any questions or require further clarification regarding our use of cookies or privacy practices, please contact us:
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
