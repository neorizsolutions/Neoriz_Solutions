import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projectsData } from "../../data/portfolioData";
import { createSmoothSpotlight } from "../../hooks/useSmoothSpotlight";

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per project

// Coordinated project-specific visual palettes derived from actual assets and brand identity
const projectThemeMap = {
  "tablo-self-ordering": {
    themeClass: "theme-tablo-self-ordering",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    accentLight: "rgba(16, 185, 129, 0.12)"
  },
  "tablo-table-qr": {
    themeClass: "theme-tablo-table-qr",
    bgGradient: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
    accentLight: "rgba(14, 165, 233, 0.12)"
  },
  "nox-fight-club": {
    themeClass: "theme-nox-fight-club",
    bgGradient: "linear-gradient(135deg, #E11D48 0%, #991B1B 100%)",
    accentLight: "rgba(225, 29, 72, 0.12)"
  },
  "neoriz-whatsapp-automation": {
    themeClass: "theme-whatsapp-automation",
    bgGradient: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
    accentLight: "rgba(13, 148, 136, 0.12)"
  },
  "emblingo": {
    themeClass: "theme-emblingo",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    accentLight: "rgba(59, 130, 246, 0.12)"
  },
  "felora-dress-rental": {
    themeClass: "theme-felora",
    bgGradient: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
    accentLight: "rgba(217, 119, 6, 0.12)"
  }
};

const imageSpotlight = createSmoothSpotlight({ lerpFactor: 0.085 });

