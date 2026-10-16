import { Link } from "react-router-dom";
import { servicesData } from "../data/portfolioData";
import { createSmoothSpotlight } from "../hooks/useSmoothSpotlight";

// Professional, scalable inline SVG icons tailored to each of the 6 services
const serviceIcons = {
  "01": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "02": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  "03": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  "04": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  "05": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  "06": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
};

const spotlight = createSmoothSpotlight({ lerpFactor: 0.085 });

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">

        {/* Section Header with 'Succeed' highlighted in brand palette */}
        <div className="services-header-area">
          <div className="services-badge">
            <span>Core Capabilities</span>
          </div>
          <h2 className="services-main-title">
            Digital Solutions{" "}
            <span className="services-highlight-word">Built</span>{" "}
            for Growth!
          </h2>
        </div>

        {/* Exactly 6 Services in 3-Column (Desktop) Grid with Fedgix-Style Hover & Spotlight */}
        <div className="nr-services-grid" role="list">
          {servicesData.map((service) => (
            <Link
              to="/contact"
              key={service.id}
              className="nr-service-card"
              role="listitem"
              tabIndex={0}
              aria-label={`${service.name}: ${service.description}`}
              onMouseEnter={spotlight.onMouseEnter}
              onMouseMove={spotlight.onMouseMove}
              onMouseLeave={spotlight.onMouseLeave}
            >
              {/* Diagonal light-sweep layer — matches project image hover animation */}
              <div className="nr-service-card-sweep" aria-hidden="true" />
              <div className="nr-service-card-content">
                <div className="nr-service-card-top">
                  <div className="nr-service-icon-wrap" aria-hidden="true">
                    {serviceIcons[service.id]}
                  </div>
                  <h3 className="nr-service-title">{service.name}</h3>
                </div>

                <p className="nr-service-desc">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
