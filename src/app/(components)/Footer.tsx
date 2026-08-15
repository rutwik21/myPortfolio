'use client'
import React, { useState } from 'react'
import { Mail, Linkedin, Github, Copy, Check, MapPin, ArrowUpRight, FileText } from 'lucide-react'

const RESUME_URL = "https://drive.google.com/file/d/1qjIFTZOujKh880hMby5Rk2ooE11-OD5w/view?usp=drive_link"

function Footer() {
  const [copied, setCopied] = useState(false)
  const email = 'rutwikkashid000@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="relative w-full bg-neutral-950 text-white pt-24 pb-12 px-6 overflow-hidden border-t border-neutral-900">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-600/10 via-indigo-600/10 to-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Contact Hub Hero Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl text-center max-w-4xl mx-auto mb-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Opportunities
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-neutral-400 text-sm sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're looking for a Full-Stack Software Engineer, a Systems Architect, or a technical team leader, I'm always open to discussing new engineering challenges.
          </p>

          {/* Quick Copy Email Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/60 border border-white/10 text-neutral-200 text-sm font-mono">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>{email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-300" />}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 pt-8 border-t border-neutral-800">
            <a
              href="https://www.linkedin.com/in/rutwikkashid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-neutral-300 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/rutwik21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-neutral-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-neutral-400">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Pune, India</span>
            </div>
          </div>
        </div>

        {/* Minimal Copyright Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 pt-8 border-t border-neutral-900 gap-4">
          <p>© {new Date().getFullYear()} Rutwik Kashid. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Developed by me.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer