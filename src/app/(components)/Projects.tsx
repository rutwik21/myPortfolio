'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowUpRight, FolderGit2, Bot, ShoppingCart, MessageSquare, DollarSign } from 'lucide-react'
import Link from 'next/link'
gsap.registerPlugin(ScrollTrigger)

const PROJECTS_DATA = [
  {
    id: 'replio',
    title: 'Replio — AI Chrome Extension',
    category: 'Gen AI & SaaS',
    icon: Bot,
    description: 'Chrome extension to generate AI-powered context-aware comments for LinkedIn posts. Built with Vercel AI SDK v5, OpenAI APIs, React, Node.js, Express, MongoDB, and Razorpay subscription payments.',
    highlights: [
      'Vercel AI SDK v5 & OpenAI API integration for intelligent context-aware comment generation',
      'Integrated Razorpay payment gateway for automated user subscriptions',
      'Built with React, Node.js, Express, and MongoDB backend'
    ],
    tags: ['React', 'Vercel AI SDK v5', 'OpenAI API', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    image: '/replio.png',
    link: '/projects/replio'
  },
  {
    id: 'furnfeet',
    title: 'Furnfeet — E-Commerce Platform',
    category: 'Full-Stack Web App',
    icon: ShoppingCart,
    description: 'Full-stack furniture e-commerce platform featuring an interactive product catalog, admin management dashboard, tRPC type-safe API communication, and Payload CMS.',
    highlights: [
      'Next.js dynamic front-end with Payload CMS for efficient product management',
      'Node.js & Express RESTful backend architecture with tRPC for end-to-end type safety',
      'Optimized load times and responsive design for high user engagement'
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Express', 'tRPC', 'Payload CMS', 'Tailwind CSS'],
    image: '/furnfeet.png',
    link: '/projects/furnfeet'
  },
  // {
  //   id: 'groupchat',
  //   title: 'Real-Time Group Chat Application',
  //   category: 'Real-Time & DevOps',
  //   icon: MessageSquare,
  //   description: 'High-performance real-time messaging application with Socket.io instant bi-directional events, MySQL persistence, Nginx reverse proxying, and automated Jenkins CI/CD deployment.',
  //   highlights: [
  //     'Socket.io real-time event-driven architecture for low-latency multi-user chats',
  //     'MySQL database schema for persistent message storage & user state management',
  //     'Nginx web server configuration and Jenkins CI/CD pipeline automation'
  //   ],
  //   tags: ['JavaScript', 'Node.js', 'Express', 'Socket.io', 'MySQL', 'Nginx', 'Jenkins CI/CD'],
  //   image: '/replio.png', // reusing existing asset or standard preview
  //   link: '#contact'
  // },
  // {
  //   id: 'expensetracker',
  //   title: 'Expense Tracker Application',
  //   category: 'Web App & Productivity',
  //   icon: DollarSign,
  //   description: 'Monthly financial management platform enabling users to track, edit, and analyze personal expenses with intuitive visual analytics.',
  //   highlights: [
  //     'Reduced average user expense tracking time by 40% with streamlined UX workflows',
  //     'Increased user engagement by 30% through intuitive dashboard design',
  //     'Built using Node.js, Express, MySQL, HTML5, CSS3, and Vanilla JavaScript'
  //   ],
  //   tags: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'HTML5/CSS3', 'REST API'],
  //   image: '/furnfeet.png',
  //   link: '#contact'
  // }
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-white text-neutral-900 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Projects
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Full-Stack & AI Product Showcase
          </h2>
          <p className="mt-4 text-sm md:text-lg text-neutral-500 leading-relaxed">
            Production-ready applications featuring AI SDKs, real-time WebSockets, e-commerce architectures, and automated CI/CD pipelines.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS_DATA.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-neutral-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Header & Image preview */}
                <div>
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 border border-neutral-200 text-xs font-semibold text-neutral-700 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-white border border-neutral-200 text-neutral-800">
                          <Icon className="w-5 h-5 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-sky-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {project.link.startsWith('/') ? (
                        <Link
                          href={project.link}
                          className="p-2 rounded-full bg-neutral-100 border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-all"
                          aria-label={`View ${project.title}`}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      ) : (
                        <a
                          href={project.link}
                          className="p-2 rounded-full bg-neutral-100 border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 mb-6 text-xs text-neutral-500">
                      {project.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="p-8 pt-4 border-t border-neutral-200">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects