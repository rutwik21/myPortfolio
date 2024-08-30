
import React from 'react'

function Footer() {
  return (
    <div className='w-[100%]  bg-black text-white text-center p-3'>
        <div className="flex">
            <div >
                <img className='rounded-3xl mx-10 my-4 min-w-96 max-w-96' src="/profile.png" alt='profile' />
            {/* <Image
                className='rounded-3xl mx-10 my-4'
                src="/profile.png"
                // fill={true}
                width={450}
                height={150}
                alt='profile' /> */}

            </div>

            <div className='my-4'>
                <h1 className='text-[9vw]  font-thin leading-none text-gray-300 text-start'>
                    LETS <br /> CONNECT
                </h1>
                <div className="flex">
                    <a className=' hover:text-gray-400 p-2 text-4xl cursor-pointer text-thin'>Linkedin</a>
                    <a className=' hover:text-gray-400 p-2 text-4xl cursor-pointer text-thin'>Github</a>
                    <a className=' hover:text-gray-400 p-2 text-4xl cursor-pointer text-thin'>Instagram</a>
                </div>
                <div className="flex gap-3">
                    <p className='text-gray-400 text-thin'>Email:  <a href='mailto:rutwikkashid000@gmail.com'>rutwikkashid000@gmail.com</a></p>
                    <p className='text-gray-400 text-thin'>Phone: +91 8149150448</p>

                    <p className='text-gray-400 text-thin'>Address: Pune, India</p>
                </div>
            </div>
        </div>
        <div className="px-8 flex justify-between">
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