'use client';
import Hero from "./(components)/Hero";
import Header from "./(components)/Header";
import { useEffect } from "react";
import Lenis from 'lenis';
import Cursor from "./(components)/Cursor";
import CollabText from "./(components)/CollabText";
import Skills from "./(components)/Skills";
import Footer from "./(components)/Footer";


export default function Home() {
  useEffect(() =>{

    const lenis = new Lenis()

    //@ts-ignore
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);


  return (
    <main>
      <Cursor /> 
      <Header />
      <Hero />
      <CollabText />
      <Skills />
      <Footer />
    </main>
  );
}
