"use client";

import Image from "next/image";
import { CSSProperties, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
  accent: string;
};

const projects: Project[] = [
  {
    title: "MyGuidance",
    eyebrow: "Education & Career Platform",
    description:
      "Responsive, multi-module product experience covering CAO Points, CV Builder, Self Assessment, Study Timetable, Career Choices, Educational Guidance, AI Guidance Reports and Work Experience.",
    image: "/myguidance.png",
    url: "https://www.myguidance.ie/",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "REST APIs"],
    accent: "#4dc8ff"
  },
  {
    title: "TutorHub",
    eyebrow: "Tutoring Management Platform",
    description:
      "Role-based tutor and student experiences with authentication, dashboards, student management, sessions, messaging, assignments and API-driven workflows.",
    image: "/tutorhub.png",
    url: "https://asadtutor.com/",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    accent: "#e2aa54"
  },
  {
    title: "Kart Geezer",
    eyebrow: "Multi-Vendor Marketplace",
    description:
      "Marketplace and seller-facing frontend for listings, orders, messaging, promotions, earnings, analytics and account workflows with Stripe and Firebase integrations.",
    image: "/kartgeezer.png",
    url: "https://www.kartgeezer.com/",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "Stripe", "Firebase", "REST APIs"],
    accent: "#ffc928"
  },
  {
    title: "MedClaim AI",
    eyebrow: "Healthcare Billing Assistant",
    description:
      "A clean, responsive healthcare interface focused on turning complex, data-heavy clinical billing workflows into structured and easy-to-understand product experiences.",
    image: "/medclaim.png",
    url: "https://cardio-dev.renyxai.com/",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Product UI"],
    accent: "#2388ff"
  }
];

const skillGroups = [
  {
    title: "Core frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Data & UI",
    items: ["React Query", "REST APIs", "Material UI", "Responsive Design", "Reusable Components", "Figma"]
  },
  {
    title: "Platform & integrations",
    items: ["Firebase", "Stripe", "AWS", "Microsoft Azure", "Entra ID", "Google OAuth", "Sign in with Apple", "Git", "GitHub"]
  }
];

const technologies = [
  { id: "react", name: "React.js" },
  { id: "next", name: "Next.js" },
  { id: "typescript", name: "TypeScript" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "query", name: "React Query" },
  { id: "rest", name: "REST APIs" },
  { id: "stripe", name: "Stripe" },
  { id: "firebase", name: "Firebase" },
  { id: "azure", name: "Azure" },
  { id: "figma", name: "Figma" },
  { id: "aws", name: "AWS" }
];

const education = [
  { year: "2026", title: "BS Computer Science", school: "University of South Asia", result: "CGPA 3.60 / 4.00" },
  { year: "ICS", title: "Intermediate", school: "Punjab College", result: "Grade A" },
  { year: "SSC", title: "Matric · Science", school: "Allied School", result: "Grade A" }
];

function TechLogo({ id }: { id: string }) {
  if (id === "react") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="2.6" /><ellipse cx="16" cy="16" rx="13" ry="5.2" /><ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(120 16 16)" /></svg>;
  }
  if (id === "tailwind") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 14c2.7-6.7 7.3-6.7 12-2 2.4 2.4 4.5 2.7 6.3.9-2.7 6.7-7.3 6.7-12 2C7.9 12.5 5.8 12.2 4 14Zm6 7c2.7-6.7 7.3-6.7 12-2 2.4 2.4 4.5 2.7 6.3.9-2.7 6.7-7.3 6.7-12 2-2.4-2.4-4.5-2.7-6.3-.9Z" /></svg>;
  }
  if (id === "firebase") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m6.2 24.3 3.2-20 6.1 11.4 3-7.2 7.2 15.8L16 29 6.2 24.3Z" /><path className="logo-detail" d="m9.2 23.1 6.3-7.4 3.1-7.2-1.8 18.9-7.6-4.3Z" /></svg>;
  }
  if (id === "azure") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12.6 4h8.1L12.3 27H4.4L12.6 4Z" /><path className="logo-detail" d="m16.3 19.5 4.4-15.4L28 27H10.9l5.4-7.5Z" /></svg>;
  }
  if (id === "figma") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h8v8H8a4 4 0 0 1 0-8Zm8 0h4a4 4 0 1 1 0 8h-4V3Z" /><path d="M8 11h8v8H8a4 4 0 0 1 0-8Zm8 0h4a4 4 0 1 1 0 8h-4v-8ZM8 19h8v4a4 4 0 1 1-8 0v-4Z" /></svg>;
  }
  if (id === "rest") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="6" cy="16" r="3" /><circle cx="26" cy="8" r="3" /><circle cx="26" cy="24" r="3" /><path d="m9 15 14-6M9 17l14 6" /></svg>;
  }
  if (id === "query") {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="14" cy="14" r="8" /><path d="m20 20 7 7" /><circle className="logo-detail" cx="14" cy="14" r="2.5" /></svg>;
  }
  if (id === "aws") {
    return <svg viewBox="0 0 40 32" aria-hidden="true"><text x="4" y="17">aws</text><path d="M7 22c7 5 17 5 25 0M28 21l4 1-2 4" /></svg>;
  }
  const label = id === "typescript" ? "TS" : id === "stripe" ? "S" : "N";
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="26" height="26" rx={id === "next" ? 13 : 6} /><text x="16" y="21" textAnchor="middle">{label}</text>{id === "next" && <path className="logo-detail" d="m15 10 10 15" />}</svg>;
}

