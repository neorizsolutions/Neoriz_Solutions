import ProjectCard from "./ProjectCard";

export default function RelatedProjects({ currentProject, allProjects }) {
  if (!currentProject || !allProjects || allProjects.length === 0) return null;

  // Find related projects (same category, not the current one)
  let related = allProjects.filter(p => p.category === currentProject.category && p.slug !== currentProject.slug);
  
  // If not enough related projects in the same category, fill with other projects from the active set
  if (related.length < 2) {
    const others = allProjects.filter(p => p.category !== currentProject.category && p.slug !== currentProject.slug);
    related = [...related, ...others].slice(0, 2);
  } else {
    related = related.slice(0, 2);
  }

  if (related.length === 0) return null;

  return (
    <section style={{ background: "var(--nr-soft-white)", padding: "100px 0", borderTop: "1px solid var(--nr-light-gray)" }}>
      <div className="container">
        <div style={{ color: "var(--nr-blue)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px", fontSize: "0.8125rem" }}>
          Showcase
        </div>
        <h2 className="section-title" style={{ marginBottom: "56px", fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
          Related Work
        </h2>
        
        <div className="nr-works-grid">
          {related.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
