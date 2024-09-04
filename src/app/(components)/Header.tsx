'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Header() {
  const softwareE = useRef(null);
  const menu = useRef(null);
  const showMenu = ()=>{
    gsap.to(menu.current,{
        translateY: 0,
        duration: 1,
        // ease: 'power3.inOut'
    })
  }

    useGSAP(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: softwareE.current,
                start: 'top bottom',
                end: 'top center',
                scrub: 0.3,
            }
        });

        tl.from(softwareE.current,{
            y: '66vh',
            // y:()=>{
            //     const y = ((66/100) * window.innerHeight)
            //     console.log((window.innerHeight - 735))
            //     return y;
            // },
            scale:8,
            ease: 'none',
            duration: 3,
            delay: 0.3
        })
    })
  return (
    <main >
        <div ref={menu} className=' absolute top-0 z-20 translate-y-[-100%] h-svh w-svw bg-black text-white'>

        </div>
        <div className='bg-white fixed z-10 top-0 inset-x-0 h-16 p-16 border-b text-center flex justify-between'>
            <a  className='text-xl font-semibold mt-[-8px]'>{ "{ Full Stack Developer }" }</a>
            <a ref={softwareE} className='text-xl font-semibold mt-[-8px] relative left-[-90px]'>RUTWIK KASHID</a>
            <div onClick={()=>{return showMenu()}} className=' cursor-pointer mt-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m1 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
                </svg>
            </div>
        </div>
    </main>
  )
}

export default Header