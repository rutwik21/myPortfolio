'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { UserCheck, Server, Users, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)

const EDUCATION = [
  {
    degree: 'Bachelor of Computer Application in Management (BCA)',
    institution: 'BAMU University',
    location: 'Aurangabad, MH',
    period: '2018 – 2021',
    icon: GraduationCap
  }
]

const CERTIFICATIONS = [
  'Full Stack Development (MERN Stack) — sharpener.tech (2021 – 2022)',
  'Google Data Analytics Professional Certificate — Coursera (2021)',
  'Tableau Business Intelligence Certificate — Glance Learning (2021)'
]

const PILLARS = [
  {
    icon: Server,
    title: 'Production Ownership',
    badge: '3+ YOE Product Company',
    description: 'Managing production web applications and desktop tools end-to-end across development, automated deployment, debugging, and TDD testing.',
    accent: 'text-sky-600 border-sky-200 bg-sky-50',
    ring: 'group-hover:border-sky-300'
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    badge: 'TAC Team Lead (40 Org)',
    description: 'Leading a 5-member engineering team at Truecopy Credentials, coordinating company-wide organizational initiatives, and mentoring developers.',
    accent: 'text-indigo-600 border-indigo-200 bg-indigo-50',
    ring: 'group-hover:border-indigo-300'
  },
  {
    icon: ShieldCheck,
    title: 'AI & Security Standards',
    badge: 'CERT-In & SOC2 Compliant',
    description: 'Integrating Gen AI developer tools (4x SDLC efficiency) and enforcing CERT-In and SOC2 guidelines for secure code reviews.',
    accent: 'text-emerald-600 border-emerald-200 bg-emerald-50',
    ring: 'group-hover:border-emerald-300'
  }
]

function About() {
  const aboutSection = useRef(null)

  return (
    <section
      ref={aboutSection}
      id="about"
      className="relative w-full min-h-screen bg-neutral-100 text-neutral-900 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            Background & Leadership
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            About Me, Education & Leadership
          </h2>
          <p className="mt-4 text-sm md:text-lg text-neutral-500 leading-relaxed">
            Combining full-stack software development with AI-driven workflows, team leadership, and computer applications education.
          </p>
        </div>

        {/* Story Summary Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 mb-12 shadow-sm">
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            I'm a <strong className="text-neutral-900 font-semibold">Software Engineer with 3+ years of experience</strong> building scalable web microservices, desktop automation software, and AI-powered product features. My technical foundation spans JavaScript/TypeScript, Python, C# (.NET Framework), React, Next.js, Angular, Node.js, and cloud deployments on AWS and Docker.
          </p>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Currently at <strong className="text-sky-600 font-semibold">Truecopy Credentials</strong>, I also serve as <strong className="text-neutral-900 font-semibold">TAC Team Leader</strong> (managing team execution across a 40-person organization). I specialize in leveraging Gen AI developer tools (Cursor, OpenAI) to accelerate delivery while ensuring SOC2 and CERT-In security compliance.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`group p-8 rounded-3xl bg-white border border-neutral-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg ${item.ring}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border ${item.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Education</h3>
                <p className="text-xs text-neutral-400">Academic Background</p>
              </div>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 text-base">{edu.degree}</h4>
                <p className="text-sm font-semibold text-sky-600 mt-1">{edu.institution}</p>
                <div className="flex items-center justify-between text-xs text-neutral-400 mt-3 font-mono">
                  <span>{edu.location}</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Certifications</h3>
                <p className="text-xs text-neutral-400">Professional Upskilling</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-neutral-600">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About