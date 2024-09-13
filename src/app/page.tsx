'use client';
import Hero from "./(components)/Hero";
import Header from "./(components)/Header";
import { useEffect, useRef } from "react";
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

export default function Home() {

  const container = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  useGSAP(()=>{
    gsap.from(container2.current,{
      opacity: 0,
      delay: 3.5,
      duration: 2
    });
    gsap.from(container1.current,{
      overflow: 'hidden',
      delay: 3,
    });
  })
    
    
  useEffect(() =>{
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
      <div ref={container} >
        <Intro />
      </div>
      <div ref={container2} id="fullContent">
        <Cursor />
        <Header />
        <Hero />
        <CollabText />
        <div id="skills">
          <Skills />
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
