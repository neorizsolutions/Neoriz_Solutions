import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section ref={containerRef} className="contact bg-grid-pattern-dark" id="contact" style={{ background: "var(--nr-deep-navy)", textAlign: "center", position: "relative", overflow: "hidden", padding: "96px 0" }}>
      {/* Subtle Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(8, 200, 176, 0.08) 0%, rgba(40, 88, 240, 0.06) 40%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      
      <div className="container" style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label" style={{ color: "var(--nr-teal)", marginBottom: "16px" }}>
            Start A Project
          </div>
          
          <h2 className="section-title" style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "var(--nr-white)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "24px" }}>
            Have an idea worth building?
          </h2>
          
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "36px", lineHeight: 1.6 }}>
            Let's turn it into something real. We are currently accepting new projects and would love to hear about what you're working on.
          </p>
          
          <div className="contact-cta-group">
            <MagneticButton>
              <Link to="/contact" className="btn-contact-final">
                <span>Start a Project</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </MagneticButton>

            <a 
              href="https://wa.me/919447261739?text=Hi%20NEORIZ%2C%20I%20would%20like%20to%20discuss%20a%20new%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-contact-whatsapp"
              aria-label="Direct WhatsApp consultation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
