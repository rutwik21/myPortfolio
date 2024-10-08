'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const projects = useRef(null);
  const text = useRef(null);
  const work = useRef(null);
  const my = useRef(null);
  const project = useRef(null);
  const imgs = useRef(null);
useGSAP(()=>{
    let mm = gsap.matchMedia();
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: projects.current,
            start: '45% 50%',
            end: '400% 50%',
            pin:true,
            scrub: 1.5,
        }
    });
    tl.to(text.current, {
        height: '60vh'
    },'a')

    tl.to(work.current, {
        height: '60vh'
    },'a')
    tl.to(my.current, {
        left: 0,
    },'a')

    tl.to(project.current, {
        right: 0,
    },'a')
    tl.to(imgs.current, {
        marginTop: "-200%"
    })
    mm.add("(max-width:640px)",()=>{
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: projects.current,
        //         start: '10% 50%',
        //         end: '200% 50%',
        //         pin:true,
        //         scrub: 1.5,
        //         markers: true
        //     }
        // });
    
        tl.to(text.current, {
            height: '60vh'
        },'a')
    
        tl.to(work.current, {
            height: '60vh'
        },'a')
        tl.to(my.current, {
            left: 0,
        },'a')
    
        tl.to(project.current, {
            right: 0,
        },'a')
        tl.to(imgs.current, {
            marginTop: "-200%"
        })
    });
    

})

  return (
    <div ref={projects} className='flex items-center justify-center w-[100%] h-[100svh] bg-black'>
        <div ref={text} className='absolute w-[60vw] h-0 z-[9]'>
            <h1 ref={my} className='absolute top-0 left-[12%] md:left-[33%] translate-x-0 translate-y-[-50%] text-white text-[8vw] md:text-[4vw]'>My</h1>
            <h1 ref={project} className='absolute bottom-0 right-[10%] md:right-[30%] translate-x-0 translate-y-[50%] text-white text-[8vw] md:text-[4vw]'>Projects</h1>
        </div>
        <div ref={work} className=' overflow-hidden flex items-center justify-center w-[60vw] h-0 bg-white'>
            <div className='w-[100%] h-[60vh] bg-black overflow-hidden'>
                <div ref={imgs} className='w-[100%] mt-0 transition-all'>
                    <img className='w-[100%]' src='/startup.png'/>
                    <img className='w-[100%]' src='/brainwave.png'/>
                    <img className='w-[100%]' src='/furnfeet.jpg'/>
                    <img className='w-[100%]' src='/chat.png'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects