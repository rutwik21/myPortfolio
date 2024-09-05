'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger)

function Header() {
  const softwareE = useRef(null);
  const menuElements = useRef(null);
  const menu = useRef(null);
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const showMenu = ()=>{
    if(!isMenuOpen){
        gsap.to(menu.current,{
            translateY: 0,
            duration: 1,
            // ease: 'power3.inOut'
        });
        setIsMenuOpen(true);
    }else{
        gsap.to(menu.current,{
            translateY: '-100%',
            duration: 1,
            // ease: 'power3.inOut'
        });
        setIsMenuOpen(false);
        
    }
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
            y: '73vh',
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
        <div ref={menu}  className=' overflow-hidden fixed top-0 z-20 translate-y-[-100%] h-svh w-svw bg-black text-white'>
            
            
            <div onClick={()=>{return showMenu()}} className=' cursor-pointer hidden md:block mt-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="absolute top-10 right-16  bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <div onClick={()=>{return showMenu()}} className=' cursor-pointer md:hidden mt-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="absolute top-16 right-11  bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>


            <div ref={menuElements} className=' absolute top-40 right-10 space-y-8 text-gray-500 text-4xl md:text-7xl text-right'>

                <h4 className=" hover:underline hover:text-white"><Link href='#about'>ABOUT</Link></h4>
                <h4 className=" hover:underline hover:text-white"><Link href='#skills'>SKILLS</Link></h4>
                <h4 className=" hover:underline hover:text-white"><Link href='#projects'>PROJECTS</Link></h4>
                <h4 className=" hover:underline hover:text-white"><Link href='#contact'>CONTACT</Link></h4>
                
            </div>


        </div>
        <div className='bg-white fixed z-10 top-0 inset-x-0 h-16 w-svw p-16 border-b text-center flex justify-between'>
            <a  className='md:text-xl font-semibold absolute top-16 left-11 '>{ "{ Full Stack Developer }" }</a>
            <div>
            <a ref={softwareE} className='hidden md:block text-xl font-semibold absolute left-[-15px] top-16 w-full text-center'>RUTWIK KASHID</a>

            </div>
            <div onClick={()=>{return showMenu()}} className='hidden md:block cursor-pointer absolute top-10 right-16 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m1 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
                </svg>
            </div>
            <div onClick={()=>{return showMenu()}} className='md:hidden cursor-pointer absolute top-16 right-11 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m1 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5M2.5 9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
                </svg>
            </div>
        </div>
    </main>
  )
}

export default Header