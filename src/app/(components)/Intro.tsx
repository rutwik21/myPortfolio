'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {TextPlugin} from 'gsap/TextPlugin'
import React, { useRef, useState } from 'react'
gsap.registerPlugin(TextPlugin)

function Intro() {
    const name = useRef(null);
    const container = useRef(null);
    const [isComplete, setIsComplete] = useState(false);
    useGSAP(()=>{
        const tl = gsap.timeline();
        
        // tl.to(name.current, {
        //     duration: 1.5,
        //     text: "Bonjour",
        //     ease: "power3.out",
        //   });
        // tl.to(name.current, {
        //     duration: 1.5,
        //     text: "Ciao",
        //     ease: "power3.out",
        //   });
        // tl.to(name.current, {
        //     duration: 1.5,
        //     text: "Hola",
        //     ease: "power3.out",
        //   });
        tl.to(name.current, {
            duration: 1.5,
            text: "नमस्ते",
            ease: "power3.out",
          });
        tl.to(container.current,{
            y: '-100vh',
            duration: 2,
            delay: 0.3,
            onComplete: ()=>setIsComplete(true),
        })
    })
  return (
    <div className="ovrflow-hidden cursor-none">
      <div ref={container} className=' place-items-center absolute h-svh w-svw font-sans font-extralight text-3xl bg-black text-white z-20 flex justify-center '>
          <h2 className='text-6xl font-thin' ref={name}>Hello</h2>
      </div>

    </div>
  )
}

export default Intro