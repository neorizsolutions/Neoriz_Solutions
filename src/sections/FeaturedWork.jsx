import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ProjectShowcaseSlider from "../components/portfolio/ProjectShowcaseSlider";

/**
 * FeaturedWork — Rebuilt with Scroll-Linked Opposing-Direction Headline:
 * - Pure/near-black immersive background (#0B0F19 / #000000)
 * - Scroll-linked headline animation where "WHERE GREAT IDEAS" (left) and 
 *   "BECOME REAL RESULTS" (right) start offset outward and travel inward as user scrolls,
 *   meeting seamlessly in the center.
 * - Large, premium white project presentation card with smooth editorial transitions
 * - Understated "Explore More Projects →" link pointing to /work
 */
export default function FeaturedWork() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const headlineSectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll through the headline section
  const { scrollYProgress } = useScroll({
    target: headlineSectionRef,
    offset: ["start end", "center center"]
  });

  // Opposing horizontal transforms:
  // Left starts shifted left (-35vw) and moves inward to 0
  // Right starts shifted right (35vw) and moves inward to 0
  const xLeft = useTransform(scrollYProgress, [0, 1], ["-35vw", "0vw"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["35vw", "0vw"]);

  return (
    <section ref={containerRef} className="nr-video-work-section" id="work">
      
      {/* 1. Header Row: Understated Section Label and Link */}
      <div className="container" style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="nr-video-work-label">
              Selected Work
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              to="/work" 
              className="nr-video-work-explore-link"
            >
              <span>Explore More Projects</span>
              <span className="nr-explore-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 2. Scroll-Linked Opposing Direction Headline: "WHERE GREAT IDEAS BECOME REAL RESULTS" */}
      <div 
        ref={headlineSectionRef} 
        className="nr-opposing-headline-wrap" 
        aria-label="Where great ideas become real results"
      >
        <div className="nr-opposing-headline-track">
          <motion.div 
            className="nr-opposing-group nr-opposing-group-left"
            style={{ x: shouldReduceMotion ? 0 : xLeft }}
          >
            <span className="nr-opposing-text">WHERE GREAT IDEAS</span>
          </motion.div>
          <motion.div 
            className="nr-opposing-group nr-opposing-group-right"
            style={{ x: shouldReduceMotion ? 0 : xRight }}
          >
            <span className="nr-opposing-text">BECOME REAL RESULTS</span>
          </motion.div>
        </div>
      </div>

      {/* 3. Large White Project Showcase Card Carousel */}
      <div className="nr-showcase-container-wrap">
        <ProjectShowcaseSlider 
          eyebrow=""
          title=""
          subtitle=""
        />
      </div>

    </section>
  );
}


