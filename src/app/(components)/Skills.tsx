'use client'
import React from 'react'
import { Code2, Cloud, Database, Terminal, CheckCircle2, Cpu, Sparkles } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    title: 'Full-Stack & Languages',
    icon: Code2,
    accent: 'border-sky-200 hover:border-sky-400 hover:shadow-sky-100/50',
    iconBg: 'bg-sky-50 text-sky-600 border-sky-200',
    skills: [
      'TypeScript, JavaScript (ES6+) & Python',
      'C# & .NET Framework 4.6 (Desktop WinForms)',
      'Node.js, Express & REST / GraphQL APIs',
      'React 18, Next.js (App Router) & Angular',
      'Socket.io Real-Time Communications & tRPC'
    ]
  },
  {
    title: 'AI Engineering & Developer Tools',
    icon: Cpu,
    accent: 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100/50',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
    skills: [
      'LLM API Integration & OpenAI API (Vercel AI SDK v5)',
      'Prompt Engineering & Fast MVP Prototyping',
      'AI SDLC Tools (Cursor, Codex, Antigravity)',
      'Test-Driven Development (TDD with Jest)',
      'CERT-In & SOC2 Guidelines Secure Coding'
    ]
  },
  {
    title: 'Cloud, DevOps & Databases',
    icon: Database,
    accent: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100/50',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    skills: [
      'AWS Cloud (EC2, S3, RDS, IAM, CloudWatch)',
      'Docker Containerization & Multi-stage Builds',
      'Jenkins CI/CD Pipelines & Nginx Web Server',
      'PostgreSQL, MySQL & MongoDB NoSQL',
      'Redis In-Memory Caching & Session Store'
    ]
  }
]

const TECH_BADGES = [
  'TypeScript', 'Node.js', 'React', 'Next.js', 'Angular', 'Python', 'C# / .NET',
  'OpenAI API', 'Gen AI', 'Cursor', 'Vercel AI SDK', 'Jest (TDD)',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS EC2', 'AWS S3',
  'Docker', 'Jenkins CI/CD', 'Nginx', 'Socket.io', 'Tailwind CSS', 'System Design'
]

function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen bg-neutral-50 text-neutral-900 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Core Technical Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Technical Skills & AI Integration Capabilities
          </h2>
          <p className="mt-4 text-sm md:text-lg text-neutral-500 leading-relaxed">
            Full-stack web engineering, AI developer tooling, desktop application development, and resilient cloud architecture.
          </p>
        </div>

        {/* 3 Core Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-3xl bg-white border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${cat.accent}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3.5 rounded-2xl border ${cat.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{cat.title}</h3>
                </div>

                <ul className="space-y-3.5 text-sm text-neutral-600">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Infinite Scrolling Tech Marquee Ticker */}
        <div className="mt-20 relative w-full overflow-hidden rounded-2xl bg-white border border-neutral-200 p-6">
          <div className="animate-marquee gap-6">
            {TECH_BADGES.concat(TECH_BADGES).map((badge, bIdx) => (
              <div
                key={bIdx}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral-600 whitespace-nowrap hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills