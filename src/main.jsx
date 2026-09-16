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


const darkTheme = {
  bg: "#0b0f17",
  surface: "#131b2e",
  surfaceHover: "#1c2742",
  text: "#f8fafc",
  muted: "#94a3b8",
  line: "rgba(255, 255, 255, 0.08)",
  accent: "#3b82f6",
  accentGlow: "rgba(59, 130, 246, 0.25)",
  navBg: "rgba(11, 15, 23, 0.85)",
  gridLine: "rgba(255,255,255,.05)",
  outline: "rgba(248,250,252,.4)",
  subtleWhite: "rgba(255,255,255,.015)",
  shine: "rgba(255,255,255,.055)",
  orbTwo: "rgba(37, 99, 235, 0.15)",
  shadow: "rgba(0,0,0,0.5)",
  cursorRing: "rgba(59, 130, 246, 0.4)",
  cursorHover: "rgba(59, 130, 246, 0.1)"
};

const lightTheme = {
  bg: "#f5f7fb",
  surface: "#ffffff",
  surfaceHover: "#eef4ff",
  text: "#101827",
  muted: "#667085",
  line: "rgba(15, 23, 42, 0.10)",
  accent: "#2563eb",
  accentGlow: "rgba(37, 99, 235, 0.18)",
  navBg: "rgba(245, 247, 251, 0.90)",
  gridLine: "rgba(15,23,42,.055)",
  outline: "rgba(15,23,42,.32)",
  subtleWhite: "rgba(15,23,42,.025)",
  shine: "rgba(255,255,255,.60)",
  orbTwo: "rgba(37, 99, 235, 0.10)",
  shadow: "rgba(15,23,42,0.14)",
  cursorRing: "rgba(37, 99, 235, 0.35)",
  cursorHover: "rgba(37, 99, 235, 0.10)"
};

