import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'
// --primary - color: #0D0D0D;
// --sec - color: #2A2A2A;
// --accent - one - color: #FFFFFF;
// --accent - two - color: #FF4141;
const IntroSection = () => {
    useGSAP(() => {
        gsap.to('.light', {
            boxShadow: `-10px -10px 1000px 40px var(--accent-one-color)`,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
    })
    return (
        <section className='intro-section flex justify-between items-center bg-transparent overflow-hidden' >
            <article className='w-1/2  z-10'>
                <p>Hi,i'm Roshan Anand.</p>
                <p className='opacity-70'>I'm a web developer</p>
            </article>
            <article className='relative flex items-center justify-end h-fit '>
                <div className='light absolute bg-white w-[20px] h-[20px] top-1/2 left-1/2 z-[1]' style={{
                    // boxShadow: `-10px -10px 1000px ${shadow}px var(--sec-color)`,
                    boxShadow: `-10px -10px 1000px 10px var(--accent-one-color)`,
                }}></div>
                <img src='\profile.jpg' className='z-10 w-[20vw] h-fit rounded-full' />
            </article>
        </section>
    )
}

export default IntroSection