import React, { useState } from 'react'
import gsap from 'gsap'
const IntroSection = () => {

    return (
        <section className='intro-section flex justify-between items-center ' >
            <article className='w-1/2  z-10'>
                <p>Hi,i'm <span className='text-accentTwo'>Roshan Anand</span>.</p>
                <p className='opacity-90 border-b-2 border-b-accentOne w-fit'>I'm a web developer</p>
            </article>
            <article></article>
        </section>
    )
}

export default IntroSection