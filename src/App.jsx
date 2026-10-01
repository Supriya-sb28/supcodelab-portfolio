import React, { useState } from "react";

const projects = [
  {
    title: "OpsPilot AI",
    category: "AI / GenAI",
    description:
      "An autonomous AI DevOps and incident-response agent that analyzes logs, searches technical knowledge, reviews code, and provides evidence-based fixes.",
    tech: ["Python", "FastAPI", "Gemini", "LangGraph", "RAG", "ChromaDB"],
  },
  {
    title: "AI Chatbot",
    category: "AI / Full Stack",
    description:
      "A modern AI chatbot with a React frontend and FastAPI backend for conversational AI and document-based assistance.",
    tech: ["React", "Vite", "FastAPI", "Gemini"],
  },
  {
    title: "Questly / LifeQuest AI",
    category: "AI / Mobile",
    description:
      "An AI-powered productivity and learning application using gamification concepts such as XP, coins, tasks and progress.",
    tech: ["Flutter", "Dart", "AI", "REST API"],
  },
  {
    title: "NGO Web Development",
    category: "Web Development",
    description:
      "Responsive NGO-focused web pages and feature improvements developed during my AI Web Development internship.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
];

const services = [
  {
    icon: "✦",
    title: "AI Chatbots & RAG",
    description:
      "Custom AI chatbots, document Q&A systems, RAG pipelines, vector search and GenAI integrations.",
  },
  {
    icon: "</>",
    title: "Full-Stack Development",
    description:
      "Responsive and scalable web applications using React, Node.js, Python, FastAPI and databases.",
  },
  {
    icon: "⚙",
    title: "AI Integration & Automation",
    description:
      "Add practical AI features to existing products, integrate APIs and automate repetitive workflows.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C", "HTML/CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "JavaScript", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MongoDB", "ChromaDB"],
  },
  {
    title: "AI / GenAI",
    skills: ["Gemini", "RAG", "LangGraph", "Embeddings"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "AWS", "VS Code"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-content">

          <button
            className="logo"
            onClick={() => scrollTo("home")}
          >
            <span>&lt;/&gt;</span> SupCodeLab
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("experience")}>
              Experience
            </button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <button
            className="hire-small"
            onClick={() => scrollTo("contact")}
          >
            Hire Me
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </header>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="container hero-grid">

          <div className="hero-content">

            <p className="small-title">HI, I'M</p>

            <h1>
              Supriya <span>Bugadikatti</span>
            </h1>

            <h2>AI & Full-Stack Developer</h2>

            <p className="hero-description">
              I build modern web applications and AI-powered solutions
              that solve real-world problems. From AI chatbots and RAG
              systems to complete full-stack applications, I turn ideas
              into useful software.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                View Projects →
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo("contact")}
              >
                Hire Me ✉
              </button>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/Supriya-sb28"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/supriya-bugadikatti-0b5a182a4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.fiverr.com/supcodelab"
                target="_blank"
                rel="noreferrer"
              >
                Fiverr
              </a>

            </div>

          </div>


          <div className="hero-image-area">

            <div className="glow"></div>

            <div className="profile-card">

              {/* Replace SB with your photo later */}
              <div className="profile-placeholder">
  <img src="/profile.jpg" alt="Supriya Bugadikatti" />
</div>

            </div>

            <div className="floating-card first">
              ✦ AI & GenAI
            </div>

            <div className="floating-card second">
              &lt;/&gt; Full Stack
            </div>

            <div className="floating-card third">
              💡 Problem Solving
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section about">

        <div className="container">

          <div className="section-heading">
            <span></span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">

            <div className="about-box">

              <div className="code-window">

                <div className="window-buttons">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <p>
                  <span>const</span> developer = {"{"}
                </p>

                <p className="indent">
                  focus: <b>"AI + Full Stack"</b>,
                </p>

                <p className="indent">
                  mindset: <b>"Build. Learn. Improve."</b>
                </p>

                <p>{"};"}</p>

              </div>

            </div>


            <div className="about-text">

              <p>
                I'm Supriya, a final-year Computer Science student
                focused on AI and full-stack development.
              </p>

              <p>
                I enjoy building intelligent systems, modern web
                applications and practical software solutions.
                I'm constantly learning new technologies and looking
                for opportunities to build useful products.
              </p>

              <div className="tags">
                <span>Final-Year CSE Student</span>
                <span>AI Enthusiast</span>
                <span>Problem Solver</span>
              </div>

            </div>


            <div className="about-details">

              <div>
                <strong>🎓 Education</strong>
                <small>B.E. Computer Science</small>
              </div>

              <div>
                <strong>⌘ Focus</strong>
                <small>AI / Full-Stack Development</small>
              </div>

              <div>
                <strong>⚡ Approach</strong>
                <small>Clean & practical solutions</small>
              </div>

              <div>
                <strong>♡ Open To</strong>
                <small>Freelance & remote opportunities</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section projects">

        <div className="container">

          <div className="section-heading">
            <span></span>
            <h2>Featured Projects</h2>
          </div>

          <div className="project-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-icon">
                  ✦
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-list">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <button
                  className="project-link"
                  onClick={() => scrollTo("contact")}
                >
                  Discuss Project →
                </button>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section id="services" className="section services">

        <div className="container">

          <div className="section-heading dark-heading">
            <span></span>
            <h2>My Services</h2>
          </div>

          <div className="services-grid">

            {services.map((service) => (

              <article
                className="service-card"
                key={service.title}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section skills">

        <div className="container">

          <div className="section-heading">
            <span></span>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">

            {skillGroups.map((group) => (

              <div
                className="skill-group"
                key={group.title}
              >

                <h3>{group.title}</h3>

                <div>

                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="section experience">

        <div className="container">

          <div className="section-heading">
            <span></span>
            <h2>Experience</h2>
          </div>

          <div className="timeline">

            <div className="experience-item">

              <div className="timeline-dot"></div>

              <h3>Full Stack Developer</h3>

              <h4>Softmusk</h4>

              <p className="date">
                August 2026 — Present
              </p>

              <ul>
                <li>
                  Worked across frontend, backend, databases and APIs.
                </li>

                <li>
                  Contributed to full-stack application development.
                </li>

                <li>
                  Worked with data analysis and software workflows.
                </li>
              </ul>

            </div>


            <div className="experience-item">

              <div className="timeline-dot"></div>

              <h3>AI Web Development Intern</h3>

              <h4>InAmigos Foundation</h4>

              <p className="date">
                August 2026 · 2 Weeks
              </p>

              <ul>

                <li>
                  Built and improved responsive web pages.
                </li>

                <li>
                  Contributed to website enhancements and features.
                </li>

                <li>
                  Worked on NGO-focused web solutions.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact">

        <div className="container contact-grid">

          <div>

            <p className="small-title">
              LET'S WORK TOGETHER
            </p>

            <h2>
              Have a project in mind?
            </h2>

            <p>
              I'm available for freelance AI and full-stack
              development projects.
            </p>

            <a
              className="primary-button contact-button"
              href="mailto:supriyabugadikatti5@gmail.com"
            >
              Get In Touch ✉
            </a>

          </div>


          <div className="contact-links">

            <a href="mailto:supriyabugadikatti5@gmail.com">
              ✉ supriyabugadikatti5@gmail.com
            </a>

            <a
              href="https://github.com/Supriya-sb28"
              target="_blank"
              rel="noreferrer"
            >
              ◉ github.com/Supriya-sb28
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              in LinkedIn
            </a>

            <a
              href="https://www.fiverr.com/supcodelab"
              target="_blank"
              rel="noreferrer"
            >
              F Fiverr / SupCodeLab
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="container footer-content">

          <div className="footer-logo">
            &lt;/&gt; SupCodeLab
          </div>

          <p>
            © 2026 Supriya Bugadikatti. Built with React.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;