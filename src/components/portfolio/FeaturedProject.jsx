import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "../MagneticButton";

export default function FeaturedProject({ project, reversed = false }) {
  if (!project) return null;

  return (
    <div className={`featured-project-container ${reversed ? "reversed" : ""}`}>
      <div className="featured-project-image-col" style={{ order: reversed ? 2 : 1 }}>
        <Link 
          to={`/project/${project.slug}`}
          data-cursor="case-study"
          style={{ display: "block", borderRadius: "24px", overflow: "hidden", aspectRatio: "16/10", background: "var(--nr-light-gray)", position: "relative" }}
        >
          <motion.img 
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={project.image}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,25,47,0.15) 0%, transparent 40%)", pointerEvents: "none" }} />
        </Link>
      </div>
      
      <div className="featured-project-text-col" style={{ order: reversed ? 1 : 2, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {project.category}
          </span>
          <span style={{ width: "24px", height: "1px", background: "var(--nr-light-gray)" }} />
          <span style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-medium-gray)", fontWeight: 600 }}>
            {project.industry}
          </span>
        </div>
        
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          <Link to={`/project/${project.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            {project.name}
          </Link>
        </h2>
        
        <p style={{ color: "var(--nr-medium-gray)", fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "32px", maxWidth: "480px" }}>
          {project.overview || project.description}
        </p>

        {project.techStack && (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
            {project.techStack.map((tech) => (
              <span key={tech} style={{ padding: "6px 14px", background: "var(--nr-white)", border: "1px solid var(--nr-light-gray)", borderRadius: "100px", fontSize: "0.8125rem", color: "var(--nr-deep-navy)", fontWeight: 600 }}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <MagneticButton>
          <Link 
            to={`/project/${project.slug}`}
            className="btn-primary" 
            style={{ 
              background: "var(--nr-deep-navy)", 
              color: "var(--nr-white)", 
              padding: "16px 36px", 
              borderRadius: "100px", 
              fontWeight: 600, 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "10px", 
              fontSize: "0.9375rem",
              textDecoration: "none"
            }}
          >
            Explore Case Study
            <span style={{ fontSize: "1.2em" }}>→</span>
          </Link>
        </MagneticButton>
      </div>
    </div>
  );
}