export default function ProjectShowcaseSlider({
  eyebrow = "SELECTED WORK",
  title = "Proprietary Products & Engineered Experiences",
  subtitle = "Explore our digital platforms and custom architectures built for operational performance."
}) {
  // Ensure Cafe Serenity is strictly filtered out and only active projects are present
  const activeProjects = projectsData.filter((p) => p.id !== "cafe-serenity");
  const totalSlides = activeProjects.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef(null);

  const currentProject = activeProjects[currentIndex] || activeProjects[0];
  const currentTheme = projectThemeMap[currentProject.id] || projectThemeMap["tablo-self-ordering"];

  const goToSlide = useCallback((index, newDirection = 1) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex(index);
    // Allow animation to complete before accepting another fast click
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  }, [currentIndex, isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    const nextIdx = (currentIndex + 1) % totalSlides;
    goToSlide(nextIdx, 1);
  }, [currentIndex, totalSlides, goToSlide, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(prevIdx, -1);
  }, [currentIndex, totalSlides, goToSlide, isAnimating]);

  // Autoplay management
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      const nextIdx = (currentIndex + 1) % totalSlides;
      setDirection(1);
      setCurrentIndex(nextIdx);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex, totalSlides]);

  // Keyboard navigation within the showcase
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Content transition variants (Left side)
  const contentVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 32 : -32
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -32 : 32,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  // Image transition variants (Right side)
  const imageVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 40 : -40,
      scale: shouldReduceMotion ? 1 : 1.04
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -40 : 40,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section 
      className="nr-showcase-section"
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label="Featured Projects Showcase"
    >
      <div className="container">
        
        {/* Section Header */}
        {(eyebrow || title) && (
          <div className="nr-showcase-header">
            {eyebrow && (
              <div className="nr-showcase-eyebrow">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="nr-showcase-main-title">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="nr-showcase-main-subtitle">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Main Showcase Stage */}
        <div 
          className={`nr-showcase-card ${currentTheme.themeClass}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Project-Specific Curved Color Backdrop (Reference 3 inspired) */}
          <div 
            className="nr-showcase-curved-backdrop" 
            style={{ background: currentTheme.bgGradient }}
            aria-hidden="true" 
          />

          {/* Left Information Panel */}
          <div className="nr-showcase-info-col">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="nr-showcase-text-wrap"
              >
                {/* Meta row: Industry / Scope only */}
                {currentProject.industry && (
                  <div className="nr-showcase-meta-row">
                    <span className="nr-showcase-meta-industry">
                      {currentProject.industry}
                    </span>
                  </div>
                )}

                {/* Project Title */}
                <h3 className="nr-showcase-project-title">
                  <Link to={`/project/${currentProject.slug}`}>
                    {currentProject.name}
                  </Link>
                </h3>

                {/* Project Tagline or Concise Overview */}
                <p className="nr-showcase-project-desc">
                  {currentProject.tagline || currentProject.description}
                </p>

                {/* Capability & Tech Highlights */}
                {currentProject.techStack && currentProject.techStack.length > 0 && (
                  <div className="nr-showcase-tags-wrap" aria-label="Project capabilities">
                    {currentProject.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="nr-showcase-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div className="nr-showcase-actions-row">
                  <Link
                    to={`/project/${currentProject.slug}`}
                    className="nr-showcase-cta-primary"
                    aria-label={`View full case study for ${currentProject.name}`}
                  >
                    <span>View Case Study</span>
                    <span className="nr-showcase-arrow" aria-hidden="true">→</span>
                  </Link>

                  {currentProject.website && currentProject.website !== "#" && (
                    <a
                      href={currentProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nr-showcase-cta-secondary"
                      aria-label={`Open live project for ${currentProject.name} in a new tab`}
                    >
                      <span>{currentProject.ctaLabel || "Live Demo"}</span>
                      <span className="nr-showcase-ext" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Visual Panel: 5-Image Collage */}
          <div className="nr-showcase-visual-col">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="nr-showcase-collage-wrap"
              >
                {/* 1. Main Hero Image */}
                <Link
                  to={`/project/${currentProject.slug}`}
                  className="nr-showcase-media-frame nr-showcase-main-frame"
                  aria-label={`View case study hero for ${currentProject.name}`}
                  onMouseEnter={imageSpotlight.onMouseEnter}
                  onMouseMove={imageSpotlight.onMouseMove}
                  onMouseLeave={imageSpotlight.onMouseLeave}
                >
                  <div className="nr-showcase-card-sweep" aria-hidden="true" />
                  <div className="nr-showcase-img-holder">
                    <img
                      src={currentProject.image}
                      alt={currentProject.name}
                      className="nr-showcase-img"
                      loading="eager"
                    />
                    <div className="nr-showcase-img-overlay" />
                  </div>
                </Link>

                {/* 2. Four Supporting Images Collage Grid */}
                {currentProject.gallery && currentProject.gallery.length > 1 && (
                  <div className="nr-showcase-gallery-grid" aria-label="Supporting project screenshots">
                    {currentProject.gallery.slice(1, 5).map((galleryImg, idx) => (
                      <Link
                        key={idx}
                        to={`/project/${currentProject.slug}`}
                        className="nr-showcase-media-frame nr-showcase-thumb-frame"
                        aria-label={`${currentProject.name} screenshot ${idx + 2}`}
                        onMouseEnter={imageSpotlight.onMouseEnter}
                        onMouseMove={imageSpotlight.onMouseMove}
                        onMouseLeave={imageSpotlight.onMouseLeave}
                      >
                        <div className="nr-showcase-card-sweep" aria-hidden="true" />
                        <div className="nr-showcase-img-holder">
                          <img
                            src={galleryImg}
                            alt={`${currentProject.name} supporting screenshot ${idx + 1}`}
                            className="nr-showcase-img nr-showcase-thumb-img"
                            loading="lazy"
                          />
                          <div className="nr-showcase-img-overlay" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Clean, Professional Navigation Bar: Project Selector Dots + Prev/Next Controls (Numerical Counter Removed) */}
        <div className="nr-showcase-nav-bar">
          {/* Segmented position dots / mini-bars for quick direct clicking */}
          <div className="nr-showcase-dots-group" role="tablist" aria-label="Direct project selection">
            {activeProjects.map((proj, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Jump to project ${idx + 1}: ${proj.name}`}
                  onClick={() => goToSlide(idx, idx > currentIndex ? 1 : -1)}
                  className={`nr-showcase-dot-btn ${isActive ? "active" : ""}`}
                />
              );
            })}
          </div>

          {/* Right: Circular Navigation Buttons */}
          <div className="nr-showcase-nav-btns" aria-label="Slider navigation controls">
            <button
              type="button"
              onClick={handlePrev}
              className="nr-showcase-nav-btn prev"
              aria-label="Previous project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="nr-showcase-nav-btn next"
              aria-label="Next project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
