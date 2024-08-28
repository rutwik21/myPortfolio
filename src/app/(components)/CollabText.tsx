'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

function CollabText() {
    const upScroll = useRef(null);
    const innerUpScroll = useRef(null);
    const innerUpScrollContent = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);
    const text4 = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: upScroll.current,
                start: '0% 50%',
                end: '100% 50%',
                scrub: 1,
                // markers: true
            }
        });

        tl.to(innerUpScroll.current, {
            height:0,
            marginTop: 0,
        },'a')
        tl.to(innerUpScrollContent.current, {
            // height:0,
            marginTop: '-100px',
        }, 'a')
        
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: innerUpScrollContent.current,
                start: 'top 60%',
                end: '50% 50%',
                scrub: 1,
                
            }
        }); 

        tl1.to(text1.current, {
            width: '100%',
            duration: 4000,
        })
        tl1.to(text2.current, {
            duration: 4000,
            width: '100%',
            delay: 0.6,
        })
        tl1.to(text3.current, {
            duration: 4000,
            width: '100%',
            delay: 1.2,
        })
        tl1.to(text4.current, {
            duration: 4000,
            width: '100%',
            delay: 1.8,
        })
    })
  return (
    <div className='h-svh '>
        <div ref={upScroll} className='w-[100%] border-0 h-[100px] overflow-hidden bg-transparent mt-[-100px] relative'>
            <div ref={innerUpScroll} className='absolute left-[50%] w-[150%] h-[750%] bg-black rounded-[50%] translate-x-[-50%]'>
                
            </div>
        </div>
        <div ref={innerUpScrollContent} className='h-full border-0  text-white bg-black relative flex align-middle w-[100%] overflow-hidden'>
            <div className='absolute mt-36   left-[10%] opacity-[0.2]  '>
                <h1 className='font-semibold text-[3vw]' >Great projects are born from great collaboration.</h1> 
                <br />
                <h1 className='font-semibold text-[3vw]' >I value open communication and teamwork,</h1> 
                <br />
                <h1 className='font-semibold text-[3vw]' >working closely with clients and stakeholders to</h1> 
                <br />
                <h1 className='font-semibold text-[3vw]' >turn visions into reality.</h1> 
                <br />
            </div>
            <div  className='absolute mt-36  left-[10%] opacity-[1]  '>
                <h1 ref={text1} className='w-0 text-nowrap overflow-hidden font-semibold text-[3vw]'>Great projects are born from great collaboration.</h1>
                <br />
                <h1 ref={text2} className='w-0 text-nowrap overflow-hidden font-semibold text-[3vw]' >I value open communication and teamwork,</h1> 
                <br />
                <h1 ref={text3} className='w-0 text-nowrap overflow-hidden font-semibold text-[3vw]' >working closely with clients and stakeholders to</h1> 
                <br />
                <h1 ref={text4} className='w-0 text-nowrap overflow-hidden font-semibold text-[3vw]' >turn visions into reality.</h1> 
                <br />
            </div>
        </div>
    </div>
  )
}

export default CollabText