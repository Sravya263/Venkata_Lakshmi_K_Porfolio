import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, GraduationCap, Briefcase, Cpu, Layout, ArrowDown, Download } from 'lucide-react'

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/venkata-lakshmi-680382375/',
  github: '#', // TODO: add your GitHub profile
  email: 'ksravya047@gmail.com',
  phone: '+1-678-680-8684',
  resume: '#', // TODO: add a link to your resume PDF
}

const PROJECTS = [
  {
    title: 'Predict Future Software Usage',
    tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    description:
      'Regression-based model forecasting license usage from historical activity (dept, software type, license category) enabling proactive planning and optimized distribution.',
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Vision-Language Transformer for Chest X-ray Reports',
    tags: ['PyTorch', 'Transformers', 'NLP', 'CV'],
    description:
      'VLT system combining image encoders with transformer decoders to generate diagnostic reports; evaluated with BLEU/ROUGE for consistency and speed.',
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'CANet: Cascade Attention CNN for Skin Cancer Detection',
    tags: ['TensorFlow', 'Attention', 'ISIC'],
    description:
      'Attention-enhanced CNN (spatial/channel/gated) achieving strong melanoma classification performance versus baseline CNNs.',
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Interactive Research Analytics Portal',
    tags: ['React', 'REST APIs', 'Dashboards'],
    description:
      'Responsive web portal with reusable components to visualize research & administrative data in real time.',
    links: [{ label: 'Case study', href: '#' }],
  },
]

const EXPERIENCE = [
  {
    role: 'Graduate Research Assistant',
    company: 'Georgia State University – College of Arts and Sciences',
    period: 'Aug 2023 – May 2025',
    bullets: [
      'Built responsive React dashboards and modular templates backed by RESTful APIs.',
      'Automated data publishing and reporting workflows with Python/SQL/Excel.',
      'Integrated APIs for real-time insights; improved reporting accuracy and cycle time.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Hexaware Technologies',
    period: 'Mar 2021 – Jul 2023',
    bullets: [
      'Delivered web & mobile apps using React, React Native, TypeScript, and Python.',
      'Designed core architecture, optimized APIs, and championed reusable UI components.',
      'Integrated analytics/monitoring; improved reliability, performance, and UX at scale.',
    ],
  },
]

const EDUCATION = [
  { school: 'Georgia State University', degree: 'M.S. in Computer Science (GPA 3.65/4.0)', period: 'Aug 2023 – May 2025' },
  { school: 'KL University, India', degree: 'B.Tech in Computer Science (GPA 9.00/10)', period: 'Apr 2019 – May 2023' },
]

const SKILLS = [
  { title: 'Frontend', items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'] },
  { title: 'Backend & Data', items: ['Python', 'Django', 'REST APIs', 'Node.js', 'SQL', 'PostgreSQL', 'MySQL'] },
  { title: 'ML/AI', items: ['TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'NLP', 'Computer Vision'] },
  { title: 'DevOps & Tools', items: ['Git', 'AWS', 'Jenkins', 'CI/CD', 'Power BI', 'Excel'] },
]

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-700 bg-white">
    {children}
  </span>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border bg-white/80 shadow ${className}`}>{children}</div>
)

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">Sravya</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Hi, I’m Sravya —
              <span className="block text-slate-700">Software Engineer crafting intelligent, scalable apps.</span>
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              3+ years building web & mobile experiences with React, TypeScript, and Python — with a passion for data & ML
              to enhance usability, automation, and decision-making.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>React</Pill><Pill>TypeScript</Pill><Pill>Python</Pill><Pill>REST APIs</Pill><Pill>TensorFlow</Pill><Pill>PyTorch</Pill>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm">
                <ArrowDown className="w-4 h-4" /> Explore Projects
              </a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="md:justify-self-end">
            <Card className="max-w-md md:ml-auto shadow-xl">
              <div className="p-6">
                <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Cpu className="w-5 h-5" /> Featured Stack
                </div>
                <div className="text-sm text-slate-600 grid grid-cols-2 gap-3">
                  <div>
                    <div className="font-semibold mb-1">Frontend</div>
                    <ul className="space-y-1 list-disc list-inside"><li>React</li><li>TypeScript</li><li>Tailwind</li></ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Backend</div>
                    <ul className="space-y-1 list-disc list-inside"><li>Python</li><li>Django</li><li>REST APIs</li></ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">ML/AI</div>
                    <ul className="space-y-1 list-disc list-inside"><li>TensorFlow</li><li>PyTorch</li><li>Hugging Face</li></ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Tools</div>
                    <ul className="space-y-1 list-disc list-inside"><li>AWS</li><li>Jenkins</li><li>Power BI</li></ul>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8"><Layout className="w-6 h-6"/><h2 className="text-2xl md:text-3xl font-semibold">Projects</h2></div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <Card className="h-full shadow-lg">
                <div className="p-6">
                  <div className="text-lg font-semibold mb-2">{p.title}</div>
                  <p className="text-slate-600 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{p.tags.map((t) => <Pill key={t}>{t}</Pill>)}</div>
                  <div className="flex gap-3">
                    {p.links?.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                        <ExternalLink className="w-4 h-4" /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8"><Briefcase className="w-6 h-6"/><h2 className="text-2xl md:text-3xl font-semibold">Experience</h2></div>
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((e) => (
            <Card key={e.role} className="shadow-lg">
              <div className="p-6">
                <div className="text-lg font-semibold">{e.role} · <span className="font-normal text-slate-600">{e.company}</span></div>
                <div className="text-sm text-slate-500 mb-3">{e.period}</div>
                <ul className="space-y-2 list-disc list-inside text-slate-700">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8"><Cpu className="w-6 h-6"/><h2 className="text-2xl md:text-3xl font-semibold">Skills</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s) => (
            <Card key={s.title} className="shadow-lg">
              <div className="p-6">
                <div className="text-lg font-semibold mb-3">{s.title}</div>
                <div className="flex flex-wrap gap-2">{s.items.map((item) => <Pill key={item}>{item}</Pill>)}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8"><GraduationCap className="w-6 h-6"/><h2 className="text-2xl md:text-3xl font-semibold">Education</h2></div>
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((ed) => (
            <Card key={ed.school} className="shadow-lg">
              <div className="p-6">
                <div className="text-lg font-semibold">{ed.school}</div>
                <div className="text-sm text-slate-500">{ed.period}</div>
                <p className="text-slate-700 mt-2">{ed.degree}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8"><Mail className="w-6 h-6"/><h2 className="text-2xl md:text-3xl font-semibold">Contact</h2></div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg">
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4" />
                <a className="hover:underline" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4" />
                <a className="hover:underline" href={`tel:${LINKS.phone}`}>{LINKS.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Linkedin className="w-4 h-4" />
                <a className="hover:underline" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </Card>
          <Card className="shadow-lg">
            <div className="p-6 space-y-3">
              <div className="text-lg font-semibold">Quick note</div>
              <input placeholder="Your name" className="w-full border rounded-lg px-3 py-2" />
              <input type="email" placeholder="your@email.com" className="w-full border rounded-lg px-3 py-2" />
              <textarea placeholder="Message" rows="5" className="w-full border rounded-lg px-3 py-2" />
              <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm">Send</button>
              <p className="text-xs text-slate-500">(Hook this form to an email/API service like Formspree, Resend, or AWS SES.)</p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Sravya · Built with React, Tailwind, and Vite.
        </div>
      </footer>
    </div>
  )
}
