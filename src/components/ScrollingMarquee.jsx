import React from "react";
import { servicesData } from "../data/portfolioData";

export default function ScrollingMarquee() {
  // Full official services upfront, followed by core product and digital capabilities
  const officialServices = servicesData.map(service => service.name.toUpperCase());

  const capabilities = [
    "DIGITAL PRODUCTS",
    "BUSINESS AUTOMATION",
    "AI SOLUTIONS & INTEGRATION",
    "CLOUD SYSTEMS",
    "WEB PLATFORMS",
    "CUSTOM SOFTWARE",
    "SAAS PLATFORMS",
    "RESTAURANT TECHNOLOGY",
    "DIGITAL TRANSFORMATION",
    "MOBILE EXPERIENCES",
    "DATA ANALYTICS",
    "INTELLIGENT WORKFLOWS"
  ];

  const items = [...officialServices, ...capabilities];

  return (
    <div className="marquee-wrapper single-row">
      <div className="marquee-row">
        <div className="marquee-track track-forward-fast">
          {/* Original set */}
          <div className="marquee-content">
            {items.map((item, index) => (
              <React.Fragment key={`orig-${index}`}>
                <div className="marquee-item premium-text">
                  {item}
                </div>
                <div className="marquee-separator" aria-hidden="true">•</div>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicated set for seamless infinite loop */}
          <div className="marquee-content" aria-hidden="true">
            {items.map((item, index) => (
              <React.Fragment key={`dup-${index}`}>
                <div className="marquee-item premium-text">
                  {item}
                </div>
                <div className="marquee-separator" aria-hidden="true">•</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
