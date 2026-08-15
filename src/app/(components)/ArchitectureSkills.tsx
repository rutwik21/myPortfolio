'use client'
import React, { useState } from 'react'
import {
  Network,
  Cpu,
  Layers,
  Zap,
  Activity,
  Share2,
  Database,
  RefreshCw,
  Sliders,
  Gauge,
  ShieldCheck,
  Key,
  LogIn,
  Shield,
  Sparkles
} from 'lucide-react'

interface SkillBubble {
  id: string
  name: string
  shortLabel: string
  category: 'architecture' | 'messaging' | 'scalability' | 'security'
  icon: React.ElementType
  glowColor: string
  borderColor: string
  badgeColor: string
  description: string
  animationClass: string
  delay: string
  size: string
}

const SKILL_BUBBLES: SkillBubble[] = [
  {
    id: 'system-design',
    name: 'System Design',
    shortLabel: 'System Design',
    category: 'architecture',
    icon: Network,
    glowColor: 'shadow-[0_0_25px_rgba(56,189,248,0.4)]',
    borderColor: 'hover:border-sky-400',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    description: 'High Level Architecture, microservices decomposition, trade-off analysis & scalability planning.',
    animationClass: 'animate-bubble-slow',
    delay: '0s',
    size: 'md:w-56 md:h-36'
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    shortLabel: 'DSA',
    category: 'architecture',
    icon: Cpu,
    glowColor: 'shadow-[0_0_25px_rgba(168,85,247,0.4)]',
    borderColor: 'hover:border-purple-400',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: 'Optimal space/time complexity, graph algorithms, dynamic programming & memory optimization.',
    animationClass: 'animate-bubble-medium',
    delay: '0.8s',
    size: 'md:w-60 md:h-36'
  },
  {
    id: 'lld',
    name: 'Low Level Design (LLD)',
    shortLabel: 'LLD',
    category: 'architecture',
    icon: Layers,
    glowColor: 'shadow-[0_0_25px_rgba(99,102,241,0.4)]',
    borderColor: 'hover:border-indigo-400',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    description: 'Object-oriented design patterns, SOLID principles, clean modular abstractions & schema design.',
    animationClass: 'animate-bubble-fast',
    delay: '1.4s',
    size: 'md:w-56 md:h-36'
  },
  {
    id: 'redis',
    name: 'Redis Caching & Pub/Sub',
    shortLabel: 'Redis',
    category: 'messaging',
    icon: Zap,
    glowColor: 'shadow-[0_0_25px_rgba(244,63,94,0.4)]',
    borderColor: 'hover:border-rose-400',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    description: 'In-memory caching strategies, distributed locks, session storage & sub-millisecond data retrieval.',
    animationClass: 'animate-bubble-medium',
    delay: '0.3s',
    size: 'md:w-52 md:h-32'
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    shortLabel: 'Kafka',
    category: 'messaging',
    icon: Activity,
    glowColor: 'shadow-[0_0_25px_rgba(245,158,11,0.4)]',
    borderColor: 'hover:border-amber-400',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    description: 'Event streaming, partitioned event logs, pub-sub architectures & distributed event processing.',
    animationClass: 'animate-bubble-slow',
    delay: '1.1s',
    size: 'md:w-52 md:h-32'
  },
  {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    shortLabel: 'RabbitMQ',
    category: 'messaging',
    icon: Share2,
    glowColor: 'shadow-[0_0_25px_rgba(249,115,22,0.4)]',
    borderColor: 'hover:border-orange-400',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    description: 'AMQP message queuing, worker pools, task decoupling & message acknowledgment reliability.',
    animationClass: 'animate-bubble-fast',
    delay: '0.6s',
    size: 'md:w-48 md:h-32'
  },
  {
    id: 'sharding',
    name: 'Database Sharding',
    shortLabel: 'Sharding',
    category: 'scalability',
    icon: Database,
    glowColor: 'shadow-[0_0_25px_rgba(16,185,129,0.4)]',
    borderColor: 'hover:border-emerald-400',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    description: 'Horizontal data partitioning, key routing strategies, database federation & query distribution.',
    animationClass: 'animate-bubble-slow',
    delay: '1.6s',
    size: 'md:w-56 md:h-36'
  },
  {
    id: 'redundancy',
    name: 'Redundancy & High Availability',
    shortLabel: 'Redundancy & HA',
    category: 'scalability',
    icon: RefreshCw,
    glowColor: 'shadow-[0_0_25px_rgba(34,197,94,0.4)]',
    borderColor: 'hover:border-green-400',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    description: 'Fault tolerance, primary-replica replication, automatic failover & multi-region backup systems.',
    animationClass: 'animate-bubble-medium',
    delay: '0.4s',
    size: 'md:w-60 md:h-36'
  },
  {
    id: 'load-balancing',
    name: 'Load Balancing',
    shortLabel: 'Load Balancing',
    category: 'scalability',
    icon: Sliders,
    glowColor: 'shadow-[0_0_25px_rgba(20,184,166,0.4)]',
    borderColor: 'hover:border-teal-400',
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    description: 'Round-robin & weighted traffic distribution, layer 4/7 proxies, SSL termination & health checks.',
    animationClass: 'animate-bubble-fast',
    delay: '1.0s',
    size: 'md:w-52 md:h-32'
  },
  {
    id: 'rate-limiting',
    name: 'Rate Limiting & Throttling',
    shortLabel: 'Rate Limiting',
    category: 'scalability',
    icon: Gauge,
    glowColor: 'shadow-[0_0_25px_rgba(139,92,246,0.4)]',
    borderColor: 'hover:border-violet-400',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    description: 'Token bucket & sliding window algorithms, API protection, DDOS mitigation & quota management.',
    animationClass: 'animate-bubble-slow',
    delay: '0.2s',
    size: 'md:w-56 md:h-36'
  },
  {
    id: 'secure-coding',
    name: 'Secure Coding Practices',
    shortLabel: 'Secure Coding',
    category: 'security',
    icon: ShieldCheck,
    glowColor: 'shadow-[0_0_25px_rgba(132,204,22,0.4)]',
    borderColor: 'hover:border-lime-400',
    badgeColor: 'bg-lime-500/10 text-lime-400 border-lime-500/20',
    description: 'OWASP top 10 prevention, input sanitization, SQL injection defense & cryptographic data handling.',
    animationClass: 'animate-bubble-medium',
    delay: '1.2s',
    size: 'md:w-56 md:h-36'
  },
  {
    id: 'authn-authz',
    name: 'Authentication & Authorization',
    shortLabel: 'AuthN & AuthZ',
    category: 'security',
    icon: Key,
    glowColor: 'shadow-[0_0_25px_rgba(236,72,153,0.4)]',
    borderColor: 'hover:border-pink-400',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    description: 'RBAC/ABAC permission models, JWT session verification, token rotation & password hashing (argon2/bcrypt).',
    animationClass: 'animate-bubble-fast',
    delay: '0.5s',
    size: 'md:w-60 md:h-36'
  },
  {
    id: 'sso',
    name: 'Single Sign-On (SSO)',
    shortLabel: 'SSO',
    category: 'security',
    icon: LogIn,
    glowColor: 'shadow-[0_0_25px_rgba(168,85,247,0.4)]',
    borderColor: 'hover:border-purple-400',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: 'Enterprise identity federation, SAML 2.0, enterprise domain login & centralized identity providers.',
    animationClass: 'animate-bubble-slow',
    delay: '1.5s',
    size: 'md:w-52 md:h-32'
  },
  {
    id: 'oauth',
    name: 'OAuth 2.0 & OIDC',
    shortLabel: 'OAuth 2.0',
    category: 'security',
    icon: Shield,
    glowColor: 'shadow-[0_0_25px_rgba(59,130,246,0.4)]',
    borderColor: 'hover:border-blue-400',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description: 'Authorization code flows with PKCE, refresh tokens, scopes, and OpenID Connect identity layer.',
    animationClass: 'animate-bubble-medium',
    delay: '0.9s',
    size: 'md:w-52 md:h-32'
  }
]

