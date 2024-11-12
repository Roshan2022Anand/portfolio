"use client"
import React, { useEffect, useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Mouse = () => {

  useEffect(() => {
    const moveDivs = (e) => {
      document.querySelectorAll('.moveing-div').forEach((div, i) => {
        gsap.to(div, {
          top: `${e.y}px`,
          left: `${e.x}px`,
          duration: (i+1)/2 * 0.2,
        })
      })
    }
    window.addEventListener("mousemove", moveDivs);
    return () => {
      window.removeEventListener("mousemove", moveDivs);
    }
  }, [])


  let divs = [];
  for (let i = 1; i <10; i++) {    
    divs.push(<div key={i} className='moveing-div absolute rounded-full top-1/2 left-1/2 w-[30px] h-[30px] bg-accentTwo -translate-x-1/2 -translate-y-1/2 blur-[8px]' style={{
      scale:1-`0.${i}`,
      boxShadow:"0px 0px 15px 5px var(--accent-two-color)"
    }}></div>)
  }

  return (<section className='z-[1]' >{divs}</section >)
}

export default Mouse