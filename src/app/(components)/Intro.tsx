'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {TextPlugin} from 'gsap/TextPlugin'
import React, { useRef } from 'react'
gsap.registerPlugin(TextPlugin)

function Intro() {
    const name = useRef(null);
    const container = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.to(name.current, {
            duration: 2,
            text: "RUTWIK KASHID",
            ease: "none",
          });
        tl.to(container.current,{
            y: '-100vh',
            duration: 2,
            delay: 0.3
        })
    })
  return (
    <div className="ovrflow-hidden ">
    <div ref={container} className=' absolute h-svh w-[98.9svw] font-sans font-extralight text-3xl bg-black text-white z-20 flex justify-center '>
        <h4 className='translate-y-[45%]' ref={name}></h4>
    </div>

    </div>
  )
}

export default Intro