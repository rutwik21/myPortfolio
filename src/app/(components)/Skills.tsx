import React from 'react'

function Skills() {
    
  return (
    <div className='min-h-svh mb-20'>
        <div className='text-gray-500 text-3xl text-center pt-32'>
            SKILLS & SERVICES
        </div>
        <div className='mt-8'>
            <div className='text-black select-none text-[8vw] font-extrabold text-center p-3'>

                <div className='text-black select-none text-[8vw] font-extrabold text-center p-3'>
                    <a>
                        <span>Web</span> 
                        <span className=" inline-flex w-40 h-40 mx-4 align-middle">
                            <video preload="none" autoPlay={true} loop={true} playsInline={true} poster="https://davidhaz.com/images/web_development_placeholder.webp">
                            <source src="https://davidhaz.com/videos/web_develop.mp4" type="video/mp4"></source>
                            </video>
                        </span>
                        <span>development</span>
                    </a>

                </div>
                <div className='text-black select-none text-[8vw] font-extrabold text-center p-3'>
                    <a>
                        <span>Creative</span> 
                        <span className=" inline-flex w-40 h-40 mx-4 align-middle">
                            <video preload="none" autoPlay={true} loop={true} playsInline={true} poster="https://davidhaz.com/images/creative_coding_placeholder.webp">
                            <source src="https://davidhaz.com/videos/creative_coding.mp4" type="video/mp4" />
                            </video>
                        </span>
                        <span>coding</span>
                    </a>

                </div>
                <div className='text-black select-none text-[8vw] font-extrabold text-center p-3'>
                    <a>
                        <span>Solid</span> 
                        <span className=" inline-flex w-40 h-40 mx-4 align-middle">
                            <video  preload="none" autoPlay={true} loop={true} playsInline={true} poster="https://davidhaz.com/images/solid_engineering_placeholder.webp">
                            <source  src="https://davidhaz.com/videos/solid_engineering.mp4" type="video/mp4"></source>
                            </video>
                        </span>
                        <span>engineering</span>
                    </a>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills