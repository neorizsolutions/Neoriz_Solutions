
export default function ProjectFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="project-filter-container" role="tablist" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(category)}
            style={{
              background: isActive ? "var(--nr-deep-navy)" : "var(--nr-white)",
              color: isActive ? "var(--nr-white)" : "var(--nr-deep-navy)",
              border: "1px solid",
              borderColor: isActive ? "var(--nr-deep-navy)" : "var(--nr-light-gray)",
              padding: "10px 22px",
              borderRadius: "100px",
              fontSize: "0.9375rem",
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              transition: "all 0.25s ease",
              outline: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