function App() {
  const root = useRef(null);
  const heroImage = useRef(null);
  const cursor = useRef(null);
  const cursorFollower = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-theme") === "light";
    } catch {
      return false;
    }
  });
  const [activeSkill, setActiveSkill] = useState(0);
  const skillsTrack = useRef(null);
  const skillsViewport = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const autoplayRef = useRef(null);

  const setThemeVariables = (theme) => {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--bg", theme.bg);
    rootStyle.setProperty("--surface", theme.surface);
    rootStyle.setProperty("--surface-hover", theme.surfaceHover);
    rootStyle.setProperty("--text", theme.text);
    rootStyle.setProperty("--muted", theme.muted);
    rootStyle.setProperty("--line", theme.line);
    rootStyle.setProperty("--accent", theme.accent);
    rootStyle.setProperty("--accent-glow", theme.accentGlow);
    rootStyle.setProperty("--nav-bg", theme.navBg);
    rootStyle.setProperty("--grid-line", theme.gridLine);
    rootStyle.setProperty("--outline", theme.outline);
    rootStyle.setProperty("--subtle-white", theme.subtleWhite);
    rootStyle.setProperty("--shine", theme.shine);
    rootStyle.setProperty("--orb-two", theme.orbTwo);
    rootStyle.setProperty("--shadow", theme.shadow);
    rootStyle.setProperty("--cursor-ring", theme.cursorRing);
    rootStyle.setProperty("--cursor-hover", theme.cursorHover);
  };

  useEffect(() => {
    setThemeVariables(lightMode ? lightTheme : darkTheme);
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const nextLight = !lightMode;
    const target = nextLight ? lightTheme : darkTheme;
    const rootElement = document.documentElement;

    gsap.killTweensOf(rootElement);

    gsap.to(rootElement, {
      duration: 0.7,
      ease: "power2.inOut",
      "--bg": target.bg,
      "--surface": target.surface,
      "--surface-hover": target.surfaceHover,
      "--text": target.text,
      "--muted": target.muted,
      "--line": target.line,
      "--accent": target.accent,
      "--accent-glow": target.accentGlow,
      "--nav-bg": target.navBg,
      "--grid-line": target.gridLine,
      "--outline": target.outline,
      "--subtle-white": target.subtleWhite,
      "--shine": target.shine,
      "--orb-two": target.orbTwo,
      "--shadow": target.shadow,
      "--cursor-ring": target.cursorRing,
      "--cursor-hover": target.cursorHover,
      onStart: () => {
        document.documentElement.dataset.theme = nextLight ? "light" : "dark";
      },
      onComplete: () => {
        try {
          window.localStorage.setItem("portfolio-theme", nextLight ? "light" : "dark");
        } catch {}
      }
    });

    gsap.timeline()
      .to(".theme-toggle-icon", {
        rotate: nextLight ? 180 : -180,
        scale: 0.7,
        duration: 0.22,
        ease: "power2.in"
      })
      .to(".theme-toggle-icon", {
        rotate: nextLight ? 360 : 0,
        scale: 1,
        duration: 0.48,
        ease: "back.out(1.7)"
      }, "-=0.02");

    gsap.fromTo(".theme-toggle", {
      boxShadow: "0 0 0 rgba(59,130,246,0)"
    }, {
      boxShadow: "0 0 34px rgba(59,130,246,0.35)",
      duration: 0.35,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });

    setLightMode(nextLight);
  };

  const goToSkill = (index, animate = true) => {
    const nextIndex = (index + skills.length) % skills.length;
    setActiveSkill(nextIndex);

    if (skillsTrack.current) {
      gsap.to(skillsTrack.current, {
        xPercent: -nextIndex * (100 / skills.length),
        duration: animate ? 0.8 : 0,
        ease: "power4.inOut",
        overwrite: true
      });
    }
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setActiveSkill((current) => {
        const next = (current + 1) % skills.length;
        if (skillsTrack.current) {
          gsap.to(skillsTrack.current, {
            xPercent: -next * (100 / skills.length),
            duration: 0.9,
            ease: "power4.inOut",
            overwrite: true
          });
        }
        return next;
      });
    }, 4500);
  };

  const handleSkillPointerDown = (e) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    if (skillsTrack.current) gsap.killTweensOf(skillsTrack.current);
  };

  const handleSkillPointerUp = (e) => {
    if (touchStartX.current === null) return;

    const diffX = e.clientX - touchStartX.current;
    const diffY = e.clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(diffX) < 50 || Math.abs(diffX) < Math.abs(diffY)) return;

    goToSkill(diffX < 0 ? activeSkill + 1 : activeSkill - 1);
    resetAutoplay();
  };

  const handleSkillTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    if (skillsTrack.current) gsap.killTweensOf(skillsTrack.current);
  };

  const handleSkillTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(diffX) < 50 || Math.abs(diffX) < Math.abs(diffY)) return;

    goToSkill(diffX < 0 ? activeSkill + 1 : activeSkill - 1);
    resetAutoplay();
  };

  useEffect(() => {
    goToSkill(0, false);
    resetAutoplay();
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro / hero reveal
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".nav", { y: -30, opacity: 0, duration: 0.8 })
        .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".hero-title .line", { yPercent: 110, opacity: 0, stagger: 0.1, duration: 1.05 }, "-=0.2")
        .from(".hero-copy", { y: 25, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-photo-wrap", { opacity: 0, scale: 0.95, duration: 1.1 }, "-=0.75")
        .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.4");

      // Hero parallax
      if (heroImage.current) {
        gsap.to(heroImage.current, {
          yPercent: 12,
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Generic reveals
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          }
        });
      });

      // Timeline cards reveal
      gsap.utils.toArray(".timeline-card").forEach((item) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true
          }
        });
      });

      gsap.from(".skills-carousel", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-carousel",
          start: "top 82%",
          once: true
        }
      });

      gsap.from(".skill-card", {
        scale: 0.96,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-carousel",
          start: "top 82%",
          once: true
        }
      });

      // Contact cards reveal
      gsap.from(".contact-card", {
        y: 45,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-cards",
          start: "top 85%",
          once: true
        }
      });

      // Tasks reveal
      gsap.from(".task", {
        x: -30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tasks",
          start: "top 85%",
          once: true
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

        const interactive = document.querySelectorAll("a, button, .skill-card, .timeline-card, .contact-card");
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
            <button
              type="button"
              className={`theme-toggle ${lightMode ? "is-light" : ""}`}
              onClick={toggleTheme}
              aria-label={lightMode ? "Cambiar al modo oscuro" : "Cambiar al modo claro"}
              aria-pressed={lightMode}
            >
              <span className="theme-toggle-icon" aria-hidden="true">{lightMode ? "☾" : "☀"}</span>
              <span>¿CÓMO DESEAS VERME?</span>
            </button>

            <div className="hero-kicker"><span /> MI CUENTA · 2026</div>

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
                  src="fotoPerfil.jpeg"
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
          <div className="section-label">FORMACIÓN</div>
          <div className="timeline">
            <div className="timeline-line"><div className="timeline-progress" /></div>

            <article className="timeline-item">
              <div className="timeline-dot">01</div>
              <div className="timeline-card">
                <div className="institute-img-wrap">
                  <img src="/miguelSanchezLopez.png" alt="IES Miguel Sánchez López" className="institute-img" />
                </div>
                <div className="timeline-year">FORMACIÓN COMPLETADA</div>
                <h3>Sistemas Microinformáticos<br />y Redes</h3>
                <p>IES Miguel Sánchez López</p>
                <span>Torredelcampo · Jaén</span>
                <div>
                  <a href="https://www.iesmiguelsanchezlopez.es/" target="_blank" rel="noreferrer">
                    VISITAR CENTRO ↗
                  </a>
                </div>
              </div>
            </article>

            <article className="timeline-item timeline-right">
              <div className="timeline-dot">02</div>
              <div className="timeline-card">
                <div className="institute-img-wrap">
                  <img src="/IES-Fernando-III_logo.jpg" alt="IES Fernando III" className="institute-img" />
                </div>
                <div className="timeline-year">ACTUALMENTE ESTUDIANDO</div>
                <h3>Desarrollo de Aplicaciones<br />Multiplataforma</h3>
                <p>IES Fernando III</p>
                <span>Martos · Jaén</span>
                <div>
                  <a href="https://iesfernandoiii.es/" target="_blank" rel="noreferrer">
                    VISITAR CENTRO ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

    <section id="tecnologias" className="section skills">
      <div className="section-label">TECNOLOGÍAS</div>

      <div className="skills-head">
        <h2 className="section-title reveal">
          Construyendo<br /><em>mi camino.</em>
        </h2>
        <p className="reveal">
          Tecnologías y conocimientos que forman parte de mi aprendizaje y desarrollo.
        </p>
      </div>

      <div
        className="skills-carousel"
        ref={skillsViewport}
        onMouseEnter={() => autoplayRef.current && window.clearInterval(autoplayRef.current)}
        onMouseLeave={resetAutoplay}
      >
        <div
          className="skills-slider-wrap"
          onPointerDown={handleSkillPointerDown}
          onPointerUp={handleSkillPointerUp}
          onPointerCancel={handleSkillPointerUp}
          onTouchStart={handleSkillTouchStart}
          onTouchEnd={handleSkillTouchEnd}
        >
          <div className="skills-grid" ref={skillsTrack}>
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <span className="skill-number">{skill.type}</span>
                <div className="skill-card-content">
                  <span className="skill-tag">TECNOLOGÍA</span>
                  <h3>{skill.name}</h3>
                  <p>{skill.text}</p>
                </div>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>

        <div className="skills-controls">
          <button
            className="skills-control"
            type="button"
            aria-label="Tecnología anterior"
            onClick={() => { goToSkill(activeSkill - 1); resetAutoplay(); }}
          >
            ←
          </button>

          <div className="skills-dots" aria-label="Seleccionar tecnología">
            {skills.map((skill, index) => (
              <button
                key={skill.name}
                type="button"
                className={`skills-dot ${activeSkill === index ? "active" : ""}`}
                aria-label={`Ir a ${skill.name}`}
                aria-current={activeSkill === index ? "true" : undefined}
                onClick={() => { goToSkill(index); resetAutoplay(); }}
              />
            ))}
          </div>

          <button
            className="skills-control"
            type="button"
            aria-label="Siguiente tecnología"
            onClick={() => { goToSkill(activeSkill + 1); resetAutoplay(); }}
          >
            →
          </button>
        </div>
      </div>
    </section>
        <section id="practicas" className="section practice">
          <div className="section-label">EXPERIENCIA PRÁCTICA</div>
          <div className="practice-layout">
            <div>
              <h2 className="section-title reveal">Manos a la<br /><em>obra.</em></h2>
              <p className="practice-intro reveal">
                Durante mi etapa de prácticas trabajé en tareas de soporte y
                mantenimiento informático en el <strong>IES Santa Teresa</strong>, poniendo en práctica los conocimientos adquiridos.
              </p>

              <div className="practice-center-card reveal">
                <img src="/santaTeresa.jpg" alt="IES Santa Teresa" className="practice-center-img" />
                <div className="practice-center-info">
                  <h4>IES Santa Teresa</h4>
                  <p>Centro de prácticas de formación</p>
                </div>
              </div>
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
            <p className="section-label">CONTACTO</p>
            <h2>¿Tienes un proyecto<br />en mente?</h2>
            <p className="contact-copy">
              Estoy abierto a nuevas oportunidades, proyectos y retos en el mundo tecnológico.
            </p>
            <div className="contact-cards">
              <a className="contact-card" href="mailto:davidcas3008@gmail.com">
                <span className="contact-card-number">01</span>
                <span className="contact-card-type">CORREO</span>
                <h3>Envíame un Gmail</h3>
                <p>davidcas3008@gmail.com</p>
                <b>↗</b>
              </a>

              <a className="contact-card" href="https://www.linkedin.com/in/david-castillo-bb9271436/" target="_blank" rel="noreferrer">
                <span className="contact-card-number">02</span>
                <span className="contact-card-type">LINKEDIN</span>
                <h3>Mi cuenta de LinkedIn</h3>
                <p>Conecta conmigo profesionalmente.</p>
                <b>↗</b>
              </a>

              <a className="contact-card" href="https://www.instagram.com/_daaviid.1010/" target="_blank" rel="noreferrer">
                <span className="contact-card-number">03</span>
                <span className="contact-card-type">INSTAGRAM</span>
                <h3>Mi cuenta de Instagram</h3>
                <p>@_daaviid.1010</p>
                <b>↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>DAVID CASTILLO DE HARO</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);