function TechnologyTicker() {
  return (
    <div className="tech-ticker" aria-label="Technology stack">
      <div className="tech-track">
        {[0, 1].map((group) => (
          <div className="tech-group" key={group} aria-hidden={group === 1}>
            {technologies.map((technology) => (
              <div className={`tech-item tech-${technology.id}`} key={`${group}-${technology.id}`}>
                <span className="tech-logo"><TechLogo id={technology.id} /></span>
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function TiltCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 9;
    const rotateX = ((y / rect.height) - 0.5) * -9;
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <a
      ref={cardRef}
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <div className="project-image-shell">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          width={1500}
          height={900}
          className="project-image"
          priority={index === 0}
        />
        <div className="project-index">0{index + 1}</div>
        <div className="project-open">↗</div>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function MagneticLink({ href, children, primary = false, download = false }: { href: string; children: ReactNode; primary?: boolean; download?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a ref={ref} href={href} className={`button ${primary ? "button-primary" : "button-ghost"}`} onMouseMove={move} onMouseLeave={reset} download={download}>
      {children}
    </a>
  );
}

function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="scene-grid" />
      <div className="orbit orbit-one"><span>React</span></div>
      <div className="orbit orbit-two"><span>Next.js</span></div>
      <div className="orbit orbit-three"><span>TypeScript</span></div>
      <div className="core-sphere">
        <div className="sphere-highlight" />
      </div>
      <div className="ring ring-a" />
      <div className="ring ring-b" />
      <div className="scene-label">INTERFACE / SYSTEMS / EXPERIENCE</div>
    </div>
  );
}

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let animationFrame = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const renderMotion = () => {
      currentProgress += (targetProgress - currentProgress) * 0.14;
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      const nx = currentX / window.innerWidth - 0.5;
      const ny = currentY / window.innerHeight - 0.5;

      document.documentElement.style.setProperty("--scroll-progress", String(currentProgress));
      document.documentElement.style.setProperty("--pointer-x", `${currentX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${currentY}px`);
      document.documentElement.style.setProperty("--scene-x", `${nx * 10}deg`);
      document.documentElement.style.setProperty("--scene-y", `${ny * -7}deg`);

      const moving = Math.abs(targetProgress - currentProgress) > 0.0001 || Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1;
      animationFrame = moving ? window.requestAnimationFrame(renderMotion) : 0;
    };

    const scheduleMotion = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(renderMotion);
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = max > 0 ? window.scrollY / max : 0;
      scheduleMotion();
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      scheduleMotion();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("subhanshah579@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <div className="scroll-progress" />
      <div className="cursor-glow" />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Subhan Sikandar home">
          <span className="brand-mark">SS</span>
          <span className="brand-text">Subhan Sikandar</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/Subhan-Sikandar-CV.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <div className="availability"><span /> Open to frontend opportunities</div>
          <p className="hero-kicker">Frontend Developer · React / Next.js / TypeScript</p>
          <h1>
            I build interfaces that feel
            <span> fast, clear & intentional.</span>
          </h1>
          <p className="hero-lead">
            2+ years of hands-on frontend experience turning complex workflows into polished product experiences — dashboards, marketplaces, authentication, payments and data-driven applications.
          </p>
          <div className="hero-actions">
            <MagneticLink href="#work" primary>Explore selected work ↓</MagneticLink>
            <MagneticLink href="/Subhan-Sikandar-CV.pdf" download>Download CV</MagneticLink>
          </div>
          <div className="hero-meta">
            <div><strong>12–15</strong><span>MVPs contributed to</span></div>
            <div><strong>2+</strong><span>Years experience</span></div>
            <div><strong>4</strong><span>Featured products</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <HeroScene />
          <div className="portrait-card">
            <div className="portrait-frame">
              <Image src="/profile.jpg" alt="Subhan Sikandar" fill sizes="(max-width: 900px) 80vw, 34vw" className="portrait" priority />
              <div className="portrait-gradient" />
            </div>
            <div className="portrait-caption"><span>Currently</span><strong>Frontend Developer @ ZWEIDEVS</strong></div>
          </div>
        </div>
      </section>

      <TechnologyTicker />

      <section className="section work-section" id="work">
        <Reveal className="section-heading-row">
          <div>
            <p className="section-label">01 / Selected work</p>
            <h2>Products I’ve helped bring to life.
              
            </h2>
          </div>
          <p className="section-note">Real product work across education, tutoring, marketplaces and healthcare.</p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} className="project-reveal">
              <TiltCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <Reveal className="section-heading-row">
          <div>
            <p className="section-label">02 / Experience</p>
            <h2>Shipping real-world frontend work.</h2>
          </div>
          <p className="section-note">Focused on reusable architecture, integrations and production-ready interfaces.</p>
        </Reveal>

        <Reveal>
          <article className="experience-card">
            <div className="experience-rail">
              <span className="experience-dot" />
              <span className="experience-line" />
            </div>
            <div className="experience-topline">
              <div>
                <p className="eyebrow">Sep 2024 — Present</p>
                <h3>Frontend Developer</h3>
                <p className="company">ZWEIDEVS PVT LTD</p>
              </div>
              <div className="experience-badge">2+ YEARS</div>
            </div>
            <div className="experience-content">
              <p>Developed and contributed to <strong>12–15 MVPs</strong> across education, marketplace, healthcare, e-commerce and SaaS products.</p>
              <p>Built responsive product interfaces with React.js, Next.js and TypeScript, using reusable component patterns and scalable frontend structure.</p>
              <p>Integrated REST APIs and React Query, plus authentication and third-party services including Azure / Entra ID, Google OAuth, Sign in with Apple, Stripe, Firebase and AWS.</p>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="section about-section" id="about">
        <Reveal className="about-grid">
          <div className="about-intro">
            <p className="section-label">03 / About</p>
            <h2>Design sensitivity. Engineering discipline.</h2>
            <p>
              I’m a Computer Science graduate and frontend developer who enjoys making complicated systems feel simple. I care about the details users notice — hierarchy, responsiveness, feedback, performance and consistency — as much as the code behind them.
            </p>
            <div className="education-list">
              {education.map((item, index) => (
                <div className="education-card" key={item.title}>
                  <div className="edu-mark">{index === 0 ? "USA" : item.year}</div>
                  <div>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.school} · {item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-panels">
            {skillGroups.map((group) => (
              <div className="skill-panel" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section contact-section" id="contact">
        <Reveal>
          <div className="contact-card">
            <div className="contact-orb" />
            <p className="section-label">04 / Contact</p>
            <h2>Have a product, role or idea worth building?</h2>
            <p className="contact-copy">I’m open to Frontend Developer / React / Next.js opportunities, remote collaborations and product-focused teams.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:subhanshah579@gmail.com">Start a conversation ↗</a>
              <button className="button button-ghost" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email"}</button>
            </div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/subhan-sikandar-633aa018b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="tel:+923004411107">+92 300 4411107</a>
              <a href="mailto:subhanshah579@gmail.com">subhanshah579@gmail.com</a>
              <span>Wapda Town, Lahore</span>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Subhan Sikandar</span>
        <span>Built with Next.js · Designed for motion, clarity & performance.</span>
      </footer>
    </main>
  );
}
