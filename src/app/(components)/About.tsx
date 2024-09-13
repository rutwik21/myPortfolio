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
                start: 'top 70%',
                end: 'bottom 50%',
                scrub:1,
            },
            opacity: 1,
            yoyo:true
            
        })
        gsap.to(aboutMe.current,{
            scrollTrigger: {
                trigger: aboutMe.current,
                start: 'top 70%',
                end: 'bottom 50%',
                scrub:1,
            },
            opacity: 1,
            yoyo:true
            
        })
        gsap.to(about.current,{
            scrollTrigger: {
                trigger: about.current,
                start: 'top 70%',
                end: 'bottom 50%',
                scrub:1,
            },
            opacity: 1,
            yoyo:true
            
        })
    })
  return (
        <div ref={aboutSection} className='md:min-h-[100svh] min-h[60svh] relative opacity-0 bg-white py-32'>
            <div ref={aboutMe} className='text-gray-500 text-xl opacity-0 md:text-[2vw] text-center '>
                About me
            </div>
            <div className='text-[4vw] md:text-[1.8vw] font-thin md:m-24 m-6 text-center'>
                {/* <img  className='rounded-xl md:rounded-3xl md:mx-10 my-4 w-[85vw] md:w-[25vw]' src='/profile.png' alt='Image'/> */}
                <p ref={about} className='opacity-0'>
                    As a software engineer with over 1 year of experience,
                    I am proficient in utilizing modern tech stacks such as 
                    MERN (MongoDB, Express.js, React, Node.js) and 
                    MEAN (MongoDB, Express.js, Angular, Node.js) for 
                    web development projects. Additionally, 
                    I possess expertise in DevOps tools like Git, 
                    Jenkins((CI/CD) automation software), Docker 
                    and Kubernetes enabling efficient continuous 
                    integration and deployment processes. 
                    My experience extends to cloud platforms such as 
                    AWS, Azure, and Google Cloud Platform, 
                    where I have deployed and managed applications. 
                    Moreover, I have worked with various databases 
                    including relational databases like MySQL and PostgreSQL, 
                    as well as NoSQL databases like MongoDB, ensuring optimal 
                    data management and retrieval strategies.
                </p>
            </div>
        </div>
  )
}

export default About