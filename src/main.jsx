import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const LINKEDIN = "https://www.linkedin.com/in/david-castillo-bb9271436/";

const education = [
  {
    name: "I.E.S. Fernando III",
    city: "Martos, Jaén",
    type: "Estudios actuales",
    title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    image: "/fernandoIII.png",
  },
  {
    name: "I.E.S. Miguel Sánchez López",
    city: "Torredelcampo, Jaén",
    type: "Formación",
    title: "Grado Medio de Sistemas Microinformáticos y Redes",
    image: "/miguelSanchezLopez.png",
  },
];

const practice = {
  name: "I.E.S. Santa Teresa",
  city: "Jaén",
  type: "Formación en centros de trabajo",
  title: "Prácticas como Técnico de Sistemas Microinformáticos",
  image: "/santaTeresa.jpg",
};

const skills = [
  ["HTML", "Estructura y desarrollo web"],
  ["CSS", "Diseño y maquetación"],
  ["Java", "Programación"],
  ["SQL", "Bases de datos"],
  ["Sistemas", "Mantenimiento y soporte"],
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio">
            <span className="brand-mark">DC</span>
            <span>David Castillo De Haro</span>
          </a>
          <nav>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#formacion">Formación</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">PORTFOLIO PERSONAL</p>
              <h1>David Castillo <span>De Haro</span></h1>
              <p className="hero-role">
                Técnico de Sistemas Microinformáticos y Redes · Estudiante de
                Desarrollo de Aplicaciones Multiplataforma
              </p>
              <p className="hero-text">
                Apasionado por la tecnología, los sistemas informáticos y el
                desarrollo de software. Me interesa seguir aprendiendo,
                resolver problemas y crecer profesionalmente en el sector
                tecnológico.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contacto">Contactar conmigo</a>
                <a className="button secondary" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="terminal">
                <div className="terminal-top">
                  <span></span><span></span><span></span><small>portfolio.js</small>
                </div>
                <pre>{`const david = {
  perfil: "Técnico de Sistemas",
  estudios: "DAM",
  tecnologias: [
    "Java",
    "SQL",
    "HTML",
    "CSS"
  ],
  objetivo: "Seguir creciendo"
};`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="sobre-mi">
          <div className="container">
            <div className="section-heading">
              <span>01</span>
              <div><p className="eyebrow">PERFIL</p><h2>Sobre mí</h2></div>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <p>Soy Técnico de Sistemas Microinformáticos y Redes y actualmente estudio Desarrollo de Aplicaciones Multiplataforma.</p>
                <p>Tengo conocimientos en mantenimiento de equipos, sistemas informáticos, bases de datos SQL y desarrollo con Java, HTML y CSS.</p>
                <p>Me considero una persona responsable, con ganas de aprender y de seguir desarrollando mis conocimientos dentro del mundo tecnológico.</p>
              </div>
              <div className="stats">
                <div><strong>01</strong><span>Sistemas</span></div>
                <div><strong>02</strong><span>Programación</span></div>
                <div><strong>03</strong><span>Bases de datos</span></div>
                <div><strong>04</strong><span>Desarrollo web</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="formacion">
          <div className="container">
            <div className="section-heading">
              <span>02</span>
              <div><p className="eyebrow">TRAYECTORIA ACADÉMICA</p><h2>Formación</h2></div>
            </div>
            <div className="cards">
              {education.map((item) => (
                <article className="school-card" key={item.name}>
                  <div className="school-image"><img src={item.image} alt={item.name} /></div>
                  <div className="school-content">
                    <span className="tag">{item.type}</span>
                    <h3>{item.name}</h3>
                    <p className="location">{item.city}</p>
                    <p>{item.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="container">
            <div className="section-heading">
              <span>03</span>
              <div><p className="eyebrow">EXPERIENCIA PRÁCTICA</p><h2>Prácticas</h2></div>
            </div>
            <article className="practice-card">
              <div className="practice-image"><img src={practice.image} alt={practice.name} /></div>
              <div className="practice-content">
                <span className="tag">PRÁCTICAS</span>
                <h3>{practice.name}</h3>
                <p className="location">{practice.city}</p>
                <p>{practice.title}</p>
                <ul>
                  <li>Mantenimiento y puesta a punto de ordenadores.</li>
                  <li>Actualización e instalación de software.</li>
                  <li>Configuración y resolución de incidencias.</li>
                  <li>Apoyo técnico a usuarios y equipos informáticos.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <span>04</span>
              <div><p className="eyebrow">CONOCIMIENTOS</p><h2>Tecnologías y habilidades</h2></div>
            </div>
            <div className="skills-grid">
              {skills.map(([name, description], index) => (
                <div className="skill" key={name}>
                  <div className="skill-number">0{index + 1}</div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">05 · CONTACTO</p>
              <h2>¿Hablamos?</h2>
              <p>Si quieres conocer más sobre mi perfil o contactar conmigo, puedes encontrarme en LinkedIn o escribirme por correo.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Ver mi LinkedIn ↗</a>
              <a className="button secondary" href="mailto:davidcas3008@gmail.com">Enviar correo</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} David Castillo De Haro</span>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
