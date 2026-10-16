import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import ProcessPage from "./pages/ProcessPage";
import WorkPage from "./pages/WorkPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/work" element={<WorkPage />} />
          
          {/* Canonical Case Study Route */}
          <Route path="/project/:slug" element={<CaseStudy />} />
          
          {/* Backward compatibility: redirect /product/:slug to /project/:slug */}
          <Route path="/product/:slug" element={<ProductRedirect />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

function ProductRedirect() {
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace("/product/", "/project/");
  return <Navigate to={newPath} replace />;
}
