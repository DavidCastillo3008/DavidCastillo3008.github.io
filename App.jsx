import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Inline SVG Icon Components to avoid dependency issues with lucide-react
const Code2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const Cpu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" />
    <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
  </svg>
);

const Database = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const Globe = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const Layout = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const Server = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const Terminal = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const Layers = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

const Sparkles = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  </svg>
);

const Zap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Mail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Send = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const User = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MessageSquare = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Sun = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const Moon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const ExternalLink = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Menu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gsap-reveal").forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("¡Mensaje enviado con éxito!");
    setTimeout(() => setFormStatus(""), 4000);
  };

  return (
    <div ref={mainRef} className="app-container">
      {/* Header / Navbar */}
      <header className="header">
        <div className="nav-container">
          <a href="#hero" className="logo">
            <Code2 size={28} className="logo-icon" />
            <span className="logo-text">PORTFOLIO</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <a href="#about">Sobre mí</a>
            <a href="#tech">Tecnologías</a>
            <a href="#experience">Prácticas</a>
            <a href="#contact">Contacto</a>
          </nav>

          <div className="header-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title="Cambiar tema"
            >
              <span className="theme-toggle-text">¿CÓMO DESEAS VERME?</span>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
            <a href="#tech" onClick={() => setMenuOpen(false)}>
              Tecnologías
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Prácticas
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section" ref={heroRef}>
        <div className="hero-content gsap-reveal">
          <div className="badge">
            <Sparkles size={16} />
            <span>Desarrollador Full Stack & Software Engineer</span>
          </div>
          <h1 className="hero-title">
            Transformando ideas en <span className="text-gradient">experiencias digitales</span> excepcionales.
          </h1>
          <p className="hero-description">
            Especializado en construir aplicaciones web de alto rendimiento, escalables y con un diseño moderno cuidando cada detalle de la experiencia de usuario.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} />
              <span>Contactar</span>
            </a>
            <a href="#experience" className="btn btn-secondary">
              <span>Ver Proyectos</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header gsap-reveal">
            <h2 className="section-title">Sobre Mí</h2>
            <p className="section-subtitle">
              Pasión por el desarrollo de software limpio, eficiente y bien estructurado.
            </p>
          </div>

          <div className="about-grid gsap-reveal">
            <div className="card about-card">
              <h3>Formación & Trayectoria</h3>
              <p className="card-text">
                Desarrollador enfocado en el ecosistema JavaScript/TypeScript, React, Node.js y arquitectura en la nube. Con capacidad constante de aprendizaje y adaptación a nuevas tecnologías.
              </p>
              
              {/* Timeline */}
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2023 - Presente</span>
                    <h4>Desarrollador Full Stack Senior / Lead</h4>
                    <p>Liderando proyectos web interactivos de alto impacto.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2021 - 2023</span>
                    <h4>Desarrollador Frontend</h4>
                    <p>Especialización en interfaces con React, Next.js y animación con GSAP.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2019 - 2021</span>
                    <h4>Grado en Ingeniería / Formación Superior</h4>
                    <p>Bases fundamentales de algoritmos, estructuras de datos y desarrollo web.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="section tech-section">
        <div className="container">
          <div className="section-header gsap-reveal">
            <h2 className="section-title">Tecnologías</h2>
            <p className="section-subtitle">
              Herramientas y lenguajes que utilizo para dar vida a los proyectos.
            </p>
          </div>

          <div className="tech-carousel-container gsap-reveal">
            <div className="tech-grid">
              <div className="tech-card">
                <Code2 className="tech-icon" />
                <span className="tech-name">React</span>
              </div>
              <div className="tech-card">
                <Globe className="tech-icon" />
                <span className="tech-name">JavaScript</span>
              </div>
              <div className="tech-card">
                <Terminal className="tech-icon" />
                <span className="tech-name">TypeScript</span>
              </div>
              <div className="tech-card">
                <Server className="tech-icon" />
                <span className="tech-name">Node.js</span>
              </div>
              <div className="tech-card">
                <Database className="tech-icon" />
                <span className="tech-name">PostgreSQL</span>
              </div>
              <div className="tech-card">
                <Layout className="tech-icon" />
                <span className="tech-name">Tailwind CSS</span>
              </div>
              <div className="tech-card">
                <Cpu className="tech-icon" />
                <span className="tech-name">GSAP</span>
              </div>
              <div className="tech-card">
                <Layers className="tech-icon" />
                <span className="tech-name">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Experience */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header gsap-reveal">
            <h2 className="section-title">Prácticas y Proyectos</h2>
            <p className="section-subtitle">
              Una selección de trabajos representativos y experiencias clave.
            </p>
          </div>

          <div className="projects-grid gsap-reveal">
            <div className="card project-card">
              <div className="card-badge">Destacado</div>
              <h3 className="project-title">Plataforma SaaS Enterprise</h3>
              <p className="card-text">
                Desarrollo completo de panel de administración interactivo con analíticas en tiempo real y arquitectura de microservicios.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Node.js</span>
              </div>
              <a href="#" className="card-link">
                <span>Ver detalles</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="card project-card">
              <div className="card-badge">UI/UX</div>
              <h3 className="project-title">E-commerce de Alto Rendimiento</h3>
              <p className="card-text">
                Tienda online optimizada para SEO y conversión con animación fluida mediante GSAP y pasarela de pago integrada.
              </p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">GSAP</span>
                <span className="tag">Stripe</span>
              </div>
              <a href="#" className="card-link">
                <span>Ver detalles</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section / Manos a la obra */}
      <section className="section cta-section">
        <div className="container gsap-reveal">
          <div className="cta-card">
            <h2 className="cta-title">MANOS A LA OBRA</h2>
            <p className="cta-description">
              ¿Tienes un proyecto en mente o quieres transformar la presencia digital de tu empresa? Hablemos y hagámoslo realidad.
            </p>
            <a href="#contact" className="btn btn-primary btn-large">
              <Zap size={20} />
              <span>Iniciar Proyecto</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header gsap-reveal">
            <h2 className="section-title">Contacto</h2>
            <p className="section-subtitle">
              Ponte en contacto conmigo para colaboraciones o consultas.
            </p>
          </div>

          <div className="contact-container gsap-reveal">
            <form onSubmit={handleFormSubmit} className="contact-form card">
              <div className="form-group">
                <label htmlFor="name">
                  <User size={16} /> Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={16} /> Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={16} /> Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width">
                <Send size={18} />
                <span>Enviar Mensaje</span>
              </button>

              {formStatus && (
                <div className="form-status">
                  <CheckCircle2 size={18} />
                  <span>{formStatus}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <a href="#hero" className="logo">
              <Code2 size={24} className="logo-icon" />
              <span className="logo-text">PORTFOLIO</span>
            </a>
            <p className="footer-text">
              Diseño y código creados con atención al detalle y enfoque en accesibilidad.
            </p>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom container">
          <p>© {new Date().getFullYear()} Portfolio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
