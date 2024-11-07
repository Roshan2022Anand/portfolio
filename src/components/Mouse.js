"use client"
import React, { useEffect, useState } from 'react'

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

  return (
    <figure className='absolute -translate-x-1/2 -translate-y-1/2  rounded-full bg-[#FF4141] ' style={{
      pointerEvents: 'none',
      zIndex: -1,
      top: `${mouseY}px`,
      left: `${mouseX}px`
    }}>    </figure>
  )
}

export default Mouse