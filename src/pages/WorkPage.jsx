import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";
import FeaturedShowcase from "../components/works/FeaturedShowcase";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectFilter from "../components/portfolio/ProjectFilter";
import { projectsData } from "../data/portfolioData";
import useSEO from "../hooks/useSEO";

const CATEGORIES = [
  "All",
  "Products",
  "Client Projects"
];

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useSEO({
    title: "Portfolio & Selected Works | NEORIZ Solutions",
    description: "Explore the NEORIZ Solutions portfolio: TABLO Self-Ordering, TABLO Table QR, NOX Fight Club, Neoriz WhatsApp Automation, Cafe Serenity, Emblingo Learning App, and Felora Dress Rental.",
    url: "https://neorizsolutions.com/work"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter projects according to the active category
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Featured spotlight projects (from the curated set)
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px", background: "var(--nr-soft-white)", minHeight: "100vh" }}>

        {/* 1. Works Introduction / Hero */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "120px 0 60px 0" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "900px" }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px", fontSize: "0.8125rem" }}>
                Selected Portfolio
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.25rem, 6.5vw, 5.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: "28px" }}>
                PROPRIETARY PRODUCTS.<br />
                ENGINEERED EXPERIENCES.
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.7, maxWidth: "680px" }}>
                Explore our proprietary platforms, custom client web architectures, and digital services engineered for high operational performance and fluid user journeys.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Featured Showcase Carousel */}
        <section style={{ padding: "20px 0 80px 0" }}>
          <div className="container">
            <FeaturedShowcase projects={featuredProjects} />
          </div>
        </section>

        {/* 3. Category Filter & Project Browsing Grid */}
        <section style={{ padding: "20px 0 120px 0" }}>
          <div className="container">

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", marginBottom: "48px" }}>
              <div>
                <div style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--nr-blue)", fontWeight: 700, marginBottom: "8px" }}>
                  Browse Work
                </div>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "var(--nr-deep-navy)", margin: 0, letterSpacing: "-0.02em" }}>
                  Active Engagements
                </h2>
              </div>

              <ProjectFilter
                categories={CATEGORIES}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {filteredProjects.length > 0 ? (
                  <div className="nr-works-grid">
                    {filteredProjects.map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: "80px 0", textAlign: "center", color: "var(--nr-medium-gray)" }}>
                    <p style={{ fontSize: "1.25rem" }}>No projects found in this category.</p>
                    <button
                      onClick={() => setActiveCategory("All")}
                      style={{ background: "none", border: "none", color: "var(--nr-blue)", marginTop: "16px", cursor: "pointer", fontSize: "1rem", fontWeight: 600 }}
                    >
                      View All Projects
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* 4. Closing Contact CTA */}
        <section style={{ padding: "120px 0", background: "var(--nr-deep-navy)", color: "var(--nr-white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.75rem)", fontWeight: 700, marginBottom: "24px", letterSpacing: "-0.03em" }}>
              Have a product or project in mind?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 48px auto", lineHeight: 1.6 }}>
              Whether building an enterprise web system, an internal platform, or an interactive brand experience, our engineering team is ready.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="btn-secondary"
                style={{
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "var(--nr-white)",
                  padding: "18px 44px",
                  borderRadius: "100px",
                  fontSize: "1.0625rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center"
                }}
              >
                Start a Conversation
                <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "10px" }}>→</span>
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
