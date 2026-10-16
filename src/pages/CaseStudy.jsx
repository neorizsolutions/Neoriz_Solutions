import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import NotFound from "./NotFound";
import MagneticButton from "../components/MagneticButton";
import ProjectNavigation from "../components/portfolio/ProjectNavigation";
import RelatedProjects from "../components/portfolio/RelatedProjects";
import useSEO from "../hooks/useSEO";

export default function CaseStudy() {
  const { slug } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex !== -1 && projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  useSEO({
    title: project ? `${project.name} | Case Study — Neoriz Solutions` : "Case Study Not Found — Neoriz Solutions",
    description: project ? project.overview || project.description : "Case study details for Neoriz Solutions digital project.",
    url: project ? `https://neorizsolutions.com/project/${slug}` : ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "100px", background: "var(--nr-white)", minHeight: "100vh" }}>
        
        {/* 1. Project Hero Header */}
        <section style={{ padding: "40px 0 48px 0", background: "var(--nr-soft-white)", borderBottom: "1px solid var(--nr-light-gray)" }}>
          <div className="container">
            <Link 
              to="/work" 
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
                letterSpacing: "0.08em" 
              }}
            >
              <span>←</span> Back to All Works
            </Link>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "960px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--nr-blue)", fontWeight: 700 }}>
                  {project.category}
                </span>
                <span style={{ width: "24px", height: "1px", background: "var(--nr-light-gray)" }} />
                <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--nr-medium-gray)", fontWeight: 600 }}>
                  {project.industry}
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3rem, 6vw, 5.25rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: "28px" }}>
                {project.name}
              </h1>

              <p style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", color: "var(--nr-medium-gray)", lineHeight: 1.6, maxWidth: "780px", marginBottom: "40px" }}>
                {project.tagline || project.description}
              </p>

              {project.website && project.website !== "#" && (
                <div>
                  <MagneticButton>
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary" 
                      style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px" }}
                    >
                      {project.ctaLabel || "View Live Experience"}
                      <span style={{ fontSize: "1.2em" }}>↗</span>
                    </a>
                  </MagneticButton>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* 2. Main Full-Bleed Screenshot (Optional) */}
        {project.image && (
          <section style={{ padding: "60px 0 80px 0" }}>
            <div className="container">
              <div className="nr-project-media-container" style={{ borderRadius: "24px", overflow: "hidden", background: "var(--nr-light-gray)", border: "1px solid var(--nr-light-gray)", boxShadow: "0 20px 50px rgba(0,0,0,0.06)", position: "relative" }}>
                <img 
                  src={project.image} 
                  alt={`${project.name} primary interface screenshot`} 
                  className="nr-project-media-img"
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </div>
            </div>
          </section>
        )}

        {/* 2b. Case Study Gallery (Optional - Additional Authentic Project Screenshots) */}
        {project.gallery && project.gallery.length > 1 && (
          <section style={{ paddingBottom: "80px" }}>
            <div className="container">
              <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "24px" }}>
                System Screenshots & Workflows
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "28px" }}>
                {project.gallery.slice(1).map((screenshot, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="nr-project-media-container"
                    style={{ 
                      borderRadius: "20px", 
                      overflow: "hidden", 
                      background: "var(--nr-light-gray)", 
                      border: "1px solid var(--nr-light-gray)", 
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      position: "relative"
                    }}
                  >
                    <img 
                      src={screenshot} 
                      alt={`${project.name} interface view ${sIdx + 2}`} 
                      className="nr-project-media-img"
                      style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. Project Metadata Bar */}
        <section style={{ paddingBottom: "80px" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", borderTop: "1px solid var(--nr-light-gray)", borderBottom: "1px solid var(--nr-light-gray)", padding: "40px 0" }}>
              <div style={{ flex: "1 1 200px" }}>
                <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "8px" }}>
                  Classification
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--nr-deep-navy)" }}>
                  {project.category}
                </div>
              </div>

              <div style={{ flex: "1 1 200px" }}>
                <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "8px" }}>
                  Industry
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--nr-deep-navy)" }}>
                  {project.industry}
                </div>
              </div>

              {project.techStack && (
                <div style={{ flex: "2 1 320px" }}>
                  <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>
                    Key Capabilities
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.techStack.map((tech) => (
                      <span key={tech} style={{ padding: "6px 14px", background: "var(--nr-soft-white)", border: "1px solid var(--nr-light-gray)", borderRadius: "100px", fontSize: "0.875rem", color: "var(--nr-deep-navy)", fontWeight: 600 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. Deep Storytelling Breakdown */}
        <section style={{ paddingBottom: "120px" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "96px", maxWidth: "900px", margin: "0 auto" }}>
              
              {/* Context / Overview */}
              {project.overview && (
                <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "40px" }} className="editorial-project-info">
                  <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                    01 — Context
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "20px", letterSpacing: "-0.02em" }}>
                      The Overview
                    </h2>
                    <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, margin: 0 }}>
                      {project.overview}
                    </p>
                  </div>
                </div>
              )}

              {/* Challenge / Business Problem */}
              {project.challenge && (
                <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "40px" }} className="editorial-project-info">
                  <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                    02 — Challenge
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "20px", letterSpacing: "-0.02em" }}>
                      The Requirements
                    </h2>
                    <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, marginBottom: "20px" }}>
                      <strong>Business Requirement:</strong> {project.challenge.requirements}
                    </p>
                    <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, margin: 0 }}>
                      <strong>Core Problem:</strong> {project.challenge.businessProblem}
                    </p>
                  </div>
                </div>
              )}

              {/* Strategy / Solution */}
              {project.strategy && (
                <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "40px" }} className="editorial-project-info">
                  <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                    03 — Strategy
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "20px", letterSpacing: "-0.02em" }}>
                      The Solution
                    </h2>
                    <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, marginBottom: "20px" }}>
                      {project.strategy.uxPlanning}
                    </p>
                    <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, margin: 0 }}>
                      {project.strategy.designDecisions}
                    </p>
                  </div>
                </div>
              )}

              {/* Main Features */}
              {project.features && project.features.length > 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "40px" }} className="editorial-project-info">
                  <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                    04 — Features
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "28px", letterSpacing: "-0.02em" }}>
                      Core Capabilities
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ background: "var(--nr-soft-white)", padding: "28px", borderRadius: "16px", border: "1px solid var(--nr-light-gray)" }}>
                          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>
                            {feat.title}
                          </h3>
                          <p style={{ fontSize: "1rem", color: "var(--nr-medium-gray)", lineHeight: 1.6, margin: 0 }}>
                            {feat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Intended Business Outcomes (Factual, explicit architecture goals) */}
              {project.intendedOutcomes && (
                <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "40px" }} className="editorial-project-info">
                  <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", borderTop: "2px solid var(--nr-blue)", paddingTop: "12px" }}>
                    05 — Objectives
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                      {project.intendedOutcomes.title}
                    </h2>
                    <p style={{ fontSize: "1.125rem", color: "var(--nr-medium-gray)", lineHeight: 1.6, marginBottom: "28px" }}>
                      {project.intendedOutcomes.description}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
                      {project.intendedOutcomes.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ background: "var(--nr-deep-navy)", color: "var(--nr-white)", padding: "28px", borderRadius: "16px" }}>
                          <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--nr-teal)", marginBottom: "10px" }}>
                            {pt.title}
                          </h3>
                          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
                            {pt.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* 5. Project Navigation (Previous / Next) */}
        <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />

        {/* 6. Related Projects (Selected from the active 6) */}
        <RelatedProjects currentProject={project} allProjects={projectsData} />

        {/* 7. Closing CTA */}
        <section style={{ padding: "100px 0", background: "var(--nr-deep-navy)", color: "var(--nr-white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "20px", letterSpacing: "-0.02em" }}>
              Interested in a similar deployment?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.125rem", maxWidth: "540px", margin: "0 auto 40px auto", lineHeight: 1.6 }}>
              Let's explore your system requirements and map out an engineering roadmap for your business.
            </p>
            <MagneticButton>
              <Link 
                to="/contact" 
                className="btn-secondary" 
                style={{ 
                  borderColor: "rgba(255,255,255,0.25)", 
                  color: "var(--nr-white)",
                  padding: "16px 40px",
                  borderRadius: "100px",
                  fontSize: "1rem",
                  textDecoration: "none"
                }}
              >
                Discuss Your Project →
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
