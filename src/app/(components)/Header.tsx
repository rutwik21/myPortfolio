'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { Menu, X, Code2, Globe, ArrowUpRight } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)

const RESUME_URL = "https://drive.google.com/file/d/1qjIFTZOujKh880hMby5Rk2ooE11-OD5w/view?usp=drive_link"

function Header() {
  const menuElements = useRef(null)
  const menu = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showMenu = () => {
    if (!isMenuOpen) {
      gsap.to(menu.current, {
        translateY: 0,
        duration: 0.6,
        ease: 'power3.inOut'
      })
      setIsMenuOpen(true)
    } else {
      gsap.to(menu.current, {
        translateY: '-100%',
        duration: 0.6,
        ease: 'power3.inOut'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="relative">
      {/* Fullscreen Overlay Menu */}
      <div
        ref={menu}
        className="fixed top-0 left-0 w-full h-screen z-50 translate-y-[-100%] bg-neutral-950/95 backdrop-blur-2xl text-white flex flex-col justify-between p-8 md:p-16"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2 font-mono text-sm text-neutral-400">
            <Code2 className="w-4 h-4 text-sky-400" />
            <span>rutwik.kashid // navigation</span>
          </div>
          <button
            onClick={showMenu}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div
          ref={menuElements}
          className="flex flex-col items-end space-y-6 text-right my-auto"
        >
          {[
            { label: 'HOME', href: '#hero' },
            { label: 'WORK HISTORY', href: '#experience' },
            { label: 'CORE SKILLS', href: '#skills' },
            { label: 'SYSTEM DESIGN', href: '#architecture' },
            { label: 'PROJECTS', href: '#projects' },
            { label: 'ABOUT', href: '#about' },
            { label: 'CONTACT', href: '#contact' },
          ].map((item) => (
            <h4
              key={item.label}
              onClick={showMenu}
              className="text-4xl md:text-7xl font-bold tracking-tight text-neutral-500 hover:text-white hover:translate-x-[-10px] transition-all cursor-pointer"
            >
              <Link href={item.href}>{item.label}</Link>
            </h4>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-neutral-900 text-base font-semibold transition-all mt-4"
          >
            <span>VIEW RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-neutral-500 border-t border-white/10 pt-6 gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>Pune, India • Open to Opportunities</span>
          </div>
          <span>3+ Years Experience as Software Engineer</span>
        </div>
      </div>

      {/* Floating Top Header Bar — white glass for light hero */}
      <nav className="fixed top-0 left-0 w-full h-20 z-40 bg-white/80 backdrop-blur-xl border-b border-neutral-200 px-6 md:px-12 flex items-center justify-between text-neutral-900 transition-all">
        {/* Brand Mark */}
        <Link href="#hero" className="flex items-center gap-1.5 group">
          <span className="font-mono text-neutral-400 text-lg font-bold group-hover:text-sky-500 transition-colors">
            &lt;
          </span>
          <span className="font-extrabold text-base md:text-lg tracking-wider text-neutral-900">
            RUTWIK KASHID
          </span>
          <span className="font-mono text-neutral-400 text-lg font-bold group-hover:text-sky-500 transition-colors">
            /&gt;
          </span>
        </Link>

        {/* Action Buttons & Menu */}
        <div className="flex items-center gap-3 md:gap-4">
          <span className="hidden md:inline-block font-mono text-xs text-neutral-500 px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200">
            &#123; Software Engineer &#125;
          </span>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-700 text-white text-xs font-semibold tracking-wider transition-all shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </a>

          <button
            onClick={showMenu}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-900 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            aria-label="Open menu"
          >
            <span>Menu</span>
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header