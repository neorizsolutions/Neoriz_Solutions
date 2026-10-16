import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/brand/neoriz-logo-horizontal.svg";

export default function Navbar({ onToggleMenu, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (target, label, isAnchor = false) => {
    if (isAnchor && isHome) {
      return (
        <a 
          href={`#${target}`} 
          className="nav-link-premium"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(target);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", `#${target}`);
            }
          }}
        >
          {label}
        </a>
      );
    }

    if (isAnchor && !isHome) {
      return (
        <Link to={`/#${target}`} className="nav-link-premium">
          {label}
        </Link>
      );
    }

    const isActive = location.pathname === target;
    const className = `nav-link-premium ${isActive ? "active" : ""}`;
    return (
      <Link to={target} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <nav className={`nav-premium ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner-premium">
        {/* LOGO */}
        {isHome ? (
          <a href="#hero" className="nav-logo-premium">
            <img src={logo} alt="Neoriz Solutions" />
          </a>
        ) : (
          <Link to="/" className="nav-logo-premium">
            <img src={logo} alt="Neoriz Solutions" />
          </Link>
        )}

        {/* LINKS (Center Column): About, Services, Work, Contact */}
        <div className="nav-links-premium">
          {renderLink("/about", "About")}
          {renderLink("services", "Services", true)}
          {renderLink("/work", "Work")}
          {renderLink("contact", "Contact", true)}
        </div>

        {/* PRIMARY CTA (Right Column) */}
        <div className="nav-cta-wrapper">
          <Link to="/contact?type=discovery" className="nav-cta-premium">
            Book a Discovery Call
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div 
          className={`nav-toggle-premium ${isMenuOpen ? "active" : ""}`} 
          onClick={onToggleMenu}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