type FilterCategory = 'all' | 'architecture' | 'messaging' | 'scalability' | 'security'

export default function ArchitectureSkills() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const [activeSkill, setActiveSkill] = useState<SkillBubble | null>(SKILL_BUBBLES[0])

  return (
    <section className="relative w-full min-h-screen bg-neutral-900 text-white py-24 px-4 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-sky-600/10 via-purple-600/10 to-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Backend Systems & Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            System Design & Engineering Competencies
          </h2>
          <p className="mt-4 text-sm md:text-lg text-neutral-400 leading-relaxed">
            High-throughput messaging, distributed scaling, resilient database infrastructure, & enterprise security patterns.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeFilter === 'all'
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
              }`}
            >
              All Concepts
            </button>
            <button
              onClick={() => setActiveFilter('architecture')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeFilter === 'architecture'
                  ? 'bg-sky-500 text-white border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:border-sky-500/50 hover:text-white'
              }`}
            >
              Architecture & Core CS
            </button>
            <button
              onClick={() => setActiveFilter('messaging')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeFilter === 'messaging'
                  ? 'bg-amber-500 text-white border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              Messaging & Caching
            </button>
            <button
              onClick={() => setActiveFilter('scalability')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeFilter === 'scalability'
                  ? 'bg-emerald-500 text-white border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:border-emerald-500/50 hover:text-white'
              }`}
            >
              Scalability & Infrastructure
            </button>
            <button
              onClick={() => setActiveFilter('security')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeFilter === 'security'
                  ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-neutral-800 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              Security & Identity
            </button>
          </div>
        </div>

        {/* Floating Bubbles Canvas */}
        <div className="relative min-h-[480px] md:min-h-[540px] w-full flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4">
          {SKILL_BUBBLES.map((skill) => {
            const IconComponent = skill.icon
            const isMatch = activeFilter === 'all' || activeFilter === skill.category
            const isSelected = activeSkill?.id === skill.id

            return (
              <div
                key={skill.id}
                style={{ animationDelay: skill.delay }}
                onClick={() => setActiveSkill(skill)}
                onMouseEnter={() => setActiveSkill(skill)}
                className={`group relative cursor-pointer flex items-center gap-3 px-5 py-3.5 rounded-2xl md:rounded-3xl border transition-all duration-500 backdrop-blur-md ${
                  skill.size
                } ${skill.animationClass} ${
                  isMatch
                    ? 'opacity-100 scale-100 bg-neutral-950/80 border-neutral-800 ' +
                      skill.borderColor +
                      ' hover:' +
                      skill.glowColor +
                      ' hover:scale-110 hover:z-10 hover:-translate-y-2'
                    : 'opacity-20 scale-90 bg-neutral-950/30 border-neutral-900/50 pointer-events-none'
                } ${isSelected ? 'z-5 border-white/40 ring-1 ring-white/20 ' + skill.glowColor : ''}`}
              >
                <div
                  className={`p-2.5 rounded-xl border transition-transform duration-300 group-hover:scale-110 ${skill.badgeColor}`}
                >
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs md:text-sm font-semibold text-white tracking-wide group-hover:text-sky-200 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-neutral-400 capitalize">
                    {skill.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Pulsing indicator dot */}
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-sky-400 group-hover:animate-ping" />
              </div>
            )
          })}
        </div>

        {/* Selected Skill Concept Card Detail */}
        {activeSkill && (
          <div className="mt-8 max-w-2xl mx-auto p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 backdrop-blur-xl shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${activeSkill.badgeColor}`}
              >
                {activeSkill.category.toUpperCase()}
              </span>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {activeSkill.name}
              </h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed mt-2">
              {activeSkill.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
