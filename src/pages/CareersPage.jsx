import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";
import { careersData } from "../data/careersData";
import useSEO from "../hooks/useSEO";

export default function CareersPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useSEO({
    title: "Careers at Neoriz Solutions | Software Engineering & Product Roles",
    description: "Help us build websites, applications, and automation tools that solve practical business problems. Explore our current openings at Neoriz Solutions.",
    url: "https://neorizsolutions.com/careers"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "100px", background: "var(--nr-white)", minHeight: "100vh" }}>
        
        {/* 1. Careers Hero Header */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "48px 0 64px 0", borderBottom: "1px solid var(--nr-light-gray)" }}>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              style={{ maxWidth: "880px" }}
            >
              <div style={{ color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px", fontSize: "0.8125rem" }}>
                Join Neoriz Solutions
              </div>
              
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", fontWeight: 800, color: "var(--nr-deep-navy)", lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "28px" }}>
                Careers at Neoriz Solutions
              </h1>
              
              <p style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)", color: "var(--nr-medium-gray)", lineHeight: 1.65, maxWidth: "720px", margin: 0 }}>
                Help us build websites, applications, and automation tools that solve practical business problems. Explore our current openings below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Open Positions Section */}
        <section style={{ padding: "72px 0 96px 0", background: "var(--nr-soft-white)" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--nr-blue)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Opportunities
                </span>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", margin: "6px 0 0 0" }}>
                  Open Positions
                </h2>
              </div>

              <div style={{ background: "rgba(40, 88, 240, 0.08)", color: "var(--nr-blue)", padding: "6px 16px", borderRadius: "var(--nr-radius-full)", fontSize: "0.8125rem", fontWeight: 600 }}>
                {careersData.length} Active {careersData.length === 1 ? "Opening" : "Openings"}
              </div>
            </div>

            {/* Job Listings List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {careersData.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "var(--nr-white)",
                    borderRadius: "20px",
                    border: "1px solid var(--nr-light-gray)",
                    padding: "36px 40px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--nr-blue)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(40, 88, 240, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--nr-light-gray)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.03)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
                    
                    <div style={{ maxWidth: "620px" }}>
                      <h3 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", margin: "0 0 16px 0" }}>
                        {job.title}
                      </h3>

                      {/* Badges / Metadata */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "18px" }}>
                        <span style={{ 
                          display: "inline-flex", 
                          alignItems: "center", 
                          gap: "6px", 
                          background: "var(--nr-soft-white)", 
                          color: "var(--nr-deep-navy)", 
                          padding: "6px 14px", 
                          borderRadius: "var(--nr-radius-full)", 
                          fontSize: "0.8125rem", 
                          fontWeight: 600,
                          border: "1px solid var(--nr-light-gray)"
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                          </svg>
                          {job.type}
                        </span>

                        <span style={{ 
                          display: "inline-flex", 
                          alignItems: "center", 
                          gap: "6px", 
                          background: "rgba(8, 200, 176, 0.1)", 
                          color: "#059669", 
                          padding: "6px 14px", 
                          borderRadius: "var(--nr-radius-full)", 
                          fontSize: "0.8125rem", 
                          fontWeight: 600,
                          border: "1px solid rgba(8, 200, 176, 0.25)"
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                          </svg>
                          {job.arrangement}
                        </span>

                        <span style={{ 
                          display: "inline-flex", 
                          alignItems: "center", 
                          gap: "6px", 
                          background: "var(--nr-soft-white)", 
                          color: "var(--nr-medium-gray)", 
                          padding: "6px 14px", 
                          borderRadius: "var(--nr-radius-full)", 
                          fontSize: "0.8125rem", 
                          fontWeight: 600,
                          border: "1px solid var(--nr-light-gray)"
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {job.location}
                        </span>
                      </div>

                      <p style={{ color: "var(--nr-medium-gray)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                        {job.roleDescription}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div style={{ alignSelf: "center", flexShrink: 0 }}>
                      <MagneticButton>
                        <Link 
                          to={`/careers/${job.slug}`} 
                          className="btn-primary"
                        >
                          View Job Details
                        </Link>
                      </MagneticButton>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* Speculative Application Callout */}
            <div style={{ 
              marginTop: "48px", 
              padding: "36px", 
              background: "var(--nr-white)", 
              borderRadius: "20px", 
              border: "1px solid var(--nr-light-gray)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px"
            }}>
              <div style={{ maxWidth: "600px" }}>
                <h4 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--nr-deep-navy)", margin: "0 0 8px 0" }}>
                  Don’t see your exact role?
                </h4>
                <p style={{ color: "var(--nr-medium-gray)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  We are always eager to connect with curious developers, designers, and automation thinkers. Send your CV and portfolio to our engineering team.
                </p>
              </div>

              <div>
                <MagneticButton>
                  <a 
                    href="mailto:hradmin@neorizsolutions.com?subject=Speculative%20Application%20-%20Neoriz%20Solutions" 
                    className="btn-secondary"
                  >
                    Email hradmin@neorizsolutions.com
                  </a>
                </MagneticButton>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
