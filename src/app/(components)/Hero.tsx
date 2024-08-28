'use client'
import React, { useRef } from 'react'
import MaxWidthRapper from './MaxWidthRapper'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Hero() {
    let pinDiv = useRef(null);
    useGSAP(()=>{
        gsap.to(pinDiv.current,{
            position: 'sticky',
            start: 'top bottom',
            end: 'center bottom',
        })
    })
    
     
  return (
    <MaxWidthRapper >
        <main ref={pinDiv} className='w-full h-svh flex items-center justify-center mb-36'>
            <div className='text-center'>
                    {/* <h1 className='text-5xl mt-48 md:text-9xl view select-none'> Rutwik Kashid </h1> */}
                    <p className='text-xl md:text-3xl text-center mt-6 select-none'>I'm a creative <span className='font-semibold'>Full stack developer</span>  who loves to build websites.</p>
                <div className="text-center">

                </div>
                <div className='flex justify-center absolute right-[50%] left-[50%] bottom-8' >
                    <div className='opacity-30 '>
                        <iframe className='w-16 md:w-24' src="https://lottie.host/embed/2d03a033-800a-4050-8ad5-97053bb291d5/mezgXRihSF.json"></iframe>
                        <p className='text-center text-xs md:text-sm'>Scroll Down</p>

                    </div>
                </div>
            </div>
        </main>
    </MaxWidthRapper>
  )
}

export default Hero