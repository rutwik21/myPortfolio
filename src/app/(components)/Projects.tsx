'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link2 } from 'lucide-react';
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
        marginTop: "-50%"
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
            marginTop: "-50%"
        })
    });
    

})

  return (
    // <>
    //     <div className="w-full max-w-4xl mx-auto p-4">
    //         {/* video container */}
    //         <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-black aspect-video">
    //             <video src='/furnfeet.mp4'className="absolute top-0 left-0 w-full h-full" controls />
    //         </div>
    //     </div>
    // </>


    <div ref={projects} className="flex items-center justify-center w-full h-[100svh] bg-black">

        {/* TEXT OVERLAY — ignore mouse events */}
        <div ref={text} className="absolute w-[60vw] h-0 z-[9] pointer-events-none">
            <h1 ref={my} className="absolute top-0 left-[12%] md:left-[33%] translate-y-[-50%] text-white text-[8vw] md:text-[4vw]">My</h1>
            <h1 ref={project} className="absolute bottom-0 right-[10%] md:right-[30%] translate-y-[50%] text-white text-[8vw] md:text-[4vw]">Projects</h1>
        </div>

        {/* IMAGE SECTION */}
        <div ref={work} className="overflow-hidden flex items-center justify-center w-[60vw] h-0 bg-white">
            <div className="w-full h-[60vh] bg-black overflow-hidden">
                <div ref={imgs} className="w-full mt-0">

                    {/* PROJECT ITEM */}
                    <div className="relative group cursor-pointer">
                        <img className="w-full transition-transform duration-500 group-hover:scale-110" src="/furnfeet.png" />
                        
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center
                                        opacity-0 group-hover:opacity-100 transition duration-300">
                        <a href='/projects/furnfeet' target='_1'><p className="text-white text-2xl font-semibold inline-flex gap-2 align-middle">Furnfeet <Link2 className='mt-1' /></p></a>
                        </div>
                        
                    </div>


                    <div className="relative group cursor-pointer">
                        <img className="w-full transition-transform duration-500 group-hover:scale-110" src="/replio.png" />
                        
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center
                                        opacity-0 group-hover:opacity-100 transition duration-300">
                        <a href='/projects/replio' target='_1'><p className="text-white text-2xl font-semibold inline-flex gap-2 align-middle">Replio <Link2 className='mt-1' /></p></a>
                        </div>
                    </div>


                    {/* <div className="relative group cursor-pointer">
                        <img className="w-full transition-transform duration-500 group-hover:scale-110" src="/furnfeet.jpg" />
                        
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center
                                        opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white text-2xl font-semibold">FurnFeet Store</p>
                        </div>
                    </div>


                    <div className="relative group cursor-pointer">
                        <img className="w-full transition-transform duration-500 group-hover:scale-110" src="/chat.png" />
                        
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center
                                        opacity-0 group-hover:opacity-100 transition duration-300">
                        <p className="text-white text-2xl font-semibold">Chat App</p>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </div>



    // <div ref={projects} className='flex items-center justify-center w-[100%] h-[100svh] bg-black'>
    //     <div ref={text} className='absolute w-[60vw] h-0 z-[9]'>
    //         <h1 ref={my} className='absolute top-0 left-[12%] md:left-[33%] translate-x-0 translate-y-[-50%] text-white text-[8vw] md:text-[4vw]'>My</h1>
    //         <h1 ref={project} className='absolute bottom-0 right-[10%] md:right-[30%] translate-x-0 translate-y-[50%] text-white text-[8vw] md:text-[4vw]'>Projects</h1>
    //     </div>
    //     <div ref={work} className=' overflow-hidden flex items-center justify-center w-[60vw] h-0 bg-white'>
    //         <div className='w-[100%] h-[60vh] bg-black overflow-hidden'>
    //             <div ref={imgs} className='w-[100%] mt-0 transition-all'>
    //                 <img className='w-[100%]' src='/startup.png'/>
    //                 <img className='w-[100%]' src='/brainwave.png'/>
    //                 <img className='w-[100%]' src='/furnfeet.jpg'/>
    //                 <img className='w-[100%]' src='/chat.png'/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Projects