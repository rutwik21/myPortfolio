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
  useGSAP(()=>{
    gsap.from(container.current,{
        overflow: 'hidden',
        delay: 3
    })
  });


  useEffect(() =>{

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
    <main ref={container} className="overflow-x-hidden">
      <Intro />
      <Cursor />
      <Header />
      <Hero />
      <CollabText />
      <Skills />
      <Footer />
    </main>
  );
}
