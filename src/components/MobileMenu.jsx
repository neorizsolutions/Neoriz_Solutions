import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const renderLink = (target, label, isAnchor = false) => {
    if (isAnchor && isHome) {
      return (
        <a 
          href={`#${target}`} 
          className="mobile-link" 
          onClick={(e) => {
            e.preventDefault();
            onClose();
            const el = document.getElementById(target);
            if (el) {
              setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth" });
              }, 150);
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
        <Link to={`/#${target}`} className="mobile-link" onClick={onClose}>
          {label}
        </Link>
      );
    }

    return (
      <Link to={target} className="mobile-link" onClick={onClose}>
        {label}
      </Link>
    );
  };

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      {renderLink("/about", "About")}
      {renderLink("services", "Services", true)}
      {renderLink("/work", "Work")}
      {renderLink("contact", "Contact", true)}
      {renderLink("/contact", "Start a Project")}
    </div>
  );
}
