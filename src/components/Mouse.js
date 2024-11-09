"use client"
import React, { useEffect, useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Mouse = () => {
  const [mouseX, setmouseX] = useState(10);
  const [mouseY, setmouseY] = useState(10);
  useEffect(() => {
    const moveMouse = (e) => {
      setmouseX(e.x);
      setmouseY(e.y);
    }

    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    }
  }, [])

  useGSAP(() => {
    gsap.to('.light', {
      boxShadow: `1px 1px 50px 20px var(--accent-one-color)`,
      duration: 2,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <section className='light fixed bg-[var(--accent-one-color)] w-[5px] h-[5px] rounded-full top-1/2 left-1/2 z-[1] blur-xl' style={{
      boxShadow: `1px 1px 10px 10px var(--accent-one-color)`,
      top: `${mouseY}px`,
      left: `${mouseX}px`,
      transform: `translate(-50%,-50%)`

    }}>
    </section >
  )
}

export default Mouse