import { Link } from "react-router-dom";

export default function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <section className="project-nav-section" style={{ borderTop: "1px solid var(--nr-light-gray)", borderBottom: "1px solid var(--nr-light-gray)", background: "var(--nr-white)" }}>
      <div className="project-nav-grid" style={{ display: "flex", flexWrap: "wrap" }}>
        
        {/* Previous Project */}
        <div className="project-nav-item prev-nav" style={{ flex: "1 1 300px", minWidth: 0, borderRight: "1px solid var(--nr-light-gray)" }}>
          {prevProject ? (
            <Link 
              to={`/project/${prevProject.slug}`}
              className="project-nav-link"
              style={{ display: "block", padding: "clamp(32px, 5vw, 50px) clamp(20px, 4vw, 40px)", textDecoration: "none", color: "inherit", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--nr-soft-white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>
                ← Previous Project
              </div>
              <h3 style={{ fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", margin: 0 }}>
                {prevProject.name}
              </h3>
            </Link>
          ) : (
            <div style={{ padding: "clamp(32px, 5vw, 50px) clamp(20px, 4vw, 40px)", height: "100%", display: "flex", alignItems: "center" }}>
              <Link to="/work" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 600 }}>
                ← Back to All Works
              </Link>
            </div>
          )}
        </div>
        
        {/* Next Project */}
        <div className="project-nav-item next-nav" style={{ flex: "1 1 300px", minWidth: 0, textAlign: "right" }}>
          {nextProject ? (
            <Link 
              to={`/project/${nextProject.slug}`}
              className="project-nav-link"
              style={{ display: "block", padding: "clamp(32px, 5vw, 50px) clamp(20px, 4vw, 40px)", textDecoration: "none", color: "inherit", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--nr-soft-white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>
                Next Project →
              </div>
              <h3 style={{ fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", margin: 0 }}>
                {nextProject.name}
              </h3>
            </Link>
          ) : (
            <div style={{ padding: "clamp(32px, 5vw, 50px) clamp(20px, 4vw, 40px)", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <Link to="/work" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 600 }}>
                Back to All Works →
              </Link>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
}
