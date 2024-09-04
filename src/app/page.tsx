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

export default function Home() {

  const container = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  useGSAP(()=>{
    gsap.from(container2.current,{
      opacity: 0,
      delay: 7.2,
      duration: 2
    });
    gsap.from(container1.current,{
      overflow: 'hidden',
      delay: 7.6,
    });
  })
    
    
  useEffect(() =>{
    window.scrollTo(0, 0)
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
      <div ref={container2}>
        <Cursor />
        <Header />
        <Hero />
        <CollabText />
        <Skills />
        <Footer />
      </div>
    </main>
  );

  
}
