'use client';
import gsap from 'gsap';
import React, { useEffect } from 'react'

function Cursor() {

    useEffect(() =>{
        const cursor = document.getElementById('cursor');
        const cursorText = document.querySelector('.cursor-text');
        const links = document.querySelectorAll('a');

        const onMouseMove = (e:MouseEvent) => {
            gsap.to(cursor,{x: e.clientX, y: e.clientY});
        };
        
        const onMouseEnterLink = (e:MouseEvent) => {
            const link = e.target;
            // @ts-ignore
            if(link?.classList?.contains('view')){
                gsap.to(cursor,{scale:4});
                //@ts-ignore
                cursorText.style.display = 'block';
            }else{
                gsap.to(cursor,{scale:4});
            }
        };
        
        const onMouseLeaveLink = () => {
                gsap.to(cursor,{scale:1});
                //@ts-ignore
                cursorText.style.display = 'none';
        };

        document.addEventListener('mousemove', onMouseMove);
        links.forEach(link =>{
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        })
    })
    
  return (
    <div className='cursor' id='cursor'>
        <span className='cursor-text'>View</span>
    </div>
  )
}

export default Cursor