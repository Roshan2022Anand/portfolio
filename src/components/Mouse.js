"use client"
import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Mouse = () => {
  const [posX, setposX] = useState(-10);
  const [posY, setposY] = useState(-10);

  useEffect(() => {
    const moveDivs = (e) => {
      setposX(e.clientX);
      setposY(e.clientY);
    }
    window.addEventListener("mousemove", moveDivs);
    return () => {
      window.removeEventListener("mousemove", moveDivs);
    }
  }, [])


  return (<>
  <div className='absolute z-[10] w-[10px] h-[10px] bg-accentTwo rounded-2xl' style={{
    top: posY,
    left: posX,
  }}></div>
    <div className='mouse' style={{
      top: posY,
      left: posX,
    }}></div></>
  )
}

export default Mouse