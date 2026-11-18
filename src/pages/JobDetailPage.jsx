import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states for in-page Resend submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolioLink: "",
    message: "",
    bot_field: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

  // Email mailto URL prefilled with prompt's required application details
  const emailSubject = encodeURIComponent(`Job Application: ${job.title} — [Your Name]`);
  const emailBody = encodeURIComponent(
`Hi Neoriz Solutions Team,

I am applying for the ${job.title} position (${job.arrangement}).

Applicant Name: [Your Name]
Contact Phone: [Your Phone Number]
Résumé Link (Google Drive / Dropbox / PDF): [Your Link]
GitHub / Portfolio / Live Project Link: [Your Link]

1. What I built & personally contributed:
[Briefly describe your project and what you personally engineered]

2. One technical problem I solved:
[Explain the challenge, your debugging/engineering thought process, and how you resolved it]

Thank you,
[Your Name]`
  );
  const mailtoUrl = `mailto:${job.applyEmail}?subject=${emailSubject}&body=${emailBody}`;

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please share details about what you built and problems you solved.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.portfolioLink, // Routed as link in contact handler
          projectType: `Job Application: ${job.title}`,
          budget: "N/A (Careers)",
          message: formData.message,
          bot_field: formData.bot_field
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || `Couldn't send application. Please email directly at ${job.applyEmail}.`);
      }
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || `Couldn't send application. Please email directly at ${job.applyEmail}.`);
    } finally {
      setIsSubmitting(false);
    }
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
            
            {/* Back to Careers Link */}
            <Link 
              to="/careers" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                color: "var(--nr-medium-gray)", 
                textDecoration: "none", 
                marginBottom: "24px", 
                fontSize: "0.875rem", 
                fontWeight: 700, 
                textTransform: "uppercase", 
                letterSpacing: "0.08em",
                transition: "color 0.2s ease" 
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--nr-blue)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--nr-medium-gray)"}
            >
              ← Back to Open Positions
            </Link>

            {/* Title */}
            <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "20px" }}>
              {job.title}
            </h1>

            {/* Work Arrangement, Internship Type, and Location Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              
              {/* Highlighted Remote Indicator */}
              <span style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                background: "rgba(8, 200, 176, 0.12)", 
                color: "#047857", 
                padding: "8px 16px", 
                borderRadius: "var(--nr-radius-full)", 
                fontSize: "0.875rem", 
                fontWeight: 700,
                border: "1px solid rgba(8, 200, 176, 0.3)"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }} />
                {job.arrangement}
              </span>

              <span style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "6px", 
                background: "var(--nr-white)", 
                color: "var(--nr-deep-navy)", 
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
                  Click below to submit your application directly to our team via <strong style={{ color: "var(--nr-deep-navy)" }}>{job.applyEmail}</strong>, or use our quick on-page application form.
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
                    <>
                      <MagneticButton>
                        <a 
                          href={mailtoUrl}
                          className="btn-primary"
                          onClick={handleApplyClick}
                        >
                          Apply Now (Email Us)
                        </a>
                      </MagneticButton>

                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="btn-secondary"
                        style={{ cursor: "pointer" }}
                      >
                        Quick Application Form
                      </button>
                    </>
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

      {/* In-page Quick Application Modal (Powered by Resend API -> hradmin@neorizsolutions.com) */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            style={{ 
              position: "fixed", 
              inset: 0, 
              zIndex: 10000, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              background: "rgba(10, 25, 47, 0.65)",
              backdropFilter: "blur(6px)",
              padding: "20px"
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                maxWidth: "640px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "36px 32px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
                position: "relative"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  color: "var(--nr-medium-gray)",
                  lineHeight: 1
                }}
                aria-label="Close application form"
              >
                ✕
              </button>

              {!isSubmitted ? (
                <>
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--nr-blue)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      Online Application
                    </span>
                    <h3 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--nr-deep-navy)", margin: "6px 0 8px 0" }}>
                      Apply for {job.title}
                    </h3>
                    <p style={{ color: "var(--nr-medium-gray)", fontSize: "0.875rem", margin: 0, lineHeight: 1.5 }}>
                      Directly submits your details to <strong style={{ color: "var(--nr-deep-navy)" }}>{job.applyEmail}</strong> via our secure Resend email dispatch.
                    </p>
                  </div>

                  {submitError && (
                    <div style={{ padding: "12px 16px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: "10px", color: "#B91C1C", fontSize: "0.875rem", marginBottom: "20px" }}>
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    {/* Honeypot field */}
                    <input 
                      type="text" 
                      name="bot_field" 
                      value={formData.bot_field} 
                      onChange={handleFormChange} 
                      style={{ display: "none" }} 
                      tabIndex={-1} 
                      autoComplete="off" 
                    />

                    <div>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "6px" }}>
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: formErrors.name ? "1px solid #EF4444" : "1px solid var(--nr-light-gray)",
                          fontSize: "0.9375rem",
                          outline: "none"
                        }}
                      />
                      {formErrors.name && <span style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{formErrors.name}</span>}
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: formErrors.email ? "1px solid #EF4444" : "1px solid var(--nr-light-gray)",
                          fontSize: "0.9375rem",
                          outline: "none"
                        }}
                      />
                      {formErrors.email && <span style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{formErrors.email}</span>}
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "6px" }}>
                        GitHub / Portfolio / Résumé Link (Optional)
                      </label>
                      <input 
                        type="url" 
                        name="portfolioLink" 
                        value={formData.portfolioLink} 
                        onChange={handleFormChange}
                        placeholder="https://github.com/yourusername or drive link"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid var(--nr-light-gray)",
                          fontSize: "0.9375rem",
                          outline: "none"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "6px" }}>
                        What you built & technical problem solved *
                      </label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleFormChange}
                        rows={4}
                        placeholder="Briefly explain what you built, what you personally contributed, and one technical problem you solved..."
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: formErrors.message ? "1px solid #EF4444" : "1px solid var(--nr-light-gray)",
                          fontSize: "0.9375rem",
                          outline: "none",
                          resize: "vertical"
                        }}
                      />
                      {formErrors.message && <span style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>{formErrors.message}</span>}
                    </div>

                    <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "12px" }}>
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="btn-secondary"
                        style={{ cursor: "pointer" }}
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
                      >
                        {isSubmitting ? "Submitting..." : "Send Application"}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "36px 12px" }}>
                  <div style={{ width: "64px", height: "64px", background: "rgba(8, 200, 176, 0.15)", color: "#059669", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--nr-font-display)", fontSize: "1.75rem", fontWeight: 800, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>
                    Application Sent!
                  </h3>
                  <p style={{ color: "var(--nr-medium-gray)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "28px" }}>
                    Thank you for applying. We have delivered your application to <strong style={{ color: "var(--nr-deep-navy)" }}>{job.applyEmail}</strong>. Our engineering team will review your profile and get in touch with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                      setFormData({ name: "", email: "", portfolioLink: "", message: "", bot_field: "" });
                    }}
                    className="btn-primary"
                    style={{ cursor: "pointer" }}
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
