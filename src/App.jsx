import { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaPython, FaGit, FaDocker, FaCube, FaCoffee, FaLink, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiDjango, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiElasticsearch, SiExpress, SiWebpack, SiVite, SiNpm, SiC, SiOpengl } from 'react-icons/si'

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  )
}

function Hero() {
  return (
    <Section id="home" className="pt-16">
      <div className="grid md:grid-cols-2 items-center gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <p className="text-sky-400 font-semibold">Software Engineer</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Dominic Kipkorir
          </h1>
          <p className="mt-4 mx-auto md:mx-0 max-w-2xl text-slate-300">
            Software Engineer | Full-Stack Developer | Problem Solver
          </p>
          <div className="mt-8 flex gap-3 justify-center md:justify-start">
            <a href="#projects" className="inline-flex items-center rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400">
              View My Work
            </a>
            <a href="/DominicKipkorir_Resume.pdf" className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/5">
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <div className="absolute -inset-2 bg-gradient-to-br from-sky-500 via-cyan-500 to-sky-600 rounded-full opacity-75 blur-lg animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/30 to-cyan-500/20 ring-2 ring-sky-400/50" />
            <img
              src="/profile.jpeg"
              alt="Dominic Kipkorir"
              className="relative z-10 h-full w-full rounded-full object-cover shadow-2xl shadow-sky-500/50"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

function About() {
  return (
    <Section id="about">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-400 text-center">About Me</h2>
      <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-center">
        I’m a motivated junior software developer with a strong foundation in software engineering and hands-on
        experience building full-stack applications. A recent Software Engineering graduate from Moringa School,
        skilled in React, JavaScript, Python, Flask, SQL, and API integration. I’m passionate about developing
        scalable, user-centered solutions and thrive in collaborative, fast-paced environments that promote
        innovation and continuous learning.
      </p>
      <div className="mt-8 grid grid-cols-3 max-w-xl gap-6 mx-auto">
        <div className="group rounded-lg border border-sky-500/30 bg-slate-800/40 p-4 text-center transition-colors hover:border-sky-400 hover:bg-slate-800/60">
          <div className="text-3xl font-bold text-sky-400 transition-colors group-hover:text-sky-300">10+</div>
          <div className="text-sm text-slate-400 transition-colors group-hover:text-slate-300">Projects Completed</div>
        </div>
        <div className="group rounded-lg border border-sky-500/30 bg-slate-800/40 p-4 text-center transition-colors hover:border-sky-400 hover:bg-slate-800/60">
          <div className="text-3xl font-bold text-sky-400 transition-colors group-hover:text-sky-300">3+</div>
          <div className="text-sm text-slate-400 transition-colors group-hover:text-slate-300">Years of Learning & Practice</div>
        </div>
        <div className="group rounded-lg border border-sky-500/30 bg-slate-800/40 p-4 text-center transition-colors hover:border-sky-400 hover:bg-slate-800/60">
          <div className="text-3xl font-bold text-sky-400 transition-colors group-hover:text-sky-300">3+</div>
          <div className="text-sm text-slate-400 transition-colors group-hover:text-slate-300">Collaborative Team Projects</div>
        </div>
      </div>
    </Section>
  )
}

function Skills() {
  const skillsCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJsSquare },
        { name: 'React.js', icon: FaReact },
        { name: 'TailwindCSS', icon: SiTailwindcss },
        { name: 'Next.js', icon: SiNextdotjs },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'Node.js', icon: FaNode },
        { name: 'Django', icon: SiDjango },
        { name: 'Flask', icon: SiFlask },
        { name: 'Express.js', icon: SiExpress },
        { name: 'RESTful APIs', icon: FaLink },
      ],
    },
    {
      category: 'Database Management',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
        { name: 'SQL', icon: FaDatabase },
        { name: 'Elasticsearch', icon: SiElasticsearch },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython },
        { name: 'JavaScript', icon: FaJsSquare },
        { name: 'C++', icon: SiC },
        { name: 'C', icon: SiC },
        { name: 'Java', icon: FaCoffee },
      ],
    },
    {
      category: 'Graphics & Visualization',
      skills: [
        { name: 'OpenGL', icon: SiOpengl },
        { name: 'WebGL', icon: FaCube },
        { name: '3D Graphics', icon: FaCube },
        { name: 'Three.js', icon: FaCube },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: FaGit },
        { name: 'GitHub', icon: FaGit },
        { name: 'Docker', icon: FaDocker },
        { name: 'Webpack', icon: SiWebpack },
        { name: 'Vite', icon: SiVite },
        { name: 'npm', icon: SiNpm },
      ],
    },
  ]
  return (
    <Section id="skills">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center">My Skills</h2>
      <p className="text-slate-400 text-center mt-2">Technologies have been working with recently</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsCategories.map((cat) => (
          <div key={cat.category} className="rounded-2xl border border-sky-500/30 bg-slate-800/50 p-6 hover:shadow-lg hover:shadow-sky-500/10 transition">
            <h3 className="text-lg font-semibold text-sky-400 mb-5">{cat.category}</h3>
            <div className="space-y-3">
              {cat.skills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <div key={skill.name} className="flex items-center gap-3">
                    {IconComponent ? (
                      <IconComponent className="h-5 w-5 text-sky-400 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 rounded bg-sky-500/20 flex-shrink-0" />
                    )}
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-400 text-center">Experience</h2>
      <div className="mt-8 max-w-4xl mx-auto space-y-6">
        <div className="rounded-lg border border-sky-500/30 bg-slate-800/50 p-6 hover:shadow-lg hover:shadow-sky-500/10 transition">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Freelance Developer</h3>
              <p className="text-sky-400 font-medium mt-1">Fiverr</p>
              <p className="text-sm text-slate-400 mt-2">Jun 2024 - Present</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 px-3 py-1 text-xs font-semibold mt-3 md:mt-0">Active</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span>Delivered 5+ high-quality projects with 5.0 rating and excellent client feedback</span>
            </li>
            <li className="flex gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span>Specialized in computer graphics, OpenGL, WebGL, and interactive 3D web applications</span>
            </li>
            <li className="flex gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span>Developed full-stack applications with React, Python, and database management</span>
            </li>
            <li className="flex gap-2">
              <span className="text-sky-400 mt-1">•</span>
              <span>Consistently delivered projects on time with thorough documentation and bug-free code</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Skills: Python, JavaScript, React, OpenGL, WebGL, C++, SQL, Flask, Django, HTML5, CSS3
          </p>
          <a
            href="https://www.fiverr.com/s/lj4gx6R"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-md bg-sky-500 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-400"
          >
            View Fiverr Profile
          </a>
        </div>
      </div>
    </Section>
  )
}

function Projects() {
  const items = [
    {
      title: 'Automated E-commerce System (In Progress)',
      status: 'In Progress',
      desc:
        'Custom automatic e-commerce platform with crawler, multi-endpoint APIs, PostgreSQL + Elasticsearch, Stripe, email automation, and ML components.',
      tech: 'FastAPI, Scrapy + Playwright, PostgreSQL, Elasticsearch, Redis, Stripe, SendGrid, Docker',
      link: 'https://github.com/Harshpal01/automated-ecommerce-platform',
      img: '/vite.svg',
    },
    {
      title: 'Skill Swap Platform',
      desc:
        'A peer-to-peer learning platform enabling users to teach and learn various skills from each other. Built for seamless discovery, scheduling, and authentication.',
      tech: 'Node.js, JavaScript, MongoDB, HTML, CSS',
      link: 'https://github.com/Harshpal01/SkillSwap-Project',
      img: '/skillswap.jpg',
    },
    {
      title: 'Shop Mate E-commerce',
      desc:
        'A collaborative household shopping list system with real-time updates and family sharing, using WebSockets for instant synchronization.',
      tech: 'React, Node.js, Socket.io, JavaScript, HTML, CSS',
      link: 'https://github.com/J-JMN/Phase2-Group6-project',
      img: '/shopmate.jpg',
    },
    {
      title: 'ENA Consult Ltd',
      desc:
        'Professional consulting company website with modern design, service offerings showcase, team profiles, and client testimonials. Built for corporate presence and client engagement.',
      tech: 'React, Node.js, JavaScript, HTML, CSS, MongoDB',
      link: 'https://github.com/Harshpal01/ENA-Consult-Ltd',
      img: '/enaconsulting.png',
    },
    {
      title: 'Math Tutor Booking',
      desc:
        'Online tutoring platform enabling students to book math tutoring sessions with qualified instructors. Features scheduling, payment integration, and student-tutor matching system.',
      tech: 'React, Node.js, JavaScript, MongoDB, Stripe, HTML, CSS',
      link: 'https://github.com/Harshpal01/Math-tutor-booking',
      img: '/math.png',
    },
  ]
  return (
    <Section id="projects">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-400 text-center">My Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((p) => (
          <div key={p.title} className="rounded-2xl border border-sky-500/30 bg-slate-800/50 overflow-hidden hover:shadow-lg hover:shadow-sky-500/10 transition">
            <div className="relative aspect-[16/9] bg-slate-900/40">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              {p.status && (
                <span className="absolute top-2 left-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">
                  {p.status}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              {p.tech && <p className="mt-2 text-xs text-slate-400">Technologies: {p.tech}</p>}
              <div className="mt-4 flex gap-3">
                {p.link ? (
                  <a
                    className="inline-flex items-center rounded-md bg-sky-500 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-400"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300">
                    Repo coming soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'I deliver stunning, user-friendly websites and web applications tailored to your needs. From responsive landing pages to complex e-commerce platforms, I use modern technologies like React, Node.js, and Next.js to create seamless, fast-loading experiences. Every project is optimized for performance, accessibility, and SEO to ensure your online presence stands out.',
    },
    {
      title: 'UI/UX Design',
      desc: 'I create clean, modern, and accessible interfaces that users love. Using TailwindCSS and design best practices, I build intuitive layouts with smooth animations and interactions. Every design decision prioritizes user experience, ensuring your application is not just beautiful but also functional and easy to navigate.',
    },
    {
      title: 'Backend Development',
      desc: 'I build robust, scalable backend infrastructures that power your applications. Specializing in Node.js, Python, and Flask, I develop efficient APIs, implement secure authentication, and ensure your application handles high traffic seamlessly. My backend solutions are optimized for performance, reliability, and long-term scalability.',
    },
    {
      title: 'Database Management',
      desc: 'I design, manage, and optimize database systems for optimal performance and reliability. With expertise in both SQL databases (PostgreSQL, MySQL) and NoSQL solutions (MongoDB), I create efficient data structures, write complex queries, and implement best practices for data integrity and security. Your data is managed effectively and efficiently.',
    },
  ]
  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center">What I Offer</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-sky-500/30 bg-slate-800/50 p-6 hover:shadow-lg hover:shadow-sky-500/10 transition">
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ContactCard({ icon, title, subtitle, linkHref, linkText }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
        {icon}
      </div>
      <div className="mt-4">
        <div className="text-white font-semibold">{title}</div>
        {subtitle && <div className="text-sm text-slate-400 mt-1">{subtitle}</div>}
      </div>
      {linkHref && (
        <a href={linkHref} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sky-400 hover:text-sky-300 text-sm font-medium">
          {linkText || 'Send a message'}
        </a>
      )}
    </div>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Contact Me</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.4-4.11 11.626-11.626 11.626-2.31 0-4.457-.676-6.263-1.84.321.038.63.051.963.051 1.918 0 3.683-.652 5.088-1.75a4.105 4.105 0 01-3.834-2.845c.253.038.506.064.772.064.367 0 .734-.051 1.074-.14a4.098 4.098 0 01-3.287-4.019v-.051c.544.304 1.174.494 1.84.519A4.09 4.09 0 012.8 6.87c0-.76.203-1.454.557-2.063a11.652 11.652 0 008.457 4.29 4.626 4.626 0 01-.102-.94 4.09 4.09 0 017.08-2.8 8.06 8.06 0 002.595-.988 4.11 4.11 0 01-1.797 2.256 8.2 8.2 0 002.36-.63 8.813 8.813 0 01-2.42 2.3z" />
              </svg>
            }
            title="X (Twitter)"
            subtitle="@pkoorlangat"
            linkHref="https://x.com/pkoorlangat"
            linkText="Send a message"
          />
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M4 6h16v12H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            }
            title="Email"
            subtitle="Mail me"
            linkHref="mailto:pkoordominic@gmail.com"
            linkText="Send a message"
          />
          <ContactCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.93 11.93 0 0012.01 0C5.38 0 .02 5.36.02 11.98c0 2.11.55 4.17 1.6 6l-1.06 3.86 3.95-1.04a11.95 11.95 0 006 1.63h.01c6.62 0 11.98-5.36 11.98-11.98a11.9 11.9 0 00-3.98-8.97zM12 21.06h-.01a9.06 9.06 0 01-4.62-1.26l-.33-.2-2.93.77.78-2.86-.22-.34a9.03 9.03 0 01-1.38-4.89c0-5 4.07-9.06 9.07-9.06 2.43 0 4.72.95 6.44 2.66a9.02 9.02 0 012.63 6.41c0 5-4.07 9.07-9.06 9.07zm5.2-6.76c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.62.14-.18.27-.71.91-.87 1.1-.16.18-.32.2-.6.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.68-1.56-1.96-.16-.27-.02-.42.12-.56.13-.13.28-.34.42-.51.14-.18.18-.31.27-.52.09-.2.04-.39-.02-.54-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.35-.26.27-1 1-1 2.44s1.03 2.83 1.17 3.02c.14.18 2.02 3.08 4.89 4.32.68.29 1.22.46 1.64.59.69.22 1.31.19 1.8.12.55-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.2-.54-.34z" />
              </svg>
            }
            title="WhatsApp"
            subtitle="Chat on WhatsApp"
            linkHref="https://wa.me/254717543586"
            linkText="Send a message"
          />
        </div>

        <form
          className="space-y-4"
          action="https://formspree.io/f/xldodreo"
          method="POST"
          target="_blank"
          onSubmit={(e) => {
            // allow default submit; just show local success & reset
            setError(false)
            setSent(true)
            e.currentTarget.reset()
            setTimeout(() => setSent(false), 5000)
          }}
        >
          <input type="hidden" name="_subject" value="Portfolio contact" />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="w-full rounded-xl border border-sky-500/40 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-sky-500/40 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60"
            required
          />
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            className="w-full rounded-xl border border-sky-500/40 bg-slate-800/60 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400"
          >
            Send Message
          </button>
          {sent && (
            <div className="text-sm text-emerald-400" role="status" aria-live="polite">
              Message sent successfully. I will get back to you soon.
            </div>
          )}
          {error && (
            <div className="text-sm text-red-400" role="status" aria-live="polite">
              Failed to send message. Please try again later.
            </div>
          )}
        </form>
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans antialiased">
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <FloatingNav />
      <footer className="bg-slate-800/80 backdrop-blur border-t border-sky-500/20 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-base font-semibold text-sky-400">Quick links</h3>
          <nav className="mt-4 flex flex-col items-start gap-2 text-sm">
            <a href="#home" className="text-slate-300 hover:text-white">Home</a>
            <a href="#about" className="text-slate-300 hover:text-white">About Me</a>
            <a href="#experience" className="text-slate-300 hover:text-white">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
            <a href="#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact Me</a>
          </nav>
          <div className="mt-6 text-sm text-slate-400">
            © {new Date().getFullYear()} Dominic Kipkorir. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FloatingNav() {
  const items = [
    {
      href: '#home',
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
        </svg>
      ),
    },
    {
      href: '#about',
      label: 'About',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
        </svg>
      ),
    },
    {
      href: '#experience',
      label: 'Experience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 3v4M8 3v4" />
        </svg>
      ),
    },
    {
      href: '#projects',
      label: 'Projects',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
        </svg>
      ),
    },
    {
      href: '#services',
      label: 'Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <rect x="6" y="6" width="12" height="12" rx="2" />
        </svg>
      ),
    },
    {
      href: '#contact',
      label: 'Contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M4 6h16v12H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
  ]
  return (
    <nav className="fixed bottom-6 inset-x-0 z-50 flex justify-center">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/70 backdrop-blur px-3 py-2 shadow-lg shadow-black/20">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            aria-label={it.label}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {it.icon}
          </a>
        ))}
      </div>
    </nav>
  )
}
