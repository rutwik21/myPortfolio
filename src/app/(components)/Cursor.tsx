'use client';
import gsap from 'gsap';
import React, { useEffect } from 'react'

function Cursor() {

    useEffect(() =>{
        const cursor = document.getElementById('cursor');
        const cursorText = document.querySelector('.cursor-text');
        const links = document.querySelectorAll('a');
        const imgs = document.querySelectorAll('img');

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
        const onMouseEnterImg = (e:MouseEvent) => {
            const link = e.target;
            // @ts-ignore
            gsap.to(cursor,{display:'none'});
            
        };
        
        const onMouseLeaveImg = () => {
                gsap.to(cursor,{display:'block'});
        };

        document.addEventListener('mousemove', onMouseMove);
        links.forEach(link =>{
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });
        imgs.forEach(img =>{
            img.addEventListener('mouseenter', onMouseEnterImg);
            img.addEventListener('mouseleave', onMouseLeaveImg);
        })
    })
    
  return (
    <div className=' hidden lg:block'>
        <div className='cursor' id='cursor'>
            <span className='cursor-text'>View</span>
        </div>
    </div>
  )
}

export default Cursor