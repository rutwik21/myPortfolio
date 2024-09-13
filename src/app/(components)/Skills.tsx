'use client'
import React from 'react'

function Skills() {
    
  return (
    <div className='md:min-h-[100svh] min-h[60svh] relative bg-white py-32'>
        <div className='text-gray-500 text-xl md:text-[2vw] text-center '>
            SKILLS & SERVICES
        </div>
        <div className='mt-8'>
            <div className='text-black select-none text-[7vw] font-extrabold text-center p-3'>

                <div className='text-black select-none font-extrabold text-center p-3'>
                    <a>
                        <span>Web</span> 
                        <span className=" inline-flex w-20 h-20 md:w-40 md:h-40 mx-4 align-middle rounded-3xl ">
                            <video preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/web_development_placeholder.webp">
                            <source src="https://davidhaz.com/videos/web_develop.mp4" type="video/mp4"></source>
                            </video>
                        </span>
                        <span>development</span>
                    </a>

                </div>
                <div className='text-black select-none font-extrabold text-center p-3'>
                    <a>
                        <span>Creative</span> 
                        <span className=" inline-flex w-20 h-20 md:w-40 md:h-40 mx-4 align-middle rounded-3xl ">
                            <video preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/creative_coding_placeholder.webp">
                            <source src="https://davidhaz.com/videos/creative_coding.mp4" type="video/mp4" />
                            </video>
                        </span>
                        <span>coding</span>
                    </a>

                </div>
                <div className='text-black select-none font-extrabold text-center p-3'>
                    <a>
                        <span>Solid</span> 
                        <span className=" inline-flex w-20 h-20 md:w-40 md:h-40 mx-4 align-middle rounded-3xl ">
                            <video preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/solid_engineering_placeholder.webp">
                            <source src="https://davidhaz.com/videos/solid_engineering.mp4" type="video/mp4"></source>
                            </video>
                        </span>
                        <span>engineering</span>
                    </a>

                </div>

            </div>
        </div>
        <div className='h-32'>

        </div>
        <div className='w-[100%] absolute bottom-0 h-28 flex justify-center items-center gap-4 md:gap-10 text-xl md:text-4xl font-medium text-white text-opacity-40 bg-slate-600 mt-24 overflow-hidden'>
            <h1>Nodejs</h1>
            <h1>React</h1>
            <h1>Nextjs</h1>
            <h1>Express</h1>
            <h1>MySql</h1>
            <h1>Mongodb</h1>
        </div>
    </div>
  )
}

export default Skills