import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Header() {
  const softwareE = useRef(null);

    useGSAP(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: softwareE.current,
                start: 'top bottom',
                end: 'top center',
                scrub: 0.3,
                // markers: true
            }
        });

        tl.from(softwareE.current,{
            // position:'absolute',
            y: '66vh',
            // x:'-12vw',
            // y: '71.5vh',
            // x:'97svw',
            // x:'-15.5svw',
            // scale:1.8,
            scale:8,
            // yPercent: -150,
            ease: 'none',
            duration: 3,
            delay: 0.3
        })
    })
  return (
    <main className='bg-white fixed z-50 top-0 inset-x-0 h-16 p-16 border-b text-center flex justify-between'>
        <a  className='text-xl font-semibold mt-[-8px]'>{ "{ Full Stack Developer }" }</a>
        <a ref={softwareE} className='text-xl font-semibold mt-[-8px] relative left-[-90px]'>RUTWIK KASHID</a>
        <div className=' cursor-pointer mt-[-25px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
                <path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m1 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
            </svg>
        </div>
    </main>
  )
}

export default Header