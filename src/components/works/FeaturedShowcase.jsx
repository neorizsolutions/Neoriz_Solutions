import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * FeaturedShowcase — Architectural hero banner for WorkPage
 * Clean, modern layout using NEORIZ brand colors and subtle typography.
 * Gracefully handles entries without images with optional screenshot placeholder.
 */
export default function FeaturedShowcase({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const showcaseRef = useRef(null);

  const nextProject = useCallback(() => {
    if (!projects || projects.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects]);

  const prevProject = useCallback(() => {
    if (!projects || projects.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects]);

  useEffect(() => {
    if (isPaused || !projects || projects.length <= 1) return;
    const interval = setInterval(nextProject, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextProject, projects]);

  if (!projects || projects.length === 0) return null;

  const current = projects[currentIndex];

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextProject();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevProject();
    }
  };

  return (
    <div 
      ref={showcaseRef}
      className="featured-showcase" 
      tabIndex={0}
      role="region"
      aria-label="Featured projects showcase"
      aria-roledescription="carousel"
      style={{ 
        position: "relative", 
        overflow: "hidden", 
        borderRadius: "24px", 
        background: "var(--nr-deep-navy)", 
        color: "var(--nr-white)",
        outline: "none",
        boxShadow: "0 20px 48px rgba(10, 25, 47, 0.12)",
        border: "1px solid rgba(255, 255, 255, 0.08)"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Background subtle brand glow */}
      <div 
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(8, 200, 176, 0.12) 0%, rgba(40, 88, 240, 0.05) 50%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id || currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ padding: "clamp(36px, 6vw, 64px)", minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--nr-teal)", fontWeight: 700 }}>
                {current.category}
              </span>
              <span style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
              <span style={{ fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                {current.industry}
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 700, marginBottom: "18px", lineHeight: 1.1, letterSpacing: "-0.03em", maxWidth: "800px" }}>
              {current.name}
            </h2>
            
            <p style={{ fontSize: "clamp(1.0625rem, 1.8vw, 1.2rem)", color: "rgba(255,255,255,0.8)", marginBottom: "32px", lineHeight: 1.6, maxWidth: "680px" }}>
              {current.overview || current.description}
            </p>

            {current.techStack && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
                {current.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    style={{ 
                      fontSize: "0.8125rem", 
                      padding: "6px 14px", 
                      borderRadius: "100px", 
                      background: "rgba(255, 255, 255, 0.08)", 
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <Link 
              to={`/project/${current.slug}`} 
              className="btn-primary"
            >
              View Case Study
            </Link>

            {current.website && current.website !== "#" && (
              <a
                href={current.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--nr-teal)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(8, 200, 176, 0.25)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>{current.ctaLabel || "Live Demo"}</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {projects.length > 1 && (
        <div className="showcase-nav-arrows" style={{ position: "absolute", bottom: "clamp(20px, 4vw, 36px)", right: "clamp(20px, 4vw, 36px)", display: "flex", gap: "10px", zIndex: 10 }}>
          <button 
            onClick={prevProject}
            aria-label="Previous featured project"
            style={{ 
              width: "42px", 
              height: "42px", 
              borderRadius: "50%", 
              background: "rgba(255,255,255,0.08)", 
              border: "1px solid rgba(255,255,255,0.2)", 
              color: "white", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              transition: "all 0.2s" 
            }}
          >
            ←
          </button>
          <button 
            onClick={nextProject}
            aria-label="Next featured project"
            style={{ 
              width: "42px", 
              height: "42px", 
              borderRadius: "50%", 
              background: "rgba(255,255,255,0.08)", 
              border: "1px solid rgba(255,255,255,0.2)", 
              color: "white", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              transition: "all 0.2s" 
            }}
          >
            →
          </button>
        </div>
      )}
      
      {/* Progress Indicators */}
      {projects.length > 1 && (
        <div className="showcase-progress-dots" style={{ position: "absolute", bottom: "clamp(12px, 2.5vw, 20px)", left: "clamp(24px, 5vw, 64px)", display: "flex", gap: "8px", zIndex: 10 }}>
          {projects.map((proj, idx) => (
            <button
              key={proj.id || idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${proj.name}`}
              style={{
                width: currentIndex === idx ? "36px" : "16px",
                height: "3px",
                background: currentIndex === idx ? "var(--nr-teal)" : "rgba(255,255,255,0.25)",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
