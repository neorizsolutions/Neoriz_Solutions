import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import NotFound from "./NotFound";
import MagneticButton from "../components/MagneticButton";
import { getJobBySlug } from "../data/careersData";
import useSEO from "../hooks/useSEO";

export default function JobDetailPage() {
  const { slug } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const job = getJobBySlug(slug);

  useSEO({
    title: job 
      ? `${job.title} (${job.arrangement.split("/")[0].trim()}) | Careers — Neoriz Solutions` 
      : "Job Opening Not Found — Neoriz Solutions",
    description: job 
      ? `${job.title} opening at Neoriz Solutions. ${job.type}, ${job.arrangement}. Work on client projects and in-house digital products with experienced developers.` 
      : "Careers opening details for Neoriz Solutions.",
    url: job ? `https://neorizsolutions.com/careers/${slug}` : ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!job) return <NotFound />;

  // Email mailto URL with subject line only
  const emailSubject = encodeURIComponent(`Job Application: ${job.title}`);
  const mailtoUrl = `mailto:${job.applyEmail}?subject=${emailSubject}`;

  const handleApplyClick = (e) => {
    if (job.applyMode === "linkedin" && job.linkedInUrl) {
      // Allow default link navigation to live LinkedIn URL
      return;
    }
    if (job.applyMode === "opening_soon" || job.status === "opening_soon") {
      e.preventDefault();
      return;
    }
    // For email application, open candidate's email client directly
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "100px", background: "var(--nr-white)", minHeight: "100vh" }}>
        
        {/* 1. Header / Breadcrumb & Title Section */}
        <section style={{ padding: "40px 0 48px 0", background: "var(--nr-soft-white)", borderBottom: "1px solid var(--nr-light-gray)" }}>
          <div className="container" style={{ maxWidth: "920px" }}>
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem" }}>
                <li>
                  <Link to="/" style={{ color: "var(--nr-medium-gray)", textDecoration: "none" }}>Home</Link>
                </li>
                <li style={{ color: "var(--nr-medium-gray)" }}>/</li>
                <li>
                  <Link to="/careers" style={{ color: "var(--nr-medium-gray)", textDecoration: "none" }}>Careers</Link>
                </li>
                <li style={{ color: "var(--nr-medium-gray)" }}>/</li>
                <li aria-current="page" style={{ color: "var(--nr-deep-navy)", fontWeight: 600 }}>
                  {job.title}
                </li>
              </ol>
            </nav>

            {/* Role Title */}
            <h1 style={{ 
              fontFamily: "var(--nr-font-display)", 
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", 
              fontWeight: 800, 
              color: "var(--nr-deep-navy)", 
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 20px 0"
            }}>
              {job.title}
            </h1>

            {/* Badges / Work Arrangement & Location Meta */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              {/* Highlighted Remote Pill */}
              <span style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "6px", 
                background: "rgba(40, 88, 240, 0.1)", 
                color: "var(--nr-blue)", 
                padding: "8px 16px", 
                borderRadius: "var(--nr-radius-full)", 
                fontSize: "0.875rem", 
                fontWeight: 700,
                border: "1px solid rgba(40, 88, 240, 0.2)"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--nr-blue)" }} />
                100% {job.arrangement}
              </span>

              <span style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "6px", 
                background: "var(--nr-white)", 
                color: "var(--nr-medium-gray)", 
                padding: "8px 16px", 
                borderRadius: "var(--nr-radius-full)", 
                fontSize: "0.875rem", 
                fontWeight: 600,
                border: "1px solid var(--nr-light-gray)"
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                {job.type}
              </span>

              <span style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "6px", 
                background: "var(--nr-white)", 
                color: "var(--nr-medium-gray)", 
                padding: "8px 16px", 
                borderRadius: "var(--nr-radius-full)", 
                fontSize: "0.875rem", 
                fontWeight: 600,
                border: "1px solid var(--nr-light-gray)"
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {job.location}
              </span>
            </div>

          </div>
        </section>

        {/* 2. Main Job Details Body */}
        <section style={{ padding: "64px 0 96px 0", background: "var(--nr-white)" }}>
          <div className="container" style={{ maxWidth: "920px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

              {/* Section 1: Company Description */}
              <div style={{ borderBottom: "1px solid var(--nr-light-gray)", paddingBottom: "48px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--nr-blue)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                  About Neoriz
                </span>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)", fontWeight: 700, color: "var(--nr-deep-navy)", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
                  Company Description
                </h2>
                <p style={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.75, margin: 0 }}>
                  {job.companyDescription}
                </p>
              </div>

              {/* Section 2: Role Description */}
              <div style={{ borderBottom: "1px solid var(--nr-light-gray)", paddingBottom: "48px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--nr-blue)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                  What You'll Do
                </span>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)", fontWeight: 700, color: "var(--nr-deep-navy)", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
                  Role Description
                </h2>
                
                <p style={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "24px" }}>
                  {job.roleDescription}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px", color: "#334155", fontSize: "1rem", lineHeight: 1.65 }}>
                      <span style={{ color: "var(--nr-blue)", fontSize: "1.2rem", lineHeight: 1, marginTop: "2px", fontWeight: "bold" }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: Qualifications */}
              <div style={{ borderBottom: "1px solid var(--nr-light-gray)", paddingBottom: "48px" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--nr-blue)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                  What We're Looking For
                </span>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)", fontWeight: 700, color: "var(--nr-deep-navy)", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
                  Qualifications
                </h2>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {job.qualifications.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px", color: "#334155", fontSize: "1rem", lineHeight: 1.65 }}>
                      <span style={{ color: "var(--nr-teal)", fontSize: "1.2rem", lineHeight: 1, marginTop: "2px", fontWeight: "bold" }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: APPLICATION */}
              <div style={{ 
                background: "var(--nr-soft-white)", 
                borderRadius: "24px", 
                border: "1px solid var(--nr-light-gray)", 
                padding: "44px 40px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.02)"
              }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--nr-blue)", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                  Join Our Team
                </span>
                <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(1.6rem, 2.8vw, 2.1rem)", fontWeight: 800, color: "var(--nr-deep-navy)", margin: "0 0 16px 0", letterSpacing: "-0.02em" }}>
                  Ready to Apply?
                </h2>
                
                <p style={{ color: "var(--nr-medium-gray)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "28px", maxWidth: "680px" }}>
                  Click below to submit your application directly to our hiring team via <strong style={{ color: "var(--nr-deep-navy)" }}>{job.applyEmail}</strong>.
                </p>

                {/* Application Button Area */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>
                  {job.applyMode === "opening_soon" || job.status === "opening_soon" ? (
                    <div style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      padding: "12px 28px", 
                      background: "#E2E8F0", 
                      color: "#64748B", 
                      borderRadius: "var(--nr-radius-full)", 
                      fontSize: "0.875rem", 
                      fontWeight: 600,
                      letterSpacing: "0.02em"
                    }}>
                      Applications opening soon
                    </div>
                  ) : job.applyMode === "linkedin" && job.linkedInUrl ? (
                    <MagneticButton>
                      <a 
                        href={job.linkedInUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary"
                        onClick={handleApplyClick}
                      >
                        Apply on LinkedIn
                      </a>
                    </MagneticButton>
                  ) : (
                    <MagneticButton>
                      <a 
                        href={mailtoUrl}
                        className="btn-primary"
                        onClick={handleApplyClick}
                      >
                        Apply Now
                      </a>
                    </MagneticButton>
                  )}
                </div>

                {/* Required Note Below Application Button */}
                <div style={{ 
                  background: "var(--nr-white)", 
                  borderRadius: "14px", 
                  padding: "20px 24px", 
                  border: "1px solid rgba(40, 88, 240, 0.15)",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start"
                }}>
                  <div style={{ color: "var(--nr-blue)", marginTop: "2px", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: "block", color: "var(--nr-deep-navy)", fontSize: "0.875rem", marginBottom: "4px" }}>
                      Application Instructions
                    </strong>
                    <p style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>
                      {job.applicationNote}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
