'use client';
import Hero from "./(components)/Hero";
import Header from "./(components)/Header";
import { useEffect, useRef, useState } from "react";
import Lenis from 'lenis';
import Cursor from "./(components)/Cursor";
import CollabText from "./(components)/CollabText";
import Skills from "./(components)/Skills";
import Footer from "./(components)/Footer";
import Intro from "./(components)/Intro";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Projects from "./(components)/Projects";
import About from "./(components)/About";
import ArchitectureSkills from "./(components)/ArchitectureSkills";
import Experience from "./(components)/Experience";

export default function Home() {

  const container = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenIntro');
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  }, []);

  useGSAP(() => {
    if (!showIntro) {
      gsap.set(container2.current, { opacity: 1 });
      return;
    }

    gsap.to(container2.current, {
      opacity: 1,
      delay: 3.5,
      duration: 2
    });
    gsap.from(container1.current, {
      overflow: 'hidden',
      delay: 3,
    });
  }, [showIntro]);
    
    
  useEffect(() => {
    global?.window?.scrollTo(0, 0)
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      
    })
    //@ts-ignore
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


  }, []);
  return (
    <main ref={container1} className="h-svh w-svw " >
      {showIntro && (
        <div ref={container}>
          <Intro />
        </div>
      )}
      <div ref={container2} id="fullContent" className={showIntro ? "opacity-0" : "opacity-100"}>
        <Cursor />
        <Header />
        <Hero />
        <CollabText />
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="architecture">
          <ArchitectureSkills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Footer />
        </div>
        
      </div>
    </main>
  );
}
