'use client';
import Hero from "./(components)/Hero";
import Header from "./(components)/Header";
import { useEffect, useState } from "react";
import Lenis from 'lenis';
import Cursor from "./(components)/Cursor";
import CollabText from "./(components)/CollabText";
import Skills from "./(components)/Skills";
import Footer from "./(components)/Footer";


export default function Home() {
  let [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() =>{
    // (
    //   async()=>{
    //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
    //     const locomotiveScroll = new LocomotiveScroll();
    //   }
    // )()

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    //@ts-ignore
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);


  return (
    <main>
      {screenWidth > 720 ? <Cursor /> : null}
      <Header />
      <Hero />
      <CollabText />
      <Skills />
      <Footer />
    </main>
  );
}
