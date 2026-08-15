'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Layers, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
gsap.registerPlugin(ScrollTrigger)

const RESUME_URL = "https://drive.google.com/file/d/1qjIFTZOujKh880hMby5Rk2ooE11-OD5w/view?usp=drive_link"

function Hero() {
  const pinDiv = useRef(null)

  return (
    <section
      ref={pinDiv}
      id="hero"
      className="relative w-full min-h-screen bg-white text-neutral-900 flex flex-col justify-center items-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-100/60 via-indigo-100/40 to-emerald-100/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <img
              src="/profile.png"
              alt="Rutwik Kashid"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-neutral-200 shadow-lg"
            />
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-neutral-900 mb-3">
          Rutwik Kashid
        </h1>

        {/* One-liner role */}
        <p className="text-lg sm:text-2xl font-medium text-neutral-500 mb-8">
          Software Engineer · 3+ Years · Full-Stack & Cloud
        </p>

        {/* Quick-scan skill pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            'Node.js', 'React', 'Next.js', 'TypeScript',
            'AWS', 'Docker', 'System Design',
            'SQL & NoSQL', 'REST / GraphQL'
          ].map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-neutral-100 border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Compact metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-neutral-900">3+</span>
            <p className="text-[11px] text-neutral-500 mt-0.5">Years Experience</p>
          </div>
          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-neutral-900">10+</span>
            <p className="text-[11px] text-neutral-500 mt-0.5">Live Production Systems</p>
          </div>
          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-neutral-900">Full-Stack</span>
            <p className="text-[11px] text-neutral-500 mt-0.5">End-to-End Delivery</p>
          </div>
          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
            <span className="text-xl sm:text-2xl font-extrabold text-neutral-900">Leader</span>
            <p className="text-[11px] text-neutral-500 mt-0.5">TAC Team Lead</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-all shadow-sm flex items-center gap-2"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </a>
          <Link
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-all shadow-lg flex items-center gap-2"
          >
            Get In Touch
          </Link>
          <Link
            href="#architecture"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-900 font-medium text-sm transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            System Design
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-neutral-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero