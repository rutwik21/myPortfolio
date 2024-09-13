'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Footer() {

    // const footer = useRef(null);
    // useGSAP(()=>{
    //     gsap.to(footer.current,{
    //         scrollTrigger: {
    //             trigger: footer.current,
    //             start: 'top bottom',
    //             end: 'top 0',
    //         },
    //         zIndex: -1,
    //         position: 'fixed',
    //         bottom: 0
    //     })
    // })
  return (
        <div className='w-[100%] bg-black text-white text-center p-3 overflow-x-hidden'>
            <div className="md:flex block mx-5 md:mx-0">
                <div >
                    <img className='rounded-xl md:rounded-3xl md:mx-10 my-4 w-[85vw] md:w-[25vw]' src="/profile.png" alt='profile' />
                </div>

                <div className='md:my-4 '>
                    <h1 className='text-[12vw] md:text-[9vw]  font-thin leading-none text-gray-300 text-start'>
                        LETS <br /> CONNECT
                    </h1>
                    <div className="flex gap-3">
                        <a href='https://www.linkedin.com/in/rut-wik' target='_' className=' hover:text-gray-400 py-2  text-[4vw] md:text-[1.8vw] cursor-pointer text-thin'>Linkedin</a>
                        <a href='https://github.com/rutwik21' target='_' className=' hover:text-gray-400 py-2  text-[4vw] md:text-[1.8vw] cursor-pointer text-thin'>Github</a>
                        <a href='https://www.instagram.com/rut_wik' target='_' className=' hover:text-gray-400 py-2  text-[4vw] md:text-[1.8vw] cursor-pointer text-thin'>Instagram</a>
                    </div>
                    <div className="md:flex md:gap-3 text-start md:text-center my-4 md:my-0">
                        <p className='text-gray-400 text-thin'>Email:  <a href='mailto:rutwikkashid000@gmail.com'>rutwikkashid000@gmail.com</a></p>
                        <p className='text-gray-400 text-thin'>Phone: +91 8149150448</p>

                        <p className='text-gray-400 text-thin'>Address: Pune, India</p>
                    </div>
                </div>
            </div>
            <div className="md:px-8 px-4 flex justify-between">
                <p className=' text-gray-400 text-thin'>@Rutwik Kashid</p>
                <div className='text-end'>
                    <p className=' text-gray-400 text-thin'>Designed by me</p>
                    <p className=' text-gray-400 text-thin'>Developed by me</p>

                </div>
            </div>

        </div>
  )
}

export default Footer