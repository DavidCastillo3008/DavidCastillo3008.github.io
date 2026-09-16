import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Mail,
  Send,
  User,
  MessageSquare,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  FileText
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
      // General section animation
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

      {/* Tech Carousel / Grid */}
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
            {/* Big Decorative Title */}
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