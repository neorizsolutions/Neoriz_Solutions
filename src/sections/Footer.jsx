import { Link, useLocation } from "react-router-dom";
import logoPrimary from "../assets/brand/neoriz-logo-primary.svg";
import { servicesData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const renderQuickLink = (path, label) => (
    <Link to={path} className="footer-link-item">
      {label}
    </Link>
  );

  return (
    <footer className="footer-fedgix" role="contentinfo">
      <div className="container">
        
        {/* Main Footer — Four Columns */}
        <div className="footer-main-grid">
          
          {/* Column 1: Brand Identity */}
          <div className="footer-col footer-col-brand">
            {isHome ? (
              <a href="#hero" className="footer-brand-logo-link" aria-label="Neoriz Solutions Home">
                <img 
                  src={logoPrimary} 
                  alt="Neoriz Solutions" 
                  className="footer-brand-logo"
                />
              </a>
            ) : (
              <Link to="/" className="footer-brand-logo-link" aria-label="Neoriz Solutions Home">
                <img 
                  src={logoPrimary} 
                  alt="Neoriz Solutions" 
                  className="footer-brand-logo"
                />
              </Link>
            )}
            <p className="footer-brand-tagline">
              Building digital experiences that move businesses forward.
            </p>
          </div>

          {/* Column 2: Where to Find Us */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Where to Find Us</h4>
            <ul className="footer-contact-list">
              
              {/* Address / Headquarters */}
              <li className="footer-contact-item">
                <div className="footer-icon-circle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <span>Kochi Infopark,</span>
                  <span>Kerala, India</span>
                </div>
              </li>

              {/* Working Hours */}
              <li className="footer-contact-item">
                <div className="footer-icon-circle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <span>Mon – Fri: 9:00 AM – 6:00 PM IST</span>
                </div>
              </li>

              {/* Phone / Direct */}
              <li className="footer-contact-item">
                <div className="footer-icon-circle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <a href="tel:+919447261739" className="footer-contact-link">
                    +91 9447261739
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="footer-contact-item">
                <div className="footer-icon-circle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <a href="mailto:hello@neorizsolutions.com" className="footer-contact-link">
                    hello@neorizsolutions.com
                  </a>
                </div>
              </li>

            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col footer-col-links">
            <h4 className="footer-col-title">Quick Links</h4>
            <nav className="footer-nav-list" aria-label="Footer Quick Links">
              {renderQuickLink("/", "Home")}
              {renderQuickLink("/about", "About")}
              {renderQuickLink("/process", "Process")}
              {renderQuickLink("/work", "Work")}
              {renderQuickLink("/contact", "Contact")}
            </nav>
          </div>

          {/* Column 4: Top Services */}
          <div className="footer-col footer-col-services">
            <h4 className="footer-col-title">Top Services</h4>
            <nav className="footer-nav-list" aria-label="Footer Top Services">
              {servicesData.map((service) => (
                isHome ? (
                  <a 
                    key={service.id} 
                    href="#services" 
                    className="footer-link-item"
                  >
                    {service.name}
                  </a>
                ) : (
                  <Link 
                    key={service.id} 
                    to="/#services" 
                    className="footer-link-item"
                  >
                    {service.name}
                  </Link>
                )
              ))}
            </nav>
          </div>

        </div>

        {/* Subtle Horizontal Divider */}
        <div className="footer-divider" aria-hidden="true" />

        {/* Bottom Bar: Left copyright, Center legal, Right social */}
        <div className="footer-bottom-bar">
          
          {/* Left: Copyright */}
          <div className="footer-copyright-text">
            Neoriz Solutions &copy; {currentYear} All rights reserved
          </div>

          {/* Center: Legal Row */}
          <div className="footer-legal-group" aria-label="Legal navigation">
            <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-legal-dot" aria-hidden="true">&bull;</span>
            <Link to="/terms-of-use" className="footer-legal-link">Terms of Use</Link>
            <span className="footer-legal-dot" aria-hidden="true">&bull;</span>
            <Link to="/cookie-policy" className="footer-legal-link">Cookie Policy</Link>
          </div>

          {/* Right: Social Media Icons (Circular Outlines) */}
          <div className="footer-social-group" aria-label="Social media channels">
            <a 
              href="https://www.facebook.com/profile.php?id=61594974317218" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="Facebook"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/neorizsolutions/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="Instagram"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a 
              href="https://x.com/NoerizSolutions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="X (Twitter)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/noeriz-solutions/posts/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

        </div>

      </div>

      <style>{`
        .footer-fedgix {
          background: #000000;
          color: #FFFFFF;
          padding: 100px 0 36px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        /* Four-Column Main Grid */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.3fr 0.9fr 1.1fr;
          gap: 48px;
          margin-bottom: 72px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        /* Column 1: Brand */
        .footer-brand-logo-link {
          display: inline-block;
          margin-bottom: 24px;
          outline: none;
        }
        .footer-brand-logo-link:focus-visible {
          outline: 2px solid var(--nr-blue);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .footer-brand-logo {
          height: 38px;
          width: auto;
          filter: brightness(0) invert(1);
          display: block;
        }
        .footer-brand-tagline {
          color: rgba(255, 255, 255, 0.65);
          font-size: 1.0625rem;
          line-height: 1.65;
          max-width: 320px;
          margin: 0;
        }

        /* Column Headers */
        .footer-col-title {
          font-family: var(--nr-font-display, 'Outfit', sans-serif);
          font-size: 1.125rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          margin-bottom: 26px;
        }

        /* Column 2: Where to Find Us */
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .footer-icon-circle {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          margin-top: 2px;
          transition: border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease;
        }
        .footer-contact-item:hover .footer-icon-circle {
          border-color: var(--nr-blue);
          color: var(--nr-blue);
          background-color: rgba(40, 88, 240, 0.1);
        }
        .footer-contact-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .footer-contact-link {
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          transition: color 0.25s ease;
          outline: none;
        }
        .footer-contact-link:hover {
          color: #FFFFFF;
        }
        .footer-contact-link:focus-visible {
          outline: 2px solid var(--nr-blue);
          outline-offset: 2px;
          border-radius: 2px;
        }

        /* Column 3 & 4: Link Lists */
        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-link-item {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          line-height: 1.4;
          width: fit-content;
          transition: color 0.25s ease, transform 0.25s ease;
          outline: none;
        }
        .footer-link-item:hover {
          color: #FFFFFF;
          transform: translateX(3px);
        }
        .footer-link-item:focus-visible {
          outline: 2px solid var(--nr-blue);
          outline-offset: 4px;
          border-radius: 2px;
          color: #FFFFFF;
        }

        /* Divider */
        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 32px;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright-text {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.875rem;
        }

        .footer-legal-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.875rem;
        }
        .footer-legal-link {
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          transition: color 0.2s ease;
          outline: none;
        }
        .footer-legal-link:hover {
          color: #FFFFFF;
        }
        .footer-legal-link:focus-visible {
          color: #FFFFFF;
          outline: 2px solid var(--nr-teal);
          outline-offset: 3px;
          border-radius: 2px;
        }
        .footer-legal-dot {
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.875rem;
        }

        /* Circular Outline Social Buttons */
        .footer-social-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          text-decoration: none;
          transition: border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
          outline: none;
        }
        .footer-social-btn:hover {
          border-color: #FFFFFF;
          background-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }
        .footer-social-btn:focus-visible {
          outline: 2px solid var(--nr-blue);
          outline-offset: 2px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px 36px;
          }
          .footer-col-brand {
            grid-column: 1 / -1;
            margin-bottom: 8px;
          }
        }

        @media (max-width: 768px) {
          .footer-fedgix {
            padding: 80px 0 32px 0;
          }
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 44px;
            margin-bottom: 56px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-social-btn {
            width: 44px;
            height: 44px;
          }
          .footer-icon-circle {
            width: 34px;
            height: 34px;
            min-width: 34px;
          }
        }
      `}</style>
    </footer>
  );
}
