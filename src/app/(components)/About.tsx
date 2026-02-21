'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function About() {

    const aboutSection = useRef(null);
    const aboutMe = useRef(null);
    const about = useRef(null);
    useGSAP(()=>{
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: aboutSection.current,
        //         start: 'top 70%',
        //         end: 'bottom 50%',
        //     },

        // });
        gsap.to(aboutSection.current,{
            scrollTrigger: {
                trigger: aboutSection.current,
                start: 'top 200%',
                end: 'bottom 70%',
                scrub:1,
            },
            opacity: 1,
            yoyo:true
            
        })
        gsap.to(aboutMe.current,{
            scrollTrigger: {
                trigger: aboutMe.current,
                start: 'top 200%',
                end: 'bottom 70%',
                scrub:1,
            },
            opacity: 1,
            yoyo:true
            
        })
        gsap.to(about.current,{
            scrollTrigger: {
                trigger: about.current,
                start: 'top 200%',
                end: 'bottom 70%',
                scrub:1,
            },
            opacity: 1,
            yoyo:true
            
        })
    })
  return (
        <div ref={aboutSection} className='md:min-h-[100svh] min-h-[60svh] relative opacity-0 bg-white py-32'>
            <div ref={aboutMe} className='text-gray-500 text-xl opacity-0 md:text-[2vw] text-center '>
                About me
            </div>
            <div className='text-[4vw] md:text-[1.8vw] font-thin md:m-24 m-6 text-center px-52'>
                {/* <img  className='rounded-xl md:rounded-3xl md:mx-10 my-4 w-[85vw] md:w-[25vw]' src='/profile.png' alt='Image'/> */}
                <p ref={about} className='opacity-0'>
                    I’m a Software Engineer with 2.5+ years of experience building and maintaining reliable, production-ready applications in a product-based environment. I currently manage two live systems end-to-end, working across development, deployment, debugging, and continuous improvements, which has strengthened my focus on scalability, stability, and real user impact.
                    <br />
                    <br />
                    My background includes full-stack development with the MERN and MEAN stacks, along with hands-on experience in Docker, AWS (EC2 & S3), Git, and C# Windows applications. Beyond Web2 systems, I’m actively expanding into Web3, exploring the Solana blockchain and decentralized application development, with a strong interest in building real-world products that combine cloud infrastructure with decentralized technologies.
                    <br />
                    <br />

                    Alongside engineering, I also serve as a TAC Team Leader, handling team coordination, people management, and organizational initiatives. I’m driven by curiosity, ownership, and a constant goal to build software that is reliable today and ready for the technologies of tomorrow.
                </p>
            </div>
        </div>
  )
}

export default About