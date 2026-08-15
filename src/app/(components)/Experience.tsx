'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Calendar, MapPin, Zap, Building2, CheckCircle2, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
  {
    company: 'Truecopy Credentials Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Nov 2024 – Present',
    location: 'Pune, India',
    badge: 'Current Role',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dotColor: 'from-white via-yellow-600 to-orange-600',
    summary: 'Building core product features, AI-powered SDLC integrations, high-performance Windows desktop tools, and CERT-In / SOC2 compliant secure APIs.',
    achievements: [
      'Delivered a production MVP in 2 days using prompt engineering, eliminating 100% of manual errors and saving 4+ hours of operational effort daily.',
      'Integrated AI developer tools (Cursor, Codex, Antigravity) into the SDLC, accelerating feature delivery and improving team efficiency by 4x.',
      'Developed a high-performance Windows desktop application using .NET (C#) to automate critical business workflows, directly increasing company revenue.',
      'Implemented Test-Driven Development (TDD) using Jest in Node.js, reducing production defects by 25% and accelerating release cycles.',
      'Enforced CERT-In & SOC2 secure coding standards and code reviews across internal and client-facing web microservices.',
      'Optimized Angular-based enterprise web application with reusable components, boosting load performance and user experience.'
    ],
    skills: ['Node.js', 'Angular', '.NET (C#)', 'Jest (TDD)', 'Gen AI / OpenAI', 'SOC2 Security', 'REST APIs', 'SQL']
  },
  {
    company: 'Dominance Tech IT Solution Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Sep 2023 – Oct 2024',
    location: 'Pune, India',
    badge: '1 Year 2 Mos',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    dotColor: 'from-sky-400 to-indigo-500',
    summary: 'Engineered enterprise internal management systems (CRM, LMS, PMS) and automated desktop utilities.',
    achievements: [
      'Developed custom CRM, LMS, and PMS platforms, improving internal operational efficiency by 80% and cutting infrastructure costs by 10%.',
      'Created a WinForms (C#) desktop utility for automated file conversion and DB backups, saving 30+ operational hours per week.',
      'Architected end-to-end full-stack applications utilizing Angular, Node.js, Express, and MySQL with TDD practices.',
      'Collaborated closely with stakeholders to refine requirements and maintain high system reliability.'
    ],
    skills: ['Angular', 'Node.js', 'Express', 'MySQL', 'C# / WinForms', '.NET 4.6', 'TDD', 'Bootstrap']
  }
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    if (!sectionRef.current) return

    // 1. Scrub timeline progress line as user scrolls down the section
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 0.5,
        }
      }
    )

    // 2. Animate each experience card into view on scroll
    cardsRef.current.forEach((card) => {
      if (!card) return

      const achievements = card.querySelectorAll('.achievement-item')
      const badges = card.querySelectorAll('.skill-badge')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      })

      tl.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          achievements,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          badges,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, stagger: 0.04, ease: 'back.out(1.7)' },
          '-=0.2'
        )
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full min-h-screen bg-neutral-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glow Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-gray-500  to-black blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            Work Experience & Impact
          </h2>
          <p className="mt-4 text-sm md:text-lg text-neutral-400 leading-relaxed">
            3+ years of engineering experience in product-based companies building full-stack applications, desktop tools, and AI SDLC integrations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-12">
          {/* Vertical Track Base Line */}
          <div className="absolute left-2 md:left-5 top-4 bottom-4 w-1 bg-neutral-800 rounded-full" />

          {/* Animated Scrubbing Laser Line */}
          <div
            ref={lineRef}
            className="absolute left-2 md:left-5 top-4 bottom-4 w-1 bg-gradient-to-b from-white via-yellow-600 to-orange-600 rounded-full origin-top shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          />

          {/* Experience Cards Stack */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                ref={(el) => { cardsRef.current[idx] = el }}
                className="relative pl-6 md:pl-10"
              >
                {/* Timeline Node Point Dot */}
                <div className={`absolute -left-[23px] md:-left-[39px] top-6 w-7 h-7 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center shadow-lg group hover:border-white transition-all`}>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.dotColor} animate-pulse`} />
                </div>

                {/* Main Card */}
                <div className="group relative p-8 sm:p-10 rounded-3xl bg-neutral-950/80 border border-neutral-800 backdrop-blur-xl hover:border-neutral-700 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
                  {/* Top Row: Role & Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">{exp.role}</h3>
                        <span className={`text-[11px] font-mono font-semibold px-3 py-0.5 rounded-full border ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sky-400 font-semibold text-base">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono">
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-neutral-300 my-6 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Achievements Bullet Points */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      Key Impact & Accomplishments
                    </h4>
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="achievement-item flex items-start gap-3 group/item">
                        <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 group-hover/item:text-emerald-400 transition-colors" />
                        <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed group-hover/item:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-850">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="skill-badge px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:border-sky-500/40 hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
