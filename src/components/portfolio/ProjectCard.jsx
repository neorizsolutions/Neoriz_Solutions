import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createSmoothSpotlight } from "../../hooks/useSmoothSpotlight";

/**
 * ProjectCard — Modern, distinctive, premium portfolio card template.
 * Built for NEORIZ Solutions.
 * 
 * Supports:
 * - Optional image / collage slot (renders cleanly with or without image)
 * - Subtle lift and understated shadow transitions (no grayscale, no dramatic distortions)
 * - Verified project metadata (category, industry, tech stack, description)
 * - Reusable across grid, list, or featured layouts
 */
const cardSpotlight = createSmoothSpotlight({ lerpFactor: 0.085 });

export default function ProjectCard({ project, index = 0, showImageSlot = false }) {
  if (!project) return null;

  const hasImage = Boolean(project.image);
  const shouldRenderImageArea = showImageSlot || hasImage;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="nr-project-card"
    >
      <div className="nr-card-inner">
        {/* Optional Image / Collage Slot */}
        {shouldRenderImageArea && (
          <div 
            className="nr-card-media-slot"
            onMouseEnter={cardSpotlight.onMouseEnter}
            onMouseMove={cardSpotlight.onMouseMove}
            onMouseLeave={cardSpotlight.onMouseLeave}
          >
            {hasImage ? (
              <Link to={`/project/${project.slug}`} tabIndex={-1} aria-hidden="true" className="nr-card-media-link">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="nr-card-img"
                />
              </Link>
            ) : (
              <div className="nr-card-media-placeholder" aria-hidden="true">
                <div className="nr-card-media-watermark">
                  <span className="nr-watermark-text">{project.category || "Architecture"}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Card Header: Project Number, Category & Industry */}
        <div className="nr-card-meta">
          <div className="nr-card-badge-row">
            <span className="nr-card-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="nr-card-divider" />
            <span className="nr-card-category">{project.category}</span>
          </div>
          {project.industry && (
            <span className="nr-card-industry">{project.industry}</span>
          )}
        </div>

        {/* Card Title & Link */}
        <h3 className="nr-card-title">
          <Link to={`/project/${project.slug}`} className="nr-card-title-link">
            {project.name}
          </Link>
        </h3>

        {/* Project Description (limited strictly to verified data) */}
        {project.description && (
          <p className="nr-card-description">
            {project.description}
          </p>
        )}

        {/* Solution Highlights Chips */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="nr-card-tags" aria-label="Key capabilities">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span key={i} className="nr-card-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Card Footer: Action Links */}
        <div className="nr-card-footer">
          <Link
            to={`/project/${project.slug}`}
            className="nr-card-action-link"
            aria-label={`View case study for ${project.name}`}
          >
            <span>View Case Study</span>
            <span className="nr-card-arrow" aria-hidden="true">→</span>
          </Link>

          {project.website && project.website !== "#" && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="nr-card-live-link"
              aria-label={`Open live experience for ${project.name} in a new tab`}
            >
              <span>{project.ctaLabel || "Live Demo"}</span>
              <span className="nr-live-glyph" aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
