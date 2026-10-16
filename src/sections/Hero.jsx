import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const headlineLines = [
    "WE BUILD",
    "WHAT MOVES",
    "BUSINESS",
    "FORWARD."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.12, 
        delayChildren: shouldReduceMotion ? 0 : 0.05,
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const lineVariants = {
    hidden: { 
      y: shouldReduceMotion ? 0 : "105%", 
      opacity: shouldReduceMotion ? 1 : 0 
    },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.85, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const fadeUpVariants = {
    hidden: { 
      opacity: shouldReduceMotion ? 1 : 0, 
      y: shouldReduceMotion ? 0 : 18 
    },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0.01 : 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section 
      className="hero-white" 
      id="hero"
    >
      <div className="container hero-container-white">
        
        {/* CENTERED EDITORIAL TEXT-ONLY HERO */}
        <motion.div 
          className="hero-content-white"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Staggered Clipped-Line Reveal Headline */}
          <h1 className="hero-headline-white" aria-label="WE BUILD WHAT MOVES BUSINESS FORWARD.">
            {headlineLines.map((line) => (
              <span key={line} className="hero-headline-line-wrapper">
                <motion.span 
                  variants={lineVariants} 
                  className={`hero-headline-line ${line === "FORWARD." ? "hero-headline-accent" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          
          {/* Concise, readable description */}
          <motion.p variants={fadeUpVariants} className="hero-desc-white">
            Neoriz Solutions creates thoughtful digital products, brands, platforms and experiences designed for real business growth.
          </motion.p>
          
          {/* Action CTAs */}
          <motion.div variants={fadeUpVariants} className="hero-actions-white">
            <Link to="/contact" className="btn-primary-white">
              Start a Project <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/work" className="btn-secondary-white">
              Explore Our Work
            </Link>
            <a 
              href="#services" 
              className="btn-tertiary-white"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("services");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "#services");
                }
              }}
            >
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
