import { Link } from "react-router-dom";

export default function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <section style={{ borderTop: "1px solid var(--nr-light-gray)", borderBottom: "1px solid var(--nr-light-gray)", background: "var(--nr-white)" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
        {/* Previous Project */}
        <div style={{ flex: "1 1 50%", minWidth: "300px", borderRight: "1px solid var(--nr-light-gray)" }}>
          {prevProject ? (
            <Link 
              to={`/project/${prevProject.slug}`}
              style={{ display: "block", padding: "50px 40px", textDecoration: "none", color: "inherit", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--nr-soft-white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>
                ← Previous Project
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", margin: 0 }}>
                {prevProject.name}
              </h3>
            </Link>
          ) : (
            <div style={{ padding: "50px 40px", height: "100%", display: "flex", alignItems: "center" }}>
              <Link to="/work" style={{ color: "var(--nr-medium-gray)", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 600 }}>
                ← Back to All Works
              </Link>
            </div>
          )}
        </div>
        
        {/* Next Project */}
        <div style={{ flex: "1 1 50%", minWidth: "300px", textAlign: "right" }}>
          {nextProject ? (
            <Link 
              to={`/project/${nextProject.slug}`}
              style={{ display: "block", padding: "50px 40px", textDecoration: "none", color: "inherit", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--nr-soft-white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: "0.8125rem", color: "var(--nr-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: "12px" }}>
                Next Project →
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--nr-deep-navy)", letterSpacing: "-0.02em", margin: 0 }}>
                {nextProject.name}
              </h3>
            </Link>
          ) : (
            <div style={{ padding: "50px 40px", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
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
