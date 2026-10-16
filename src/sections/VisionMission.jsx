import { motion, useReducedMotion } from "framer-motion";

export default function VisionMission() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="vision-mission-section" id="vision-mission">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="vision-mission-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="vision-mission-pill">
            <span className="vision-mission-dot" aria-hidden="true" />
            <span>Guiding Principles</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="vision-mission-title">
            Driven by Purpose. <br className="vision-title-break" />
            Defined by <span className="vision-highlight-text">Execution.</span>
          </motion.h2>
        </motion.div>

        {/* 2 Balanced Panels */}
        <motion.div 
          className="vision-mission-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {/* Vision Card */}
          <motion.div variants={itemVariants} className="vision-card">
            <div className="vision-card-header">
              <div className="vision-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="vision-card-tag">Our Vision</span>
            </div>
            <h3 className="vision-card-quote">
              “To make meaningful digital experiences and reliable technology accessible to businesses ready to grow.”
            </h3>
            <p className="vision-card-subtext">
              We look ahead to create systems that withstand technical evolution, simplifying scale while keeping users at the center of every digital journey.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={itemVariants} className="vision-card">
            <div className="vision-card-header">
              <div className="vision-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <span className="vision-card-tag">Our Mission</span>
            </div>
            <h3 className="vision-card-quote">
              “To understand each business deeply and deliver thoughtful digital products, practical software, and user-focused experiences that solve real problems.”
            </h3>
            <p className="vision-card-subtext">
              Every system is engineered around operational clarity, measurable utility, and long-term business value—never technology for appearance alone.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
