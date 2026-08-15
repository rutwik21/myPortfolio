'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

function CollabText() {
    const upScroll = useRef(null)
    const innerUpScroll = useRef(null)
    const innerUpScrollContent = useRef(null)

    // Desktop refs
    const dt1 = useRef(null)
    const dt2 = useRef(null)
    const dt3 = useRef(null)
    const dt4 = useRef(null)

    // Mobile refs
    const mt1 = useRef(null)
    const mt2 = useRef(null)
    const mt3 = useRef(null)
    const mt4 = useRef(null)
    const mt5 = useRef(null)
    const mt6 = useRef(null)
    const mt7 = useRef(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        // Shared curve-collapse animation (both breakpoints)
        const sharedTl = gsap.timeline({
            scrollTrigger: {
                trigger: upScroll.current,
                start: '0% 50%',
                end: '100% 50%',
                scrub: 1,
            }
        })
        sharedTl.to(innerUpScroll.current, { height: 0, marginTop: 0 }, 'a')
        sharedTl.to(innerUpScrollContent.current, { marginTop: '-100px' }, 'a')

        // Desktop text reveal
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: innerUpScrollContent.current,
                    start: 'top 60%',
                    end: '50% 50%',
                    scrub: 1,
                }
            })
            tl.to(dt1.current, { width: '100%', duration: 1 })
                .to(dt2.current, { width: '100%', duration: 1 })
                .to(dt3.current, { width: '100%', duration: 1 })
                .to(dt4.current, { width: '100%', duration: 1 })
        })

        // Mobile text reveal — chain all tweens sequentially on the timeline
        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: innerUpScrollContent.current,
                    start: 'top 80%',
                    end: '80% 50%',
                    scrub: 1,
                }
            })
            tl.to(mt1.current, { width: '100%', duration: 1 })
                .to(mt5.current, { width: '100%', duration: 1 })
                .to(mt6.current, { width: '100%', duration: 1 })
                .to(mt2.current, { width: '100%', duration: 1 })
                .to(mt7.current, { width: '100%', duration: 1 })
                .to(mt3.current, { width: '100%', duration: 1 })
                .to(mt4.current, { width: '100%', duration: 1 })
        })
    })

    return (
        <section className='relative md:h-svh h-[80svh] bg-black overflow-hidden border-b border-neutral-900'>
            <div ref={upScroll} className='w-full border-0 h-[100px] overflow-hidden bg-black mt-[-100px] relative'>
                <div ref={innerUpScroll} className='absolute left-[50%] w-[150%] h-[750%] bg-neutral-950 rounded-[50%] translate-x-[-50%] border-t border-sky-500/20 shadow-[0_-10px_30px_rgba(56,189,248,0.1)]'>
                </div>
            </div>

            <div ref={innerUpScrollContent} className='h-full border-0 text-white bg-neutral-950 relative flex items-center justify-center w-full overflow-hidden px-6'>
                {/* Ghost text — desktop layout */}
                <div className='hidden md:block absolute mt-20 left-[8%] opacity-20'>
                    <h1 className='font-extrabold text-[3vw] leading-tight text-neutral-400'>Great projects are born from great collaboration.</h1>
                    <br />
                    <h1 className='font-extrabold text-[3vw] leading-tight text-neutral-400'>I value open communication and teamwork,</h1>
                    <br />
                    <h1 className='font-extrabold text-[3vw] leading-tight text-neutral-400'>working closely with clients and stakeholders to</h1>
                    <br />
                    <h1 className='font-extrabold text-[3vw] leading-tight text-neutral-400'>turn visions into reality.</h1>
                </div>

                {/* Ghost text — mobile layout (matches mobile overlay line breaks) */}
                <div className='md:hidden absolute mt-20 left-[8%] opacity-20'>
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>Great projects are born from</h1>
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>great collaboration.</h1>
                    <br />
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>I value open communication</h1>
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>and teamwork,</h1>
                    <br />
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>working closely with clients</h1>
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>and stakeholders to</h1>
                    <br />
                    <h1 className='font-extrabold text-[5.5vw] leading-tight text-neutral-400'>turn visions into reality.</h1>
                </div>

                {/* Desktop text overlay — uses dt1–dt4 refs */}
                <div className='hidden md:block absolute mt-20 left-[8%] opacity-100'>
                    <h1 ref={dt1} className='w-0 text-nowrap overflow-hidden font-extrabold text-[3vw] leading-tight text-white'>Great projects are born from great collaboration.</h1>
                    <br />
                    <h1 ref={dt2} className='w-0 text-nowrap overflow-hidden font-extrabold text-[3vw] leading-tight text-white'>I value open communication and teamwork,</h1>
                    <br />
                    <h1 ref={dt3} className='w-0 text-nowrap overflow-hidden font-extrabold text-[3vw] leading-tight text-white'>working closely with clients and stakeholders to</h1>
                    <br />
                    <h1 ref={dt4} className='w-0 text-nowrap overflow-hidden font-extrabold text-[3vw] leading-tight text-white'>turn visions into reality.</h1>
                </div>

                {/* Mobile text overlay — uses mt1–mt7 refs */}
                <div className='md:hidden absolute mt-20 left-[8%] opacity-100'>
                    <h1 ref={mt1} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>Great projects are born from</h1>
                    <h1 ref={mt5} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>great collaboration.</h1>
                    <br />
                    <h1 ref={mt6} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>I value open communication</h1>
                    <h1 ref={mt2} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>and teamwork,</h1>
                    <br />
                    <h1 ref={mt7} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>working closely with clients</h1>
                    <h1 ref={mt3} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>and stakeholders to</h1>
                    <br />
                    <h1 ref={mt4} className='w-0 text-nowrap overflow-hidden font-extrabold text-[5.5vw] leading-tight text-white'>turn visions into reality.</h1>
                </div>
            </div>
        </section>
    )
}

export default CollabText