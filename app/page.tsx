"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const experiences = [
  {
    dates: "Feb. 2026 - Aug. 2026",
    location: "Remote",
    role: "Web Development Intern",
    organization: "Sewa International USA",
    points: [
      "Built and tested responsive JavaScript donation and volunteer experiences, including dynamic forms, campaign prefills, and one-time and recurring giving flows.",
      "Integrated Stripe, webhooks, Zoho CRM, and Zoho Deluge to validate payments and automate reliable data handoffs across public web experiences and internal workflows.",
      "Used generative AI and agentic development workflows for rapid prototyping and integration debugging, then applied human-in-the-loop validation to turn requirements into maintainable code.",
    ],
  },
  {
    dates: "May 2026 - Dec. 2026",
    location: "Lafayette, CO",
    role: "Software Engineering Capstone Developer",
    organization: "DigiClips, Arizona State University",
    points: [
      "Built public-facing features for a media aggregation platform with React, Angular 20, and TypeScript while collaborating with a five-person engineering team and project sponsor.",
      "Developed reusable interactions for comments, replies, likes, dislikes, and notifications, connecting the interface to Node.js APIs and MySQL persistence.",
      "Applied AI-assisted coding to prototype, debug, and test UI, API, and database-connected workflows, validating each result against user stories and expected behavior.",
    ],
  },
  {
    dates: "Nov. 2021 - Jan. 2025",
    location: "California",
    role: "Software Engineer",
    organization: "Rift School Scope",
    points: [
      "Co-founded a student application for grades, assignments, and SIS data that supported more than 15,000 users.",
      "Tracked synchronization reliability for more than 7,500 active users and improved the product from direct user feedback.",
    ],
  },
];

const skills = [
  ["Languages", "JavaScript, TypeScript, Python, Java, C++, C#, SQL, Zoho Deluge, HTML/CSS"],
  ["Frameworks & Web", "React, Angular 20, Node.js, Responsive Web Development, REST APIs"],
  ["Data & Cloud", "PostgreSQL, MySQL, Firebase, AWS, Relational Databases"],
  ["Testing & DevOps", "Automated Testing, API Testing, End-to-End Testing, Docker, CI/CD, GitHub Actions"],
  ["Development", "Git, GitHub, Agile Development, Requirements Analysis, Client-Server Architecture"],
  ["AI & Automation", "Generative AI, Prompt Engineering, Agentic Workflows, Human-in-the-Loop Validation, AI-Assisted Development"],
  ["Engineering", "System Reliability, Debugging, Data Modeling, Technical Documentation"],
  ["Integrations", "Webhooks, Payment Integrations, Workflow Automation, CRM Integrations"],
  ["Platforms", "Stripe, Power BI, Zoho Software"],
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const updateScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const maxHeroScroll = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const heroProgress = Math.min(
        Math.max((window.scrollY - hero.offsetTop) / maxHeroScroll, 0),
        1,
      );
      const documentProgress = Math.min(
        window.scrollY /
          Math.max(document.documentElement.scrollHeight - window.innerHeight, 1),
        1,
      );

      hero.style.setProperty("--hero-progress", heroProgress.toString());
      document.documentElement.style.setProperty(
        "--scroll-progress",
        documentProgress.toString(),
      );
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -52%", threshold: [0.08, 0.3, 0.6] },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) =>
      revealObserver.observe(node),
    );
    document.querySelectorAll<HTMLElement>("[data-section]").forEach((node) =>
      sectionObserver.observe(node),
    );

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>

      <header className="site-header" aria-label="Primary navigation">
        <a className="monogram" href="#intro" aria-label="Back to introduction">
          AD<span className="monogram__dot">.</span>
        </a>
        <nav className="site-nav">
          {[
            ["experience", "Experience"],
            ["education", "Education"],
            ["skills", "Skills"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              className={activeSection === id ? "is-active" : ""}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section
        className="hero"
        id="intro"
        ref={heroRef}
        data-section
        style={{ "--hero-progress": 0 } as CSSProperties}
      >
        <div className="hero__sticky">
          <div className="hero__content">
            <p className="eyebrow">Software engineer · ASU 2026</p>
            <h1>
              I make complex systems
              <span> easier to use.</span>
            </h1>
            <p className="hero__blurb">
              I&apos;m Aditya, a computer science student at Arizona State
              University. I like untangling awkward workflows, tightening the
              details, and shipping software people can rely on.
            </p>
            <div className="hero__actions">
              <a
                className="resume-link"
                href="/resume/Aditya_Deshpande_Tech_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View résumé <span aria-hidden="true">↗</span>
              </a>
              <span className="resume-meta">PDF · one page</span>
            </div>
          </div>

          <figure className="portrait-frame">
            <div className="portrait-frame__line" aria-hidden="true" />
            <picture>
              <source
                media="(max-width: 720px)"
                srcSet="/images/aditya-portrait-mobile.webp"
              />
              <img
                src="/images/aditya-portrait.webp"
                alt="Aditya Deshpande standing outdoors in warm evening light"
                width="960"
                height="1200"
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              <span>Aditya Deshpande</span>
              <span>Software Engineer</span>
            </figcaption>
          </figure>

          <a className="scroll-cue" href="#experience">
            <span>Scroll to résumé</span>
            <i aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="resume-page">
        <section
          className="section experience-section"
          id="experience"
          data-section
        >
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Experience</p>
            <h2>Work shaped by real users and real constraints.</h2>
            <p>
              Most of my best work has started with something confusing,
              fragile, or unfinished. I enjoy finding the practical path from
              there to something people can actually use.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <article className="role" key={experience.role} data-reveal>
                <div className="role__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="role__date">
                  <span>{experience.dates}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="role__body">
                  <h3>{experience.role}</h3>
                  <p className="role__organization">{experience.organization}</p>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education" data-section>
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Education</p>
            <h2>Arizona State University</h2>
          </div>
          <div className="education-card" data-reveal>
            <div>
              <p className="education-card__degree">B.S. Computer Science</p>
              <p>Expected December 2026 · Tempe, Arizona</p>
            </div>
            <p className="education-card__coursework">
              Operating Systems · Programming Languages · Human-Computer
              Interaction · Artificial Intelligence · Data Structures &amp;
              Algorithms · Probability &amp; Statistics
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills" data-section>
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Technical skills</p>
            <h2>A practical stack for building and shipping.</h2>
          </div>
          <div className="skill-list" data-reveal>
            {skills.map(([category, items]) => (
              <div className="skill-row" key={category}>
                <h3>{category}</h3>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" data-section>
          <div className="contact-section__inner" data-reveal>
            <p className="section-kicker">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              I&apos;m looking for software engineering opportunities where I can
              learn quickly, care about the details, and contribute from day one.
            </p>
            <div className="contact-links">
              <a href="mailto:adeshp32@asu.edu">adeshp32@asu.edu</a>
              <a
                href="https://www.linkedin.com/in/aditya-deshpande-127218205/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <footer>
            <span>Aditya Deshpande</span>
            <a href="#intro">Back to top ↑</a>
          </footer>
        </section>
      </div>
    </main>
  );
}
