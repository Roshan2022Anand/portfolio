"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [navPosX, setnavPosX] = useState("-50%");

  return (
    <section className='nav-bar md:my-[5%]' onMouseLeave={() => { setnavPosX("-50%") }}>
      <p onMouseEnter={() => { setnavPosX("1%") }} ><Link href="#">About</Link></p>
      <p onMouseEnter={() => { setnavPosX("33%") }} ><Link href="#">Projects</Link></p>
      <p onMouseEnter={() => { setnavPosX("66%") }} ><Link href="#">Work</Link></p>

      <div className='absolute top-1/2 -translate-y-1/2 left-0 w-[33%] h-[80%] border-2 border-accentOne z-[-1]' style={{
        left: navPosX,
        transition: 'all 0.5s ease'
      }}></div>
    </section>
  )
}

export default NavBar