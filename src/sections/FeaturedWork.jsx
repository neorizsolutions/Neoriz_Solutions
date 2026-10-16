import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import ProjectCard from "../components/portfolio/ProjectCard";

/**
 * FeaturedWork — Homepage Selected Work Section
 * Rebuilt using the clean, modern, distinctive NEORIZ card system.
 * Removes obsolete full-bleed image containers, dramatic zoom-and-darken effects,
 * and presents structured architecture-first portfolio entries with restrained hover interactions.
 */
export default function FeaturedWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  // Featured works (or top selected from the 6 active entries)
  const featuredProjects = projectsData.filter((p) => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projectsData.slice(0, 3);

  return (
    <section ref={containerRef} className="work" id="work" style={{ background: "var(--nr-soft-white)", padding: "120px 0" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: "var(--nr-teal)", marginBottom: "16px" }}>
              Selected Work
            </div>
            <h2 className="section-title" style={{ margin: 0, fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}>
              Proof of <br />Performance.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              to="/work" 
              className="hover-arrow-link"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "var(--nr-deep-navy)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span>View All 6 Deployments</span>
              <span style={{ transition: "transform 0.3s ease" }}>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Featured Projects Grid */}
        <div className="nr-works-grid" style={{ marginBottom: "80px" }}>
          {displayProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              showImageSlot={false}
            />
          ))}
        </div>
        
        {/* Call to action button */}
        <div style={{ textAlign: "center" }}>
          <MagneticButton>
            <Link 
              to="/work" 
              className="btn-primary" 
              style={{ 
                padding: "16px 48px", 
                fontSize: "1rem", 
                borderRadius: "100px", 
                textDecoration: "none", 
                display: "inline-flex", 
                alignItems: "center" 
              }}
            >
              Explore Full Portfolio <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "8px" }}>→</span>
            </Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
