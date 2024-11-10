"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [navPosX, setnavPosX] = useState("-50%");
  const [activeLink, setactiveLink] = useState("-50%");
  const [hoverLink, sethoverLink] = useState("");

  useEffect(() => {
    if (hoverLink !== "") {
      setnavPosX(hoverLink);
      return
    }
    setnavPosX(activeLink)
  }, [activeLink, hoverLink])

  return (
    <section className='nav-bar md:my-[5%]' onMouseLeave={() => { sethoverLink(""); }}>
      <p onMouseEnter={() => { sethoverLink("1%") }} onClick={() => { setactiveLink("0%") }}><Link href="#">About</Link></p>
      <p onMouseEnter={() => { sethoverLink("33%") }} onClick={() => { setactiveLink("33%") }}><Link href="#">Projects</Link></p>
      <p onMouseEnter={() => { sethoverLink("66%") }} onClick={() => { setactiveLink("66%") }}><Link href="#">Work</Link></p>

      <div className='absolute top-1/2 -translate-y-1/2 left-0 w-[33%] h-[80%] bg-secondary z-[-1]' style={{
        left: navPosX,
        transition: 'all 0.5s ease'
      }}></div>
    </section>
  )
}

export default NavBar