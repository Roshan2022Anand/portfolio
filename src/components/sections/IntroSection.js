import React, { useState } from 'react'
import gsap from 'gsap'
const IntroSection = () => {

    return (
        <section className='intro-section flex  items-center px-2 py-2 ' >
            <article className='grow  z-10'>
                <p>{"Hi,i'm"} <span className='text-accentTwo'>Roshan Anand</span>.</p>
                <p className='opacity-90 border-b-2 border-b-accentOne w-fit'>{"I'm a web developer"}</p>
            </article>
            <article className='w-1/2 h-full rounded-lg flex justify-center items-center relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-1/2 h-full bg-accentTwo'></div>
                <div className='rounded-full w-1/2 h-20 z-[2] bg-primary'></div>
            </article>
        </section>
    )
}

export default IntroSection