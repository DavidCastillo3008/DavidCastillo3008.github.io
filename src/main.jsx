import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", type: "01", text: "Estructura semántica y accesible." },
  { name: "CSS", type: "02", text: "Interfaces responsive y modernas." },
  { name: "Java", type: "03", text: "Programación orientada a objetos." },
  { name: "SQL", type: "04", text: "Consultas y gestión de datos." },
  { name: "Bases de datos", type: "05", text: "Modelado y organización de información." },
  { name: "Sistemas", type: "06", text: "Mantenimiento y configuración de equipos." }
];

const tasks = [
  "Mantenimiento y puesta a punto de equipos",
  "Reparación y actualización de ordenadores",
  "Instalación y configuración de software",
  "Resolución de incidencias informáticas",
  "Configuración y mantenimiento de equipos",
  "Soporte y asistencia a usuarios"
];

function App() {
  const root = useRef(null);
  const heroImage = useRef(null);
  const heroText = useRef(null);
  const heroMeta = useRef(null);
  const cursor = useRef(null);
  const cursorFollower = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro / hero reveal
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".nav", { y: -30, opacity: 0, duration: 0.8 })
        .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".hero-title .line", { yPercent: 110, opacity: 0, stagger: 0.1, duration: 1.05 }, "-=0.2")
        .from(".hero-copy", { y: 25, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-photo-wrap", { clipPath: "inset(100% 0 0 0)", opacity: 0, duration: 1.25 }, "-=0.75")
        .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.4");

      // Hero parallax
      gsap.to(heroImage.current, {
        yPercent: 14,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-orb", {
        yPercent: -35,
        xPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(".hero-title", {
        yPercent: -18,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "75% top",
          scrub: true
        }
      });

      // Generic reveals
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true
          }
        });
      });

      // About text lines
      gsap.from(".about-lead span", {
        yPercent: 105,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-lead",
          start: "top 78%",
          once: true
        }
      });

      // Timeline draw
      gsap.from(".timeline-progress", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true
        }
      });

      gsap.utils.toArray(".timeline-item").forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 ? 50 : -50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            once: true
          }
        });
      });

      // Skills cards
      gsap.from(".skill-card", {
        y: 80,
        opacity: 0,
        rotateX: 12,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 78%",
          once: true
        }
      });

      // Practice list
      gsap.from(".task", {
        x: -45,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tasks",
          start: "top 78%",
          once: true
        }
      });

      // Contact parallax
      gsap.to(".contact-word", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Desktop custom cursor
      if (window.matchMedia("(pointer:fine)").matches) {
        const moveX = gsap.quickTo(cursor.current, "x", { duration: 0.18, ease: "power3" });
        const moveY = gsap.quickTo(cursor.current, "y", { duration: 0.18, ease: "power3" });
        const followX = gsap.quickTo(cursorFollower.current, "x", { duration: 0.45, ease: "power3" });
        const followY = gsap.quickTo(cursorFollower.current, "y", { duration: 0.45, ease: "power3" });

        const move = (e) => {
          moveX(e.clientX);
          moveY(e.clientY);
          followX(e.clientX);
          followY(e.clientY);
        };
        window.addEventListener("mousemove", move);

        const interactive = document.querySelectorAll("a, button, .skill-card");
        interactive.forEach((el) => {
          el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
          el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
        });

        return () => window.removeEventListener("mousemove", move);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={root} className="site">
      <div ref={cursor} className="cursor" />
      <div ref={cursorFollower} className="cursor-follower" />

      <header className="nav">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark">D</span>
          <span>DAVID CASTILLO</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[
            ["inicio", "Inicio"],
            ["sobre-mi", "Sobre mí"],
            ["formacion", "Formación"],
            ["tecnologias", "Tecnologías"],
            ["practicas", "Prácticas"],
            ["contacto", "Contacto"]
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid" />
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="hero-content">
            <div className="hero-kicker"><span /> PORTFOLIO · 2026</div>

            <h1 className="hero-title">
              <span className="line">DAVID</span>
              <span className="line accent-line">CASTILLO DE HARO</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-copy">
                Técnico de Sistemas Microinformáticos y Redes
                <br />
                <span>Estudiante de Desarrollo de Aplicaciones Multiplataforma</span>
              </p>
              <div className="hero-photo-wrap">
                <img
                  ref={heroImage}
                  src="/fotoPerfil.jpeg"
                  alt="David Castillo De Haro"
                  className="hero-photo"
                />
              </div>
            </div>
          </div>

          <a className="hero-scroll" href="#sobre-mi">
            <span>SCROLL PARA EXPLORAR</span>
            <i />
          </a>
        </section>

        <section id="sobre-mi" className="section about">
          <div className="section-number">01</div>
          <div className="section-label">SOBRE MÍ</div>
          <div className="about-content">
            <h2 className="section-title reveal">Una mente curiosa.<br /><em>Siempre aprendiendo.</em></h2>
            <p className="about-lead">
              <span>Soy David, técnico de sistemas y actualmente</span>
              <span>estudiante de Desarrollo de Aplicaciones</span>
              <span>Multiplataforma. Me apasiona la tecnología</span>
              <span>y todo lo que puedo construir con ella.</span>
            </p>
            <p className="about-detail reveal">
              Me considero una persona motivada, responsable y con ganas de seguir
              creciendo. Me gusta aprender nuevas tecnologías, enfrentarme a retos
              y convertir cada experiencia en una oportunidad para mejorar.
            </p>
          </div>
        </section>

        <section id="formacion" className="section formation">
          <div className="section-number">02</div>
          <div className="section-label">FORMACIÓN</div>
          <div className="timeline">
            <div className="timeline-line"><div className="timeline-progress" /></div>

            <article className="timeline-item">
              <div className="timeline-dot">01</div>
              <div className="timeline-year">FORMACIÓN COMPLETADA</div>
              <h3>Sistemas Microinformáticos<br />y Redes</h3>
              <p>IES Miguel Sánchez López</p>
              <span>Torredelcampo · Jaén</span>
              <a href="https://www.iesmiguelsanchezlopez.es/" target="_blank" rel="noreferrer">
                VISITAR CENTRO ↗
              </a>
            </article>

            <article className="timeline-item timeline-right">
              <div className="timeline-dot">02</div>
              <div className="timeline-year">ACTUALMENTE ESTUDIANDO</div>
              <h3>Desarrollo de Aplicaciones<br />Multiplataforma</h3>
              <p>IES Fernando III</p>
              <span>Martos · Jaén</span>
              <a href="https://iesfernandoiii.es/" target="_blank" rel="noreferrer">
                VISITAR CENTRO ↗
              </a>
            </article>
          </div>
        </section>

        <section id="tecnologias" className="section skills">
          <div className="section-number">03</div>
          <div className="section-label">TECNOLOGÍAS</div>
          <div className="skills-head">
            <h2 className="section-title reveal">Construyendo<br /><em>mi camino.</em></h2>
            <p className="reveal">Tecnologías y conocimientos que forman parte de mi aprendizaje y desarrollo.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <span className="skill-number">{skill.type}</span>
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="practicas" className="section practice">
          <div className="section-number">04</div>
          <div className="section-label">EXPERIENCIA PRÁCTICA</div>
          <div className="practice-layout">
            <div>
              <h2 className="section-title reveal">Manos a la<br /><em>obra.</em></h2>
              <p className="practice-intro reveal">
                Durante mi etapa de prácticas trabajé en tareas de soporte y
                mantenimiento informático, poniendo en práctica los conocimientos
                adquiridos durante mi formación.
              </p>
            </div>
            <div className="tasks">
              {tasks.map((task, i) => (
                <div className="task" key={task}>
                  <span>0{i + 1}</span>
                  <p>{task}</p>
                  <b>+</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statement-glow" />
          <p className="reveal">MI OBJETIVO</p>
          <h2 className="reveal">Aprender.<br /><em>Crear. Evolucionar.</em></h2>
          <span className="statement-line" />
          <p className="statement-copy reveal">
            Seguir creciendo dentro del mundo de la tecnología, ampliar mis
            conocimientos y convertir cada nuevo reto en una oportunidad para aprender.
          </p>
        </section>

        <section id="contacto" className="contact">
          <div className="contact-word">HABLEMOS</div>
          <div className="contact-inner">
            <div className="section-number">05</div>
            <p className="section-label">CONTACTO</p>
            <h2>¿Tienes un proyecto<br />en mente?</h2>
            <p className="contact-copy">
              Estoy abierto a nuevas oportunidades, proyectos y retos en el mundo tecnológico.
            </p>
            <a className="contact-button" href="mailto:davidcas3008@gmail.com">
              <span>CONTACTAR</span>
              <b>↗</b>
            </a>
            <div className="contact-links">
              <a href="mailto:davidcas3008@gmail.com">davidcas3008@gmail.com</a>
              <a href="www.linkedin.com/in/david-castillo-bb9271436" onClick={(e) => e.preventDefault()}>Mi cuenta de LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>DAVID CASTILLO DE HARO</span>
        <span>PORTFOLIO · 2026</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
