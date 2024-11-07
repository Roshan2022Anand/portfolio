"use client"
import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import IntroSection from '@/components/IntroSection'
import ContactSection from '@/components/ContactSection'
import ProfileSection from '@/components/ProfileSection'
import TechSection from '@/components/TechSection'
import Mouse from '@/components/Mouse'
const page = () => {


  // const initAnimation = () => {
  //   gsap.from('.intro-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  //   gsap.from('.tech-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  //   gsap.from('.profile-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  //   gsap.from('.nav-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  // }


  return (
    <main >
      <IntroSection />
      <ContactSection />
      <ProfileSection />
      <TechSection />
    </main>

  )
}

export default page

