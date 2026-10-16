import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import MagneticButton from "../components/MagneticButton";
import { projectsData } from "../data/portfolioData";
import useSEO from "../hooks/useSEO";

const solutions = [
  {
    id: "01",
    title: "Digital Experiences",
    desc: "Premium websites and digital experiences built around narrative and performance.",
    problem: "Brands struggle to translate their physical premium feel into a digital environment without sacrificing loading speed.",
    builds: "Immersive landing pages, interactive portfolios, and lifestyle brand platforms.",
    // TEMPORARILY HIDDEN: Cafe Serenity project is under development. Restore by uncommenting lines below.
    // projectSlug: "cafe-serenity",
    // projectLabel: "Hospitality & Roastery"
  },
  {
    id: "02",
    title: "Web Applications",
    desc: "Interactive applications and platforms designed around complex user workflows.",
    problem: "Users abandon applications that feel slow, confusing, or lack native-like responsiveness on the web.",
    builds: "Client portals, learning platforms, booking systems, dashboards, and progressive web apps.",
    projectSlug: "emblingo-learning-app",
    projectLabel: "EdTech & Learning"
  },
  {
    id: "03",
    title: "Contactless Business Platforms",
    desc: "Digital systems that support high-volume venue operations and live customer transactions.",
    problem: "Traditional physical ordering systems create bottlenecks, printing overhead, and slow table turnover.",
    builds: "QR digital menus, real-time table bill splitting, and instant service dispatcher interfaces.",
    projectSlug: "tablo-table-qr",
    projectLabel: "Contactless Dining & QR Ordering"
  },
  {
    id: "04",
    title: "Custom Software",
    desc: "Tailored solutions designed around specific, unique business problems.",
    problem: "Legacy systems slow down growth and cannot easily integrate with modern APIs and mobile platforms.",
    builds: "Touchscreen self-ordering kiosks, POS synchronizers, and kitchen display integrations.",
    projectSlug: "tablo-self-ordering",
    projectLabel: "Point of Sale & Kiosks"
  },
  {
    id: "05",
    title: "Athletic & Membership Portals",
    desc: "High-octane digital experiences combining branding, class schedules, and conversion funnels.",
    problem: "Outdated gym templates fail to communicate elite training culture and generate high member drop-offs.",
    builds: "Dynamic timetables, coach profiles, membership tiers, and instant session bookings.",
    projectSlug: "nox-fight-club",
    projectLabel: "Athletics & Fitness"
  }
];

export default function SolutionsPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useSEO({
    title: "Digital Solutions & Custom Software | NEORIZ Solutions",
    description: "Explore our capabilities in building digital experiences, web applications, and custom enterprise software focused on business performance.",
    url: "https://neorizsolutions.com/solutions"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getProject = (slug) => projectsData.find((p) => p.slug === slug);

  return (
    <>
      <CustomCursor />
      <Navbar onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main style={{ paddingTop: "120px" }}>
        
        {/* Solutions Hero */}
        <section className="bg-grid-pattern bg-radial-gradient" style={{ padding: "120px 0 80px 0" }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "800px" }}>
              <div style={{ color: "var(--nr-blue)", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "24px", fontSize: "0.8125rem" }}>
                Capabilities
              </div>
              <h1 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                Precision execution across the digital spectrum.
              </h1>
              <p style={{ fontSize: "1.25rem", color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>
                We combine technical depth with premium design to build digital solutions that function as well as they look. Here is what we can build for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions List */}
        <section style={{ padding: "80px 0", background: "var(--nr-white)" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
              {solutions.map((sol) => {
                const project = getProject(sol.projectSlug);
                return (
                  <motion.div 
                    key={sol.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid-system grid-2-col"
                    style={{ alignItems: "center" }}
                  >
                    {/* Content */}
                    <div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--nr-blue)", marginBottom: "16px" }}>{sol.id}</div>
                      <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "24px", lineHeight: 1.2 }}>
                        {sol.title}
                      </h2>
                      <p style={{ fontSize: "1.25rem", color: "var(--nr-deep-navy)", marginBottom: "32px", lineHeight: 1.5, fontWeight: 500 }}>
                        {sol.desc}
                      </p>
                      
                      <div style={{ marginBottom: "24px" }}>
                        <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-teal)", marginBottom: "8px" }}>The Problem It Solves</h3>
                        <p style={{ color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>{sol.problem}</p>
                      </div>

                      <div style={{ marginBottom: "40px" }}>
                        <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--nr-teal)", marginBottom: "8px" }}>What Can Be Built</h3>
                        <p style={{ color: "var(--nr-medium-gray)", lineHeight: 1.6 }}>{sol.builds}</p>
                      </div>
                    </div>

                    {/* Related Project Card */}
                    {project && (
                      <div style={{ background: "var(--nr-white)", borderRadius: "24px", padding: "32px", border: "1px solid var(--nr-light-gray)", boxShadow: "var(--nr-shadow-md)" }}>
                        <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--nr-deep-navy)", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Related Work — {sol.projectLabel}
                        </div>
                        <Link to={`/project/${project.slug}`} style={{ display: "block", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
                          <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src={project.image} 
                            alt={project.name} 
                            style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/10", objectFit: "cover" }} 
                          />
                        </Link>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--nr-deep-navy)", marginBottom: "12px" }}>{project.name}</h3>
                        <p style={{ color: "var(--nr-medium-gray)", lineHeight: 1.6, marginBottom: "24px" }}>{project.description}</p>
                        
                        <Link to={`/project/${project.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--nr-blue)", fontWeight: 600, textDecoration: "none" }}>
                          View Case Study <span>→</span>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Page CTA */}
        <section className="bg-grid-pattern-dark" style={{ padding: "120px 0", background: "var(--nr-deep-navy)", textAlign: "center", color: "var(--nr-white)" }}>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontFamily: "var(--nr-font-display)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, marginBottom: "48px", letterSpacing: "-0.03em" }}>
              How do we get there?
            </h2>
            <MagneticButton>
              <Link to="/process" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--nr-white)", textDecoration: "none" }}>
                View Our Process
                <span className="btn-arrow" style={{ fontSize: "1.2em", marginLeft: "8px" }}>→</span>
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
